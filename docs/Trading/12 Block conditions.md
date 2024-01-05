---
title: Block conditions
slug: yp7u-block-conditions
createdAt: Wed Oct 19 2022 15:40:49 GMT+0000 (Coordinated Universal Time)
updatedAt: Sat Jun 24 2023 17:01:46 GMT+0000 (Coordinated Universal Time)
---

### Deposits

*   user attempting to deposit when the max\_deposits for that spot asset would be or has been reached

*   spot market is in reduce only mode and deposit does not pay off a borrow

### Withdraws

*   **user attempting to withdraw with outstanding liabilities when an oracle is invalid**

*   *attempting to borrow or withdraw when there are outstanding liabilities and any asset or liability's Oracle the user has is deemed invalid ("invalid" in accordance with *`MarginCalc`* action)*

*   **user attempting to increase the number of liabilities above 1 with an isolated tier liability
    *****- ****users can only have one outstanding liability when the liability has the isolated asset tier.*

*   users cannot withdraw assets that would put their total collateral (weighted collateral value) below their initial margin requirement

*   users cannot withdraw an asset amount that would put that particular asset's protocol liquidity below the rolling limits
    *   these limits differ based on whether the withdraw would open borrow or not

### Placing Orders

*   users cannot place orders that are risk-increasing and would put their initial margin requirement above their total collateral

*   users cannot place orders that would increase their number of outstanding liabilities above 1 if the liability has the isolated asset tier

*   \[SPOT ONLY] without margin trading enabled on an account, users won't be able to open spot orders than would create borrows on the account

*   \[SPOT ONLY] with margin trading enabled, users won't be able to borrow using the same rolling limits for withdraws

### Filling Orders

*   a user's orders will not fill if it sends them under the margin requirement plus buffer (since they have \`InsufficientCollateral\`)
    *   within a match, if either user hits this condition, the match won't go through

### **Settle Perp PnL**

*   when market's oracle is deemed invalid

*   when user account value is below the maintenance margin requirement

*   when vAMM repeg cost exceeds budget

