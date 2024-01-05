---
title: Keepers & Decentralised Orderbook
slug: lVe4-keepers-and-decentralised-orderbook
createdAt: Mon Feb 21 2022 02:33:18 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 12:00:24 GMT+0000 (Coordinated Universal Time)
---

## Overview

Drift's decentralised orderbook is powered by our network of [Keeper Bots](<./3 Keeper Bots>). &#x20;

The Keeper Bots match open orders with various on-chain liquidity mechanisms once they cross or their trigger condition is met. These scenarios include:

-   Taker auction against Taker auction;

-   Taker/Maker limit orders against Taker auction;

-   Maker limit orders against Taker limit orders;

-   Taker/Maker orders against the Drift's AMM.

_Note: (1) two post only maker orders cannot be crossed; (2) maker orders that fill against the vAMM are not eligible for rebate reward; and (3) limit orders can be filled by market orders that go through the JIT auction. _

Keepers earn rewards that incentivise:

1.  providing the best execution for takers (relative to the oracle price) and;

2.  following First-Come-First-Serve execution ordering

:::hint{type="info"}
While a robust Keepers network improves throughput/usability, the protocol's core functionality is not crunched upon it. Existing trading bots (JIT makers and resting order takers) implicitly fulfil the role of Keepers.
:::

## Keeper Bots

Keeper Bots listen, store, sort and fill valid limit orders. Keepers do this by compiling all valid open orders found on-chain and organising them into an off-chain orderbook. These orders are sorted by price and age, and if two orders have the same age, they’re then sorted by position size.

Each Keeper holds its own orderbook (hence '_decentralised_ orderbook').&#x20;

Keepers then listen to trigger conditions and match crossing orders and limit orders against the DAMM when the users’ trigger or limit price is met.

For performing this critical duty, the Keepers earn a fee for every trade they execute. Similar to liquidation bots, Keepers will compete for fees in a decentralised system; with the most profitable Keepers being:

1.  the fastest;

2.  the best price improvement for takers; and

3.  the ones that fulfil orders in the protocol’s desired sequence — oldest and largest first.

Reference implementations for the filler and trigger Keepers are provided: [Keeper Bots](<./3 Keeper Bots>).&#x20;

![](../../static/assets/_7EXFtBAy_tQDOSdL_VIL_image.png)

## Keeper Rewards

Currently, the USDC reward function for keepers (_f_keeper_) is designed as:

![](https://archbee.imgix.net/ps_9Ff-LBbQB7IaXI3f3F/7X0tYmUqT218-A0gfXSz-_image.png)

where:
_t_order_ is seconds since the order was placed
_f_user_ is the taker fee paid by the user who placed the order

This reward is subject to evolve to incentivise CLOB-like execution ordering. See [\[source code\]](https://github.com/drift-labs/protocol-v1/blob/c748c64fcfa6d7fd5aba72f7021218dd6aaa02f0/programs/clearing_house/src/math/fees.rs#L257) for the on-chain calculation.

![plot of filler rewards (given user fee)](../../static/assets/fE8crUZ8eZ9vqRg8SShhi_newplot-24.png)

A Keeper reward multiplier (for taker price improvement) is applied to the keeper's minimum time-based reward component in the function above. Any percent improvement versus the baseline `oracle +/- 10bps`, increases this multiplier.

## Build Philosophy

The decentralised orderbook is designed with two core values in mind:

1.  **\*decentralisation\*\***;\* and

2.  **_computational efficiency_**.

**_Decentralisation_** is achieved through our network of hybrid off-chain Keepers that anyone can build and run — similar to liquidator bots.

**_Computational efficiency_** is achieved by leaving the order-filling logic — the part that requires the most computational power — off-chain, and filling them on-chain upon a trigger.

Hence, Drift’s unique limit order system is a **_hybrid _**system that uses a combination off-chain Keepers and on-chain settlement.
