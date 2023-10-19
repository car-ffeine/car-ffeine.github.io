"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[1109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),k=n,f=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={slug:36,title:"\ub9c8\ucee4 \ub80c\ub354\ub9c1 \ucd5c\uc801\ud654",authors:["scent"],tags:["react","useSyncExternalState","googleMap"]},o=void 0,p={permalink:"/36",source:"@site/blog/2023-09-21-marker-rendering-optimization.mdx",title:"\ub9c8\ucee4 \ub80c\ub354\ub9c1 \ucd5c\uc801\ud654",description:"1. \uac1c\uc694",date:"2023-09-21T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 21\uc77c",tags:[{label:"react",permalink:"/tags/react"},{label:"useSyncExternalState",permalink:"/tags/use-sync-external-state"},{label:"googleMap",permalink:"/tags/google-map"}],readingTime:12.04,hasTruncateMarker:!1,authors:[{name:"\uc13c\ud2b8",title:"Frontend",url:"https://github.com/kyw0716",imageURL:"https://github.com/kyw0716.png",key:"scent"}],frontMatter:{slug:"36",title:"\ub9c8\ucee4 \ub80c\ub354\ub9c1 \ucd5c\uc801\ud654",authors:["scent"],tags:["react","useSyncExternalState","googleMap"]},prevItem:{title:"\uce74\ud398\uc778 \uc11c\ube44\uc2a4 \ubc29\ubb38\uc790 \ubd84\uc11d - 1",permalink:"/38"},nextItem:{title:"Scale-out \uc2dc Scheduling \uc911\ubcf5 \uc2e4\ud589 \ub9c9\uae30",permalink:"/35"}},i={authorsImageUrls:[void 0]},c=[{value:"1. \uac1c\uc694",id:"1-\uac1c\uc694",level:3},{value:"2. \ubb38\uc81c \uc6d0\uc778 \ubd84\uc11d",id:"2-\ubb38\uc81c-\uc6d0\uc778-\ubd84\uc11d",level:3},{value:"3. \ubb38\uc81c \ud574\uacb0",id:"3-\ubb38\uc81c-\ud574\uacb0",level:3},{value:"\uc791\uc5c5\ud55c PR",id:"\uc791\uc5c5\ud55c-pr",level:3},{value:"\uacb0\uacfc \ubd84\uc11d (performance \ud0ed \ud65c\uc6a9)",id:"\uacb0\uacfc-\ubd84\uc11d-performance-\ud0ed-\ud65c\uc6a9",level:2},{value:"before",id:"before",level:3},{value:"after",id:"after",level:3},{value:"\uac1c\uc120 \uacb0\uacfc",id:"\uac1c\uc120-\uacb0\uacfc",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-\uac1c\uc694"},"1. \uac1c\uc694"),(0,n.kt)("p",null,"\uae30\uc874\uc758 \uad6c\uc870\uc5d0\uc11c\ub294 \ub9c8\ucee4 \ud558\ub098\ub97c \ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \uacfc\uc815\uc744 \uac70\ucce4\ub2e4."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"StationMarkersContainer \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ucda9\uc804\uc18c \uc815\ubcf4 \uc694\uccad"),(0,n.kt)("li",{parentName:"ol"},"\ucda9\uc804\uc18c \uc815\ubcf4\ub97c props\ub85c \ub118\uaca8 Marker \ucef4\ud3ec\ub10c\ud2b8 \ud638\ucd9c"),(0,n.kt)("li",{parentName:"ol"},"\uc9c0\ub3c4\uc5d0 \ubd80\ucc29\ub420 DOM\uc694\uc18c \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ol"},"createRoot\ub97c \ud1b5\ud574 \ub9ac\uc561\ud2b8 root \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ol"},"2\ubc88\uc5d0\uc11c \uc0dd\uc131\ud55c DOM \uc694\uc18c\ub97c \uc804\ub2ec\ud574 \uad6c\uae00 \uc9c0\ub3c4 api\uc758 Marker \uc0dd\uc131\uc790 \ud568\uc218 \ud638\ucd9c"),(0,n.kt)("li",{parentName:"ol"},"3\ubc88\uc5d0\uc11c \uc0dd\uc131\ud588\ub358 root\uc758 render \uba54\uc11c\ub4dc \ud638\ucd9c"),(0,n.kt)("li",{parentName:"ol"},"\ub9c8\ucee4 \uc778\uc2a4\ud134\uc2a4 \uc804\uc5ed \uc0c1\ud0dc\uc5d0 \uc0c8\ub85c \uc0dd\uc131\ud55c \ub9c8\ucee4 \ucd94\uac00")),(0,n.kt)("p",null,"\uc704 \uacfc\uc815\uc744 \uac70\ucce4\uc744 \ub54c\uc758 \ub9c8\ucee4 \ub80c\ub354\ub9c1 \ubaa8\uc2b5\uc744 \ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/28520ee3-2fa6-4110-b4e4-8a0bb706324e",alt:"before"})),(0,n.kt)("p",null,"\ub9c8\ucee4\ub4e4\uc774 \ud55c\ubc88\uc5d0 \ub80c\ub354\ub9c1 \ub418\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc0b0\ubc1c\uc801\uc73c\ub85c \ub80c\ub354\ub9c1 \ub418\ub294 \ubaa8\uc2b5\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("h3",{id:"2-\ubb38\uc81c-\uc6d0\uc778-\ubd84\uc11d"},"2. \ubb38\uc81c \uc6d0\uc778 \ubd84\uc11d"),(0,n.kt)("p",null,"\ub9c8\ucee4\ub97c \ub80c\ub354\ub9c1 \ud558\uae30 \uc704\ud574 \uac70\uce58\ub294 \uacfc\uc815\uc744 \ubd84\uc11d\ud574 \ubcf4\uc558\ub2e4."),(0,n.kt)("p",null,"1 ~ 3 \uacfc\uc815\uc5d0\uc11c\ub294 \uc131\ub2a5\uc5d0 \ud06c\uac8c \uc601\ud5a5\uc744 \ub07c\uce60 \uc694\uc18c\uac00 \uc5c6\uc9c0\ub9cc 4\ubc88 \uacfc\uc815\uc740 \uc77c\ubc18\uc801\uc778 \ub9ac\uc561\ud2b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uac1c\ubc1c\ud560 \ub54c \uacaa\ub294 \uacfc\uc815\uc774 \uc544\ub2c8\ub2e4. \ub530\ub77c\uc11c createRoot\ub97c \ud1b5\ud574 \ub9ce\uc740 \uac1c\uc218\uc758 \ub8e8\ud2b8\ub97c \uc0dd\uc131\ud588\uc744 \ub54c\uc758 \uc601\ud5a5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc558\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/494a5bc5-be5d-4a58-b5b2-77ce7d3e5de7",alt:"image"})),(0,n.kt)("p",null,"\ub9ac\uc561\ud2b8 \uacf5\uc2dd \ubb38\uc11c\ub97c \ubcf4\ub2c8 \ud398\uc774\uc9c0\uc758 \uc77c\ubd80\uc5d0 \ub9ac\uc561\ud2b8\ub97c \ubfcc\ub824\uc11c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ub8e8\ud2b8\ub97c \ud544\uc694\ud55c \ub9cc\ud07c \uc0dd\uc131\ud574\ub3c4 \ub41c\ub2e4\ub294 \uc774\uc57c\uae30\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5c8\ub2e4. \ub530\ub77c\uc11c 4\ubc88 \uacfc\uc815 \ub610\ud55c \ubb38\uc81c\uc758 \uc6d0\uc778\uc774\ub77c\uace0 \ubcfc \uc218 \uc5c6\uc5c8\ub2e4."),(0,n.kt)("p",null,"5\ubc88 \uacfc\uc815\uc740 \uad6c\uae00 \uc9c0\ub3c4\uc5d0 \ub9c8\ucee4\ub97c \ud2b9\uc815 \uc704\ub3c4 \uacbd\ub3c4\uc5d0 \uc704\uce58\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c \uc5b4\uca54 \uc218 \uc5c6\uc774 \uac70\uccd0\uc57c \ud558\ub294 \uacfc\uc815\uc774\ubbc0\ub85c \uc774 \uacfc\uc815\uc740 \ubb38\uc81c\uac00 \uc788\ub354\ub77c\ub3c4 \uac1c\uc120\uc774 \ubd88\uac00\ub2a5\ud574 \uc77c\ub2e8 \uace0\ub824\ud558\uc9c0 \uc54a\uc558\ub2e4."),(0,n.kt)("p",null,"6\ubc88 \uacfc\uc815\uc740 4\ubc88 \uacfc\uc815\uc5d0\uc11c \uc0dd\uc131\ud588\ub358 \ub9ac\uc561\ud2b8 \ub8e8\ud2b8\uc758 render \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574 \uc2e4\uc81c\ub85c \ud654\uba74\uc5d0 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uadf8\ub9ac\ub3c4\ub85d \ud558\ub294 \uacfc\uc815\uc774\ub2e4. \uc774 \uacfc\uc815 \ub610\ud55c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud654\uba74\uc5d0 \ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud574\uc120 \uc5b4\uca54 \uc218 \uc5c6\uc774 \uac70\uccd0\uc57c \ud558\ub294 \uacfc\uc815\uc774\ubbc0\ub85c \uace0\ub824\ud558\uc9c0 \uc54a\uc558\ub2e4."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud558\uc9c0\ub9cc 6\ubc88 \uacfc\uc815\uc5d0\uc11c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc9c1\uc811 \uadf8\ub9ac\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uad6c\uae00 \uc9c0\ub3c4 api\uc758 \uae30\ubcf8 \ub9c8\ucee4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc9c0 \uc54a\ub0d0\uace0 \ubc18\ubb38\ud560 \uc218\ub3c4 \uc788\uc744 \uac83\uc774\ub2e4. \uc774\uc804\uc5d0\ub294 \uc774\ub7ec\ud55c \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud574 \ub9c8\ucee4\ub97c \ub80c\ub354\ub9c1 \ud588\uc5c8\ub2e4. \uc6b0\ub9ac\uc758 \uc11c\ube44\uc2a4\ub294 \ud604\uc7ac \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucda9\uc804\uc18c \uac1c\uc218\ub97c \ub9c8\ucee4\ub97c \ud1b5\ud574\uc11c\ub3c4 \uc804\ub2ec\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uace0\ub824\ud574 \uae30\ubcf8 \ub9c8\ucee4\ub97c \uc0ac\uc6a9\ud560 \ub54c \ub2e4\uc74c\uc758 \ub450 \uac00\uc9c0 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4."),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucda9\uc804\uc18c \uac1c\uc218\ub97c \uae30\ubcf8 \ub9c8\ucee4\uc5d0 \ub80c\ub354\ub9c1 \ud560 \ub54c \uc131\ub2a5\uc774 \ub9e4\uc6b0 \uc88b\uc9c0 \uc54a\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\ub9c8\ucee4\uc758 \ub514\uc790\uc778\uc744 \ubc14\uafb8\uace0\uc790 \ud560 \ub54c \ubcc0\uacbd\uc5d0 \ub300\uc751\ud558\uae30 \uc5b4\ub835\ub2e4.")),(0,n.kt)("p",{parentName:"blockquote"},"\ub530\ub77c\uc11c \ub9c8\ucee4\ub294 \ub9ac\uc561\ud2b8 \ub8e8\ud2b8\uc758 render \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \uac83\uc73c\ub85c \uacb0\uc815\ud588\ub2e4.")),(0,n.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub0a8\uc740 7\ubc88 \uacfc\uc815\uc5d0\uc11c\ub294 useSyncExternalState \ud6c5\uc744 \uc0ac\uc6a9\ud574 \uc804\uc5ed\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uace0 \uc788\ub358 \uc0c1\ud0dc\uc5d0 \uc218\uc815\uc744 \uac00\ud558\ub294 \uc5f0\uc0b0\uc744 \uc218\ud589\ud55c\ub2e4. \uc774 \uacfc\uc815\uc740 \uc774\uc804\uc5d0\ub3c4 \uc131\ub2a5 \uc800\ud558\ub97c \uc720\ubc1c\ud560 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\ub358 \ubd80\ubd84\uc774\uc5c8\ub2e4. (\ud558\ub2e8 \ub9c1\ud06c \ucc38\uace0)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.notion.so/useSyncExternalStore-state-67e686eead8b4750b3015a1f75ea3e76?pvs=21"},"useSyncExternalStore \ud6c5\uc744 \ud1b5\ud574 \uad6c\ub3c5\ud55c state\uac00 \ud55c\ubc88\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ub418\ub294 \uc774\uc720")),(0,n.kt)("p",null,"\uc694\uccad\uc758 \uacb0\uacfc\ub85c \ubc1b\uc544\uc628 \ub9c8\ucee4 \uc815\ubcf4\uc758 \uac1c\uc218\uac00 100\uac1c\ub77c\uace0 \uac00\uc815\ud574\ubcf4\uc790. \uc6b0\ub9ac\ub294 \uc774\uc81c \ub9c8\ucee4\ub97c \ub80c\ub354\ub9c1 \ud560 \uac83\uc774\ub2e4. \uccab \ubc88\uc9f8 \ub9c8\ucee4\uc758 \ub80c\ub354\ub9c1\uc744 \uc704\ud574 1\ubc88 ~ 6\ubc88\uc758 \uacfc\uc815\uc744 \uac70\uce5c \ud6c4 7\ubc88 \uacfc\uc815\uc744 \uc218\ud589\ud55c\ub2e4. \uadf8\ub7ec\uba74 \ub9ac\uc561\ud2b8 \uc785\uc7a5\uc5d0\uc11c\ub294 \ub9ac\uc561\ud2b8 \ub8e8\ud2b8\uc758 render \uba54\uc11c\ub4dc \ud638\ucd9c\uc5d0 \ub300\ud55c \ub3d9\uc791\uc744 \uc218\ud589\ud574\uc57c \ud558\uace0, \uc0c8\ub85c\uc6b4 \ub9c8\ucee4 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uc804\uc5ed \uc0c1\ud0dc\ub97c \ubcc0\uacbd\uc2dc\ud0a4\ub294 \ub3d9\uc791\uc744 \uc218\ud589\ud574\uc57c \ud55c\ub2e4. \ub9ac\uc561\ud2b8\uac00 \uc774 \uacfc\uc815\uc744 100\ubc88 \ubc18\ubcf5\ud558\uace0 \ub098\uba74 \uc6b0\ub9ac\ub294 \ube44\ub85c\uc18c \ubaa8\ub4e0 \ub9c8\ucee4\uac00 \ud654\uba74\uc5d0 \ub80c\ub354\ub9c1 \ub41c \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc744 \uac83\uc774\ub2e4."),(0,n.kt)("p",null,"\ub098\ub294 \uc774 \ubd80\ubd84\uc5d0\uc11c \uc131\ub2a5 \uc800\ud558\uc758 \uc694\uc18c\uac00 \uc788\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4. \ub9ac\uc561\ud2b8\uc5d0\uc11c\uc758 \uc0c1\ud0dc \ubcc0\ud654\ub294 \uace7 \ub9ac\uc561\ud2b8 \ub0b4\ubd80\uc758 \ub80c\ub354\ub9c1\uc744 \uc704\ud55c \ub85c\uc9c1\uc774 \uc218\ud589\ub418\uac8c \ud568\uc744 \uc758\ubbf8\ud558\uace0, \uc774 \uacfc\uc815\uc744 \uac1c\uc120 \uc774\uc804\uc5d0\ub294 \ub9c8\ucee4\uc758 \uac1c\uc218\ub9cc\ud07c \ubc18\ubcf5\ud558\uace0 \uc788\uc5c8\ub358 \uac83\uc774\ub2e4. \uc5ec\uae30\uae4c\uc9c0 \uc0dd\uac01\ud574\ubcf4\ub2c8 \uc804\uc5ed \uc0c1\ud0dc \ubcc0\ud654\uc5d0 \ub300\ud574 \ub9ac\uc561\ud2b8\uac00 \ub80c\ub354\ub9c1\uc744 \uc704\ud55c \uc5f0\uc0b0\uc744 \uc9c4\ud589\ud560 \ub3d9\uc548\uc5d0\ub294 \ub9c8\ucee4\uc758 \ub80c\ub354\ub9c1(render \uba54\uc11c\ub4dc \ud638\ucd9c)\uc774 \uba48\ucd94\ub294 \uac83\uc774 \uc544\ub2d0\uae4c \ud558\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub798\uc11c \ud06c\ub86c \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ud37c\ud3ec\uba3c\uc2a4 \ud0ed\uc744 \ub4e4\uc5b4\uac00 \ubcf4\ub2c8 \uc0b0\ubc1c\uc801\uc73c\ub85c \ubc1c\uc0dd\ud558\ub358 \ub9c8\ucee4 \ub80c\ub354\ub9c1\uc758 \ubb38\uc81c \uc6d0\uc778\uc774 \uc9d0\uc791\ud588\ub358 \uadf8 \uc6d0\uc778\uc784\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/20926d19-79a5-4d49-b733-de1c2b87059c",alt:"image"})),(0,n.kt)("p",null,"\ud504\ub808\uc784 \uc774\ubbf8\uc9c0 \ud558\ub2e8\uc744 \ubcf4\uba74 \uc0b0\ubc1c\uc801\uc778 \ub9c8\ucee4 \ub80c\ub354\ub9c1\uc774 \uc218\ud589\ub420 \ub54c\ub9c8\ub2e4 \uc218\ubc18\ub418\ub294 \uc5b4\ub5a4 \ud568\uc218 \ud638\ucd9c\uc774 \uc788\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/20b8f1e4-eceb-4e18-82f0-8ef6cc5ee8a1",alt:"image"})),(0,n.kt)("p",null,"\uc774 \ubd80\ubd84\uc774 \ubb38\uc81c\uc758 \ud568\uc218 \ud638\ucd9c \ubd80\ubd84\uc774\ub2e4. \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uba74 \uc0c1\ub2e8\uc5d0 ",(0,n.kt)("inlineCode",{parentName:"p"},"performWorkUntilDeadline"),"\uc774\ub780 \ud568\uc218\uac00 \ud638\ucd9c\ub428\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/d7a91ce6-4907-4c79-948b-d80a205a0697",alt:"image"})),(0,n.kt)("p",null,"\uc774 ",(0,n.kt)("inlineCode",{parentName:"p"},"performWorkUntilDeadline")," \ub77c\ub294 \ud568\uc218\ub97c \uc870\uae08 \uc54c\uc544\ubcf4\ub2c8 \ud574\ub2f9 \ud568\uc218\ub294 \uac04\ub2e8\ud788 \ub9d0\ud574 \ub9ac\uc561\ud2b8\uc5d0\uc11c state\uc758 \ubcc0\uacbd\uc774 \ud55c\ubc88\uc5d0 \ub9ce\uc774 \ubc1c\uc0dd\ud560 \ub54c 5ms\uc758 \ub370\ub4dc\ub77c\uc778 \uc2dc\uac04\uc744 \uc904 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud568\uc218\ub77c\ub294 \uac83\uc744 \uc54c\uac8c \ub418\uc5c8\ub2e4. \ubb38\uc81c\uc758 \uc6d0\uc778\uc774\ub77c\uace0 \uc0dd\uac01\ud588\ub358 \ub9c8\ucee4 \uac1c\uc218 \ub9cc\ud07c\uc758 \uc804\uc5ed \uc0c1\ud0dc \ubcc0\ud654\uac00 \uc2e4\uc81c\ub85c \ub9c8\ucee4 \ub80c\ub354\ub9c1\uc744 \uc7a0\uc2dc \uc911\ub2e8\ud558\uac8c \ub9cc\ub4e4\uace0 \uc788\uc74c\uc744 \uc54c\uac8c \ub418\uc5c8\ub2e4."),(0,n.kt)("h3",{id:"3-\ubb38\uc81c-\ud574\uacb0"},"3. \ubb38\uc81c \ud574\uacb0"),(0,n.kt)("p",null,"\uc55e\uc11c \ubd84\uc11d\ud55c \ubb38\uc81c\ub97c \uac1c\uc120\ud574\ubcf4\uace0\uc790 \ub9c8\ucee4 \ub80c\ub354\ub9c1\uc5d0 \ud544\uc694\ud55c \ucda9\uc804\uc18c \uc815\ubcf4 \ubc30\uc5f4\uc744 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ubc1b\uc544\uc640 \uac01 \ucda9\uc804\uc18c \uc815\ubcf4\ub97c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub118\uaca8\uc8fc\uace0, \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ub9c8\ucee4 \uc0dd\uc131\uacfc \ub80c\ub354\ub9c1 \ub85c\uc9c1\uc744 \uc218\ud589\ud558\ub358 \uae30\uc874\uc758 \ubc29\uc2dd\uc744 \ubd80\uc218\uace0 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ubaa8\ub4e0 \uac83\uc744 \uc77c\uad04 \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uace0\uccd0\ubcf4\uc558\ub2e4."),(0,n.kt)("p",null,"\uace0\uce58\ub294 \uacfc\uc815\uc5d0\uc11c \uae30\uc874 \ubc29\uc2dd\uc5d0\uc11c\ub294 \ub9ac\uc561\ud2b8 \uc0dd\uba85 \uc8fc\uae30\uc5d0 \uc758\uc874\ud558\uc5ec \ud654\uba74\uc5d0 \ubcf4\uc5ec\uc9c0\uc9c0 \uc54a\ub294 \ub9c8\ucee4\ub97c \uc9c0\uc6cc\uc8fc\ub358 \ub85c\uc9c1\uc744 \uc774\uc81c\ub294 \ubaa8\ub450 \uc9c1\uc811 \uad6c\ud604\ud574\uc57c \ud588\ub2e4."),(0,n.kt)("p",null,"\uc774\uc804\uc758 \uc601\uc5ed\uacfc \uacb9\uce58\ub294 \ubd80\ubd84\uc5d0 \uc788\ub294 \ucda9\uc804\uc18c\ub294 \ub2e4\uc2dc \uadf8\ub9ac\uc9c0 \uc54a\uace0, \uc601\uc5ed \ubc16\uc758 \ucda9\uc804\uc18c\ub97c \ub098\ud0c0\ub0b4\ub294 \ub9c8\ucee4\ub294 \uc9c0\uc6cc\uc8fc\uace0, \uc774\uc804\uc758 \uc601\uc5ed\uacfc \uacb9\uce58\uc9c0 \uc54a\ub294 \uc0c8\ub85c \ubc1b\uc544\uc628 \ucda9\uc804\uc18c\ub294 \uadf8\ub9ac\ub3c4\ub85d \ub2e4\uc74c\uacfc \uac19\uc774 \uba54\uc11c\ub4dc\ub97c \ubd84\ub9ac\ud574\ubcf4\uc558\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uae30\uc874\uacfc \uacb9\uce58\uc9c0 \uc54a\ub294 \uc0c8\ub85c\uc6b4 \uc601\uc5ed\uc5d0 \ub300\ud55c \ub9c8\ucee4\ub97c \uc0dd\uc131\ud558\ub294 \uba54\uc11c\ub4dc"),(0,n.kt)("li",{parentName:"ul"},"\uae30\uc874\uacfc \uacb9\uccd0\uc9c0\ub294 \uc601\uc5ed\uc5d0 \ub300\ud55c \ub9c8\ucee4\ub4e4\uc744 \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc"),(0,n.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uc601\uc5ed \ubc16\uc5d0 \uc788\ub294 \ub9c8\ucee4\ub4e4\uc744 \uc9c0\uc6cc\uc8fc\ub294 \uba54\uc11c\ub4dc"),(0,n.kt)("li",{parentName:"ul"},"\uc0c8\ub86d\uac8c \uc0dd\uc131\ub41c \ub9c8\ucee4\ub97c \ud654\uba74\uc5d0 \ub80c\ub354\ub9c1\ud558\ub294 \uba54\uc11c\ub4dc")),(0,n.kt)("p",null,"\uc774 \uba54\uc11c\ub4dc\ub4e4\uc744 \ucee4\uc2a4\ud140 \ud6c5\uc73c\ub85c \ubd84\ub9ac\ud574 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc774\ub97c \ud65c\uc6a9\ud558\ub3c4\ub85d \ud558\uc5ec \ub2e4\uc18c \ubcf5\uc7a1\ud560 \uc218 \uc788\ub294 \ub9c8\ucee4 \ub80c\ub354\ub9c1 \ub85c\uc9c1\uc744 \uc120\uc5b8\uc801\uc73c\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d \ud588\ub2e4."),(0,n.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c \uae30\uc874\uc5d0 \uc0ac\uc6a9\ub418\ub358 \uae30\ub2a5\ub4e4\uc744 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba74\uc11c \ud654\uba74\uc5d0 \ub9c8\ucee4\uac00 \uc0b0\ubc1c\uc801\uc73c\ub85c \ub80c\ub354\ub9c1 \ub418\ub358 \ubb38\uc81c\uac00 \ud574\uacb0 \ub418\uc5c8\uace0, \ubd80\uac00\uc801\uc778 \ud6a8\uacfc\ub85c \uc804\uccb4 \ub9c8\ucee4\uc758 \ub80c\ub354\ub9c1 \uc2dc\uc810\ub3c4 \uc55e\ub2f9\uae38 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4. + \uae30\uc874\uc5d0\ub294 \uad6c\uc870\uc801\uc778 \ubb38\uc81c\ub85c \uc5f0\uc0b0\ub7c9\uc774 \ub108\ubb34 \ub9ce\uc544 \ud074\ub7ec\uc2a4\ud130\ub9c1\uc774 \ub2a6\uc5b4\uc838 \uc774\ub97c \ub3c4\uc785\ud560 \uc218 \uc5c6\uc5c8\ub358 \ubb38\uc81c\ub97c \uad6c\uc870 \uc218\uc815\uc73c\ub85c \uc778\ud574 \uc801\uc6a9\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."),(0,n.kt)("h3",{id:"\uc791\uc5c5\ud55c-pr"},"\uc791\uc5c5\ud55c PR"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/woowacourse-teams/2023-car-ffeine/pull/737"},"https://github.com/woowacourse-teams/2023-car-ffeine/pull/737")),(0,n.kt)("h2",{id:"\uacb0\uacfc-\ubd84\uc11d-performance-\ud0ed-\ud65c\uc6a9"},"\uacb0\uacfc \ubd84\uc11d (performance \ud0ed \ud65c\uc6a9)"),(0,n.kt)("h3",{id:"before"},"before"),(0,n.kt)("p",null,"\ub9c8\ucee4 \uc870\ud68c \uc694\uccad\uc774 \uc885\ub8cc\ub41c \uc2dc\uc810: \uc57d ",(0,n.kt)("inlineCode",{parentName:"p"},"2499ms")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/033e8519-a1aa-43a4-959d-afeba93c1917",alt:"image"})),(0,n.kt)("p",null,"\uccab \ub9c8\ucee4 \ub80c\ub354\ub9c1 \uc2dc\uc810: ",(0,n.kt)("inlineCode",{parentName:"p"},"3093ms")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/b4fc47ca-4ef3-43f4-a9a5-7117edabc225",alt:"image"})),(0,n.kt)("p",null,"\ubaa8\ub4e0 \ub9c8\ucee4 \ub80c\ub354\ub9c1 \uc885\ub8cc \uc2dc\uc810: \uc57d ",(0,n.kt)("inlineCode",{parentName:"p"},"3611ms")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/2b8a4c4c-218b-419a-8a47-e3b768d35bc2",alt:"image"})),(0,n.kt)("p",null,"\ucc98\uc74c\uc73c\ub85c \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1 \ub420 \ub54c\uae4c\uc9c0 \uc18c\uc694\ub41c \uc2dc\uac04: ",(0,n.kt)("inlineCode",{parentName:"p"},"594ms")),(0,n.kt)("p",null,"\ubaa8\ub4e0 \ub9c8\ucee4 \ub80c\ub354\ub9c1\uc5d0 \uc18c\uc694\ub41c \uc2dc\uac04: ",(0,n.kt)("inlineCode",{parentName:"p"},"1112ms")),(0,n.kt)("h3",{id:"after"},"after"),(0,n.kt)("p",null,"\ub9c8\ucee4 \uc870\ud68c \uc694\uccad\uc758 \uc2dc\uc791\uc810: \uc57d ",(0,n.kt)("inlineCode",{parentName:"p"},"1875ms")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/b7b8ff0c-2314-4e3f-a9f4-72c445636283",alt:"image"})),(0,n.kt)("p",null,"\ubaa8\ub4e0 \ub9c8\ucee4 \ub80c\ub354\ub9c1 \uc885\ub8cc \uc2dc\uc810: ",(0,n.kt)("inlineCode",{parentName:"p"},"2395ms")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/d75c323e-5c04-42a2-ad3e-1d13ea52216e",alt:"image"})),(0,n.kt)("p",null,"\ucc98\uc74c\uc73c\ub85c \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1 \ub420 \ub54c\uae4c\uc9c0 \uc18c\uc694\ub41c \uc2dc\uac04: ",(0,n.kt)("inlineCode",{parentName:"p"},"519ms")),(0,n.kt)("p",null,"\ubaa8\ub4e0 \ub9c8\ucee4 \ub80c\ub354\ub9c1\uc5d0 \uc18c\uc694\ub41c \uc2dc\uac04: ",(0,n.kt)("inlineCode",{parentName:"p"},"519ms")),(0,n.kt)("h3",{id:"\uac1c\uc120-\uacb0\uacfc"},"\uac1c\uc120 \uacb0\uacfc"),(0,n.kt)("p",null,"\ucc98\uc74c\uc73c\ub85c \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1 \ub418\ub294 \uc2dc\uc810\uc740 \ub450 \ubc29\uc2dd \ubaa8\ub450 \ube44\uc2b7\ud55c \uacb0\uacfc\ub97c \ubcf4\uc778\ub2e4. \ud558\uc9c0\ub9cc \uac1c\uc120 \ud6c4 \ubc29\uc2dd\uc740 \ud55c\ubc88\uc5d0 \ubaa8\ub4e0 \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1 \ub418\ub294 \ubc29\uc2dd\uc774\uace0, \uac1c\uc120 \uc774\uc804\uc758 \ubc29\uc2dd\uc740 \uc0b0\ubc1c\uc801\uc73c\ub85c \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1 \ub418\ub294 \ubc29\uc2dd\uc774\ubbc0\ub85c \uac1c\uc120 \ud6c4\uc758 \ubc29\uc2dd\uc5d0\uc11c \uc804\uccb4 \ub9c8\ucee4\ub97c \ub80c\ub354\ub9c1 \ud558\ub294 \uc2dc\uc810\uc774 \ud6e8\uc52c \ube68\ub77c\uc9c0\uac8c \ub418\uc5c8\ub2e4."),(0,n.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c \uc804\uccb4 \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1 \ub418\ub294 \uc18d\ub3c4 \uc57d ",(0,n.kt)("inlineCode",{parentName:"p"},"55.6%")," \ub2e8\ucd95\ud558\uac8c \ub418\uc5c8\ub2e4. \uc774 \uacb0\uacfc\ub294 \ub9c8\ucee4\uac00 \ub298\uc5b4\ub0a0 \uc218\ub85d \ub354\uc6b1 \ucc28\uc774\uac00 \uadf9\uc801\uc73c\ub85c \ubc8c\uc5b4\uc9c8 \uac83\uc73c\ub85c \uc608\uc0c1\ub41c\ub2e4."),(0,n.kt)("p",null,"before"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/28520ee3-2fa6-4110-b4e4-8a0bb706324e",alt:"before"})),(0,n.kt)("p",null,"after"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/77326660/1b1521c6-d220-4140-bbe9-fff40051c6a2",alt:"after"})))}m.isMDXComponent=!0}}]);