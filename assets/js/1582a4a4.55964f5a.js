"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82082],{96899:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/social-card-66116702bb73f0bf68a095ddaecc0fe4.png"},74962:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/hash-96c9ef1044dc1febfe3eefdc9350e2a0.png"},59506:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/social-card-66116702bb73f0bf68a095ddaecc0fe4.png"},68935:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(24246),i=t(71670);const r={title:"Docusaurus 3.4",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-05-31T00:00:00.000Z")},o=void 0,a={permalink:"/blog/releases/3.4",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.4/index.mdx",source:"@site/blog/releases/3.4/index.mdx",title:"Docusaurus 3.4",description:"We are happy to announce Docusaurus 3.4.",date:"2024-05-31T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"Blog posts about Docusaurus' new releases"}],readingTime:3.045,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",socials:{x:"https://x.com/sebastienlorber",linkedin:"https://www.linkedin.com/in/sebastienlorber/",github:"https://github.com/slorber",newsletter:"https://thisweekinreact.com"},imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Docusaurus 3.4",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:"2024-05-31T00:00:00.000Z"},unlisted:!1,lastUpdatedAt:1722241057e3,lastUpdatedBy:"Hichem Fantar",nextItem:{title:"Docusaurus 3.3",permalink:"/blog/releases/3.3"}},l={image:t(96899).Z,authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"Tags files",id:"tags-files",level:3},{value:"Hash Router - Experimental",id:"hash-router---experimental",level:3},{value:"Site Storage - Experimental",id:"site-storage---experimental",level:3},{value:"Other changes",id:"other-changes",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["We are happy to announce ",(0,n.jsx)(s.strong,{children:"Docusaurus 3.4"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Upgrading should be easy. Our ",(0,n.jsx)(s.a,{href:"/community/release-process",children:"release process"})," respects ",(0,n.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". Minor versions do not include any breaking changes."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Docusaurus blog post social card",src:t(59506).Z+"",width:"1200",height:"600"})}),"\n",(0,n.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(s.h3,{id:"tags-files",children:"Tags files"}),"\n",(0,n.jsxs)(s.p,{children:["The docs and blog plugins both already supported a ",(0,n.jsx)(s.code,{children:"tags"})," front matter attribute, enabling you to group related content. But tags declared inline in the front matter are not always ideal."]}),"\n",(0,n.jsxs)(s.p,{children:["With ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10137",children:"#10137"}),", you can now declare a list of pre-defined tags in a ",(0,n.jsx)(s.code,{children:"tags.yml"})," file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yml",metastring:'title="blog/tags.yml"',children:"tag1:\n  label: 'Tag 1'\n  description: 'Tag 1 description'\n  permalink: /tag-1-permalink\n\ntag2:\n  label: 'Tag 2'\n  description: 'Tag 2 description'\n  permalink: /tag-2-permalink\n"})}),"\n",(0,n.jsx)(s.p,{children:"These predefined tags can be used in the front matter of your blog or docs files:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",metastring:'title="blog/2024-05-31-my-blog-post.md"',children:"---\ntags: [tag1, tag2]\n---\n\n# Title\n\nContent\n"})}),"\n",(0,n.jsx)(s.admonition,{title:"Keeping tags usage consistent",type:"tip",children:(0,n.jsxs)(s.p,{children:["Use the new ",(0,n.jsx)(s.code,{children:"onInlineTags: 'throw'"})," plugin option to enforce the usage of predefined tags and prevent contributors from creating new unwanted tags."]})}),"\n",(0,n.jsx)(s.h3,{id:"hash-router---experimental",children:"Hash Router - Experimental"}),"\n",(0,n.jsxs)(s.p,{children:["With ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9859",children:"9859"}),", we added a new ",(0,n.jsx)(s.strong,{children:"experimental"})," hash router config option, useful for ",(0,n.jsx)(s.strong,{children:"offline browsing"})," by opening your site locally through the ",(0,n.jsx)(s.code,{children:"file://"})," protocol."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",metastring:'title="docusaurus.config.js"',children:"export default {\n  future: {\n    experimental_router: 'hash',\n  },\n};\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["This mode is ",(0,n.jsx)(s.strong,{children:"not recommended for sites deployed through a web server"}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:["When this mode is turned on, Docusaurus will opt out of static site rendering, and build a client-side single page application where all routes are prefixed with ",(0,n.jsx)(s.code,{children:"/#/"}),". A single ",(0,n.jsx)(s.code,{children:"index.html"})," file is generated. This file can be opened locally in your browser by simply clicking it, using the browser ",(0,n.jsx)(s.code,{children:"file://"})," protocol. This makes it possible to distribute a Docusaurus site as a ",(0,n.jsx)(s.code,{children:".zip"})," file so that readers can browse it offline, without having to install anything complex on their computer apart a web browser."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Docusaurus hash router - local browsing using the file:// protocol",src:t(74962).Z+"",width:"1203",height:"601"})}),"\n",(0,n.jsx)(s.p,{children:"Try browsing our own Docusaurus site built with the hash router:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://facebook.github.io/docusaurus/#/",children:"Docusaurus website - Hash Router web deployment"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/actions/workflows/build-hash-router.yml",children:"Docusaurus website - Hash Router downloadable GitHub artifacts"})}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Experimental",type:"caution",children:(0,n.jsxs)(s.p,{children:["This feature is ",(0,n.jsx)(s.strong,{children:"experimental"}),". If you try it out, please let us know how it works for you ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/3825",children:"here"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"site-storage---experimental",children:"Site Storage - Experimental"}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus uses the browser ",(0,n.jsx)(s.code,{children:"localStorage"})," API to persist UI state."]}),"\n",(0,n.jsxs)(s.p,{children:['But sometimes the storage space is "shared" between multiple sites using the same domain, leading to ',(0,n.jsx)(s.strong,{children:"storage key conflicts"}),". This generally happens in two cases"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["when working on multiple ",(0,n.jsx)(s.code,{children:"http://localhost:3000"})," sites"]}),"\n",(0,n.jsxs)(s.li,{children:["when hosting multiple sites under the same domain: ",(0,n.jsx)(s.code,{children:"https://example.com/site1/"})," and ",(0,n.jsx)(s.code,{children:"https://example.com/site2/"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For this reason, we introduced a new ",(0,n.jsx)(s.strong,{children:"experimental"})," ",(0,n.jsx)(s.code,{children:"siteStorage"})," configuration option:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:"export default {\n  future: {\n    experimental_storage: {\n      type: 'localStorage',\n      namespace: true,\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["When ",(0,n.jsx)(s.code,{children:"namespace: true"})," is set, we apply a hash suffix to all the storage keys, making them unique to the current site (based on ",(0,n.jsx)(s.code,{children:"config.url"})," and ",(0,n.jsx)(s.code,{children:"config.baseUrl"}),". For example, the ",(0,n.jsx)(s.code,{children:"theme"})," storage key becomes ",(0,n.jsx)(s.code,{children:"theme-x6f"}),". It is also possible to provide your own custom suffix ",(0,n.jsx)(s.code,{children:"namespace: 'suffix'"}),". We also made it possible to use ",(0,n.jsx)(s.code,{children:"type: 'sessionStorage'"})," instead of the default ",(0,n.jsx)(s.code,{children:"localStorage"}),"."]}),"\n",(0,n.jsx)(s.admonition,{title:"Experimental",type:"caution",children:(0,n.jsxs)(s.p,{children:["This feature is ",(0,n.jsx)(s.strong,{children:"experimental"}),". If you try it out, please let us know how it works for you ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10121",children:"here"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,n.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10151",children:"#10151"}),": add Turkmen (tk) theme translations"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10111",children:"#10111"}),": add Bulgarian (bg) theme translations"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10168",children:"#10168"}),": fix many long overdue Markdown link resolution bugs"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10178",children:"#10178"}),": the ",(0,n.jsx)(s.code,{children:"/search"})," page now respects the ",(0,n.jsx)(s.code,{children:"contextualSearch: false"})," setting"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10118",children:"#10118"}),": fix bad pluralization on docs generated index category card description"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10130",children:"#10130"}),": fix false positives reported by the broken anchor checker due to trailing slashes"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Check the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/changelog/3.4.0",children:"3.4.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},71670:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(27378);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);