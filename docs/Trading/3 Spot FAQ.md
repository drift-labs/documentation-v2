---
title: Spot FAQ
slug: OD87-spot-faq
createdAt: Sun Sep 11 2022 20:31:25 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:26:11 GMT+0000 (Coordinated Universal Time)
---

### Why is Drift's spot market better for takers (versus alternatives)?

Takers enter a JIT auction, which can offer price improvement, and otherwise can fill via an external program. (e.g. Serum).

Takers can also utilise special order types such as oracle-offset limit orders, which appropriately can cap fills using slippage tolerance versus the oracle provider's fair value. This allows ordinary takers on a UI to control swapping at the fairest price, even without access to advanced infrastructure / bots.

### Better for makers (versus alternatives)?

Market makers can provide liquidity to an ongoing JIT auction, removing latency-based adverse selection.

Additionally, as an active market maker, all resting orders earn interest within the protocol's borrow / lend.

*   For example: on a USDT-USDC spot market one can offer deep liquidity without compromising on lending interest

