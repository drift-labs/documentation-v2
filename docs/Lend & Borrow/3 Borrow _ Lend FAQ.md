---
title: Borrow & Lend FAQ
slug: Ejc--borrow-and-lend-faq
createdAt: Mon Jul 25 2022 16:33:59 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:29:39 GMT+0000 (Coordinated Universal Time)
---

**Can the same collateral be used to trade perpetuals?**

*   Yes it can, up to the margin requirement.

**How does interest get charged on borrows? **

*   Interest automatically accrues to the account. Interest is paid in the same currency as the currency borrowed.

**Are there any fees on borrows? **

*   There is no borrow initiation fee.

*   Each spot market has a `total_if_factor` which allocates a portion of interest collected from borrows to the insurance fund.

**Are there any risks to lending?**

*   Yes, there is always the risk of *borrower default*. When there is not enough insurance available, the losses will be socialised across depositors. To help mitigate the risks, the protocol imposes prudent requirements and guards around borrows.

**Where are borrows withdrawn to? **

*   Borrows are withdrawn to your wallet

**Why can I not borrow a particular asset? **

*   If you've deposited an asset as collateral (say USDC or SOL); you can't borrow that asset until you have fully withdrawn it from the platform.&#x20;

**What is the LTV limit for borrows against SOL? **

*   83%&#x20;

**What is the initial LTV? **

*   `1 / initial liability weight`

*   For `initial liability weight` for listed assets, see [Cross-Collateral Deposits](<../Getting Started/4 Cross-Collateral Deposits.md>)&#x20;

**What is the maintenance LTV? **

*   `1/ maintenance liability weight`

*   For `maintenance liability weight` for listed assets, see [Cross-Collateral Deposits](<../Getting Started/4 Cross-Collateral Deposits.md>)&#x20;

