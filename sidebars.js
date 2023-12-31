/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
    // guideSidebar: [{ type: "autogenerated", dirName: "./archived" }],

    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */


  mySidebar: [
    'intro',
      {
        type: 'category',
        label: 'About Drift v2',
        collapsible: true,
        collapsed: true,
        items: [
          'About Drift v2/0 Understanding Drift Protocol',
          'About Drift v2/1 Drift AMM',
          'About Drift v2/2 Decentralised Orderbook FAQ',
          'About Drift v2/3 Keeper Bots',
          'About Drift v2/4 Keepers _ Decentralised Orderbook',
          'About Drift v2/5 Keeper Incentives',
          'About Drift v2/6 Just-In-Time _JIT_ Auctions',
          'About Drift v2/7 Just-In-Time Auction FAQ',
          'About Drift v2/8 Revenue Pool',
          'About Drift v2/9 Optimisations',
          'About Drift v2/10 Program_Vault Addresses',
        ],
      },
      {
        type: 'category',
        label: 'Getting Started',
        collapsible: true,
        collapsed: true,
        items: [
          'Getting Started/0 Set Up Wallet_ Deposits and Withdrawals',
          'Getting Started/1 MetaMask Set Up',
          'Getting Started/2 Passwordless and Social Log In',
          'Getting Started/3 Wallet FAQs',
          'Getting Started/4 Cross-Collateral Deposits',
          'Getting Started/5 Delegated Accounts',
          'Getting Started/6 CreatingUserAccount',
          'Getting Started/7 Subaccounts'
        ],
      },
      {
        type: 'category',
        label: 'Lend / Borrow',
        collapsible: true,
        collapsed: true,
        items: [
          'Lend & Borrow/0 What is Borrow _ Lend_',
          'Lend & Borrow/1 Supply and Borrow APY',
          'Lend & Borrow/3 Borrow _ Lend FAQ',
          'Lend & Borrow/4 Borrow Interest Rate',
        ],
      },
      {
        type: 'category',
        label: 'Trading',
        collapsible: true,
        collapsed: true,
        items: [
          'Trading/0 How to Trade Perpetual Swaps',
          'Trading/1 What are Perpetual Futures_',
          'Trading/2 Funding Rates',
          'Trading/3 Spot FAQ',
          'Trading/4 Margin',
          'Trading/5 What is Spot Margin Trading_',
          'Trading/6 Order Types',
          'Trading/7 Advanced Orders FAQ',
          'Trading/8 Auction Parameters',
          'Trading/9 Trading Fees',
          'Trading/10 Fee Pool',
          'Trading/11 Versioned Transactions',
          'Trading/12 Block conditions',
          'Trading/13 Oracles',
        ],
      },
      {
        type: 'category',
        label: 'P&L',
        collapsible: true,
        collapsed: true,
        items: [
          'P&L/0 P_L',
          'P&L/1 Accounting and Settlement',
          'P&L/2 P_L Pool'
        ],
      },
      {
        type: 'category',
        label: 'Liquidations',
        collapsible: true,
        collapsed: true,
        items: [
          'Liquidations/0 Liquidations',
          'Liquidations/1 Liquidators'
        ],
      },
      {
        type: 'category',
        label: 'Market Makers',
        collapsible: true,
        collapsed: true,
        items: [
          'Market Makers/0 Market Maker Participation',
          'Market Makers/1 Maker Rebate Fees',
        ],
      },
      {
        type: 'category',
        label: 'Providing Liquidity',
        collapsible: true,
        collapsed: true,
        items: [
          'Providing Liquidity/0 DLP - Drift Liquidity Provider',
          'Providing Liquidity/1 Liquidity Providers _LPs_',
          'Providing Liquidity/2 Liquidity Provision FAQ'
        ],
      },
      {
        type: 'category',
        label: 'Insurance Fund',
        collapsible: true,
        collapsed: true,
        items: [
          'Insurance Fund/0 Insurance Fund',
          'Insurance Fund/1 Insurance Fund Staking',
        ],
      },
      {
        type: 'category',
        label: 'Risk & Safety',
        collapsible: true,
        collapsed: true,
        items: [
          'Risk & Safety/0 Delisting Process',
          'Risk & Safety/1 Protocol Guard Rails',
          'Risk & Safety/2 Risk Parameters'
        ],
      },
      {
        type: 'category',
        label: 'Security',
        collapsible: true,
        collapsed: true,
        items: [
          'Security/Audits',
          'Security/Bug Bounty',
          'Security/Risks '
        ],
      },
      {
        type: 'category',
        label: 'Guides',
        collapsible: true,
        collapsed: true,
        items: [
          'Guides/API',
          'Guides/Historical Data _v1_',
          'Guides/Historical Data Glossary',
          'Guides/SDK Documentation',
          'Guides/Trading Bots',
          'Guides/Troubleshooting',
          'Guides/Tutorial_ Arbitrage Bot',
          'Guides/Tutorial_ Bots',
          'Guides/Tutorial_ JIT Maker Bot',
          'Guides/Tutorial_ Liquidation Bot',
          'Guides/Tutorial_ Order Matching Bot',
          'Guides/Tutorial_ Order Trigger Bot',
        ],
      },
      {
        type: 'doc',
        id: 'Glossary', // document ID
        label: 'Glossary', // sidebar label
      },
  ]
};

export default sidebars;
