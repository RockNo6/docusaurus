"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41434],{28134:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>h,metadata:()=>r,toc:()=>o});var n=l(24246),i=l(71670);const h={mdx:{format:"md"},date:"2020-05-28T20:00",authors:["jknoxville","jmcshane","kasperp","lex111","mrmuhammadali","piotros","s-pace","SamChou19815"]},c="2.0.0-alpha.56",r={permalink:"/docusaurus/changelog/2.0.0-alpha.56",source:"@site/changelog/source/2.0.0-alpha.56.md",title:"2.0.0-alpha.56",description:"Breaking Change",date:"2020-05-28T20:00:00.000Z",tags:[],hasTruncateMarker:!0,authors:[{name:"John Knox",alias:"jknoxville",url:"https://github.com/jknoxville",imageURL:"https://github.com/jknoxville.png",key:"jknoxville"},{name:"James McShane",alias:"jmcshane",url:"https://github.com/jmcshane",imageURL:"https://github.com/jmcshane.png",key:"jmcshane"},{name:"Kasper B\xf8gebjerg Pedersen",alias:"kasperp",url:"https://github.com/kasperp",imageURL:"https://github.com/kasperp.png",key:"kasperp"},{name:"Alexey Pyltsyn",alias:"lex111",url:"https://github.com/lex111",imageURL:"https://github.com/lex111.png",key:"lex111"},{name:"Muhammad Ali",alias:"mrmuhammadali",url:"https://github.com/mrmuhammadali",imageURL:"https://github.com/mrmuhammadali.png",key:"mrmuhammadali"},{name:"Piotr Baran",alias:"piotros",url:"https://github.com/piotros",imageURL:"https://github.com/piotros.png",key:"piotros"},{name:"Sylvain Pace",alias:"s-pace",url:"https://github.com/s-pace",imageURL:"https://github.com/s-pace.png",key:"s-pace"},{name:"Sam Zhou",alias:"SamChou19815",url:"https://github.com/SamChou19815",imageURL:"https://github.com/SamChou19815.png",key:"SamChou19815"}],frontMatter:{mdx:{format:"md"},date:"2020-05-28T20:00",authors:["jknoxville","jmcshane","kasperp","lex111","mrmuhammadali","piotros","s-pace","SamChou19815"]},unlisted:!1,prevItem:{title:"2.0.0-alpha.57",permalink:"/docusaurus/changelog/2.0.0-alpha.57"},nextItem:{title:"2.0.0-alpha.55",permalink:"/docusaurus/changelog/2.0.0-alpha.55"},listPageLink:"/docusaurus/changelog/page/4"},a={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0]},o=[{value:"\ud83d\udca5 Breaking Change",id:"boom-breaking-change",level:2},{value:"\ud83d\ude80 New Feature",id:"rocket-new-feature",level:2},{value:"\ud83d\udc1b Bug Fix",id:"bug-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"nail_care-polish",level:2},{value:"\ud83d\udcdd Documentation",id:"memo-documentation",level:2},{value:"\ud83c\udfe0 Internal",id:"house-internal",level:2},{value:"Committers: 8",id:"committers-8",level:2}];function t(e){const s={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"boom-breaking-change",children:"\ud83d\udca5 Breaking Change"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If you refer to modules (plugins) in your config file in a string form, you will need to replace them with ",(0,n.jsx)(s.code,{children:"require.resolve"})," calls, for example:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-diff",children:"- plugins: ['@docusaurus/plugin-google-analytics']\n+ plugins: [require.resolve('@docusaurus/plugin-google-analytics')]\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-classic"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2818",children:"#2818"})," feat(v2): automatically add base url to logo link (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-classic"}),", ",(0,n.jsx)(s.code,{children:"docusaurus-theme-search-algolia"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2791",children:"#2791"})," refactor(v2): show search icon only on mobiles (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2780",children:"#2780"})," feat(v2): open external links in new tab by default (",(0,n.jsx)(s.a,{href:"https://github.com/jknoxville",children:"@jknoxville"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"rocket-new-feature",children:"\ud83d\ude80 New Feature"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-types"}),", ",(0,n.jsx)(s.code,{children:"docusaurus"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2770",children:"#2770"})," feat(v2): allow deploy without building website (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-classic"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2818",children:"#2818"})," feat(v2): automatically add base url to logo link (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"bug-bug-fix",children:"\ud83d\udc1b Bug Fix"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-classic"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2645",children:"#2645"})," fix(v2): enable scrolling for sidebar menu only (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2800",children:"#2800"})," fix(v2): make proper h1 font size on mobiles (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2788",children:"#2788"})," fix(v2): use ",(0,n.jsx)(s.code,{children:"require.resolve"})," for all webpack presets and plugins (",(0,n.jsx)(s.a,{href:"https://github.com/SamChou19815",children:"@SamChou19815"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-plugin-content-docs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2785",children:"#2785"})," fix(v2): do not show sidebar on reserved docs home page (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2777",children:"#2777"})," fix(v2): check for docs homepage correctly (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"nail_care-polish",children:"\ud83d\udc85 Polish"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-classic"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2820",children:"#2820"})," chore(v2): upgrade Infima to 0.2.0-alpha.12 (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-search-algolia"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2814",children:"#2814"})," refactor(v2): align search icon to center on mobiles (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2799",children:"#2799"})," refactor(v2): increase search input on medium screens (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-init"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2802",children:"#2802"})," misc: minor improvements for init templates (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus-theme-classic"}),", ",(0,n.jsx)(s.code,{children:"docusaurus-theme-search-algolia"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2791",children:"#2791"})," refactor(v2): show search icon only on mobiles (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docusaurus"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2783",children:"#2783"})," refactor(v2): make external links more secure (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"memo-documentation",children:"\ud83d\udcdd Documentation"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2809",children:"#2809"})," docs(v2): add mention on DocSearch when you run the crawler on your own (",(0,n.jsx)(s.a,{href:"https://github.com/s-pace",children:"@s-pace"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"house-internal",children:"\ud83c\udfe0 Internal"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/2778",children:"#2778"})," fix(v2): do not highlight root docs path in navbar (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"committers-8",children:"Committers: 8"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Alexey Pyltsyn (",(0,n.jsx)(s.a,{href:"https://github.com/lex111",children:"@lex111"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["James McShane (",(0,n.jsx)(s.a,{href:"https://github.com/jmcshane",children:"@jmcshane"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["John Knox (",(0,n.jsx)(s.a,{href:"https://github.com/jknoxville",children:"@jknoxville"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Kasper B\xf8gebjerg Pedersen (",(0,n.jsx)(s.a,{href:"https://github.com/kasperp",children:"@kasperp"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Muhammad Ali (",(0,n.jsx)(s.a,{href:"https://github.com/mrmuhammadali",children:"@mrmuhammadali"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Piotr Baran (",(0,n.jsx)(s.a,{href:"https://github.com/piotros",children:"@piotros"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Sam Zhou (",(0,n.jsx)(s.a,{href:"https://github.com/SamChou19815",children:"@SamChou19815"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Sylvain Pace (",(0,n.jsx)(s.a,{href:"https://github.com/s-pace",children:"@s-pace"}),")"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},71670:(e,s,l)=>{l.d(s,{Z:()=>r,a:()=>c});var n=l(27378);const i={},h=n.createContext(i);function c(e){const s=n.useContext(h);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(h.Provider,{value:s},e.children)}}}]);