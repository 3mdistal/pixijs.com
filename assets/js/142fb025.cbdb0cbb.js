"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8551],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={hide_table_of_contents:!0},o="Shader Toy Filter Render Texture",s={unversionedId:"examples/filters-advanced/shader-toy-filter-render-texture",id:"examples/filters-advanced/shader-toy-filter-render-texture",title:"Shader Toy Filter Render Texture",description:"",source:"@site/docs/examples/filters-advanced/shader-toy-filter-render-texture.md",sourceDirName:"examples/filters-advanced",slug:"/examples/filters-advanced/shader-toy-filter-render-texture",permalink:"/examples/filters-advanced/shader-toy-filter-render-texture",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/filters-advanced/shader-toy-filter-render-texture.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Mouse Blending",permalink:"/examples/filters-advanced/mouse-blending"},next:{title:"Collision Detection",permalink:"/examples/advanced/collision-detection"}},l={},c=[],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shader-toy-filter-render-texture"},"Shader Toy Filter Render Texture"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n/**\n * Please note that this is not the most optimal way of doing pure shader generated rendering and should be used when the\n * scene is wanted as input texture. Check the mesh version of example for more performant version if you need only shader\n * generated content.\n **/\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nPIXI.Assets.load('https://pixijs.com/assets/perlin.jpg').then(onAssetsLoaded);\n\nlet filter = null;\n\nconst text = new PIXI.Text('PixiJS', { fill: 0xFFFFFF, fontSize: 80 });\n\ntext.anchor.set(0.5, 0.5);\ntext.position.set(app.renderer.screen.width / 2, app.renderer.screen.height / 2);\n\napp.stage.addChild(text);\n\nlet totalTime = 0;\n\n// Fragment shader, in real use this would be much cleaner when loaded from a file\n// or embedded into the application as data resource.\nconst fragment = `//Based on this: https://www.shadertoy.com/view/wtlSWX\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D noise;\nuniform float time;\n// Distance function. Just calculates the height (z) from x,y plane with really simple length check.\n// Its not exact as there could be shorter distances.\nvec2 dist(vec3 p)\n{\n  float id = floor(p.x)+floor(p.y);\n  id = mod(id, 2.);\n  float h = texture2D(noise, vec2(p.x, p.y)*0.04).r*5.1;\n  float h2 = texture2D(uSampler, vTextureCoord).r;\n  return vec2(h+h2-p.z,id);\n}\n//Light calculation.\nvec3 calclight(vec3 p, vec3 rd)\n{\n  vec2 eps = vec2( 0., 0.001);\n  vec3 n = normalize( vec3(\n    dist(p+eps.yxx).x - dist(p-eps.yxx).x,\n    dist(p+eps.xyx).x - dist(p-eps.xyx).x,\n    dist(p+eps.xxy).x - dist(p-eps.xxy).x\n  ));\n\n  vec3 d = vec3( max( 0., dot( -rd ,n)));\n\n  return d;\n}\n\nvoid main()\n{\n  vec2 uv = vec2(vTextureCoord.x, 1.-vTextureCoord.y);\n  uv *=2.;\n  uv-=1.;\n\n  vec3 cam = vec3(0.,time -2., -3.);\n  vec3 target = vec3(sin(time)*0.1, time+cos(time)+2., 0. );\n  float fov = 2.2;\n  vec3 forward = normalize( target - cam);\n  vec3 up = normalize(cross( forward, vec3(0., 1.,0.)));\n  vec3 right = normalize( cross( up, forward));\n  vec3 raydir = normalize(vec3( uv.x *up + uv.y * right + fov*forward));\n\n  //Do the raymarch\n  vec3 col = vec3(0.);\n  float t = 0.;\n  for( int i = 0; i < 100; i++)\n  {\n    vec3 p = t * raydir + cam;\n    vec2 d = dist(p);\n    t+=d.x*0.5;//Jump only half of the distance as height function used is not really the best for heightmaps.\n    if(d.x < 0.001)\n    {\n      vec3 bc = d.y < 0.5 ? vec3(1.0, .8, 0.) :\n                vec3(0.8,0.0, 1.0);\n      col = vec3( 1.) * calclight(p, raydir) * (1. - t/150.) *bc;\n      break;\n    }\n    if(t > 1000.)\n    {\n      break;\n    }\n  }\n  gl_FragColor = vec4(col, 1.);\n}\n`;\n\nfunction onAssetsLoaded(perlin)\n{\n    // Add perlin noise for filter, make sure it's wrapping and does not have mipmap.\n    perlin.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;\n    perlin.baseTexture.mipmap = false;\n\n    // Build the filter\n    filter = new PIXI.Filter(null, fragment, {\n        time: 0.0,\n        noise: perlin,\n    });\n    app.stage.filterArea = app.renderer.screen;\n    app.stage.filters = [filter];\n\n    // Listen for animate update.\n    app.ticker.add((delta) =>\n    {\n        filter.uniforms.time = totalTime;\n        totalTime += delta / 60;\n    });\n}\n")))}p.isMDXComponent=!0}}]);