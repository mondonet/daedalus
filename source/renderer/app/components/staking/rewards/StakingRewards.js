// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { defineMessages, intlShape } from 'react-intl';
import SVGInline from 'react-svg-inline';
import { get, map, orderBy } from 'lodash';
import classNames from 'classnames';
import BorderedBox from '../../widgets/BorderedBox';
import LoadingSpinner from '../../widgets/LoadingSpinner';
import sortIcon from '../../../assets/images/ascending.inline.svg';
import styles from './StakingRewards.scss';

const messages = defineMessages({
  title: {
    id: 'staking.rewards.title',
    defaultMessage: '!!!Earned Rewards',
    description: 'Title "Earned Rewards" label on the staking rewards page.',
  },
  exportButtonLabel: {
    id: 'staking.rewards.exportButtonLabel',
    defaultMessage: '!!!Export CSV',
    description:
      'Label for the "Export CSV" button on the staking rewards page.',
  },
  noRewards: {
    id: 'staking.rewards.no.rewards',
    defaultMessage: '!!!No rewards',
    description: '"No rewards" rewards label on staking rewards page.',
  },
  tableHeaderDate: {
    id: 'staking.rewards.tableHeader.date',
    defaultMessage: '!!!Date',
    description: 'Table header "Date" label on staking rewards page',
  },
  tableHeaderPool: {
    id: 'staking.rewards.tableHeader.pool',
    defaultMessage: '!!!Stake pool',
    description: 'Table header "Stake pool" label on staking rewards page',
  },
  tableHeaderWallet: {
    id: 'staking.rewards.tableHeader.wallet',
    defaultMessage: '!!!Wallet',
    description: 'Table header "Wallet" label on staking rewards page',
  },
  tableHeaderAmount: {
    id: 'staking.rewards.tableHeader.amount',
    defaultMessage: '!!!Amount',
    description: 'Table header "Amount" label on staking rewards page',
  },
  learnMoreButtonLabel: {
    id: 'staking.rewards.learnMore.ButtonLabel',
    defaultMessage: '!!!Learn more',
    description: 'Label for "Learn more" button on staking rewards page',
  },
  note: {
    id: 'staking.rewards.note',
    defaultMessage:
      '!!!Rewards from stake delegation are automatically collected into your reward account.',
    description: 'Rewards description text on staking rewards page',
  },
});

type Props = {
  rewards: any,
  isLoading: boolean,
  onLearnMoreClick: Function,
};

type State = {
  rewardsOrder: string,
  rewardsSortBy: string,
};

@observer
export default class StakingRewards extends Component<Props, State> {
  static contextTypes = {
    intl: intlShape.isRequired,
  };

  static defaultProps = {
    isLoading: false,
  };

  constructor() {
    super();
    this.state = {
      rewardsOrder: 'desc',
      rewardsSortBy: 'date',
    };
  }

  render() {
    const { rewardsOrder, rewardsSortBy } = this.state;
    const { rewards, isLoading, onLearnMoreClick } = this.props;

    const { intl } = this.context;
    const noRewards = !isLoading && ((rewards && !rewards.length) || !rewards);
    const showRewards = rewards && rewards.length > 0 && !isLoading;

    let sortedRewards;
    if (showRewards) {
      sortedRewards = orderBy(
        rewards,
        rewardsSortBy === 'pool' ? 'pool.title' : rewardsSortBy,
        rewardsOrder
      );
    }

    const availableTableHeaders = [
      {
        name: 'date',
        title: intl.formatMessage(messages.tableHeaderDate),
      },
      {
        name: 'pool',
        title: intl.formatMessage(messages.tableHeaderPool),
      },
      {
        name: 'wallet',
        title: intl.formatMessage(messages.tableHeaderWallet),
      },
      {
        name: 'amount',
        title: intl.formatMessage(messages.tableHeaderAmount),
      },
    ];

    return (
      <div className={styles.component}>
        <div className={styles.headerWrapper}>
          <div className={styles.title}>
            {intl.formatMessage(messages.title)}
          </div>
          {!noRewards && (
            <div className={styles.actionLabel}>
              {intl.formatMessage(messages.exportButtonLabel)}
            </div>
          )}
        </div>

        <BorderedBox>
          {noRewards && (
            <div className={styles.noRewardsLabel}>
              {intl.formatMessage(messages.noRewards)}
            </div>
          )}

          {sortedRewards && (
            <table>
              <thead>
                <tr>
                  {map(availableTableHeaders, tableHeader => {
                    const isSorted = tableHeader.name === rewardsSortBy;
                    const sortIconClasses = classNames([
                      styles.sortIcon,
                      isSorted ? styles.sorted : null,
                      isSorted && rewardsOrder === 'asc'
                        ? styles.ascending
                        : null,
                    ]);

                    return (
                      <th
                        key={tableHeader.name}
                        onClick={() => this.handleRewardsSort(tableHeader.name)}
                      >
                        {tableHeader.title}
                        <SVGInline svg={sortIcon} className={sortIconClasses} />
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {map(sortedRewards, (reward, key) => {
                  const rewardDate = get(reward, 'date', '');
                  const rewardPoolCategory = get(
                    reward,
                    ['pool', 'category'],
                    ''
                  );
                  const rewardPoolTitle = get(reward, ['pool', 'title'], '');
                  const rewardWallet = get(reward, 'wallet', '');
                  const rewardAmount = get(reward, 'amount', '');
                  return (
                    <tr key={key}>
                      <td>{rewardDate}</td>
                      <td>
                        <p>
                          <span className={styles.stakePoolReference}>
                            [{rewardPoolCategory}]
                          </span>{' '}
                          {rewardPoolTitle}
                        </p>
                      </td>
                      <td>{rewardWallet}</td>
                      <td>{rewardAmount} ADA</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {isLoading && (
            <div className={styles.loadingSpinnerWrapper}>
              <LoadingSpinner />
            </div>
          )}
        </BorderedBox>

        <div className={styles.note}>
          <span>* {intl.formatMessage(messages.note)} </span>
          <button onClick={onLearnMoreClick}>
            {intl.formatMessage(messages.learnMoreButtonLabel)}
          </button>
          <span>.</span>
        </div>
      </div>
    );
  }

  handleRewardsSort = (newSortBy: string) => {
    const { rewardsOrder, rewardsSortBy } = this.state;
    let newRewardsOrder;
    if (rewardsSortBy === newSortBy) {
      // on same sort change order
      newRewardsOrder = rewardsOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // on new sort instance, order by initial value 'descending'
      newRewardsOrder = 'desc';
    }

    this.setState({
      rewardsSortBy: newSortBy,
      rewardsOrder: newRewardsOrder,
    });
  };
}
