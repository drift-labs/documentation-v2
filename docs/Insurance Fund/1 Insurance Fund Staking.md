---
title: Insurance Fund Staking
slug: -wQ3-insurance-fund-staking
createdAt: Wed Aug 31 2022 07:52:45 GMT+0000 (Coordinated Universal Time)
updatedAt: Thu Sep 28 2023 15:50:34 GMT+0000 (Coordinated Universal Time)
---

### Overview

Users that elect to stake into the Insurance Fund will be collateralising the Insurance Fund.&#x20;

The Insurance Fund is the protocol's first backstop to maintaining the solvency of the protocol. All users that stake into the IF should read through and be clear on what happens to the Insurance Fund when levered losses and vAMM deficits occur ([Insurance Fund](<./0 Insurance Fund>)).

### Reward

For providing liquidity to the Insurance Fund, Insurance Fund Stakers are rewarded with their proportionate share of the [Revenue Pool](<../0 About Drift v2/8 Revenue Pool>) every hour.&#x20;

:::hint{type="info"}
The [Revenue Pool](<../0 About Drift v2/8 Revenue Pool>) is funded by various aspects of the protocol:&#x20;

1.  borrow fees;

2.  spot market exchange fees;

3.  perpetual market exchange fees; and

4.  liquidation fees.
:::

An Insurance Fund Staker's proportionate share is calculated by: `Total Staked Amount / Total Insurance Fund`

Each revenue settlement is split between Insurance Fund Stakers and a protocol-owned portion of the insurance fund.

**Example**

*   *The Insurance Fund is at $5000 USDC. You decide to stake $10,000 USDC, bringing the total to $15,000 USDC. *

Your proportionate share of the Revenue Pool paid every hour for stakers would be `10000/15000` = 66.6%.

Each hour, as the revenue pool settles fees earned to the Insurance Fund, let's say $30. Half of this is reserved for the protocol, while the other half is designated for stakers, making the staker payout $15. You will receive 66.6% of the payout ($10) and the remaining Insurance Fund stakers would receive 33.3% ($5).

All rewards earned accumulate and compound the account's insurance amount staked.

### Cooldown Period

There is a cooldown period of 13 days for unstaking any collateral from the Insurance Fund.&#x20;

A user first requests to unstake a specific amount (denominated in shares). During the cooldown period, the staked amount still receives rewards and is liable for user deficit resolution. After the elapsed period, the user can fully unstake. Upon unstaking, any net winning during the cooldown period is forgone and split amongst the current set of stakers, while a net loss is incurred by the unstaker. This means the unstake process downside is only for the unstaker, and upside only for the stakers who remain.

Additionally, during the cooldown period, if a user wishes to cancel the unstake request, they forgo any gains made during the unstake request period and their share is adjusted accordingly. Those forgone gains are also split amongst the current stakers upon cancellation.

*Note: You cannot unstake while the spot market utilization (or 1hr utilization twap) is above 80%. This does not affect opening/timing on unstake requests.*
