---
title: "Tutorial- Arbitrage Bot"
slug: swMI-tutorial-arbitrage-bot
createdAt: Mon Oct 11 2021 06:37:49 GMT+0000 (Coordinated Universal Time)
updatedAt: Mon May 15 2023 12:16:32 GMT+0000 (Coordinated Universal Time)
---

### View Full GitHub example:

https://github.com/drift-labs/example-bots/blob/master/src/arbitrage-bot.ts

### Getting Started

1\. Create a connection and wallet object.&#x20;

It's important to safely load your private key outside of the code to ensure privacy.

```javascript
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

// todo: rename to env variable with key
const privateKey = process.env.SOLANA_PRIVATE_KEY;
const keypair = Keypair.fromSecretKey(
    Uint8Array.from(privateKey.split(",").map((val) => Number(val)))
);
const wallet = new Wallet(keypair);
const connection = new Connection(endpoint);
```

2\. Install the @drift-labs/sdk.&#x20;

For more details, peek through [SDK Documentation](<../Guides/SDK Documentation.md>).

```javascript
import {
    convertToNumber,
    DriftClient,
    initialize,
    PositionDirection,
} from "@drift-labs/sdk";

const sdkConfig = initialize({ env: "mainnet-beta" });
const driftClientPublicKey = new PublicKey(sdkConfig.DRIFT_PROGRAM_ID);

const driftClient = DriftClient.from(connection, wallet, driftClientPublicKey);
```

2\. Initialize an account and deposit collateral (USDC) on Drift.

```javascript
[, userAccountPublicKey] =
    await driftClient.initializeUserAccountAndDepositCollateral(
        usdcAmount,
        userUSDCAccount.publicKey
    );
```

&#x20;3\. Pick a market and load the price.&#x20;

```javascript
const marketIndex = new BN(0); // SOL
markPrice = calculateMarkPrice(clearingHouse.getMarket(marketIndexBN));
console.log(convertToNum(markPrice));
```

4\. Based on the current price, make a trade by passing a direction (LONG, SHORT) and size (USDC notional).

Optionally: You can set a `limitPrice` to place an Immediate or Cancel (IOC) order to help ensure your entryPrice comes as expected.

```javascript
const direction = PositionDirection.LONG(); // LONG
const amount = new BN(100000); // $1 (1e6 precision)
const limitPrice = markPrice.mul(1001).div(1000); // .1% tolerance (1e10 precision)

await clearingHouse.openPosition(direction, amount, marketIndex, limitPrice);
```

### Advanced

Take advantage of the SDK helpers that we've written for more measured trading:

For instance,`calculateTargetPriceTrade`calculate the liquidity available between the current markPrice to your targetPrice.

**This function is highly recommended for arbitrageurs.**

```javascript
const marketIndex = new BN(0);
const market = clearingHouse.getMarket(marketIndex);
const targetPrice = new BN(250.169 * MARK_PRICE_PRECISION);

const [direction, amount, entryPrice, newMarkPrice] = calculateTargetPriceTrade(
    market,
    targetPrice
);

await clearingHouse.openPosition(direction, amount, marketIndex, entryPrice);
```
