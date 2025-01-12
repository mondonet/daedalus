// @flow
import type {
  BugReportRequestHttpOptions,
  BugReportRequestPayload,
} from '../types/bug-report-request.types';
import type { GeneratePaperWalletParams } from '../types/paper-wallet-request.types';
import type {
  CardanoNodeState,
  CardanoStatus,
  FaultInjectionIpcRequest,
  TlsConfig,
} from '../types/cardano-node.types';
import type {
  AdaRedemptionCode,
  AdaRedemptionDecryptionKey,
} from '../types/ada-redemption.types';
import type { RedemptionTypeChoices } from '../../renderer/app/types/redemptionTypes';
import type { CheckDiskSpaceResponse } from '../types/no-disk-space.types';
import type { LogFiles } from '../../renderer/app/types/LogTypes';
import type { GpuStatus } from '../../renderer/app/types/gpuStatus';

/**
 * ======================= IPC CHANNELS API =========================
 * This is the ipc-api contract between main and renderer process
 * which defines channel names and their possible message types.
 * Complex types are referenced from common/types to keep this api readable.
 * ==================================================================
 */

export const GET_LOGS_CHANNEL = 'GET_LOGS_CHANNEL';
export type GetLogsRendererRequest = void;
export type GetLogsMainResponse = LogFiles;

export const COMPRESS_LOGS_CHANNEL = 'COMPRESS_LOGS_CHANNEL';
export type CompressLogsRendererRequest = {
  logs: LogFiles,
  compressedFileName: string,
};
export type CompressLogsMainResponse = string;

export const DOWNLOAD_LOGS_CHANNEL = 'DOWNLOAD_LOGS_CHANNEL';
export type DownloadLogsRendererRequest = {
  compressedLogsFilePath: string,
  destinationPath: string,
};
export type DownloadLogsMainResponse = void;

export const GET_GPU_STATUS_CHANNEL = 'GET_GPU_STATUS_CHANNEL';
export type GetGPUStatusRendererRequest = void;
export type GetGPUStatusMainResponse = GpuStatus;

/**
 * Channel for showing ui parts specified via constants
 */
export const SHOW_UI_PART_CHANNEL = 'SHOW_UI_PART_CHANNEL';
export type ShowUiPartMainRequest = string;
export type ShowUiPartRendererResponse = void;

/**
 * Channel for toggling ui parts specified via constants
 */
export const TOGGLE_UI_PART_CHANNEL = 'TOGGLE_UI_PART_CHANNEL';
export type ToggleUiPartMainRequest = string;
export type ToggleUiPartRendererResponse = void;

/**
 * Channel for checking the disk space available
 */
export const GET_DISK_SPACE_STATUS_CHANNEL = 'GetDiskSpaceStatusChannel';
export type GetDiskSpaceStatusRendererRequest = number | any;
export type GetDiskSpaceStatusMainResponse = CheckDiskSpaceResponse;

/**
 * Channel for checking the state directory path
 */
export const GET_STATE_DIRECTORY_PATH_CHANNEL = 'GetStateDirectoryPathChannel';
export type GetStateDirectoryPathRendererRequest = string | any;
export type GetStateDirectoryPathMainResponse = any;

/**
 * Channel for loading a base64 encoded asset from within the `source/renderer` folder
 */
export const LOAD_ASSET_CHANNEL = 'LoadAssetChannel';
export type LoadAssetRendererRequest = { fileName: string };
export type LoadAssetMainResponse = string;

/**
 * Channel for opening an external url in the default browser
 */
export const OPEN_EXTERNAL_URL_CHANNEL = 'OPEN_EXTERNAL_URL_CHANNEL';
export type OpenExternalUrlRendererRequest = string;
export type OpenExternalUrlMainResponse = void;

/**
 * Channel to send bug report requests
 */
export const SUBMIT_BUG_REPORT_REQUEST_CHANNEL =
  'SUBMIT_BUG_REPORT_REQUEST_CHANNEL';
export type SubmitBugReportRendererRequest = {
  httpOptions: BugReportRequestHttpOptions,
  requestPayload?: BugReportRequestPayload,
};
export type SubmitBugReportRequestMainResponse = void;

/**
 * Channel to rebuild the electron application menu after the language setting changes
 */
export const REBUILD_APP_MENU_CHANNEL = 'REBUILD_APP_MENU_CHANNEL';
export type RebuildAppMenuRendererRequest = void;
export type RebuildAppMenuMainResponse = void;

/**
 * Channel to get the number of epochs consolidated
 */
export const GET_CONSOLIDATED_EPOCHS_COUNT_CHANNEL =
  'GET_CONSOLIDATED_EPOCHS_COUNT_CHANNEL';
export type GetConsolidatedEpochsCountRendererRequest = void;
export type GetConsolidatedEpochsCountMainResponse = number;

/**
 * Channel where renderer can ask the main process to parse the redemption
 * code from a given certificate, providing the file path, decryption key
 * and type of redemption that is required.
 */
export const PARSE_REDEMPTION_CODE_CHANNEL = 'PARSE_REDEMPTION_CODE_CHANNEL';
export type ParseRedemptionCodeRendererRequest = {
  certificateFilePath: string,
  decryptionKey: ?AdaRedemptionDecryptionKey,
  redemptionType: RedemptionTypeChoices,
};
export type ParseRedemptionCodeMainResponse = AdaRedemptionCode;

/**
 * Channel to generate and save a paper wallet certificate
 */
export const GENERATE_PAPER_WALLET_CHANNEL = 'GENERATE_PAPER_WALLET_CHANNEL';
export type GeneratePaperWalletRendererRequest = GeneratePaperWalletParams;
export type GeneratePaperWalletMainResponse = void;

/**
 * ====================== CARDANO IPC CHANNELS ======================
 * This is the ipc-api contract between main & renderer process
 * to communicate with the cardano-node manager code.
 * ==================================================================
 */

/**
 * Channel to indicate that cardano-node will exit for updating
 */
export const CARDANO_AWAIT_UPDATE_CHANNEL = 'CARDANO_AWAIT_UPDATE_CHANNEL';
export type CardanoAwaitUpdateRendererRequest = void;
export type CardanoAwaitUpdateMainResponse = void;

/**
 * Channel where main process tells the renderer about cardano-node state updates
 */
export const CARDANO_STATE_CHANNEL = 'CARDANO_STATE_CHANNEL';
export type CardanoStateRendererRequest = void;
export type CardanoStateRendererResponse = CardanoNodeState;

/**
 * Channel to exchange tls config between main and renderer process
 */
export const CARDANO_TLS_CONFIG_CHANNEL = 'CARDANO_TLS_CONFIG_CHANNEL';
export type CardanoTlsConfigRendererRequest = void;
export type CardanoTlsConfigMainResponse = ?TlsConfig;

/**
 * Channel where renderer can request a cardano-node restart
 */
export const CARDANO_RESTART_CHANNEL = 'CARDANO_RESTART_CHANNEL';
export type CardanoRestartRendererRequest = void;
export type CardanoRestartMainResponse = void;

/**
 * Channel where render process can toggle cardano-node fault injections
 */
export const CARDANO_FAULT_INJECTION_CHANNEL =
  'CARDANO_FAULT_INJECTION_CHANNEL';
export type CardanoFaultInjectionRendererRequest = FaultInjectionIpcRequest;
export type CardanoFaultInjectionMainResponse = void;

/**
 * Channel where renderer can ask for the last cached cardano-node status.
 */
export const GET_CACHED_CARDANO_STATUS_CHANNEL =
  'GET_CACHED_CARDANO_STATUS_CHANNEL';
export type GetCachedCardanoStatusRendererRequest = void;
export type GetCachedCardanoStatusMainResponse = ?CardanoStatus;

/**
 * Channel where renderer and main process can exchange cardano-node status info.
 */
export const SET_CACHED_CARDANO_STATUS_CHANNEL =
  'SET_CACHED_CARDANO_STATUS_CHANNEL';
export type SetCachedCardanoStatusRendererRequest = ?CardanoStatus;
export type SetCachedCardanoStatusMainResponse = void;

/**
 * Channel where renderer can ask main process for the result of electron's app.getLocale()
 */
export const DETECT_SYSTEM_LOCALE_CHANNEL = 'DETECT_SYSTEM_LOCALE_CHANNEL';
export type DetectSystemLocaleRendererRequest = void;
export type DetectSystemLocaleMainResponse = string;
