"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[940],{6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(5893),a=n(1151);const o={title:"Oracles",slug:"22EZ-oracles",createdAt:"Wed Jan 26 2022 21:27:40 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 11:16:32 GMT+0000 (Coordinated Universal Time)"},i=void 0,s={id:"Trading/13 Oracles",title:"Oracles",description:"Drift Protocol has a number of resiliency checks around new oracle data as well as updates an oracle twap for its margin risk engine. Each market tracks the last seen oracle values and updates an EMA of TWAP for over both 1hr (funding period) and 5min intervals.",source:"@site/docs/Trading/13 Oracles.md",sourceDirName:"Trading",slug:"/Trading/22EZ-oracles",permalink:"/documentation-v2/docs/Trading/22EZ-oracles",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/Trading/13 Oracles.md",tags:[],version:"current",frontMatter:{title:"Oracles",slug:"22EZ-oracles",createdAt:"Wed Jan 26 2022 21:27:40 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 11:16:32 GMT+0000 (Coordinated Universal Time)"},sidebar:"mySidebar",previous:{title:"Block conditions",permalink:"/documentation-v2/docs/Trading/yp7u-block-conditions"},next:{title:"P&L",permalink:"/documentation-v2/docs/P&L/CImq-pandl"}},c={},d=[{value:"Validity Checks",id:"validity-checks",level:3}];function l(e){const t={a:"a",h3:"h3",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Drift Protocol has a number of resiliency checks around new oracle data as well as updates an oracle twap for its margin risk engine. Each market tracks the last seen oracle values and updates an EMA of TWAP for over both 1hr (funding period) and 5min intervals."}),"\n",(0,r.jsx)(t.p,{children:"Drift utilises as an oracle source.  The protocol has the flexibility to update and customize as necessary on a per-market basis."}),"\n",(0,r.jsx)(t.h3,{id:"validity-checks",children:"Validity Checks"}),"\n",(0,r.jsxs)(t.p,{children:["For robustness, Drift's program checks oracle validity. The validity is evaluated on a per-check and action basis to determine whether to block actions. See ",(0,r.jsx)(t.a,{href:"/documentation-v2/docs/Risk%20&%20Safety/mqjG-protocol-guard-rails",children:"Protocol Guard Rails"})," for more details."]}),"\n",(0,r.jsxs)(t.p,{children:["1. Stale(ForAmm/ForMargin): (last slot update too far behind the current slot, ",(0,r.jsx)(t.strong,{children:"10/120 slots"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["2. InvalidPrice: Negative price (any price field ",(0,r.jsx)(t.strong,{children:"< 0"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["3. TooVolatile: (TWAP / price ratio out of bounds, ",(0,r.jsx)(t.strong,{children:"5x or 1/5x"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["4. TooUncertain: Confidence interval is too large (confidence if a very large percentage of the price, ",(0,r.jsx)(t.strong,{children:">10%"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"**When the oracle for a Perpetuals Market is deemed invalid, the market can block some order fills, withdraws, liquidations, and funding rate updates (if they increase protocol risk). "}),"\n",(0,r.jsx)(t.p,{children:"**For the duration of the invalid period, on-chain oracle TWAP calculation aims to shrink toward mark TWAP to avoid erroneous funding payment magnitudes. "})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(7294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);