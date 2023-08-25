"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[1567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},73151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={slug:19,title:"OAuth 2.0\uc758 \ud750\ub984\uacfc \uc124\uc815 \ud574\ubcf4\uae30",authors:["boxster"],tags:["oauth","login"]},i=void 0,l={permalink:"/19",source:"@site/blog/2023-07-23-oauth.mdx",title:"OAuth 2.0\uc758 \ud750\ub984\uacfc \uc124\uc815 \ud574\ubcf4\uae30",description:"OAuth 2.0 ?",date:"2023-07-23T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 23\uc77c",tags:[{label:"oauth",permalink:"/tags/oauth"},{label:"login",permalink:"/tags/login"}],readingTime:12.57,hasTruncateMarker:!1,authors:[{name:"\ubc15\uc2a4\ud130",title:"Backend",url:"https://github.com/drunkenhw",imageURL:"https://github.com/drunkenhw.png",key:"boxster"}],frontMatter:{slug:"19",title:"OAuth 2.0\uc758 \ud750\ub984\uacfc \uc124\uc815 \ud574\ubcf4\uae30",authors:["boxster"],tags:["oauth","login"]},prevItem:{title:"\uce74\ud398\uc778 \ud300\uc758 \uc0c1\ud0dc\uad00\ub9ac \uc804\ub7b5 (\uc65c Tanstack Query\uc5ec\uc57c \ud558\ub294\uac00?)",permalink:"/21"},nextItem:{title:"private \uc11c\ube0c\ub137\uc5d0 \uc778\uc2a4\ud134\uc2a4\ub97c \uc678\ubd80\uc640 \uc5f0\uacb0\ud560 \ub54c, public ip? private ip?",permalink:"/18"}},p={authorsImageUrls:[void 0]},u=[{value:"OAuth 2.0 ?",id:"oauth-20-",level:2},{value:"OAuth flow",id:"oauth-flow",level:3},{value:"Resource Owner",id:"resource-owner",level:4},{value:"Client",id:"client",level:4},{value:"Authorization Server",id:"authorization-server",level:4},{value:"Resource Server",id:"resource-server",level:4},{value:"\ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 flow",id:"\ubc31\uc5d4\ub4dc\uc640-\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-flow",level:3},{value:"OAuth \uad6c\ud604\ud574\ubcf4\uae30",id:"oauth-\uad6c\ud604\ud574\ubcf4\uae30",level:2},{value:"Reference",id:"reference",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"oauth-20-"},"OAuth 2.0 ?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'OAuth("Open Authorization")\ub294 \uc778\ud130\ub137 \uc0ac\uc6a9\uc790\ub4e4\uc774 \ube44\ubc00\ubc88\ud638\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uace0 \ub2e4\ub978 \uc6f9\uc0ac\uc774\ud2b8 \uc0c1\uc758 \uc790\uc2e0\ub4e4\uc758 \uc815\ubcf4\uc5d0 \ub300\ud574 \uc6f9\uc0ac\uc774\ud2b8\ub098 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc811\uadfc \uad8c\ud55c\uc744 \ubd80\uc5ec\ud560 \uc218 \uc788\ub294 \uacf5\ud1b5\uc801\uc778 \uc218\ub2e8')),(0,o.kt)("p",null,"\uc704\ud0a4 \ubc31\uacfc\uc5d0\uc11c\ub294 \uc704\uc640 \uac19\uc774 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 google\uacfc \uac19\uc740 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 \ud68c\uc6d0\uac00\uc785\uc744 \ud558\uace0 \uc800\uc7a5\ud574\ub454 \uc774\ub984, \uc774\uba54\uc77c, \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \uac19\uc740 \uc815\ubcf4\ub97c\n\uad73\uc774 \ud55c\ubc88 \ub354 \uc785\ub825\ud558\uc9c0 \uc54a\uace0\ub3c4 \ub2e4\ub978 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac83 \uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub2e4\ub978 \uc6f9 \uc0ac\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 google\uc5d0\uc11c \ub85c\uadf8\uc778\uc744 \ud558\ub294 \uacfc\uc815\uc744 \uac70\uce58\uae30 \ub54c\ubb38\uc5d0, \uc0ac\uc6a9\uc790\ub294\n\ube44\ubc00\ubc88\ud638\ub098, critical\ud55c \uac1c\uc778\uc815\ubcf4 \uac19\uc740 \uac83\uc744 \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc2dc \ud55c\ubc88 \uc815\ub9ac\ud558\uc790\uba74 \uc6b0\ub9ac \uc6f9 \uc0ac\uc774\ud2b8\uc758 \uc0ac\uc6a9\uc790\uac00 \uc774\uc6a9\ud558\ub294 \ub2e4\ub978 \uc6f9 \uc0ac\uc774\ud2b8\uc758 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ub054 \ub2e4\ub978 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0\uc11c \uad8c\ud55c\uc744 \uc704\uc784 \ubc1b\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"oauth-flow"},"OAuth flow"),(0,o.kt)("p",null,"OAuth Flow\ub97c \uc124\uba85\ud558\uae30 \uc804\uc5d0 \uc5ec\uae30\uc11c \ubaa8\ub974\ub294 \ub2e8\uc5b4\ub4e4\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.\n\ud574\ub2f9 ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-16#section-1.1"},"\ub9c1\ud06c"),"\uc5d0\uc11c \ub354 \uc790\uc138\ud558\uac8c \uc815\ub9ac \ub418\uc5b4\uc788\uc9c0\ub9cc \uc124\uba85\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h4",{id:"resource-owner"},"Resource Owner"),(0,o.kt)("p",null,"Resource Owner\ub294 \ub9d0 \uadf8\ub300\ub85c \ub9ac\uc18c\uc2a4 \uc18c\uc720\uc790\uc774\uace0, \uad6c\uae00\uacfc \uac19\uc740 \ud50c\ub7ab\ud3fc\uc5d0 \ud68c\uc6d0\uac00\uc785\uc774 \ub418\uc5b4\uc788\ub294, \uc989 \uad6c\uae00\uc5d0 \uc790\uc2e0\uc758 \uc815\ubcf4\ub4e4\uc774 \uc788\ub294 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4."),(0,o.kt)("h4",{id:"client"},"Client"),(0,o.kt)("p",null,"Client\ub3c4 \ub9d0 \uadf8\ub300\ub85c \uace0\uac1d\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc5b4\ub5a4 \uad00\uc810\uc5d0\uc11c \ubcf4\ub290\ub0d0 \uace0\uac1d\uc774\ub780 \ub73b\uc740 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 Google\uacfc \uac19\uc740 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc81c\uacf5\ubc1b\uc740 \ub9ac\uc18c\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uace0\uac1d\uc785\ub2c8\ub2e4.\n\uc989 \uc6b0\ub9ac\uc758 \uc11c\ube44\uc2a4\uac00 Client\uac00 \ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \uc65c\ub0d0\uba74 \uc6b0\ub9ac\ub294 \uad6c\uae00\uc5d0 \uc815\ubcf4\ub97c \uc694\uccad\ud558\uace0 \uc6b0\ub9ac\uc758 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("h4",{id:"authorization-server"},"Authorization Server"),(0,o.kt)("p",null,"\uc5ec\uae30\ub3c4 \ub9d0 \uadf8\ub300\ub85c \uc778\uc99d \uc11c\ubc84\uc785\ub2c8\ub2e4. Resource Owner\uac00 \uc62c\ubc14\ub978 \uc815\ubcf4\ub97c \uc785\ub825\ud588\ub294\uc9c0 \uac80\uc99d\ud558\uace0, \ubc1c\uae09 \ubc1b\uc740 Code\uc640 Token\uc774 \uc62c\ubc14\ub978 \uac83\uc778\uc9c0 \uac80\uc99d\ud569\ub2c8\ub2e4."),(0,o.kt)("h4",{id:"resource-server"},"Resource Server"),(0,o.kt)("p",null,"Resource Owner\uc758 \uc815\ubcf4\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \uc11c\ubc84\uc785\ub2c8\ub2e4. \uc778\uc99d \uc11c\ubc84\uc5d0\uc11c \uc778\uc99d\uc744 \ub9c8\uce58\uace0 \ub09c \ub4a4 \uc6b0\ub9ac\ub294 Resource\ub97c \ubc1b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uc5ec\uae30\uc11c Authorization Server \uc640 Resource Server\uac00 \ub098\ub258\uc5b4\uc9c4 \uc774\uc720\ub294 \ub531\ud788 \uc5c6\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"\ud574\ub2f9 \ud50c\ub7ab\ud3fc\uc758 \uc11c\ubc84 \uad6c\uc131\uc5d0 \ub530\ub77c \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\uc911\uc694\ud55c \uac83\uc740 ",(0,o.kt)("strong",{parentName:"p"},"Authorization Server"),"\uc640 ",(0,o.kt)("strong",{parentName:"p"},"Resource Server"),"\uac00 \uac19\uc740 \ubb36\uc74c\uc774\ub77c\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,o.kt)("mermaid",{value:"sequenceDiagram\n    actor  RO as Resource Owner (\ubc15\uc2a4\ud130)\n    participant C as Client (\uce74\ud398\uc778)\n    participant AS as Authorization Server (\uad6c\uae00)\n    participant RS as Resource Server (\uad6c\uae00)\n\n    RO->>+C: 1. \ub85c\uadf8\uc778 \uc694\uccad\n    C--\x3e>-AS: 2. \ub85c\uadf8\uc778 \uc694\uccad\n    AS ->>+ RO: 3. \ub85c\uadf8\uc778 \ud398\uc774\uc9c0 \uc81c\uacf5\n    RO ->>+ AS: 4. ID/PW \uc785\ub825\n    AS ->> RO: 5. Authorization Code \ubc1c\uae09\n    RO ->> C: 6. Redirect URI\ub85c \uc774\ub3d9\n    C ->>+ AS: 7. \ubc1c\uae09 \ubc1b\uc740 Authorization Code\ub85c Token \uc694\uccad\n    AS ->> C: 8. Access Token \ubc1c\uae09\n    C ->> RO: 9. \ub85c\uadf8\uc778 \uc131\uacf5\n    RO ->> C: 10. \uc11c\ube44\uc2a4 \uc694\uccad\n    C ->> RS: 11. \ubc1c\uae09 \ubc1b\uc740 Token\uc73c\ub85c \uc815\ubcf4 \ud638\ucd9c\n    RS ->> C: 12. \uc815\ubcf4 \uc81c\uacf5"}),(0,o.kt)("p",null,"\uac04\ub2e8\ud558\uac8c flow\ub97c \ub3c4\uc2dd\ud654 \ud588\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uba3c\uc800 Resource Owner\ub294 \ub85c\uadf8\uc778\uc744 \ud558\uace0 \uc2f6\ub2e4\uba74 Client\uac00 \uc81c\uacf5\ud558\ub294 \ud574\ub2f9 Resource platform\uc758 URI\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc778\uc99d\uc11c\ubc84\uc5d0\uc11c \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub97c \uc81c\uacf5 \ubc1b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uadf8\ub9ac\uace0 Resource Owner\ub294 ID/PW\ub97c \uc785\ub825\ud558\uace0 Authorization Code\ub97c \ubc1c\uae09 \ubc1b\uc2b5\ub2c8\ub2e4. \ub3d9\uc2dc\uc5d0 Client\uc5d0\uc11c \ub4f1\ub85d\ud574\ub193\uc740 Redirect URI\ub85c code\uc640 \ud568\uaed8 \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"Client\ub294 Resource Owner\uc5d0\uac8c \ubc1b\uc740 Code\ub97c \uac00\uc9c0\uace0 Authorization Server\uc5d0 \ud1a0\ud070\uc744 \uc694\uccad\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ubc1b\uc740 \ud1a0\ud070\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\uadf8\ub9ac\uace0 Client\ub294 \ub85c\uadf8\uc778\uc744 \uc131\uacf5\ud558\uace0 \uc774\ud6c4 \ub2e4\ub978 platform\uc5d0\uc11c \uc815\ubcf4\ub97c \ud544\uc694\ud558\uac8c \ub41c\ub2e4\uba74 \uc800\uc7a5\ud55c Access Token\uc744 \ud1b5\ud574 Resource Server\uc5d0\uc11c \uc815\ubcf4\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\uadfc\ub370 \uc5ec\uae30\uc11c \uc774\uc0c1\ud55c \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc0c1\ud558\ub2e4\uae30\ubcf4\ub2e8 \uc65c \uc774\ub807\uac8c \ubcf5\uc7a1\ud55c\uac00 \ub77c\ub294 \uc758\ubb38\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uad73\uc774 Authorization code\ub97c \ubc1b\uc544 \ub2e4\uc2dc \ud55c\ubc88 \ub354 Access Token\uc744 \ubc1b\uc544\uc57c \ud55c\ub2e4\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4. \ubc14\ub85c ",(0,o.kt)("strong",{parentName:"p"},"Client\uc5d0\uac8c Access Token\uc744 \uc900\ub2e4\uba74 \ud1b5\uc2e0\uc774 \ud55c\ubc88 \uc904\uc5b4\ub4e4 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c??")),(0,o.kt)("p",null,"\ubcf4\uc548\ubb38\uc81c \ub54c\ubb38\uc785\ub2c8\ub2e4.\n\ub9cc\uc57d \ubc14\ub85c Access Token\uc744 \uc900\ub2e4\uba74 \uadf8 Access Token\uc774 \ud0c8\ucde8 \ub2f9\ud558\uba74 \ud574\ub2f9 Resource Owner\uc758 \ubaa8\ub4e0 \uc815\ubcf4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.\nCode\ub294 Secret Key\uc640 \uac19\uc774 \uc804\ub2ec\ud574\uc57c Access Token\uc744 \ubc1c\uae09 \ubc1b\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud0c8\ucde8\ub418\uc5b4\ub3c4 \ub354 \uc548\uc804\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ub2e4\ub978 \ud50c\ub7ab\ud3fc\uc5d0\uc11c Code\ub098 Token\uc774\ub098 \ud574\ub2f9 \uc815\ubcf4\ub97c \uc804\ub2ec\ud560 \ubc29\ubc95\uc740 URI\uc5d0 \uc804\ub2ec\ud558\ub294 \ubc29\ubc95\ubfd0 \uc785\ub2c8\ub2e4.\n\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 Redircet URI\uc5d0 Access Token\uc744 \ub2f4\ub294\ub2e4\uba74 \ud0c8\ucde8 \uac00\ub2a5\uc131\uc774 \ucee4\uc9c0\uae30 \ub54c\ubb38\uc5d0 \ubcf4\uc548\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ubc31\uc5d4\ub4dc\uc640-\ud504\ub860\ud2b8\uc5d4\ub4dc\uc758-flow"},"\ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc758 flow"),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor  RO as Resource Owner\n    participant F as Frontend\n    participant B as Backend\n    participant AS as Authorization Server\n    participant RS as Resource Server\n\n    RO->>+F: 1. \ub85c\uadf8\uc778 \uc694\uccad\n    F--\x3e>-B: 2. \ub85c\uadf8\uc778 \uc694\uccad\n    B->>+F: 3. \ud574\ub2f9 \ud50c\ub7ab\ud3fc \ub85c\uadf8\uc778 URI \uc81c\uacf5\n    F--\x3e>-RO: 4. \ud574\ub2f9 \ud50c\ub7ab\ud3fc \ub85c\uadf8\uc778 URI \uc81c\uacf5\n    AS ->>+ RO: 5. \ub85c\uadf8\uc778 \ud398\uc774\uc9c0 \uc81c\uacf5\n    RO ->>+ AS: 6. ID/PW \uc785\ub825\n    AS ->> RO: 7. Authorization Code \ubc1c\uae09\n    RO ->> F: 8. Redirect URI\ub85c \uc774\ub3d9 (w. Authorization Code)\n    F ->>+ B: 9. \ubc1c\uae09 \ubc1b\uc740 Authorization Code \uc804\ub2ec\n    B ->>+ AS: 10. \uc804\ub2ec \ubc1b\uc740 Authorization Code\ub85c Token \uc694\uccad\n    AS ->> B: 11. Access Token \ubc1c\uae09\n    B ->>+ F: 12. \ub85c\uadf8\uc778 \uc131\uacf5\n    F --\x3e>- RO: 13. \ub85c\uadf8\uc778 \uc131\uacf5\n    RO ->>+ F: 14. \uc11c\ube44\uc2a4 \uc694\uccad\n    F --\x3e>- B: 15. \uc11c\ube44\uc2a4 \uc694\uccad\n    B ->> RS: 16. \ubc1c\uae09 \ubc1b\uc740 Token\uc73c\ub85c \uc815\ubcf4 \ud638\ucd9c\n    RS ->> B: 17. \uc815\ubcf4 \uc81c\uacf5\n"}),(0,o.kt)("p",null,"\uc544\uae4c Client \ubd80\ubd84\uc744 \uc880 \ub354 Frontend, Backend\ub85c \uad6c\ubd84\uc9c0\uc5b4 \uc138\ubd84\ud654 \ud574\ubd24\uc2b5\ub2c8\ub2e4. \ubcf5\uc7a1\ud574\ubcf4\uc774\uc9c0\ub9cc, \uc804\ud600 \uc5b4\ub835\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc544\uae4c \uc124\uba85\ud588\ub358 \ud750\ub984\uacfc \ub2e4\ub978 \ubd80\ubd84\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub610 \uc5ec\uae30\uc11c\ub294 \uad73\uc774 \uc81c\uac00 Authorization Server\uc5d0\uc11c Code\ub97c \ubc1b\uc544\uc62c \ub54c Redirect URI\ub97c \ubc31\uc5d4\ub4dc \uc11c\ubc84\ub85c \ud558\uc9c0\uc54a\uace0 \ud504\ub860\ud2b8\uc5d4\ub4dc \uc11c\ubc84\ub85c \ud558\ub824\ub294 \uc774\uc720\ub294 Resource Owner\uac00 \ub2e4\ub978 platform\uacfc \uc778\uc99d\ud558\ub294 \ubd80\ubd84\uc740 \ubc31\uc5d4\ub4dc\uc758 \uc5ed\ud560\uc774 \uc544\ub2c8\ub77c\uace0 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \ubc31\uc5d4\ub4dc\ub294 Resource Owner\uac00 \uac00\uc838\uc628 code\ub97c \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \uc804\ub2ec \ubc1b\uc544 Resource Server\uc5d0 \uc815\ubcf4\ub97c \uc694\uccad\ud558\ub294 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(\ubb3c\ub860 \uc81c \uac1c\uc778\uc801\uc778 \uc758\uacac\uc774\ub77c \uc815\ub2f5\uc740 \uc544\ub2d9\ub2c8\ub2e4.)"))),(0,o.kt)("h2",{id:"oauth-\uad6c\ud604\ud574\ubcf4\uae30"},"OAuth \uad6c\ud604\ud574\ubcf4\uae30"),(0,o.kt)("p",null,"\uac04\ub2e8\ud788 Spring Security \uc5c6\uc774 OAuth \uc778\uc99d\uc744 \uad6c\ud604\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc81c\uc77c \uba3c\uc800 \uad6c\uae00 \ud639\uc740 \ub2e4\ub978 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc124\uc815\ud55c id, secret key \ub4f1\ub4f1\uc758 \uc815\ubcf4\ub97c yml\uc5d0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application-oauth.yml"',title:'"application-oauth.yml"'},"oauth2:\n  provider:\n    google:\n      id: google-id\n      secret: google-secret-key\n      redirect-url: http://localhost:8080/login/oauth2/code/google\n      token-url: https://www.googleapis.com/oauth2/v4/token\n      info-url: https://www.googleapis.com/oauth2/v2/userinfo\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 OAuth\ub294 \uc5b4\ub290 \ud50c\ub7ab\ud3fc\uc774 \ub420 \uc9c0 \ubaa8\ub974\uace0, \ud655\uc7a5\uc131 \uc788\uac8c \uad6c\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc744 \uac83 \uac19\uc544 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="OAuthMember.java"',title:'"OAuthMember.java"'},"public interface OAuthMember {\n    String id();\n    String email();\n    String nickname();\n    String imageUrl();\n}\n")),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \ud074\ub798\uc2a4\ub4e4\uc744 \uad00\ub9ac\ud558\uae30 \uc27d\uac8c Enum\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Provider.java"',title:'"Provider.java"'},'public enum Provider {\n\n    GOOGLE("google", GoogleMember::new),\n    ;\n\n    private final String providerName;\n    private final Function<Map<String, Object>, OAuthMember> function;\n\n    Provider(String providerName, Function<Map<String, Object>, OAuthMember> function) {\n        this.providerName = providerName;\n        this.function = function;\n    }\n\n    public static Provider from(String name) {\n        return Arrays.stream(values())\n                .filter(it -> it.providerName.equals(name))\n                .findFirst()\n                .orElseThrow(() -> new RuntimeExceptin());\n    }\n\n    public OAuthMember getOAuthProvider(Map<String, Object> body) {\n        return function.apply(body);\n    }\n}\n')),(0,o.kt)("p",null,"\ud574\ub2f9 Enum\uc740 \ub450\uac1c\uc758 \ud544\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud558\ub098\ub294 \ud574\ub2f9 \ud50c\ub7ab\ud3fc\uc758 \uc774\ub984, \uadf8\ub9ac\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, Object>"),"\ub97c \uc544\uae4c \ub9cc\ub4e4\uc5c8\ub358 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ubc18\ud658\ud558\ub294 Function \uc5ec\uae30\uc11c\n",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, Object>"),"\ub85c \uc9c0\uc815\ud574\uc900 \uc774\uc720\ub294, \ud50c\ub7ab\ud3fc\ub9c8\ub2e4 \ubc18\ud658\ub418\ub294 JSON \ud0c0\uc785\uc774 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uadf8\ub7f0 \ubd80\ubd84\uc5d0 \ub300\ud574 \uc911\ubcf5\uc744 \uc81c\uac70\ud558\uae30 \uc704\ud574 \uc774\ub7ec\ud55c \ud615\ud0dc\ub85c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \uc544\uae4c yml\uc5d0 \uc791\uc131\ud588\ub358 \uc815\ubcf4\ub4e4\uc744 \uac00\uc838\uc640\uc57c\ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"@Value")," \uc5b4\ub178\ud14c\uc774\uc158\uc73c\ub85c\ub3c4 \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        @Value("oauth.provider.google.id")\n        private String id;\n        @Value("oauth.provider.google.secret")\n        private String secret;\n\n        ...\n')),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\ub807\uac8c \uacc4\uc18d binding\uc744 \ud574\uc918\uc57c\ud55c\ub2e4\ub294 \uc810\uc774 \uc544\uc8fc \uadc0\ucc2e\uace0 \ubcf4\uae30\ub3c4 \uc548\uc88b\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'annotationProcessor "org.springframework.boot:spring-boot-configuration-processor"\n')),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704\uc758 \uc758\uc874\uc131\uc744 \ucd94\uac00\ud574\uc900\ub2e4\uba74 \uc544\uc8fc \ud3b8\ud558\uac8c property\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="OAuthProviderProperties.java"',title:'"OAuthProviderProperties.java"'},'@Component\n@ConfigurationProperties(prefix = "oauth2")\npublic class OAuthProviderProperties {\n    // prefix oauth2 \uae30\uc900\uc73c\ub85c \uc54c\uc544\uc11c google\uc774 \uc774\ub984\uc778 Provider Enum\uc744 \ucc3e\uc544\uc11c Key\ub85c \ubc14\uc778\ub529\n    private final Map<Provider, OAuthProviderProperty> provider = new EnumMap<>(Provider.class);\n\n    public OAuthProviderProperty getProviderProperties(Provider provider) {\n        return this.provider.get(provider);\n    }\n\n    @Getter\n    @Setter\n    public static class OAuthProviderProperty {\n        // \uadf8\ub9ac\uace0 provider \ud558\uc704 \uc815\ubcf4\ub4e4\uc740 \uc544\ub798\uc758 \ud544\ub4dc\uc5d0 \ubc14\uc778\ub529\n        private String id;\n        private String secret;\n        private String redirectUrl;\n        private String tokenUrl;\n        private String infoUrl;\n    }\n}\n')),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ub418\uba74 \uad6c\uc870\uc801\uc778 \uc900\ube44\ub294 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uc81c\ub294 \ud574\ub2f9 \ud50c\ub7ab\ud3fc\uc5d0 \uc815\ubcf4\ub97c \uc694\uccad\ud558\ub294 \uc791\uc5c5\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4.\n\uadf8\ub7fc \uc544\uae4c \ub9d0\uc500\ub4dc\ub838\ub358 \uc21c\uc11c\ub85c \uc694\uccad\uc744 \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="RestTemplateOAuthRequester.java"',title:'"RestTemplateOAuthRequester.java"'},"public class RestTemplateOAuthRequester implements OAuthRequester {\n\n    @Override\n    public OAuthMember login(OAuthLoginRequest request) {\n        // frontend\uc5d0\uc11c \ubc1b\uc544\uc628 \ub85c\uadf8\uc778 platform\n        Provider provider = Provider.from(request.provider());\n        // \ud574\ub2f9 Platform\uc5d0 \ub9de\ub294 \uc815\ubcf4 \ucc3e\uc74c\n        OAuthProviderProperty property = oAuthProviderProperties.getProviderProperties(provider);\n        // frontend\uc5d0\uc11c \ubc1b\uc544\uc628 code\uc640 \ub4f1\ub85d\ud574\ub193\uc740 property\ub85c Access Token \uc694\uccad\n        OAuthTokenResponse token = requestAccessToken(property, requet.getCode());\n        // \ubc1b\uc544\uc628 Token\uc73c\ub85c \ud574\ub2f9 Resource Owner\uc758 \uc815\ubcf4 \uc694\uccad\n        Map<String, Object> userAttributes = getUserAttributes(property, token);\n        return provider.getOAuthProvider(userAttributes);\n    }\n\n    private OAuthTokenResponse requestAccessToken(OAuthProviderProperty property, String code) {\n        HttpHeaders headers = new HttpHeaders();\n        headers.setBasicAuth(property.getId(), property.getSecret());\n        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n\n        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(headers);\n        URI tokenUri = getTokenUri(property, code);\n        return restTemplate.postForEntity(tokenUri, request, OAuthTokenResponse.class).getBody();\n    }\n\n    private URI getTokenUri(OAuthProviderProperty property, String code) {\n        return UriComponentsBuilder.fromUriString(property.getTokenUrl())\n                .queryParam(CODE, URLDecoder.decode(code, StandardCharsets.UTF_8))\n                .queryParam(GRANT_TYPE, AUTHORIZATION_CODE)\n                .queryParam(REDIRECT_URI, property.getRedirectUrl())\n                .build()\n                .toUri();\n    }\n\n    private Map<String, Object> getUserAttributes(OAuthProviderProperty property, OAuthTokenResponse tokenResponse) {\n        HttpHeaders headers = new HttpHeaders();\n        headers.setBearerAuth(tokenResponse.accessToken());\n        headers.setContentType(MediaType.APPLICATION_JSON);\n        URI uri = URI.create(property.getInfoUrl());\n        RequestEntity<?> requestEntity = new RequestEntity<>(headers, HttpMethod.GET, uri);\n        ResponseEntity<Map<String, Object>> responseEntity = restTemplate.exchange(requestEntity, new ParameterizedTypeReference<>() {\n        });\n        return responseEntity.getBody();\n    }\n}\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c\ub9cc \ud55c\ub2e4\uba74 \uadf8 \uc5b4\ub824\uc6cc \ubcf4\uc774\ub358 OAuth \uc778\uc99d\ub3c4 \uac04\ub2e8\ud558\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(\ubb3c\ub860 \uc81c \ucf54\ub4dc\uac00 \uc815\ub2f5\uc774 \uc544\ub2d9\ub2c8\ub2e4)"))),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-16"},"https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-16")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2?hl=ko"},"https://developers.google.com/identity/protocols/oauth2?hl=ko")))}d.isMDXComponent=!0}}]);