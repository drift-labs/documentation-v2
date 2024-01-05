---
title: Trading Fees
slug: 3F0d-trading-fees
createdAt: Wed Jul 20 2022 10:32:44 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Oct 06 2023 13:12:44 GMT+0000 (Coordinated Universal Time)
---

Trading fees on Drift are calculated on a per-trade basis and are based on the filled notional position size.&#x20;

Trading fees are calculated in the market's quote asset (USDC) and show up in Perpetual Markets as a penalty on the cost basis of position. In the circumstance where a user only holds non-USDC assets on Drift, a borrow for USDC will only appear upon someone settling that perp position's loss (see [P\&L](<../P&L/0 P_L>)).

Drift Protocol has a tiered fee structure for all futures markets based on an on-chain calculation of 30-Day Volume\*.&#x20;

Some markets, like BTC-PERP and ETH-PERP, have reduced fees. For October and November, these are 25% of the current schedule below.

---

Perpetual Trading Fees are charged on a per-tier basis according to the following schedule:

| **Tier** | **USDC&#xA;Insurance Fund Staked Amount** | **Volume (30D)** | **Maker Fee** | **Taker Fee** | **Referree Taker Discount** | **Referrer Reward** | **Filler Reward ** |
| -------- | ----------------------------------------- | ---------------- | ------------- | ------------- | --------------------------- | ------------------- | ------------------ |
| 1        | < 500                                     | < 1m&#x20;       | -2 bps        | 10 bps        | 5%                          | 15%                 | 10%\*              |
| 2        | < 500                                     | > 1m             | -2 bps        | 9 bps         | 5%                          | 15%                 | 10%\*              |
| 3        | > 1K                                      | > 5m             | -2 bps        | 8 bps         | 5%                          | 15%                 | 10%\*              |
| 4        | > 2K                                      | > 10m            | -2 bps        | 7 bps         | 5%                          | 15%                 | 10%\*              |
| 5        | > 5K                                      | > 50m            | -2 bps        | 6 bps         | 5%                          | 15%                 | 10%\*              |
| VIP      | > 10K                                     | > 100m           | -2 bps        | 3 bps         | 5%                          | 15%                 | 10%\*              |

### Taker Fees

Takers are charged a variable Taker Fee depending on which Tier they belong to.&#x20;

**Tier 1 -- 10 bps**:\*\* \*\*Default tier.&#x20;

**Tier 2 -- 9 bps**:\** \*\*Either stake more than 500 *or\* trade over 1m in volume (30D average).

**Tier 3 -- 8 bps**:\** \*\*Either stake more than 1K *or\* trade over 5m in volume (30D average).

**Tier 4 -- 7 bps**:\** \*\*Either stake more than 2K *or\* trade over 10m in volume (30D average).

**Tier 5 -- 6 bps**:\** \*\*Either stake more than 5K *or\* trade over 50m in volume (30D average).

**VIP -- 3 bps**:\** \*\*Either stake more than 10K *or\* trade over 100m in volume (30D average).

### Maker Fees

Makers are provided with a flat 2bps rebate regardless of the Taker Fee paid.&#x20;

**\*Note: \*\***Maker orders that are filled against the AMM are not eligible for the maker rebate. Only maker orders that are filled against taker limit orders (orderbook matching) or taker market orders (JIT auction) are eligible for the 2bps rebate.

Maker orders that are filled against the AMM will incur zero fees. \*

### **Referee Discount / Referer Reward**

These apply to accounts that were signed up using a referred account. These percentages are applied to the effective taker fee paid.

### Filler Reward

Filler rewards are variable but up to 10% of the effective taker fee paid by the user. See [Keeper Incentives](<../0 About Drift v2/5 Keeper Incentives>).

### Disclaimers

_Drift Protocol reserves the right to end the promotional period and the Taker Incentive Program at any time. If the Drift Protocol chooses to do so, it will provide notice to participating users, but such notice is not required in order to conclude the program early or extend the program. Please note that the terms and conditions of this program are subject to change without notice._

**_There are risks associated with Insurance Fund Staking. Read more about the _**[Insurance Fund Staking](<../Insurance Fund/1 Insurance Fund Staking>) and [Risks ](<../Security/Risks .md>))**_._**

---

_\*Maker/Taker 30-Day Volume is tracked on-chain. The calculation uses an aggregate rolling sum estimate across all the user's subaccounts._
