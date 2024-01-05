---
title: Borrow Interest Rate
slug: NNHx-borrow-interest-rate
createdAt: Thu Oct 20 2022 23:33:40 GMT+0000 (Coordinated Universal Time)
updatedAt: Sat Jun 24 2023 17:02:32 GMT+0000 (Coordinated Universal Time)
---

Drift's lending pools work similarly to the lending pools of [Aave](https://app.aave.com/reserve-overview/?underlyingAsset=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&marketName=proto_mainnet).

Each market has an optimal borrow rate and max borrow rate and uses this piecewise function based on the Utilisation Rate (**\*U\*\***)\*.

The Utilisation Rate represents the availability of capital within the system.&#x20;

-   If **_U _**is high -- there is abundant capital within the system and the protocol users are given incentives in the form of low-interest rates to encourage borrowing;&#x20;

-   If **_U_** is low -- capital within the system is scarce and the protocol will increase interest rates to incentivise more capital supply and repayment of debt.&#x20;

#

_Note: this model has been adapted from Aave's _[_interest rate model_](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate)_. The parameters and model will be iterated and improved as Drift's borrow lend engine grows. Last Updated: 21 October 2022_.

The interest rate is based on the [borrow utilisation](https://github.com/drift-labs/protocol-v2/blob/master/programs/drift/src/math/spot_balance.rs#L124).&#x20;

Liquidity risk materialises when utilisation is high and this becomes more problematic as **_U _**gets closer to 100%.&#x20;

To tailor the model to this constraint, the interest rate curve is split into two parts around an optimal utilisation rate **_Uo_**. Before **_Uo _**the slope is small, after it begins rising sharply.

The interest rate (`InterestRate`) model:

![](../../static/assets/MSvRPknbmzxMycrtC1zch_image.png)

The resulting model produces the following graph:&#x20;

![](../../static/assets/2w-6cQt10OwriM7aGzbKN_drift-graph-utilisationrate-1.png)
