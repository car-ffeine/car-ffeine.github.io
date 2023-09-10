"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,d=k["".concat(o,".").concat(m)]||k[m]||s[m]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={slug:32,title:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",authors:["boxster"],tags:["mysql"]},i="\uc774 \uae00\uc744 \uc4f0\ub294 \uc774\uc720",p={permalink:"/32",source:"@site/blog/2023-09-11-database-replication.mdx",title:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",description:"\uba3c\uc800 \uc774 \uae00\uc744 \uc4f0\uac8c \ub41c \uacc4\uae30\ub97c \ub9d0\uc500\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \uc9c0\ub09c \uae00\uc5d0\uc11c \uc124\uba85\ud588\ub4ef\uc774 \uc800\ud76c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc2e4\ud589\ub418\uace0 \uc788\ub294 \uc11c\ubc84\uc758 cpu \uc0ac\uc6a9\ub960\uc774 100%\uac00 \ub418\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",date:"2023-09-11T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 11\uc77c",tags:[{label:"mysql",permalink:"/tags/mysql"}],readingTime:23.37,hasTruncateMarker:!1,authors:[{name:"\ubc15\uc2a4\ud130",title:"Backend",url:"https://github.com/drunkenhw",imageURL:"https://github.com/drunkenhw.png",key:"boxster"}],frontMatter:{slug:"32",title:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",authors:["boxster"],tags:["mysql"]},nextItem:{title:"\uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",permalink:"/31"}},o={authorsImageUrls:[void 0]},c=[{value:"Binary log \ubcf5\uc81c \ubc29\uc2dd",id:"binary-log-\ubcf5\uc81c-\ubc29\uc2dd",level:2},{value:"GTID \ubcf5\uc81c \ubc29\uc2dd",id:"gtid-\ubcf5\uc81c-\ubc29\uc2dd",level:2},{value:"\uc800\ud76c \ud300\uc758 \ubcf5\uc81c \ubc29\uc2dd",id:"\uc800\ud76c-\ud300\uc758-\ubcf5\uc81c-\ubc29\uc2dd",level:3},{value:"\ube44\ub3d9\uae30 \ubcf5\uc81c",id:"\ube44\ub3d9\uae30-\ubcf5\uc81c",level:2},{value:"\ubc18\ub3d9\uae30 \ubcf5\uc81c",id:"\ubc18\ub3d9\uae30-\ubcf5\uc81c",level:2},{value:"\uc800\ud76c \ud300\uc758 \ubcf5\uc81c \ub3d9\uae30\ud654 \ubc29\uc2dd",id:"\uc800\ud76c-\ud300\uc758-\ubcf5\uc81c-\ub3d9\uae30\ud654-\ubc29\uc2dd",level:3},{value:"\uc2f1\uae00 \ub808\ud50c\ub9ac\uce74",id:"\uc2f1\uae00-\ub808\ud50c\ub9ac\uce74",level:2},{value:"\uba40\ud2f0 \ub808\ud50c\ub9ac\uce74",id:"\uba40\ud2f0-\ub808\ud50c\ub9ac\uce74",level:2},{value:"\uccb4\uc778 \ubcf5\uc81c",id:"\uccb4\uc778-\ubcf5\uc81c",level:2},{value:"\ub4c0\uc5bc \uc18c\uc2a4 \ubcf5\uc81c",id:"\ub4c0\uc5bc-\uc18c\uc2a4-\ubcf5\uc81c",level:2},{value:"\uba40\ud2f0 \uc18c\uc2a4 \ubcf5\uc81c",id:"\uba40\ud2f0-\uc18c\uc2a4-\ubcf5\uc81c",level:2},{value:"\uc800\ud76c \ud300\uc758 \ud1a0\ud3f4\ub85c\uc9c0 \ubc29\uc2dd",id:"\uc800\ud76c-\ud300\uc758-\ud1a0\ud3f4\ub85c\uc9c0-\ubc29\uc2dd",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],u={toc:c},k="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uba3c\uc800 \uc774 \uae00\uc744 \uc4f0\uac8c \ub41c \uacc4\uae30\ub97c \ub9d0\uc500\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \uc9c0\ub09c \uae00\uc5d0\uc11c \uc124\uba85\ud588\ub4ef\uc774 \uc800\ud76c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc2e4\ud589\ub418\uace0 \uc788\ub294 \uc11c\ubc84\uc758 cpu \uc0ac\uc6a9\ub960\uc774 100%\uac00 \ub418\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774 \ubd80\ubd84\uc5d0 \ub300\ud574\uc11c\ub294 \uc870\ud68c \uc131\ub2a5\uc744 \ub192\ud600 \uc5b4\ub290\uc815\ub3c4 \ud574\uacb0\ud558\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc870\ud68c\uac00 \uc544\ub2cc \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc77c\uc815\ud55c \uc8fc\uae30\ub85c \uc5c5\ub370\uc774\ud2b8 \ud574\uc918\uc57c\ud558\ub294 \ub85c\uc9c1\ub3c4 \ud3ec\ud568\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub97c \ud560 \ub54c \uc870\ud68c\ub97c \ud558\uac8c \ub41c\ub2e4\uba74 cpu \uc0ac\uc6a9\ub960\uc740 \ube44\uc2b7\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774 \ubd80\ubd84\uc744 \ud574\uacb0\ud558\uace0\uc790 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n\uacb0\ub860\ubd80\ud130 \ub9d0\uc500\ub4dc\ub9ac\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc801\uc6a9\ud55c \ud6c4 \uc131\ub2a5\uc774 \ub208\uc5d0 \ub744\uac8c \uc88b\uc544\uc84c\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ubd80\ubd84\uc740 \ub2e4\uc74c \ud3ec\uc2a4\ud305\uc5d0 \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4"),(0,a.kt)("h1",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub780"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub780?"),(0,a.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub780 \ud558\ub098\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ub2e4\ub978 \ud558\ub098 \uc774\uc0c1\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub85c \ub370\uc774\ud130\uc758 \ubcf5\uc81c \ub610\ub294 \ubcf5\uc0ac\ub97c \uc218\ud589\ud558\ub294 \ud504\ub85c\uc138\uc2a4 \ub610\ub294 \uae30\uc220\uc785\ub2c8\ub2e4. \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc8fc\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uace0\uac00\uc6a9\uc131"),":\n\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\uc758 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c, \ub808\ud50c\ub9ac\uce74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\uc2a4\ud15c\uc744 \uacc4\uc18d \uc6b4\uc601\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc11c\ube44\uc2a4 \uc911\ub2e8 \uc2dc\uac04\uc744 \ucd5c\uc18c\ud654\ud558\uace0 \ube44\uc988\ub2c8\uc2a4 \uc5f0\uc18d\uc131\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uc131\ub2a5 \ud5a5\uc0c1")," :\n\ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc77d\uae30 \uc791\uc5c5\uc744 \ubd84\uc0b0\uc2dc\ud0ac \uc218 \uc788\uc73c\ubbc0\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\uc758 \uc77d\uae30 \ubd80\ud558\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uc9c0\uc5ed\uc801 \ubd84\uc0b0")," :\n\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc9c0\ub9ac\uc801\uc73c\ub85c \ubd84\uc0b0\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc9c0\uc5ed\uc801\uc778 \uc0ac\uc6a9\uc790 \ub610\ub294 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc5d0 \ube60\ub974\uac8c \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc73c\uba70, \uc9c0\uc5ed\uc801\uc778 \uaddc\uc815 \uc900\uc218 \uc694\uad6c\uc0ac\ud56d\uc744 \ucda9\uc871\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\ubc31\uc5c5\uacfc \ubcf5\uad6c")," :\n\ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc8fc \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \ubc31\uc5c5\uc744 \uc0dd\uc131\ud558\uace0, \uc774\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc7a5\uc560 \ubcf5\uad6c\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc190\uc0c1\ub418\uc5c8\uc744 \ub54c \ubc31\uc5c5 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\uc2a4\ud15c\uc744 \ube60\ub974\uac8c \ubcf5\uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130 \ubd84\uc11d \ubc0f \ubcf4\uace0")," :\n\ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \ub2e4\ub978 \ubd84\uc11d \ub610\ub294 \ubcf4\uace0 \ub3c4\uad6c\ub85c \ubcf5\uc0ac\ud558\uc5ec \ub370\uc774\ud130 \uc6e8\uc5b4\ud558\uc6b0\uc2a4 \ub610\ub294 \ubd84\uc11d \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("p",null,"\uc800\ud76c \ud300\uc5d0\uc11c \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc801\uc6a9\ud55c \uac00\uc7a5 \ud070 \uc774\uc720\ub294 \uc131\ub2a5 \ud5a5\uc0c1\uc785\ub2c8\ub2e4. \uc544\ubb34\ub798\ub3c4 \uc800\ud76c \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \uc77d\uae30 \uc791\uc5c5\uacfc \uc4f0\uae30 \uc791\uc5c5\uc774 \ub458 \ub2e4 \ube48\ubc88\ud558\uac8c \uc77c\uc5b4\ub098\uace0, \ud2b9\ud788 \uc4f0\uae30 \uc791\uc5c5\uc5d0 \ub9ce\uc740 \uc5f0\uc0b0\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc5d0\uac8c \ucd5c\uc2e0\uc758 \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud558\uace0\uc790 \uc4f0\uae30 \uc791\uc5c5\uc744 \uc790\uc8fc\ud558\uc5ec \ub370\uc774\ud130\ub97c \ucd5c\uc2e0\ud654\ud558\ub354\ub77c\ub3c4, \uc77d\uae30 \uc791\uc5c5\uc774 \ub290\ub824\uc9c0\uba74 \uc544\ubb34\ub3c4 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub807\uac8c \uc11c\ubc84\ub97c \uc5ec\ub7ec \ub300 \ub450\uc5b4 \ud558\ub098\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\uac00 \ubc1b\ub294 \ubd80\ud558\ub97c \ubd84\uc0b0\uc2dc\ud0a8\ub2e4\uba74 \uc131\ub2a5\uc774 \ud5a5\uc0c1 \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \ub450\ubc88\uc9f8\ub85c\ub294 \uace0\uac00\uc6a9\uc131\uc785\ub2c8\ub2e4. \ud604\uc7ac \uc800\ud76c\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \ud558\ub098\uc758 \uc11c\ubc84\ub85c SPOF \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc801\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ubd84\uc0b0\ud55c\ub2e4\uba74 \ud558\ub098\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc7a5\uc560\uac00 \uc0dd\uaca8 \uc911\uc9c0\uac00 \ub418\ub354\ub77c\ub3c4, \ub2e4\ub978 \uc11c\ubc84\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub85c \uc11c\ube44\uc2a4\ub97c \uc774\uc5b4\ub098\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ubcf5\uc81c-\ubc29\uc2dd"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubcf5\uc81c \ubc29\uc2dd"),(0,a.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubcf5\uc81c \ubc29\uc2dd\uc740 \ud06c\uac8c \ub450\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"Binary Log\ub85c \ubcf5\uc81c\ud558\ub294 \ubc29\uc2dd"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"GTID(Global Transaction Id)\ub97c \ud1b5\ud574 \ubcf5\uc81c\ub97c \ud558\ub294 \ubc29\uc2dd"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"binary-log-\ubcf5\uc81c-\ubc29\uc2dd"},"Binary log \ubcf5\uc81c \ubc29\uc2dd"),(0,a.kt)("p",null,"\uba3c\uc800 Binary Log \ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc218\ud589\ud55c \ucffc\ub9ac (\uc0ac\uc6a9\uc790 \ucd94\uac00, \uc778\ub371\uc2a4 \ucd94\uac00, Update, Insert, Delete \ub4f1 ) \ubaa8\ub4e0 \uc815\ubcf4\ub97c Binary Log\uc5d0 \uae30\ub85d\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud574\ub2f9 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\uc5d0\ub294 \uc774\ubca4\ud2b8\ub9c8\ub2e4 Mysql \uc11c\ubc84\uc758 \uace0\uc720\ud55c Server id\ub97c \uac00\uc9c0\uace0 \uc788\ub294\ub370, \ud574\ub2f9 Id\uac00 \uac19\uc740 \uc11c\ubc84\uc5d0\uc11c\ub294 \ud574\ub2f9 \uc774\ubca4\ud2b8\ub97c \uc790\uc2e0\uc774 \ubc1c\uc0dd\uc2dc\ud0a8 \uc774\ubca4\ud2b8\ub85c \uac04\uc8fc\ud558\uace0 \uc801\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \uac01\uac01\uc758 \uace0\uc720\ud55c server id\ub97c \uc124\uc815\ud574\uc918\uc57c \ud569\ub2c8\ub2e4.\n\uc774 ",(0,a.kt)("strong",{parentName:"p"},"\ubc14\uc774\ub108\ub9ac \ub85c\uadf8 \ud30c\uc77c\uc758 \uc704\uce58\uc640 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8 \ud30c\uc77c\uba85"),"\uc744 \ud1b5\ud574 Replica \uc11c\ubc84\ub294 Source \uc11c\ubc84\uc758 \uc774\ubca4\ud2b8\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4"),(0,a.kt)("h2",{id:"gtid-\ubcf5\uc81c-\ubc29\uc2dd"},"GTID \ubcf5\uc81c \ubc29\uc2dd"),(0,a.kt)("p",null,"Mysql 5.5 \ubc84\uc804 \uc774\uc0c1\ubd80\ud130\ub294 GTID \uae30\ubc18 \ubcf5\uc81c\ub3c4 \uac00\ub2a5\ud558\uac8c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4 GTID\ub294 source id\uc640 transaction id\uac00 \uc870\ud569\ub41c \ubc29\uc2dd\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4. source id\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \ubc1c\uc0dd\ud55c \uc18c\uc2a4 \uc11c\ubc84\ub97c \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c \uac12\uc73c\ub85c server\uc758 uuid \uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"+--------------------------------------+\n| source_uuid                          |\n+--------------------------------------+\n| c3a2296b-31a2-11ee-b887-02a8cf0173ac |\n+--------------------------------------+\n")),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c GTID\ub97c \uae30\ubc18\uc73c\ub85c Source \uc11c\ubc84\ub97c \uad6c\ubd84\ud558\uace0 Binary Log \ud30c\uc77c\uc5d0 \uae30\ub85d\ub41c GTID\ub97c \ud655\uc778\ud558\uc5ec \ub9c8\uc9c0\ub9c9\uc5d0 \uc801\uc6a9\ud55c \uc774\ubca4\ud2b8\ub97c \ud655\uc778\ud558\uace0, \uc801\uc6a9\ud558\uc9c0 \uc54a\uc740 \uc774\ubca4\ud2b8\ub97c \uc21c\ucc28\ub300\ub85c \uc2e4\ud589\uc2dc\ucf1c \ubcf5\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ub450\uac00\uc9c0 \ubc29\ubc95 \uc911 \uc800\ud76c\ub294 GTID \ubc29\uc2dd\uc758 \ubcf5\uc81c\ub97c \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4. \uc774\uc720\ub294 \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,a.kt)("mermaid",{value:"graph TD\n  Source[Source Server: BinaryLog10] --\x3e Replica1[Replica1: BinaryLog10]\n  Source[Source Server: BinaryLog10] --\x3e Replica2[Replica2: BinaryLog9]"}),(0,a.kt)("p",null,"\uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c \ud1a0\ud3f4\ub85c\uc9c0\ub97c \uad6c\uc131\ud588\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. Source \uc11c\ubc84\uc5d0\uc11c\ub294 Binary Log 10\ubc88 \ud30c\uc77c\uae4c\uc9c0 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 Replica1 \uc5d0\uc11c\ub294 Source \uc11c\ubc84\uc758 \uc774\ubca4\ud2b8\uac00 \ucd5c\uc2e0\ud654 \ub418\uc5b4 \uc788\uc9c0\ub9cc, Replica2  \uc11c\ubc84\ub294 \uc544\uc9c1 \ucd5c\uc2e0\ud654\uac00 \ub418\uc9c0 \uc54a\uc740 \uc0c1\ud669\uc785\ub2c8\ub2e4. \uc774 \uc0c1\ud669\uc5d0\uc11c Source Server\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\uc5ec \uc11c\ubc84\uac00 \uc911\ub2e8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\uba74 Replica1 \uc11c\ubc84\ub97c Source \uc11c\ubc84\ub85c \uc2b9\uaca9\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ub41c\ub2e4\uba74 Replica1 \uc11c\ubc84\uc5d0\uc11c \ubaa8\ub4e0 \ucffc\ub9ac\uc758 \uc694\uccad\uc774 \ub4e4\uc5b4\uc624\uac8c \ub429\ub2c8\ub2e4. BinaryLog10\uc774\ub77c\ub294 \ud30c\uc77c\uc758 \uc704\uce58\uc640 \ud30c\uc77c\uc744 \ucc3e\uc744 \ubc29\ubc95\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0 Source\uc11c\ubc84\uac00 \ubcf5\uad6c\ub418\uc9c0 \uc54a\ub294 \uc774\uc0c1 \ud639\uc740 Replica 1 \uc11c\ubc84\uc758 Relay Log\uac00 \ub0a8\uc544\uc788\uc9c0 \uc54a\ub294 \uc774\uc0c1 Replica2 \uc11c\ubc84\ub294 \uc808\ub300 \ucd5c\uc2e0\ud654\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uc2dd\uc758 \ubc29\uc2dd\uc774\ub77c\uba74 Source \uc11c\ubc84\uac00 \uc911\ub2e8\ub418\uc5c8\uc744 \ub54c \ub2e4\ub978 \uc11c\ubc84\uac00 \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \uace0\uac00\uc6a9\uc131 \ubb38\uc81c\ub294 \ud574\uacb0\ub41c \uac83 \uac19\uc9c0\ub9cc, Replica2 \uc11c\ubc84\ub294 \uc544\ubb34 \uc77c\ub3c4 \ud558\uc9c0\uc54a\uace0 \ub0a8\uc544\uc788\ub294 \uc11c\ubc84, \uc989 Source \uc11c\ubc84 \ud558\ub098\uac00 \uc911\ub2e8\ub418\uc5c8\uc73c\ub098 ",(0,a.kt)("strong",{parentName:"p"},"2\ub300\uc758 \uc11c\ubc84\uac00 \uc911\ub2e8\ub41c \uac83"),"\uacfc \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 GTID\uac00 \ub4f1\uc7a5\ud588\uc2b5\ub2c8\ub2e4. GTID \ubc29\uc2dd\uc740 Binary Log\uc758 \uc704\uce58\uc640 \ud30c\uc77c\uba85\uc774 \ud544\uc694\ud55c \uac83\uc774 \uc544\ub2cc \ub2e4\uc74c \uc774\ubca4\ud2b8\uc758 GTID\ub9cc \uc788\ub2e4\uba74 \ud574\ub2f9 \uc774\ubca4\ud2b8\ub97c \ubc14\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. Source \uc11c\ubc84\ub85c \uc2b9\uaca9\ub41c Replica1 \uc11c\ubc84\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"GTID\ub97c \ubc1b\uc544 \uc801\uc6a9\ud558\uc5ec \ucd5c\uc2e0\ud654"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc800\ud76c-\ud300\uc758-\ubcf5\uc81c-\ubc29\uc2dd"},"\uc800\ud76c \ud300\uc758 \ubcf5\uc81c \ubc29\uc2dd"),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uc7a5\uc810\uc73c\ub85c GTID\uae30\ubc18 \ubcf5\uc81c \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"\ubcf5\uc81c-\ub3d9\uae30\ud654-\ubc29\uc2dd"},"\ubcf5\uc81c \ub3d9\uae30\ud654 \ubc29\uc2dd"),(0,a.kt)("p",null,"\ubcf5\uc81c \ubc29\uc2dd\uc5d0\ub294 \ud06c\uac8c \ub450\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\ube44\ub3d9\uae30 \ubcf5\uc81c"),"\uc640 ",(0,a.kt)("strong",{parentName:"p"},"\ubc18\ub3d9\uae30 \ubcf5\uc81c"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ube44\ub3d9\uae30-\ubcf5\uc81c"},"\ube44\ub3d9\uae30 \ubcf5\uc81c"),(0,a.kt)("p",null,"\ube44\ub3d9\uae30 \ubcf5\uc81c\ub294 \ub9d0\uadf8\ub300\ub85c \ube44\ub3d9\uae30\ub85c \ubcf5\uc81c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc544\uc8fc \uac04\ub2e8\ud569\ub2c8\ub2e4. Source \uc11c\ubc84\uc5d0\uc11c \uc5b4\ub5a0\ud55c \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c Replica \uc11c\ubc84\uc758 \ubc18\uc601\uacfc \uc0c1\uad00\uc5c6\uc774 \ub3d9\uc791\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc18c\uc2a4 \uc11c\ubc84\uc5d0\uc11c \ucee4\ubc0b\ub41c \ud2b8\ub79c\uc7ad\uc158\uc740 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\uc5d0 \uae30\ub85d\ub418\uace0, \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc5d0\uc11c\ub294 \uc8fc\uae30\uc801\uc73c\ub85c \uc0c8\ub85c\uc6b4 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\ub97c \uc694\uccad\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \uc18c\uc2a4 \uc11c\ubc84\ub294 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uac00 \uc81c\ub300\ub85c \ubcc0\uacbd \ub418\uc5c8\ub294\uc9c0 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989 \ub370\uc774\ud130 \uc815\ud569\uc131\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae34\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \uc18c\uc2a4 \uc11c\ubc84\uac00 \uac01 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\ub85c \uc804\uc1a1\ub418\ub294 \ubd80\ubd84\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc810\uc774 \uc18d\ub3c4 \uce21\uba74\uc5d0\uc11c \ube60\ub974\uace0, \ub610 \uc5ec\ub7ec \ub300\uc758 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\ub97c \uad6c\uc131\ud558\ub354\ub77c\ub3c4 \ud070 \uc131\ub2a5 \uc800\ud558\uac00 \uc5c6\ub2e4\ub294 \uc810\uc774\uc11c \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ubc18\ub3d9\uae30-\ubcf5\uc81c"},"\ubc18\ub3d9\uae30 \ubcf5\uc81c"),(0,a.kt)("p",null,"\ubc18\ub3d9\uae30 \ubcf5\uc81c\ub294 \ube44\ub3d9\uae30 \ubcf5\uc81c\ubcf4\ub2e4 \uc880 \ub354 \ub370\uc774\ud130 \uc815\ud569\uc131\uc774 \uc62c\ub77c\uac11\ub2c8\ub2e4. \uc18c\uc2a4 \uc11c\ubc84\ub294 \ubcc0\uacbd\ub41c \ud2b8\ub79c\uc7ad\uc158\uc774 \uc788\uc744 \ub54c \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uac00 \ub2e4 \uc804\uc1a1\uc774 \ub418\uc5c8\ub2e4\ub294 ACK \uc2e0\ud638\ub97c \ubc1b\uae30 \ub54c\ubb38\uc5d0 \ud655\uc2e4\ud788 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc804\uc1a1\uc5ec\ubd80\ub9cc \ud655\uc778\ud558\uae30 \ub54c\ubb38\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \ubc18\uc601\uc774 \ub418\uc5c8\ub2e4\ub294 \ubcf4\uc7a5\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \ubc18\ub3d9\uae30 \ubcf5\uc81c \ubc29\uc2dd\uc740 2\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"After sync"),": After Sync \ubc29\uc2dd\uc740 \uc18c\uc2a4 \uc11c\ubc84\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\uc5d0 \uae30\ub85d \ud6c4 Storage Engine\uc5d0 \ubc14\ub85c \ucee4\ubc0b\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\uc5d0 \uae30\ub85d \ud6c4 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc758 ACK \uc751\ub2f5\uc744 \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ACK \uc751\ub2f5\uc774 \ub3c4\ucc29\ud558\uba74 \uadf8\uc81c\uc11c\uc57c \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc744 \ucee4\ubc0b\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\ub9ac\ud558\uace0 \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"After commit"),": After commit\uc740 \uc774\ub984 \uadf8\ub300\ub85c \ucee4\ubc0b\uc744 \uba3c\uc800 \ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uae30\uba74 \uba3c\uc800 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\uc5d0 \uae30\ub85d \ud6c4 \uc18c\uc2a4 \uc11c\ubc84 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0 \ucee4\ubc0b\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc758 ACK \uc751\ub2f5\uc774 \ub0b4\ub824\uc624\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ucc98\ub9ac \uacb0\uacfc\ub97c \uc5bb\uace0 \ub2e4\uc74c \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uba3c\uc800 after commit \ubc29\uc2dd\uc740 \uc18c\uc2a4 \uc11c\ubc84\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \ud32c\ud140 \ub9ac\ub4dc\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4 \ucee4\ubc0b\uae4c\uc9c0\ub41c \ud6c4 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc758 \uc751\ub2f5\uc744 \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uc774\ucc98\ub7fc \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4 \ucee4\ubc0b\uae4c\uc9c0 \uc644\ub8cc\ub41c \ub370\uc774\ud130\ub294 \ub2e4\ub978 \uc138\uc158\uc5d0\uc11c\ub3c4 \uc870\ud68c\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \ucee4\ubc0b\ub418\uc5c8\uace0, \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\ub85c \uc544\uc9c1 \uc751\ub2f5\uc744 \uae30\ub2e4\ub9b4 \ub54c, \uc18c\uc2a4 \uc11c\ubc84\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74 \uc0c8\ub85c\uc6b4 \uc18c\uc2a4 \uc11c\ubc84\ub85c \uc2b9\uaca9\ub41c \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc870\ud68c\ud560 \ub54c \uc790\uc2e0\uc774 \uc774\uc804 \uc18c\uc2a4 \uc11c\ubc84\uc5d0\uc11c \uc870\ud68c\ud588\ub358 \ub370\uc774\ud130\ub97c \ubcf4\uc9c0 \ubabb\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \uc774\ucc98\ub7fc \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uac00 \uc2b9\uaca9\ub41c \uc0c1\ud669\uc5d0 \uc18c\uc2a4 \uc11c\ubc84\uc758 \uc7a5\uc560\uac00 \ubcf5\uad6c\ub418\uc5b4 \uc7ac\uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc774\ubbf8 \ucee4\ubc0b\ub41c \uadf8 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub3d9\uc73c\ub85c \ub864\ubc31 \uc2dc\ucf1c\uc57c\ub9cc \ub370\uc774\ud130\uac00 \ub9de\ub294 \uc0c1\ud669\uc774 \uc0dd\uae41\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc800\ud76c-\ud300\uc758-\ubcf5\uc81c-\ub3d9\uae30\ud654-\ubc29\uc2dd"},"\uc800\ud76c \ud300\uc758 \ubcf5\uc81c \ub3d9\uae30\ud654 \ubc29\uc2dd"),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uc7a5\ub2e8\uc810\uc73c\ub85c \uc800\ud76c \ud300\uc740 \ub370\uc774\ud130 \ubb34\uacb0\uc131\uc774 \uc911\uc694\ud558\ub2e4 \ud310\ub2e8\ub418\uc5b4 \ubc18\ub3d9\uae30 \ubcf5\uc81c \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0, After Sync \ubc29\uc2dd\uc744 \uc801\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"\ubcf5\uc81c-\ud1a0\ud3f4\ub9ac\uc9c0"},"\ubcf5\uc81c \ud1a0\ud3f4\ub9ac\uc9c0"),(0,a.kt)("p",null,"\ubcf5\uc81c \ud1a0\ud3f4\ub9ac\uc9c0\ub294 \uc5ec\ub7ec\uac00\uc9c0 \ubc29\uc2dd \uc911 \uc790\uc2e0\uc758 \uc0c1\ud669\uacfc \uac00\uc7a5 \ub9de\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uc800\ud76c \ud300\uc774 \uace0\ub824\ud574\uc57c\ud560 \ubb38\uc81c\ub294 \uba3c\uc800 \uc131\ub2a5\uc744 \uc62c\ub824\uc57c \ud588\uace0, \ub2e8\uc77c \uc7a5\uc560\ud3ec\uc778\ud2b8\ub97c \uac1c\uc120\ud574\uc57c\ud588\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc11c\ubc84\ub294 2\ub300 \ubfd0\uc774\uc600\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc0c1\ud669\uc5d0\uc11c \uc5b4\ub5a4 \ubc29\uc2dd\uc744 \ud0dd\ud560 \uc218 \uc788\uc744\uae4c\uc694?"),(0,a.kt)("h2",{id:"\uc2f1\uae00-\ub808\ud50c\ub9ac\uce74"},"\uc2f1\uae00 \ub808\ud50c\ub9ac\uce74"),(0,a.kt)("mermaid",{value:"graph LR\n  A[Application Server] -- Read + Write --\x3e S[Source]\n  A -- Read --\x3e R[Replica]\n  S--\x3e R"}),(0,a.kt)("p",null,"\uac00\uc7a5 \uae30\ubcf8\uc801\uc774\uba70 \uac00\uc7a5 \ub9ce\uc774 \uc4f0\uc774\ub294 \ud615\ud0dc\uc785\ub2c8\ub2e4. \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc5d0 \uc77d\uae30 \uc694\uccad\uc744 \uc804\ub2ec\ud558\uba74, \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uacbc\uc744 \ub54c, \uc11c\ube44\uc2a4 \uc7a5\uc560 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \uc18c\uc2a4 \uc11c\ubc84\uc5d0\uc11c Read, Write\ub97c \ub458 \ub2e4 \ud558\uace0, \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\ub294 failover\ub97c \uc704\ud574 \ub300\uae30\ud558\ub294 \uc608\ube44\uc6a9 \uc11c\ubc84\ub85c \uad6c\uc131\ud569\ub2c8\ub2e4.\n\uc18c\uc2a4 \uc11c\ubc84\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc18c\uc2a4 \uc11c\ubc84\ub97c \ub300\uccb4\ud558\uac70\ub098 \ub370\uc774\ud130\ub97c \ubc31\uc5c5\ud558\ub294 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uba40\ud2f0-\ub808\ud50c\ub9ac\uce74"},"\uba40\ud2f0 \ub808\ud50c\ub9ac\uce74"),(0,a.kt)("mermaid",{value:"graph LR\n  A[Application Server] -- Read + Write --\x3e S[Source]\n  A -- Read --\x3e R1[Replica1]\n  S --\x3e R1\n  S --\x3e R2[Replica2]"}),(0,a.kt)("p",null,"\uc2f1\uae00 \ub808\ud50c\ub9ac\uce74\uc640 \ube44\uc2b7\ud55c \uad6c\uc131\uc774\uc9c0\ub9cc \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uac00 \ud55c \ub300 \ub354 \ucd94\uac00\ub41c \uad6c\uc131\uc785\ub2c8\ub2e4. \ud574\ub2f9 \ubc29\uc2dd\uc740 SPOF \ubb38\uc81c\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84 \ud558\ub098\ub97c \uc77d\uae30 \uc804\uc6a9 \uc11c\ubc84\ub85c \ub458 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77d\uae30 \uc791\uc5c5\uc744 \ubd84\uc0b0\ud568\uc73c\ub85c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5\uc744 \ud5a5\uc0c1 \uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\uae4c \ub9d0\ud588\ub358 \uc7a5\uc560 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud558\uba74 \uc608\ube44\uc6a9 \uc11c\ubc84\uc778 Replica2 \uc11c\ubc84\ub97c Source \uc11c\ubc84 \ud639\uc740 Replica1(\uc77d\uae30 \uc804\uc6a9) \uc11c\ubc84\ub85c \ub300\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uccb4\uc778-\ubcf5\uc81c"},"\uccb4\uc778 \ubcf5\uc81c"),(0,a.kt)("mermaid",{value:"graph LR\n  A[Application Server] -- Read + Write --\x3e S[Source1]\n  A -- Read --\x3e R1-1[Replica1-1]\n  S --\x3e R1-1\n  S --\x3e R1-2[Replica1-2]\n  S --\x3e R1-3[Replica1-3 / Source2]\n  R1-3 --\x3e R2-1[Replica2-1]\n  R1-3 --\x3e R2-2[Replica2-2]\n  B[Batch Server] --Read--\x3e R2-2\n"}),(0,a.kt)("p",null,"\ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uac00 \ub9ce\uc544\uc838 \uc18c\uc2a4 \uc11c\ubc84\uc758 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\ub97c \uc77d\ub294 \ubd80\ud558\uac00 \ub9ce\uc544\uc9c8 \ub54c \ud560 \uc218 \uc788\ub294 \uad6c\uc131\uc785\ub2c8\ub2e4. \uc880 \uc804\uc5d0 \uc124\uba85\ub4dc\ub838\ub358 \uba40\ud2f0 \ub808\ud50c\ub9ac\uce74 \ubc29\uc2dd\uc5d0\uc11c \ub611\uac19\uc740 \uad6c\uc131\uc744 \ucd94\uac00\ud55c \ubc29\uc2dd\uc73c\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. Source 1 \uc758 \uc815\ubcf4\ub97c \ubcf5\uc81c\ud55c Replica 1-1, 1-2 \uc11c\ubc84\ub294 \ube60\ub974\uac8c \ub370\uc774\ud130\uac00 \ubc18\uc601\ub418\uc9c0\ub9cc, Source1\uc758 \uc774\ubca4\ud2b8\ub97c \ubcf5\uc81c\ud55c Source2\ub97c \ubcf5\uc81c\ud55c Replica 2-1, 2-2 \uc11c\ubc84\ub294 \ub2f9\uc5f0\ud788 \ub2a6\uac8c \ubc18\uc601\ub418\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \uadf8\ub8f9\uc740 \uc608\ube44\uc6a9\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub4c0\uc5bc-\uc18c\uc2a4-\ubcf5\uc81c"},"\ub4c0\uc5bc \uc18c\uc2a4 \ubcf5\uc81c"),(0,a.kt)("mermaid",{value:"graph LR\n  A[Application Server] -- Read + Write --\x3e S1[Source/Replica 1]\n  A -- Read + Write --\x3e S2[Source/Replica 2]\n  S1 <-- Replication --\x3e S2"}),(0,a.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub458 \ub2e4 \uc18c\uc2a4 \uc11c\ubc84\uc774\uba74\uc11c \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uc778 \uacbd\uc6b0\uc785\ub2c8\ub2e4. \uc774 \uacbd\uc6b0\ub294 ",(0,a.kt)("strong",{parentName:"p"},"Active-Active"),"\uad6c\uc131\uacfc ",(0,a.kt)("strong",{parentName:"p"},"Active-Passive")," \uad6c\uc131\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4"),(0,a.kt)("p",null,"Active-Active\ub294 \uc11c\ubc84 \ub458 \ub2e4 \uc77d\uae30\uc640 \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c \ud615\ud0dc\uc785\ub2c8\ub2e4. \uc989 \ubd80\ud558\ub97c \ubd84\uc0b0\uc2dc\ud0a4\uae30 \uc704\ud574 \uc11c\ubc84 \ubaa8\ub450 \uc77d\uace0 \uc4f0\ub294 \uc791\uc5c5\uc744 \ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \ubed4\ud55c \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc11c\ub85c\uc758 \uc774\ubca4\ud2b8\uac00 \ub3d9\uae30\ud654 \ub418\uae30 \uc804\uc5d0\ub294 \uc815\ud569\uc131\uc774 \uae68\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610 \ub3d9\uc2dc\uc5d0 \uac19\uc740 \ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc4f0\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ub54c, \ud558\ub098\uc758 \uc11c\ubc84\uc5d0\uc11c \uc4f0\uae30\uac00 \uc644\ub8cc\ub418\uc5c8\ub354\ub77c\ub3c4, \ub2e4\ub978 \ud558\ub098\uc758 \uc11c\ubc84\uc5d0 \ub2a6\uac8c \ub05d\ub09c \uc4f0\uae30\uac00 \uc788\ub2e4\uba74 \ub9c8\uc9c0\ub9c9 \ud2b8\ub79c\uc7ad\uc158\uc778 \ub2a6\uac8c \ub05d\ub09c \uc4f0\uae30 \uc791\uc5c5\uc774 \ubc18\uc601\ub418\uc5b4 \uc608\uc0c1\ud558\uc9c0 \ubabb\ud55c \uacb0\uacfc\uac00 \ub098\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub610 \ub2e4\ub978 \ubb38\uc81c\ub85c\ub294 Auto Increment\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc785\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\uac00 \ub3d9\uc2dc\uc5d0 \uc0dd\uc131\ub420 \ub54c Auto Increment\uac00 \uc911\ubcf5\ub418\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \ud1a0\ud3f4\ub85c\uc9c0\uc5d0\uc11c\ub294 ID\ub97c DB\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"Active-Passive \ubc29\uc2dd\uc740 \ud558\ub098\uc758 \uc11c\ubc84\ub9cc \uc77d\uae30\uc640 \uc4f0\uae30 \uc694\uccad\uc774 \ub418\uc9c0\ub9cc, \ub098\uba38\uc9c0 \uc11c\ubc84\ub294 \ub300\uae30\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \uc11c\ubc84 \ubaa8\ub450 \uc5b8\uc81c\ub098 \uc4f0\uae30 \uc791\uc5c5\uc774 \uac00\ub2a5\ud55c \ud615\ud0dc\uc774\uae30 \ub54c\ubb38\uc5d0 \uc7a5\uc560 \ubc1c\uc0dd \uc2dc \ube60\ub974\uac8c Faliover\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uba40\ud2f0-\uc18c\uc2a4-\ubcf5\uc81c"},"\uba40\ud2f0 \uc18c\uc2a4 \ubcf5\uc81c"),(0,a.kt)("mermaid",{value:"graph LR\n  A[Application Server] -- Read + Write --\x3e S1[Source 1]\n  A[Application Server] -- Read + Write --\x3e S2[Source 2]\n  A[Application Server] -- Read + Write --\x3e S3[Source 3]\n  A[Application Server] -- Read + Write --\x3e S4[Source 4]\n  S1 --\x3e R[Replica]\n  S2 --\x3e R[Replica]\n  S3 --\x3e R[Replica]\n  S4 --\x3e R[Replica]"}),(0,a.kt)("p",null,"\ud558\ub098\uc758 \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\uac00 \ub2e4\uc218\uc758 \uc18c\uc2a4 \uc11c\ubc84\ub97c \uac16\ub294 \uad6c\uc131\uc785\ub2c8\ub2e4. \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0e4\ub529\uc744 \ud574\ub480\ub294\ub370, \ub2e4\uc2dc \ud558\ub098\uc758 \uc11c\ubc84\ub85c \ud1b5\ud569\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud639\uc740 \uc11c\ub85c \ub2e4\ub978 \ub370\uc774\ud130\ub97c \ud55c \uacf3\uc5d0 \ubc31\uc5c5\uc744 \ud560 \ub54c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc800\ud76c-\ud300\uc758-\ud1a0\ud3f4\ub85c\uc9c0-\ubc29\uc2dd"},"\uc800\ud76c \ud300\uc758 \ud1a0\ud3f4\ub85c\uc9c0 \ubc29\uc2dd"),(0,a.kt)("p",null,"\uadf8\ub7fc \uc774\ub807\uac8c\ub098 \ub9ce\uc740 \uad6c\uc131 \uc911\uc5d0 \uc800\ud76c \ud300\uc5d0\uc11c \ud0dd\ud560 \uc218 \uc788\ub294 \ud1a0\ud3f4\ub85c\uc9c0 \ubc29\uc2dd\uc740 \uc2f1\uae00 \ub808\ud50c\ub9ac\uce74 \ubc29\uc2dd\uacfc \ub4c0\uc5bc \uc18c\uc2a4 \ubcf5\uc81c \ubc29\uc2dd \ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \uc8fc\uc5b4\uc9c4 \uc11c\ubc84\uac00 2\ub300\ubfd0\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ub4c0\uc5bc \uc18c\uc2a4 \ubc29\uc2dd\uc740 \uc801\uc6a9\ud558\ub294\ub370 \ubb34\ub9ac\uac00 \uc788\ub294 \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ub2e8 \uc800\ud76c\uac00 \ub808\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc801\uc6a9\ud558\ub824\ub294 \uac00\uc7a5 \ud070 \uc774\uc720\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc131\ub2a5")," \uc774\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc774 \ubcc0\ud558\uc9c0 \uc54a\ub294 \ub4c0\uc5bc \uc18c\uc2a4\uc758 Active-Passive \ubc29\uc2dd\uc740 \uc81c\uc678\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 Active-Active \ubc29\uc2dd\uc740 \ubd80\ud558\ub97c \ubd84\uc0b0\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc9c0\ub9cc, \ub2e8\uc810\uc73c\ub85c\ub294 Auto Increment\ub97c \uc0ac\uc6a9\ud558\ub294\ub370\uc5d0 \uc704\ud5d8\uc774 \uc788\ub2e4\ub294 \uc810\uacfc, \ub370\uc774\ud130\uc758 \uc815\ud569\uc131 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c \ub4c0\uc5bc \uc18c\uc2a4 \ubc29\uc2dd\uc740 \uc81c\uc678\ud558\ub3c4\ub85d \ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7fc \uc2f1\uae00 \ub808\ud50c\ub9ac\uce74 \ubc29\uc2dd\uc744 \uc801\uc6a9\ud560 \uc218 \ubc16\uc5d0 \uc5c6\ub294\ub370\uc694. \uc2f1\uae00 \ub808\ud50c\ub9ac\uce74\uc758 \ubc29\uc2dd\uc740 \uac00\uc6a9\uc131 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \ubc29\uc2dd\uc774\uc9c0\ub9cc, \uac00\uc6a9\uc131\ubcf4\ub2e4 \uc131\ub2a5\uc744 \ub354 \uc2e0\uacbd\uc368\uc57c\ud558\ub294 \uc0c1\ud669\uc5d0\uc11c\ub294 \uc2f1\uae00 \ub808\ud50c\ub9ac\uce74 \ud1a0\ud3f4\ub85c\uc9c0\ub97c \uad6c\uc131\ud558\uc9c0\ub9cc \ub808\ud50c\ub9ac\uce74 \uc11c\ubc84\ub97c \uc608\ube44\uc6a9\uc774 \uc544\ub2cc \uc77d\uae30 \uc804\uc6a9 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uace0, \uac00\uc6a9\uc131 \ubd80\ubd84\uc744 \ud3ec\uae30\ud558\uae30\ub85c \uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h1",{id:"\ucf54\ub4dc\uc5d0-\uc801\uc6a9\ud558\uae30"},"\ucf54\ub4dc\uc5d0 \uc801\uc6a9\ud558\uae30"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kwon37xi/replication-datasource"},"replication-datasource")," Github \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucc38\uace0\ud558\uc2dc\uac70\ub098, ",(0,a.kt)("a",{parentName:"p",href:"https://greeng00se.github.io/db-replication"},"DB \ubcf5\uc81c, @Transactional\uc5d0 \ub530\ub77c \uc694\uccad \ubd84\ub9ac\ud574\ubcf4\uae30")," \uae00\uc744 \ucc38\uace0\ud558\uc5ec \ub530\ub77c\ud558\uba74 \uae08\ubc29\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"),(0,a.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub808\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uac01\ubcf4\ub2e4 \uc5b4\ub835\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc7ac\ubc0c\uc2b5\ub2c8\ub2e4. \uc778\ud504\ub77c\ub3c4 \uc7ac\ubc0c\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("p",null,"real mysql \ucc45"))}s.isMDXComponent=!0}}]);