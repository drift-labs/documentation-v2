---
title: Revenue Pool
slug: diSR-revenue-pool
createdAt: Sun Sep 11 2022 17:29:41 GMT+0000 (Coordinated Universal Time)
updatedAt: Mon May 08 2023 16:30:49 GMT+0000 (Coordinated Universal Time)
---

A portion of the fees collected within the protocol (denominated in a particular token: USDC, SOL, etc) go into that spot market's revenue pool.&#x20;

The revenue pool increases from various portions of the protocol:

1.  borrow fees

2.  spot market exchange fees

3.  perpetual market exchange fees

4.  liquidations

and ultimately goes to fund:&#x20;

1.  insurance vault

2.  perpetual market amm (conditionally)

### Insurance Fund

Every hour (on the hour), a portion of the revenue pool can be settled to the insurance fund using the permissionless `settle_revenue_to_insurance_fund` instruction:

If the insurance fund has users staked, each individual hourly settlement is capped to what would amount to 1000% APR

*   thus an astronomically large inflow into the revenue pool (relatively to user insurance staked amounts) would result in revenue that slowly reaches the insurance over a longer period of time rather than immediately&#x20;
    *   this encourages more insurance fund stakers (who require a medium horizon of insurance offering) to join during the high annualised cap inflow&#x20;

Insurance Fund Stakers must adhere to the cooldown period for withdrawals (see [Insurance Fund Staking](<../Insurance Fund/1 Insurance Fund Staking>)).

### Spot Markets

Spot Markets allow for swaps between tokens and interest payments between depositors and borrowers. These token swaps and flow of interest are parameterised to allow fee collection for the revenue pool and thus ultimately insurance.

Within the program, its parameterised by the following **in bold**:

| Field                   | Description                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `total_if_factor`&#x20; | percentage of the borrow interest reserved for revenue pool                                                             |
| `user_if_factor`&#x20;  | this proportion of `total_if_factor` is reserved for staked users (the other piece is reserved for the protocol itself) |
| `liquidation_if_factor` | the proportion of liability transfer in `liquidate_borrow` that is sent to the revenue pool                             |

Thus the following must be true: `user_if_factor <= total_if_factor`.  For example, if the `total_if_factor` is 100%, depositors would receive no interest from borrows.

The following instructions interact w/ the insurance fund:

*   `resolve_borrow_bankruptcy`

### Perpetual Markets

Perpetual Markets are bootstrapped by the [Drift AMM](../Drift%20Protocol%20v2%20Docs/docs/About%20Drift%20v2/1%20Drift%20AMM) which depending on market-making performance conditions can add and remove funds from the revenue pool.

Within the program, its parameterized by the following **in bold**:

| Field                                             | Description                                                                                                           |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `max_revenue_withdraw_per_period`                 | the amm's max revenue pool draw per period&#xA;(note this doesn't include bankruptcy resolution)&#x20;                |
| `revenue_withdraw_since_last_settle`       &#x20; | revenue pool draws on behalf of user pnl since the last settle(note this doesn't include bankruptcy resolution)&#x20; |
| `last_revenue_withdraw_ts`                        | the last timestamp of a revenue withdraw &#xA;(track in order to reset the period)                                    |

A perpetual market's amm may draw up to `max_revenue_withdraw_per_period` from the revenue pool every period.



Additionally, for direct draws from the insurance fund, it parameterized by the following **in bold**:

| Field                           | Description                                                                                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `quote_settled_insurance`       | settled funds from the insurance fund since inception&#x20;                                                                                                             |
| `quote_max_insurance`           | max funds it can settle from insurance fund since inception                                                                                                             |
| `unrealized_max_imbalance`** ** | max amount of pnl the net users can be owed within a market before:&#xA;1\. draws from insurance are allowed&#xA;2\. initial asset weights for this pnl gets discounted |

Unlike spot markets, perp markets are capped by the max draw from insurance via `quote_max_insurance`

`quote_settled_insurance` tracks the insurance fund draw amount since inception. Once this threshold is reached or the insurance fund is depleted, the market will then resort to the AMM [Fee Pool](<../Trading/10 Fee Pool>). For any remaining losses not covered, the market will perform socialized losses in bankruptcy events.

The following instructions interact w/ the insurance fund:

*   `resolve_perp_pnl_deficit`

*   `resolve_perp_bankruptcy`

notes:&#x20;

`resolve_perp_pnl_deficit` can only be resolved by insurance fund deposits (within the market's constraints), not by social loss with other users

