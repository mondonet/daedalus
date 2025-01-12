import path from 'path';
import { Application } from 'spectron';
import {
  BeforeAll,
  Before,
  After,
  AfterAll,
  setDefaultTimeout,
} from 'cucumber';
import electronPath from 'electron';
import { TEST } from '../../../../source/common/types/environment.types';
import {
  generateScreenshotFilePath,
  getTestNameFromTestFile,
  saveScreenshot,
} from '../helpers/screenshot';
import { refreshClient } from '../helpers/app-helpers';

/* eslint-disable consistent-return */

const context = {};
const DEFAULT_TIMEOUT = 20000;
let scenariosCount = 0;

const printMainProcessLogs = () =>
  context.app.client.getMainProcessLogs().then(logs => {
    // eslint-disable-next-line no-console
    console.log('========= DAEDALUS LOGS =========');
    // eslint-disable-next-line no-console
    logs.forEach(log => console.log(log));
    // eslint-disable-next-line no-console
    console.log('=================================');
    return true;
  });

const startApp = async () => {
  const app = new Application({
    path: electronPath,
    args: ['./dist/main/index.js'],
    requireName: 'spectronRequire',
    env: Object.assign({}, process.env, {
      NODE_ENV: TEST,
    }),
    waitTimeout: DEFAULT_TIMEOUT,
    chromeDriverLogPath: path.join(
      __dirname,
      '../../../../logs/chrome-driver.log'
    ),
    webdriverLogPath: path.join(__dirname, '../../../../logs/webdriver'),
  });
  await app.start();
  await app.client.waitUntilWindowLoaded();
  return app;
};

// The cucumber timeout should be high (and never reached in best case)
// because the errors thrown by webdriver.io timeouts are more descriptive
// and helpful than "this step timed out after 5 seconds" messages
setDefaultTimeout(DEFAULT_TIMEOUT + 1000);

// Boot up the electron app before all features
BeforeAll({ timeout: 5 * 60 * 1000 }, async () => {
  context.app = await startApp();
});

// Make the electron app accessible in each scenario context
Before({ timeout: DEFAULT_TIMEOUT * 2 }, async function() {
  this.app = context.app;
  this.client = context.app.client;
  this.browserWindow = context.app.browserWindow;

  // Set timeouts of various operations:

  // Determines when to interrupt a script that is being evaluated.
  this.client.timeouts('script', DEFAULT_TIMEOUT);
  // Provides the timeout limit used to interrupt navigation of the browsing context.
  this.client.timeouts('pageLoad', DEFAULT_TIMEOUT);
  // Do not set 'implicit' timeout here because of this issue:
  // https://github.com/webdriverio/webdriverio/issues/974

  // Reset backend
  await this.client.executeAsync(done => {
    const resetBackend = () => {
      if (daedalus.stores.networkStatus.isConnected) {
        daedalus.api.ada
          .testReset()
          .then(daedalus.api.localStorage.reset)
          .then(done)
          .catch(error => {
            throw error;
          });
      } else {
        setTimeout(resetBackend, 50);
      }
    };
    resetBackend();
  });

  // Load fresh root url with test environment for each test case
  await refreshClient(this.client);

  // Ensure that frontend is synced and ready before test case
  await this.client.executeAsync(done => {
    const waitUntilSyncedAndReady = () => {
      if (daedalus.stores.networkStatus.isSynced) {
        done();
      } else {
        setTimeout(waitUntilSyncedAndReady, 50);
      }
    };
    waitUntilSyncedAndReady();
  });
});

// this ensures that the spectron instance of the app restarts
// after the node update acceptance test shuts it down via 'kill-process'
// eslint-disable-next-line prefer-arrow-callback
After({ tags: '@restartApp' }, async function() {
  context.app = await startApp();
});

// this ensures that the reset-backend call successfully executes
// after the app version difference test sets the app to disconnected state
// eslint-disable-next-line prefer-arrow-callback
After({ tags: '@reconnectApp' }, async function() {
  await this.client.executeAsync(done => {
    daedalus.api.ada
      .setSubscriptionStatus(null)
      .then(() => daedalus.stores.networkStatus._updateNetworkStatus())
      .then(done)
      .catch(error => done(error));
  });
});

// eslint-disable-next-line prefer-arrow-callback
After(async function({ sourceLocation, result }) {
  scenariosCount++;
  if (result.status === 'failed') {
    const testName = getTestNameFromTestFile(sourceLocation.uri);
    const file = generateScreenshotFilePath(testName);
    await saveScreenshot(context.app, file);
    await printMainProcessLogs();
  }
});

// eslint-disable-next-line prefer-arrow-callback
AfterAll(async function() {
  const allWindowsClosed = (await context.app.client.getWindowCount()) === 0;
  if (allWindowsClosed || !context.app.running) return;
  if (scenariosCount === 0) {
    await printMainProcessLogs();
  }
  if (process.env.KEEP_APP_AFTER_TESTS === 'true') {
    // eslint-disable-next-line no-console
    console.log(
      'Keeping the app running since KEEP_APP_AFTER_TESTS env var is true'
    );
    return;
  }
  return context.app.stop();
});
