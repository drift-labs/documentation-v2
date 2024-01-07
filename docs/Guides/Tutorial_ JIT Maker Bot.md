---
title: "Tutorial- JIT Maker Bot"
slug: isEC-tutorial-jit-maker-bot
createdAt: Mon Aug 15 2022 18:33:09 GMT+0000 (Coordinated Universal Time)
updatedAt: Mon May 15 2023 12:16:34 GMT+0000 (Coordinated Universal Time)
---

Market orders go through the [Just-In-Time (JIT) Auctions](<../0 About Drift v2/6 Just-In-Time _JIT_ Auctions>) where Makers fight to fill orders before the order is allowed to fill against the [Drift AMM](<docs/About Drift v2/1 Drift AMM>).&#x20;

JIT Maker Bots maintain a local copy of the decentralised orderbook (DLOB) (see: [Keepers & Decentralised Orderbook](<../0 About Drift v2/4 Keepers _ Decentralised Orderbook>)) in order to see which orders are in the auction phase and can be bid on.

# Getting Started

**☠️\*\*\*** This bot requires collateral to run. This tutorial is a developer's guide and holds no responsibility over bot outcomes.\*\*\*

The reference implementation of the JIT Maker Bot is available [here](https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/jitMaker.ts).

Follow the instructions at [Keeper Bots](<../0 About Drift v2/3 Keeper Bots>) to set the required environment variables, initialise the`ClearingHouseUser` and deposit some collateral.

Start the JIT Maker Bot:

```shell
yarn run dev:jitmaker
```

# Technical Explanation

## Streaming User Orders

The Typescript SDK exposes an EventSubscriber object that you can use to receive market orders on-chain.

```typescript
import { EventSubscriber, OrderRecord } from "@drift-labs/sdk";

// clearingHouse init omitted for brevity

const pollEventsConfig = {
    type: "polling",
    frequency: 1000,
};
const websocketEventsConfig = {
    type: "websocket",
};

const eventSubscriber = new EventSubscriber(connection, clearingHouse.program, {
    maxTx: 8192,
    maxEventsPerType: 8192,
    orderBy: "blockchain",
    orderDir: "desc",
    commitment: "confirmed",
    logProviderConfig: pollEventsConfig,
});
eventSubscriber.subscribe();

eventSubscriber.eventEmitter.on("newEvent", async (event) => {
    if (event.eventType === "OrderRecord") {
        const order = event as OrderRecord;
        // 1) update dlob
        // 2) get orders from DLOB still in auction
        // 3) bid on auctions
    }
});
```

## Bidding on JIT Auctions

Technical details on the JIT Auction and its pricing can be found at [Just-In-Time (JIT) Auctions](<../0 About Drift v2/6 Just-In-Time _JIT_ Auctions>). The reference implementation acts on each user order received and makes the order in the opposite direction at the auction end price with a random order size between `20` and `MAX_TRADE_SIZE_QUOTE`.

```typescript
// after finding a DLOB node still in the auction period
const jitMakerDirection = isVariant(nodeToFill.node.order.direction, "long")
    ? PositionDirection.SHORT
    : PositionDirection.LONG;

// the auction start price will always be valid, but is not necessarily the best price
const jitMakerPrice = nodeToFill.node.order.auctionStartPrice;

// fill the entire order
const baseAmountToFill = nodeToFill.node.order.baseAssetAmount.sub(
    nodeToFill.node.order.baseAssetAmountFilled
);

const txSig = await this.driftClient.placeAndMake(
    {
        orderType: OrderType.LIMIT,
        marketIndex: nodeToFill.node.order.marketIndex,
        baseAssetAmount: baseAmountToFill,
        direction: jitMakerDirection,
        price: jitMakerPrice,
        postOnly: true,
        immediateOrCancel: true,
    },
    {
        taker: action.node.userAccount,
        order: action.node.order,
    }
);
console.log(`Bid on JIT auction: ${txSig}`);
```

## Determine how much longer the auction will last

It may be helpful to determine how much time is left in the order's auction in order to get the current dutch auction price:

```typescript
// determine how much auction time is left
const orderSlot = nodeToFill.node.order.slot.toNumber();
const currSlot = slotSubscriber.getSlot();
const aucDur = new BN(nodeToFill.node.order.auctionDuration);
const aucEnd = orderSlot + aucDur;

console.log(
    `it has been ${currSlot - orderSlot} slots since order, auction ends in ${
        aucEnd - currSlot
    } slots`
);
```

## Tracking Open Positions and Orders

The main `ClearingHouse` object from the SDK will update (polling or WebSocket) the user's account details behind the scenes. You can access the open orders and open positions of the user account by reading the `positions` and `orders` object of the `ClearingHouseUser`.

```typescript
// you can force the sdk to fetch latest account data
await this.driftClient.fetchAccounts();
await this.driftClient.getUser().fetchAccounts();

const user = this.driftClient.getUser();

// check open positions
for (const p of user.getUserAccount().positions) {
    if (p.baseAssetAmount.isZero()) {
        // no open position in this index
        continue;
    }

    console.log(p);
}

// check open orders
for (const o of user.getUserAccount().orders) {
    if (isVariant(order.status, "init")) {
        // no open order in this index
        continue;
    }
}
```
