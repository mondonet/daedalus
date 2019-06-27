// @flow
import React, { Component } from 'react';
import { defineMessages, intlShape, FormattedMessage } from 'react-intl';
import { Stepper } from 'react-polymorph/lib/components/Stepper';
import { StepperSkin } from 'react-polymorph/lib/skins/simple/StepperSkin';
import { Input } from 'react-polymorph/lib/components/Input';
import { InputSkin } from 'react-polymorph/lib/skins/simple/InputSkin';
import styles from './DelegationStepsActivationDialog.scss';
import DialogCloseButton from '../../widgets/DialogCloseButton';
import DialogBackButton from '../../widgets/DialogBackButton';
import Dialog from '../../widgets/Dialog';
import ReactToolboxMobxForm from '../../../utils/ReactToolboxMobxForm';
import globalMessages from '../../../i18n/global-messages';

const messages = defineMessages({
  title: {
    id: 'staking.delegationSetup.steps.confirmation.dialog.title',
    defaultMessage: '!!!Confirm Delegation',
    description:
      'Title "Confirm Delegation" on the delegation setup "activation" step dialog.',
  },
  stepIndicatorLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.stepIndicatorLabel',
    defaultMessage: '!!!STEP {currentStep} OF {totalSteps}',
    description:
      'Step indicator labe on the delegation setup "activation" step dialog.',
  },
  descriptionLine1: {
    id: 'staking.delegationSetup.activation.step.dialog.description.line1',
    defaultMessage:
      '!!!Now all new wallet addresses will match your delegation preferences and ada received on those addresses will be actively delegated.',
    description:
      'Description "line 1" on the delegation setup "activation" step dialog.',
  },
  descriptionLine2: {
    id: 'staking.delegationSetup.activation.step.dialog.description.line2',
    defaultMessage:
      '!!!To delegate the rest of the ada in your wallet, move it to a new addresses which match your delegation preferences.',
    description:
      'Description "line 2" on the delegation setup "activation" step dialog.',
  },
  addressLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.addressLabel',
    defaultMessage: '!!!To',
    description:
      'Address label on the delegation setup "activation" step dialog.',
  },
  amountLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.amountLabel',
    defaultMessage: '!!!Amount',
    description:
      'Amount label on the delegation setup "activation" step dialog.',
  },
  feesLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.feesLabel',
    defaultMessage: '!!!Fees',
    description: 'Fees label on the delegation setup "activation" step dialog.',
  },
  totalLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.totalLabel',
    defaultMessage: '!!!Total',
    description:
      'Total label on the delegation setup "activation" step dialog.',
  },
  spendingPasswordPlaceholder: {
    id:
      'staking.delegationSetup.activation.step.dialog.spendingPasswordPlaceholder',
    defaultMessage: '!!!Password',
    description: 'Placeholder for "spending password"',
  },
  spendingPasswordLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.spendingPasswordLabel',
    defaultMessage: '!!!Spending password',
    description: 'Label for "spending password"',
  },
  confirmButtonLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.confirmButtonLabel',
    defaultMessage: '!!!Confirm',
    description:
      'Label for continue button on the delegation setup "activation" step dialog.',
  },
  postponeButtonLabel: {
    id: 'staking.delegationSetup.activation.step.dialog.postponeButtonLabel',
    defaultMessage: '!!!I’ll do it later',
    description:
      'Postpone button label on the delegation setup "activation" step dialog.',
  },
});

messages.fieldIsRequired = globalMessages.fieldIsRequired;

type State = {
  spendingPasswordValue: string,
};

type Props = {
  onClose: Function,
  onActivate: Function,
  onBack: Function,
  stepsList: Array<string>,
  isSpendingPasswordSet?: boolean,
};

export default class DelegationStepsActivationDialog extends Component<
  Props,
  State
> {
  static contextTypes = {
    intl: intlShape.isRequired,
  };

  state = {
    spendingPasswordValue: '',
  };

  form = new ReactToolboxMobxForm({
    fields: {
      spendingPassword: {
        type: 'password',
        label: this.context.intl.formatMessage(messages.spendingPasswordLabel),
        placeholder: this.context.intl.formatMessage(
          messages.spendingPasswordPlaceholder
        ),
        value: '',
      },
    },
  });

  submit = () => {
    this.form.submit({
      onSuccess: () => {
        const { isSpendingPasswordSet } = this.props;
        const data = {
          fees: 12.042481,
          amount: 3,
          total: 15.042481,
          password: isSpendingPasswordSet
            ? this.state.spendingPasswordValue
            : null,
        };
        this.props.onActivate(data);
      },
      onError: () => {},
    });
  };

  handlePasswordChange = (value: string) => {
    this.setState({ spendingPasswordValue: value });
  };

  render() {
    const { form } = this;
    const { intl } = this.context;
    const {
      stepsList,
      onClose,
      onBack,
      isSpendingPasswordSet,
    } = this.props;
    const { spendingPasswordValue } = this.state;

    const spendingPasswordField = form.$('spendingPassword');

    const actions = [
      {
        className: 'cancelButton',
        label: intl.formatMessage(messages.postponeButtonLabel),
        onClick: onClose,
      },
      {
        className: 'confirmButton',
        label: intl.formatMessage(messages.confirmButtonLabel),
        onClick: this.submit,
        primary: true,
      },
    ];

    return (
      <Dialog
        title={intl.formatMessage(messages.title)}
        actions={actions}
        closeOnOverlayClick
        onClose={onClose}
        className={styles.delegationStepsActivationDialogWrapper}
        closeButton={<DialogCloseButton onClose={onClose} />}
        backButton={<DialogBackButton onBack={onBack} />}
      >
        <div className={styles.delegationStepsIndicatorWrapper}>
          <p className={styles.stepIndicatorLabel}>
            <FormattedMessage
              {...messages.stepIndicatorLabel}
              values={{
                currentStep: 4,
                totalSteps: stepsList.length,
              }}
            />
          </p>
          <Stepper
            steps={stepsList}
            activeStep={4}
            skin={StepperSkin}
            labelDisabled
          />
        </div>

        <div className={styles.content}>
          <div className={styles.description}>
            <p>{intl.formatMessage(messages.descriptionLine1)}</p>
            <p>{intl.formatMessage(messages.descriptionLine2)}</p>
          </div>

          <div className={styles.addressWrapper}>
            <p className={styles.label}>
              {intl.formatMessage(messages.addressLabel)}
            </p>
            <p className={styles.addressValue}>
              YbDziZoPjGmJdssagaugyCqUUJVySKBdA1DUHbpYmQd6yTeFQqfrWWKx9gs19MxMbcEskurDMdVX1h32Fi94Nojxp1gvwM
            </p>
          </div>

          <div className={styles.resumeWrapper}>
            <div className={styles.amountWrapper}>
              <p className={styles.label}>
                {intl.formatMessage(messages.amountLabel)}
              </p>
              <p className={styles.amount}>
                3<span> ADA</span>
              </p>
            </div>

            <div className={styles.feesWrapper}>
              <p className={styles.label}>
                {intl.formatMessage(messages.feesLabel)}
              </p>
              <p className={styles.amount}>
                + 12.042481<span> ADA</span>
              </p>
            </div>
          </div>

          <div className={styles.totalWrapper}>
            <p className={styles.label}>
              {intl.formatMessage(messages.totalLabel)}
            </p>
            <p className={styles.amount}>
              15.042481<span> ADA</span>
            </p>
          </div>

          {isSpendingPasswordSet && (
            <Input
              type="password"
              className={styles.spendingPassword}
              {...spendingPasswordField.bind()}
              skin={InputSkin}
              onChange={value => {
                this.handlePasswordChange(value);
              }}
              value={spendingPasswordValue}
              autoFocus
            />
          )}
        </div>
      </Dialog>
    );
  }
}