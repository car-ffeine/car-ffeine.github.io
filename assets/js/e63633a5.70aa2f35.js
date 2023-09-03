"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[3907],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,l(l({ref:e},c),{},{components:n})):a.createElement(m,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94180:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:31,title:"\uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",authors:["boxster"],tags:["mysql"]},l=void 0,o={permalink:"/31",source:"@site/blog/2023-09-03-improved-query-performance.mdx",title:"\uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",description:"\uc548\ub155\ud558\uc138\uc694 \ubc15\uc2a4\ud130\uc785\ub2c8\ub2e4",date:"2023-09-03T00:00:00.000Z",formattedDate:"2023\ub144 9\uc6d4 3\uc77c",tags:[{label:"mysql",permalink:"/tags/mysql"}],readingTime:13.275,hasTruncateMarker:!1,authors:[{name:"\ubc15\uc2a4\ud130",title:"Backend",url:"https://github.com/drunkenhw",imageURL:"https://github.com/drunkenhw.png",key:"boxster"}],frontMatter:{slug:"31",title:"\uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",authors:["boxster"],tags:["mysql"]},nextItem:{title:"\uce74\ud398\uc778 \ud300\uc758 \ud611\uc5c5 \uc77c\ud654",permalink:"/30"}},s={authorsImageUrls:[void 0]},p=[{value:"\uc774 \uae00\uc744 \uc4f0\ub294 \uc774\uc720",id:"\uc774-\uae00\uc744-\uc4f0\ub294-\uc774\uc720",level:2},{value:"\uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30",id:"\uc870\ud68c-\uc131\ub2a5-\uac1c\uc120\ud558\uae30",level:2},{value:"DTO \uc774\uc6a9\ud558\uae30",id:"dto-\uc774\uc6a9\ud558\uae30",level:3},{value:"\uc2e4\ud589 \uacc4\ud68d \ud655\uc778\ud558\uae30",id:"\uc2e4\ud589-\uacc4\ud68d-\ud655\uc778\ud558\uae30",level:3},{value:"Type",id:"type",level:3},{value:"Extra",id:"extra",level:3},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],c={toc:p},u="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694 \ubc15\uc2a4\ud130\uc785\ub2c8\ub2e4"),(0,r.kt)("h2",{id:"\uc774-\uae00\uc744-\uc4f0\ub294-\uc774\uc720"},"\uc774 \uae00\uc744 \uc4f0\ub294 \uc774\uc720"),(0,r.kt)("p",null,"\uba3c\uc800 \uc774 \uae00\uc744 \uc4f0\uac8c \ub41c \uacc4\uae30\ub97c \ub9d0\uc500\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \uce74\ud398\uc778 \ud300 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uc0ac\uc6a9\uc790\uac00 \ubcf4\uace0\uc788\ub294 \uc9c0\ub3c4\uc5d0 \ucda9\uc804\uc18c\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uc870\ud68c \uae30\ub2a5\uc774 \uac00\uc7a5 \uc911\uc694\ud558\uace0, \uc81c\uc77c \uc694\uccad\uc774 \ub9ce\uc774 \ub4e4\uc5b4\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \uc870\ud68c \uc131\ub2a5\uc774 \uc88b\uc9c0 \uc54a\uc740 \uae4c\ub2ed\uc778\uc9c0 \uc5ec\ub7ec \uc0ac\uc6a9\uc790\uac00 \uc811\uc18d\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc2e4\ud589\ub418\uace0 \uc788\ub294 \uc11c\ubc84\uc758 cpu \uc0ac\uc6a9\ub960\uc774 100%\uac00 \ub418\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/drunkenhw/drunkenhw.github.io/assets/106640954/2330435f-17b4-4d38-b16b-c72fd7017969",alt:"cpu"})),(0,r.kt)("h2",{id:"\uc870\ud68c-\uc131\ub2a5-\uac1c\uc120\ud558\uae30"},"\uc870\ud68c \uc131\ub2a5 \uac1c\uc120\ud558\uae30"),(0,r.kt)("p",null,"\uba3c\uc800 \uc81c\uac00 \uac1c\uc120\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud588\ub358 \ubc29\ubc95\ub4e4\uc5d0 \ub300\ud574 \uc801\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"dto-\uc774\uc6a9\ud558\uae30"},"DTO \uc774\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"\ud604\uc7ac \uad6c\uc870\ub294 \uc544\ub798\uc758 JPA\ub97c \uc774\uc6a9\ud574 \uc544\ub798\uc640 \uac19\uc740 \ucffc\ub9ac\ub85c entity\ub85c \ub370\uc774\ud130\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," select distinct station.station_id,\n                 charger.charger_id,\n                 charger.station_id,\n                 chargerStatus.charger_id,\n                 chargerStatus.station_id,\n                 station.created_at,\n                 station.updated_at,\n                 station.address,\n                 station.company_name,\n                 station.contact,\n                 station.detail_location,\n                 station.is_parking_free,\n                 station.is_private,\n                 station.latitude,\n                 station.longitude,\n                 station.operating_time,\n                 station.private_reason,\n                 station.station_name,\n                 station.station_state,\n                 charger.created_at,\n                 charger.updated_at,\n                 charger.capacity,\n                 charger.method,\n                 charger.price,\n                 charger.type,\n                 charger.station_id,\n                 charger.charger_id,\n                 chargerStatus.created_at,\n                 chargerStatus.updated_at,\n                 chargerStatus.charger_condition,\n                 chargerStatus.latest_update_time\n from charge_station station\n        inner join\n      charger charger on station.station_id = charger.station_id\n        inner join\n      charger_status chargerStatus on charger.charger_id = chargerStatus.charger_id\n        and charger.station_id = chargerStatus.station_id\n where station.latitude >= 37.5019194727953082567\n   and station.latitude <= 37.5092305272047217433\n   and station.longitude >= 127.044542269049714936\n   and station.longitude <= 127.058071330950285064\n\n")),(0,r.kt)("p",null,"JPA\ub97c \ud1b5\ud574 \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \uc870\ud68c\ud55c\ub2e4\uba74 \uc544\uc8fc \ud3b8\ud558\uac8c \uac12\uc744 \uac00\uc838\uc624\uace0, fetch join\uc744 \ud1b5\ud574 \ud558\uc704\uc758 entity\ub4e4\uc758 \uc815\ubcf4\ub3c4 \uae54\ub054\ud558\uac8c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac00\uc838\uc628 \uac12\uc73c\ub85c \ud544\uc694\ud55c \uc815\ubcf4\ub4e4\uc744 \ub9e4\ud551\ud558\uace0 \uac00\uacf5\ud558\uc5ec \uc751\ub2f5\uc744 \ub0b4\ub824\uc92c\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \uc870\ud68c\ub9cc\uc744 \uc704\ud574 JPA\uc758 entity\ub97c \uc870\ud68c\ud55c\ub2e4\ub294 \uac83\uc740 \uc5ec\ub7ec \ub2e8\uc810\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc81c\uc77c \uba3c\uc800 \uc751\ub2f5\uc744 \ub0b4\ub824\uc904 \ub54c \ubd88\ud544\uc694\ud55c \ub370\uc774\ud130\uae4c\uc9c0 \ubaa8\ub450 \uc870\ud68c\ub97c \ud55c\ub2e4\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4.\n\uc774\ub807\uac8c \ub9ce\uc740 \ud544\ub4dc\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc751\ub2f5\uc5d0\uc11c\ub294 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \ubaa8\ub4e0 \uc815\ubcf4\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ubaa8\ub4e0 \uc815\ubcf4\ub97c \ub2e4 \ubcf4\ub0b4\uc8fc\ub294 \uac83\ub3c4 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud560 \ub54c\uc758 \uc131\ub2a5\uc774 \uc544\uc8fc \ub098\ube60\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub798\uc11c \ud544\uc694\ud55c \uce7c\ub7fc\ub9cc \uc870\ud68c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \ub610 \ub2e4\ub978 \ub2e8\uc810\uc73c\ub85c\ub294 JPA\ub85c entity\ub97c \uc870\ud68c\ud560 \ub54c Hibernate \uce90\uc2dc\uc5d0 \uc800\uc7a5\ud55c\ub2e4\ub358\uac00, One To One \uc5d0\uc11c N+1 \ucffc\ub9ac\uac00 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc801\uc778 \uc774\uc288\uac00 \uc5ec\ub7ec\uac00\uc9c0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub798\uc11c \uc870\ud68c\ub9cc \ud558\ub294 api\ub77c\uba74 DTO Projection\uc73c\ub85c \ud558\ub294 \uac83\uc774 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uc544\ub798\uc640 \uac19\uc774 \ubcc0\uacbd\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s.station_id,\n       s.station_name,\n       s.latitude,\n       s.longitude,\n       s.is_parking_free,\n       s.is_private,\n       sum(case\n               when cs.charger_condition = 'STANDBY' then 1\n               else 0\n           end),\n       sum(case\n               when c.capacity >= 50 then 1\n               else 0\n           end)\nFROM charge_station s\n         inner join charger c on (c.station_id = s.station_id)\n         inner join charger_status cs on (c.charger_id = cs.charger_id and c.station_id = cs.station_id)\nwhere s.station_id in (?, ?)\ngroup by s.station_id;\n")),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ud544\uc694\ud55c \uce7c\ub7fc\ub9cc \uc870\ud68c\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ubcc0\uacbd\ud558\uc5ec, \uc120\ub989\uc5ed \uadfc\ucc98\ub97c \uc870\ud68c\ud558\ub294 \uae30\uc900\uc73c\ub85c \uc57d 450ms -> 350ms\ub85c \uac1c\uc120\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \uc544\uc9c1\ub3c4 \ub108\ubb34 \ub290\ub9b0 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc2e4\ud589 \uacc4\ud68d\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc2e4\ud589-\uacc4\ud68d-\ud655\uc778\ud558\uae30"},"\uc2e4\ud589 \uacc4\ud68d \ud655\uc778\ud558\uae30"),(0,r.kt)("p",null,"sql\uc758 \uc2e4\ud589 \uacc4\ud68d\uc740 \uc544\uc8fc \uc911\uc694\ud558\uace0 \uc131\ub2a5\uc744 \uac1c\uc120\ud560 \ub54c \uc544\uc8fc \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2e4\ud589 \uacc4\ud68d\uc5d0\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc815\ubcf4\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ID"),": \uc2e4\ud589 \uacc4\ud68d \ub0b4\uc5d0\uc11c \uac01 \uc791\uc5c5 \ub610\ub294 \ub2e8\uacc4\ub97c \uc2dd\ubcc4\ud558\ub294 \uc77c\ub828\ubc88\ud638\uc785\ub2c8\ub2e4. \uc2e4\ud589 \uacc4\ud68d\uc740 \uc5ec\ub7ec \ub2e8\uacc4\ub85c \ub098\ub258\uba70, ID\ub97c \ud1b5\ud574 \uc774\ub7ec\ud55c \ub2e8\uacc4\ub97c \uc2dd\ubcc4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Select Type"),": \ucffc\ub9ac\uc758 \uac01 \ub2e8\uacc4(\uc608: SIMPLE, PRIMARY, SUBQUERY)\uc5d0 \ub300\ud55c \uc2e4\ud589 \uc720\ud615\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774\ub294 MySQL\uc774 \ub370\uc774\ud130\ub97c \uc120\ud0dd\ud558\uace0 \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Table"),": \uc2e4\ud589 \uacc4\ud68d\uc5d0 \ud3ec\ud568\ub41c \ud14c\uc774\ube14\uc758 \uc774\ub984 \ub610\ub294 \ubcc4\uce6d\uc785\ub2c8\ub2e4. \uc5b4\ub5a4 \ud14c\uc774\ube14\uc774 \uc0ac\uc6a9\ub418\ub294\uc9c0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": \ud14c\uc774\ube14 \uc811\uadfc \ubc29\uc2dd\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \uac12\uc740 \uc778\ub371\uc2a4 \uc2a4\uce94, \ud480 \ud14c\uc774\ube14 \uc2a4\uce94 \ub4f1\uacfc \uac19\uc740 \uac12\uc77c \uc218 \uc788\uc73c\uba70, \uc131\ub2a5\uc5d0 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Possible Keys"),": \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc778\ub371\uc2a4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. MySQL\uc774 \uc5b4\ub5a4 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc54c\ub824\uc90d\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key"),": \uc2e4\uc81c\ub85c \uc120\ud0dd\ub41c \uc778\ub371\uc2a4\uc785\ub2c8\ub2e4. \uc774 \uac12\uc740 \uac00\ub2a5\ud55c \uc778\ub371\uc2a4 \uc911\uc5d0\uc11c \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ub418\ub294 \uc778\ub371\uc2a4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Len"),": \uc0ac\uc6a9\ub41c \uc778\ub371\uc2a4\uc758 \uae38\uc774\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ref"),": \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud14c\uc774\ube14 \uac04\uc758 \uc5f0\uacb0\uc744 \ub098\ud0c0\ub0b4\ub294 \uc5f4\uc785\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rows"),": \uac01 \ub2e8\uacc4\uc5d0\uc11c \uc608\uc0c1\ub418\ub294 \ud589\uc758 \uc218\uc785\ub2c8\ub2e4. \uc774 \uac12\uc740 \uc131\ub2a5 \ud3c9\uac00\uc5d0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extra"),": \uae30\ud0c0 \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \uce7c\ub7fc\uc5d0\ub294 \ucd94\uac00 \uc815\ubcf4 \ubc0f \ud78c\ud2b8\uac00 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("p",null,"\uc774\ub807\uac8c \uc5ec\ub7ec \uce7c\ub7fc\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \uc911 \uc131\ub2a5\uc5d0 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uce7c\ub7fc \ub450 \uac00\uc9c0\ub9cc \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"const")," : \ucffc\ub9ac\uc5d0 Primary key \ud639\uc740 unique key \uce7c\ub7fc\uc744 \uc774\uc6a9\ud558\ub294 where \uc870\uac74\uc808\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \ubc18\ub4dc\uc2dc \ud558\ub098\uc758 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4. (\uc635\ud2f0\ub9c8\uc774\uc800\uac00 \ud574\ub2f9 \ubd80\ubd84\uc740 \uc0c1\uc218\ub85c \ucc98\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 const\ub77c\uace0 \ud55c\ub2e4.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"eq_ref")," : \uc870\uc778\uc5d0\uc11c Primary key \ud639\uc740 unique key \uce7c\ub7fc\uc744 \uc774\uc6a9\ud558\ub294 where \uc870\uac74\uc808\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \ubc18\ub4dc\uc2dc \ud558\ub098\uc758 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4. (const\uc640 \ub2e4\ub978 \uc810\uc740 eq_ref\ub294 \uc870\uc778\uc5d0\uc11c \uc0ac\uc6a9\ub41c\ub2e4\ub294 \uc810\uc774\ub2e4.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"ref")," : eq_ref\uc640 \ub2e4\ub974\uac8c join\uc758 \uc21c\uc11c\uc640 \uad00\uacc4\uc5c6\uc774 \uc0ac\uc6a9\ub41c\ub2e4. \uadf8\ub9ac\uace0 primary key, unique key\ub3c4 \uad00\uacc4\uc5c6\ub2e4. \uadf8\ub0e5 \uc778\ub371\uc2a4\uc758 \uc885\ub958\uc640 \uad00\uacc4\uc5c6\uc774 ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," \uc870\uac74\uc73c\ub85c \uac80\uc0c9\ud560 \ub54c \uc0ac\uc6a9\ub41c\ub2e4"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"fulltext"),':  mysql \uc804\ubb38 \uac80\uc0c9 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud574\uc11c \ub808\ucf54\ub4dc\uc5d0 \uc811\uadfc\ud558\ub294 \ubc29\ubc95, \uc804\ubb38 \uac80\uc0c9\ud560 \uceec\ub7fc\uc5d0 \uc778\ub371\uc2a4\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4. "MATCH ... AGAINST ..." \uad6c\ubb38\uc744 \uc0ac\uc6a9\ud574\uc11c \uc2e4\ud589\ub41c\ub2e4'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"range"),": \uc778\ub371\uc2a4\ub97c \uc774\uc6a9\ud574\uc11c \uac80\uc0c9\ud558\ub294\ub370, \uac80\uc0c9 \uc870\uac74\uc774 ",(0,r.kt)("inlineCode",{parentName:"li"},">, >=, <, <=, BETWEEN, IN()")," \ub4f1\uc758 \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc774\ub2e4. \ubcf4\ud1b5\uc758 \uc778\ub371\uc2a4 \uc2a4\uce94\uc774\ub77c\uace0 \ud558\uba74 range, const, ref\ub97c \uce6d\ud55c\ub2e4"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"index"),": \uc778\ub371\uc2a4 \ud480 \uc2a4\uce94\uc774\ub2e4. \uc778\ub371\uc2a4\ub97c \uc774\uc6a9\ud574\uc11c \ud14c\uc774\ube14\uc758 \ubaa8\ub4e0 \ub808\ucf54\ub4dc\ub97c \uc77d\ub294\ub2e4. \uc778\ub371\uc2a4\ub97c \uc774\uc6a9\ud574\uc11c \ud14c\uc774\ube14\uc744 \uc77d\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 all\ubcf4\ub2e4\ub294 \ube60\ub974\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"all"),": \ud14c\uc774\ube14 \ud480 \uc2a4\uce94\uc774\ub2e4. \ud14c\uc774\ube14\uc758 \ubaa8\ub4e0 \ub808\ucf54\ub4dc\ub97c \uc77d\ub294\ub2e4. \uac00\uc7a5 \ub290\ub9b0 \ubc29\ubc95\uc774\ub2e4.")),(0,r.kt)("p",null,"\uc2e4\ud589 \uacc4\ud68d\uc5d0\uc11c \uc790\uc8fc \ubcf4\uc774\ub294 type\ub4e4\ub9cc ",(0,r.kt)("strong",{parentName:"p"},"\uc131\ub2a5\uc774 \uc88b\uc740 \uc21c"),"\uc73c\ub85c \uc815\ub9ac\ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"extra"},"Extra"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"using filesort"),": \uc815\ub82c\uc744 \uc704\ud574 \ubcc4\ub3c4\uc758 \ud30c\uc77c \uc815\ub82c\uc744 \uc218\ud589\ud55c\ub2e4. \uc774\ub294 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc815\ub82c\uc744 \uc218\ud589\ud55c\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4. \uc774\ub294 \uc131\ub2a5\uc5d0 \uc88b\uc9c0 \uc54a\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"using index"),": \uc778\ub371\uc2a4\ub9cc\uc73c\ub85c \ucffc\ub9ac\ub97c \ucc98\ub9ac\ud55c\ub2e4. \uc774\ub294 \uc778\ub371\uc2a4\ub9cc\uc73c\ub85c \ucffc\ub9ac\ub97c \ucc98\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc774 \uc88b\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"using join")," buffer: join\uc774 \ub418\ub294 \uce7c\ub7fc\uc740 \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud55c\ub2e4. \ud558\uc9c0\ub9cc driven table\uc5d0 \uc801\uc808\ud55c \uc778\ub371\uc2a4\uac00 \uc5c6\ub2e4\uba74 driving table\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ub808\ucf54\ub4dc\ub97c \uc77d\uc5b4\uc11c join\uc744 \uc218\ud589\ud55c\ub2e4. \uadf8\ub798\uc11c \uc774\uac78 \ubcf4\uc644\ud558\uae30 \uc704\ud574 driving table\uc5d0 \uc77d\uc740 \ub808\ucf54\ub4dc\ub97c \uc784\uc2dc \uacf5\uac04\uc5d0 \uc800\uc7a5\ud558\ub294\ub370 \uadf8 \uacf3\uc774 join buffer\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"using temporary"),": \ucffc\ub9ac\ub97c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc784\uc2dc \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud55c\ub2e4. \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud558\ub294 group by \ucffc\ub9ac\uac00 \ub300\ud45c\uc801\uc778 \uc608\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"using where"),":  mysql \uc5d4\uc9c4\uc774 \ubcc4\ub3c4\uc758 \uac00\uacf5, \ud544\ud130\ub9c1 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud55c \uacbd\uc6b0\uc77c \ub54c\ub9cc \ub098\ud0c0\ub09c\ub2e4. \ubc94\uc704 \uc870\uac74\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc5d4\uc9c4\uc5d0\uc11c \ucc98\ub9ac\ub418\uc5b4 \ub808\ucf54\ub4dc\ub97c \ub9ac\ud134\ud574\uc8fc\uc9c0\ub9cc, \uccb4\ud06c \uc870\uac74\uc740 mysql \uc5d4\uc9c4\uc5d0\uc11c \ucc98\ub9ac\ub41c\ub2e4.")),(0,r.kt)("p",null,"type\ubfd0\ub9cc \uc544\ub2c8\ub77c extra\ub3c4 \ucffc\ub9ac\uc758 \ubb38\uc81c\ub97c \ud30c\uc545\ud558\ub294\ub370 \uc544\uc8fc \ud070 \ub3c4\uc6c0\uc744 \uc90d\ub2c8\ub2e4. \uadf8 \uc911 \uc790\uc8fc \ubcf4\uc774\ub294 \uac83\ub4e4\uc5d0 \ub300\ud574\uc11c\ub9cc \uc815\ub9ac\ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7fc \uc544\uae4c \uc0dd\uc131\ud55c \ucffc\ub9ac\uc758 \uc2e4\ud589 \uacc4\ud68d\uc744 \ud655\uc778\ud574\ubd05\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+----+-------------+--------------+------------+--------+----------------------------------+---------+---------+---------------------------------------------------------+--------+----------+--------------------------------------------+\n| id | select_type | table        | partitions | type   | possible_keys                    | key     | key_len | ref                                                     | rows   | filtered | Extra                                      |\n+----+-------------+--------------+------------+--------+----------------------------------+---------+---------+---------------------------------------------------------+--------+----------+--------------------------------------------+\n|  1 | SIMPLE      | station      | NULL       | range  | PRIMARY,idx_station_coordination | PRIMARY | 1022    | NULL                                                    |      2 |   100.00 | Using where; Using temporary               |\n|  1 | SIMPLE      | charger      | NULL       | ALL    | PRIMARY                          | NULL    | NULL    | NULL                                                    | 240340 |    10.00 | Using where; Using join buffer (hash join) |\n|  1 | SIMPLE      | chargersta   | NULL       | eq_ref | PRIMARY                          | PRIMARY | 2044    | charge.charger1_.charger_id,charge.station0_.station_id |      1 |   100.00 | NULL                                       |\n+----+-------------+--------------+------------+--------+----------------------------------+---------+---------+---------------------------------------------------------+--------+----------+--------------------------------------------+\n")),(0,r.kt)("p",null,"station \ud14c\uc774\ube14\uc5d0 \ub300\ud574\uc11c\ub294 range \uc2a4\uce94, \uc784\uc2dc \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4, \uadf8\ub9ac\uace0 charger\uc5d0\uc11c\ub294 \ud14c\uc774\ube14 \ud480 \uc2a4\uce94, join buffer\uae4c\uc9c0 \uc0dd\uc131\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ud589\ud788\ub3c4 chargersta \ud14c\uc774\ube14\uc5d0\uc11c\ub294 \uc801\ub2f9\ud55c \uc870\uac74\uc744 \uc0dd\uc131\ud55c \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc2dc \ud55c\ubc88 \ucffc\ub9ac\ub97c \ubcf4\uace0 \uc2e4\ud589 \uacc4\ud68d\uc774 \uc774\ub807\uac8c \ub098\uc628 \uc774\uc720\ub97c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    ...\n    FROM charge_station s\n    inner join charger c on (c.station_id = s.station_id)\n    inner join charger_status cs on (c.charger_id = cs.charger_id and c.station_id = cs.station_id)\nwhere s.station_id in (?, ?)\ngroup by s.station_id;\n")),(0,r.kt)("p",null,"\uc544\uae4c \uc598\uae30\ud588\ub358, using temporary\uc640 using join buffer\uac00 \ubc1c\uc0dd\ud558\ub294 \uc774\uc720\uc758 \uacf5\ud1b5\uc810\uc744 \ucc3e\uc544\ubcf4\uba74, \uc778\ub371\uc2a4\uac00 \ubb38\uc81c\uc778 \uac83\uc744 \uc720\ucd94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"station\uacfc charger\ub97c join\ud560 \ub54c, driven table \uc989, charger \ud14c\uc774\ube14\uc5d0 \uc801\uc808\ud55c \uc778\ub371\uc2a4\uac00 \uc5c6\uc5b4 \uc131\ub2a5\uc774 \ub098\ube60\uc9c4 \uac83\uc774\ub77c \uc758\uc2ec\ud558\uc5ec, \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud558\uace0 \ub2e4\uc2dc \ud55c\ubc88 \uc2e4\ud589 \uacc4\ud68d\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+----+-------------+--------------+------------+--------+----------------------------------+-------------------+---------+---------------------------------------------------------+--------+----------+---------------+\n| id | select_type | table        | partitions | type   | possible_keys                    | key               | key_len | ref                                                     | rows   | filtered | Extra         |\n+----+-------------+--------------+------------+--------+----------------------------------+-------------------+---------+---------------------------------------------------------+--------+----------+---------------+\n|  1 | SIMPLE      | station      | NULL       | range  | PRIMARY,idx_station_coordination | PRIMARY           | 1022    | NULL                                                    |      2 |   100.00 | Using where   |\n|  1 | SIMPLE      | charger      | NULL       | ref    | PRIMARY,idx_station_id           | idx_station_id    | 1022    | charge.s.station_id                                     |      3 |   100.00 | NULL          |\n|  1 | SIMPLE      | chargersta   | NULL       | eq_ref | PRIMARY                          | PRIMARY           | 2044    | charge.charger1_.charger_id,charge.station0_.station_id |      1 |   100.00 | NULL          |\n+----+-------------+--------------+------------+--------+----------------------------------+-------------------+---------+---------------------------------------------------------+--------+----------+---------------+\n")),(0,r.kt)("p",null,"\uc774\ub807\uac8c charger \ud14c\uc774\ube14\uc5d0 \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud55c \uac83\ub9cc\uc73c\ub85c\ub3c4 \uc2e4\ud589 \uacc4\ud68d\uc744 \uae54\ub054\ud558\uac8c \uac1c\uc120\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,r.kt)("p",null,"\uc544\ub798\ub294 \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud558\uae30 \uc804 \uc2e4\ud589 \uc18d\ub3c4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/106640954/1130eee6-c2b9-4846-b294-73de78b0f070",alt:"\uac1c\uc120_\uc804"})),(0,r.kt)("p",null,"\uc544\ub798\ub294 \uc778\ub371\uc2a4\ub97c \uc0dd\uc131\ud55c \ud6c4 \uc2e4\ud589 \uc18d\ub3c4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-car-ffeine/assets/106640954/d024330a-c233-4e75-a28b-1b01b6ae3245",alt:"\uac1c\uc120_\ud6c4"})),(0,r.kt)("p",null,"315ms -> 24ms \ub85c \uc57d 13\ubc30 \ube68\ub77c\uc9c4 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc2e4\ud589 \uacc4\ud68d \ud655\uc778\uc740 \ud544\uc218\uc785\ub2c8\ub2e4!")),(0,r.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("p",null,"real mysql \ucc45"))}g.isMDXComponent=!0}}]);