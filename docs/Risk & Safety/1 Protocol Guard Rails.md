---
title: Protocol Guard Rails
slug: mqjG-protocol-guard-rails
createdAt: Thu Sep 22 2022 14:59:57 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 12:06:15 GMT+0000 (Coordinated Universal Time)
---

### Oracle Validity

Drift Protocol's dependence on external oracle accounts requires thoughtful consideration of the data point in the streams received.

In the program [\[code\]](https://github.com/drift-labs/protocol-v2/blob/e04139e49e41dbbbaecbd5af9f038f6ce194f591/programs/clearing_house/src/math/oracle.rs#L15), this is encoded as a spectrum from Valid to Invalid, with a few different categories of questionability that depend on the action taken (ordered by severity):

*   **Invalid**

*   **TooVolatile**

*   **TooUncertain**

*   **InsufficientDataPoints**

*   **StaleForMargin**

*   **StaleForAMM**

*   **Valid**

The processing of new data is as follows:

*   retrieve new data point

*   sanitize new data point

*   updates state variables

*   check the validity of unsanitized new data point v.s. updated state&#x20;

Processing data this way is meant to prevent a single new data point from creating a shock to the state variables (i.e. TWAP). A complete list of block conditions for actions is described 

Notes:

*   The on-chain oracle TWAP calculation will also be shrunk proportional to the duration of the invalid period to avoid erroneous funding payment magnitudes.&#x20;

*   Blocking on InsufficientDataPoints can help improve resiliency against oracle manipulation.

### Oracle Divergence

For perpetuals markets, there are checks to `validate_market_within_price_band` for the following actions:

*   fill\_order

*   settle\_pnl

*   resolve\_perp\_pnl\_deficit

The check validates that the 5-minute oracle twap vs amm reserve price is within \~10% (see `PriceDivergenceGuardRails` for exact parameters).&#x20;

Its important to note that:

1\) amm reserve price always update with valid oracle data for amm and;&#x20;

2\) new data points for 5-minute oracle twap are sanitized to be within 10, 20, or 50% of the last twap value (depending on the `ContractTier`)

Thus, it may take multiple intervals to bypass these circuit breakers for sufficiently large price moves.

For spot markets, there are safety initial margin requirement checks for the following actions:

*   place\_order

*   withdraw

A user's asset / liabilities when calculating total collateral for initial margin checks for withdraws and placing orders will be the lesser / greater (respectively) of the 5-minute oracle twap and current oracle price. This lowers leverage extended by the protocol to users with positions in volatile markets.

### Exchange & Market Status

ExchangeStatus and MarketStatus can be updated to prevent certain actions when specific issues are identified (described [here](https://github.com/drift-labs/protocol-v2/blob/8b46cfc628f317e4f07cd62f111dd73fabff8a96/programs/clearing_house/src/state/state.rs#L35)). These actions can include:

*   funding rate updates;

*   liquidations;

*   AMM fills;

*   any fills; and

*   withdraws

