---
title: Cross-Collateral Deposits
slug: NtFm-cross-collateral-deposits
createdAt: Wed Jul 20 2022 07:23:40 GMT+0000 (Coordinated Universal Time)
updatedAt: Sat Oct 14 2023 10:44:04 GMT+0000 (Coordinated Universal Time)
---

Drift supports cross-collateral token deposits, specifically: USDC and SOL. These can be used for margin within the Perpetuals Markets.

By default, markets are quoted in USD and P\&L is settled in USDC. All tokens deposited within the protocol can earn yield via Borrow/Lend. Until unrealised P\&L is settled into your Balances, it will not earn (if profits) or be charged (if losses) the deposit/borrow interest respectively.

Below is a table of assets supported by Drift Protocol.&#x20;

Each asset counts towards margin for derivatives trading and has a weight applied to account for their respective volatilities.&#x20;

:::hint{type="info"}
For instance, depositing USDC gives users a 1:1 margin for derivatives trading, but depositing SOL (80% asset weight) means that 80% of the value of your SOL at the opening of your position will be available as margin for perpetual futures trading.
:::

**Margin **Parameters****

| **Asset**     | **Initial Asset Weight** | **Maintenance Asset Weight** | **Initial Liability Weight** | **Maintenance Liability Weight** | **IMF Factor** |
| ------------- | ------------------------ | ---------------------------- | ---------------------------- | -------------------------------- | -------------- |
| USDC          | 100%                     | 100%                         | 100%                         | 100%                             | 0              |
| SOL           | 80%                      | 90%                          | 120%                         | 110%                             | 0.003          |
| mSOL          | 80%                      | 90%                          | 120%                         | 110%                             | 0.003          |
| wBTC (portal) | 80%                      | 90%                          | 120%                         | 110%                             | 0.105          |
| wETH (portal) | 80%                      | 90%                          | 120%                         | 110%                             | 0.025          |
| USDT          | 90%                      | 95%                          | 110%                         | 105%                             | 0.0004         |
| JitoSOL       | 80%                      | 90%                          | 120%                         | 110%                             | 0.00055        |

The IMF Factor acts as a discount on account size:

`Initial Asset Weight` on 2000 SOL Collateral (using above) would be:

`weight = min (.80, 1.1 / [ 1 + (0.003 * sqrt(2000)] )`

`= min(.80, ~.96987) = .80`

An asset's liability weight can be converted into an LTV ratio using:

`ltv = 1 / liability weight`

| **Asset** | **Initial LTV** | **Max LTV** |
| --------- | --------------- | ----------- |
| SOL       | 83.3%           | 90.9%       |



