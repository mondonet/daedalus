// @flow
import React, { Component } from 'react';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';
import { Select } from 'react-polymorph/lib/components/Select';
import { SelectSkin } from 'react-polymorph/lib/skins/simple/SelectSkin';
import styles from './DelegationStepsChooseWalletDialog.scss';
import DialogCloseButton from '../../widgets/DialogCloseButton';
import DialogBackButton from '../../widgets/DialogBackButton';
import Dialog from '../../widgets/Dialog';

const messages = defineMessages({
  title: {
    id: 'delegation.setup.steps.dialog.title',
    defaultMessage: '!!!Delegation Setup',
    description:
      'Title "Delegation Setup" on the delegation setup "choose wallet" step dialog.',
  },
  description: {
    id: 'delegation.setup.chooseWallet.step.dialog.description',
    defaultMessage:
      '!!!Choose a wallet with funds you would like to delegate to a stake pool. Selected wallet needs to have a minimum of <span>1 ada</span>.',
    description:
      'Description on the delegation setup "choose wallet" step dialog.',
  },
  selectWalletInputLabel: {
    id: 'delegation.setup.chooseWallet.step.dialog.selectWalletInputLabel',
    defaultMessage: '!!!Wallet',
    description:
      'Label "Wallet" for select input on the delegation setup "choose wallet" step dialog.',
  },
  selectWalletInputPlaceholder: {
    id:
      'delegation.setup.chooseWallet.step.dialog.selectWalletInputPlaceholder',
    defaultMessage: '!!!Select Wallet',
    description:
      'Placeholder "Select Wallet" for select input on the delegation setup "choose wallet" step dialog.',
  },
  stepIndicatorLabel: {
    id: 'delegation.setup.chooseWallet.step.dialog.stepIndicatorLabel',
    defaultMessage: '!!!STEP 1 OF 4',
    description:
      'Step indicator labe on the delegation setup "choose wallet" step dialog.',
  },
  errorMessage: {
    id: 'delegation.setup.chooseWallet.step.dialog.errorMessage',
    defaultMessage:
      '!!!This wallet does not have enough ada for delegation setup. Please choose a wallet with a minimum of <span>1 ada</span> and click continue.',
    description:
      'Error Label on the delegation setup "choose wallet" step dialog.',
  },
  continueButtonLabel: {
    id: 'delegation.setup.chooseWallet.step.dialog.continueButtonLabel',
    defaultMessage: '!!!Continue',
    description:
      'Label for continue button on the delegation setup "choose wallet" step dialog.',
  },
});

type WalletData = {
  label: string,
  value: string,
  isAcceptableSetupWallet: boolean,
};

type Props = {
  onClose: Function,
  onContinue: Function,
  onBack: Function,
  wallets: Array<WalletData>,
};

type State = {
  selectedWalletAmount: string,
  walletChoiceError: boolean,
};

export default class DelegationStepsChooseWalletDialog extends Component<
  Props,
  State
> {
  static contextTypes = {
    intl: intlShape.isRequired,
  };

  state = {
    selectedWalletAmount: '',
    walletChoiceError: false,
  };

  onWalletChange = (selectedWallet: WalletData) => {
    this.setState({
      walletChoiceError: !selectedWallet.isAcceptableSetupWallet,
      selectedWalletAmount: selectedWallet.value,
    });
  };

  render() {
    const { intl } = this.context;
    const { walletChoiceError, selectedWalletAmount } = this.state;
    const { wallets, onClose, onContinue, onBack } = this.props;

    const actions = [
      {
        className: 'continueButton',
        label: 'Continue',
        onClick: onContinue,
        primary: true,
        disabled: !selectedWalletAmount || walletChoiceError,
      },
    ];

    return (
      <Dialog
        title={intl.formatMessage(messages.title)}
        actions={actions}
        closeOnOverlayClick
        onClose={onClose}
        className={styles.delegationStepsChooseWalletDialogWrapper}
        closeButton={<DialogCloseButton onClose={onClose} />}
        backButton={<DialogBackButton onBack={onBack} />}
      >
        <p className={styles.stepIndicatorLabel}>
          {intl.formatMessage(messages.stepIndicatorLabel)}
        </p>

        <div className={styles.content}>
          <p className={styles.description}>
            <FormattedHTMLMessage {...messages.description} />
          </p>
          <Select
            className={styles.walletSelect}
            label={intl.formatMessage(messages.selectWalletInputLabel)}
            options={wallets}
            optionRenderer={option => {
              return (
                <div
                  className={styles.customOptionStyle}
                  role="presentation"
                  onClick={this.onWalletChange.bind(this, option)}
                >
                  <div className={styles.optionLabel}>{option.label}</div>
                  <div className={styles.optionValue}>{option.value}</div>
                </div>
              );
            }}
            placeholder={intl.formatMessage(
              messages.selectWalletInputPlaceholder
            )}
            skin={SelectSkin}
            value={selectedWalletAmount}
          />
          {walletChoiceError && (
            <p className={styles.errorMessage}>
              <FormattedHTMLMessage {...messages.errorMessage} />
            </p>
          )}
        </div>
      </Dialog>
    );
  }
}