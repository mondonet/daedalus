// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DelegationStepsNotAvailableDialog from './DelegationStepsNotAvailableDialog';
import DelegationStepsIntroDialog from './DelegationStepsIntroDialog';
import DelegationStepsChooseWalletDialog from './DelegationStepsChooseWalletDialog';
import DelegationStepsConfirmationDialog from './DelegationStepsConfirmationDialog';
import DelegationStepsActivationDialog from './DelegationStepsActivationDialog';

type WalletData = {
  label: string,
  value: string,
  isAcceptableSetupWallet: boolean,
};

type Props = {
  isDisabled: boolean,
  activeStep: number,
  wallets: Array<WalletData>,
  onClose: Function,
  onContinue: Function,
  onBack: Function,
  onLearnMoreClick: Function,
  stepsList: Array<string>,
  minDelegationFunds: number,
  onActivate: Function,
  onConfirm: Function,
};

@observer
export default class DelegationSetupWizardDialog extends Component<Props> {
  render() {
    const {
      isDisabled,
      onClose,
      onContinue,
      onBack,
      activeStep,
      wallets,
      onLearnMoreClick,
      stepsList,
      minDelegationFunds,
      onActivate,
      onConfirm,
    } = this.props;

    if (isDisabled) {
      return (
        <DelegationStepsNotAvailableDialog
          minDelegationFunds={minDelegationFunds}
          onClose={onClose}
        />
      );
    }

    let content = null;
    switch (activeStep) {
      case 1:
        content = (
          <DelegationStepsChooseWalletDialog
            stepsList={stepsList}
            wallets={wallets}
            minDelegationFunds={minDelegationFunds}
            onClose={onClose}
            onContinue={onContinue}
            onBack={onBack}
          />
        );
        break;
      case 3:
        content = (
          <DelegationStepsConfirmationDialog
            stepsList={stepsList}
            isSpendingPasswordSet
            onClose={onClose}
            onConfirm={onConfirm}
            onBack={onBack}
          />
        );
        break;
      case 4:
        content = (
          <DelegationStepsActivationDialog
            stepsList={stepsList}
            isSpendingPasswordSet
            onClose={onClose}
            onActivate={onActivate}
            onBack={onBack}
          />
        );
        break;
      default:
        content = (
          <DelegationStepsIntroDialog
            onLearnMoreClick={onLearnMoreClick}
            onClose={onClose}
            onContinue={onContinue}
          />
        );
        break;
    }

    return content;
  }
}
