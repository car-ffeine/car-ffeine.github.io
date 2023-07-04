"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[4171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),s=a,m=k["".concat(o,".").concat(s)]||k[s]||d[s]||r;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={slug:6,title:"[DB] \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c DB\uc5d0 \ub123\ub294 \uacfc\uc815\uc744 \ucd5c\uc801\ud654\ud574\ubcf4\uc790",authors:["nunu","boxster"],tags:["DB","JPA","Hibernate","Spring"]},i=void 0,p={permalink:"/6",source:"@site/blog/2023-07-05-nunu-db-optimization.mdx",title:"[DB] \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c DB\uc5d0 \ub123\ub294 \uacfc\uc815\uc744 \ucd5c\uc801\ud654\ud574\ubcf4\uc790",description:"\uc548\ub155\ud558\uc138\uc694 \uce74\ud398\uc778\ud300 \ub204\ub204\uc785\ub2c8\ub2e4",date:"2023-07-05T00:00:00.000Z",formattedDate:"July 5, 2023",tags:[{label:"DB",permalink:"/tags/db"},{label:"JPA",permalink:"/tags/jpa"},{label:"Hibernate",permalink:"/tags/hibernate"},{label:"Spring",permalink:"/tags/spring"}],readingTime:8.16,hasTruncateMarker:!1,authors:[{name:"\ub204\ub204",title:"Backend",url:"https://github.com/be-student",imageURL:"https://github.com/be-student.png",key:"nunu"},{name:"\ubc15\uc2a4\ud130",title:"Backend",url:"https://github.com/drunkenhw",imageURL:"https://github.com/drunkenhw.png",key:"boxster"}],frontMatter:{slug:"6",title:"[DB] \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c DB\uc5d0 \ub123\ub294 \uacfc\uc815\uc744 \ucd5c\uc801\ud654\ud574\ubcf4\uc790",authors:["nunu","boxster"],tags:["DB","JPA","Hibernate","Spring"]},nextItem:{title:"pr \ubcf8\ubb38\uc5d0 \uc774\uc288 \ubc88\ud638\ub97c \ub2ec\uc544\uc8fc\ub294 \uae30\ub2a5\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4",permalink:"/5"}},o={authorsImageUrls:[void 0,void 0]},u=[{value:"\uc774\ubc88 \ucd5c\uc801\ud654\uc758 \ubaa9\ud45c",id:"\uc774\ubc88-\ucd5c\uc801\ud654\uc758-\ubaa9\ud45c",level:2},{value:"\ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \uc0bd\uc785\ud558\ub294 \uacfc\uc815",id:"\ub300\ub7c9\uc758-\ub370\uc774\ud130\ub97c-\uc0bd\uc785\ud558\ub294-\uacfc\uc815",level:2},{value:"\ucd5c\uc801\ud654 \uc804\uc740 \uc5b4\ub5a4 \uc0c1\ud669\uc774\uc5c8\ub294\ub370?",id:"\ucd5c\uc801\ud654-\uc804\uc740-\uc5b4\ub5a4-\uc0c1\ud669\uc774\uc5c8\ub294\ub370",level:2},{value:"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810",id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810",level:3},{value:"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?",id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c",level:3},{value:"\uc804\uccb4\ub97c \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc740 \ubc84\uc804",id:"\uc804\uccb4\ub97c-\ud55c-\ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c-\ubb36\uc740-\ubc84\uc804",level:2},{value:"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810",id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-1",level:3},{value:"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?",id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-1",level:3},{value:"1\ub9cc \uac1c\uac00 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc778 \ubc84\uc804",id:"1\ub9cc-\uac1c\uac00-\ud55c-\ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c-\ubb36\uc778-\ubc84\uc804",level:2},{value:"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810",id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-2",level:3},{value:"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?",id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-2",level:3},{value:"1\ub9cc \uac1c\uac00 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc774\uace0, id\ub97c \ubbf8\ub9ac \uc0dd\uc131\ud55c \ubc84\uc804",id:"1\ub9cc-\uac1c\uac00-\ud55c-\ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c-\ubb36\uc774\uace0-id\ub97c-\ubbf8\ub9ac-\uc0dd\uc131\ud55c-\ubc84\uc804",level:2},{value:"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810",id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-3",level:3},{value:"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?",id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-3",level:3},{value:"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uace0, \uc5ec\ub7ec \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc84\uc804",id:"\uc5ec\ub7ec-\uc2a4\ub808\ub4dc\uc5d0\uc11c-\ub3d9\uc791\ud558\uace0-\uc5ec\ub7ec-\ucee4\ub125\uc158\uc744-\uc0ac\uc6a9\ud558\ub294-\ubc84\uc804",level:2},{value:"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810",id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-4",level:3},{value:"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?",id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-4",level:3},{value:"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uace0, \uc5ec\ub7ec \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc84\uc804 2",id:"\uc5ec\ub7ec-\uc2a4\ub808\ub4dc\uc5d0\uc11c-\ub3d9\uc791\ud558\uace0-\uc5ec\ub7ec-\ucee4\ub125\uc158\uc744-\uc0ac\uc6a9\ud558\ub294-\ubc84\uc804-2",level:2},{value:"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810",id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-5",level:3}],c={toc:u},k="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694 \uce74\ud398\uc778\ud300 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub204\ub204"),"\uc785\ub2c8\ub2e4"),(0,a.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c DB\uc5d0 \ub123\ub294 \uacfc\uc815\uc744 \ucd5c\uc801\ud654\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc54c\uac8c \ub41c \ub0b4\uc6a9\uc744 \uacf5\uc720\ud558\ub824\uace0 \ud569\ub2c8\ub2e4"),(0,a.kt)("h2",{id:"\uc774\ubc88-\ucd5c\uc801\ud654\uc758-\ubaa9\ud45c"},"\uc774\ubc88 \ucd5c\uc801\ud654\uc758 \ubaa9\ud45c"),(0,a.kt)("p",null,"\uc804\uae30\ucc28 \ucda9\uc804\uc18c\uc5d0 \ub300\ud55c \uacf5\uacf5 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0, \uadf8 \ub370\uc774\ud130\ub97c DB \uc5d0 \ub123\ub294 \uacfc\uc815\uc744 \ucd5c\uc801\ud654\ud574\ubcf4\uc790"),(0,a.kt)("h2",{id:"\ub300\ub7c9\uc758-\ub370\uc774\ud130\ub97c-\uc0bd\uc785\ud558\ub294-\uacfc\uc815"},"\ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \uc0bd\uc785\ud558\ub294 \uacfc\uc815"),(0,a.kt)("p",null,"\uc800\ud76c \ud300\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \uac04\ub2e8\ud558\uac8c \uc815\ub9ac\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \uacf5\uacf5 \ub370\uc774\ud130\uc5d0\uc11c \uc804\uae30\ucc28 \ucda9\uc804\uc18c\uc640 \uc804\uae30\ucc28 \ucda9\uc804\uae30\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \uac00\uc838\uc628\ub2e4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ucda9\uc804\uc18c\ub294 6\ub9cc \uac1c, \ucda9\uc804\uae30\ub294 23\ub9cc \uac1c\uc758 \ub370\uc774\ud130\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud55c \ubc88\uc5d0 \uac00\uc838\uc62c \uc218 \uc788\ub294 \uc591\uc740 9999\uac1c \uae4c\uc9c0\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},"\uc774 \ub370\uc774\ud130\ub97c DB\uc5d0 \ub123\ub294\ub2e4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub294 1:N \uad00\uacc4\uc774\ub2e4")))),(0,a.kt)("h2",{id:"\ucd5c\uc801\ud654-\uc804\uc740-\uc5b4\ub5a4-\uc0c1\ud669\uc774\uc5c8\ub294\ub370"},"\ucd5c\uc801\ud654 \uc804\uc740 \uc5b4\ub5a4 \uc0c1\ud669\uc774\uc5c8\ub294\ub370?"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://veiled-starfish-4c7.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffb934c88-4589-4096-90bc-36b4bc88f6a2%2FUntitled.png?id=f7f7c2af-7b95-42e8-8d95-ddd952e53005&table=block&spaceId=9db11c89-12d2-4910-8822-5ffecbdb8ccd&width=2000&userId=&cache=v2",alt:"before_optimize"})),(0,a.kt)("p",null,"\uc704 \uc0ac\uc9c4\uc744 \uc798 \ubcf4\uc2dc\uba74 \uc544\uc2e4 \uc218 \uc788\uc73c\uc2dc\uaca0\uc9c0\ub9cc, 2000\uac1c\ub97c \uc800\uc7a5\ud558\ub294\ub370, 231.762 \ucd08\uac00 \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubb3c\ub860 \ucd9c\ub825\uc744 \uc704\ud55c \uc2dc\uac04\ub3c4 \ud3ec\ud568\ub418\uc5c8\uae30\uc5d0, 230\ucd08 \uc815\ub3c4\ub77c\uace0 \uc0dd\uac01\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4"),(0,a.kt)("p",null,"1\ub9cc \uac1c\ub77c\uba74? 231.762\ucd08 ","*"," 5 = 1,158.81\ucd08"),(0,a.kt)("p",null,"23\ub9cc \uac1c\ub77c\uba74? 1158.81 ","*"," 23 = 26,652.63\ucd08"),(0,a.kt)("p",null,"\uc2dc\uac04\uc73c\ub85c \ubc14\uafd4\ubcf4\uba74 7.4 \uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,a.kt)("h3",{id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810"},"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c\ub9c8\ub2e4, \uc0c8\ub85c\uc6b4 Transaction \uc774 \uc0dd\uc131\ub41c\ub2e4.")),(0,a.kt)("h3",{id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c"},"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("p",null,"\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c\ub9c8\ub2e4, \uc0c8\ub85c\uc6b4 Transaction \uc774 \uc0dd\uc131\ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574, \uc804\uccb4\ub97c \ud558\ub098\uc758 \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\ub294\ub2e4"),(0,a.kt)("h2",{id:"\uc804\uccb4\ub97c-\ud55c-\ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c-\ubb36\uc740-\ubc84\uc804"},"\uc804\uccb4\ub97c \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc740 \ubc84\uc804"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://veiled-starfish-4c7.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9ff34622-4a26-4acd-980c-ae175c83143d%2FUntitled.png?id=979aa2c5-e972-4c52-a44a-1669c497c84e&table=block&spaceId=9db11c89-12d2-4910-8822-5ffecbdb8ccd&width=2000&userId=&cache=v2",alt:"all_in_transaction"})),(0,a.kt)("p",null,"\uc774 \uacfc\uc815\uc5d0\uc11c 2000\uac1c\ub97c \uc800\uc7a5\ud558\ub294\ub370 65\ucd08 \uac00 \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"1\ub9cc \uac1c\ub77c\uba74? 65\ucd08 ","*"," 5 = 325\ucd08"),(0,a.kt)("p",null,"23\ub9cc \uac1c\ub77c\uba74? 325\ucd08 ","*"," 23 = 7,475\ucd08"),(0,a.kt)("p",null,"\uc2dc\uac04\uc73c\ub85c \ubc14\uafd4\ubcf4\uba74 2\uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,a.kt)("p",null,"\uc804\uccb4\uc801\uc73c\ub85c 3\ubc30 \uc815\ub3c4 \ube68\ub77c\uc84c\uc2b5\ub2c8\ub2e4"),(0,a.kt)("h3",{id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-1"},"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"23\ub9cc \uac1c\uc758 \uc800\uc7a5\uc774 \ubaa8\ub450 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc774 \ub418\uc5b4\uc11c, \ud558\ub098\uac00 \uc2e4\ud328\ud558\uba74 23\ub9cc\uac1c\ub97c \uc0c8\ub85c \uc800\uc7a5\ud574\uc57c \ud558\ub294 \uc0c1\ud669\uc5d0 \ucc98\ud55c\ub2e4")),(0,a.kt)("h3",{id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-1"},"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("p",null,"23\ub9cc\uac1c\uc758 \uc800\uc7a5\uc774 \ubaa8\ub450 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc774 \ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574, 1\ub9cc \uac1c\uc529 \uc601\uc18d\ud654\uc2dc\ud0a8\ub2e4"),(0,a.kt)("h2",{id:"1\ub9cc-\uac1c\uac00-\ud55c-\ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c-\ubb36\uc778-\ubc84\uc804"},"1\ub9cc \uac1c\uac00 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc778 \ubc84\uc804"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://blog.kakaocdn.net/dn/c2mgfd/btsmrWCfnKy/9Y6Dv8vYzcftsket61tub1/img.png",alt:"separateTransaction"})),(0,a.kt)("p",null,"\uc131\ub2a5\uc0c1\uc73c\ub85c \uac1c\uc120\ud55c \ubd80\ubd84\uc740 \uadf8\ub807\uac8c \ud06c\uc9c0 \uc54a\uc9c0\ub9cc, \uc2e4\ud328\ud588\uc744 \ub54c, 1\ub9cc \uac1c\ub9cc \ub2e4\uc2dc \uc800\uc7a5\ud558\uba74 \ub418\uae30\uc5d0, \ud6e8\uc52c \ube60\ub974\uac8c \ubcf5\uad6c\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c PageNo\ub77c\ub294 \ud074\ub798\uc2a4\ub294, i\ub97c \ubc14\ub85c \ucc38\uc870\ud588\uc744 \uacbd\uc6b0, effectively final\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc5c6\uc5b4\uc11c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc131\ub2a5\uc740 \uc804\uccb4\ub97c \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc740 \ubc84\uc804\uacfc \ud070 \ucc28\uc774\uac00 \ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-2"},"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"id \uc0dd\uc131 \uc804\ub7b5\uc774 ",(0,a.kt)("inlineCode",{parentName:"li"},"GenerationType.IDENTITY")," \uc774\uae30\uc5d0, \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c\ub9c8\ub2e4, DB\uc5d0\uc11c id\ub97c \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4.")),(0,a.kt)("p",null,"JPA\uc5d0 \uc788\ub294 \uc4f0\uae30 \uc9c0\uc5f0\uc744 \uc804\ud600 \ud65c\uc6a9\ud560 \uc218 \uc5c6\uace0, DB\uc5d0\uc11c id\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574, DB\uc640 \ub9e4\ubc88 \ud1b5\uc2e0\uc744 \ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("h3",{id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-2"},"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("p",null,"id\ub97c \ubbf8\ub9ac \uc0dd\uc131\ud574\uc11c, DB \uc5d0\uc11c id \ub97c \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc744 \uc0dd\ub7b5\ud55c\ub2e4"),(0,a.kt)("p",null,"ID \uc0dd\uc131 \uc804\ub7b5\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"GenerationType.Table\uc758")," \ud615\ud0dc\ub85c \ubc14\uafd4\uc11c, DB\uc5d0\uc11c id\ub97c \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc744 \uc904\uc5ec\uc11c, \uc131\ub2a5\uc744 \uac1c\uc120\ud55c\ub2e4"),(0,a.kt)("h2",{id:"1\ub9cc-\uac1c\uac00-\ud55c-\ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c-\ubb36\uc774\uace0-id\ub97c-\ubbf8\ub9ac-\uc0dd\uc131\ud55c-\ubc84\uc804"},"1\ub9cc \uac1c\uac00 \ud55c \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ubb36\uc774\uace0, id\ub97c \ubbf8\ub9ac \uc0dd\uc131\ud55c \ubc84\uc804"),(0,a.kt)("p",null,"\uc774\ub54c batch size\ub97c 1000 \ub2e8\uc704\ub85c \uc124\uc815\ud574\uc11c 1000\uac1c\uc529 id \uac00 \ub298\uc5b4\ub098\ub3c4\ub85d \uc124\uc815\ud588\ub2e4"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://blog.kakaocdn.net/dn/bFjNWb/btsmuoLmzVh/GddHebu2V43fpk2t3IUmz0/img.png",alt:"charger_generator"}),(0,a.kt)("img",{parentName:"p",src:"https://blog.kakaocdn.net/dn/pae8w/btsmrANjAGi/gjUhD6sMvBLpmsPl9c1tAk/img.png",alt:"station_generator"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.jdbc.template.fetch-size=10000\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://blog.kakaocdn.net/dn/mtBFp/btsmtEt48jp/3mFOfrIBWbjJhHHuyP4zPk/img.png",alt:"10000batch_size"})),(0,a.kt)("p",null,"1\uc790\ub9ac \uc22b\uc790\ub294 \uc55e\uc5d0\uc11c\ubd80\ud130 n(\ub9cc\uac1c)\ub97c \uc758\ubbf8\ud558\uace0, 2\ubc88\uc9f8 \uc22b\uc790\ub294 1\ub9cc \uac1c\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uac78\ub9b0 \uc2dc\uac04(ms)\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucc98\uc74c 1\ub9cc \uac1c\ub294 142\ucd08\uac00 \uac78\ub9ac\uace0, 2\ub9cc \uac1c\ub294 285\ucd08\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"23\ub9cc \uac1c\ub77c\uba74? 142 ","*"," 26 = 3,266\ucd08"),(0,a.kt)("p",null,"\ucc98\uc74c\uacfc \ube44\uad50\ud558\uc790\uba74 7.4\uc2dc\uac04\uc774 \uac78\ub9ac\ub294 \uac83\uc5d0\uc11c 54\ubd84 \uc815\ub3c4 \uac78\ub9ac\ub294 \uac83\uc73c\ub85c \uac1c\uc120\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-3"},"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("p",null,"\ud558\ub098\uc758 \uc2a4\ub808\ub4dc\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\uae30\uc5d0, \uc131\ub2a5\uc774 \uac1c\uc120\ub418\uc5c8\uc9c0\ub9cc, \uc5ec\uc804\ud788 \ub290\ub9bd\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\ub098\uc758 \uc2a4\ub808\ub4dc\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\uae30\uc5d0, \ud558\ub098\uc758 \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-3"},"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("p",null,"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uac8c \ud558\uace0, \uc5ec\ub7ec \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5ec\ub7ec-\uc2a4\ub808\ub4dc\uc5d0\uc11c-\ub3d9\uc791\ud558\uace0-\uc5ec\ub7ec-\ucee4\ub125\uc158\uc744-\uc0ac\uc6a9\ud558\ub294-\ubc84\uc804"},"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uace0, \uc5ec\ub7ec \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc84\uc804"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://blog.kakaocdn.net/dn/bPV2aa/btsmrSfU2D4/phDwk77XiKvwiXa5geX0PK/img.png",alt:"multi_thread"})),(0,a.kt)("p",null,"\uc774 \ubc84\uc804\uc5d0\uc11c 89991 \uac1c\ub97c \uc800\uc7a5\ud558\ub294\ub370 \ucd1d 157\ucd08\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"23\ub9cc \uac1c\ub77c\uba74? 157 ","*"," 3 = 471\ucd08"),(0,a.kt)("p",null,"\uc2dc\uac04\uc73c\ub85c \ubc14\uafd4\ubcf4\uba74 5\ubd84\ub3c4 \ucc44 \uac78\ub9ac\uc9c0 \uc54a\ub294 \uc2dc\uac04\uc774\uc8e0"),(0,a.kt)("h3",{id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-4"},"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("p",null,"hikari connection pool \uc0ac\uc774\uc988\ub97c 10\uc73c\ub85c \uc124\uc815\ud588\ub294\ub370, 10\uac1c\uc758 \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c \uc800\uc7a5\uc744 \ud558\ub2e4 \ubcf4\ub2c8, 10\uac1c\uc758 \ucee4\ub125\uc158\uc744 \ubaa8\ub450 \uc0ac\uc6a9\ud558\uace0 \ub098\uc11c, 11\ubc88\uc9f8\ubd80\ud130\ub294 \ucee4\ub125\uc158\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574, \uae30\ub2e4\ub824\uc57c \ud558\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc5b4\ub5bb\uac8c-\uac1c\uc120\ud560-\uc218-\uc788\uc744\uae4c-4"},"\uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("p",null,"hikari connection pool \uc0ac\uc774\uc988\ub97c 25\ub85c \uc124\uc815\ud574\uc11c, 25\uac1c\uc758 \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.datasource.hikari.maximum-pool-size=25\n")),(0,a.kt)("h2",{id:"\uc5ec\ub7ec-\uc2a4\ub808\ub4dc\uc5d0\uc11c-\ub3d9\uc791\ud558\uace0-\uc5ec\ub7ec-\ucee4\ub125\uc158\uc744-\uc0ac\uc6a9\ud558\ub294-\ubc84\uc804-2"},"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uace0, \uc5ec\ub7ec \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc84\uc804 2"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://blog.kakaocdn.net/dn/vJEoD/btsmsfau8Mv/j0CT8fVrAp3LKGRMmyMVeK/img.png",alt:"multi_thread2"})),(0,a.kt)("p",null,"\ucd1d 13\ub9cc \uac1c\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294\ub370, 147\ucd08\uac00 \uac78\ub9ac\uace0, db \uc778\uc2a4\ud134\uc2a4\uc758 cpu \uc0ac\uc6a9\ub960\uc774 100%\uc5d0 \uac00\uae4c\uc6cc\uc838\uc11c ec2 \uac00 \ub2e4\uc6b4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc774-\uacfc\uc815\uc5d0\uc11c-\ubcfc-\uc218-\uc788\ub294-\ubb38\uc81c\uc810-5"},"\uc774 \uacfc\uc815\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ubb38\uc81c\uc810"),(0,a.kt)("p",null,"db\uc758 cpu \uc0ac\uc6a9\ub7c9\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\uace0, 23\ub9cc \uac1c\uac00 \uc870\uae08 \ub118\ub294 \ub370\uc774\ud130\ub97c 25\uac1c\uc758 \ucee4\ub125\uc158\uc744 \ud65c\uc6a9\ud574 \uc800\uc7a5\ud558\ub824\uace0 \ud588\uc2b5\ub2c8\ub2e4"),(0,a.kt)("h1",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c\ub9c8\ub2e4, transaction\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc790"),(0,a.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c\ub9c8\ub2e4, id\ub97c \uc0dd\uc131\ud558\uc9c0 \ub9d0\uc790"),(0,a.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uace0, \uc5ec\ub7ec \ucee4\ub125\uc158\uc744 \uc0ac\uc6a9\ud558\uc790"),(0,a.kt)("li",{parentName:"ol"},"db\uc758 cpu \uc0ac\uc6a9\ub7c9\uc744 \uace0\ub824\ud558\uc790")),(0,a.kt)("p",null,"\uae34 \uae00 \uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4"))}d.isMDXComponent=!0}}]);