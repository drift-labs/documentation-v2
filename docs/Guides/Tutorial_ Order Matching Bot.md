---
title: "Tutorial- Order Matching Bot"
slug: 6Apm-tutorial-order-matching-bot
createdAt: Mon Aug 15 2022 17:24:43 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Mar 03 2023 20:40:41 GMT+0000 (Coordinated Universal Time)
---

# Introduction

Order Matching Bots (Matching Bots) are responsible for matching two orders that cross or a taker order against the DAMM. Specifically, this includes:&#x20;

-   **Market Orders**: Market Buy and Market Sell

-   **Limit Orders**: Limit Buy and Limit Sell&#x20;

Matching Bots receive a small compensation for each order that they successfully fill.

See [Keepers & Decentralised Orderbook](<../0 About Drift v2/4 Keepers _ Decentralised Orderbook>) for a technical explanation of how the decentralised orderbook (DLOB) and matching incentives work.

Matching Bots are similar to [Tutorial: Order Trigger Bot](<../Guides/Tutorial_ Order Trigger Bot.md>) in that they:

-   also maintain a local copy of the Decentralised Limit Orderbook (DLOB);

-   do not require the operator to manage collateral; and

-   receive a small reward for performing their duties.

# Getting Started

The reference implementation of the Order Matching Bot is available [here](https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/filler.ts).

Follow the instructions at [Keeper Bots](<../0 About Drift v2/3 Keeper Bots>) to set the required environment variables and make sure a `ClearingHouseUser` is initialized.

Start the Matching Bot:

```shell
yarn run dev:filler
```

# Technical Explanation

## 1. Get nodes from the DLOB that are ready to be filled

Market orders that are sent on the Drift Protocol first go through the [Just-In-Time (JIT) Auctions](<../0 About Drift v2/6 Just-In-Time _JIT_ Auctions>). After the auction period, Matching Bots step in to fill orders for a small reward.&#x20;

The DLOB implementation includes a method for getting orders ready to be filled:

```typescript
const market = this.clearingHouse.getMarketAccounts()[0]; // get a MarketAccount

const oraclePriceData = this.driftClient.getOracleDataForMarket(marketIndex);
const oracleIsValid = isOracleValid(
    market.amm,
    oraclePriceData,
    this.driftClient.getStateAccount().oracleGuardRails,
    this.slotSubscriber.getSlot()
);

const vAsk = calculateAskPrice(market, oraclePriceData);
const vBid = calculateBidPrice(market, oraclePriceData);

const nodesToFill = this.dlob.findNodesToFill(
    marketIndex,
    vBid,
    vAsk,
    this.slotSubscriber.getSlot(),
    oracleIsValid ? oraclePriceData : undefined
);
```

## 2. Filter for Fillable Nodes

To avoid trying to fill orders that aren't ready to be filled, filter out orders that are too small to fill

```typescript
if (
    !nodeToFill.makerNode &&
    (isVariant(nodeToFill.node.order.orderType, "limit") ||
        isVariant(nodeToFill.node.order.orderType, "triggerLimit"))
) {
    const baseAssetAmountMarketCanExecute =
        calculateBaseAssetAmountMarketCanExecute(
            market,
            nodeToFill.node.order,
            oraclePriceData
        );

    if (
        baseAssetAmountMarketCanExecute.lt(market.amm.baseAssetAmountStepSize)
    ) {
        // skip order
        continue;
    }
}
```

## 3. Call `fill_order` on `DriftClient`&#x20;

```typescript
const user = this.userMap.get(nodeToFill.node.userAccount.toString());
const txSig = await this.driftClient.fillOrder(
    nodeToFill.node.userAccount,
    user.getUserAccount(),
    nodeToFill.node.order,
    undefined
);
```
