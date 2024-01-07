---
title: Oracles
slug: 22EZ-oracles
createdAt: Wed Jan 26 2022 21:27:40 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:16:32 GMT+0000 (Coordinated Universal Time)
---

Drift Protocol has a number of resiliency checks around new oracle data as well as updates an oracle twap for its margin risk engine. Each market tracks the last seen oracle values and updates an EMA of TWAP for over both 1hr (funding period) and 5min intervals.

Drift utilises as an oracle source.  The protocol has the flexibility to update and customize as necessary on a per-market basis.

### Validity Checks

For robustness, Drift's program checks oracle validity. The validity is evaluated on a per-check and action basis to determine whether to block actions. See [Protocol Guard Rails](<../Risk & Safety//1 Protocol Guard Rails.md>) for more details.

1\. Stale(ForAmm/ForMargin): (last slot update too far behind the current slot, **10/120 slots**)

2\. InvalidPrice: Negative price (any price field **< 0**)

3\. TooVolatile: (TWAP / price ratio out of bounds, **5x or 1/5x**)

4\. TooUncertain: Confidence interval is too large (confidence if a very large percentage of the price, **>10%**)

**When the oracle for a Perpetuals Market is deemed invalid, the market can block some order fills, withdraws, liquidations, and funding rate updates (if they increase protocol risk).&#x20;

**For the duration of the invalid period, on-chain oracle TWAP calculation aims to shrink toward mark TWAP to avoid erroneous funding payment magnitudes.&#x20;

