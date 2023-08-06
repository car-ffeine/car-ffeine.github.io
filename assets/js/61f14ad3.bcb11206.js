"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[4273],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return n?a.createElement(g,o(o({ref:e},u),{},{components:n})):a.createElement(g,o({ref:e},u))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=f;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99709:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={slug:24,title:"Out of memory trouble shooting",authors:["boxster"],tags:["OOM","java","trouble-shooting"]},o=void 0,r={permalink:"/24",source:"@site/blog/2023-08-06-out-of-memory-trouble-shooting/index.mdx",title:"Out of memory trouble shooting",description:"\uc548\ub155\ud558\uc138\uc694 \ubd80\ub989\ubd80\ub989 \ud5c8\ub9ac\ucf00\uc778 \ubc15\uc2a4\ud130\uc785\ub2c8\ub2e4.",date:"2023-08-06T00:00:00.000Z",formattedDate:"2023\ub144 8\uc6d4 6\uc77c",tags:[{label:"OOM",permalink:"/tags/oom"},{label:"java",permalink:"/tags/java"},{label:"trouble-shooting",permalink:"/tags/trouble-shooting"}],readingTime:15.43,hasTruncateMarker:!1,authors:[{name:"\ubc15\uc2a4\ud130",title:"Backend",url:"https://github.com/drunkenhw",imageURL:"https://github.com/drunkenhw.png",key:"boxster"}],frontMatter:{slug:"24",title:"Out of memory trouble shooting",authors:["boxster"],tags:["OOM","java","trouble-shooting"]},nextItem:{title:"Deadlock trouble shooting",permalink:"/23"}},s={authorsImageUrls:[void 0]},p=[{value:"\uc774 \uae00\uc744 \uc4f0\ub294 \uc774\uc720",id:"\uc774-\uae00\uc744-\uc4f0\ub294-\uc774\uc720",level:2},{value:"\uc65c \ubc1c\uc0dd\ud588\uc744\uae4c",id:"\uc65c-\ubc1c\uc0dd\ud588\uc744\uae4c",level:3},{value:"\ud574\uacb0 \ubc29\uc548",id:"\ud574\uacb0-\ubc29\uc548",level:2},{value:"Heap size \uc870\uc808\ud558\uae30",id:"heap-size-\uc870\uc808\ud558\uae30",level:3},{value:"\ud398\uc774\uc9d5\ud574\uc11c \uac00\uc838\uc624\uae30",id:"\ud398\uc774\uc9d5\ud574\uc11c-\uac00\uc838\uc624\uae30",level:3},{value:"No Offset",id:"no-offset",level:4},{value:"\uc131\ub2a5 \ucc28\uc774",id:"\uc131\ub2a5-\ucc28\uc774",level:3},{value:"\uc9c4\uc9dc \ud574\uacb0\ud558\uae30",id:"\uc9c4\uc9dc-\ud574\uacb0\ud558\uae30",level:2},{value:"\uc9c4\uc9dc \ud655\uc778\ud574\ubcf4\uae30",id:"\uc9c4\uc9dc-\ud655\uc778\ud574\ubcf4\uae30",level:3},{value:"Reference",id:"reference",level:2}],u={toc:p},d="wrapper";function c(t){let{components:e,...l}=t;return(0,i.kt)(d,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694 \ubd80\ub989\ubd80\ub989 \ud5c8\ub9ac\ucf00\uc778 \ubc15\uc2a4\ud130\uc785\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc774-\uae00\uc744-\uc4f0\ub294-\uc774\uc720"},"\uc774 \uae00\uc744 \uc4f0\ub294 \uc774\uc720"),(0,i.kt)("p",null,"\uba3c\uc800 \uc774 \uae00\uc744 \uc4f0\ub294 \uc774\uc720\ub294 \uc800\ud76c \uce74\ud398\uc778 \ud300\uc758 \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub4e4\uc758 \uc0c8\ub85c\uc6b4 \uc815\ubcf4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uac70\ub098, \uc800\uc7a5\ud558\ub294 \ub85c\uc9c1\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 OOM(Out of memory)\uac00 \ubc1c\uc0dd\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"error-log",src:n(16235).Z,width:"2104",height:"1759"})),(0,i.kt)("h3",{id:"\uc65c-\ubc1c\uc0dd\ud588\uc744\uae4c"},"\uc65c \ubc1c\uc0dd\ud588\uc744\uae4c"),(0,i.kt)("p",null,"\uba3c\uc800 \uac04\ub2e8\ud788 \uc800\ud76c\uac00 \ucc98\ud55c \uc0c1\ud669\uc5d0 \ub300\ud574 \uc124\uba85\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ucc98\uc74c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\uba74 \uacf5\uacf5 API\ub97c \ud638\ucd9c\ud558\uc5ec \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uc815\ubcf4\ub4e4\uc744 \uac00\uc838\uc640 \uc800\uc7a5\ud569\ub2c8\ub2e4. (\ucda9\uc804\uc18c \uc57d 6\ub9cc \uacf3 + \ucda9\uc804\uae30 \uc57d 23\ub9cc \uae30)"),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \uc815\ubcf4\ub4e4\uc740 \uc218\uc815\uc774 \ub420 \uc218 \uc788\uace0, \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\uac00 \ucd94\uac00\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\ubbc0\ub85c \uc815\ud655\ud55c \uc815\ubcf4\uac00 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uac00\uc7a5 \uc911\uc694\uc2dc\ub418\ub294 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc774\ub7ec\ud55c \uc815\ubcf4\ub4e4\uc774 \ub2a6\uac8c \ubc18\uc601\uc774 \ub41c\ub2e4\uac70\ub098, \ubc18\uc601\uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc800\ud76c \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790\uac00 \uc5c6\uc744 \uac83\uc774\ub77c \ud310\ub2e8\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub798\uc11c \ud558\ub8e8\uc5d0 \ud55c \ubc88 \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub4e4\uc758 \uc815\ubcf4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0, \ucd94\uac00\ub41c \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub97c \uc800\uc7a5\ud558\ub294 \ub85c\uc9c1\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub300\ub7b5\uc801\uc778 \ub85c\uc9c1\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public void updatePeriodicStations() {\n        List<Station> stations = requestStations();\n        stationUpdateService.updateStations(stations);\n    }\n\n    public void updateStations(List<Station> updatedStations) {\n        List<Station> stations = stationRepository.findAllFetch();\n\n        Map<String, Station> savedStationsByStationId = stations.stream()\n                .collect(Collectors.toMap(Station::getStationId, Function.identity()));\n\n        // \uc800\uc7a5\ub41c \uc815\ubcf4\uc640 \ube44\uad50\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub97c \ucc3e\ub294 \ub85c\uc9c1\n        ...\n\n        saveAllStations(toSaveStations);\n        updateAllStations(toUpdateStations);\n\n        saveAllChargers(toSaveChargers);\n        updateAllChargers(toUpdateChargers);\n    }\n\n")),(0,i.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \ub9d0\uc500\ub4dc\ub9ac\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"requestStations()")," \uba54\uc11c\ub4dc\ub294 \uacf5\uacf5 API\uc5d0\uc11c \ubaa8\ub4e0 \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub97c \uc694\uccad\ud558\uace0 \ubc1b\uc544\uc624\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. 23\ub9cc + 6\ub9cc\uac1c\uc758 \uc815\ubcf4\ub97c \ubc1b\uc544\uc624\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub807\uac8c \ub9ce\uc740 \uc815\ubcf4\ub97c \ubc1b\uc544\uc624\uace0 \uba54\ubaa8\ub9ac\uc5d0 \uc62c\ub9b0\ub2e4\ub294 \uac83\uc740 \ub204\uac00\ubd10\ub3c4 \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \uc120\ud0dd\uc744 \ud55c \uc774\uc720\ub294 \uacf5\uacf5 API\ub294 \uc800\ud76c\uac00 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ubcf4\ub0b4\uc904 \uc9c0 \ubaa8\ub978\ub2e4\ub294 \uac83\uc774\uc600\uc2b5\ub2c8\ub2e4.\n\uadf8\ub798\uc11c \uc5b4\uca54 \uc218 \uc5c6\uc774 23\ub9cc\uac74\uc744 \ubaa8\ub450 \uc694\uccad\ud574\uc57c\ud55c\ub2e4\ub294 \ubd80\ubd84\uc740 \ubc14\uafc0 \uc218 \uc5c6\ub294 \ud55c\uacc4\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8 \ub2e4\uc74c\uc73c\ub85c\ub294 \uc694\uccad\ud574\uc11c \ubc1b\uc544\uc628 \ub370\uc774\ud130\ub4e4\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub358 \ub370\uc774\ud130\ub4e4\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"findAll()"),"\uc744 \ud1b5\ud574 \ube44\uad50\ud558\uace0 \uc0c8\ub85c\uc6b4 \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub294 \uc800\uc7a5\ud558\uace0, \uc5c5\ub370\uc774\ud2b8\ub41c \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub294 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7f0 \ub85c\uc9c1\uc740 \ucd1d (23 + 6) * 2 \ub9cc\uac74\uc758 \uac1d\uccb4 \uc57d 58\ub9cc\uac1c\ub97c Heap \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ud569\ub2c8\ub2e4. \ub9ce\ub2e4\uace0\ub294 \uc0dd\uac01\ud588\uc9c0\ub9cc, \uc77c\ub2e8 \uc81c \ub85c\uceec\ud658\uacbd\uc5d0\uc11c\ub294 \uc798 \uc791\ub3d9\ud588\uace0, \uae30\ub2a5 \uad6c\ud604\uc774 \uc6b0\uc120\uc774\uae30 \ub54c\ubb38\uc5d0 \ucd94\ud6c4\uc5d0 \uac1c\uc120\uc744 \ud558\uae30\ub85c \ud558\uace0 \ub118\uc5b4\uac14\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uac1c\ubc1c \uc11c\ubc84 \ubc30\ud3ec\ub97c \ud558\uace0 \ub2e4\uc74c\ub0a0 \uc11c\ubc84\uac00 \uc811\uc18d\uc774 \ub418\uc9c0 \uc54a\ub294 \uac83\uc744 \ud655\uc778\ud588\uace0, \ub85c\uadf8\ub97c \ubcf4\ub2c8 \uc704\uc758 \uc0ac\uc9c4\uacfc \uac19\uc774 OOM\uc774 \ubc1c\uc0dd\ud55c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ud574\uacb0-\ubc29\uc548"},"\ud574\uacb0 \ubc29\uc548"),(0,i.kt)("h3",{id:"heap-size-\uc870\uc808\ud558\uae30"},"Heap size \uc870\uc808\ud558\uae30"),(0,i.kt)("p",null,"\uc77c\ub2e8 \uc784\uc2dc \ubc29\ud3b8\uc73c\ub85c Heap memory\uc758 \ucd5c\ub300 \ud06c\uae30\ub97c \ub298\ub9ac\ub294 \ubc95\uc774\uc600\uc2b5\ub2c8\ub2e4. JVM\uc740 \uc2e4\ud589\ub418\ub294 \ud658\uacbd\uc5d0 \ub530\ub77c \ud799 \uba54\ubaa8\ub9ac\uc758 \ucd5c\ub300 \uc0ac\uc774\uc988\ub97c \uc815\ud569\ub2c8\ub2e4. \ud799 \uba54\ubaa8\ub9ac\ub294 \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ud574\ub2f9 \ud658\uacbd\uc758 \uba54\ubaa8\ub9ac 1/4\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.\n\uadf8\ub798\uc11c \uc800\ud76c EC2 \uc778\uc2a4\ud134\uc2a4\uc758 \uba54\ubaa8\ub9ac\ub294 \uc57d 2\uae30\uac00\ub85c, \uc57d 500MB\uac00 \ud560\ub2f9\ub418\uc5b4 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc800\ud76c\ub294 \uba54\ubaa8\ub9ac\ub97c \uc870\uae08\uc529 \ub298\ub824\uac00\uba70 \uc870\uc815\ud558\uc5ec \uc57d 1\uae30\uac00\ub85c \ud799 \uba54\ubaa8\ub9ac\uc758 \ucd5c\ub300 \uc0ac\uc774\uc988\ub97c \uc815\ud588\uc2b5\ub2c8\ub2e4.\n\ud799 \uba54\ubaa8\ub9ac\uc758 \uc124\uc815\uc744 \ud558\ub294 \ubc29\ubc95\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java -Xms512m -Xmx1024m boxster.jar\n")),(0,i.kt)("p",null,"\uc2e4\ud589\ud560 \ub54c \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \ud558\uba74 \ucd5c\uc18c \ud799 \uba54\ubaa8\ub9ac \uc0ac\uc774\uc988\ub294 512MB, \ucd5c\ub300 1024MB\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ud398\uc774\uc9d5\ud574\uc11c-\uac00\uc838\uc624\uae30"},"\ud398\uc774\uc9d5\ud574\uc11c \uac00\uc838\uc624\uae30"),(0,i.kt)("p",null,"\ud799 \uba54\ubaa8\ub9ac\uc758 \uc0ac\uc774\uc988\ub97c \uc870\uc808\ud574\uc11c \ud574\uacb0\ud55c\ub2e4\ub294 \ubd80\ubd84\uc740 \uc784\uc2dc \ubc29\ud3b8\uc774\uc9c0 \ub9cc\uc57d \uc800\ud76c EC2 \ud658\uacbd\uc774 \ub2e4\uc6b4\uadf8\ub808\uc774\ub4dc \ub418\uac70\ub098 \ud55c\ub2e4\uba74 \ub610 OOM\uc774 \ubc1c\uc0dd\ud560 \uac83\uc774 \ubed4\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub808\ubca8\uc5d0\uc11c \uc880 \ub354 \ud574\uacb0\ud560 \ubc29\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"API\uc758 \uc694\uccad\uc5d0 \ub300\ud55c \ubd80\ubd84\uc740 \uc694\uccad\ubcf4\ub0b4\ub294 \ud68c\uc0ac\uc758 \uc815\ucc45\uc774 \ubc14\ub00c\uc9c0 \uc54a\ub294 \uc774\uc0c1 \uc800\ud76c\ub294 23\ub9cc\uac74\uc744 \ubaa8\ub450 \ub85c\ub529\ud574\uc57c\ud55c\ub2e4\ub294 \uc810\uc740 \uc5b4\uca54 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc800\ud76c\uac00 \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \uc720\uc77c\ud55c \ubd80\ubd84\uc740 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uaebc\ub0b4\uc624\ub294 \ubd80\ubd84 \ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc774\uac83\uc744 \uc5b4\ub5bb\uac8c \uc870\uc808\ud560 \uc218 \uc788\uc744\uae4c\uc694."),(0,i.kt)("p",null,"\uc5ec\ub7ec \ubc29\ubc95\uc744 \ucc3e\uc544\ubcf4\ub358 \uc911 ",(0,i.kt)("inlineCode",{parentName:"p"},"No Offset"),"\ubc29\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \ud398\uc774\uc9d5\ud55c\ub2e4\ub294 \uae00\uc744 \uc77d\uc5c8\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9d5\uc744 \ud558\uae30\uc704\ud574\uc11c\ub294 \uc5b4\ub514\uc11c\ubd80\ud130 \uc2dc\uc791\ud558\uace0 \uc5b4\ub514\uae4c\uc9c0 \uac00\uc838\uc62c \uac83\uc778\uc9c0 \uc815\ud574\uc57c\ud569\ub2c8\ub2e4. \uadf8 \uc911 \uba3c\uc800 \uc81c\uc77c \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 Offset \ubc29\uc2dd\uc5d0 \ub300\ud574 \uac04\ub2e8\ud788 \uc124\uba85\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud574\ub2f9 \ubc29\uc2dd\uc740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM station\nORDER BY id DESC\nOFFSET 20000\nLIMIT 10000\n")),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ucffc\ub9ac\ub97c \ub9cc\ub4e4\uc5b4 \uc694\uccad\ud569\ub2c8\ub2e4. station \ud14c\uc774\ube14\uc758 20001\ubc88\uc9f8 \ub808\ucf54\ub4dc\ubd80\ud130 10000\uac1c\uc758 \ub370\uc774\ud130\ub97c \uc694\uccad\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucffc\ub9ac\ub3c4 \ub098\uc058\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc7a5\uc810\uc73c\ub85c\ub294 \uc5b8\uc81c\ub4e0 \ud574\ub2f9 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774 \ucffc\ub9ac\uc5d0\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ub4a4\ub85c \uac08\uc218\ub85d \uc131\ub2a5\uc774 \ub098\ube60\uc9c4\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. 20001\ubc88\uc9f8 \ub808\ucf54\ub4dc\ubd80\ud130 10000\uac1c\ub97c \uc694\uccad\ud55c\ub2e4\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc5b4\uca54 \uc218 \uc5c6\uc774 20001\ubc88\uc9f8 \ub808\ucf54\ub4dc\ub97c \ucc3e\uae30 \uc704\ud574\n\uc815\ub82c\uc744 \ud558\uace0, \uc815\ub82c\ud55c \ud6c4\uc5d0 20001\ubc88\uc9f8\uae4c\uc9c0 \uc138\uc5b4\uac00\uba70 \uc77d\uace0, \uac70\uae30\uc11c\ubd80\ud130 10000\uac1c\uc758 \ub808\ucf54\ub4dc\ub97c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"offset",src:n(21100).Z,width:"840",height:"402"})),(0,i.kt)("p",null,"\ud55c \ubb38\uc7a5\uc73c\ub85c \uc815\uc758\ud558\uba74, \uc21c\uc11c\ub97c \uc54c\uc544\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 \ub0b4\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\ub294 \ub808\ucf54\ub4dc\ub3c4 \uc77d\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"no-offset"},"No Offset"),(0,i.kt)("p",null,"\uadf8\ub7fc No offset \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc124\uba85\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc0ac\uc2e4 \uc774\ub984\ub9cc \ub4e4\uc73c\uba74 \uc5b4\ub824\uc6b8 \uac83 \uac19\uc9c0\ub9cc \uadf8\ub0e5 offset\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \ud398\uc774\uc9d5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc2a4\ud06c\ub864\uc744 \ub0b4\ub9ac\uba74\uc11c \uc790\ub3d9\uc73c\ub85c \ub9c8\uc9c0\ub9c9\uc758 \ub370\uc774\ud130\ub97c \uae30\uc900\uc73c\ub85c \ub2e4\uc74c \uba87\uac1c\uc758 \ub808\ucf54\ub4dc\ub97c \ubd88\ub7ec\uc624\ub294 \ubc29\uc2dd\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n\ud574\ub2f9 \ubc29\uc2dd\uc740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select *\nfrom station\nwhere id < \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubcf4\ub0b8 id\norder by id desc\nlimit 10000;\n")),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ucffc\ub9ac\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc544\uae4c\uc640\ub294 \ub2e4\ub978 \ubd80\ubd84\uc740 where \uc808\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubcf4\ub0b8 id"),"\ub77c\ub294 \uc815\ubcf4\uac00 \ud544\uc694\ud558\ub2e4\ub294 \ubd80\ubd84\uacfc, offset\uc774 \uc0ac\ub77c\uc9c4 \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac19\uc740 \uacb0\uacfc\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \ucffc\ub9ac\uc9c0\ub9cc, \ud558\ub098\uac00 \ucd94\uac00\ub418\uace0 \ud558\ub098\uac00 \uc0ac\ub77c\uc84c\ub2e4\ub294 \uac83\uc740 \ucd94\uac00\ub41c \ubd80\ubd84\uc774 \uc0ac\ub77c\uc9c4 \ubd80\ubd84\uc744 \ub300\uc2e0\ud55c\ub2e4\ub294 \ub73b\uc774\uaca0\uc8e0."),(0,i.kt)("p",null,"\uc774 \uc774\ub7ec\ud55c \ubc29\uc2dd\uc758 \ub2e8\uc810\uc740 offset\uc744 \uc774\uc6a9\ud55c \ubc29\uc2dd\uacfc\ub294 \ub2e4\ub974\uac8c page\ub97c \uc9c0\uc815\ud574\uc11c \ub3cc\uc544\uac00\uae30\ub294 \ud798\ub4ed\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"no offset",src:n(59712).Z,width:"991",height:"364"})),(0,i.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubcf4\ub0b8 id\ub97c \ubc1b\uc544 \uc778\ub371\uc2a4\ub97c \uc774\uc6a9\ud574 \ud574\ub2f9 id\uc5d0\uc11c\ubd80\ud130 \ub808\ucf54\ub4dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uad73\uc774 \ud544\uc694\uc5c6\ub294 \ub808\ucf54\ub4dc\ub97c \uc77d\uc744 \ud544\uc694 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc774 \uc88b\uc544\uc84c\uc744 \uac83\uc774\ub77c \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc131\ub2a5-\ucc28\uc774"},"\uc131\ub2a5 \ucc28\uc774"),(0,i.kt)("p",null,"\ubc14\ub85c \ud55c\ubc88 \ub450 \uac1c\uc758 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"test",src:n(75735).Z,width:"1508",height:"498"})),(0,i.kt)("p",null,"\uc704\uc758 \ucffc\ub9ac\ub294 no offset, \uc544\ub798\ub294 offset \ubc29\uc2dd\uc785\ub2c8\ub2e4. \ud604\uc7ac \ub370\uc774\ud130\uac00 6\ub9cc\uac74 \ub4e4\uc5b4\uc788\ub294 \ud14c\uc774\ube14\uc758 \uc870\ud68c \uae30\uc900\uc73c\ub85c \uc57d 10\ubc30 \uac00\ub7c9 \uc131\ub2a5\uc774 \ucc28\uc774\ub098\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7fc \uc2e4\ud589 \uacc4\ud68d\ub3c4 \uac04\ub2e8\ud788 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba3c\uc800 offset \ubc29\uc2dd\uc758 \uc2e4\ud589 \uacc4\ud68d\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"offset explain",src:n(41934).Z,width:"1397",height:"52"})),(0,i.kt)("p",null," type \uce7c\ub7fc\uc744 \ubcf4\uc2dc\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"\ub77c\uace0 \ub418\uc5b4 \uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c index \uc811\uadfc \ubc29\ubc95\uc740\n\uc778\ub371\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2cc \uc778\ub371\uc2a4\ub97c \ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \uc77d\ub294 full scan\uc744 \ub73b\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uadf8\ub2e4\uc9c0 \ud6a8\uc728\uc801\uc774\uc9c0 \ubabb\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 rows \uce7c\ub7fc\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"40010"),"\uc774\ub77c\uace0 \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ubd80\ubd84\uc740 \uc81c\uac00 offset\uc744 40000, limit\uc744 10\uc73c\ub85c \ub450\uc5c8\uae30 \ub54c\ubb38\uc5d0 40010d\uc758 row\ub97c\n\uc77d\uc5b4\uc57c\ud55c\ub2e4\uace0 \uc608\uc0c1 \uac12\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub2e4\uc74c\uc740 no offset \ubc29\uc2dd\uc758 \uc2e4\ud589 \uacc4\ud68d\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"no offset explain",src:n(48931).Z,width:"1395",height:"52"}),"\n\uc544\uae4c\uc640\ub294 \ub2e4\ub974\uac8c type \uce7c\ub7fc\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),"\uc785\ub2c8\ub2e4. range \uc811\uadfc \ubc29\uc2dd\uc740 \uc778\ub371\uc2a4\ub97c \ud558\ub098\uc758 \uac12\uc774 \uc544\ub2c8\ub77c \ubc94\uc704\ub85c \uac80\uc0c9\ud558\ub294 \uacbd\uc6b0\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.\n\uc880 \uc804\uc758 index \uc811\uadfc \ubc29\uc2dd\uacfc\ub294 \ub2e4\ub974\uac8c \ud6e8\uc52c \ud6a8\uc728\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 rows\ub3c4 \ub2ec\ub77c\uc9c4 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc9c4\uc9dc-\ud574\uacb0\ud558\uae30"},"\uc9c4\uc9dc \ud574\uacb0\ud558\uae30"),(0,i.kt)("p",null,"\uc774\uc81c \uc5f4\uc2ec\ud788 \ud398\uc774\uc9d5 \ucc98\ub9ac\ub97c \ud588\uc73c\ub2c8 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud574\uacb0\uc744 \ud558\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc800\ud76c \ud300\uc740 \ub3d9\uc801 \ucffc\ub9ac \uc0dd\uc131\uc744 \ub3c4\uc640\uc8fc\ub294 Query DSL\uc744 \ub3c4\uc785\ud558\uc9c0 \uc54a\uc558\uace0 \uc544\uc9c1\uae4c\uc9c4 \uad73\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc544\uc11c no offset \ubc29\uc2dd\uc744 jpa\uc758 jpql\uc744 \ud1b5\ud574 \uad6c\ud604\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba3c\uc800 \uccab \ud398\uc774\uc9c0\ub294 id\uc758 \uad00\uacc4\uc5c6\uc774 \uc6d0\ud558\ub294 \uac2f\uc218\ub9cc\ud07c\ub9cc \uac00\uc838\uc624\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub450\ubc88\uc9f8 \ud398\uc774\uc9c0\ubd80\ud130\ub294 id\ub97c \ubc1b\uc544 \uadf8 \ub2e4\uc74c\ubd80\ud130 \ubc18\ud658\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public interface StationRepository extends Repository<Station, Long> {\n\n    @Query("SELECT s FROM Station s INNER JOIN FETCH s.chargers ORDER BY s.stationId")\n    List<Station> findAllByOrder(Pageable pageable);\n\n    @Query("SELECT s FROM Station s INNER JOIN FETCH s.chargers WHERE s.stationId > :stationId ORDER BY s.stationId")\n    List<Station> findAllByPaging(@Param("stationId") String stationId, Pageable pageable);\n}\n')),(0,i.kt)("p",null,"\uadf8\ub7fc \uc544\uae4c update\ub97c \ud574\uc8fc\ub358 \uba54\uc11c\ub4dc\uc5d0\uc11c \uc870\uae08 \uc218\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public void updatePeriodicStations() {\n        List<Station> stations = getStations();\n        // \ucc98\uc74c\uc5d0\ub294 station\uc758 id\uac00 null\n        String lastStationId = null;\n        for (int i = 0; i < stations.size() / LIMIT + 1; i++) {\n            // \ub9c8\uc9c0\ub9c9 id\ub97c \uba54\uc11c\ub4dc \uc2e4\ud589\ud560 \ub54c\ub9c8\ub2e4 \ubcc0\uacbd\ud574\uc900\ub2e4.\n            lastStationId = stationUpdateService.updateStations(stations, lastStationId, LIMIT);\n        }\n    }\n\n    public String updateStations(List<Station> updatedStations, String lastStationId, int limit) {\n        List<Station> savedStations = getStations(lastStationId, limit);\n\n        Map<String, Station> savedStationsByStationId = stations.stream()\n                .collect(Collectors.toMap(Station::getStationId, Function.identity()));\n\n        // \uc800\uc7a5\ub41c \uc815\ubcf4\uc640 \ube44\uad50\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ucda9\uc804\uc18c\uc640 \ucda9\uc804\uae30\ub97c \ucc3e\ub294 \ub85c\uc9c1\n        ...\n\n        saveAllStations(toSaveStations);\n        updateAllStations(toUpdateStations);\n\n        saveAllChargers(toSaveChargers);\n        updateAllChargers(toUpdateChargers);\n        // \uac00\uc838\uc628 list\uc5d0\uc11c \uc81c\uc77c \ub9c8\uc9c0\ub9c9 station\uc758 id\ub97c \ubc18\ud658\n        return getLastStationId(savedStations);\n    }\n    // \ud398\uc774\uc9d5 \ucc98\ub9ac\n    private List<Station> getStations(String stationId, int limit) {\n        // Id \uac00 null \uc774\ub77c\uba74 \uccab \ud398\uc774\uc9c0\uc774\uae30 \ub54c\ubb38\uc5d0 limit \uc0ac\uc774\uc988\ub9cc\ud07c select\n        if (stationId == null) {\n            return stationRepository.findAllByOrder(Pageable.ofSize(limit));\n        }\n        // \uc544\ub2c8\ub77c\uba74 station Id \ubd80\ud130 limit \ub9cc\ud07c\n        return stationRepository.findAllByPaging(stationId, Pageable.ofSize(limit));\n    }\n")),(0,i.kt)("p",null,"\uc774\ub807\uac8c \ub418\uba74 \uc6d0\ub798 23\ub9cc\uac1c\ub97c \ud55c\uaebc\ubc88\uc5d0 \uac00\uc838\uc624\ub358 \ub85c\uc9c1\uc744 \ub098\ub20c \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 Heap \uba54\ubaa8\ub9ac\uc758 \uc5ec\uc720\uac00 \uc0dd\uae38 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc9c4\uc9dc-\ud655\uc778\ud574\ubcf4\uae30"},"\uc9c4\uc9dc \ud655\uc778\ud574\ubcf4\uae30"),(0,i.kt)("p",null,"\ubb3c\ub860 GC\uc758 \ub3d9\uc791\uc774 \uc5b4\ub5a8\uc9c0 \ubaa8\ub974\uaca0\uc9c0\ub9cc 23\ub9cc\uac1c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\ub294 \uac83\ubcf4\ub2e4 5000\uac1c \ud639\uc740 \ub354 \uc801\uac8c \uc0dd\uc131\ud558\ub294 \uac83\uc774 Heap \uba54\ubaa8\ub9ac\ub97c \uc801\uac8c \uc0ac\uc6a9\ud560 \uac83\uc784\uc744 \uc720\ucd94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc9c1\uc811 \ud655\uc778\ud574\ubcf4\uae30 \uc804\uae4c\uc9c0\ub294 \ud655\uc2e0\ud560 \uc218 \uc5c6\uc73c\ub2c8 \uac04\ub2e8\ud788 ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," \ud074\ub798\uc2a4\uc5d0\uc11c \uc81c\uacf5\ud574\uc8fc\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"totalMemory()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"freeMemory()")," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    void \ud398\uc774\uc9d5\uc744_\uc0ac\uc6a9\ud55c_\uc870\ud68c() {\n        List<Station> stations = stationRepository.findAllByOrder(Pageable.ofSize(1000));\n\n        long total = Runtime.getRuntime().totalMemory();\n        long free = Runtime.getRuntime().freeMemory();\n        System.out.println("paging \uc0ac\uc6a9 \uc911\uc778 \uba54\ubaa8\ub9ac: " + ((total - free) / 1024 / 1024) + "MB");\n    }\n\n    @Test\n    void \ud398\uc774\uc9d5\uc744_\uc0ac\uc6a9\ud558\uc9c0_\uc54a\uace0_\uc870\ud68c() {\n        List<Station> stations = stationRepository.findAllFetch();\n\n        long total = Runtime.getRuntime().totalMemory();\n        long free = Runtime.getRuntime().freeMemory();\n\n        System.out.println("findAll() \uc0ac\uc6a9 \uc911\uc778 \uba54\ubaa8\ub9ac: " + ((total - free) / 1024 / 1024) + "MB");\n    }\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"findAll",src:n(88102).Z,width:"462",height:"34"}),"\n",(0,i.kt)("img",{alt:"paging",src:n(48675).Z,width:"424",height:"42"}),"\n\ud655\uc5f0\ud788 \ucc28\uc774\uac00 \ub098\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ubb3c\ub860 \ud14c\uc2a4\ud2b8\ucf54\ub4dc\uc5d0\uc11c\ub294 23\ub9cc\uac74\uc758 API \uc694\uccad\uc740 \uac19\uc740 \uc870\uac74\uc774\ub2c8 \ubc30\uc81c\ud558\uace0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub85c\uc368 \ud558\ub098\uc758 \ubb38\uc81c\uac00 \ub610 \ud574\uacb0\ub41c \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc544\uc9c1 \ubc30\uc6b0\ub294 \ub2e8\uacc4\ub77c \ud639\uc2dc \ud2c0\ub9b0 \uc810\uc774 \uc788\ub2e4\uba74 \uc9c0\uc801 \ubd80\ud0c1\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub9ac\uc5bc \ub9c8\uc774 \uc5d0\uc2a4\ud050\uc5d8 8.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jojoldu.tistory.com/528"},"https://jojoldu.tistory.com/528"))))}c.isMDXComponent=!0},16235:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/error-log-805eb9453a6ba067e66fc2928bd0e90e.png"},88102:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/findAll-ae5fb3f4360181f8543c74500c0d620f.png"},48931:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/no-offset-explain-ababd232c35d3f3f328d99cb065e69b4.png"},59712:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/no-offset-76c580e828707d0c1a6760539784fff8.png"},41934:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/offset-explain-bebfc224ea1ba5c1d396c773028188b8.png"},21100:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/offset-9b8e539b7328a1702af154f5c4855bf8.png"},48675:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/paging-d84ef95ea9ca28bd5da8099eb54853d5.png"},75735:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/test-a3e2a8131c7179bd49fbfee0297c93d6.png"}}]);