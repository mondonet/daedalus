Changelog
=========

## vNext

### Features

- Implemented "Delegation center screen" UI ([PR 1440](https://github.com/input-output-hk/daedalus/pull/1440))
- Implemented "Delegation Setup wizard" steps 0 & 1 UI ([PR 1416](https://github.com/input-output-hk/daedalus/pull/1416)), [PR 1442](https://github.com/input-output-hk/daedalus/pull/1442))
- Implemented "Current and Previous Epochs screen" UI ([PR 1418](https://github.com/input-output-hk/daedalus/pull/1418))
- Added new application menu item "Help and Support" with "GPU Safe Mode", "Download Logs", "Support Request" and "Known Issues" options ([PR 1382](https://github.com/input-output-hk/daedalus/pull/1382))
- Implemented alternative update path for manual updates ([PR 1410](https://github.com/input-output-hk/daedalus/pull/1410), [PR 1423](https://github.com/input-output-hk/daedalus/pull/1423))
- Implemented "Legacy wallet notification" UI ([PR 1409](https://github.com/input-output-hk/daedalus/pull/1409))
- Implemented "Stake pool" UI ([PR 1397](https://github.com/input-output-hk/daedalus/pull/1397), [PR 1412](https://github.com/input-output-hk/daedalus/pull/1412))
- Implemented "Staking rewards" UI ([PR 1403](https://github.com/input-output-hk/daedalus/pull/1403))
- Implemented "Decentralization progress" UI ([PR 1394](https://github.com/input-output-hk/daedalus/pull/1394))
- Implemented "Staking" screens navigation ([PR 1395](https://github.com/input-output-hk/daedalus/pull/1395), [PR 1400](https://github.com/input-output-hk/daedalus/pull/1400))
- Implemented timestamp on paper wallet PDF's ([PR 1385](https://github.com/input-output-hk/daedalus/pull/1385), [PR 1400](https://github.com/input-output-hk/daedalus/pull/1400))
- Implemented "Start of decentralisation notification" UI ([PR 1390](https://github.com/input-output-hk/daedalus/pull/1390))
- Implemented new Network Status dialog design ([PR 1370](https://github.com/input-output-hk/daedalus/pull/1370), [PR 1402](https://github.com/input-output-hk/daedalus/pull/1402), [PR 1404](https://github.com/input-output-hk/daedalus/pull/1404))
- Implemented the wallet UTxO statistics screen ([PR 1353](https://github.com/input-output-hk/daedalus/pull/1353))
- Implemented scroll error message into view ([PR 1383](https://github.com/input-output-hk/daedalus/pull/1383))
- Implemented new Block-consolidation status design ([PR 1377](https://github.com/input-output-hk/daedalus/pull/1377))
- Implemented new About Us dialog design with a close button ([PR 1369](https://github.com/input-output-hk/daedalus/pull/1369))
- Implemented "In progress" download logs notification ([PR 1341](https://github.com/input-output-hk/daedalus/pull/1341))
- Implemented status icons on the "Loading" screens ([PR 1325](https://github.com/input-output-hk/daedalus/pull/1325), [PR 1365](https://github.com/input-output-hk/daedalus/pull/1365))
- Implemented detection for system locale on Daedalus start when user hasn't yet selected language preference so that locale defaults to Japanese if system locale is Japan/Japanese, otherwise defaults to English ([PR 1348](https://github.com/input-output-hk/daedalus/pull/1348))

### Fixes

- Removes files pushed without running Prettier ([PR 1445](https://github.com/input-output-hk/daedalus/pull/1445))
- Improved Stake pool tooltip positioning ([PR 1429](https://github.com/input-output-hk/daedalus/pull/1429))
- Moved the Tooltip logic from `StakePools.js` into `StakePoolsList.js` ([PR 1431](https://github.com/input-output-hk/daedalus/pull/1431))
- Added fine adjustments to the Stake Pools screen. ([PR 1420](https://github.com/input-output-hk/daedalus/pull/1420))
- Fixed the Block consolidation status screen not fully shown in minimized mode when the Japanese language is selected ([PR 1416](https://github.com/input-output-hk/daedalus/pull/1416))
- Fixed "marked" dependency vulnerability warning ([PR 1414](https://github.com/input-output-hk/daedalus/pull/1414))
- Fixed addresses not visible on Receive screen when Password is set for the wallet in minimized mode ([PR 1407](https://github.com/input-output-hk/daedalus/pull/1407))
- Fixed truncated "Add Wallet" screen while wallet is restored ([PR 1405](https://github.com/input-output-hk/daedalus/pull/1405))
- Fixed spending password being asked on Receive screen when clicking on "Copy address" link. ([PR 1392](https://github.com/input-output-hk/daedalus/pull/1392))
- Fixed EKG port collision while developing on Linux ([PR 1393](https://github.com/input-output-hk/daedalus/pull/1393))
- Fixed file extension of Daedalus logs ([PR 1381](https://github.com/input-output-hk/daedalus/pull/1381), [PR 1384](https://github.com/input-output-hk/daedalus/pull/1384))
- Fixed password validation rules for all languages ([PR 1354](https://github.com/input-output-hk/daedalus/pull/1354))
- Fixed the routing logic which allowed the display of "Settings" screens before the wallet data is fully loaded ([PR 1373](https://github.com/input-output-hk/daedalus/pull/1373))
- Fixed the "download logs" link position in Japanese version of the "Support" screen ([PR 1372](https://github.com/input-output-hk/daedalus/pull/1372))

### Chores

- Updated the list of contributors on the "About" screen ([PR 1450](https://github.com/input-output-hk/daedalus/pull/1450))
- Improved switching of the application menu screens ([PR 1419](https://github.com/input-output-hk/daedalus/pull/1419))
- Remove legacy references to report server ([PR 1425](https://github.com/input-output-hk/daedalus/pull/1425))
- Renamed Network Status to Daedalus Diagnostics ([PR 1408](https://github.com/input-output-hk/daedalus/pull/1408))
- Updated React-Polymorph to version 0.8.6 ([PR 1396](https://github.com/input-output-hk/daedalus/pull/1396))
- Added "createTheme" utility function for rapidly generating new themes for the UI ([PR 1371](https://github.com/input-output-hk/daedalus/pull/1371))
- Enabled theme and language selection in Storybook ([PR 1408](https://github.com/input-output-hk/daedalus/pull/1408))
- Removed legacy references to npm in favour of yarn ([PR 1399](https://github.com/input-output-hk/daedalus/pull/1399), [PR 1402](https://github.com/input-output-hk/daedalus/pull/1402))
- Setup storybook build script to deploy previews for the QA team to Netlify ([1391](https://github.com/input-output-hk/daedalus/pull/1391))
- Added unit tests for mnemonic generation and validation ([PR 1379](https://github.com/input-output-hk/daedalus/pull/1379))
- Simplified the test setup ([PR 1378](https://github.com/input-output-hk/daedalus/pull/1378))
- Updated PR template ([PR 1376](https://github.com/input-output-hk/daedalus/pull/1376))
- Refactored store async functions to use mobx runInAction calls ([PR 1367](https://github.com/input-output-hk/daedalus/pull/1367))
- Refactored the consolidation status screen epoch calculation ([PR 1339](https://github.com/input-output-hk/daedalus/pull/1339))
- Removed the `REPORT_URL` env variable ([PR 1338](https://github.com/input-output-hk/daedalus/pull/1338))
- Improved acceptance test coverage for the Loading screen, Block Consolidation screen, and fixed a bug common to multiple other tests which use the mnemonic word selector to identify and click mnemonics ([PR 1318](https://github.com/input-output-hk/daedalus/pull/1318))
- Implemented `prettier` formatting tool and set up automation for basic maintainance tasks ([PR 1335](https://github.com/input-output-hk/daedalus/pull/1335), [PR 1347](https://github.com/input-output-hk/daedalus/pull/1347), [PR 1352](https://github.com/input-output-hk/daedalus/pull/1352), [PR 1375](https://github.com/input-output-hk/daedalus/pull/1375))
- Replaced "Ada" with "ada" ([PR 1317](https://github.com/input-output-hk/daedalus/pull/1317), [PR 1336](https://github.com/input-output-hk/daedalus/pull/1336))
- Improved the internal IPC communication ([PR 1332](https://github.com/input-output-hk/daedalus/pull/1332), [PR 1368](https://github.com/input-output-hk/daedalus/pull/1368))
- Improved Webpack 4 build performance ([PR 1320](https://github.com/input-output-hk/daedalus/pull/1320))
- Improved error messages for connecting screen ([PR 1344](https://github.com/input-output-hk/daedalus/pull/1344))

## 0.13.1

### Fixes

- Improve text on the Support screen ([PR 1361](https://github.com/input-output-hk/daedalus/pull/1361))
- Fixed Daedalus log file rotation ([PR 1358](https://github.com/input-output-hk/daedalus/pull/1358))

## 0.13.0

### Features

- New validation message for transactions which are to big in data size ([PR 1308](https://github.com/input-output-hk/daedalus/pull/1308), [PR 1331](https://github.com/input-output-hk/daedalus/pull/1331))
- Structured logging for Daedalus in JSON format, matching the structured logging format used in Cardano SL ([PR 1299](https://github.com/input-output-hk/daedalus/pull/1299))
- Additional instructions for paper wallet certificate creation ([PR 1309](https://github.com/input-output-hk/daedalus/pull/1309))
- Performant rendering of big lists using virtual lists, applied to lists of transactions and addresses ([PR 1276](https://github.com/input-output-hk/daedalus/pull/1276), [PR 1303](https://github.com/input-output-hk/daedalus/pull/1303), [PR 1305](https://github.com/input-output-hk/daedalus/pull/1305), [PR 1306](https://github.com/input-output-hk/daedalus/pull/1306), [PR 1312](https://github.com/input-output-hk/daedalus/pull/1312), [PR 1313](https://github.com/input-output-hk/daedalus/pull/1313), [PR 1340](https://github.com/input-output-hk/daedalus/pull/1340))
- "System-info.json" file saved in the public log folder, containing the system specification of the user's computer running Daedalus ([PR 1292](https://github.com/input-output-hk/daedalus/pull/1292))
- Block storage consolidation status screen, available from the application menu ([PR 1275](https://github.com/input-output-hk/daedalus/pull/1275), [PR 1294](https://github.com/input-output-hk/daedalus/pull/1294))
- Application menu in English and Japanese ([PR 1262](https://github.com/input-output-hk/daedalus/pull/1262), [PR 1296](https://github.com/input-output-hk/daedalus/pull/1296))
- Notification for log download completion ([PR 1228](https://github.com/input-output-hk/daedalus/pull/1228))
- Handling low disk space operation, including warning message and stopping Cardano node to prevent data corruption ([PR 1157](https://github.com/input-output-hk/daedalus/pull/1157))
- Improved clock synchronisation checks (NTP) ([PR 1258](https://github.com/input-output-hk/daedalus/pull/1258), [PR 1319](https://github.com/input-output-hk/daedalus/pull/1319))
- Support for "frontend-only" mode ([PR 1241](https://github.com/input-output-hk/daedalus/pull/1241), [PR 1260](https://github.com/input-output-hk/daedalus/pull/1260))
- Improved user experience for multiple running Daedalus instances by replacing "Daedalus is already running" dialog with focusing of the already running Daedalus instance ([PR 1229](https://github.com/input-output-hk/daedalus/pull/1229))
- Replaced in-app support request with links to support page ([PR 1199](https://github.com/input-output-hk/daedalus/pull/1199), [PR 1331](https://github.com/input-output-hk/daedalus/pull/1331))
- Improved user experience for inline editing fields (like wallet renaming) ([PR 1231](https://github.com/input-output-hk/daedalus/pull/1231))
- Added a BESTPRACTICES.md document containing rules and recommendations for writing better JavaScript and CSS ([PR 1233](https://github.com/input-output-hk/daedalus/pull/1233))
- Refactoring to disable Node JS integration in Electron's rendering processes ([PR 1099](https://github.com/input-output-hk/daedalus/pull/1099/commits))
- Daedalus Windows installer/uninstaller multi-language support and English and Japanese translations ([PR 1287](https://github.com/input-output-hk/daedalus/pull/1287), [PR 1298](https://github.com/input-output-hk/daedalus/pull/1298), [PR 1322](https://github.com/input-output-hk/daedalus/pull/1322))

### Fixes

- Fixed "Daedalus" state directory on "Staging" and "Testnet" builds ([PR 1316](https://github.com/input-output-hk/daedalus/pull/1316))
- Fixed Dev-Tools initialization in development mode ([PR 1302](https://github.com/input-output-hk/daedalus/pull/1302))
- Fixed text selection issues (disabled drag and drop of selected text and enabled unselect option) ([PR 1289](https://github.com/input-output-hk/daedalus/pull/1289))
- Disabled the default behavior of the context menu following a right click for non-input elements ([PR 1281](https://github.com/input-output-hk/daedalus/pull/1281))
- Initial setup of language locale and terms of use available before Cardano node is connected to network ([PR 1279](https://github.com/input-output-hk/daedalus/pull/1279), [PR 1284](https://github.com/input-output-hk/daedalus/pull/1284))
- Fixed `ps-list` issues which caused false detection of already running Daedalus instance ([PR 1266](https://github.com/input-output-hk/daedalus/pull/1266))
- Fixed `getTransactionHistory` API endpoint account index query parameter name ([PR 1255](https://github.com/input-output-hk/daedalus/pull/1255))
- Fixed issues with custom lock files by implementing "instance-lock" feature from Electron 3 ([PR 1229](https://github.com/input-output-hk/daedalus/pull/1229), [PR 1244](https://github.com/input-output-hk/daedalus/pull/1244))
- Fixed application reloading issues in the Ada Redemption page ([PR 1217](https://github.com/input-output-hk/daedalus/pull/1217))
- Fixed the contents of `/etc/nix/nix.conf` file listed as a part of Cardano setup in Daedalus README file ([PR 1215](https://github.com/input-output-hk/daedalus/pull/1215))
- Fixed the partly broken Flow setup ([PR 1124](https://github.com/input-output-hk/daedalus/pull/1124))
- Fixed failing apply-node-update test ([PR 1156](https://github.com/input-output-hk/daedalus/pull/1156))
- Removed antivirus notification which was presented during wallet restoration ([PR 1164](https://github.com/input-output-hk/daedalus/pull/1164))
- Fixed design implementations issues ([PR 1209](https://github.com/input-output-hk/daedalus/pull/1209))
- Fixed the flickering issue on "Network Status" screen syncing chart ([PR 1206](https://github.com/input-output-hk/daedalus/pull/1206))

### Chores

- Added support for newly introduced `UtxoNotEnoughFragmented` API error message ([PR 1297](https://github.com/input-output-hk/daedalus/pull/1297))
- Changed the behavior of "Network status" from screen to dialog ([PR 1286](https://github.com/input-output-hk/daedalus/pull/1286))
- Updated the list of contributors on the "About" screen ([PR 1282](https://github.com/input-output-hk/daedalus/pull/1282))
- Added more logging for API errors ([PR 1278](https://github.com/input-output-hk/daedalus/pull/1278)
- Removed node version check as nix shell is enforcing the version ([PR 1236](https://github.com/input-output-hk/daedalus/pull/1236))
- Fixed Daedalus shell to evaluate embedded variables properly ([PR 1235](https://github.com/input-output-hk/daedalus/pull/1235))
- Added `--rp` prefixed CSS variables to Daedalus themes to configure styles of React-Polymorph components and removed SimpleTheme imports previously used for React-Polymorph overrides in favor of using ThemeProvider's themeOverrides feature ([PR 1139](https://github.com/input-output-hk/daedalus/pull/1139))
- Changed API call logging level from `debug` to `info` ([PR 1183](https://github.com/input-output-hk/daedalus/pull/1183))
- Enabled Cardano Wallet API documentation server in development mode - reacheable on https://localhost:8091/docs/v1/index/ ([PR 1187](https://github.com/input-output-hk/daedalus/pull/1187))
- Updated application dependencies ([PR 1201](https://github.com/input-output-hk/daedalus/pull/1201), [PR 1216](https://github.com/input-output-hk/daedalus/pull/1216), [PR 1227](https://github.com/input-output-hk/daedalus/pull/1227), [PR 1251](https://github.com/input-output-hk/daedalus/pull/1251), [PR 1265](https://github.com/input-output-hk/daedalus/pull/1265))

## 0.12.1

### Fixes

- Fixed the transactions loading logic ([PR 1261](https://github.com/input-output-hk/daedalus/pull/1261), [PR 1267](https://github.com/input-output-hk/daedalus/pull/1267))
- Fixed the network block stalling logic in order to prevent showing "Network connection lost - reconnecting..." screen in case network block height is stalling while local block height is still increasing ([PR 1246](https://github.com/input-output-hk/daedalus/pull/1246))

## 0.12.0

### Features

- Implemented "Forbidden mnemonic" error message ([PR 1093](https://github.com/input-output-hk/daedalus/pull/1093), [PR 1100](https://github.com/input-output-hk/daedalus/pull/1100))
- Implemented extended error messages for transaction fee calculation failures ([PR 1111](https://github.com/input-output-hk/daedalus/pull/1111))
- Implemented forms submission on "Enter" key press ([PR 981](https://github.com/input-output-hk/daedalus/pull/981))
- Implemented Japanese "Terms of use" for the "Testnet" network ([PR 1097](https://github.com/input-output-hk/daedalus/pull/1097))
- Implemented lock-file mechanism which prevents multiple Daedalus instances from running against the same state directory and network ([PR 1113](https://github.com/input-output-hk/daedalus/pull/1113), [PR 1114](https://github.com/input-output-hk/daedalus/pull/1114), [PR 1121](https://github.com/input-output-hk/daedalus/pull/1121), [PR 1166](https://github.com/input-output-hk/daedalus/pull/1166))
- Implemented "New data layer migration" screen ([PR 1096](https://github.com/input-output-hk/daedalus/pull/1096))
- Implemented sending of `cert` and `key` with API requests in order to enable 2-way TLS authentication ([PR 1072](https://github.com/input-output-hk/daedalus/pull/1072))
- Implemented support for Cardano node "structured logging" ([PR 1092](https://github.com/input-output-hk/daedalus/pull/1092), [PR 1122](https://github.com/input-output-hk/daedalus/pull/1122))
- Implemented the IPC driven Cardano node / Daedalus communication ([PR 1075](https://github.com/input-output-hk/daedalus/pull/1075), [PR 1107](https://github.com/input-output-hk/daedalus/pull/1107), [PR 1109](https://github.com/input-output-hk/daedalus/pull/1109), [PR 1115](https://github.com/input-output-hk/daedalus/pull/1115), [PR 1118](https://github.com/input-output-hk/daedalus/pull/1118), [PR 1119](https://github.com/input-output-hk/daedalus/pull/1119), [PR 1162](https://github.com/input-output-hk/daedalus/pull/1162))
- Improved the loading UX ([PR 723](https://github.com/input-output-hk/daedalus/pull/723))
- Improved the NTP check handling ([PR 1086](https://github.com/input-output-hk/daedalus/pull/1086), [PR 1149](https://github.com/input-output-hk/daedalus/pull/1149), [PR 1158](https://github.com/input-output-hk/daedalus/pull/1158), [PR 1194](https://github.com/input-output-hk/daedalus/pull/1194), [PR 1213](https://github.com/input-output-hk/daedalus/pull/1213))
- Improved the transaction details text selection ([PR 1073](https://github.com/input-output-hk/daedalus/pull/1073), [PR 1095](https://github.com/input-output-hk/daedalus/pull/1095))
- Integrated Cardano V1 API endpoints ([PR 1018](https://github.com/input-output-hk/daedalus/pull/1018), [PR 1031](https://github.com/input-output-hk/daedalus/pull/1031), [PR 1037](https://github.com/input-output-hk/daedalus/pull/1037), [PR 1042](https://github.com/input-output-hk/daedalus/pull/1042), [PR 1045](https://github.com/input-output-hk/daedalus/pull/1045), [PR 1070](https://github.com/input-output-hk/daedalus/pull/1070), [PR 1078](https://github.com/input-output-hk/daedalus/pull/1078), [PR 1079](https://github.com/input-output-hk/daedalus/pull/1079), [PR 1080](https://github.com/input-output-hk/daedalus/pull/1080), [PR 1088](https://github.com/input-output-hk/daedalus/pull/1088), [PR 1220](https://github.com/input-output-hk/daedalus/pull/1220))
- Refactored and improved `NetworkStatus` store to use V1 API data ([PR 1081](https://github.com/input-output-hk/daedalus/pull/1081))

### Fixes

- Added support for non-Latin characters in spending password ([PR 1196](https://github.com/input-output-hk/daedalus/pull/1196))
- Fixed an issue which allowed to submit invalid form on the "Send" screen using an "enter" key ([PR 1002](https://github.com/input-output-hk/daedalus/pull/1002))
- Fixed an issue which caused the send bug report form to hang and not send the support request if the logs were downloaded before attempting to send the request ([PR 1176](https://github.com/input-output-hk/daedalus/pull/1176))
- Fixed an issue which would show a runtime JavaScript error in case Daedalus is not started using Launcher ([PR 1169](https://github.com/input-output-hk/daedalus/pull/1169))
- Fixed an issue which would trigger submission of the "Generate address" button on the "Receive" screen on right-mouse click ([PR 1082](https://github.com/input-output-hk/daedalus/pull/1082))
- Fixed an issue with the "Having Trouble Connecting" notification not showing up on the "Connection lost. Reconnecting..." screen ([PR 1112](https://github.com/input-output-hk/daedalus/pull/1112))
- Fixed broken "Export wallet to file" dialog and improved "Wallet settings" screen dialogs file structure and namings ([PR 998](https://github.com/input-output-hk/daedalus/pull/998))
- Fixed special buttons outline color ([PR 990](https://github.com/input-output-hk/daedalus/pull/990))
- Fixed the close button's hover state within the AntivirusRestaurationSlowdownNotification so it's full height ([PR 1131](https://github.com/input-output-hk/daedalus/pull/1131))
- Fixed uninstaller unicode issue ([PR 1116](https://github.com/input-output-hk/daedalus/pull/1116))
- Fixed window icon quality issue on Linux ([PR 1170](https://github.com/input-output-hk/daedalus/pull/1170))
- Implement design review fixes and improvements ([PR 1090](https://github.com/input-output-hk/daedalus/pull/1090))
- Pinned eslint-scope version via the yarn resolutions feature ([PR 1017](https://github.com/input-output-hk/daedalus/pull/1017))
- Prevented wallet data polling during wallet deletion ([PR 996](https://github.com/input-output-hk/daedalus/pull/996))
- Removed transaction status and number of confirmation during wallet restoration ([PR 1189](https://github.com/input-output-hk/daedalus/pull/1189))

### Chores

- Added acceptance tests for node update notification with apply and postpone update scenarios ([PR 977](https://github.com/input-output-hk/daedalus/pull/977))
- Added acceptance tests for maximum wallets limit ([PR 979](https://github.com/input-output-hk/daedalus/pull/979))
- Added acceptance tests for the "About" dialog ([PR 975](https://github.com/input-output-hk/daedalus/pull/975))
- Added acceptance tests for wallets, transactions and addresses ordering ([PR 976](https://github.com/input-output-hk/daedalus/pull/976))
- Added Daedalus and Cardano version to Daedalus log ([PR 1094](https://github.com/input-output-hk/daedalus/pull/1094), [PR 1137](https://github.com/input-output-hk/daedalus/pull/1137))
- Added dynamic prefix derivation to local storage keys used to store previous Cardano node PID and added dynamic derivation of Cardano node process names based on the current platform ([PR 1109](https://github.com/input-output-hk/daedalus/pull/1109))
- Added logging of "GPU-crashed" events ([PR 1083](https://github.com/input-output-hk/daedalus/pull/1083))
- Added `NETWORK` info to the application title bar ([PR 1174](https://github.com/input-output-hk/daedalus/pull/1174))
- Added screenshot recording of failed acceptance tests ([PR 1103](https://github.com/input-output-hk/daedalus/pull/1103))
- Added Storybook stories for the wallet screens ([942](https://github.com/input-output-hk/daedalus/pull/942))
- Disabled logging to `cardano-node.log` since it was not needed for the support and it was impacting performance ([PR 1027](https://github.com/input-output-hk/daedalus/pull/1027))
- Enabled Cardano node EKG for non-mainnet networks and made it accessible from the "Network status" screen ([PR 1188](https://github.com/input-output-hk/daedalus/pull/1188))
- Fixated all `npm` dependencies and update script names ([PR 1014](https://github.com/input-output-hk/daedalus/pull/1014))
- Fixed broken storybook ([PR 1041](https://github.com/input-output-hk/daedalus/pull/1041))
- Improved compress/download logs handling ([PR 995](https://github.com/input-output-hk/daedalus/pull/995))
- Integrated latest React-Polymorph features: render props architecture, theme composition, and a ThemeProvider HOC ([PR 950](https://github.com/input-output-hk/daedalus/pull/950))
- Integrated latest React-Polymorph with a fix for `NumericInput` component carrot positioning issues ([PR 1172](https://github.com/input-output-hk/daedalus/pull/1172))
- Made `nodelLogPath` entry in `launcher-config.yaml` optional ([PR 1027](https://github.com/input-output-hk/daedalus/pull/1027))
- Made `port` and `ca` of Ada Api configurable during runtime ([PR 1067](https://github.com/input-output-hk/daedalus/pull/1067))
- Removed all ETC specific files ([PR 1068](https://github.com/input-output-hk/daedalus/pull/1068), [PR 1108](https://github.com/input-output-hk/daedalus/pull/1108))
- Removed Wallet `export` and `import` features for the "Testnet" network ([PR 1168](https://github.com/input-output-hk/daedalus/pull/1168))
- Switched from `npm` to `yarn` ([PR 989](https://github.com/input-output-hk/daedalus/pull/989))

## 0.11.2

### Fixes

- Update Cardano SL revision to version `1.3.2` ([PR 1181](https://github.com/input-output-hk/daedalus/pull/1181))

## 0.11.1

### Features

- Added support for configurable Api port ([PR 992](https://github.com/input-output-hk/daedalus/pull/992))
- Added initial configuration for a testnet build of Daedalus ([PR 991](https://github.com/input-output-hk/daedalus/pull/991))

### Fixes

- Changed the information we are sending on support requests to the reporting server ([PR 1036](https://github.com/input-output-hk/daedalus/pull/1036))
- Fixed an issue on Windows where Daedalus couldn't start if the Windows username contained non-ASCII characters ([PR 1057](https://github.com/input-output-hk/daedalus/pull/1057))
- Fixed a issue with Electron which results in blank/white screen rendering on some OS/Graphics-card/Drivers combinations ([PR 1007](https://github.com/input-output-hk/daedalus/pull/1007))
- Fixed Daedalus icon scaling issues on Windows ([PR 1064](https://github.com/input-output-hk/daedalus/pull/1064))
- Implemented error dialog shown in case Daedalus is not started using Launcher ([PR 1054](https://github.com/input-output-hk/daedalus/pull/1054))
- Improved paper wallet certificate QR code compatibility ([PR 999](https://github.com/input-output-hk/daedalus/pull/999))
- Updated to `electon@1.7.16` to avoid the known vulnarability [CVE-2018-15685](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-15685) ([PR 1066](https://github.com/input-output-hk/daedalus/pull/1066))

### Chores

- Implemented `NETWORK` specific Cardano Blockchain Explorer links (Mainnet, Testnet, Staging) ([PR 1051](https://github.com/input-output-hk/daedalus/pull/1051))
- Improved network label in the Top bar ([PR 988](https://github.com/input-output-hk/daedalus/pull/988))
- Added "Testnet" label to paper wallet certificates which are not generated on the mainnet ([PR 1055](https://github.com/input-output-hk/daedalus/pull/1055))

## 0.11.0

### Features

- Implemented a switch instead of a link for "hide used" addresses on the Receive screen ([PR 935](https://github.com/input-output-hk/daedalus/pull/935))
- Added a notification for Windows users that using antivirus software might slow down wallet restoration ([PR 1020](https://github.com/input-output-hk/daedalus/pull/1020))

### Fixes

- Disabled dragging of static UI images elements ([PR 910](https://github.com/input-output-hk/daedalus/pull/910))
- Disabled webview tags to prevent XSS attacks ([PR 946](https://github.com/input-output-hk/daedalus/pull/946))
- Fixed 633 npm audit issues by upgrading dependencies ([PR 944](https://github.com/input-output-hk/daedalus/pull/944))
- Fixed a bug related to rendering of transactions with duplicated IDs ([PR 947](https://github.com/input-output-hk/daedalus/pull/947))
- Fixed broken translation on create wallet dialog ([PR 930](https://github.com/input-output-hk/daedalus/pull/930))
- Fixed huge build file sizes ([PR 886](https://github.com/input-output-hk/daedalus/pull/886))
- Fixed Linux Kanji characters support ([PR 971](https://github.com/input-output-hk/daedalus/pull/971))
- Fixed Storybook configuration issues ([PR 928](https://github.com/input-output-hk/daedalus/pull/928))
- Fixed text wrapping within wallet navigation tabs ([PR 911](https://github.com/input-output-hk/daedalus/pull/911))
- Reduced resource usage ([PR 886](https://github.com/input-output-hk/daedalus/pull/886))
- Refactored about window to normal UI dialog to save resources ([PR 965](https://github.com/input-output-hk/daedalus/pull/965))
- Removed mocked ETC wallet data injection in Cardano Daedalus builds ([PR 955](https://github.com/input-output-hk/daedalus/pull/955))
- Removed the Ada Redemption link from the "app bar" menu and added it to system menu ([PR 972](https://github.com/input-output-hk/daedalus/pull/972))

### Chores

- Added "Author" and "Status" information to all Daedalus README files ([PR 901](https://github.com/input-output-hk/daedalus/pull/901))
- Added acceptance tests for displaying transactions in various contexts ([PR 870](https://github.com/input-output-hk/daedalus/pull/870))
- Added acceptance tests for hide/show used addresses feature ([PR 957](https://github.com/input-output-hk/daedalus/pull/957))
- Added flow checks and linting for storybook code ([PR 938](https://github.com/input-output-hk/daedalus/pull/938))
- Added PR template with PR review checlist ([PR 882](https://github.com/input-output-hk/daedalus/pull/882))
- Fixed wallet restoration and import fragile acceptance tests steps definitions ([PR 885](https://github.com/input-output-hk/daedalus/pull/885))
- Improved re-build times with caching ([PR 915](https://github.com/input-output-hk/daedalus/pull/915))
- Improved request body length calculation ([PR 892](https://github.com/input-output-hk/daedalus/pull/892))
- Improved text display by reducing letter-spacing ([PR 973](https://github.com/input-output-hk/daedalus/pull/973))
- Log expected errors as debug messages only ([PR 916](https://github.com/input-output-hk/daedalus/pull/916))
- Refactored npm scripts to use colon style ([PR 939](https://github.com/input-output-hk/daedalus/pull/939))
- Refactored various magic numbers & strings into constants ([PR 881](https://github.com/input-output-hk/daedalus/pull/881))

## 0.10.1

### Fixes

- Fixed issues with printing paper wallet certificate PDFs on printers with low amount of memory by replacing the SVG assets with transparent PNG images ([PR 951](https://github.com/input-output-hk/daedalus/pull/951))
- Fixed presentation bug that caused only ten wallets to be shown in the wallets list, even though there were more than ten wallets in the application ([PR 958](https://github.com/input-output-hk/daedalus/pull/958))
- Fixed reporting server URL used for submitting support requests for the Linux build of Daedalus ([PR 959](https://github.com/input-output-hk/daedalus/pull/959))
- Fixed missing launcher log file ([PR 963](https://github.com/input-output-hk/daedalus/pull/963))
- Fixed issue with multiple cardano-node processes running and windows allowing skipping of files in installer ([PR 953](https://github.com/input-output-hk/daedalus/pull/953))
- Limited maximum number of wallets to 20 ([PR 966](https://github.com/input-output-hk/daedalus/pull/966))

## 0.10.0

### Features

- Asynchronous wallet restoration ([PR 849](https://github.com/input-output-hk/daedalus/pull/849))
- Added wallet restore indicator in the sidebar ([PR 862](https://github.com/input-output-hk/daedalus/pull/862))
- Added Daedalus version in application title ([PR 826](https://github.com/input-output-hk/daedalus/pull/826))
- Added "Show more transactions" button on the summary screen ([PR 848](https://github.com/input-output-hk/daedalus/pull/848))
- Added "Recovery - regular" and "Recovery - force vended" tabs on "Ada redemption" screen ([PR 933](https://github.com/input-output-hk/daedalus/pull/933))
- Setting spending password to "ON" by default ([PR 856](https://github.com/input-output-hk/daedalus/pull/856))
- Paper wallet certificate generation ([PR 779](https://github.com/input-output-hk/daedalus/pull/779))
- Paper wallet certificate restoration ([PR 794](https://github.com/input-output-hk/daedalus/pull/794))
- Update paper wallet certificate generation to use more random bits ([PR 871](https://github.com/input-output-hk/daedalus/pull/871))

### Fixes

- Fixed color of Ada logo color on the loading screen (logo was too transparent) ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Fixed styling of "click to upload" text on Ada redemption screen (text was too bold) ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Fixed node syncing state bubble background color in Dark blue theme ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Fixed cropped log list within the support request dialog ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Fixed submit button flicker within the support request dialog ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Fixed "Download logs" button bug where it would throw Javascript error in case user does not select destination directory for saving logs file ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Updated moment.js dependency to the latest version which fixes ReDOS vulnerability ([PR 782](https://github.com/input-output-hk/daedalus/pull/782))
- Updated Electron dependency to the latest version which fixes vulnerability issues ([PR 855](https://github.com/input-output-hk/daedalus/pull/855))
- Extended About dialog size in order to display increased team members list ([PR 880](https://github.com/input-output-hk/daedalus/pull/880))
- Created screen for Ada redemption in case there are no wallets ([PR 970](https://github.com/input-output-hk/daedalus/pull/970))

### Chores

- Improved build system ([PR 692](https://github.com/input-output-hk/daedalus/pull/692))
- Added instructions for accessing FAQ, reporting a problem and downloading logs on the support page in general settings ([PR 818](https://github.com/input-output-hk/daedalus/pull/818))
- Removed sending logs to remote server feature ([PR 818](https://github.com/input-output-hk/daedalus/pull/818))
- Improved support dialog by default switching the "Attach logs" switch to active ([PR 829](https://github.com/input-output-hk/daedalus/pull/829))
- Improved support dialog logs list (logs are now alphabetically ordered) ([PR 828](https://github.com/input-output-hk/daedalus/pull/828))
- Improved manual bug report submission dialog text color in Dark blue theme ([PR 824](https://github.com/input-output-hk/daedalus/pull/824))
- Improved transaction element addresses: addresses and hashes now act like linkes to Cardano Explorer ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Improved transaction element toggling: click on the white areas should collapse view (not only click on the top part) ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Improved transaction element transaction state handling: transaction with 0 confirmations is now shown in pending state ([PR 825](https://github.com/input-output-hk/daedalus/pull/825))
- Improved wallet creation dialogs handling: clicking outside of the dialogs should not close them ([PR 832](https://github.com/input-output-hk/daedalus/pull/832))
- Improved Dark blue theme styling of update and restoration notifications ([PR 827](https://github.com/input-output-hk/daedalus/pull/827))
- Improved About dialog (team members are updated and alphabetically ordered) ([PR 830](https://github.com/input-output-hk/daedalus/pull/830))
- Improved copy icons visibility on Receive screen ([PR 850](https://github.com/input-output-hk/daedalus/pull/850))
- Improved error message on the NTP time synchronisation error screen ([PR 852](https://github.com/input-output-hk/daedalus/pull/852))
- Improved Loading screen timeouts logic ([PR 860](https://github.com/input-output-hk/daedalus/pull/860))
- Updated sidebar bug icon action to open Settings Support page instead of Support Request dialog ([PR 858](https://github.com/input-output-hk/daedalus/pull/858))
- Updated the way parallel restore/imports are explaned to the user by disabling the restore/import buttons on the Add wallet dialog and presenting a user friendly message ([PR 861](https://github.com/input-output-hk/daedalus/pull/861))
- Updated main and acceptance tests readme files with new acceptance tests setup information ([PR 831](https://github.com/input-output-hk/daedalus/pull/831))
- Paper wallet certificate generation and wallet restoration from a paper wallet certificate acceptance tests ([PR 807](https://github.com/input-output-hk/daedalus/pull/807))
- Use UTC time in Daedalus logs ([PR 833](https://github.com/input-output-hk/daedalus/pull/833))
- Disabled text selection on static UI elements ([PR 868](https://github.com/input-output-hk/daedalus/pull/868))
- Updated Daedalus and Cardano team members on the about dialog ([PR 872](https://github.com/input-output-hk/daedalus/pull/872))

## 0.9.1

### Features
- New Edit section in system menu with copy & paste and related actions ([PR 817](https://github.com/input-output-hk/daedalus/pull/817))

### Fixes

- A presentation bug has been fixed that caused only five recent transactions to be shown on the transaction list, even though there were more than five transactions in the wallet ([PR 778](https://github.com/input-output-hk/daedalus/pull/778))
- An issue has been fixed that stopped copy and paste operations from working when initiated using the right-click context menu ([PR 817](https://github.com/input-output-hk/daedalus/pull/817))
- On Windows, the desktop icon was not showing the Daedalus image; this has now been fixed ([837](https://github.com/input-output-hk/daedalus/pull/837))
- An error has been fixed that in some cases prevented users creating a wallet with a name containing non-latin characters, like Japanese Kanji or Chinese ([PR 840](https://github.com/input-output-hk/daedalus/pull/840))

## 0.9.0

### Features

- Do not block the UI while wallet is being restored/imported ([PR 457](https://github.com/input-output-hk/daedalus/pull/457))
- Start and stop Mantis Client from Daedalus main process ([PR 568](https://github.com/input-output-hk/daedalus/pull/568))
- Add Ada and Mantis logo to loader screens ([PR 584](https://github.com/input-output-hk/daedalus/pull/584))
- New Edit section in system menu with copy & paste and related actions ([PR 817](https://github.com/input-output-hk/daedalus/pull/817))

### Fixes

- Use correct Daedalus version in bug reports ([PR 948](https://github.com/input-output-hk/daedalus/pull/948))
- Fixed about dialog for ETC build ([PR 586](https://github.com/input-output-hk/daedalus/pull/586))
- Made `Light Blue` theme the default for ETC build ([PR 586](https://github.com/input-output-hk/daedalus/pull/586))
- Fixed a bug related to gas limit when sending transactions ([PR 586](https://github.com/input-output-hk/daedalus/pull/586))
- Remove transactions sorting ([PR 587](https://github.com/input-output-hk/daedalus/pull/587))
- Improve ETC transaction amount validation ([PR 590](https://github.com/input-output-hk/daedalus/pull/590))
- Fixed storybook and resolver issues ([PR 617](https://github.com/input-output-hk/daedalus/pull/617))
- Time of your machine is different from global time. You are 0 seconds behind ([PR 678](https://github.com/input-output-hk/daedalus/pull/678))
- Updated copy for the sync error screen ([PR 657](https://github.com/input-output-hk/daedalus/pull/657))
- Detect when wallet is disconnected ([PR 689](https://github.com/input-output-hk/daedalus/pull/689))
- Improve connecting/reconnecting messages on Loading screen ([PR 696](https://github.com/input-output-hk/daedalus/pull/696))
- Send bug reports with logs from Daedalus ([PR 691](https://github.com/input-output-hk/daedalus/pull/691))
- Poll local time difference every 1 hour, only when connected ([PR 719](https://github.com/input-output-hk/daedalus/pull/719))
- Fixed various styling issues and updated to React-Polymorph 0.6.2 ([PR 726](https://github.com/input-output-hk/daedalus/pull/726))
- Fixed async restore/import dialogs logic ([PR 735](https://github.com/input-output-hk/daedalus/pull/735))
- Fixed minor UI issue on receive screen when generating wallet addresses with spending password ([PR 738](https://github.com/input-output-hk/daedalus/pull/738))
- Fixed `Time sync error notification` not showing up in case blocks syncing has not started ([PR 752](https://github.com/input-output-hk/daedalus/pull/752))
- Properly wait for node update request ([PR 949](https://github.com/input-output-hk/daedalus/pull/949))

### Chores

- Update DLL package and cleanup translation files ([PR 566](https://github.com/input-output-hk/daedalus/pull/566))
- Replace electron-json-storage with electron-storage ([PR 579](https://github.com/input-output-hk/daedalus/pull/579))
- Update terms of use for ETC version ([PR 606](https://github.com/input-output-hk/daedalus/pull/606))
- Update Electron to version 1.7.11 which resolves security issues ([PR 677](https://github.com/input-output-hk/daedalus/pull/677))
- Document Cardano SL build ([PR 654](https://github.com/input-output-hk/daedalus/pull/654))
- Update about dialog content ([PR 680](https://github.com/input-output-hk/daedalus/pull/680))
- Ada redemption tests modified to run in mainnet mode ([PR 681](https://github.com/input-output-hk/daedalus/pull/681))
- Log file moved to public folder and Electron crash reporter removed ([PR 682](https://github.com/input-output-hk/daedalus/pull/682))

## 0.8.3

### Fixes

- Improved messages for update notifications ([PR 526](https://github.com/input-output-hk/daedalus/pull/526))

## 0.8.2

### Features

- Postpone Update Api call integration ([PR 485](https://github.com/input-output-hk/daedalus/pull/485))
- Wallet restore recovery phrase textarea replaced with React-Polymorph Autocomplete ([PR 516](https://github.com/input-output-hk/daedalus/pull/516))
- Instructions for setting up NTP on Daedalus website ([PR 531](https://github.com/input-output-hk/daedalus/pull/531))

### Fixes

- Fix error message text for A to A transaction error ([PR 484](https://github.com/input-output-hk/daedalus/pull/484))
- Fix "label prop type" checkbox issue in React-Polymorph ([PR 487](https://github.com/input-output-hk/daedalus/pull/487))
- Remove all drag and drop instructions from UI ([PR 495](https://github.com/input-output-hk/daedalus/pull/495))
- Preferences saved to local storage prefixed with network ([PR 501](https://github.com/input-output-hk/daedalus/pull/501))
- Disable wallet import and export features for the mainnet ([PR 503](https://github.com/input-output-hk/daedalus/pull/503))
- Correctly prevent max-window-size in electron ([PR 532](https://github.com/input-output-hk/daedalus/pull/532))
- Make sure wallet import and restore in-progress notification is hidden once process is done ([PR 540](https://github.com/input-output-hk/daedalus/pull/540))
- Fix broken translation files loading ([PR 559](https://github.com/input-output-hk/daedalus/pull/559))
- Fix async wallet import/restore issues ([PR 562](https://github.com/input-output-hk/daedalus/pull/562))

### Chores

- Update version in About dialog to 0.8.2 ([PR 496](https://github.com/input-output-hk/daedalus/pull/496))
- Set Dark theme as default one for the mainnet ([PR 497](https://github.com/input-output-hk/daedalus/pull/497))
- JS-Api integration ([PR 525](https://github.com/input-output-hk/daedalus/pull/525))
- Only log errors to papertrail ([PR 509](https://github.com/input-output-hk/daedalus/pull/509))
- Update MobX React Form to latest version ([PR 533](https://github.com/input-output-hk/daedalus/pull/533))
- Update Electron, electron-devtools-installer, electron-packager and electron-rebuild to latest versions ([PR 541](https://github.com/input-output-hk/daedalus/pull/541))
- Update flow-bin to version `0.59.0` ([PR 544](https://github.com/input-output-hk/daedalus/pull/544))
- Cleanup and standardization of ETC Api calls ([PR 549](https://github.com/input-output-hk/daedalus/pull/549))
- Unused vendor dependencies cleanup and DLL file optimization ([PR 555](https://github.com/input-output-hk/daedalus/pull/555))
- Introduce `testReset` endpoint for ETC API ([PR 558](https://github.com/input-output-hk/daedalus/pull/558))
- Update acceptance tests suite dependencies ([PR 561](https://github.com/input-output-hk/daedalus/pull/561))
- Refactor Cardano type declarations to type folder ([PR 557](https://github.com/input-output-hk/daedalus/pull/557))

## 0.8.1

### Fixes

- Fix all features eslint warnings ([PR 468](https://github.com/input-output-hk/daedalus/pull/468))
- Fix for disabled buttons on dark-blue theme ([PR 473](https://github.com/input-output-hk/daedalus/pull/473))
- Remove maximum screen width and height in full-screen mode ([PR 472](https://github.com/input-output-hk/daedalus/pull/472))
- Fix "label click" dropdown issue in React-Polymorph ([PR 479](https://github.com/input-output-hk/daedalus/pull/479))

## 0.8.0

### Features

- Opt-in mode for sending logs to the remote server
- Added support for Cmd+H hotkey shortcut for hiding application window on OSX ([PR 404](https://github.com/input-output-hk/daedalus/pull/404))
- Setup environment variable for testnet/mainnet mode ([PR 400](https://github.com/input-output-hk/daedalus/pull/400))
- Export wallet to file ([PR 426](https://github.com/input-output-hk/daedalus/pull/426))
- Add theming options in settings ([PR 370](https://github.com/input-output-hk/daedalus/pull/398))
- About page, available from the system menu ([PR 430](https://github.com/input-output-hk/daedalus/pull/430))
- Setup default themes for TN and MN and introduce new theme names ([PR 451](https://github.com/input-output-hk/daedalus/pull/451))
- Transaction fees UX improvements on wallet sent screen ([PR 449](https://github.com/input-output-hk/daedalus/pull/449))
- Acceptance tests for General Settings screens ([PR 466](https://github.com/input-output-hk/daedalus/pull/466))
- Simple confirmation dialog for sending money ([PR 481](https://github.com/input-output-hk/daedalus/pull/481))
- Japanese terms of use for the mainnet ([PR 486](https://github.com/input-output-hk/daedalus/pull/486))

### Fixes

- Implement MomentJs internationalization
- Also quit whole app when last window is closed on osx
- Daedalus and Cardano node update notification text messages change ([PR 392](https://github.com/input-output-hk/daedalus/pull/392))
- Fixed brittle acceptance test steps (wallet latest transaction amount check) ([PR 393](https://github.com/input-output-hk/daedalus/pull/393))
- Fixed Numeric component caret position bug on wallet send screen ([PR 394](https://github.com/input-output-hk/daedalus/pull/394))
- Fixed all design implementation issues ([PR 397](https://github.com/input-output-hk/daedalus/pull/397))
- Fixed eslint syntax warnings ([PR 403](https://github.com/input-output-hk/daedalus/pull/403))
- Fixed wallet spending password fields error messages positioning on wallet create/restore/import dialogs ([PR 407](https://github.com/input-output-hk/daedalus/pull/407))
- Fixed inline-editing success-messages on wallet settings screen ([PR 408](https://github.com/input-output-hk/daedalus/pull/408))
- Fixed dialogs cut-off content on smaller screens ([PR 370](https://github.com/input-output-hk/daedalus/pull/398))
- Fixed the issue of dialogs being closable while wallet import/creation/restoring is happening ([PR 393](https://github.com/input-output-hk/daedalus/pull/414))
- Fixed calculation and display of transaction assurance levels ([PR 390](https://github.com/input-output-hk/daedalus/pull/416))
- Fixes Transaction additional info showing/hiding affects all user's wallets ([PR 411](https://github.com/input-output-hk/daedalus/pull/411))
- Fixed promise handling for unmounted wallet send form ([PR 412](https://github.com/input-output-hk/daedalus/pull/412))
- Fixes Transaction toggle issue on active wallet change ([PR 421](https://github.com/input-output-hk/daedalus/pull/421))
- Fixed missing 'used address' styling for default wallet address on wallet receive screen ([PR 422](https://github.com/input-output-hk/daedalus/pull/422))
- Terms of service for the mainnet ([PR 425](https://github.com/input-output-hk/daedalus/pull/425))
- Fixed failing acceptance tests ([PR 424](https://github.com/input-output-hk/daedalus/pull/424))
- Show correct error message on sending money to Ada redemption address ([PR 423](https://github.com/input-output-hk/daedalus/pull/423))
- Fixed ENOENT error on log file rotation ([PR 428](https://github.com/input-output-hk/daedalus/pull/428))
- Fixed logging error ([PR 431](https://github.com/input-output-hk/daedalus/pull/431))
- Add theming support on UI which was introduced after introduction of Theming feature ([PR 434](https://github.com/input-output-hk/daedalus/pull/434))
- Speed-up About page opening time ([PR 450](https://github.com/input-output-hk/daedalus/pull/450))
- Importing a wallet from a file updated-API integration ([PR 439](https://github.com/input-output-hk/daedalus/pull/439))
- Exporting a wallet updated-API integration ([PR 438](https://github.com/input-output-hk/daedalus/pull/438))
- Show correct error message for A -> A transaction error ([PR 441](https://github.com/input-output-hk/daedalus/pull/441))
- Improved QR code colors on wallet send screen for dark themes ([PR 448](https://github.com/input-output-hk/daedalus/pull/448))
- Fixed transaction fees flicker on wallet send screen form submit ([PR 456](https://github.com/input-output-hk/daedalus/pull/456))
- Fixed failing acceptance-tests ([PR 454](https://github.com/input-output-hk/daedalus/pull/454))
- Prevent application window auto focusing while running acceptance-tests ([PR 458](https://github.com/input-output-hk/daedalus/pull/458))
- Limit and validate wallet's name maximum length ([PR 465](https://github.com/input-output-hk/daedalus/pull/465))
- UI/UX fixes ([PR 476](https://github.com/input-output-hk/daedalus/pull/476))

### Chores

- Added readme file for running acceptance tests ([PR 395](https://github.com/input-output-hk/daedalus/pull/395))
- Improved webpack build performance ([PR 402](https://github.com/input-output-hk/daedalus/pull/402))
- Updated README file "Development - network options" section ([PR 410](https://github.com/input-output-hk/daedalus/pull/410))
- All CSS hardcoded values replaced with variables ([PR 370](https://github.com/input-output-hk/daedalus/pull/398))
- Implemented sync progress and payment requests with new JS API as first step to remove the purescript API ([PR 437](https://github.com/input-output-hk/daedalus/pull/437))
- Speed optimizations for page reloads while running tests by loading bundled up for one-time tests runs ([PR 448](https://github.com/input-output-hk/daedalus/pull/445))
- Optimized structure and naming of theming files ([PR 453](https://github.com/input-output-hk/daedalus/pull/453))
- Added testnet label, loaded from translations for release candidate ([PR 460](https://github.com/input-output-hk/daedalus/pull/460))

## 0.7.0

### Features

- Sidebar is no longer auto-hiding if application window is width is greater than 1150px
- When user opens or closes the sidebar using the hamburger icon it stays open or closed
- Optionally setting a password during wallet creation
- "Terms of use" screen on first application start
- Spending password on "Send money" form
- Optionally setting a password during wallet restore
- Ada redemption disclaimer
- "Terms of use" page in settings section
- Change wallet password dialog UX improvements
- New receive screen with support for HD wallets
- Wallet rename
- Multiple input and output addresses in transaction details
- Ada redemption acceptance tests
- Show BTC and ETC currencies as coming soon in create wallet dialog
- Remove currencies dropdown on create wallet dialog
- Spending password on wallet receive page
- Prepared UI dialogs for exporting paper wallets
- Prepared UI dialogs for importing paper wallets
- Spending password on "Import wallet" dialog
- Spending password on "Ada redemption" forms
- Acceptance test for "Restore wallet with and without spending password" feature
- Acceptance test for "Create wallet with spending password" feature
- Acceptance test for "Import wallet with/without spending password" feature
- Acceptance test for "Send money from a wallet with spending password" feature
- Acceptance test for "Generate wallet address" feature
- Acceptance test for "Wallet settings management" features
- Final version of Daedalus logo added on the loading screen
- Final version of Daedalus logo added in the top-bar
- Receive page design update
- UI for displaying transaction fees on wallet send screen
- Correct placeholder text for Ada redemption "Ada amount" input

### Fixes

- Verification of mnemonic recovery phrase during wallet backup is not working if it contains duplicate words
- Pending confirmation amounts split (incoming and outgoing)
- Prevent wallet send form reset on submit
- Prevent redemption key reset after unsuccessful redemption
- Ghost boxes on "Loading" screen
- Reset Ada redemption form values on page load and certificate add/remove events
- Prevent sidebar auto-hiding feature and always show submenus on wallets page load
- Apply grammatical fixes to redemption instructions
- Prevent sidebar visual glitch on sidebar open
- Added missing "Add wallet" button label translation key
- Prevent "Delete wallet" dialog from closing until deletion is over
- Improved error handling on "Set/Change wallet password" dialog
- Improved API response errors handling
- Update active wallet after wallet update actions
- Last generated address was not being reset when switching wallets and it was shown on the receive screen for the wrong wallet
- Improved API nextUpdate response errors handling
- Improved active wallet data refresh after wallet balance/settings change
- Fixed failing wallet add/restore/import acceptance tests
- Polling for wallet data and system update should be disabled while node is syncing with the blockchain
- Prevent syncing icon from being always stuck in syncing state by refactoring in-sync state calculation
- Acceptance test for "Sending money" feature should check receiver wallet's balance
- Improved spending password validation rules
- Improved acceptance tests for generating new addresses
- Removed temporary workaround for creating new accounts during wallet create and wallet restore
- Prevent React key duplicates in transaction from/to addresses lists
- Acceptance tests configuration fix for the timeouts
- Show more specific error messages on "Change password" dialog
- Update password fields placeholders to match latest designs
- Prevent selected wallet reset on "Ada redemption" screen on tab or certificate change
- Fixed sending amount maximum value validation
- Use correct styling for used addresses marking on wallet receive screen

### Chores

- Prevent logging of harmless error messages to the terminal
- Purge "translation/messages/app" as a part of npm dev script
- Use markdown for "Terms of use" content
- Added manually written Flow types for API responses
- Testnet version on the testnet label bumped from 0.3 to 0.5
- Replaced all React-Toolbox components with React-Polymorph ones ([PR 361](https://github.com/input-output-hk/daedalus/pull/361))
- Temporary workaround for missing Japanese translations for Terms of Use that allows users to accept them in English

## 0.6.2

### Features

- Ada redemption testnet disclaimer on Ada redemption pages

## 0.6.1

### Fixes

- Wallet name on the send screen was hardcoded in Japanese translation
- Button on the wallet send screen is too large
- Hamburger button" and wallet's name are present on the "Ada redemption" and "Settings" screens
- Ada redemption button is not enabled as soon as inputs are valid
- Prevent navigation on file drop event in the application window

### Chores

- Logging improved by stringifying API requests and responses being logged
- Added system information to logs: OS, OS version, CPU and total RAM information

## 0.6.0

### Features

- Ada redemption with certificate decryption and parsing to extract the redemption key
- Transaction assurance level with color coding for transactions and settings for a normal or strict mode
- Wallet settings page with wallet deletion and transaction assurance level settings
- User interface language option on application start and in settings with English and Japanese translations
- Ada amounts formatting with thousands separator for displaying and entering amounts
- Application header updated to show wallet name and amount of money in the wallet
- Copy wallet address to the clipboard with UI notification
- Testnet label
- Application level settings page with language choice option
- Wallet summary page
- Showing absolute percentage with two decimals on the blockchain sync page
- File logging and sending logs to Papertrail logging service without sensitive user data

### Fixes

- Toggling the application bar not working properly
- UI glitch when quickly typing in Ada amounts on the send money form
- "Add wallet" dialog does not disappear immediately after wallet creation
- Clearing correctly entered backup recovery phrase should not be possible
- Sidebar "randomly" closes/opens when navigating
- Ada redemption overlay should also cover the wallet navigation
- No transactions message is not vertically centered on Transactions page
- Transactions ordering
- Smaller UI improvements and fixes


## 0.5.0

![Main Wallet screenshot in 0.5.0](screenshots/2016-11-24 release 0.5.0 main-wallet.png)
![Main Wallet screenshot in 0.5.0](screenshots/2016-11-24 release 0.5.0 profile-settings.png)

### Features

- Infinite loading for transaction list, testable with "Main wallet"
- Simple transaction search by title
- Adding new personal wallet via sidebar menu
- Profile settings screen
- "No transactions" message for wallets with no transactions
- "No transactions found" message when transaction search returns no results
- Loading indicator on application startup

### Fixes

- Improved sidebar UX when there is no sub-menu
- Transaction icons updated to design specs
- Improved transaction list page styling
- Active input field styled to design specs

### Chores

- Fixed and improved first acceptance test, made API data configurable for future test cases

## 0.4.0

![Screenshot from Release 0.4.0](screenshots/2016-11-16 release 0.4.0.png)

### Features

- Sidebar with "Wallets" and "Settings" categories and list of dummy wallets
- Switch between wallets via the sidebar
- Selected wallet is highlighted in sidebar
- New transactions list design
- Transactions are grouped by date
- Click on transaction title toggles the details

### Fixes

- Fixed many styling issues
- Improved font rendering

### Chores

- First version of the backend API
- Improved and simplified mobx state management

## 0.3.0

### Features

- Added wallet creation screen that appears when there is no wallet yet
- Updated to the latest design specs and refactor to
[react-toolbox](http://react-toolbox.com/) instead of
material-ui for the UI components. This gives us much better style
customization and theming options.
- Cleaned up the boilerplate app menus
- Added basic form validations using [mobx-react-form](https://github.com/foxhound87/mobx-react-form)
- Added i18n support with [react-intl](https://github.com/yahoo/react-intl)
- Added wallet send / receive / transactions screens
- Form submitting UX updated to the design specifications with introduction of button loading spinners
and support for submitting the form with enter key
- Added cut, copy & paste application menu items and keyboard shortcuts

### Fixes

- Fixed problems with the form validations
- Fixed the electron build process & ensured that it worked

### Chore

- Updated to react-router v4
- Testing setup with cucumber & spectron
