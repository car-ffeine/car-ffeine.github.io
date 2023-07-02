"use strict";(self.webpackChunkcar_ffeine=self.webpackChunkcar_ffeine||[]).push([[9450],{6029:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"3","metadata":{"permalink":"/3","source":"@site/blog/2023-07-02-nunu-java-version.mdx","title":"Java 17 \uc744 \ub3c4\uc785\ud55c \uc774\uc720","description":"\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4\uc5d0\uc11c \uc790\ubc14 11\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub108\ubb34 \uc775\uc219\ud574\uc9c4 \uc0c1\ud669\uc774\uc5b4\uc11c, java 11 \ub300\uc2e0 java 17\uc744 \uc4f0\ub824\uba74 \uc4f0\ub294 \ub300\uc2e0, \uc65c java 17\uc744 \uc4f0\uba74 \uc88b\uc740\uc9c0\uc5d0 \ub300\ud574\uc11c \uc124\ub4dd\uc744 \ud558\ub294 \uc2dc\uac04\uc774 \uc788\uc5b4\uc57c \ud558\ub294\ub370\uc694","date":"2023-07-02T00:00:00.000Z","formattedDate":"July 2, 2023","tags":[{"label":"java17","permalink":"/tags/java-17"},{"label":"java11","permalink":"/tags/java-11"},{"label":"record","permalink":"/tags/record"},{"label":"toList","permalink":"/tags/to-list"},{"label":"gc","permalink":"/tags/gc"}],"readingTime":5.865,"hasTruncateMarker":false,"authors":[{"name":"\ub204\ub204","title":"Backend","url":"https://github.com/be-student","imageURL":"https://github.com/be-student.png","key":"nunu"}],"frontMatter":{"slug":"3","title":"Java 17 \uc744 \ub3c4\uc785\ud55c \uc774\uc720","authors":["nunu"],"tags":["java17","java11","record","toList","gc"]},"nextItem":{"title":"git branch \uc804\ub7b5 \uc791\uc131\ud574\ubcf4\uae30","permalink":"/2"}},"content":"\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4\uc5d0\uc11c \uc790\ubc14 11\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub108\ubb34 \uc775\uc219\ud574\uc9c4 \uc0c1\ud669\uc774\uc5b4\uc11c, java 11 \ub300\uc2e0 java 17\uc744 \uc4f0\ub824\uba74 \uc4f0\ub294 \ub300\uc2e0, \uc65c java 17\uc744 \uc4f0\uba74 \uc88b\uc740\uc9c0\uc5d0 \ub300\ud574\uc11c \uc124\ub4dd\uc744 \ud558\ub294 \uc2dc\uac04\uc774 \uc788\uc5b4\uc57c \ud558\ub294\ub370\uc694\\n\\n\ucc98\uc74c\uc5d0\ub294 \ub2e8\uc21c\ud788 record \ud074\ub798\uc2a4\uac00 \uc88b\uc544\uc694, collect(Collectors.toList()); \ub300\uc2e0 toList() \ub9cc\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc788\uc5b4\uc11c \uc88b\uc544\uc694\\n\\n\uae4c\uc9c0\ubc16\uc5d0 \uc124\uba85\ud560 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\uac83\ub9cc\uc73c\ub85c \ub3d9\uc758\ub97c \ud574\uc918\uc11c \uc77c\ub2e8 java 17 \uc744 \uc0ac\uc6a9\ud558\uae30\ub85c \ud588\uc9c0\ub9cc, \uc774\ubc88 \uae30\ud68c\uc5d0 \uc870\uae08 \ub354 \uc790\uc138\ud558\uac8c \uc54c\uc544\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4\\n\\n## Java 17 \uacfc Java 11\uc758 \uc911\uc694\ud55c \ucc28\uc774\ub4e4\\n\\n\uae30\ub2a5\uc801\uc778 \ubd80\ubd84\uacfc, \uc228\uaca8\uc9c4 \ubd80\ubd84\uc744 \ub098\ub204\uc5b4\ubcfc \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n## \uae30\ub2a5\uc801\uc778 \ucc28\uc774\uc810\\n\\n\uc5b8\uc81c\ub098 \uc9c1\uc811 \ucc28\uc774\ub97c \ubcf4\uba74 \ub354 \uc9c1\uad00\uc801\uc774\uae30 \ub54c\ubb38\uc5d0, \uc9c1\uc811 \ucf54\ub4dc\ub97c \ubcf4\uba74\uc11c \uc124\uba85\uc744 \ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4\\n\\n### record \ud074\ub798\uc2a4\\n\\n\uac04\ub2e8\ud55c dto \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5c8\uc744 \ub54c \ucf54\ub4dc\uac00 \uc815\ub9d0 \uac04\ub2e8\ud574\uc9c0\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\\n\\n#### Java 11\\n\\n```\\npublic class Dto {\\n    private final int data;\\n\\n    public Dto(int data) {\\n        this.data = data;\\n    }\\n\\n    public int getData() {\\n        return data;\\n    }\\n}\\n```\\n\\nlombok \uc744 \uc0ac\uc6a9\ud588\uc744 \ub54c\\n\\n```\\n\\n@Getter\\n@AllArgsConstructor\\npublic class Dto {\\n    private final int data;\\n}\\n```\\n\\n#### Java17\\n\\n```\\npublic record Record(int data) {\\n}\\n```\\n\\n\uc774\ub807\uac8c \ubcf4\uba74 \ud6e8\uc52c \uac04\ub2e8\ud574\uc9c4 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4\\n\\n#### \uc608\uc0c1\ub418\ub294 \ubb38\uc81c\uc810\\n\\nobjectMapper\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5b4\ub5bb\uac8c \ub418\ub098\uc694? noArgsConstructor \uac00 \ud544\uc694\ud558\uc9c0 \uc54a\ub098\uc694?\\n\\n```\\nclass RecordTest {\\n\\n    @Test\\n    void objectMapper_\ub85c_\ubcc0\ud658() throws JsonProcessingException {\\n        // given\\n        ObjectMapper objectMapper = new ObjectMapper();\\n        Record record = new Record(1);\\n\\n        // when\\n        String json = objectMapper.writeValueAsString(record);\\n\\n        // then\\n        assertEquals(\\"{\\\\\\"data\\\\\\":1}\\", json);\\n    }\\n\\n    @Test\\n    void string_\uc5d0\uc11c_\uac1d\uccb4\ub85c_\ubcc0\ud658() throws JsonProcessingException {\\n        // given\\n        String json = \\"{\\\\\\"data\\\\\\":1}\\";\\n        ObjectMapper objectMapper = new ObjectMapper();\\n\\n        // when\\n        Record record = objectMapper.readValue(json, Record.class);\\n\\n        // then\\n        assertEquals(1, record.data());\\n    }\\n}\\n```\\n\\n\uc774 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \uac83\ucc98\ub7fc \uc131\uacf5\uc801\uc73c\ub85c deserialize, serialize \uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4\\n\\n### toList() method\\n\\n#### Java 11\\n\\n\uc774 \ubd80\ubd84\ub3c4 \uc815\ub9d0 \ud3b8\uc758\uc131\uc774 \ub192\ub2e4\uace0 \uc0dd\uac01\ud558\ub294 \ubd80\ubd84 \uc911 \ud558\ub098\uc778\ub370\uc694\\n\\nCollectors.toList() \ub300\uc2e0 toList() \ub9cc\uc73c\ub85c\ub3c4 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4\\n\\n```\\npublic class ToListWith11 {\\n\\n    public static void main(String[] args) {\\n        List<Integer> list = List.of(1, 2, 3, 4, 5);\\n        List<Integer> result = list.stream()\\n                .filter(i -> i > 3)\\n                .collect(Collectors.toList());\\n        System.out.println(result);\\n    }\\n}\\n```\\n\\n#### Java 17\\n\\n```\\npublic class ToListWith17 {\\n\\n    public static void main(String[] args) {\\n        List<Integer> list = List.of(1, 2, 3, 4, 5);\\n        List<Integer> result = list.stream()\\n                .filter(i -> i > 3)\\n                .toList();\\n        System.out.println(result);\\n    }\\n}\\n```\\n\\n### switch expression\\n\\n#### Java 11\\n\\n\uc6b0\ud14c\ucf54\uc5d0\uc11c\ub294 switch, case \ub97c \uc2eb\uc5b4\ud558\uae30\uc5d0 \ubcfc \uc218\ub294 \uc5c6\uaca0\uc9c0\ub9cc\\n\\nswitch \ubb38\uc5d0\ub3c4 \uc815\ub9d0 \ud3b8\ud558\uac8c \ubc14\ub00c\uc5c8\ub294\ub370\uc694\\n\\n```\\npublic class SwitchWith11 {\\n\\n    public static void main(String[] args) {\\n        String day = \\"Sunday\\";\\n        int result = 0;\\n        switch (day) {\\n            case \\"Monday\\":\\n                result = 1;\\n                break;\\n            case \\"Tuesday\\":\\n                result = 2;\\n                break;\\n            case \\"Wednesday\\":\\n                result = 3;\\n                break;\\n            case \\"Thursday\\":\\n                result = 4;\\n                break;\\n            case \\"Friday\\":\\n                result = 5;\\n                break;\\n            case \\"Saturday\\":\\n                result = 6;\\n                break;\\n            case \\"Sunday\\":\\n                result = 7;\\n                break;\\n        }\\n        System.out.println(result);\\n    }\\n}\\n```\\n\\n#### Java 17\\n\\n```\\npublic class SwitchWith17 {\\n\\n    public static void main(String[] args) {\\n        String day = \\"Sunday\\";\\n        int result = switch (day) {\\n            case \\"Monday\\" -> 1;\\n            case \\"Tuesday\\" -> 2;\\n            case \\"Wednesday\\" -> 3;\\n            case \\"Thursday\\" -> 4;\\n            case \\"Friday\\" -> 5;\\n            case \\"Saturday\\" -> 6;\\n            case \\"Sunday\\" -> 7;\\n            default -> 0;\\n        };\\n        System.out.println(result);\\n    }\\n}\\n```\\n\\n\ucf54\ub4dc \ub7c9\uc774 \uc5c4\uccad \uc904\uc5b4\ub4e0 \uac83\uc744 \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4\\n\\n### instanceof pattern matching\\n\\n\ubb3c\ub860 instanceof \ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uac00 \ub9ce\uc740\uac00? \ud558\uba74 \ub9ce\uc9c0\ub294 \uc54a\uaca0\uc9c0\ub9cc\\n\\n\uc544\ub798\uc640 \uac19\uc774 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4\\n\\n#### Java 11\\n\\n```\\npublic class InstanceOfWith11 {\\n\\n    public static void main(String[] args) {\\n        Object obj = \\"Hello\\";\\n        if (obj instanceof String) {\\n            String str = (String) obj;\\n            System.out.println(str.toUpperCase());\\n        }\\n    }\\n}\\n```\\n\\n#### Java 17\\n\\n```\\npublic class InstanceOfWith17 {\\n\\n    public static void main(String[] args) {\\n        Object obj = \\"Hello\\";\\n        if (obj instanceof String str) {\\n            System.out.println(str.toUpperCase());\\n        }\\n    }\\n}\\n```\\n\\n### number format\\n\\n\uc774 \uae30\ub2a5\uc740 12\uc5d0 \ub098\uc654\ub294\ub370\uc694\\n\\n\uc5b8\uc5b4\ubcc4\ub85c \uc22b\uc790\ub97c \ud45c\ud604\ud558\ub294 \ubc29\uc2dd\uc774 \ub2e4\ub974\uc9c0\ub9cc, \uc27d\uac8c \ud45c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4\\n\\n#### Java 17\\n\\n```\\npublic class NumberFormatterWith11 {\\n    public static void main(String[] args) {\\n        int number = 1_000_000;\\n\\n        String result = NumberFormat.getCompactNumberInstance(Locale.KOREA, NumberFormat.Style.LONG).format(number);\\n\\n        System.out.println(result.equals(\\"100\ub9cc\\"));\\n    }\\n}\\n```\\n\\n\ub098\uba38\uc9c0 \ubd80\ubd84\uc740 \uc0ac\uc2e4 \uadf8\ub807\uac8c \ud070 \uc5ed\ud560\uc744 \ud560 \uac83 \uac19\uc9c0\ub294 \uc54a\uc544\uc11c \uc0dd\ub7b5\ud558\uaca0\uc2b5\ub2c8\ub2e4\\n\\n## \uc228\uaca8\uc9c4 \ubd80\ubd84\ub4e4\\n\\n![gc throughput](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXhFJg%2Fbtsl9uZOa5R%2FrzrlotCERUqAWM2pknDwq0%2Fimg.png)\\n\\n\uc704\uc758 \uc0ac\uc9c4\uc740 gc \uc758 \ubc84\uc804\ubcc4 \ucc98\ub9ac\ub7c9\uc785\ub2c8\ub2e4.\\n\\nG1 GC \ub97c \uae30\uc900\uc73c\ub85c \ubcf8\ub2e4\uba74 Java8 \uacfc\uc758 \ucc28\uc774\ub294 15% \uc815\ub3c4 \ud5a5\uc0c1\ub418\uc5c8\uace0, java 11\uacfc\ub294 10% \uc815\ub3c4 \ud5a5\uc0c1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n![gc latency](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZusmb%2Fbtsl5jYN68u%2FWCKRCFnYjQK4AjkcHRNAt0%2Fimg.png)\\n\\n\uc704\uc758 \uc0ac\uc9c4\uc740 gc\uc758 \ubc84\uc804\ubcc4 \uc9c0\uc5f0\uc2dc\uac04\uc785\ub2c8\ub2e4.\\n\\nG1 GC \ub97c \uae30\uc900\uc73c\ub85c \ubcf8\ub2e4\uba74 Java8 \uacfc\uc758 \ucc28\uc774\ub294 30% \uc815\ub3c4 \ud5a5\uc0c1\ub418\uc5c8\uace0, java 11\uacfc\ub294 25% \uc815\ub3c4 \ud5a5\uc0c1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\uc640 \uac19\uc774, \ub2e8\uc21c\ud558\uac8c \uc0c8\ub85c\uc6b4 \uae30\ub2a5\ub9cc \ucd94\uac00\ub418\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uafb8\uc900\ud788 \uc131\ub2a5\ub3c4 \ud5a5\uc0c1\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ub7f0 \ubd80\ubd84\uc744 \uace0\ub824\ud588\uc744 \ub54c, Java 17\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\ucc38\uace0\\n\\n-   [https://kstefanj.github.io/2021/11/24/gc-progress-8-17.html](https://kstefanj.github.io/2021/11/24/gc-progress-8-17.html)"},{"id":"2","metadata":{"permalink":"/2","source":"@site/blog/2023-07-01-nunu-gitbranch.mdx","title":"git branch \uc804\ub7b5 \uc791\uc131\ud574\ubcf4\uae30","description":"\ud604\uc7ac \uc0c1\ud669\uc740 \uc5b4\ub5a4\ub370?","date":"2023-07-01T00:00:00.000Z","formattedDate":"July 1, 2023","tags":[{"label":"git","permalink":"/tags/git"},{"label":"branch","permalink":"/tags/branch"},{"label":"git branch","permalink":"/tags/git-branch"},{"label":"github flow","permalink":"/tags/github-flow"},{"label":"gitlab flow","permalink":"/tags/gitlab-flow"},{"label":"git flow","permalink":"/tags/git-flow"}],"readingTime":10.735,"hasTruncateMarker":false,"authors":[{"name":"\ub204\ub204","title":"Backend","url":"https://github.com/be-student","imageURL":"https://github.com/be-student.png","key":"nunu"}],"frontMatter":{"slug":"2","title":"git branch \uc804\ub7b5 \uc791\uc131\ud574\ubcf4\uae30","authors":["nunu"],"tags":["git","branch","git branch","github flow","gitlab flow","git flow"]},"prevItem":{"title":"Java 17 \uc744 \ub3c4\uc785\ud55c \uc774\uc720","permalink":"/3"},"nextItem":{"title":"Hello World","permalink":"/1"}},"content":"## \ud604\uc7ac \uc0c1\ud669\uc740 \uc5b4\ub5a4\ub370?\\n\\n\ud604\uc7ac \uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4\uc5d0\uc11c\ub294 \ud504\ub860\ud2b8 \ucf54\ub4dc\uc640 \ubc31\uc5d4\ub4dc \ucf54\ub4dc\uac00 \uac19\uc740 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ud504\ub860\ud2b8\uc640 \ubc31\uc5d4\ub4dc\uac00 \uac19\uc774 \uc791\uc5c5\ud558\uae30\uc5d0, \uc758\ub3c4\uce58 \uc54a\uc740 \ucda9\ub3cc\uc774 \uc790\uc8fc \uc0dd\uae38 \uc218 \uc788\ub294 \uad6c\uc870\uc774\uae30\uc5d0, \uc774\ub97c git branch \uc804\ub7b5\uc73c\ub85c \ucda9\ub3cc\uc744 \uc904\uc774\uace0\uc790 \ud569\ub2c8\ub2e4\\n\\n## Git Branch \uc804\ub7b5\uc774\ub780?\\n\\ngit\uc744 \uc0ac\uc6a9\ud574\uc11c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\\n\\n\uc5ec\ub7ec \uac1c\ubc1c\uc790\uac00 \ub3d9\uc2dc\uc5d0 \uc791\uc5c5\ud558\uace0 \ucf54\ub4dc\ub97c \ud1b5\ud569\ud560 \ub54c \uc0dd\uae30\ub294 \ucda9\ub3cc\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc870\uc815\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4.\\n\\n## \uc65c git branch \uc804\ub7b5\uc774 \uc911\uc694\ud55c\ub370?\\n\\n\uc544\ub798\uc5d0 \uc788\ub294 4\uac00\uc9c0\ub97c \uc81c\uc678\ud558\uace0\ub3c4 \ud6e8\uc52c \ub9ce\uc740 \uc7a5\uc810\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### 1\\\\. \ub3d9\uc2dc \uc791\uc5c5\uc774 \ud3b8\ud558\ub2e4\\n\\n\uc5ec\ub7ec \uc0ac\ub78c\uc774 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc791\uc5c5\ud558\uace0, \ucee4\ubc0b\uc744 \ud560 \ub54c, \uc790\uc2e0\uc758 \ube0c\ub79c\uce58\uc5d0\uc11c \ubcc0\uacbd \uc0ac\ud56d\uc744 \ucee4\ubc0b\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n\ube0c\ub79c\uce58\uac00 \ubcd1\ud569\ub420 \ub54c\ub9cc \ucda9\ub3cc\uc744 \ud574\uacb0\ud558\uba74 \ub418\ub2c8, \uc544\ubb34 \uaddc\uce59\uc774 \uc5c6\ub294 \uac83\ubcf4\ub2e4 \ucda9\ub3cc \uc2dc\uc810\uc774 \uba85\ud655\ud574\uc9c0\uae30\uc5d0 \uc0dd\uc0b0\uc131\uc744 \ub192\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### 2\\\\. \ubaa9\uc801\uc774 \uba85\ud655\ud55c \ube0c\ub79c\uce58\\n\\n\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\uc5d0 \uba87 \uac00\uc9c0\uac00 \uc788\ub294\ub370, \uc548\uc815\ub41c \ud504\ub85c\ub355\uc158, \ud14c\uc2a4\ud2b8 \ud658\uacbd, \uae30\ub2a5 \ucd94\uac00 \ud658\uacbd... \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4\\n\\n\uc5ec\ub7ec \uae30\ub2a5\ubcc4 \ube0c\ub79c\uce58(\uc548\uc815\ub41c \ubc84\uc804\uc758 \ucf54\ub4dc\ub9cc\uc774 \uad00\ub9ac\ub418\ub294 \ube0c\ub79c\uce58, \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc744 \uc704\ud55c \ube0c\ub79c\uce58, \uae30\ub2a5 \ucd94\uac00\ub97c \uc704\ud55c \ube0c\ub79c\uce58)\ub97c\\n\\n\ub124\uc774\ubc0d\uc744 \ud1b5\ud574 \uad6c\ubd84\ud558\uba74 \uac01\uac01\uc758 \ube0c\ub79c\uce58\uc5d0 \ub300\ud574\uc11c \ucd94\uac00\uc801\uc778 \uc124\uba85\uc744 \ud560 \ud544\uc694 \uc5c6\uc774 \uba85\ud655\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### 3\\\\. \ubc30\ud3ec \ud30c\uc774\ud504\ub77c\uc778 \uad00\ub9ac\uac00 \ud3b8\ud568\\n\\n\ube0c\ub79c\uce58\uac00 \ub124\uc774\ubc0d\uc73c\ub85c \uba85\ud655\ud558\uac8c \uad6c\ubd84\uc774 \ub418\uc5b4\uc788\ub2e4\uba74, \uc870\uac74\uc744 \uc124\uc815\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4.\\n\\n\ud2b9\uc815 \ud0c0\uc785\uc758 \ube0c\ub79c\uce58\uc5d0 push \ub418\uc5c8\uc744 \ub54c, pull request\ub97c \ub9cc\ub4e4\uc5c8\uc744 \ub54c \uac19\uc740 \uc870\uac74\uc5d0 \ub530\ub978 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ub454\ub2e4\uba74 CI/CD\ub97c \uad6c\ucd95\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4.\\n\\n#### 4\\\\. \ubc84\uc804 \uad00\ub9ac\uac00 \ud3b8\ub9ac\ud558\ub2e4\\n\\n\uc11c\ubc84\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uacbc\uc744 \ub54c, \uc5b4\ub5a4 \ube0c\ub79c\uce58\ub85c \ub3cc\uc544\uac00\uc11c \ub864\ubc31\uc744 \ud574\uc57c \ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uac83\ub4e4\uc774 \uba85\ud655\ud569\ub2c8\ub2e4.\\n\\n\uc548\uc815\ub41c \ube0c\ub79c\uce58\uac00 \uc5b4\ub5a4 \uac83\uc778\uc9c0 \uba85\ud655\ud558\uae30\uc5d0, \ub864\ubc31 \uacfc\uc815\uc5d0 \ub300\ud55c \uc758\uc0ac\uacb0\uc815\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub7ec\uba74 \uc5b4\ub5a4 \uc885\ub958\uac00 \uc788\ub294\uc9c0 \ub354 \uc790\uc138\ud558\uac8c \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n## Git Branch \uc804\ub7b5\uc758 \uc885\ub958\ub294?\\n\\n\ucd1d 3\uac00\uc9c0\uc758 \uc804\ub7b5\uc774 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n1\\\\. Github Flow\\n\\n2\\\\. Gitlab Flow\\n\\n3\\\\. Git Flow\\n\\ngit\uc744 \uc0ac\uc6a9\ud558\uae30\uc5d0, Git Flow\ub77c\ub294 \ub124\uc774\ubc0d\uc774 \uac00\uc7a5 \uc9c1\uad00\uc801\uc774\uace0 \uc720\uba85\ud55c\ub370\uc694.\xa0\\n\\n3\uac00\uc9c0 \uc804\ub7b5 \uc911\uc5d0\uc11c \uac00\uc7a5 \ubcf5\uc7a1\ud558\uae30\uc5d0, \uc26c\uc6b4 \uc21c\uc11c\ub300\ub85c \uc9c4\ud589\ud574 \ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n## 1\\\\. Github Flow\\n\\n\uadf8\ub9bc\uc73c\ub85c flow \uac04\ub2e8\ud558\uac8c \ubcf4\uace0 \uac00\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblgfI6%2FbtslEWRFdaJ%2F3KmwR2yqlfgKk0msnufYNk%2Fimg.png)\\n\\n![img2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtUzxm%2FbtslJ1xWHzy%2FMP0s11FoCTKpqwQnUJUm30%2Fimg.png)\\n\\n\ube0c\ub79c\uce58\ub294 \ucd1d 2\uac00\uc9c0 \uc885\ub958\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4\\n\\n#### 1\\\\. master \ube0c\ub79c\uce58\\n\\n\uc5ec\uae30\uc5d0 \uba38\uc9c0\uac00 \ub418\uba74 \ubc30\ud3ec\uac00 \ub418\ub3c4\ub85d CD\ub97c \uc5f0\uacb0\ud574 \ub193\uc740 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4.\\n\\n\uc548\uc815\ub41c \ubc84\uc804\uc758 \ucf54\ub4dc\uac00 \uad00\ub9ac\ub418\ub294 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4.\\n\\n#### 2\\\\. feature \ube0c\ub79c\uce58\\n\\n\uae30\ub2a5 \ucd94\uac00, \ubc84\uadf8 \uc218\uc815 \ub4f1 \ubaa8\ub4e0 \uc791\uc5c5\uc740 feature \ube0c\ub79c\uce58\uc5d0\uc11c \uc77c\uc5b4\ub0a9\ub2c8\ub2e4.\\n\\nmaster \ube0c\ub79c\uce58\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ube0c\ub79c\uce58\ub97c \ub9cc\ub4e4\uc5b4\uc11c, \ub9c8\uc2a4\ud130\ub85c \uba38\uc9c0\ub418\ub294 \ub2e8\uc21c\ud55c \uc0ac\uc774\ud074\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### \uc7a5\uc810\\n\\n\uc704\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \uac83\ucc98\ub7fc 2\uc885\ub958\uc758 \ube0c\ub79c\uce58\ub9cc \uc788\uae30\uc5d0, \uc815\ub9d0 \uac04\ub2e8\ud569\ub2c8\ub2e4.\\n\\n\ud559\uc2b5 \uacfc\uc815\uae4c\uc9c0\uc758 \ub7ec\ub2dd \ucee4\ube0c\uac00 \uac70\uc758 \uc5c6\ub2e4\uc2dc\ud53c \ud558\uae30\uc5d0, \uac04\ub2e8\ud55c \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud558\uae30 \uc815\ub9d0 \uc88b\uc2b5\ub2c8\ub2e4.\\n\\n\ub9b4\ub9ac\uc988 \ub418\uc9c0 \uc54a\uc740 \ucf54\ub4dc\uac00 \ucd5c\uc18c\ud654\ub429\ub2c8\ub2e4. \ucd5c\uc2e0 \ubc84\uc804\uc758 \ucf54\ub4dc\uc640 \ucd5c\ub300\ud55c \ube60\ub974\uac8c \ub3d9\uae30\ud654\ub97c \uacc4\uc18d\ud574\uc11c \uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4\\n\\n#### \ub2e8\uc810\\n\\n\ubaa8\ub4e0 \ucf54\ub4dc\ub294 \ub2e4 master \ube0c\ub79c\uce58\uc5d0 \uba38\uc9c0\uac00 \ub418\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc810\uc774 \uac1c\ubc1c \uc11c\ubc84\uc640, \uc6b4\uc601\uc11c\ubc84\ub97c \ub098\ub204\uae30 \uc560\ub9e4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uac1c\ubc1c \uc11c\ubc84\uc5d0 \ubc30\ud3ec\ub97c \ud558\uace0 \uc2f6\uc740 \uc0c1\ud669\uc774\ub77c\uba74, master\uc5d0 \uba38\uc9c0\uac00 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.\\n\\n\uba38\uc9c0\uac00 \ub41c \uc774\ud6c4\uc5d0 cd \ud30c\uc774\ud504\ub77c\uc778\uc744 \ud1b5\ud574\uc11c \uac1c\ubc1c \uc11c\ubc84\uc640 \uc6b4\uc601 \uc11c\ubc84 \ubaa8\ub450\uc5d0 \ubc30\ud3ec\uac00 \ub429\ub2c8\ub2e4.\\n\\n\uc5ec\ub7ec \ud658\uacbd\uc744 \ub098\ub204\uace0 \uad00\ub9ac\ub97c \ud558\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 \ub2e4\uc74c\uc5d0 \uc18c\uac1c\ud574\ub4dc\ub9b4 \uc804\ub7b5\uc744 \uc0ac\uc6a9\ud574 \ubcf4\uc154\ub3c4 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4\\n\\n## 2\\\\. Gitlab Flow\\n\\n\uadf8\ub9bc\uc73c\ub85c flow \uac04\ub2e8\ud558\uac8c \ubcf4\uace0 \uac00\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n![img2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdlarwn%2FbtslKkYqqTR%2FXi8NnZIEXahoVFusk0xV31%2Fimg.png)\\n\\n\ubc11\uc5d0 \ud658\uacbd\uc740 \ucd1d 2\uac1c\uc758 \uc11c\ubc84\uac00 \uc874\uc7ac\ud560 \ub54c\ub97c \uac00\uc815\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n1\\\\. pre-production \uc11c\ubc84\\n\\n2\\\\. production \uc11c\ubc84\\n\\n\ud3b8\uc758\ub97c \uc704\ud574 main\uc5d0 \uba38\uc9c0\ub418\ub294 \uacfc\uc815\uc740 \uac04\ub2e8\ud558\uac8c \ud45c\ud604\ud588\uc2b5\ub2c8\ub2e4.\\n\\n![img3](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdbkNc9%2FbtslJ0MBrWb%2F0CT7DVQoCDFOpbqyAko9mk%2Fimg.png)\\n\\n#### \ube0c\ub79c\uce58 \uc885\ub958\\n\\n\ucd1d 3\uac00\uc9c0 \ube0c\ub79c\uce58\uac00 \ud544\uc694\ud558\uace0, \ucd94\uac00\uc5d0 \ub530\ub77c\uc11c \ub354 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n1\\\\. main(or develop) \ube0c\ub79c\uce58\\n\\n\uae30\ub2a5\uc5d0 \ub300\ud55c \uac1c\ubc1c\uc774 \uc644\ub8cc\ub418\uc5c8\uc9c0\ub9cc, \uc5ec\uae30\uc5d0 \uba38\uc9c0\ub418\uc5b4\ub3c4 \ubc14\ub85c \ubc30\ud3ec\ub418\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.\\n\\n2\\\\. feature\ube0c\ub79c\uce58\\n\\n\uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\ub294 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4. Github Flow \uc640\ub3c4 \uc720\uc0ac\ud569\ub2c8\ub2e4.\\n\\n3\\\\. production \ube0c\ub79c\uce58\\n\\n\uc2e4\uc81c \ubc30\ud3ec\uac00 \uc77c\uc5b4\ub098\ub294 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4.\xa0\\n\\n\uc5ec\uae30\uc5d0 \uba38\uc9c0\uac00 \ub418\ub294 \uc21c\uac04 \ubc30\ud3ec\uac00 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4.\\n\\n\uc704 \uc0ac\uc9c4\uc5d0 \uc788\ub294 \uac83\ucc98\ub7fc, \ud544\uc694\uc5d0 \ub530\ub77c\uc11c pre-production\uc774\ub098, staging \uac19\uc740 \ud658\uacbd\uc5d0 \ub530\ub978 \ube0c\ub79c\uce58\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### \ud2b9\uc9d5\\n\\n1\\\\. \ubb34\uc870\uac74 \ub2e8\ubc29\ud5a5\uc73c\ub85c \uba38\uc9c0\uac00 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4.\\n\\n\uae34\uae09\ud558\uac8c \ub77c\uc774\ube0c \uc11c\ubc84\uc5d0 \uc218\uc815\uc744 \ud574\uc57c \ud560 \ub54c, production \ubd80\ud130 \uc2dc\uc791\ud558\ub294 \uac83\uc774 \uc544\ub2cc, main \ubd80\ud130 \ucc28\uadfc\ucc28\uadfc \uc62c\ub77c\uac00\uc57c \ud569\ub2c8\ub2e4\\n\\n2\\\\. \ud658\uacbd\uc5d0 \ub530\ub77c \ube0c\ub79c\uce58 \uc885\ub958\uac00 \ub298\uc5b4\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc704 \uc0ac\uc9c4\uc5d0\uc11c\ub294 pre-production \uc774 \uadf8 \uc608\uc2dc\uac00 \ub418\uaca0\ub124\uc694.\\n\\n#### \uc7a5\uc810\\n\\n1\\\\. Github Flow\uc5d0\uc11c \ud658\uacbd\ubcc4 \ube0c\ub79c\uce58\ub97c \ud1b5\ud574\uc11c \uac1c\ubc1c \uc11c\ubc84\ub098 pre-production \uc11c\ubc84\uc5d0 \ubc84\uc804\uc744 \uae54\ub054\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n## 3\\\\. Git Flow\\n\\n\ube0c\ub79c\uce58 \uc804\ub7b5 \uc911 \uac00\uc7a5 \ucc98\uc74c\uc73c\ub85c \uc720\uba85\ud574\uc9c4 \ube0c\ub79c\uce58 \uc804\ub7b5\uc785\ub2c8\ub2e4.\\n\\n\ubc30\ud3ec\uac00 \ud2b9\uc815 \uc8fc\uae30\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc77c \ub54c, \uac00\uc7a5 \uc801\ud569\ud569\ub2c8\ub2e4.\\n\\n\uac00\uc7a5 \ubcf5\uc7a1\ud55c \uc804\ub7b5\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\uc11c, \ubaa8\ub450\uac00 \ube0c\ub79c\uce58 \uc804\ub7b5\uc5d0 \ub300\ud574\uc11c \uc774\ud574\ud558\uace0 \uc788\ub2e4\uba74 \uc5ed\ud560\uc5d0 \ub530\ub978 \uae54\ub054\ud55c \ubd84\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4\\n\\n\uadf8\ub9bc\uc73c\ub85c \ubcf4\uace0 \uac00\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4\\n\\n![img4](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd9WzKn%2FbtslKdkAHNP%2F2fCAqKSVxtPVWqYnBS8juk%2Fimg.png)\\n\\n\uac00\uc7a5 \uc720\uba85\ud55c \ube0c\ub79c\uce58 \uc804\ub7b5\uc774\uc9c0\ub9cc, \uac00\uc7a5 \uc5b4\ub824\uc6b4 \uc804\ub7b5\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4.\\n\\n#### \ud2b9\uc9d5\\n\\n1\\\\. \ube0c\ub79c\uce58\uc5d0 \ub300\ud574\uc11c \uc591\ubc29\ud5a5\uc73c\ub85c \uba38\uc9c0\uac00 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4\\n\\nrelease \ube0c\ub79c\uce58\uc5d0\uc11c \ubc84\uadf8 \uc218\uc815\uc774 \uc77c\uc5b4\ub098\uba74, develop \ube0c\ub79c\uce58\uc5d0\ub3c4 \uba38\uc9c0\ud574\uc918\uc57c \ud569\ub2c8\ub2e4.\\n\\nhotfix \ube0c\ub79c\uce58\ub97c main \ube0c\ub79c\uce58\ubfd0\ub9cc \uc544\ub2c8\ub77c, develop \ube0c\ub79c\uce58\uc5d0\ub3c4 \uba38\uc9c0\ud574\uc918\uc57c \ud569\ub2c8\ub2e4\\n\\n\ube0c\ub79c\uce58\uc758 \uc885\ub958\uac00 5\uac00\uc9c0\ub098 \ub429\ub2c8\ub2e4\\n\\n1\\\\. main\\n\\nproduction \uc774 \ubc30\ud3ec\ub418\uc5c8\uc744 \ub54c, \uc774 \ube0c\ub79c\uce58\uc5d0 \uba38\uc9c0\ub418\ub294 \uac83\uc774 \uae30\uc900\uc774 \ub429\ub2c8\ub2e4.\\n\\n2\\\\. develop\xa0\\n\\n\uc704\uc5d0\uc11c \uc124\uba85\ub4dc\ub838\ub358 \ube0c\ub79c\uce58\ub4e4\uacfc \ud070 \ucc28\uc774\uac00 \uc5c6\uc774 \ubc30\ud3ec \uc804 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4.\\n\\n3\\\\. feature\\n\\n\uae30\ub2a5\uc744 \uac1c\ubc1c\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4. \uc774\uac83\ub3c4 \uc704\uc640 \ud070 \ucc28\uc774\uac00 \uc5c6\uc2b5\ub2c8\ub2e4\\n\\n4\\\\. release\\n\\nGitlab Flow\uc5d0\uc11c pre-production\uc5d0 \ud574\ub2f9\ud55c\ub2e4\uace0 \ubd10\ub3c4 \ubb34\ubc29\ud569\ub2c8\ub2e4.\\n\\n\uc5ec\uae30\uc11c \ubc84\uadf8 \uc218\uc815\uc774 \uc77c\uc5b4\ub0ac\uc744 \uacbd\uc6b0\uc5d0,\xa0 develop\uc5d0 \uba38\uc9c0\ud558\ub294 \uac83\uc744 \uae4c\uba39\uc73c\uba74 \uc548 \ub429\ub2c8\ub2e4.\\n\\n5\\\\. hotfix\\n\\nmain \ube0c\ub79c\uce58\uc5d0\uc11c \uc0dd\uc131\ub41c \ube0c\ub79c\uce58\ub85c, \uae34\uae09\ud55c \ubcc0\uacbd\uc0ac\ud56d\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4.\\n\\n\uc774\ub54c, develop\uc5d0 \uba38\uc9c0\ud558\ub294 \uac83\uc744 \uae5c\ube61\ud558\uba74 \uc548 \ub429\ub2c8\ub2e4.\\n\\n\ub354 \uc790\uc138\ud558\uac8c \uc54c\uc544\ubcf4\uc2e4 \ubd84\uc740 \uc544\ub798 \ub9c1\ud06c\ub4e4\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694\\n\\n## \uc6b0\ub9ac \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uc5b4\ub5a4 \uac83\uc774 \uc801\uc808\ud560\uae4c?\\n\\n\ub098\uc911\uc5d0 \uac1c\ubc1c \uc11c\ubc84 \ud639\uc740 \uc2a4\ud14c\uc774\uc9d5 \uc11c\ubc84\ub97c \ub450\uace0 \uc2f6\uae30\uc5d0, \uc774 \ubd80\ubd84\uc5d0 \ub300\ud55c \ucc98\ub9ac\uac00 \ubd80\uc871\ud55c Github Flow\ub294 \uc801\uc808\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\\n\\nGit Flow\ub294 \uae54\ub054\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc9c0\ub9cc, \ub7ec\ub2dd \ucee4\ube0c\uac00 Gitlab Flow \ubcf4\ub2e4 \uc57d\uac04 \ub354 \uc788\uc5b4\uc11c, \ube60\ub974\uac8c \uac1c\ubc1c\ud558\ub294 \ucde8\uc9c0\uc5d0 \ub9de\uc9c0 \uc54a\uc544 \ubcf4\uc600\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ub7f0 \uacfc\uc815\uc744 \ud1b5\ud574\uc11c Gitlab Flow\ub97c \uc0ac\uc6a9\ud558\ub824\uace0 \ud569\ub2c8\ub2e4\xa0\\n\\n\ucc38\uace0\\n\\n[https://techblog.woowahan.com/2553/](https://techblog.woowahan.com/2553/)\\n\\n[https://docs.gitlab.com/ee/topics/gitlab\\\\_flow.html](https://docs.gitlab.com/ee/topics/gitlab_flow.html)"},{"id":"1","metadata":{"permalink":"/1","source":"@site/blog/2023-06-29-hello-car-ffeine.mdx","title":"Hello World","description":"\uc548\ub155\ud558\uc138\uc694","date":"2023-06-29T00:00:00.000Z","formattedDate":"June 29, 2023","tags":[{"label":"hello","permalink":"/tags/hello"},{"label":"world","permalink":"/tags/world"}],"readingTime":0.025,"hasTruncateMarker":false,"authors":[{"name":"\ubc15\uc2a4\ud130","title":"Backend","url":"https://github.com/drunkenhw","imageURL":"https://github.com/drunkenhw.png","key":"boxster"},{"name":"\ub204\ub204","title":"Backend","url":"https://github.com/be-student","imageURL":"https://github.com/be-student.png","key":"nunu"},{"name":"\uc81c\uc774","title":"Backend","url":"https://github.com/sosow0212","imageURL":"https://github.com/sosow0212.png","key":"jay"},{"name":"\ud0a4\uc544\ub77c","title":"Backend","url":"https://github.com/kiarakim","imageURL":"https://github.com/kiarakim.png","key":"kiara"},{"name":"\uc57c\ubbf8","title":"Frontend","url":"https://github.com/feb-dain","imageURL":"https://github.com/feb-dain.png","key":"yummy"},{"name":"\uc13c\ud2b8","title":"Frontend","url":"https://github.com/kyw0716","imageURL":"https://github.com/kyw0716.png","key":"cent"},{"name":"\uac00\ube0c\ub9ac\uc5d8","title":"Frontend","url":"https://github.com/gabrielyoon7","imageURL":"https://github.com/gabrielyoon7.png","key":"gabriel"}],"frontMatter":{"slug":"1","title":"Hello World","authors":["boxster","nunu","jay","kiara","yummy","cent","gabriel"],"tags":["hello","world"]},"prevItem":{"title":"git branch \uc804\ub7b5 \uc791\uc131\ud574\ubcf4\uae30","permalink":"/2"}},"content":"\uc548\ub155\ud558\uc138\uc694"}]}')}}]);