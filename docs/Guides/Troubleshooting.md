---
title: Troubleshooting
slug: MNwd-troubleshooting
createdAt: Mon Aug 15 2022 23:01:09 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 12:11:04 GMT+0000 (Coordinated Universal Time)
---

## Failed to get token account balance

The account in `KEEPER_PRIVATE_KEY` does not have a USDC account

```shell
SolanaJSONRPCError: failed to get token account balance: Invalid param: could not find account
    at Connection.getTokenAccountBalance (/Users/user/Drift/keeper-bots-v2/node_modules/@solana/web3.js/src/connection.ts:2704:13)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async runBot (/Users/user/Drift/keeper-bots-v2/src/index.ts:252:22)
    at async recursiveTryCatch (/Users/user/Drift/keeper-bots-v2/src/index.ts:473:3)
    at async recursiveTryCatch (/Users/user/Drift/keeper-bots-v2/src/index.ts:481:3) {
  code: -32602,
  data: undefined
}
```

## `ClearingHouseUser` does not exist

The account in `KEEPER_PRIVATE_KEY` has not been initialised on the `ClearingHouse` program yet. See [Keeper Bots](<../0 About Drift v2/3 Keeper Bots#9KTc1>) for how to initialise the `ClearingHouseUser`

```shell
[2022-08-15T22:46:19.236Z] error: ClearingHouseUser for bot69e9FXGoKzvAdGnN8uVVDCfLdLUX6K5wsXdrS3Dd3 does not exist
Error: Run with '--init-user' flag to initialize a ClearingHouseUser
    at runBot (/Users/user/Drift/keeper-bots-v2/src/index.ts:271:10)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async recursiveTryCatch (/Users/user/Drift/keeper-bots-v2/src/index.ts:473:3)
```

## Misc Transaction Errors

Since running a Keeper is a profit-seeking endeavour, it is not unusual to run into competition while filling orders and liquidating dangerous positions. These errors can happen at various commitment levels, and how you handle them will be dependent on your skillset and craftiness. If you're looking for friends, come to [#dev-chat](https://discord.com/channels/849494028176588802/878700556904980500) and leak some alpha 🤓.
