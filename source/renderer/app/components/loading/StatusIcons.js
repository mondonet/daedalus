// @flow
import React, { Component } from 'react';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';
import SVGInline from 'react-svg-inline';
import { Tooltip } from 'react-polymorph/lib/components/Tooltip';
import { TooltipSkin } from 'react-polymorph/lib/skins/simple/TooltipSkin';
import classNames from 'classnames';
import styles from './StatusIcons.scss';
import tooltipStyles from './StatusIcons-tooltip.scss';
import { CardanoNodeStates } from '../../../../common/types/cardano-node.types';
import nodeStateIcon from '../../assets/images/node-state-icon.inline.svg';
import isNodeRespondingIcon from '../../assets/images/is-node-responding-icon.inline.svg';
import isNodeSubscribedIcon from '../../assets/images/is-node-subscribed-icon.inline.svg';
import isNodeTimeCorrectIcon from '../../assets/images/is-node-time-correct-icon.inline.svg';
import isNodeSyncingIcon from '../../assets/images/is-node-syncing-icon.inline.svg';
import type { CardanoNodeState } from '../../../../common/types/cardano-node.types';

const messages = defineMessages({
  nodeIsRunning: {
    id: 'status.icons.nodeIsRunning',
    defaultMessage: '!!!Node is running!',
    description: 'Message "Node is running" on the status icon tooltip',
  },
  nodeIsStarting: {
    id: 'status.icons.nodeIsStarting',
    defaultMessage: '!!!Node is starting!',
    description: 'Message "Node is starting" on the status icon tooltip',
  },
  nodeIsExiting: {
    id: 'status.icons.nodeIsExiting',
    defaultMessage: '!!!Node is exiting!',
    description: 'Message "Node is exiting" on the status icon tooltip',
  },
  nodeIsStopping: {
    id: 'status.icons.nodeIsStopping',
    defaultMessage: '!!!Node is stopping!',
    description: 'Message "Node is stopping" on the status icon tooltip',
  },
  nodeHasStopped: {
    id: 'status.icons.nodeHasStopped',
    defaultMessage: '!!!Node has stopped!',
    description: 'Message "Node has stopped" on the status icon tooltip',
  },
  nodeIsUpdating: {
    id: 'status.icons.nodeIsUpdating',
    defaultMessage: '!!!Node is updating!',
    description: 'Message "Node is updating" on the status icon tooltip',
  },
  nodeHasBeenUpdated: {
    id: 'status.icons.nodeHasBeenUpdated',
    defaultMessage: '!!!Node has been updated!',
    description: 'Message "Node has been updated" on the status icon tooltip',
  },
  nodeHasCrashed: {
    id: 'status.icons.nodeHasCrashed',
    defaultMessage: '!!!Node has crashed!',
    description: 'Message "Node has crashed" on the status icon tooltip',
  },
  nodeHasErrored: {
    id: 'status.icons.nodeHasErrored',
    defaultMessage: '!!!Node has errored!',
    description: 'Message "Node has errored" on the status icon tooltip',
  },
  nodeIsUnrecoverable: {
    id: 'status.icons.nodeIsUnrecoverable',
    defaultMessage: '!!!Node is unrecoverable!',
    description: 'Message "Node is unrecoverable" on the status icon tooltip',
  },
  checkYourInternetConnection: {
    id: 'status.icons.checkYourInternetConnection',
    defaultMessage: '!!!Check your Internet connection!',
    description:
      'Message "Check your Internet connection" on the status icon tooltip',
  },
  isNodeRespondingOn: {
    id: 'status.icons.isNodeRespondingOn',
    defaultMessage: '!!!Node is responding!',
    description: 'Message "Node is responding" on the status icon tooltip',
  },
  isNodeRespondingOff: {
    id: 'status.icons.isNodeRespondingOff',
    defaultMessage: '!!!Node is not responding!',
    description: 'Message "Node is not responding" on the status icon tooltip',
  },
  isNodeRespondingLoading: {
    id: 'status.icons.isNodeRespondingLoading',
    defaultMessage: '!!!Checking if Node is responding!',
    description:
      'Message "Checking if Node is responding" on the status icon tooltip',
  },
  isNodeSubscribedOn: {
    id: 'status.icons.isNodeSubscribedOn',
    defaultMessage: '!!!Node is subscribed!',
    description: 'Message "Node is subscribed" on the status icon tooltip',
  },
  isNodeSubscribedOff: {
    id: 'status.icons.isNodeSubscribedOff',
    defaultMessage: '!!!Node is not subscribed!',
    description: 'Message "Node is not subscribed" on the status icon tooltip',
  },
  isNodeSubscribedLoading: {
    id: 'status.icons.isNodeSubscribedLoading',
    defaultMessage: '!!!Checking if Node is subscribed!',
    description:
      'Message "Checking if Node is subscribed" on the status icon tooltip',
  },
  isNodeTimeCorrectOn: {
    id: 'status.icons.isNodeTimeCorrectOn',
    defaultMessage: '!!!Node time is correct!',
    description: 'Message "Node time is correct" on the status icon tooltip',
  },
  isNodeTimeCorrectOff: {
    id: 'status.icons.isNodeTimeCorrectOff',
    defaultMessage: '!!!Node time is not correct!',
    description:
      'Message "Node time is not correct" on the status icon tooltip',
  },
  isNodeTimeCorrectLoading: {
    id: 'status.icons.isNodeTimeCorrectLoading',
    defaultMessage: '!!!Checking if Node time is correct!',
    description:
      'Message "Checking if Node time is correct" on the status icon tooltip',
  },
  isNodeSyncingOn: {
    id: 'status.icons.isNodeSyncingOn',
    defaultMessage: '!!!Node is syncing!',
    description: 'Message "Node is syncing" on the status icon tooltip',
  },
  isNodeSyncingOff: {
    id: 'status.icons.isNodeSyncingOff',
    defaultMessage: '!!!Node is not syncing!',
    description: 'Message "Node is not syncing" on the status icon tooltip',
  },
  isNodeSyncingLoading: {
    id: 'status.icons.isNodeSyncingLoading',
    defaultMessage: '!!!Checking if Node is syncing!',
    description:
      'Message "Checking if Node is syncing" on the status icon tooltip',
  },
});

type Props = {
  nodeState: ?CardanoNodeState,
  isNodeResponding?: boolean,
  isNodeSubscribed?: boolean,
  isNodeTimeCorrect?: boolean,
  isNodeSyncing?: boolean,
};

type TipParamValue = true | false | null | string;

const STATUS_CLASSNAMES: Object = {
  [CardanoNodeStates.STARTING]: 'unloaded',
  [CardanoNodeStates.RUNNING]: 'on',
  [CardanoNodeStates.EXITING]: 'unloaded',
  [CardanoNodeStates.STOPPING]: 'unloaded',
  [CardanoNodeStates.STOPPED]: 'unloaded',
  [CardanoNodeStates.UPDATING]: 'unloaded',
  [CardanoNodeStates.UPDATED]: 'unloaded',
  [CardanoNodeStates.CRASHED]: 'off',
  [CardanoNodeStates.ERRORED]: 'off',
  [CardanoNodeStates.UNRECOVERABLE]: 'off',
  true: 'on',
  false: 'off',
  undefined: 'unloaded',
};

const NODE_STATE_MESSAGES = {
  [CardanoNodeStates.RUNNING]: messages.nodeIsRunning,
  [CardanoNodeStates.STARTING]: messages.nodeIsStarting,
  [CardanoNodeStates.EXITING]: messages.nodeIsExiting,
  [CardanoNodeStates.STOPPING]: messages.nodeIsStopping,
  [CardanoNodeStates.STOPPED]: messages.nodeHasStopped,
  [CardanoNodeStates.UPDATING]: messages.nodeIsUpdating,
  [CardanoNodeStates.UPDATED]: messages.nodeHasBeenUpdated,
  [CardanoNodeStates.CRASHED]: messages.nodeHasCrashed,
  [CardanoNodeStates.ERRORED]: messages.nodeHasErrored,
  [CardanoNodeStates.UNRECOVERABLE]: messages.nodeIsUnrecoverable,
};

const VARIABLE_VALUES = {
  true: 'On',
  false: 'Off',
  undefined: 'Loading',
  null: 'IsStarting',
};

export default class StatusIcon extends Component<Props> {
  static contextTypes = {
    intl: intlShape.isRequired,
  };

  getTip = (paramName: string, paramValue: TipParamValue) => {
    let message;
    if (paramName === 'nodeState' && paramValue) {
      message = NODE_STATE_MESSAGES[String(paramValue)];
    } else {
      message = messages[`${paramName}${VARIABLE_VALUES[String(paramValue)]}`];
    }
    return message && <FormattedHTMLMessage {...message} />;
  };

  getClassName = (paramName: string) => {
    // If node is not running, it displays the icons with opacity
    // Whether {isNodeSyncing} it displays the icons for syncing or loading screen
    const { isNodeSyncing } = this.props;
    const paramValue = this.props[paramName];
    let status = STATUS_CLASSNAMES[paramValue];
    if (this.isDisabled(paramName)) {
      status = 'unknown';
    }
    return classNames([
      styles.icon,
      styles[`icon-${status}`],
      styles[`icon-${paramName}`],
      isNodeSyncing ? styles.syncing : styles.loading,
    ]);
  };

  getTooltipClassname = (paramName: string) => {
    const paramValue = this.props[paramName];
    return classNames([
      styles.tooltip,
      typeof paramValue === 'undefined' ? styles.ellipsis : null,
      this.isDisabled(paramName) ? styles.disabled : null,
    ]);
  };

  isDisabled = (paramName: string) =>
    paramName !== 'nodeState' &&
    this.props.nodeState !== CardanoNodeStates.RUNNING;

  getIconWithToolTip = (icon: string, paramName: string) => (
    <Tooltip
      skin={TooltipSkin}
      themeOverrides={tooltipStyles}
      tip={this.getTip(paramName, this.props[paramName])}
      className={this.getTooltipClassname(paramName)}
    >
      <SVGInline svg={icon} className={this.getClassName(paramName)} />
    </Tooltip>
  );

  render() {
    return (
      <div className={styles.component}>
        {[
          this.getIconWithToolTip(nodeStateIcon, 'nodeState'),
          this.getIconWithToolTip(isNodeRespondingIcon, 'isNodeResponding'),
          this.getIconWithToolTip(isNodeSubscribedIcon, 'isNodeSubscribed'),
          this.getIconWithToolTip(isNodeTimeCorrectIcon, 'isNodeTimeCorrect'),
          this.getIconWithToolTip(isNodeSyncingIcon, 'isNodeSyncing'),
        ]}
      </div>
    );
  }
}
