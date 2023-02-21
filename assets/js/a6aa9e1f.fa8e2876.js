"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3089],{80046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(67294),r=a(86010),s=a(52263),l=a(10833),o=a(35281),c=a(40245),i=a(99703),d=a(90197),u=a(79985);function m(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.Z)(),{blogDescription:r,blogTitle:o,permalink:c}=t,i="/"===c?a:o;return n.createElement(n.Fragment,null,n.createElement(l.d,{title:i,description:r}),n.createElement(d.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(c.Z,{sidebar:r},n.createElement(u.Z,{items:a}),n.createElement(i.Z,{metadata:t}))}function g(e){return n.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(m,e),n.createElement(p,e))}},25784:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(92949),r=a(67294),s=a(52695),l=a(19604);const o={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"};var c=a(52263);function i(){const e=(0,r.useRef)(null),{code:t,updateCode:a}=(0,s.m4)(),{sandpack:c}=(0,s.X3)();(0,r.useEffect)((()=>{const t=()=>{null!=e.current&&e.current.layout({})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]);const{colorMode:i}=(0,n.I)();return r.createElement("div",{className:o.editorWrapper},r.createElement(l.ZP,{defaultLanguage:"javascript",value:t,key:c.activeFile,defaultValue:t,defaultPath:"inmemory://model//src/index.ts",onChange:e=>{a(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:t=>{e.current=t},theme:"dark"===i?"vs-dark":"light"}))}function d(e){const{code:t}=(0,s.m4)(),{sandpack:a}=(0,s.X3)(),[n,l]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(null!=e.onCodeChanged)return e.onCodeChanged(t),()=>{null!=e.onCodeChanged&&e.onCodeChanged(void 0)}}));return r.createElement(s.sp,{className:`${o[e.mode]} ${n?o.showOutput:""}`},r.createElement(i,null),r.createElement("div",{className:o.previewWrapper},r.createElement(s.Gj,{showOpenInCodeSandbox:!0,className:o.sandpackPreview}),null==a.bundlerState&&r.createElement("div",{className:o.sandpackLoadingOverlay})),r.createElement("button",{onClick:()=>{l(!n)}},n?"Show Code":"Show Output"))}function u(e){const t=e.mode??"example";(0,r.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===t&&null!=e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}));const{siteConfig:a}=(0,c.Z)(),{colorMode:l}=(0,n.I)();return r.createElement(s.oT,{template:"vanilla-ts",theme:l,files:{"/src/index.ts":e.code},customSetup:{},options:{classes:{"sp-wrapper":o.spWrapper,"sp-layout":o.spLayout},externalResources:["https://beta.pixijs.com/playground.css",`https://pixijs.download/${a.customFields?.PIXI_VERSION}/pixi.min.js`,`https://pixijs.download/${a.customFields?.PIXI_VERSION}/packages/graphics-extras.js`,`https://pixijs.download/${a.customFields?.PIXI_VERSION}/packages/math-extras.js`,`https://pixijs.download/${a.customFields?.PIXI_VERSION}/packages/webworker.js`]}},r.createElement(d,{mode:t,onCodeChanged:e.onCodeChanged}))}},40245:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010),s=a(71732),l=a(36624);function o(e){const{sidebar:t,toc:a,children:o,...c}=e,i=t&&t.items.length>0;return n.createElement(s.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(l.Z,{sidebar:t}),n.createElement("main",{className:(0,r.Z)("col",{"col--7":i&&a,"col--9":i&&!a,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},79972:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(86010),s=a(9460),l=a(15289),o=a(79224),c=a(99714),i=a(12046);const d="card_Yae6";function u(e){let{children:t,className:a}=e;const u=function(){const{isBlogPostPage:e}=(0,s.C)();return e?void 0:"margin-bottom--md"}();return n.createElement(l.Z,{className:(0,r.Z)(u,a,d)},n.createElement(o.Z,null),n.createElement(c.Z,null,t),n.createElement(i.Z,null))}},25889:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(90814),s=a(25784);const l="playgroundCodeBlock_UB3Y";var o=a(72389);function c(e){const t=(0,o.Z)();return e.playground&&t?n.createElement("div",{className:l},n.createElement(s.Z,{code:e.children})):n.createElement(r.Z,e)}}}]);