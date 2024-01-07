---
title: Risks 
slug: CkcJ-risks
createdAt: Thu Aug 18 2022 11:07:47 GMT+0000 (Coordinated Universal Time)
updatedAt: Wed Jun 07 2023 12:03:37 GMT+0000 (Coordinated Universal Time)
---

All DeFi protocols, including Drift, come with risks, which are important to understand before depositing significant amounts of crypto. Some of the main risks involved in using Drift are outlined here.&#x20;

Further risk parameters are also set out in  and [Risk Parameters](<../Drift Protocol v2 Docs/Risk Parameters>).

**Smart Contract and UI Risk**

There is a risk that the smart contract or UI has a bug or exploit for unexpected behaviour resulting in loss of funds. This risk is inherent to all smart contracts and relies upon the discipline of the development community, core contributors, and auditors.

**Blockchain Risk**

The Solana blockchain remains under development, which creates technological, uncertainty and security risks that Drift has no control over. The cost of transacting on the Solana blockchain is variable and may increase or decrease at any time causing an impact on any activities taking place on the Solana blockchain, which may result in losses, price fluctuations or increased costs.

**Oracle Risk**

Drift relies on Pyth for their price feeds to power liquidations. There is a risk that these oracles report incorrect prices which can result in wrongful liquidations and loss of all funds. &#x20;

**Levered/Social Loss Risk**

In the event of sharp price movements, traders with levered positions can lose more than their collateral value. In the event of the Insurance Fund not being sufficiently capitalised, these losses will be socialised across market participants.

**Liquidation Risk**

Drift offers both leveraged perpetual swaps and borrow/lend. For perpetual swaps, there is the risk of liquidation when a user's margin ratio poses a stability risk to the exchange. The user's collateral can get liquidated when the value of the user's collateral drops below the user's maintenance margin fraction.

**Long/Short Imbalance Risk**

Drift's DAMM is the counterparty to all trades taken against the DAMM. This means that the DAMM itself has delta risk, and this risk is magnified when market conditions skew on either side and the imbalance between longs and shorts increases.

The DAMM has protections in place to prevent the long short imbalance from skewing too heavily to either side. More information on that is here at: [Drift AMM](<../0 About Drift v2/1 Drift AMM>). Despite these protections, there is still a risk that the DAMM will be exposed to delta risk in periods of significant volatility.

**No Off-Setting Loss Risk**

The unrealised P\&L users can lock in from entering and exiting a trade against the AMM is technically unbounded (e.g. if BTC goes toward infinity).&#x20;

Whilst a user can achieve this unrealised gain, it is important to note that an offsetting loss (or sufficient fees collected) is necessary before the unrealised gain can be settled in full and withdrawable as collateral by the user.

Additionally, if the unrealised P\&L imbalance exceeds its per-market threshold, those unrealised gains may be discounted by the margining system (initial, not maintenance) to prevent large borrows against it. This discounting would only impact new positions being opened and would not affect a user's liquidation threshold.

These rules are systemitised and can be read more in [P\&L](<../P&L/0 P_L>) and [Margin](<../Trading/4 Margin>)

**Untimely Liquidation Risk**

In the event of large-scale liquidations or market turmoil, there is a possibility that positions and balances are not able to be liquidated in time and are unable to cover the losses taken out by the liquidated user. The shortfall "or negative balance" is treated as levered losses.

In the past, levered losses in the main pool have been filled via top-ups from the Insurance fund. In the event that the Insurance Fund is depleted, there will be a socialized loss in the system.

**100% Utilization Risk**

When an asset is fully utilized (100% of the supply is lent out), there will be no tokens left in the pool, which means withdrawals and borrows will fail. Users will have to wait until the utilization rate goes down, either through some users repaying their loans or depositing new funds before they can withdraw or borrow.

A user is more likely to be affected by this if their deposit represents a large share of the pool, or if the asset has extremely high borrow demand.

