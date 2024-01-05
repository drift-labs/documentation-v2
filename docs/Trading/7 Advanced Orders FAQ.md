---
title: Advanced Orders FAQ
slug: p4qc-advanced-orders-faq
createdAt: Tue Feb 22 2022 07:45:09 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 10:54:40 GMT+0000 (Coordinated Universal Time)
---

**How are the Limit Orders filled?**

Limit Orders are taker orders that are filled against the DAMM. 
The orders are stored and settled on-chain. The queue is constructed by a network of off-chain keepers that are incentivised to fill orders against the DAMM based on age.

**Is there a charge for placing an order? Is that charged in SOL or USDC?**

Network fees aside, there is no additional SOL charge for placing an order. The taker fee is charged in USDC and is only applied if the trade is filled. If a trade is only partially filled, the fee charged will be for the notional amount filled.&#x20;

**Is there a charge for cancelling an order? Is that charged in SOL or USDC?**

No - if you cancel an open order, you will not be charged by the protocol. Fees are only charged on filled orders.

**Is my order guaranteed to execute?**

These orders are executed 'best effort' by the network with special economic incentives designed to mimic the typical execution order seen in a Centralised Limit Order Book (CLOB).&#x20;

**What are conditional limit orders?**

Conditional limit orders are only placed on the market when the conditions for the orders are met. For instance, stop orders are only placed on the market when the trigger price is hit (the condition being the trigger price).&#x20;

**What is the difference between a Stop Market and a Stop Limit?**

Both orders are used as downside protection to stop losses. However, where they differ is how the orders are executed. A Stop Market order is immediately sold on the market in full once the trigger price is reached. Stop Limits are slightly different - rather than opening a Market Order, it opens a new limit order which can have a different price to the trigger price used to create the limit order.

**What is the difference between Take Profit Market and Take Profit Limit?**

The difference is in the way these orders are settled. Take Profit Market orders are immediately sold on market upon hitting their trigger price. On the other hand, Take Profit Limit orders are not sold immediately but are partially filled as limit orders. The subsequent limit orders don’t need to have the same target price as their trigger price.

**What is the difference between a Stop Loss and a Take Profit?**

Both order types are set on the market when their triggers are met. Where the two orders differ is in their direction. Stop Losses are used for downside protection to close losing positions and Take Profits are used to close positions that are in profit.

**What does trigger price mean?**

Trigger price refers to the price the particular asset needs to hit before the limit order can be executed against the DAMM by a Keeper.&#x20;

**Why is the orderbook constructed off-chain?**

Drift doesn't construct a central limit orderbook on-chain and instead opts for a flat structure to achieve cost-effective scalability. The network of Keepers monitor on-chain orders and construct their own orderbooks off-chain. This achieves (1) decentralisation (as each Keeper stores its own copy of the orderbook); and (2) computational efficiency (as the high throughput and intensive computations are calculated off-chain).&#x20;

Theoretically, this should also translate to better performance during periods of high network congestion.

**What is reduce-only?**

**Reduce-only** orders guarantee that you will:

-   NOT be made longer if you are already long (or shorter if you are already short); and

-   NOT be made short if you were previously long (or vice versa).

**What are Keeper bots? How can I participate?**

A Keeper will track and fill orders and earn a reward. Guide to running different types of [Keeper Bots](<../0 About Drift v2/3 Keeper Bots>).&#x20;
