"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8610],{41714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(67294),s=a(86010),l=a(95999),r=a(88824),o=a(10833),c=a(35281),i=a(39960),u=a(40245),d=a(99703),m=a(90197),p=a(79985);function g(e){const t=function(){const{selectMessage:e}=(0,r.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=g(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:s,listMetadata:r}=e;const o=g(t);return n.createElement(u.Z,{sidebar:s},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(i.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(d.Z,{metadata:r}))}function f(e){return n.createElement(o.FG,{className:(0,s.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(E,e))}},25784:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92949),s=a(67294),l=a(52695),r=a(19604);const o={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"};var c=a(52263);function i(){const e=(0,s.useRef)(null),{code:t,updateCode:a}=(0,l.m4)(),{sandpack:c}=(0,l.X3)();(0,s.useEffect)((()=>{const t=()=>{null!=e.current&&e.current.layout({})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]);const{colorMode:i}=(0,n.I)();return s.createElement("div",{className:o.editorWrapper},s.createElement(r.ZP,{defaultLanguage:"javascript",value:t,key:c.activeFile,defaultValue:t,defaultPath:"inmemory://model//src/index.ts",onChange:e=>{a(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:t=>{e.current=t},theme:"dark"===i?"vs-dark":"light"}))}function u(e){const{code:t}=(0,l.m4)(),{sandpack:a}=(0,l.X3)(),[n,r]=(0,s.useState)(!1);(0,s.useEffect)((()=>{if(null!=e.onCodeChanged)return e.onCodeChanged(t),()=>{null!=e.onCodeChanged&&e.onCodeChanged(void 0)}}));return s.createElement(l.sp,{className:`${o[e.mode]} ${n?o.showOutput:""}`},s.createElement(i,null),s.createElement("div",{className:o.previewWrapper},s.createElement(l.Gj,{showOpenInCodeSandbox:!0,className:o.sandpackPreview}),null==a.bundlerState&&s.createElement("div",{className:o.sandpackLoadingOverlay})),s.createElement("button",{onClick:()=>{r(!n)}},n?"Show Code":"Show Output"))}function d(e){const t=e.mode??"example";(0,s.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===t&&null!=e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}));const{siteConfig:a}=(0,c.Z)(),{colorMode:r}=(0,n.I)();return s.createElement(l.oT,{template:"vanilla-ts",theme:r,files:{"/src/index.ts":e.code},customSetup:{},options:{classes:{"sp-wrapper":o.spWrapper,"sp-layout":o.spLayout},externalResources:["https://beta.pixijs.com/playground.css",`https://pixijs.download/${a.customFields?.PIXI_VERSION}/pixi.min.js`,`https://pixijs.download/${a.customFields?.PIXI_VERSION}/packages/graphics-extras.js`,`https://pixijs.download/${a.customFields?.PIXI_VERSION}/packages/math-extras.js`,`https://pixijs.download/${a.customFields?.PIXI_VERSION}/packages/webworker.js`]}},s.createElement(u,{mode:t,onCodeChanged:e.onCodeChanged}))}},40245:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(86010),l=a(71732),r=a(36624);function o(e){const{sidebar:t,toc:a,children:o,...c}=e,i=t&&t.items.length>0;return n.createElement(l.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(r.Z,{sidebar:t}),n.createElement("main",{className:(0,s.Z)("col",{"col--7":i&&a,"col--9":i&&!a,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},79972:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),s=a(86010),l=a(9460),r=a(15289),o=a(79224),c=a(99714),i=a(12046);const u="card_Yae6";function d(e){let{children:t,className:a}=e;const d=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--md"}();return n.createElement(r.Z,{className:(0,s.Z)(d,a,u)},n.createElement(o.Z,null),n.createElement(c.Z,null,t),n.createElement(i.Z,null))}},25889:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),s=a(90814),l=a(25784);const r="playgroundCodeBlock_UB3Y";var o=a(72389);function c(e){const t=(0,o.Z)();return e.playground&&t?n.createElement("div",{className:r},n.createElement(l.Z,{code:e.children})):n.createElement(s.Z,e)}}}]);