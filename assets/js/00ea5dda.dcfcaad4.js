"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1515],{3904:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(5893),s=i(1151);const r={title:"Block conditions",slug:"yp7u-block-conditions",createdAt:"Wed Oct 19 2022 15:40:49 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sat Jun 24 2023 17:01:46 GMT+0000 (Coordinated Universal Time)"},l=void 0,o={id:"Trading/12 Block conditions",title:"Block conditions",description:"Deposits",source:"@site/docs/Trading/12 Block conditions.md",sourceDirName:"Trading",slug:"/Trading/yp7u-block-conditions",permalink:"/documentation-v2/docs/Trading/yp7u-block-conditions",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/Trading/12 Block conditions.md",tags:[],version:"current",frontMatter:{title:"Block conditions",slug:"yp7u-block-conditions",createdAt:"Wed Oct 19 2022 15:40:49 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sat Jun 24 2023 17:01:46 GMT+0000 (Coordinated Universal Time)"},sidebar:"mySidebar",previous:{title:"Versioned Transactions",permalink:"/documentation-v2/docs/Trading/8ECZ-versioned-t"},next:{title:"Oracles",permalink:"/documentation-v2/docs/Trading/22EZ-oracles"}},a={},d=[{value:"Deposits",id:"deposits",level:3},{value:"Withdraws",id:"withdraws",level:3},{value:"Placing Orders",id:"placing-orders",level:3},{value:"Filling Orders",id:"filling-orders",level:3},{value:"<strong>Settle Perp PnL</strong>",id:"settle-perp-pnl",level:3}];function c(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"deposits",children:"Deposits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"user attempting to deposit when the max_deposits for that spot asset would be or has been reached"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"spot market is in reduce only mode and deposit does not pay off a borrow"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"withdraws",children:"Withdraws"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"user attempting to withdraw with outstanding liabilities when an oracle is invalid"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:['attempting to borrow or withdraw when there are outstanding liabilities and any asset or liability\'s Oracle the user has is deemed invalid ("invalid" in accordance with ',(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"MarginCalc"})})," action)"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["**user attempting to increase the number of liabilities above 1 with an isolated tier liability\n*****- ***",(0,t.jsx)(n.em,{children:"users can only have one outstanding liability when the liability has the isolated asset tier."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"users cannot withdraw assets that would put their total collateral (weighted collateral value) below their initial margin requirement"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"users cannot withdraw an asset amount that would put that particular asset's protocol liquidity below the rolling limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"these limits differ based on whether the withdraw would open borrow or not"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"placing-orders",children:"Placing Orders"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"users cannot place orders that are risk-increasing and would put their initial margin requirement above their total collateral"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"users cannot place orders that would increase their number of outstanding liabilities above 1 if the liability has the isolated asset tier"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"[SPOT ONLY] without margin trading enabled on an account, users won't be able to open spot orders than would create borrows on the account"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"[SPOT ONLY] with margin trading enabled, users won't be able to borrow using the same rolling limits for withdraws"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"filling-orders",children:"Filling Orders"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a user's orders will not fill if it sends them under the margin requirement plus buffer (since they have `InsufficientCollateral`)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"within a match, if either user hits this condition, the match won't go through"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"settle-perp-pnl",children:(0,t.jsx)(n.strong,{children:"Settle Perp PnL"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"when market's oracle is deemed invalid"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"when user account value is below the maintenance margin requirement"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"when vAMM repeg cost exceeds budget"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);