"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[4194],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(t),b=l,k=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return t?r.createElement(k,o(o({ref:n},i),{},{components:t})):r.createElement(k,o({ref:n},i))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=b;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},28862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const a={slug:41,title:"\uce74\ud398\uc778 \ud300\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec",authors:["jay"],tags:["infra","ec2","cd","aws","zero-time","blue-green"]},o=void 0,u={permalink:"/41",source:"@site/blog/2023-10-18-zero-time-deploy.mdx",title:"\uce74\ud398\uc778 \ud300\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec",description:"\uc548\ub155\ud558\uc138\uc694! \uce74\ud398\uc778\ud300\uc758 \uc81c\uc774\uc785\ub2c8\ub2e4.",date:"2023-10-18T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 18\uc77c",tags:[{label:"infra",permalink:"/tags/infra"},{label:"ec2",permalink:"/tags/ec-2"},{label:"cd",permalink:"/tags/cd"},{label:"aws",permalink:"/tags/aws"},{label:"zero-time",permalink:"/tags/zero-time"},{label:"blue-green",permalink:"/tags/blue-green"}],readingTime:8.93,hasTruncateMarker:!1,authors:[{name:"\uc81c\uc774",title:"Backend",url:"https://github.com/sosow0212",imageURL:"https://github.com/sosow0212.png",key:"jay"}],frontMatter:{slug:"41",title:"\uce74\ud398\uc778 \ud300\uc758 \ubb34\uc911\ub2e8 \ubc30\ud3ec",authors:["jay"],tags:["infra","ec2","cd","aws","zero-time","blue-green"]},nextItem:{title:"\uce74\ud398\uc778 \uc11c\ube44\uc2a4\uc640 \ud568\uaed8\ud558\ub294 \uc804\uae30\ucc28 \uc5ec\ud589 2",permalink:"/40"}},s={authorsImageUrls:[void 0]},c=[{value:"\uae30\uc874 \ubc30\ud3ec \ubc29\uc2dd\uacfc \ubb38\uc81c\uc810",id:"\uae30\uc874-\ubc30\ud3ec-\ubc29\uc2dd\uacfc-\ubb38\uc81c\uc810",level:2},{value:"\uae30\uc874 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30",id:"\uae30\uc874-\ubb38\uc81c\ub97c-\ud574\uacb0\ud558\uae30",level:2},{value:"backend-deploy.yml",id:"backend-deployyml",level:3},{value:"bluegreen.sh",id:"bluegreensh",level:3}],i={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694! \uce74\ud398\uc778\ud300\uc758 \uc81c\uc774\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc800\ud76c \uce74\ud398\uc778 \ud300\uc5d0\uc11c \ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4.\n\uc5b4\ub5a4 \uacfc\uc815\uc73c\ub85c \uc9c4\ud589\uc744 \ud588\ub294\uc9c0 \uc791\uc131\ud574\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uae30\uc874-\ubc30\ud3ec-\ubc29\uc2dd\uacfc-\ubb38\uc81c\uc810"},"\uae30\uc874 \ubc30\ud3ec \ubc29\uc2dd\uacfc \ubb38\uc81c\uc810"),(0,l.kt)("b",null,"\uba3c\uc800 \uce74\ud398\uc778 \ud300\uc758 \uae30\uc874 \ubc30\ud3ec \ubc29\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("b",null,"Target branch\uc5d0 push"),"\uac00 \ub418\uba74 ",(0,l.kt)("b",null,"Github Actions"),"\uac00 \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"Target branch\uc758 ",(0,l.kt)("b",null,"\uc18c\uc2a4 \ucf54\ub4dc\uac00 \ube4c\ub4dc\ub418\uc5b4\uc11c Docker Hub"),"\uc5d0 \uc62c\ub77c\uac00\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("b",null,"Github Actions\uc758 self-hosted runner"),"\ub97c \ud1b5\ud574 ",(0,l.kt)("b",null,"infra \uc11c\ubc84\uc5d0\uc11c prod \uc11c\ubc84\ub85c \uc811\uadfc"),"\ud558\uc5ec\uc11c ",(0,l.kt)("b",null,"\uae30\uc874\uc5d0 \ub744\uc6cc\uc9c4 \uc11c\ubc84\ub97c \ub2e4\uc6b4")," \uc2dc\ud0b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"Docker Hub\uc5d0 \uc5c5\ub85c\ub4dc\ud55c ",(0,l.kt)("b",null,"Docker image\ub97c pull\ud574\uc11c \uc11c\ubc84\ub97c \uac00\ub3d9"),"\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),"\uc774\ub7f0 \uacfc\uc815\uc73c\ub85c \ubc30\ud3ec \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774 \ubc29\ubc95\uc740 ",(0,l.kt)("b",null,"\uae30\uc874 \uc11c\ubc84\ub97c \ub2e4\uc6b4 \uc2dc\ud0a4\uace0 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\ub97c \ub744\uc6b8 \ub54c \ub2e4\uc6b4 \ud0c0\uc784\uc774 \uc874\uc7ac\ud55c\ub2e4\ub294 \ubb38\uc81c\uc810"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("br",null),"\uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c\ub294 \uc798 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370 \uac11\uc790\uae30 \uc11c\ube44\uc2a4\uac00 \uc791\ub3d9\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uc2e0\ub8b0\uc131\uc774 \ub0ae\uc544\uc9c8 \uc218\ub3c4 \uc788\uace0 \uc774\ub7f0 \uc774\uc720\ub85c \uc774\ud0c8\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uae30\uc874-\ubb38\uc81c\ub97c-\ud574\uacb0\ud558\uae30"},"\uae30\uc874 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30"),(0,l.kt)("p",null,"\uc800\ud76c\ub294 \uba3c\uc800 \uc81c\ud55c\ub41c EC2 \uc778\uc2a4\ud134\uc2a4\ub85c \uc778\ud574 \ub864\ub9c1 \ubc30\ud3ec\uc758 \uc7a5\uc810\uc744 \uac00\uc838\uac08 \uc218 \uc5c6\uc5c8\uace0, \uce74\ub098\ub9ac \ubc29\uc2dd \ub610\ud55c \uc800\ud76c \uc11c\ube44\uc2a4\uc5d0\uc11c \ud544\uc694\ub85c\ud55c \uc804\ub7b5\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \ube44\uad50\uc801 \ub864\ubc31\ub3c4 \ube60\ub978 ",(0,l.kt)("b",null,"Blue/Green")," \uc804\ub7b5\uc744 \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc800\ud76c\uc758 Blue/Green \ubb34\uc911\ub2e8 \ubc30\ud3ec \uc2dc\ub098\ub9ac\uc624\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\ud3b8\uc758\ub97c \uc704\ud574\uc11c ",(0,l.kt)("b",null,"[\uae30\uc874 \uc11c\ubc84(\uae30\uc874 \ud3ec\ud2b8) / \uc0c8\ub85c\uc6b4 \uc11c\ubc84(\uc0c8\ub85c\uc6b4 \ud3ec\ud2b8)]")," \ub77c\ub294 \uba85\uce6d\uc744 \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("b",null,"Target branch\uc5d0 push"),"\uac00 \ub418\uba74 ",(0,l.kt)("b",null,"Github Actions\uac00 \uc791\ub3d9"),"\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"Target branch\uc758 ",(0,l.kt)("b",null,"\uc18c\uc2a4 \ucf54\ub4dc\uac00 \ube4c\ub4dc\ub418\uc5b4\uc11c Docker Hub")," \uc5d0 \uc62c\ub77c\uac00\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("b",null,"Github Actions\uc758 self-hosted runner"),"\ub97c \ud1b5\ud574 ",(0,l.kt)("b",null,"infra \uc11c\ubc84\uc5d0\uc11c prod \uc11c\ubc84\ub85c \uc811\uadfc"),"\ud574\uc11c Docker Hub\uc5d0 \uc5c5\ub85c\ub4dc\ud55c ",(0,l.kt)("b",null,"\uc0c8\ub85c\uc6b4 \ubc84\uc804\uc758 Image\ub97c pull")," \ud574\uc635\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ub9cc\uc57d ",(0,l.kt)("b",null,"8080 \ud3ec\ud2b8\uc5d0 \uae30\uc874 \uc11c\ubc84\uac00 \ub744\uc6cc\uc838 \uc788\uc73c\uba74 8081 \ud3ec\ud2b8\ub97c \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \ub744\uc6cc\uc9c8 \ud3ec\ud2b8\ub85c \uc9c0\uc815"),"\ud574\uc8fc\uace0, \ubc18\ub300\ub85c ",(0,l.kt)("b",null,"8081 \ud3ec\ud2b8\uc5d0 \uae30\uc874 \uc11c\ubc84\uac00 \ub744\uc6cc\uc838 \uc788\uc73c\uba74 8080 \ud3ec\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \ub744\uc6cc\uc9c8 \ud3ec\ud2b8\ub85c \uc9c0\uc815"),"\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ubbf8\ub9ac Docker Hub\uc5d0 \uc5c5\ub85c\ub4dc\ud55c ",(0,l.kt)("b",null,"Docker image\ub97c ","[image+port]","\ub77c\ub294 \ub124\uc774\ubc0d\uc73c\ub85c pull\uc744 \ud55c \ud6c4 \uc0c8\ub85c\uc6b4 \ud3ec\ud2b8\ub85c \uc11c\ubc84\ub97c \uac00\ub3d9"),"\uc2dc\ud0b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \uc81c\ub300\ub85c \uac00\ub3d9 \ub410\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c ",(0,l.kt)("b",null,"\ud5ec\uc2a4 \uccb4\ud06c"),"\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. 20\ubc88 \ub3d9\uc548 \uc11c\ubc84\uac00 \uc815\uc0c1 \ub3d9\uc791\ud558\ub294\uc9c0 Spring Actuactor\ub97c \ud1b5\ud574\uc11c \ud655\uc778\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("b",null,"\uc815\uc0c1 \uc791\ub3d9\uc774 \ub410\uc74c\uc744 \ud655\uc778\ud558\uba74 \ud604\uc7ac \uc778\uc2a4\ud134\uc2a4\uc5d0\ub294 2\ub300\uc758 \uc11c\ubc84"),"\uac00 \ub744\uc6cc\uc838\uc788\uace0 ",(0,l.kt)("b",null,"\uc694\uccad\uc740 \uc5ec\uc804\ud788 \uae30\uc874 \uc11c\ubc84"),"\ub85c \ub4e4\uc5b4\uac00\uac8c \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,l.kt)("b",null,"Nginx\ub97c \ud1b5\ud574 \ud3ec\ud2b8\ud3ec\uc6cc\ub529\uc744 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uc758 \ud3ec\ud2b8\ub85c \uc9c0\uc815"),"\ud574\uc8fc\uace0 ",(0,l.kt)("b",null,"\uae30\uc874 \uc11c\ubc84\ub294 \ub0b4\ub824"),"\uc90d\ub2c8\ub2e4.")),(0,l.kt)("br",null),"\uc5ec\uae30\uae4c\uc9c0\uac00 \uce74\ud398\uc778 \ud300\uc758 \uc2dc\ub098\ub9ac\uc624\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \ud558\ub098\uc529 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc124\uba85\uc740 \uc8fc\uc11d\uc73c\ub85c \ub2ec\uc544\ub450\uaca0\uc2b5\ub2c8\ub2e4 :)",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"backend-deployyml"},"backend-deploy.yml"),(0,l.kt)("p",null,"(Github Actions\uc5d0\uc11c \uc0ac\uc6a9)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'name: deploy\n\n# 1. prod/backend branch\uc5d0 push \uc791\uc5c5\uc774 \uc77c\uc5b4\ub098\uba74 \ud574\ub2f9 \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4\non:\n  push:\n    branches:\n      - prod/backend\n\njobs:\n  docker-build:\n    runs-on: ubuntu-latest\n    defaults:\n      run:\n        working-directory: ./backend\n\n    steps:\n      # 2. \ub3c4\ucee4 \ud5c8\ube0c\uc5d0 \ub85c\uadf8\uc778\n      - name: Log in to Docker Hub\n        uses: docker/login-action@f4ef78c080cd8ba55a85445d5b36e214a81df20a\n        with:\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_PASSWORD }}\n      - uses: actions/checkout@v3\n\n      # 3. JDK 17 \uc124\uce58 \ubc0f \ube4c\ub4dc (\ud504\ub85c\uc81d\ud2b8 Java version)\n      - name: Set up JDK 17\n        uses: actions/setup-java@v3\n        with:\n          java-version: \'17\'\n          distribution: \'adopt\'\n\n      - name: Gradle Caching\n        uses: actions/cache@v3\n        with:\n          path: |\n            ~/.gradle/caches\n            ~/.gradle/wrapper\n          key: ${{ runner.os }}-gradle-${{ hashFiles(\'**/*.gradle*\', \'**/gradle-wrapper.properties\') }}\n          restore-keys: |\n            ${{ runner.os }}-gradle-\n\n      - name: Grant execute permission for gradlew\n        run: chmod +x gradlew\n          - name: Build for asciiDoc\n              run: ./gradlew bootjar\n\n      - name: Build with Gradle\n        run: ./gradlew bootjar\n\n      # 4. \uc0b0\ucd9c\ubb3c\uc744 Image\ub85c \ube4c\ub4dc \ud6c4 Docker Hub\uc5d0 Image Push\ud558\uae30\n      - name: Extract metadata (tags, labels) for Docker\n        id: meta\n        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7\n        with:\n          images: woowacarffeine/backend\n\n      - name: Build and push Docker image\n        uses: docker/build-push-action@3b5e8027fcad23fda98b2e3ac259d8d67585f671\n        with:\n          context: .\n          file: ./backend/Dockerfile\n          push: true\n          platforms: linux/arm64\n          tags: woowacarffeine/backend:latest\n          labels: ${{ steps.meta.outputs.labels }}\n\n\n  deploy:\n    # 5. Self-hosted \uc791\ub3d9 -> infra \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c \uc791\ub3d9\ub428\n    runs-on: self-hosted\n    if: ${{ needs.docker-build.result == \'success\' }}\n    needs: [ docker-build ]\n    steps:\n\n      # 6. infra \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c prod \uc778\uc2a4\ud134\uc2a4\ub85c \uc811\uadfc (\uc544\ub798\ubd80\ud130\ub294 prod \uc11c\ubc84 \ub0b4\uc5d0\uc11c \uc791\uc5c5)\n      - name: Join EC2 prod server\n        uses: appleboy/ssh-action@master\n        env:\n          JASYPT_KEY: ${{ secrets.JASYPT_KEY }}\n          DATABASE_USERNAME: ${{ secrets.DATABASE_USERNAME }}\n          DATABASE_PASSWORD: ${{ secrets.DATABASE_PASSWORD }}\n        with:\n          host: ${{ secrets.SERVER_HOST }}\n          username: ${{ secrets.SERVER_USERNAME }}\n          key: ${{ secrets.SERVER_KEY }}\n          port: ${{ secrets.SERVER_PORT }}\n          envs: JASYPT_KEY, DATABASE_USERNAME, DATABASE_PASSWORD\n\n          script: |\n\n            # 7. Docker Hub\uc5d0\uc11c Image\ub97c pull\ud574\uc628\ub2e4\n            sudo docker pull woowacarffeine/backend:latest\n\n            # 8. \ub9cc\uc57d 8080 \ud3ec\ud2b8\uac00 \ucf1c\uc838 \uc788\uc73c\uba74 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uc758 \ud3ec\ud2b8\ub294 8081\ub85c \uc124\uc815\n            if sudo docker ps | grep ":8080"; then\n              export BEFORE_PORT=8080\n              export NEW_PORT=8081\n              export NEW_ACTUATOR_PORT=8089\n\n            # 9. \ub9cc\uc57d 8081 \ud3ec\ud2b8\uac00 \ucf1c\uc838 \uc788\uc73c\uba74 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uc758 \ud3ec\ud2b8\ub294 8080\ub85c \uc124\uc815\n            else\n              export BEFORE_PORT=8081\n              export NEW_PORT=8080\n              export NEW_ACTUATOR_PORT=8088\n            fi\n\n            # 10. Docker\ub85c \uc0c8\ub85c\uc6b4 \uc11c\ubc84\ub97c \ub744\uc6b4\ub2e4.\n            sudo docker run -d -p $NEW_PORT:8080 -p $NEW_ACTUATOR_PORT:8088 \\\n            -e "SPRING_PROFILE=prod" \\\n            -e "ENCRYPT_KEY=${{secrets.JASYPT_KEY}}" \\\n            -e "DATABASE_USERNAME=${{secrets.DATABASE_USERNAME}}" \\\n            -e "DATABASE_PASSWORD=${{secrets.DATABASE_PASSWORD}}" \\\n            -e "REPLICA_DATABASE_USERNAME=${{secrets.REPLICA_DB_USER_NAME}}" \\\n            -e "REPLICA_DATABASE_PASSWORD=${{secrets.REPLICA_DB_USER_PASSWORD}}" \\\n            -e "SLACK_WEBHOOK_URL=${{secrets.SLACK_WEBHOOK_URL}}" \\\n            --name backend$NEW_PORT \\\n            woowacarffeine/backend:latest\n\n            # 11. prod \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc788\ub294 bluegreen.sh \ub97c \uc791\ub3d9\ud55c\ub2e4. (\uc774 \ub54c port \uac12\uc744 \uac19\uc774 \ub123\uc5b4\uc900\ub2e4.)\n            sudo sh /home/ubuntu/bluegreen.sh $BEFORE_PORT $NEW_PORT $NEW_ACTUATOR_PORT\n\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"bluegreensh"},"bluegreen.sh"),(0,l.kt)("p",null,"(prod \uc778\uc2a4\ud134\uc2a4 \ub0b4\ubd80\uc5d0 \uc874\uc7ac)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# 1. Github Actions\ub97c \ud1b5\ud574 \ub118\uaca8 \ubc1b\uc740 \ud658\uacbd\ubcc0\uc218 \uac12\nBEFORE_PORT=$1\nNEW_PORT=$2\nNEW_ACTUATOR_PORT=$3\n\necho "\uae30\uc874 \ud3ec\ud2b8 : $BEFORE_PORT"\necho "\uc0c8\ub85c\uc6b4 \ud3ec\ud2b8: $NEW_PORT"\necho "\uc0c8\ub85c\uc6b4 ACTUATOR_PORT: $NEW_ACTUATOR_PORT"\n\n\n# 2. 20\ubc88 \ub3d9\uc548 \ud5ec\uc2a4 \uccb4\ud06c\ub97c \uc9c4\ud589\ncount=0\nfor count in {0..20}\ndo\n  echo "\uc11c\ubc84 \uc0c1\ud0dc \ud655\uc778(${count}/20)";\n\n  # 3. \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \uc791\ub3d9\ub418\ub294\uc9c0 Actuator\ub97c \ud1b5\ud574 \uac12\uc744 \ubc1b\uc544\uc634\n  STATUS=$(curl -s http://127.0.0.1:${NEW_ACTUATOR_PORT}/actuator/health-check)\n\n  # 4. Actuator\ub97c \ud1b5\ud574 \uc131\uacf5\uc801\uc73c\ub85c \uc11c\ubc84\uac00 \ub744\uc6cc\uc9c0\uc9c0 \uc54a\uc740 \uacbd\uc6b0\n  if [ "${STATUS}" != \'{"status":"up"}\' ]\n    then\n        # 5. 10\ucd08\ub97c \uae30\ub2e4\ub9b0 \ud6c4 \ub2e4\uc2dc \ud5ec\uc2a4 \uccb4\ud06c\ub97c \uc9c4\ud589\ud55c\ub2e4.\n        sleep 10\n        continue\n    else\n        # 6. \ud5ec\uc2a4 \uccb4\ud06c\ub97c \ud1b5\ud574 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc791\ub3d9\ub41c\ub2e4\uba74 \uba48\ucd98\ub2e4.\n        break\n  fi\ndone\n\n\n# 7. 20\ubc88\uc758 \ud5ec\uc2a4 \uccb4\ud06c\ub97c \ud558\ub294 \ub3d9\uc548 \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \uc81c\ub300\ub85c \uc791\ub3d9\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc885\ub8cc\nif [ $count -eq 20 ]\nthen\n    echo "\uc0c8\ub85c\uc6b4 \uc11c\ubc84 \ubc30\ud3ec\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."\n    exit 1\nfi\n\n\n# 8. \uc0c8\ub85c\uc6b4 \uc11c\ubc84\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc791\ub3d9\ud55c \uacbd\uc6b0\n# Nginx\ub97c \ud1b5\ud574 \ud3ec\ud2b8\ud3ec\uc6cc\ub529\uc744 \uae30\uc874 \ud3ec\ud2b8\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc900\ub2e4.\n# \uc774 \ubd80\ubd84\uc740 .inc \ud30c\uc77c\uc744 \ud1b5\ud574 Nginx\uc5d0\uc11c \uc8fc\uc785 \ubc1b\uc544\uc11c \ud3ec\ud2b8\ub9cc \ubcc0\uacbd\ud574\ub3c4 \ub429\ub2c8\ub2e4!\nexport BACKEND_PORT=$NEW_PORT\nenvsubst \'${BACKEND_PORT}\' < backend.template > backend.conf\nsudo mv backend.conf /etc/nginx/conf.d/\nsudo nginx -s reload\n\n\n# 9. \uae30\uc874 \uc11c\ubc84\ub97c \ub0b4\ub824\uc8fc\uace0, \ub3c4\ucee4 \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud574\uc900\ub2e4\ndocker stop backend$BEFORE_PORT\nsudo docker container prune -f\n')),(0,l.kt)("p",null,"\uc774\ub807\uac8c \uce74\ud398\uc778 \ud300\uc5d0\uc11c\ub294 \ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \ub3c4\uc785\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uae34 \uae00 \uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4 :)"))}d.isMDXComponent=!0}}]);