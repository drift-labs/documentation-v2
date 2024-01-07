"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9606],{1630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"Revenue Pool",slug:"diSR-revenue-pool",createdAt:"Sun Sep 11 2022 17:29:41 GMT+0000 (Coordinated Universal Time)",updatedAt:"Mon May 08 2023 16:30:49 GMT+0000 (Coordinated Universal Time)"},o=void 0,d={id:"About Drift v2/8 Revenue Pool",title:"Revenue Pool",description:"A portion of the fees collected within the protocol (denominated in a particular token: USDC, SOL, etc) go into that spot market's revenue pool.&#x20;",source:"@site/docs/About Drift v2/8 Revenue Pool.md",sourceDirName:"About Drift v2",slug:"/About Drift v2/diSR-revenue-pool",permalink:"/documentation-v2/docs/About Drift v2/diSR-revenue-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/About Drift v2/8 Revenue Pool.md",tags:[],version:"current",frontMatter:{title:"Revenue Pool",slug:"diSR-revenue-pool",createdAt:"Sun Sep 11 2022 17:29:41 GMT+0000 (Coordinated Universal Time)",updatedAt:"Mon May 08 2023 16:30:49 GMT+0000 (Coordinated Universal Time)"},sidebar:"mySidebar",previous:{title:"Just-In-Time Auction FAQ",permalink:"/documentation-v2/docs/About Drift v2/fJRw-just-in-time-auction-faq"},next:{title:"Optimisations",permalink:"/documentation-v2/docs/About Drift v2/VNtx-optimisations"}},l={},c=[{value:"Insurance Fund",id:"insurance-fund",level:3},{value:"Spot Markets",id:"spot-markets",level:3},{value:"Perpetual Markets",id:"perpetual-markets",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A portion of the fees collected within the protocol (denominated in a particular token: USDC, SOL, etc) go into that spot market's revenue pool. "}),"\n",(0,r.jsx)(n.p,{children:"The revenue pool increases from various portions of the protocol:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"borrow fees"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"spot market exchange fees"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"perpetual market exchange fees"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"liquidations"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"and ultimately goes to fund: "}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"insurance vault"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"perpetual market amm (conditionally)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"insurance-fund",children:"Insurance Fund"}),"\n",(0,r.jsxs)(n.p,{children:["Every hour (on the hour), a portion of the revenue pool can be settled to the insurance fund using the permissionless ",(0,r.jsx)(n.code,{children:"settle_revenue_to_insurance_fund"})," instruction:"]}),"\n",(0,r.jsx)(n.p,{children:"If the insurance fund has users staked, each individual hourly settlement is capped to what would amount to 1000% APR"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["thus an astronomically large inflow into the revenue pool (relatively to user insurance staked amounts) would result in revenue that slowly reaches the insurance over a longer period of time rather than immediately ","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"this encourages more insurance fund stakers (who require a medium horizon of insurance offering) to join during the high annualised cap inflow "}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Insurance Fund Stakers must adhere to the cooldown period for withdrawals (see ",(0,r.jsx)(n.a,{href:"/documentation-v2/docs/Insurance%20Fund/-wQ3-insurance-fund-staking",children:"Insurance Fund Staking"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"spot-markets",children:"Spot Markets"}),"\n",(0,r.jsx)(n.p,{children:"Spot Markets allow for swaps between tokens and interest payments between depositors and borrowers. These token swaps and flow of interest are parameterised to allow fee collection for the revenue pool and thus ultimately insurance."}),"\n",(0,r.jsxs)(n.p,{children:["Within the program, its parameterised by the following ",(0,r.jsx)(n.strong,{children:"in bold"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"total_if_factor"})," "]}),(0,r.jsx)(n.td,{children:"percentage of the borrow interest reserved for revenue pool"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"user_if_factor"})," "]}),(0,r.jsxs)(n.td,{children:["this proportion of ",(0,r.jsx)(n.code,{children:"total_if_factor"})," is reserved for staked users (the other piece is reserved for the protocol itself)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"liquidation_if_factor"})}),(0,r.jsxs)(n.td,{children:["the proportion of liability transfer in ",(0,r.jsx)(n.code,{children:"liquidate_borrow"})," that is sent to the revenue pool"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Thus the following must be true: ",(0,r.jsx)(n.code,{children:"user_if_factor <= total_if_factor"}),".  For example, if the ",(0,r.jsx)(n.code,{children:"total_if_factor"})," is 100%, depositors would receive no interest from borrows."]}),"\n",(0,r.jsx)(n.p,{children:"The following instructions interact w/ the insurance fund:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"resolve_borrow_bankruptcy"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"perpetual-markets",children:"Perpetual Markets"}),"\n",(0,r.jsxs)(n.p,{children:["Perpetual Markets are bootstrapped by the ",(0,r.jsx)(n.a,{href:"/documentation-v2/docs/About%20Drift%20v2/NU41-drift-amm",children:"Drift AMM"})," which depending on market-making performance conditions can add and remove funds from the revenue pool."]}),"\n",(0,r.jsxs)(n.p,{children:["Within the program, its parameterized by the following ",(0,r.jsx)(n.strong,{children:"in bold"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"max_revenue_withdraw_per_period"})}),(0,r.jsx)(n.td,{children:"the amm's max revenue pool draw per period\n(note this doesn't include bankruptcy resolution) "})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"revenue_withdraw_since_last_settle"}),"        "]}),(0,r.jsx)(n.td,{children:"revenue pool draws on behalf of user pnl since the last settle(note this doesn't include bankruptcy resolution) "})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"last_revenue_withdraw_ts"})}),(0,r.jsx)(n.td,{children:"the last timestamp of a revenue withdraw\n(track in order to reset the period)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["A perpetual market's amm may draw up to ",(0,r.jsx)(n.code,{children:"max_revenue_withdraw_per_period"})," from the revenue pool every period."]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, for direct draws from the insurance fund, it parameterized by the following ",(0,r.jsx)(n.strong,{children:"in bold"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"quote_settled_insurance"})}),(0,r.jsx)(n.td,{children:"settled funds from the insurance fund since inception "})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"quote_max_insurance"})}),(0,r.jsx)(n.td,{children:"max funds it can settle from insurance fund since inception"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"unrealized_max_imbalance"}),"** **"]}),(0,r.jsx)(n.td,{children:"max amount of pnl the net users can be owed within a market before:\n1. draws from insurance are allowed\n2. initial asset weights for this pnl gets discounted"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Unlike spot markets, perp markets are capped by the max draw from insurance via ",(0,r.jsx)(n.code,{children:"quote_max_insurance"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"quote_settled_insurance"})," tracks the insurance fund draw amount since inception. Once this threshold is reached or the insurance fund is depleted, the market will then resort to the AMM ",(0,r.jsx)(n.a,{href:"/documentation-v2/docs/Trading/ocoW-fee-pool",children:"Fee Pool"}),". For any remaining losses not covered, the market will perform socialized losses in bankruptcy events."]}),"\n",(0,r.jsx)(n.p,{children:"The following instructions interact w/ the insurance fund:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"resolve_perp_pnl_deficit"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"resolve_perp_bankruptcy"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"notes: "}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"resolve_perp_pnl_deficit"})," can only be resolved by insurance fund deposits (within the market's constraints), not by social loss with other users"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);