"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[3079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={slug:16,title:"JPA\uc5d0\uc11c ID\uac00 \uc788\ub294 Entity\uc5d0 \ub300\ud574 save \uc2dc\uc5d0 select \ucffc\ub9ac\uac00 \ub098\uac00\ub294 \uc774\uc720",authors:["boxster"],tags:["jpa"]},l=void 0,p={permalink:"/16",source:"@site/blog/2023-07-15-jpa-create-select-query-when-id-is-not-null-.mdx",title:"JPA\uc5d0\uc11c ID\uac00 \uc788\ub294 Entity\uc5d0 \ub300\ud574 save \uc2dc\uc5d0 select \ucffc\ub9ac\uac00 \ub098\uac00\ub294 \uc774\uc720",description:"\uc548\ub155\ud558\uc138\uc694 \ubc15\uc2a4\ud130 \uc785\ub2c8\ub2e4.",date:"2023-07-15T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 15\uc77c",tags:[{label:"jpa",permalink:"/tags/jpa"}],readingTime:9.97,hasTruncateMarker:!1,authors:[{name:"\ubc15\uc2a4\ud130",title:"Backend",url:"https://github.com/drunkenhw",imageURL:"https://github.com/drunkenhw.png",key:"boxster"}],frontMatter:{slug:"16",title:"JPA\uc5d0\uc11c ID\uac00 \uc788\ub294 Entity\uc5d0 \ub300\ud574 save \uc2dc\uc5d0 select \ucffc\ub9ac\uac00 \ub098\uac00\ub294 \uc774\uc720",authors:["boxster"],tags:["jpa"]},prevItem:{title:"\uce74\ud398\uc778 \ud300\uc758 CI/CD",permalink:"/17"},nextItem:{title:"\uc8fc\uae30\uc801\uc778 \ub370\uc774\ud130 \uc694\uccad\uc73c\ub85c \ubc1b\uc740 \ub370\uc774\ud130\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ubc0f \uc0bd\uc785\ud558\uae30 (with. \ubc15\uc2a4\ud130)",permalink:"/15"}},o={authorsImageUrls:[void 0]},s=[{value:"ID\ub97c \uc9c1\uc811 \ub123\uc5b4\uc900 Entity\ub97c \uc800\uc7a5\ud560 \ub54c",id:"id\ub97c-\uc9c1\uc811-\ub123\uc5b4\uc900-entity\ub97c-\uc800\uc7a5\ud560-\ub54c",level:2},{value:"save \uc2dc SELECT \ucffc\ub9ac\uac00 \ubc1c\uc0dd\ud558\ub294 \uc774\uc720",id:"save-\uc2dc-select-\ucffc\ub9ac\uac00-\ubc1c\uc0dd\ud558\ub294-\uc774\uc720",level:3},{value:"\uc0c8\ub85c\uc6b4 Entity\ub97c \uad6c\ubd84\ud558\ub294 \uae30\uc900",id:"\uc0c8\ub85c\uc6b4-entity\ub97c-\uad6c\ubd84\ud558\ub294-\uae30\uc900",level:3},{value:"ID\ub97c \uc9c1\uc811 \ub123\uc5b4\uc8fc\ub294 \uac1d\uccb4\ub294 JPA \uc0ac\uc6a9\uc744 \ud3ec\uae30\ud574\uc57c\ud560\uae4c?",id:"id\ub97c-\uc9c1\uc811-\ub123\uc5b4\uc8fc\ub294-\uac1d\uccb4\ub294-jpa-\uc0ac\uc6a9\uc744-\ud3ec\uae30\ud574\uc57c\ud560\uae4c",level:2},{value:"\uadf8\ub7fc \uc5b4\ub5bb\uac8c?",id:"\uadf8\ub7fc-\uc5b4\ub5bb\uac8c",level:3},{value:"Persistable \uad6c\ud604\ud558\uae30",id:"persistable-\uad6c\ud604\ud558\uae30",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:4}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694 \ubc15\uc2a4\ud130 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba3c\uc800 \uc774\ubc88\uc5d0 \uae00\uc744 \uc4f0\uac8c\ub41c \uacc4\uae30\ub97c \ub9d0\uc500\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \uc800\ud76c \ud300\uc740 \uacf5\uacf5 \ub370\uc774\ud130 API\uc5d0\uc11c \ubc1b\uc544\uc628 \ucda9\uc804\uc18c\uc640, \ucda9\uc804\uae30\ub4e4\uc758 ID\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\ubb3c\ub860 \ub2e4\ub978 API, \uc81c\uac00 \uc81c\uc5b4\ud560 \uc218 \uc5c6\ub294 \uacf3\uc5d0 \uc758\uc874\ud558\ub294 \uac83\uc740 \uc88b\uc9c0 \uc54a\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc624\ub294 \uacfc\uc815\uc5d0\uc11c \ub9c8\uc8fc\ud55c \uc131\ub2a5\uc801\uc778 \ubb38\uc81c \ub54c\ubb38\uc5d0 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc804\uad6d\uc758 \ucda9\uc804\uc18c\ub294 6\ub9cc\uac1c, \ucda9\uc804\uc18c \uc548\uc5d0 \uc874\uc7ac\ud558\ub294 \ucda9\uc804\uae30\ub294 23\ub9cc\uae30\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uacf5\uacf5 \ub370\uc774\ud130\ub294 \ucda9\uc804\uc18c\uc640, \ucda9\uc804\uae30\uc758 \uc815\ubcf4\ub97c \ub530\ub85c \uc81c\uacf5\ud558\ub294 \uac83\uc774 \uc544\ub2cc \uc911\ubcf5\ub41c \ucda9\uc804\uc18c\ub97c \ud3ec\ud568\ud55c \ub370\uc774\ud130\ub97c \ucda9\uc804\uae30 \uac1c\uc218\ub9cc\ud07c\uc778 23\ub9cc\uac1c\uc758 row\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub530\ub77c\uc11c \uc800\ud76c\uac00 ID\ub97c \ub530\ub85c \ubd80\uc5ec\ud558\uac8c \ub41c\ub2e4\uba74, \ucda9\uc804\uc18c\ub97c \uc800\uc7a5\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ubc1b\uc544\uc624\ub294 ID\ub85c \ucda9\uc804\uae30\ub97c \uc5f0\uacb0\ud574\uc918\uc57c\ud558\ub294\ub370 \uadf8\ub807\uac8c \ub41c\ub2e4\uba74 \uc140 \uc218 \uc5c6\uc774 \ub9ce\uc740 \ucffc\ub9ac\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc7a0\uae50 \uc0dd\uac01\ud574\ubcf8\ub2e4\uba74"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ucda9\uc804\uc18c\ub97c \uac01\uac01 \uc800\uc7a5\ud558\uace0 ID\ub97c \ubd80\uc5ec\ubc1b\ub294 \ucffc\ub9ac ",(0,i.kt)("inlineCode",{parentName:"li"},"6\ub9cc\ubc88")," (ID\ub97c \uc54c\uc544\uc640\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 batch\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.)"),(0,i.kt)("li",{parentName:"ol"},"\ucda9\uc804\uc18c\uc5d0\uc11c \ubc1b\uc544\uc628 ID\ub97c \ucda9\uc804\uae30\uc5d0 \ub9e4\ud551\ud558\uace0 \uc800\uc7a5\ud558\ub294 \ucffc\ub9ac ",(0,i.kt)("inlineCode",{parentName:"li"},"\ucd5c\uc18c 1\ubc88")," (\ub9cc\uc57d batch\ub85c 23\ub9cc\uac74\uc744 \ud55c\ubc88\uc5d0 \uc800\uc7a5\ud55c\ub2e4\ub294 \uac00\uc815)")),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc ID\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4\uba74,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ucda9\uc804\uc18c\ub97c \uc800\uc7a5\ud558\ub294 \ucffc\ub9ac ",(0,i.kt)("inlineCode",{parentName:"li"},"\ucd5c\uc18c 1\ubc88")," (\ub9cc\uc57d batch\ub85c 6\ub9cc\uac74\uc744 \ud55c\ubc88\uc5d0 \uc800\uc7a5\ud55c\ub2e4\ub294 \uac00\uc815)"),(0,i.kt)("li",{parentName:"ol"},"\ucda9\uc804\uae30\ub97c \uc800\uc7a5\ud558\ub294 \ucffc\ub9ac ",(0,i.kt)("inlineCode",{parentName:"li"},"\ucd5c\uc18c 1\ubc88")," (\ub9cc\uc57d batch\ub85c 23\ub9cc\uac74\uc744 \ud55c\ubc88\uc5d0 \uc800\uc7a5\ud55c\ub2e4\ub294 \uac00\uc815)")),(0,i.kt)("p",null,"23\ub9cc\uac74\uc774 \ub118\ub294 \uc815\ubcf4\ub97c \ud655\uc778\ud588\uc744 \ub54c, ID\ub294 \uc911\ubcf5\ub418\uc9c0 \uc54a\uc558\uace0, \uc911\ubcf5\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4. \uadf8 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ucc98\uc74c \ud55c\ubc88\ub9cc \uc800\uc7a5\ud558\ub294 \uac83\uc774 \uc544\ub2cc \uc8fc\uae30\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c \uc815\ubcf4\ub97c\n\ubc18\uc601\ud574\uc8fc\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," \ud574\uc8fc\uc5b4\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0, ID\ub97c \uadf8\ub300\ub85c \uac00\uc9c0\uace0 \uc788\ub294 \uac83\uc774 \ud6e8\uc52c \ud6a8\uc728\uc801\uc774\ub77c \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc0ac\uc871\uc774 \uae38\uc5c8\uc2b5\ub2c8\ub2e4. \uac01\uc124\ud558\uace0 \uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c ID\ub97c \uc9c1\uc811 \ub123\uc5b4\uc8fc\ub294 \uacbd\uc6b0 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc5d0 \ub300\ud574 \ub9d0\uc500\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"id\ub97c-\uc9c1\uc811-\ub123\uc5b4\uc900-entity\ub97c-\uc800\uc7a5\ud560-\ub54c"},"ID\ub97c \uc9c1\uc811 \ub123\uc5b4\uc900 Entity\ub97c \uc800\uc7a5\ud560 \ub54c"),(0,i.kt)("p",null,"\uba3c\uc800 \uac04\ub2e8\ud55c \uc608\uc81c Entity\ub85c \uc124\uba85\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic class ChargeStation {\n\n    @Id\n    private String stationId;\n\n    private String stationName;\n\n    ...\n}\n\n")),(0,i.kt)("p",null,"\ubcf4\ud1b5\uc758 Entity\uc640 \ub2e4\ub978 \ubd80\ubd84\uc740 Id\ub97c \uc9c1\uc811 \ud560\ub2f9\ud558\uae30 \ub54c\ubb38\uc5d0  ",(0,i.kt)("inlineCode",{parentName:"p"},"@GeneratedValue(strategy = GenerationType.IDENTITY)")," \uc774\ub7ec\ud55c ID \uc0dd\uc131 \uc804\ub7b5\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"save()")," \ucf54\ub4dc\ub97c \ud638\ucd9c\ud558\uba74 \uc5b4\ub5a4 \ucffc\ub9ac\uac00 \ub098\uac00\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc640 \uac19\uc774 \uc544\uc8fc \uac04\ub2e8\ud55c \uc120\ub989\uc5ed \ucda9\uc804\uc18c\ub97c \uc800\uc7a5\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@DataJpaTest\nclass ChargeStationRepositoryTest {\n\n    @Autowired\n    private ChargeStationRepository chargeStationRepository;\n\n    @Test\n    void \ucda9\uc804\uc18c\ub97c_\uc800\uc7a5\ud55c\ub2e4() {\n        ChargeStation station = ChargeStationFixture.\uc120\ub989\uc5ed_\ucda9\uc804\uc18c_\ucda9\uc804\uae30_2\uac1c_\uc0ac\uc6a9\uac00\ub2a5_1\uac1c;\n\n        chargeStationRepository.save(station);\n\n        ChargeStation expect = chargeStationRepository.findByStationId(station.getStationId()).get();\n        assertThat(expect).isEqualTo(station);\n    }\n}\n")),(0,i.kt)("p",null,"\uba3c\uc800 \ucf54\ub4dc\ub9cc \ubcf4\uba74 \uba3c\uc800 ",(0,i.kt)("inlineCode",{parentName:"p"},"chargeStationRepository.save()")," \ud638\ucd9c\uacfc \ud568\uaed8 insert \ucffc\ub9ac 1\ubc88, \uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"chargeStationRepository.findByStationId()"),"\uc5d0\uc11c select \ucffc\ub9ac 1\ubc88\n\ucd1d 2\ubc88 \ubc1c\uc0dd\ud560 \uac83\uc774\ub77c\uace0 \uc720\ucd94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/f48b7f0f-3f39-41ce-8fcd-94b995e95fae",alt:"query-three-times"})),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc608\uc0c1\uacfc \ub2e4\ub974\uac8c \uc704\uc758 \uc0ac\uc9c4\uacfc \uac19\uc774 \ucffc\ub9ac\uac00 \ucd1d 3\ubc88 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uccab\ubc88\uc9f8\ub294 \ud638\ucd9c\ud558\uc9c0 \uc54a\uc740 station id\ub85c station\uc744 \uc870\ud68c\ud558\ub294 \ucffc\ub9ac\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uc720\ub97c \ucc3e\uae30 \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"save()")," \uba54\uc11c\ub4dc\ub97c \ub514\ubc84\uae45 \ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"save-\uc2dc-select-\ucffc\ub9ac\uac00-\ubc1c\uc0dd\ud558\ub294-\uc774\uc720"},"save \uc2dc SELECT \ucffc\ub9ac\uac00 \ubc1c\uc0dd\ud558\ub294 \uc774\uc720"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/b1db00b7-d7fb-4647-912c-6f8e2fe44974",alt:"save-method"}),"\n\ub85c\uc9c1\uc740 \uac04\ub2e8\ud574\ubcf4\uc785\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"isNew()")," \ub97c \ud1b5\ud574 \uc0c8\ub85c\uc6b4 Entity\uc778\uc9c0 \ud655\uc778\ud55c \ud6c4, \uc0c8\ub85c\uc6b4 Entity\ub77c\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"persist()"),", \uc544\ub2c8\ub77c\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"merge()"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager#persist()")," \uba54\uc11c\ub4dc\ub97c \uac04\ub2e8\ud788 \ub9d0\uc500\ub4dc\ub9ac\uba74, \uc0c8\ub85c\uc6b4 Entity\ub97c \uc601\uc18d\ud654\ud558\ub294 \uba54\uc11c\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158\uc774 \ucee4\ubc0b\ub420 \ub54c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager#merge()")," \uba54\uc11c\ub4dc\ub294 \uc900\uc601\uc18d \uc0c1\ud0dc\uc758 Entity\ub97c \uc601\uc18d \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\ub294\ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc774\ub54c \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uac1d\uccb4\ub77c\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc870\ud68c \ud6c4 \uc601\uc18d\ud654\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"merge()"),"\ub97c \ud638\ucd9c\ud558\uae30 \ub54c\ubb38\uc5d0 SELECT \ucffc\ub9ac\uac00 \ubc1c\uc0dd\ud558\uace0, \uc601\uc18d\ud654\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc81c\uac00 \uc800\uc7a5\ud55c \uac1d\uccb4\ub294 \ud655\uc2e4\ud788 \uc0c8\ub85c\uc6b4 Entity\uac00 \ub9de\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",(0,i.kt)("inlineCode",{parentName:"p"},"entityInformation.isNew()")," \uba54\uc11c\ub4dc\ub294 false\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub798\uc11c \uc5b4\ub5a4 \uac83\uc744 \uae30\uc900\uc73c\ub85c \uc0c8\ub85c\uc6b4 Entity\uc778 \uac83\uc744 \uad6c\ubd84\ud558\ub294\uc9c0 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc0c8\ub85c\uc6b4-entity\ub97c-\uad6c\ubd84\ud558\ub294-\uae30\uc900"},"\uc0c8\ub85c\uc6b4 Entity\ub97c \uad6c\ubd84\ud558\ub294 \uae30\uc900"),(0,i.kt)("p",null,"\uc77c\ub2e8, \ub514\ubc84\uae45\uc744 \ud1b5\ud574 isNew \uba54\uc11c\ub4dc\ub97c \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/e4a56694-c623-46d8-badd-3345d557e29f",alt:"is-new"})),(0,i.kt)("p",null,"\uac04\ub2e8\ud569\ub2c8\ub2e4. \uba3c\uc800 Entity\uc5d0 ID\ub97c \uac00\uc838\uc635\ub2c8\ub2e4. \uadf8\ub9ac\uace0 id\uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"primitive")," \ud0c0\uc785\uc778\uc9c0 \ud655\uc778 \ud6c4, \uc544\ub2d0\uacbd\uc6b0 id\uac00 null \uc774\uba74 \uc0c8\ub85c\uc6b4 Entity, \uc544\ub2d0\uacbd\uc6b0 false\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub54c, ",(0,i.kt)("inlineCode",{parentName:"p"},"primitve")," \ud0c0\uc785\uc774\ub77c\uba74, id\uac00 \uc22b\uc790\uc778\uc9c0 \ud655\uc778 \ud6c4 id\uac00 0\uc774\uba74 \uc0c8\ub85c\uc6b4 Entity, \uc544\ub2d0\uacbd\uc6b0 false\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"id\ub97c-\uc9c1\uc811-\ub123\uc5b4\uc8fc\ub294-\uac1d\uccb4\ub294-jpa-\uc0ac\uc6a9\uc744-\ud3ec\uae30\ud574\uc57c\ud560\uae4c"},"ID\ub97c \uc9c1\uc811 \ub123\uc5b4\uc8fc\ub294 \uac1d\uccb4\ub294 JPA \uc0ac\uc6a9\uc744 \ud3ec\uae30\ud574\uc57c\ud560\uae4c?"),(0,i.kt)("p",null,"\uacb0\ub860\ubd80\ud130 \ub9d0\uc500\ub4dc\ub9ac\uba74 \uc544\ub2d9\ub2c8\ub2e4. \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c \uc0c8\ub85c\uc6b4 Entity \uc784\uc744 \uc99d\uba85\ud560 \uc218 \uc788\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"merge()"),"\uac00 \uc544\ub2cc ",(0,i.kt)("inlineCode",{parentName:"p"},"persist()"),"\ub97c \ud638\ucd9c\ud558\ub3c4\ub85d \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uadf8\ub7fc-\uc5b4\ub5bb\uac8c"},"\uadf8\ub7fc \uc5b4\ub5bb\uac8c?"),(0,i.kt)("p",null,"\uba3c\uc800 save() \uba54\uc11c\ub4dc\uc758 \ud544\ub4dc \uc911 ",(0,i.kt)("inlineCode",{parentName:"p"},"JpaEntityInformation"),"\uc774\ub77c\ub294 \ud544\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/d9956fe6-07c7-41a9-9d6b-7c01b5f31c5d",alt:"entity-info"})),(0,i.kt)("p",null,"\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub294 Entity\uc758 \ucd94\uac00 \uc815\ubcf4\ub97c \uc54c\uae30 \uc704\ud574 \ud544\ub4dc\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud574\ub2f9 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uad6c\ud604\uccb4\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"JpaEntityInformationSupport"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JpaMetamodelEntityInformation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JpaPersistableEntityInformation")," \uc774\ub807\uac8c 3\uac1c\uc758 \ud074\ub798\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7fc \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c\ub3c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"isNew()"),"\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc744\uac70\ub77c \ucd94\uce21\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub514\ubc84\uae45\uc744 \ud1b5\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc544\uae4c \uc704\uc758 \uc0ac\uc9c4\uc73c\ub85c \ubcf4\uace0 \uc2e4\uc81c\ub85c \uc2e4\ud589\ub410\ub358 ",(0,i.kt)("inlineCode",{parentName:"p"},"isNew()")," \uba54\uc11c\ub4dc\uc758 \uc8fc\uc778\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"JpaMetamodelEntityInformation")," \ud074\ub798\uc2a4\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud574\ub2f9 \ud074\ub798\uc2a4\ub294 \uc81c\uc678\ud558\uace0 \ub2e4\ub978 \ud074\ub798\uc2a4\ub97c \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba3c\uc800 ",(0,i.kt)("inlineCode",{parentName:"p"},"JpaPersistableEntityInformation")," \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/dc2293c3-2854-4619-9ef6-d08e55b4581b",alt:"is-new-persistable"}),"\n\uc544\uc8fc \uac04\ub2e8\ud558\uac8c entity\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"isNew()"),"\ub97c \ud638\ucd9c\ud55c\ub2e4\uace0 \uc801\ud600\uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",(0,i.kt)("inlineCode",{parentName:"p"},"Persistable")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud55c Entity\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"isNew()")," \ub97c \ud638\ucd9c\ud558\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7fc \ub0a8\uc740 \ud558\ub098\uc758 \ud074\ub798\uc2a4\ub97c \ud655\uc778\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/f1d654c0-e741-4db7-8e7f-4e758c36133a",alt:"info-support"})),(0,i.kt)("p",null,"\uc704 \uc0ac\uc9c4\ucc98\ub7fc \uc774 \ud074\ub798\uc2a4\uac00 Entity \ub9c8\ub2e4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Persistable")," \uad6c\ud604 \uc720\ubb34\uc5d0 \ub530\ub77c \ub3d9\uc801\uc73c\ub85c \uad6c\ud604\uccb4\ub97c \ubcc0\uacbd\ud574\uc8fc\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7fc \ub2f5\uc774 \ub098\uc628 \uac83 \uac19\uc2b5\ub2c8\ub2e4. ID\ub97c \uc9c1\uc811 \ud560\ub2f9\ud558\ub294 Entity\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Persistable"),"\uc744 \uad6c\ud604\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"persistable-\uad6c\ud604\ud558\uae30"},"Persistable \uad6c\ud604\ud558\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic class ChargeStation implements Pesistable{\n\n    @Id\n    private String stationId;\n\n    private String stationName;\n\n    @CreatedDate\n    private LocalDateTime createdTime;\n\n    ...\n\n    @Override\n    public Object getId() {\n        return getStationId();\n    }\n\n    @Override\n    public boolean isNew() {\n        return createdTime == null;\n    }\n}\n")),(0,i.kt)("p",null,"\uac04\ub2e8\ud788 \ub9cc\ub4e4\uc5b4\ubd24\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"@CreatedDate"),"\ub294 Entity\uac00 \ucc98\uc74c \uc601\uc18d\ud654\ub420 \ub54c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774 Entity\uc758 CreateTime \ud544\ub4dc\uac00 null \uc774\uba74 \uc0c8\ub85c\uc6b4 Entity\ub77c\uace0 \ud655\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub7fc \uc774\ub807\uac8c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uace0 \uc544\uae4c \uc2e4\ud589\ud588\ub358 \ud14c\uc2a4\ud2b8\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/car-ffeine/design-system/assets/106640954/ea5db719-9919-42f4-b431-00e14d6fea5e",alt:"solved"})),(0,i.kt)("p",null,"\uae54\ub054\ud558\uac8c \uad6c\ud604\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc6d0\ud558\ub358\ub300\ub85c \ucffc\ub9ac\uac00 2\ubc88 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n\uc774\ub7f0  ",(0,i.kt)("inlineCode",{parentName:"p"},"Persistable"),"\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"@MappedSuperClass"),"\ub97c \ud1b5\ud574 \ub354 \uae54\ub054\ud558\uac8c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub530\ub85c \uc124\uba85\ub4dc\ub9ac\uc9c0\ub294 \uc54a\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,i.kt)("p",null,"JPA\ub294 \ub9ce\uc740 \ud3b8\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud574\uc8fc\ub294 \uac83 \uac19\uc544\ubcf4\uc785\ub2c8\ub2e4. \ucac4\uc9c0\ub9d9\uc2dc\ub2e4."))}u.isMDXComponent=!0}}]);