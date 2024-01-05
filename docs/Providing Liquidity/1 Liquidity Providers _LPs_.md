---
title: Liquidity Providers (LPs)
slug: -nUC-liquidity-providers-lps
createdAt: Tue Aug 23 2022 13:13:23 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Aug 04 2023 13:02:05 GMT+0000 (Coordinated Universal Time)
---

## Overview

Users can become a Liquidity Provider (LP) by allocating margin into any perpetual market offered by the vAMM.&#x20;

By doing so, LPs increase the liquidity depth and collateralisation within the market and earn a rebate from taker fees.

LPs on Drift acquire opposing positions from new trades against the vAMM, regardless of the vAMM's net position. As such, LPs are effectively investing in an active liquidity provision strategy on Drift's vAMM. Once positions are settled for an individual LP, they will pay/earn the market's funding rate.

Users are also able to LP with leverage.

### Adding/Removing Liquidity&#x20;

When an LP adds liquidity to the vAMM, they increase the amount of liquidity on the AMM curve by increasing **k **in the constant product curve.&#x20;

Specifically, `sqrt_k` is incremented by the number of `lp_shares` the LP takes on ([code](https://github.com/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/lib.rs#L926-L933)) and so the proportion of liquidity provided to the vAMM is the ratio: `lp_shares / sqrt_k`.&#x20;

This ratio is used throughout the code to calculate the amount of base/quote asset amounts to give to LPs.&#x20;

Similarly, when an LP burns their `lp_shares`, k is decremented by the number of shares burned leading to a smaller k and more slippage for traders. In sufficiently large market imbalances, a user may be blocked from burning their LP shares.

Additionally when burning shares, if the unsettled position base amount is not a multiple of the market's step size, the remainder amount is burned **at cost**. For instance, if the step size for SOL-PERP is .01, a remainder amount below this (say `.0099`) is charged by multiplying by the oracle price to the settled quote amount. This charge only occurs on burning shares, otherwise, with normal position settlement, remainder amounts will keep growing/shrinking and settlable once the total unsettled amount is a multiple of the step size.

### Trading Fees

80% of the taker fees collected by the vAMM are be given out to LPs. The disbursements are calculated as a percentage of the pro-rata liquidity provided to the vAMM.&#x20;

For example, if the fee collected by the vAMM is 10 bps after filler rewards, and the vAMM was fully collateralised by LPs, then LPs would receive 8 bps out of the 10bps taker fee. If it was half collateralised by LPs, then LPs would receive  4 bps out of the 10bps taker fee (but also only half the opposing position).

This fee will be reflected in an improved cost basis of the positions acquired ([code](https://github.com/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/controller/position.rs#L469)).&#x20;

For example, if the LP received a 1 SOL short position with a cost basis of 100 USD and earned a 1 USD fee, then the LP's final position would be a 1 SOL short with a cost basis of 101 USD* *(ie, the original position with a +1 USD P\&L incorporated).

Note that this fraction is a higher proportion than the active JIT maker rebate.&#x20;

### Margining

The amount of margin available for LPs is calculated as a combination of their current unsettled position and open orders ([code](https://github.dev/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/math/margin.rs#L181-L208)). The LP's unsettled position is treated as a regular market position without unrealized funding payments (see Funding section below) while the LP's open orders are treated as normal open orders (i.e., taking the largest base asset amount that can be acquired through either the open asks or bids ([code](https://github.com/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/state/user.rs#L237-L258))).&#x20;

The number of open bids/asks for an LP share is the amount of base asset amount it takes on if the base asset reserves reached either the lower or upper bound from its current value ([code](https://github.dev/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/math/lp.rs#L120)). For example, if the current base asset reserves are 50 and the lower and upper bounds are 0 and 100 respectively, then the LP will have an equal amount of open bids and asks (ie, 50 open asks and 50 open bids when providing 100% of the liquidity). However, if the base asset reserves are 25 with the same bounds, then the LP will have more open asks than bids (ie, 75 open asks and 25 open bids when providing 100% of the liquidity) and so it will have a larger margin requirement than the first example (ie, 75 > 50). For full examples, check out the margin tests [here](https://github.dev/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/math/margin.rs#L789-L790).

A user that decides to provide liquidity can opt to use leverage, similar to open orders. This puts them at increased risk of liquidation. Fortunately, a liquidation will remove their LP shares (to acquire more free margin) prior to liquidating any positions and applying larger penalties. This gives LP shares more leeway prior to liquidation.

### Funding

Users with LP shares who acquire positions through the vAMM acquire **unsettled positions**. Only once the positions are settled can they participate in funding payments. By default, the vAMM will act as the custodian of their position for funding payments prior to being settled. This means that LPs will need to be settled each funding period to earn their full funding payments.

LPs only earn funding on settled positions, to defend against malicious LPs and ensure all LPs earn the correct amount of funding.

### Design Consideration / Constraints

At a high level, we track how much base/quote\_asset\_amount to give each lp by tracking a "last\_...\_per\_lp" variable for both the base and quote amount when they first add liquidity (ie, *last*\_base\_asset\_amount\_per\_lp and *last*\_quote\_asset\_amount\_per\_lp respectively). For each trade that occurs on the protocol, the program updates these variables so the LPs get a slice of the opposite side of the trade (ie, if a trader opens a long then the base\_asset\_amount\_per\_lp variable would be decremented to track that the lp opens a short) ([code](https://github.com/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/controller/position.rs#L433-L448)). To determine how much base/quote to give LPs when they burn their shares, the program takes the difference between the current per\_lp values and the last per\_lp values and multiply it by the number of shares they have ([code](https://github.com/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/math/lp.rs#L62-L73)).

Following a similar pattern with the funding payments (eg, using a last\_funding\_payments\_per\_lp variable which is updated each time funding payments are distributed) would not work because the per\_lp metrics can only tell you how much base asset amount the LPs have in total and not how much each LP has taken on individually. Following this pattern would enable an attack where a malicious LP adds a large amount of liquidity before the funding rate is updated and removes it right after the funding is updated, earning all of the funding payment without holding any base asset amount. The solution to this problem is to give unsettled positions to LPs which don't earn funding until they call the [settle\_lp function](https://github.com/drift-labs/protocol-v2/blob/190b042a4eeec8521aa6e9b54c094fbdea6a28d9/programs/clearing_house/src/lib.rs#L780) and then calculate funding payments on these settled market positions like normal.

### Protections

The vAMM has many protections against toxic flow which are implicitly applied to LPs (see [Optimisations](<../0 About Drift v2/9 Optimisations>)).&#x20;

Guards against botting activity aimed at taking advantage of auction order flow are also in place. These guards can be fine-tuned over time.&#x20;

:::hint{type="info"}
A brief cooldown period to burn LP shares (30 seconds since the last liquidity addition) is in place to prevent the potential atomic MEV capture of flow from the protocol/non-bot LPs.
:::

