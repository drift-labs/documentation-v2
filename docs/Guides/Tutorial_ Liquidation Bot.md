---
title: "Tutorial- Liquidation Bot"
slug: IsAx-tutorial-liquidation-bot
createdAt: Mon Aug 15 2022 18:33:09 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 12:13:22 GMT+0000 (Coordinated Universal Time)
---

# Introduction

Liquidation Bots improve the overall health of the protocol by deleveraging users approaching bankruptcy.

The liquidation in the protocol is a liability transfer mechanism from the selected liquidatee (user in liquidation territory) to the liquidator (the user running the Liquidation Bot).&#x20;

Liquidators inherit the liabilities they liquidate and receive an asset at a discount for doing so. In order to participate, liquidators must have even collateral in their account in order to satisfy the initial margin requirements for the transferred positions.

For more information on our liquidation system, please read [Liquidations](<../Liquidations/0 Liquidations>).

# Getting Started

The reference implementation of a Liquidation Bot is available [here](https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/liquidator.ts).

A step-by-step guide to initialising and running the liquidator bot will be coming soon!

# Advanced

If you're interested to make the liquidator bot run better, you can make edits to the above to improve its efficiency. In particular, you can:&#x20;

1.  Sort users in an efficient data structure based on their liquidation price;

2.  Monitor the market's price to determine when to run liquidation checks / RPC checks.

We encourage the community to build out stronger liquidations engines and bots to secure our Insurance Fund and user collateral. If interested to chat or have any questions, please reach out to us on [Discord](https://discord.com/invite/driftprotocol) or [Twitter](https://twitter.com/driftprotocol)!&#x20;
