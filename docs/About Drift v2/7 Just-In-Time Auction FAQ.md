---
title: Just-In-Time Auction FAQ
slug: fJRw-just-in-time-auction-faq
createdAt: Wed Jul 20 2022 07:14:43 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:57:37 GMT+0000 (Coordinated Universal Time)
---

## Benefits

### What are the benefits for Takers?&#x20;

For Takers, the main benefit of the JIT auction is that liquidity can be much deeper compared to an AMM. Liquidity on the JIT isn't constrained by how much virtual liquidity is available for a user; it is determined by the liquidity provided by external Makers in each auction. Users have the opportunity for much better price improvement compared to a liquidity-constrained AMM. &#x20;

### What are the benefits for Makers?&#x20;

For Makers, the JIT auction provides an easy way to access on-chain taker flow for market making operations. Unlike an on-chain CLOB where the set-up cost, ongoing infrastructural costs, and the possibility for latency arbitrage are high, market making on the JIT is a simple, competitive auction fill mechanism, reducing the barrier for entry for making on-chain.&#x20;

Makers will also earn a rebate for filling taker orders.&#x20;

## For Takers

### How many auctions can there be at once?&#x20;

The auction mechanism is highly parallelized for maximum exchange throughput.

*   Takers can initiate multiple auctions, up to the number of order slots (currently 32).

*   Makers can participate in as many auctions as they like (since their order is completed atomically).

*   Additionally, on a per-exchange level, there is no limit to the total amount of ongoing auctions happening at once.&#x20;

### Can auctions be partially filled?

Yes, auctions can be partially filled up to a user's slippage tolerance. There are no Fill-or-Kill (FOK) auctions.&#x20;

### Can auctions be cancelled once initiated?&#x20;

Yes, users can cancel the unfilled portion of their order in the auction once they've been initiated. Users will need to pay a network fee in SOL to cancel their ongoing auction, as well as a nominal fee to keepers of $0.01 USDC.

### Can Makers pull out of an auction once they have filled on the auction?

Once an order is partially filled, Makers are unable able to pull out of an auction. Fills are confirmed when the Maker submits a fill on a first-come-first-serve basis.&#x20;

### Is there a limit to how many auctions a Maker can participate in at once?

No, there is no limit. Makers can enter multiple auctions at once to cancel out their exposure.

### Is there a way for users to enter market orders without entering the auction?&#x20;

Not at the moment. Market orders all go through the JIT auction. Users can opt to place a limit order instead if the user wishes to be matched with another order via the DLOB.&#x20;

### Do limit orders trigger an auction?&#x20;

No, limit orders are not filled via the JIT auction. Limit orders specify a single price point and will be matched against other limit orders or the DAMM on the decentralised limit orderbook (DLOB).&#x20;

### Are there individual JIT pools for each Taker order placed?

Yes. Each user will have a different account and each taker order placed will go through its own JIT auction.&#x20;

### Will I know the exact price I'll be filled at?&#x20;

Exclusive of slippage and fees, the UI will display the price that the Taker will be filled at if they were to be filled against the DAMM. This is the worst possible price the Taker can receive. Any Maker that steps in via the JIT auction can only provide the Taker with a better price.&#x20;

## For Makers

### How do I participate as a Maker in the auction?&#x20;

You can read docs here ([Just-In-Time (JIT) Auctions](<./6 Just-In-Time _JIT_ Auctions>)) as well as read through an example trading bot (). &#x20;

### Is the same JIT auction mechanism used for liquidations as well? &#x20;

Yes, it is the same model. Liquidations will be market orders that will also route through the JIT auction mechanism.&#x20;

### Are there example maker bots?&#x20;

Yes. We've developed an open-source maker bot that can be accessed here (). &#x20;

### How will Makers be notified of JIT auctions?

We built an event emitter on Solana. Makers can listen to the event emitter for whenever there's a taker order. Makers can then bid to fill the order.&#x20;

### Will I see what my maker bid is relative to all the other maker bids?&#x20;

Yes.&#x20;

### Does the JIT auction happen in a set of rounds?&#x20;

Each new Taker order commences a new dutch auction. Dutch auctions are on a first-come-first-serve basis.&#x20;

### Can I fill a subset of one order?

Yes. Makers can fill a subset of Taker orders. The remainder will either be filled by other Makers or be filled by the DAMM.&#x20;

### How does the DLOB work in conjunction with JIT liquidity?

DLOB liquidity and JIT liquidity aren't mutually exclusive. The DLOB setup is designed with two separate actors: fillers and makers. Makers post orders and fillers will match orders.

JIT mechanism enables the Maker to be their own filler. The Maker will submit the match with someone going through an auction (e.g. user who submitted a market order).

