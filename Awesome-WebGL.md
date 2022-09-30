### Awesome WebGL examples

> Resources for 3D2D web graphics.  
> The original discussion is written in Korean.

***

<br/>


리액트에서 threejs 사용 가능한 r3f가 있듯이 pixi fiber 라이브러리도 있는거 같습니다. pixi는 Pmndrs에서 만든건 아닌데 React fiber 시리즈가 라이브러리 별로 나오면 리액트에서 webgl 사용하는 재미가 늘어날거 같습니다. https://github.com/michalochman/react-pixi-fiber

HLSL GLSL MSL WGSL 셰이더 비교 글 입니다. wgsl이 WebGPU 전용 셰이더였군요. https://alain.xyz/blog/a-review-of-shader-languages

작년엔 넥스트 컨퍼런스 페이지 디자인 평범했던걸로 기억하는데 올해는 간단한 Webgl을 추가했군요. 큐브를 보석에 비추면 프리즘이 나옵니다. https://nextjs.org/conf

앗? 네이버에서 3d모델 뷰어도 만들었었군요! https://github.com/naver/egjs-view3d

gsap, 3js, webgi로 만든 예제 입니다. 이번에 스터디 시작하면 전 이거 만들어보려 합니다. 생각만해도 즐겁습니다 하핳   
예제 : https://sudhir9297.github.io/jiotto_caspita_f1/  
코드 : https://github.com/sudhir9297/jiotto_caspita_f1

유니티에서 작업하고 needle툴로 3js 익스포트할때 음악도 같이 내보냈다고 합니다. 툴 자체에 어디까지 옵션이 있는지 궁금해집니다. https://songs-of-cultures.glitch.me/  
글리치에 예제 코드 보면 fastify로 셋팅되어있어요. needle은 gz으로 불러오나봅니다. https://glitch.com/edit/#!/songs-of-cultures

본인 모습을 캐릭터로 만들고 작은 룸에서 스크롤 내리면 실험실로 캐릭터가 이동되는 모션 참고해봐도 좋을거 같습니다. https://david-hckh.com/

오 아주대 교수님 3js 강의 올려주셨어요! 21년도 강의라서 비교적 최신이 되겠군요. 영어 강의가 어려운 분들에게 기초 이해하려면 이 영상 추천드려요! 다른 재생목록 보시면 예전에 공유한 WebGL1.0 기본 개념 이해하기에 좋은 영상도 있습니다.  https://youtube.com/playlist?list=PLKseYrrlvWNqo7IRWr1YzjeaL17GWKTrB
교육 자료도 오픈해주셨습니다. htps://github.com/learn-cg/three.js.git

> 서윤님이 작업하신 예제 입니다.  
mask에 clip-path를 inset으로 도형을 만들어주고 도형 클릭 시 클릭 이벤트에 is-open 클래스명을 추가해서 mask의 inset을 초기화 시키는 방법으로 css를 만들어보아요. https://codepen.io/Mamboleoo/pen/NWMgaWV

웹에서 vfx 작업 시 최적화 해주는 라이브러리 입니다. https://github.com/hmans/composer-suite  
https://vfx-composer-hmans.vercel.app/examples/scenes/asteroid

이 예제는 위에 러이브러리로 만든 작업이라고 합니다. https://space-scene-sandbox.vercel.app  
https://codesandbox.io/embed/github/hmans/space-scene-sandbox?codemirror=1

r3f 편집기인 theatrejs 입니다. 이걸로 r3f 입문해봐도 좋을거 같아요. https://www.theatrejs.com/blog/theatre-05-is-out

gatsby로 만든 퓨마 사이트 입니다. https://www.puma-campaigns.com/  
이미지 패럴렉스와 줌인은 gsap를 사용하였군요. 페이지가 로드되면서 전체 webp 이미지 데이터를 바로 받아오느라 데이터를 많이 먹는데, 비동기로 로딩중 화면을 로띠 애니메이션으로 타이포에 컬러가 칠해지는 애니메이션이 적용되어 있습니다.

nuxt와 threejs, swiperjs 로 만든 사이트 입니다. https://wonderland.studio/  
video와 canvas가 적절히 배치되어 있습니다. 여기서 사용하는 webp와 webm하고 mp4는 imgix라는 미디어 CMS 를 사용하고 있군요. 캐싱이 빨라서 로딩이 빠르게 되는 것 같습니다. https://imgix.com/
`<source type="image/webp">` 태그 안에 webp를 사이즈별로 적용해서 picture로 감싸주고 있습니다.
* `html <source> 태그` http://www.tcpschool.com/html-tags/source
* `html <picture> 태그` http://www.tcpschool.com/html-tags/picture
* `확장자 Webm` https://namu.wiki/w/WebM

neo.mjs 멀티스레드로 만드는 프론트엔드 프레임워크라고 합니다. https://github.com/neomjs/neo  
여러 창에서 canvas 사용 시 js 인스턴스를 만들지 않아도 다른 창으로 이동할 수 있어서 성능과 확장성 작업시 빠르게 동작한다는 설명이 나와있습니다. https://itnext.io/the-secret-of-successfully-using-multi-window-webgl-canvas-5a2d05555ad1

> 서윤님이 작업하신 예제 입니다.  
별건아니고 연습문제인 무지개를 구현한것 공유드립니다. ㅎ.. https://glslsandbox.com/e#91582.1

이미 공유된 자료일수도 있을 것 같긴 한데 glsl 공부하기 좋은 자료 추천합니다! https://thebookofshaders.com/

만약 태양광으로 애플워치가 동작한다면 랜딩페이지를 이렇게 상상해서 만들어보는거 너무 좋은거 같아요. 얼마 전에 니콘 카메라 랜딩 페이지도 이 예제랑 카메라 무빙이 비슷했는데 그거 보면서 만들었나봅니다. threejs, GSAP, pixotronics 로 만들었다고 합니다. 오픈된 코드를 갖고 이렇게 창의력을 키워서 응용하는 방법도 배우게 되는거 같습니다. https://watchpro.vercel.app/

블렌더용 텍스처 생성 에디터 입니다. 반복적인 패턴을 자연스럽게 만들어줘요. AI가 어디에 어떻게 사용되는지 알아두면 작업에 도움될거 같아요. https://github.com/carson-katri/dream-textures

호오 달리가 이미지라면, 런웨이는 영상 입니다. 프로덕트로 만들어서 시도하고 있군요. 게다가 실시간 협업이라니, 여기도 잘크면 피그마 처럼 나중에 어도비가 인수하려고 시도해보겠져. 클라이언트 중에 MBC가 있는데 한국 언론이 들어간건 처음 본거 같아요. 지금은 프리버전 얼리억세스 받는중이라고 합니다. https://runwayml.com/

이미지에 glsl 롤로 말리는 효과를 적용해보아요. https://portfolio2022.michalzalobny.com/projects/image-transitions

옥탄 렌더가 얼마전에 실시간 렌더 시 렌더 노이즈를 거의 없앴다는 내용을 봤는데, 이번엔 옥탄렌더와 UX3D가 손잡고 gltf 씬 툴킷을 마야, c4d, 블렌더, 언리얼, 유니티에서 액세스 할 수 있게 한다고 합니다.  gltf와 기존에 렌더가 포함된 확장자들은 현재는 빛이나 텍스처에 차이가 있는데 gltf 지원하게 된다면... 소프트웨어에서만 가능했던 것들이 점점 브라우저로 들어오고 있어서 너무 좋습니다! UX3D, Cesium, NVIDIA, Meta, Microsoft, Google, Adobe, 오토데스크와 같이 gltf 확장해서 gltf meta3d로 변환중이라니, 너무너무 기대됩니다 헤헤헤 https://home.otoy.com/otoy-ux3d-gltf/

개인 포트폴리오가 많이 올라와서 제가 가장 고퀄리티라고 생각하는 개인 포폴 예제도 올려드립니다!three js example 페이지에 올라와있어서 많은 분이 알고있을것이라고 생각하지만 혹시몰라서 ㅎㅎ https://guillaumegouessan.com/

공지) 웹 그래픽스 스터디를 오픈해보았습니다. 신청은 댓글에 신청 코멘트를 남겨주시면 프라이빗 리포로 초대 드리겠습니다. https://github.com/webgldev/2d3d/issues/2

vite 플러그인에도 glsl이 있군요. https://github.com/nemutas/invisible

threejs post-processing에는 어떤 이펙트 들이 있는지 살펴보아요. https://threejs.org/docs/#examples/en/postprocessing/EffectComposer

기하학 모델링 할 때 three bvh csg 사용하면 될거 같습니다.  
https://github.com/gkjohnson/three-bvh-csg  
https://gkjohnson.github.io/three-bvh-csg/examples/bundle/multimaterial.html

3js로 만든 개인 포폴이라고 합니다. 모바일은 대응 못한거 같아요. 메뉴 hover시 모니터에 화면 내용이 바뀌는 예제 정도 참고하면 될거 같습니다. https://www.alaintai.com/

디자인토큰 생성해주는 UI툴 입니다. 내용은 직접 넣어야 하는거 같아요. https://github.com/hihayk/shaper

fiber로 프레임 만들고 drei로 가로 스크롤 주고 이미지는 배열에 넣어서 불러왔군요. state는 hover와 click만 있습니다. https://github.com/yvesvinckier/r3f-horizontal-scroll  
데모 링크 : https://r3f-horizontal-scroll.netlify.app/

VR 하시는 분들 계실지 모르겠지만 VR로 퍼즐 맞추는 미니게임 같은거 도입할때 참고될거 같아서 공유합니다. 3js로 만들어져있어요. https://artsalad.net/https://github.com/felixmariotto/art-salad


며칠전에 threejs에 USDZLoader가 추가되었어요. 
https://github.com/mrdoob/three.js/pull/24568prototype 을 보면 지오메트리와 머테리얼 정보가 들어있고 머테리얼에는 셰이더 정보도 들어있습니다.

식재료를 웹지엘로 표현하면 이렇게도 표현할수도 있군요. 식자재를 손질한뒤 갈라진 표현을 도형에 잘 녹여낸거 같아요. 카드 15개를 반복으로 보여주니 재료가 매우 다양해보입니다. 랜덤으로 동영상이 재생되기도 하고 모바일에서도 가볍게 보여주기에 좋아보입니다. nextjs에서 threejs로 만든 예제 입니다.
픽토그램을 컬러 배리에이션 맞춰서 제품이나 식품 혹은 기타 사물 등 을 가볍게 브랜딩화 시키는 방법도 하나의 홍보로 좋은 방법 같습니다.
https://www.kai-group.com/products/special/hocho/yasashii/

canvas2D, 3js, p5js 프레그먼트 셰이더를 gui로 만들어볼수 있는 툴 입니다.  
https://github.com/raphaelameaume/fragment

토스 브랜드 디자인이 리뉴얼 되었다고 해서 랜딩페이지를 살펴보니 토스는 여전히 로띠를 좋아하고 GSAP에 TweenMax, TimelineMax, ScrollMagic 등이 사용되었군요.스크롤시 비디오가 재생되는 방법은 종종 보이는 예제 같습니다.
저번에 코드샌드박스 웹 리뉴얼 랜디 페이지에서 긴 스크롤이 끝없이 내려가서 손가락이 아팠(?)던 기억이 있었는데 리누님 말씀처럼 스크롤만 하면 내용을 다 볼 수 있는 점이 장점 같아요. 이렇게 비슷한 예제를 볼때마다 느낀 건 전체 페이지를 스크롤 하기보다는 한 섹션에 적당한 스크롤 이벤트를 주는 것이 컨텐츠가 길어지지 않아서 전달력이 더 높아질거라는 생각이 듭니다.
https://toss.im/new-dimension/brand-story

MDN에도 WebGL Shader 가 있군요.  
https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader

테일윈드를 시멘틱 css로 변환해줍니다.디자인토큰하고 리셋css도 같이 볼 수 있군요.  
https://www.vanillabreeze.dev/

전 개인적으로 관리는 루트에 디자인토큰 방식을 선호하는거 같습니다.

three.js gltf 오브젝트 여러 개 로딩하기로 작성한 글이 있어서 공유합니다.   
https://engschool.tistory.com/105?category=1023578

자바스크립트에서 미디어를 다루는 방법을 알아보아요.  
https://curryyou.tistory.com/443

MediaStream 예제 코드: 마이크, 카메라, audio, video, canvas  
https://curryyou.tistory.com/445?category=986644

`<canvas>` 상의 화면을 실시간 비디오로 캡처할 수 있는 CanvasCaptureMediaStreamTrack  
https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack

아이돌 음반을 이렇게 표현할 수도 있군요! 스크롤로 카메라가 줌인되면 다음 씨디로 이동되면서 해당 타이틀로 문구가 변경됩니다.  
https://www.bish.tokyo/BiSH_iS_OVER/

제가 여기서 개발자도구에서 확인 가능한 부분은

1. 코드가 난독화는 되어있지 않지만 번들이 되어있어서 소스를 확인하기는 어렵지만 함수들로 추측하는건 gsap가 확인되고 THREE.ShaderMaterial 이 확인되고 콘솔에 찍히는 THREE.WebGLRenderer 93 이라는 걸 확인해서 threejs 라이브러리를 사용하는 걸 알 수 있음

2. firefox addon threejs에서 기본 구조가 확인 가능하나, 사이트에 적용한 3js 버전이 낮아서 확인이 불가능한걸로 보아 라이브러리 오래된 버전을 사용하고 있을 가능성이 높음

3. 네트워크에 유튜브 api가 get되는걸 보아 단순히 링크만 걸고 임베드만 해둔게 아니라 www-widgetapi.js로 iframe_api를 적용해서 동영상 여러개를 불러오는걸 알 수 있음

4. 번들된 코드들을 잠깐 살펴보면 this._domDiveBtnB.addEventListener 혹은 t._wrapp.style.display="none" UI 라이브러리를 사용하지않고 바닐라 자바스크립트를 사용한 것을 알 수 있음

5. @media 에는 뷰포트를 --vw, --vh만 root로 지정해둔 것을 확인 가능

6. CD는 png 이고 옆에 효과들은 shader로 확인됨7. 기타 구글 애널리틱스 GA도 확인됨
이정도만 간단하게 확인 됩니다.
비슷하게 스피드한 효과를 내는 예제들은 제가 수집한 자료에도 찾아보면 있긴한데 (어딨는지는 찾아야 =ㅅ=)줌인되는 예제들을 살펴보면 빗금으로 강조되는 효과를 적용한 사이트들이 종종 있는 것 같습니다.


r3f에 레이마칭이 적용되어 있는 리포 공유합니다.
https://github.com/nemutas/r3f-gyroid-sphere-operable

WebGL insights 오래전에(7년전) 나온 책인데 pdf는 무료라서 볼 수 있습니다.babylonjs랑 glsl HDR 데이터시각화 등 있고 p185에는 파도 shader도 이미지로 비교해서 보여줍니다. 기본기 파악하는데는 도움 될거 같아요 :) http://webglinsights.com/

같은 코드를 threejs와 r3f에서 비교하는 영상 입니다.
https://youtu.be/DPl34H2ISsk

CustomShaderMaterial로 3js에서 바닐라와 리액트 모두 셰이더 쉽게 적용 가능합니다. 이런 기능들은 나중에 threejs에 내장함수로 들어가지 않을까 해요.
https://github.com/FarazzShaikh/THREE-CustomShaderMaterial

오 여기 아토믹 예제들 디자인토큰 350개 css에 임포트해서 사용 가능하도록 만들어져 있어요! 이제 ui 라이브러리 안쓰고 css는 css대로 js는 js대로 작업해도 되겠습니다 히힣 (전 ui 라이브러리들 클래스명 외워서 사용해야 하는걸 비선호해서 직접 짜는걸 선호하게 되었습니다 ㄷㄷ 이런 저에게 디자인토큰 모음은 너무 좋네요!
https://open-props.style/

마스크로 엣지 부분 라운드 같은건 구현하기 귀찮은데 미리 적용되어있는거 사용하는 것도 좋아보입니다.
https://open-props.style/#masks

파티클은 컬러 많이 사용하고 어두우면 정신없어보이는데 컬러랑 스크롤트리거 적절하게 사용한거 같습니다. 초반 로딩 init도 자연스러워요. 
https://www.staratlas.com/

브라우저 성능 높이는 도구들 소개한 포스팅 입니다. 
https://www.smashingmagazine.com/2022/08/core-web-vitals-tools-boost-performance/

sass에서 변수에 임티넣어두고 for문으로 돌리는 방법도 괜찮아보이는군요. 
https://github.com/chokcoco/iCSS/issues/198

css-doodle 이라는 라이브러리를 사용한 예제 입니다.
https://codepen.io/Chokcoco/pen/MWVmKQP

css-doodle은 웹 컴포넌트 베이스군요.
https://css-doodle.com/

css로 만든 파티클 보면.. css 장인이 아닌가 싶습니다. 예제들을 보면 주로 복잡한 랜덤 연산에 사용되는거 같아요.
어 그러고보니 두세달 전에 이거 공유했었군요. 그땐 공식페이지 없었는데.. 그사이에 만들었나봅니다.
https://www.jcode.pub/?css-doodle#/7091458369474527268

저번에 r3f에 이미지를 파티클로 변환시켜주는 예제 공유한적 있었는데 여기도 비슷한 예제 입니다.
https://www.mamboleoo.be/articles/how-to-convert-an-image-into-particles

https://tympanus.net/Tutorials/InteractiveParticles/

와 이미지 여긴 최적화가 필요해보입니다. 이미지 로딩하다가 세월 다갈거 같아요.
https://zooartshow.com/#

워드프레스 6.0.1 로 만들었군요. 저번에 곰돌이 패턴만 변경한 것처럼 여기도 메뉴 hover 시 동물 얼굴에 패턴만 바뀌도록 되어있어요. 모바일에서는 안보이는군요. 패턴은 svg로 되어있고 애니메이션 라이브러리는 animejs 를 사용했는데 모델은... 이거 폴리곤 모델이 아니라 비디오였군요.
https://zooartshow.com/wp-content/themes/zoo/assets/videos/animals/home-6.mp4

scss 안쓰고 그냥 css로 하려면 html 돔노드 여러개에 스타일 변수 각각 주고 css에서 애니메이션 딜레이 주는 방법을 적용한 이 영상도 비슷한 예제가 될 수 있습니다. 
https://youtu.be/_jOqYe0eFqY

Raymarching으로 만든 예제에
https://github.com/nemutas/r3f-water-drops

Physics를 추가해서 응용한 예제 입니다.
https://github.com/nemutas/physical-raymarchig

리드미에 보면 레퍼런스에 참고 영상 보면 glsl 공부가 될거 같습니다.
https://youtu.be/q2WcGi3Cr9w

웹에서 빠르게 3D를 개발할 수 있는 보일러 리포 공유합니다.스택은 threejs, Reactjs(TS), vite, styled-components 정도 셋팅되어있군요.
https://gitee.com/songmy1093697597/bim3d-editor

3js 에디터 입니다. 오픈소스로 개발하고있군요.
https://gitee.com/Shiotsukikaedesari/vis-three

조금 오래된 리포인데 예전에는 키 컨트롤을 어떻게 작업했는지 정도 참고하면 좋을거 같아요. prototype으로 짜여져있어요. https://gitee.com/insky2005/threejs.3droom  
데모 : https://insky2005.gitee.io/threejs.3droom/html/index.html

> threejs 관련 퍼포먼스 최적화 팁 찾아보시면 도움이 되실듯합니다.  
https://discoverthreejs.com/tips-and-tricks/  
https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls#tips-and-tricks

threejs 로 만드는 fluid를 Navier-Stokes 방정식으로 배우면서 만들 수 있습니다. glsl도 같이 배울 수 있어요. https://mofu-dev.com/en/blog/stable-fluids

나비에-스토크스 방정식은 오일러 방정식 확장한 것이라고 합니다.N-S 방정식은 점성을 가진 유체의 운동을 기술하는 비선형 편미분방정식이다.날씨 모델, 해류, 관에서 유체흐름, 날개주변의 유체흐름 그리고 은하안에서 별들의 움직임을 설명하는데 쓰일 수 있으며 실제로 항공기나 자동차 설계, 혈관내의 혈류, 오염물질의 확산 등을 연구하는데 사용되고 있다.
https://ko.wikipedia.org/wiki/%EB%82%98%EB%B9%84%EC%97%90-%EC%8A%A4%ED%86%A0%ED%81%AC%EC%8A%A4_%EB%B0%A9%EC%A0%95%EC%8B%9D

수학공부를 하지 않아도 용어를 몇번 눈에 익혀두면 검색할때 키워드를 찾는데 도움이 됩니다.
CSS custom property 로 infinite marguee 를 만들어보아요.
https://ryanmulligan.dev/blog/css-marquee/

회사소개 사이트에 흔하게 캐러셀 적용되어있는 로고들을 간단하게 css로 만들면 좋을거 같습니다.
https://codepen.io/hexagoncircle/full/wvmjomb

버튼 클릭 시 벽지와 러그 컬러가 변경되는 예제입니다.
https://www.cathydolle.com/room

리액트에서 drei로 목업에 이미지 텍스처 입히는 방법 간단해보입니다. 
https://codesandbox.io/embed/text3d-alignment-forked-88mttv?file=/src/App.js&codemirror=1

> 호오 decal이라는게 이런거군요 클릭하면 물감이 막 뿌려지네요
https://threejs.org/examples/#webgl_decals

저 이거 보다가 갑자기 든 생각이 리액트, 바닐라, 뷰, 스벨트 threejs 예제 나눠져있는거 astro로 빌드하면 가능하지않을까? 라는 생각이 드는데... 실험해봐야겠습니다 후후후
https://astro.build/

> 혹시 gltf-report의 빛값 이나 렌더필터 정보 아시는분이 있을까요? 
https://gltf.report/glb 파일이 gpu를 얼마나 사용하는지 알려주는 사이트인데 조명효과가 이뻐보여서 사용하고싶은데 값을 모르겠네요 renderer.toneMapping = THREE.ACESFilmicToneMapping; 이거 한줄로 더 이뻐지네요! 나중에 참고하시면 좋을것같습니다…!

FBX와 gltf의 차이를 읽어보아요. 한줄로 요약하자면 소프트웨어 툴 끼리 모델링 이동하려면 FBX가 좋고 gltf는 웹에 올릴 때 좋다는 내용으로 요약됩니다. 
https://www.threekit.com/blog/gltf-vs-fbx-which-format-should-i-use

확실히 gltf 가 fbx 보다 많이 가벼워지는것 같아요. Gpu texture 인 .basis로 변환한 텍스쳐와 함께라면 더 가벼워지죠.오 이런게 있군요!
https://github.com/BinomialLLC/basis_universal 덕분에 검색하게 되었어요! 키워드 감사합니다 >_<

유저에이전트 리셋 정리 되어있는 글 공유합니다. 
https://blog.tommyzip.co.kr/code/css-initialization-guide/

threejs에서 toon으로 셰이더 적용하고 싶을 때 이거 사용하면 간편해보입니다. 
https://github.com/mayacoda/toon-shader

> Three js 를 스크롤을 통해 컨트롤하는 프로젝트를 진행중인데 혹시 여기처럼 주소창을 고정시키는 코드를 알고계시는 분이있으실까요?
https://sample-baek.dotover.io 정식오픈전까지는 우선 모두 무료로 열어놨습니다! https://www.dotover.io


> 3D 모델링 툴입니다. 개념 정리가 좋은 것 같아서 가지고 왔어요.
https://cmu-graphics.github.io/Scotty3D/

MSI에서 마우스, 키보드, 헤드셋 3개를 테스트하는 미니게임(?)을 3js로 만들었군요. 네트워크에 get되는 이미지 엄청 많아서 저사양 노트북에서 접속하면 위이이잉 날아갈수도 있을거 같아요.
https://www.msi.com/Landing/best-gaming-mouse-keyboard-headset/peripherals/en

오 이거 아이디어 좋네요! 제품별로 모델 따로 불러오지 않아도 되고 컬러만 바꾸는거 괜찮아 보입니다.
https://webgi-jewelry.vercel.app/

> 블렌더 쉐이더 입니다.
https://youtu.be/QQP2rfmLEB4

(영상) 리액트에서 r3f로 3d 모델 불러와서 컬러피커 선택하면 onChange로 프로퍼티 변경하고 gltf jsx를 작성해보며 만드는 튜토리얼 영상 입니다.
https://youtu.be/2jwqotdQmdQ

영상에선 gltf를 cli로 jsx 변환하는데
https://www.npmjs.com/package/@react-three/gltfjsx

pmndrs에서 jsx로 변환해주는 사이트를 만들어줘서 UI 이용하면 뷰어까지 보여줍니다.
https://github.com/pmndrs/gltfjsx

모델이 어떤 모양인지 확인하면서 jsx 변환하는데는 두번째가 좋아보이고모델이 어떤 모양인지 알 경우에는 그냥 cli로 바꿔도 될거 같습니다.아니면 cli에서 jsx로 바꾸고 vscode에서 익스텐션으로 gltf 확인하는 방법도 있고..방법은 여러가지라서 너무 재밌습니다.

3js 개발자인 mrdoob 님이 일본 밋업에서 앞으로 5년 개발 계획을 발표하셨어요! mrdoob님이 발표하는 영상은 처음봅니다.
https://youtu.be/sDVIHac66tM

css에서 has를 이렇게 작업할수도 있군요! 이렇게 보면 간단한 모션 만들때 응용하기 쉬워서 유용해보입니다.
https://codepen.io/chriscoyier/pen/qBoogaX

r3f를 사용할 때 리랜더링 이슈를 해결하는 방법 중 한가지가 영상에 소개되어 있어서 공유합니다.
https://youtu.be/PqjmF2qJd8U

우앗 이분 퍼블 강의로 유명한쌤인데 최근에 3js강의도 시작하셨군요!
https://github.com/webstoryboy/threejsStudy

이분도 로딩 애니메이션이 화려합니다. 로고는 glb 파일인데 gsap 애니메이션도 적용되어있고, matrix3d 로 엘리먼트에 인덱스 순서주고, 스타일을 perspective px로 주어서 카메라가 안쪽으로 이동할때는 css translate라서 흐릿하게 보이는거군요. 셰이더가 아닌데 css로 셰이더처럼 보이는거 너무 신기해요!
https://oblio.io/

보더에 애니메이션을 적용해보아요.
https://web.dev/css-border-animations/

glsl로 만드는 터치 플루이드 입니다. gl-matrix 라는 라이브러리도 사용했군요.
https://github.com/yurikasayo/stable-fluids-3dhttps://github.com/toji/gl-matrix

3js에서 시간이 흐름에 따라 태양 위치가 바뀌면서 낮과 밤이 달라지는 애니메이션 예제 입니다.
https://sunposition.vercel.app/

> 일조량 유튜브 영상
https://youtu.be/Wtx45Vvjse4

CSS 애니메이션 속성에 대해 알아보아요
https://uxkm.io/publishing/css/04-cssAdvanced/03-css_animation#gsc.tab=0

404페이지에 문어 모양 보니까 자갈치가 생각났고, 새우깡이랑 같이 섞어서 넣으면 재밌을거 같아요!
https://octopus.energy/not-a-page/

CSS 트랜스폼 속성을 이제 따로 쓸 수 있어요!한줄로쓰나 따로쓰나 뭔차인가 싶겠지만, 이렇게 따로있는게 훨씬 더 자유롭게 떠오르는대로 코드 쓰기 편하달까요
https://web.dev/css-individual-transform-properties

RN 엑스포에서 r3f 적용한 라이브러리가 있어서 가져왔습니다.  
리포 : https://github.com/4TWIGGERS/react-native_3d_store  
데모 : https://user-images.githubusercontent.com/5978212/181212483-0054fcc3-9e5d-4a7a-8f48-458ea1922c8a.mp4

r3f에서 셰이더를 작업해보아요
https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/

오홍 보통은 스크롤로 카메라가 이동되는데 이분은 캐러셀로 이동시키는군요. 장면을 전환할때 오브젝트를 전체 뒤집는 건 생각 안해봤는데 이것도 하나의 아이디어가 될 수 있을듯 합니다.
https://story.responsiblemetaverse.org/

이것도 비슷한 예제 입니다.여기는 카메라가 이동되지는 않지만 3d를 직접 선택하지 않고 선택 되었다는 표시룰 해두었군요.
https://www.smashdeltaquest.com/

공간 따라 이동하는 예제는 gsap에 레퍼런스 사이트에 있었고 바닷속으로 들어가는 예제들도 예전에 공유한적 있었는데
같은 코드로 작성해도 표현에 따라 다른 구성이 가능해서 가능한 한 예제를 많이 모아두는 것이 도움이 되는거 같아요.
https://blue.rossinavi.it/ 

인물 소개를 이렇게 개성적으로 표현하는건 재밌습니다.
http://isaacnewton.tilda.ws/eng

스크롤트리거 애니메이션은  tilda 라는 라이브러리를 사용했군요.
https://tilda.cc/lp/trigger-animation/

애니메이션 전용 웹 에디터인가봅니다.
https://help.tilda.cc/zero-block-animation

헐! 저 이거 비슷하게 캡쳐해서 이미지 저장하는거 만들어보려고 기획하고있던거(바빠서 미뤄둔거..) 있었는데 비슷한 레퍼런스 발견해서 너무 좋습니다!
https://media-facade.shiftlink.tech/

처음 로딩때 ellipse로 좌우회전 가이드를 보여주고 일정시간 후에 사라지게 하는 방법도 괜찮아보입니다.
https://www.artemisringsjewellery.com/mine/diamond

> 유진님이 작업하신 썸네일 만들기 입니다.
https://codepen.io/yiyujin/pen/KKoXNdy

더즈인터랙티브가 제작한 갤럭시 스튜디오 입니다.
https://www.samsung.com/sec/event/galaxys22/galaxystudio/experience/#!/bridge

https://ditoday.com/%eb%8d%94%ec%a6%88-%ec%9d%b8%ed%84%b0%eb%9e%99%ed%8b%b0%eb%b8%8c-%eb%82%b4-%ec%86%90%ec%95%88%ec%97%90-%ea%b0%a4%eb%9f%ad%ec%8b%9c-%ec%8a%a4%ed%8a%9c%eb%94%94%ec%98%a4-%ea%b0%a4%eb%9f%ad/

로띠와 GSAP를 같이 적용한 예제 입니다.
https://shoya-kajita.com/_sample/lottie_scroll_interlocking/

훈민님이 작업하신 기타치면 노래 나오는 작품 입니다.
https://lqii8k.csb.app/

기은님이 공유해주신 3js 책 예제 사이트 입니다.
https://press.stripe.com

three.js를 활용해 책들을 소개한 페이지인데, transition이랑 디자인이 꽤 깔끔해서 공유해요!
정호님이 공유해주신 링크 입니다.
https://blog.google/products/maps/three-new-maps-updates-to-help-plan-your-next-adventure/

오 pmndrs에서 라이브러리 새로 추가했네요!
https://github.com/pmndrs/react-three-csg

재밌는 시도들이 많은거 같아요. 메가픽셀 이미지는 사이즈가 얼마나 될지 궁금해집니다.
https://samsunglabs.github.io/MegaPortraits/

CSS로 로딩을 표현하면 이렇게도 표현할수 있군요. 클릭하면 3d로 보여집니다.
https://codepen.io/jh3y/pen/GRxmqEb

세상에 이렇게 귀여운 만두 사이트가 있을까요.
https://baosociety.com/

video, canvas, translate3d(); 스크롤 시차 적용해서 2d와 3d를 적절히 잘 섞어준 사이트 입니다.근데 marquee 때문에 p tag 27개의 페인트가 계속 올라가고, width의 1px~2px이 계속 변하면서 램을 계속 먹고있어서;;이부분은 css 애니메이션으로 수정해주면 브라우저가 훨씬 덜힘들어할거 같습니다.

`HTML elements <marquee>`  
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee

CSS in 2022 번역글이 있어서 가져왔습니다.
https://wit.nts-corp.com/2022/02/24/6490

Container QueriesCascade LayersRelative Color Syntaxcolor-mix()color-contrast()svh, lvh, dvh:has()overscroll-behaviorSubgridAccent Color <- 이거 root에 정의 가능합니다Media Query Ranges
이정도 한번 슥 읽어보면 CSS가 현재 어느정도 발전하고 있는지를 알 수 있습니다.

사진이나 영상을 3d로 만드는 기술 vs 3d로 사진을 찍는 기술둘중에 어느것이 더 빠르게 일반 사용자들에게 익숙하게 될지 5년뒤가 궁금해집니다.
https://www.capturingreality.com/

디자인 토큰을 만드는 여러 방법이 있는데 가장 쉬운 방법은 root에 선언하는 방법 같습니다. 전 보통 컬러나 폰트 정도만 추가하곤 했는데 여기에 있는 내용 참고하면서 가이드 잡아봐도 좋을거 같아요.color, border-radius, box-shadow, font-size, font, line-height, size, space, transition, z-index
https://nordhealth.design/tokens/

CSS property인 Accent color도 root에 추가 가능합니다.
https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color

디자인 시스템에서 디자인 토큰의 중요도는 69%라는 설문 결과가 있습니다.color&font 98%, Components 95%, Component docs 85%Designer-ready assets 75%, Grid/layout systems71%Design tokens 69%, Developer-ready code 65%, Accessibility guidelines 57%
https://designsystemssurvey.seesparkbox.com/2022/

다크띰 라이트띰을 미디어쿼리에서 체크해보아요.
https://developer.mozilla.org/ko/docs/Web/CSS/@media/prefers-color-scheme

모션 러이브러리 gsap보다 성능 좋다고 소개하는데 얼만큼 빠를지 궁금해집니다.
https://github.com/motiondivision/motiononehttps://motion.dev/

기본 지오메트리가 스크롤에 따라 변형되는 예제로 사용하면 좋을 사이트 같습니다.
https://www.bizupagency.com/en/

초기로딩과 배경이 이어지는 모션은 참고해도 될거같습니다.
https://eggforward.co.jp/

바닥에 금속 속성을 주었다고 합니다. GUI가 예뻐써 디버깅을 계속 하게되는거 같아요.
https://alien.js.org/examples/shader_reflection_metalness.html

엔비디아에 올라온 레이트레이싱을 배워보아요.
https://developer.nvidia.com/blog/best-practices-for-using-nvidia-rtx-ray-tracing-updated/

p5에 패턴 항목이 추가되었다고 합니다.
https://github.com/SYM380/p5.pattern

CSS 애니메이션 예제 40개 유용해보입니다!
https://codepen.io/jh3y/pen/gOeGmRN

블렌더에서 건물 만들고, 지오메트리노드로 나무 숲 만들고, Animation Mixer로 새들에게 애니메이션 적용하고, glb 내보내서 모델은 Draco로 압축하고, 나무는 Mesh surface sampler로 만들고, 3js에서 불러온다음 dat.gui 추가하고, 나무에 VertexShader 추가하고, 라이팅, 쉐도우, 밤/낮 모드 등 EffectComposer로 후처리하고, 건물 클릭하면 이벤트 트리거되며, PC, 모바일, 스마트 워치에서도 작동되는 threejs 를 만들어보아요.
https://tympanus.net/codrops/2022/04/25/case-study-windland-an-immersive-three-js-experience/

아이콘을 클릭하면 텍스트와 곰돌이에게 아이콘이 패턴으로 입혀집니다. Nextjs, 3js, p5js 사용하고 곰돌이는 glb 파일인데, 패턴이 리로드 될때마다 네트워크에서 p5와 postMessage와 패턴번호가 순차적으로 계속 get되네요. 이러면 램을 계속 사용하고있어서 나중에 접속만 해놔도 브라우저가 뻗을텐데요.. 넥스트에서 수정이 필요해보입니다.
https://kumaleon.com/

어제 곰돌이를 올렸었는데요, 오늘은 아이콘 말고 이모지를 터치하면 이모지와 패턴이 변경되는 예제로 응용한 예제가 있길래 가져왔습니다. 구글 머테리얼 아이콘을 적용하셨대요. 아직 뜯어보진 않았는데 곰돌이와 비슷하게 구현하지 않았을까 추측해봅니다.
https://unshift.co.jp/labs/material_icon/

Nik쌤이 팁 올려주셔서 가져왔습니다. 이건 텍스처맵 뿐만 아니라 UI의 기본 지식에 들어가는거 같습니다.Three.JS Tip 20:Each dimension of a texture map must be a power of 2. 8, 16, 32, 64, 128 etc. A texture does not have to be square so 16 x 512 is fine. 16 x 510 would be resized to 16 x 256. Three.JS reduces dimension to next POT down.
https://codepen.io/nik-lever/pen/PoRGeLg

UI에서 8배수 그리드 관련된 글 
https://books.google.co.kr/books?id=zGxxEAAAQBAJ&pg=PA68&lpg=PA68&dq=2+4+8+16+32px&source=bl&ots=pJscVIde86&sig=ACfU3U2-4E2VFvtnWPtxG8kfEhiTMGLCcQ&hl=ko&sa=X&ved=2ahUKEwj1uvKC7ob5AhUEZt4KHVA6CewQ6AF6BAgkEAI#v=onepage&q&f=false

CSS로 스크롤을 만들어보아요양쪽에 어두워지는 부분은 알파값을 헥사로 넣고 마스크로 적용해서 어두워지는거 같습니다 webkit-mask-image: linear-gradient(to right, #0000, #000, #000, #0000); 
https://codepen.io/argyleink/pen/qBoryoL

> 디자인 토큰 관련해서 좋은 글들을 모아둔 링크입니다.
https://github.com/sturobson/Awesome-Design-Tokens 

>style-dictionary 라는 라이브러리를 가지고 dark mode 관련된 디자인 토큰을 어떤식으로 멀티 플랫폼에 적용하는지에 대한 이야기 입니다. 
디자인 토큰 관리하시는분들은 도움이 되실 것 같아서 가지고 왔어요.
https://dbanks.design/blog/dark-mode-with-style-dictionary/

키 입력에 따라서 단어를 맞추는 간단한 키즈 전용 게임 입니다.
https://www.kdtype.com/https://github.com/steveruizok/kdtype

스택은 reactjs, TS, mobx, vite 가 있고, EventEmitter3을 살펴보니 노드기반이었군요.  
npm : https://www.npmjs.com/package/eventemitter3  
아티클 : https://velog.io/@ragnarok_code/EventEmitter%EB%9E%80

몇달전에 폭죽 관련 JS라이브러리를 공유한적이 있었는데 react-confetti 리액트 전용 폭죽 라이브러리도 있군요. https://www.npmjs.com/package/react-confetti

r3f 에서 셰이더를 shadenfreude 로 작업하기도 하는군요. 셰이더 라이브러리 종종 보이는데, 저번에 물리엔진 여러개를 사용했을 때 서로 충돌이 안될것 같다는 의견들이 있었는데 셰이더는 서로 충돌되는지 궁금해지는군요.  
데모 : https://codesandbox.io/s/ubzbxq  
NPM : https://www.npmjs.com/package/shadenfreude

파티클이라는 라이브러리 입니다.VanillaJS, Angularjs, Reactjs, Vuejs 등 사용하는 라이브러리&프레임워크 코드를 바로 볼 수 있습니다. https://particles.js.org/

preset에 보면 10가지 다양하게 있어서 랜딩에 가볍게 적용하시면 됩니다. https://particles.js.org/samples/presets/index.html

요즘 360도 카메라로 찍은 영상을 메쉬화 시키는 NeRF를 관심있게 보고있습니다. 이미지 베이스 메쉬 최적화 아티클이 있어서 공유합니다. http://rgl.epfl.ch/publications/Vicini2022SDF

일본에서 온천 사이트를 어떻게 만들었는지 살펴보아요. PC에서는 캐러셀하고 스크롤이벤트로 도배(?)가 되어있긴한데 모바일은 심플하군요. https://ru-ru-ru.com/

> https://original.donga.com/2022/jameswebb/question?m=2  
> https://github.com/nytimes/three-story-controls

플러터에서 glsl 추가하는 간단한 방법 아티클 입니다. 여기에 플러터에서 셰이더 사용하시는분 계시려나요.
https://code.pieces.app/blog/create-mind-blowing-visuals-using-shaders-in-flutter

CSS에서 mix-blend-mode로 사진에 이펙트 효과를 적용해보아요. mix-blend-mode는 CSS에서 제가 좋아하는 속성입니다.  
아티클 : https://robbowen.digital/wrote-about/css-blend-mode-shaders/  
MDN : https://developer.mozilla.org/ko/docs/Web/CSS/mix-blend-mode

img 속성에서 aspect-ratio는 어떻게 적용하면 좋을지 읽어보아요. https://jakearchibald.com/2022/img-aspect-ratio/

WebGL을 하려면 자바스크립트도 알고 있어야 하지만, 브라우저에 대해 잘 알고 있어야 하므로 웹 성능 관련 글도 읽어보시는게 좋습니다.Event loop, Main Thread(On/Off) 등 내용이 적혀있는 아티클 입니다 requestAnimationFrame을 줄여서 RAF 라고 부르는군요.  
https://medium.com/@matthew.costello/frontend-web-performance-the-essentials-1-cb6513e1c3a1

브라우저에서 웹컴포넌트로 gltf3d 모델을 불러와서 바로 보거나 AR도 같이 볼 수 있는 라이브러리 입니다. 웹컴포넌트로 되어있어서 복잡하지 않고, 스크립트 모듈 불러와서 엘리먼트에 경로만 입력해주면되니까 간단하고 쉽게 사용 가능합니다. https://modelviewer.dev/

CSS의 At-rules는 무엇이 있을까요. https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule

자주 사용하는 at rules와 선택자가 간단히 정리되어있는 아티클 입니다.projectwallace.com/blog/css-complexity
글쓴이는 올해 @layer가 추가되면서 다른 조건들과 같이 사용해야해서 복잡도만 증가되었다고 합니다. https://developer.mozilla.org/en-US/docs/Web/CSS/@layer

개인적인 생각으로는 글쓴이 의견에 동의하지만 반대로 생각하면CSS에 at-rules가 추가될수록 HTML DOM Node랑 CSS을 잘 섞어서(?) 렌더 트리를 쉽게 확장해나가는 구조로 만들 수 있지 않을까 생각합니다.

웹개발 체크리스트 입니다. https://www.toptal.com/developers/webdevchecklist

프론트엔드 체크리스트랑 겹치는 부분이 있는거 같아요. https://frontendchecklist.io/

> 디자인 시스템 체크리스트도 비슷한 맥락으로 볼 수 있겠네요.
https://www.designsystemchecklist.com/

백그라운드에 컬러 라이팅 두개가 움직이면서 배경을 자연스럽게 그라데이션 배경으로 만들어줍니다.
https://atmos.leeroy.ca/

> threejs 기반으로 괜찮은 컨텐츠를 adobe 에서 만들었네요.  
https://adobexbowie75.com/  
어제 명품이나 이름있는 기업들이 webgl 기반 페이지를 많이 만들었다는 얘기를 했었는데요, 이번엔 어도비 입니다. 낡은 표현의 텍스처들은 섭스턴스 툴을 사용해보일 정도로 자연스러워 보여요.

프레그먼트셰이더로 고스트를 그린 다음 마우스와 터치 이벤트를 추가해서 움직일때마다 고스트가 커서를 따라다니게 만들어보아요.
https://codepen.io/ksenia-k/pen/QWmjgWX

3js에서 gsap 스크롤트리거로 glb 모델의 포지션 적용하는 방법에 대한 아티클 입니다.라이브러리에있는 AzesHelper 함수를 추가해서 작업하면 xyz 기준점을 보면서 포지션을 작업할 수 있어요.
https://medium.com/@minqicheah123/add-a-3d-model-to-website-by-using-three-js-and-gsap-scroll-trigger-6aa2d1fe8df4

cables gl에서 PBR(물리기반렌더) 머테리얼로 Heightmap 만드는 방법 입니다. 노드 단계가 몇단계 없어서 이해하기 쉬워요.
https://youtu.be/gPS2aeOFk1U

PBR texture에 대한 추가 이해를 돕는 글도 같이 공유합니다.
https://caresser.tistory.com/36

webgl이 적용된 사이트에 모달이 있으면 어제 얘기한 레이어탭에서 어떤 요소가 움직이는지 확인해보곤합니다.레이어탭에서 회전되어있는 영역은 light-down 클래스 transform: rotate(-30deg); 이 적용되어있는데 이건 어떤 역할을 하는지 조금 더 살펴봐야 알거같습니다.
https://www.cobosrl.co/

스크롤이벤트 적용된 사이트 인터랙션 참고가 될거같아서 공유합니다.
https://www.sixmorevodka.com/home/

Vue와 3js로 만든 샵 입니다.와인바로 들어가면 와인마다 각각 애니메이션 적용되어있습니다.파이어폭스에서 threejs addon 추가해서 보면 Renderer와 Memory를 볼 수 있는데, 메모리에 geometries와 textures 갯수가 나옵니다.이 사이트에서는 지오메트리는 별로 없는거 보니 텍스처로 배경 추가하고 각각 버튼만 이벤트 추가되어 있군요.
https://www.royalsalutevirtual.com/en

(영상) Nextjs, chakraUI, framer, threejs 로 따라 만드는 포트폴리오 입니다. 간단한 랜딩이라서 스택들 어떻게 사용하는지 정도만 알 수 있어서 입문하기에는 좋아보여요.
https://m.youtube.com/watch?v=bSMZgXzC9AA

이렇게 캐러셀을 제품(or식품)과 바닥을 대각선 방향으로 소개하면 입체적으로 보여지기도 합니다. 2d로만 본다면 사선이 주는 심리는 불안정과 긴장감이 있어요. 제품을 소개할때 사진은 화소가 높으면 좋지만, 그러면 파일사이즈가 커지니 적절한 선명도를 포토샵에서 보정해서 선명하게 리터치해주면 좋아요. 그럼 이미지 로딩도 단축되고 선명도도 같이 챙길 수 있습니다. 브라우저에서는 이미지 최적화가 퍼포먼스에 많은 영향을 미칩니다. 이렇게 디테일을 챙기면서 시각적으로 명확한 전달을 하는 것은 브랜드의 신뢰도가 전반적으로 높아집니다.
https://buttersand.com/

CSS에서 backdrop filter 로 animation 을 만드는 방법을 코드를 보고 관찰해보아요. mask는 호환 안되는 브라우저가 있을 수 있어서 지원 브라우저를 체크하며 작업해야합니다.
https://codepen.io/jh3y/pen/RwMrVNa

설명에서 추상적인 부분을 다듬는 연습을 하려합니다.  
좋은 것 같습니다 -> 무엇이 좋은지 명확하게 설명  
좋아보여요 -> 어떤 것이 좋아보이는지 풀어서 설명  
제가 관찰하며 작성하는 것처럼 여기 계신 분들도 관찰한 부분을 작성해서 공유해주시면, 제가 못보고 지나간 부분들을 다시한번 체크할 수 있을거 같아요. 이런 문장을 작성하는 연습이 전문성을 더 기르는데 도움이 됩니다.  
공부하려고 만든 방이니 서로에게 도움이 되었으면 합니다.

> webgl fundamentals 에 이런 글도 있군요.요즘 툴을 만들어야 해서 이런 거 보고 있는데 스머지(문지르기?) 구현하는 방법을 설명하고 코드로 보여줍니다.
https://webglfundamentals.org/webgl/lessons/webgl-qna-how-to-make-a-smudge-brush-tool.html

이분은 3js starter를 html로 나눠서 올려두었군여스크립트 모듈로 만들어둬서 필요한 부분 참고하기 좋아보여요.
https://github.com/sketchpunk/threejs_starter

이분 pug랑 scss랑 바닐라js로 작업하신 작업물 많은거보니 코딩에 불필요한 브라켓은 싫어하는 타입 같아요.
https://codepen.io/ricardoolivaalonso/pen/bGvdypM

며칠전에 릴리즈된 3js 독스를 살펴보아요. 변경된 메서드명 같은건 슥 한번 봐두면 나중에 사용할때 헷갈리지 않을거 같아요.
https://github.com/mrdoob/three.js/releases/tag/r142

이분 스벨트로 웹지엘 포폴 만드셨어요.
요즘 웹 컴포넌트로 만들다보니까 간단한 프롭 받을 수 있는 스벨트가 눈에 띄긴하는데.. 뷰 같이 스벨트 특유의 문법을 외워야하는걸 저는 비선호 하는거 같습니다. 리액트가 그런면에서 자바스크립트 친화적 같아요.
https://photon-one.vercel.app/showcase

블렌더에서 로우폴리 만들고 vue에서 3js로 만드셨다고 합니다. 카메라 이동 부드럽고 모델링도 안무거워보이고 라이팅도 자연스러워요. 전 여기서 좀 더 욕심내면.. 라이팅을 손볼거 같습니다. 로딩에 AppUnite 로고가 뭔가했더니 이 오피스의 회사였군요. 회사 홍보도 할겸 오피스를 3d로 만들어봐도 좋을거 같아요.
https://au-floor.vercel.app/

얼마전에 유툽에 3d 텍스처 영상 올라온거 봤는데 codrops 블로그에도 올라왔어요! 기억해뒀다가 나중에 사용하기 좋아보입니다.
https://tympanus.net/codrops/2022/07/04/how-to-map-texture-to-a-3d-face-with-three-js/

3js랑 gsap로 만든 인터랙티브 웹 사이트 입니다. 인트로 모션 참고하기 좋아보여요. 이정도면 모션그래픽 영상을 참고해도 좋을거 같습니다.
https://hsmkrt1996.com/

a 링크 부분만 physics 적용해서 잡아당기면 늘어나는것도 재밌는거 같아요.
https://ikeryou.jp/sketch/262/

glsl 리소스 모음 리포 있어서 공유합니다.
https://github.com/vanrez-nez/awesome-glsl

그래픽스 리소스 모음 오래된 자료들인데 그래도 무언가 만들면서 코드 참고용으로는 좋아보입니다.
https://github.com/mattdesl/graphics-resources

3d모델로 파티클 변환되는 예제 있어서 가져왔어요. 아직 뜯어보진 않았는데 모델 불러와서 파티클 변환하는거면 codrops에 있는 예제랑 비슷해보입니다.
https://dev.shoya-kajita.com/005/

반응형 UI를 보고 css를 작업하는 아티클 입니다.
https://defensivecss.dev/articles/intro-defensive-css/

패턴 만들어서 SVG로 내보내는 사이트 입니다.
https://heazy.studio/

피그마 to 리액트인데 이게 지금은 얼마나 쓰이고 있는지 궁금하네요.
https://github.com/kazuyaseki/figma-to-react

포스트 프로세싱이 r3f 전용 라이브러리가 따로 있는거 같던데 이건 일반 패키지로 작업하였군요.
https://codesandbox.io/embed/building-live-envmaps-forked-4cyqfk?codemirror=1

우어 어두운 사당에 효과음까지 무서운데.. 모바일 기준으로 클릭 하고 있으면, 파티클로 전환되면서 줌 인 되고, 다른 사당으로 전환되는군요! 이거 다시 클릭하면 줌 아웃 되면서 이전 사당으로 다시 되돌아와요.
https://wldlght.com/

카메라가 특정 오브젝트 주변으로 다가가면 텍스트가 나타나는데, 텍스트 말고 다른 형상이 나타난다거나 하는 등 응용해볼 수 있을거 같아요.얼마전에 봤던 nft 전시관에서는 바닥에 원형 표시에 가까이가면 화면에 갤러리가 표시되는거였는데, 이런식으로 응용도 좋은거 같습니다.
https://annoyingmuseum.zendesk.com/

스마트홈 입면도를 이렇게 3d 입체로 만들어서 webgl로 표현하는것도 좋은거 같은데.. 눈오는거 때문에 렉이 심한거 같아요. 눈 효과는 필요할때 키거나 개별 룸이 확대될때 배경 효과로 줘도 좋을거 같습니다.
https://nova-smarthome.ueno.co/

구찌에서 이런 랜딩도 만들었군요. 메이커나 명품 회사가 webgl로 전시관이나 미술관을 만든 곳들이 많은거 같아요. 나중에 태그를 추가해도 될 정도로 많아지고 있어요.
https://florafantasy.gucci.com/

이런 창의적인 생각은 대체 어떻게 하는걸까요. 전 갈길이 멀었습니다.
https://portfolio2022.michalzalobny.com/projects/exploding-particles

> safari 에 model 태그가 들어갑니다. 웹에서 3d 모델 뷰어라 다이렉트로 붙는거라서 앞으로 3d 가 중요하게 다뤄질 수도 있겠네요.
https://github.com/WebKit/explainers/blob/main/model/README.md

여기는 바닥에 동그라미 표시 있는 곳 위에 있으면 전체 화면이 바뀝니다. 외부에 있는 핑크 잔디 너무 예뻐요!
https://iconicmints.wsjbarrons.com/

이건 작년에 봤던 사이트인데 풍선을 여러번 클릭하면 바람이 서서히 빠지면서 나중에는 아래로 내려갑니다재밌는 예제들이 많은거 같아요!
https://davidtidman.com/

> feather3d라는 3d 저작 도구인데 놀랍게도 progressive web app (PWA) 이네요.  
sketchup + blender greasepencil 같아서 느낌이 아주 좋네요.  
https://feather3d.app/install/#crossroads

디올 쇼룸을 구경해보아요 (저도 이렇게 만들고 싶었습니다..!!)
https://capsule.dior.com/dioriviera-2022/fr_fr/

지금 파티클 애니메이션 만들어 보고 있는데 이거 끝나면 이거 만들어보려 합니다. 사실 만들고 싶은 목록에 있었는데 비슷한 예제를 찾아서 너무 좋습니다.
https://threejs-archviz.vercel.app/

> css 로 만들어진 3D 룸입니다.
https://codepen.io/ricardoolivaalonso/full/poLzvYJ

https://github.com/amsXYZ/three-fluid-sim

이케아에서 gatsby로 만든 사이트 공유합니다. 일러스트 제 취향이에요! 스페인어로 되어있긴한데 그림 덕분에 무슨 설명인지 추측이 되는거 같아요. 
https://www.family.ikea.es/vidacircular-demo-version/

이곳에 있는 예제 코드를 보고
https://github.com/cerrno/webxr-raytracer/blob/master/index.html

스크립트 타입을 보고  
`<script id="vertex-shader" type="x-shader/x-vertex"><script id="fragment-shader" type="x-shader/x-fragment">`

docs를 검색하였습니다.
https://developer.mozilla.org/ko/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL

제대로 알기 전까지 하나라도 놓치고 싶지 않아요. 똑같은거 보고 또 봐도 재밌습니다.

cursor 안에 svg 넣는거 한번도 본적 없습니다; css의 가능성이란... 엄청나군요!
https://codepen.io/t_afif/full/rNJPaJP

> 제가 제대로 이해한게 맞다면, Figma의 panel에선 기본 커서가 보여지는데, canvas 영역에서 커서를 상황에 따라 다르게 보여주는 것도 위와 같은 방식일 것 같습니다. 회전 할 때 커서도 같이 바뀌고 있어서 맞을거에요.

> vuejs 기반 threejs 활용 라이브러리입니다.  react-three 랑 비슷해요.
https://docs.lunchboxjs.com/

gltf 파일을 draco로 압축하는곳 있어서 공유합니다.
https://cables.gl/op/Ops.Gl.GLTF.GltfDracoCompression?w=examples

UV 이미지 사이즈는 여기서 줄이고, 줄어든 사이즈도 나와서 보기 편한거 같아요.
https://squoosh.app/

gltf 사이즈를 줄여주는 draco 예제를 살펴보아요
https://sbcode.net/threejs/loaders-draco/

요즘 3js 파티클 보고있는데 MeshSurfaceSampler 재밌는 친구 같습니다.  
Docs : https://threejs.org/docs/#examples/en/math/MeshSurfaceSampler  
예제 : https://tympanus.net/codrops/2021/08/31/surface-sampling-in-three-js/

CSS에 will change 속성에 대해 알아보아요.
https://developer.mozilla.org/ko/docs/Web/CSS/will-change

> 훈민님이 작업하신 링크 CSS로 기타를 그려 보았습니다.기타줄 부분을 누르면 소리가 납니다.  
데모: https://lqii8k.csb.app/  
코드: https://codesandbox.io/s/lqii8k

> 재호님이 작업하신 링크 2D CSS Animation 입니다. 알람 아이콘이 잘 눈에 띄지 않는다는 피드백이 있어서 간단하게 에니메이션을 만들어봤습니다.1/4 구간까지 한번 스윙하고 3/4까지 반대편으로 풀 스윙하고 돌아오는 에니메이션으로 ease-out 만 사용하여 최대한 간단하게 했습니다. 왜 2d인데 rotate3d를 썼냐고 하면 3d 일때 하드웨어 가속을 받아서 프레임이 잘나옵니다. swing 버튼을 누르면 딸랑거리고 stop 버튼으로 멈출 수 있습니다.
https://codepen.io/acidsound/pen/ZEXPrvw

포워드 렌더링 디퍼드 렌더링에 대한 글 입니다. 용어를 이해해보아요
https://hayeo-83.tistory.com/32

중국 사이트에서 지금 webgl 보고있는데 중국이라 그런지 리액트 보단 vue 예제가 많은거 같아요.이건 vue에서 360 파노라마 뷰 예제를 3js로 간단하게 구현해서 가져왔습니다.  
코드 : https://github.com/ljnMeow/360-house-viewing  
데모 : https://ljnmeow.github.io/360-house-viewing/dist/#/

> 중국에 개발자들이 커뮤니티로는 어디를 많이 이용하는지 궁금해요.  
baidu의 tieba나 https://bbs.tianya.cn/ 이런 포럼들을 많이 이용해요!  
https://tieba.baidu.com/  
첫번째꺼는 '티엔야룬탄'이고 두번째꺼는 '바이두티에바'입니다.

얼마전에 코딩애플 유툽 채널에 3js 멍뭉이 모델 불러오는거 영상 올라왔던데
https://youtu.be/CojyGfCMvuU

여기 코드를 참고했나보군요
https://github.com/SuboptimalEng/three-js-tutorials


vue에서 3js랑 d3로 중국 맵을 3d로 시각화하고 레이캐스터로 마우스 이벤트를 추가한 예제입니다.
https://github.com/Saitmob/3d-china-map

이거 보고 든 생각은서울 지도 3d로 하나 띄우고버튼 1 에 인구 밀도나 데이터에 따라 높낮이 다르게 주거나버튼 2 에 미술관이나 예술관 위치를 부루마블 미니 하우스 같이 작은 집 모델링으로 띄우거나버튼 3에 지하철 지하상가에 최근에 약국이 허가났는데, 의약품 판매하는 곳 표시하거나 등등
지도 데이터 하나 갖고도 웹에 여러가지 아이디어로 시도해볼만한게 많아서 재밌을거 같아요.

앗 블렌더로 모델링하고 웹에 올려서 온라인에 야외 결혼식장 만들었대요.  
카메라만 이동하는거면 이렇게 작업하는 것도 괜찮아 보입니다.  
https://www.facebook.com/groups/codingeverybody/permalink/7857391480967986/  
https://happilyeverafter.day/

오 저 이렇게 만들어 보고 싶었는데!! 역시 중국에는 없는게 없는거 같아요!
https://design.jiguang.cn/

엘든링을 웹에 그려보아요.  
https://github.com/dragonir/3d/tree/master/src/containers/Ring

불꽃 옵션들은 이곳에서 보시면 되셔요.  
https://techbrood.com/threejs/examples/webgl_fire.html

gltf 대신 fbx랑 obj로 작업한 리포 있어서 공유해요. 확실히 fbx가 사이즈가 더 큰거 같아요. 최근에 3js 예제나 r3f 예제를 많이 봐서 그런지 2018년 코드인데 굉장히 복잡해보입니다 ㄷㄷ 확대랑 축소에 따라 버텍스가 뭉개지는거 카메라쪽을 보면 되는건지 씬 추가를 보면 되는건지 어느 부분을 봐야할지 잘 모르겠습니다..ㅜ  
https://github.com/youngdro/3DPoints  
https://youngdro.github.io/3DPoints/index.html

> 물을 마우스로 움직일 수 있습니다.
https://oimo.io/works/water3d/

> 재호님이 작업하신 링크 CSS 로 만든 신디사이저 입니다.
https://github.com/khanhtranngoccva/3DSynth  
https://codepen.io/khanhtranngoccva/pen/BaYJGQa

와아 이분꺼 쉐이더 강의 들었는데 3js 강의도 오픈하셨나봐요!
https://github.com/NikLever/ThreeJS-Primer

> 매듭을 3차원으로… @.@
https://knots3d.com/

> CSS (filter, gradient, clip-path, inset box shadow) 을 사용한 입체적인 아이콘들이네요.깔끔하고 부드럽게 작동합니다.
https://codepen.io/onediv/pen/MWQKgmvmodern

> 관심있는 주제인데 마침 네이버에서 포스팅을~~ ^^
https://d2.naver.com/helloworld/6152907

5/21일 토요일 그래픽스 스터디 내용을 간단하게 정리하였습니다.
```
애니메이션이 적용된 모델을 알아보고 리액트에서 열어보았습니다.
r3f 라이브러리를 만든 poimandres에서 3d 에셋을 다운받을 수 있는 market 사이트를 만들어서
1. 다운로드거기서 애니메이션이 적용되어있는 gltf 모델을 다운받고
2. Threejs editor (애니메이션)Threejs 에서 제공하는 editor 에서 gltf를 임포트해서 애니메이션 부분만 정상 작동하는지 확인하고
3. 블렌더 (애니메이션)블렌더에서 임포트하여 애니메이션이 정상 작동하는지 확인하고 다시 gltf로 export 해서
용량 차이를 보았습니다.
3. 용량 비교사이즈가 차이가 있길래 gltf 뷰어에서 모델 두개를 비교하였습니다.
사이트에서 받은 모델은 2.7mb 버텍스는 21064 개, 블렌더 버전 1.5.17
블렌더에서 내보낸 모델은 2.3mb 버텍스는 21058 개, 블렌더 버전 1.8.19
4. 리액트사이트에서 r3f 전용 JSX 코드를 카피하여
리액트 프로젝트 하나 셋팅하고, 필요한 라이브러리들 전부 설치하고
카피한 코드 추가하고 실행해서 모델이 브라우저에 잘 나오는것을 확인한 후
애니메이션 실행을 하기위해 useAnimations 훅스를
3js docs에서 제공하는 내장 메소드와 함수를 알아 본 다음
actions에 애니메이션 네임과 play()로 실행하였습니다.

중간중간 더 많은 내용이 있었으나 짧게만 정리하자면 이정도 입니다.
노션에는 그래픽스를 공부하면서 논문 등 내용을 상세하게 적고있으나
오프라인에서 스터디를 같이 한 분하고 같이 작성한 내용이기에
제가 직접 작성한 내용만 공유하려 합니다.
아래 영상은 위에 적은 순서를 기억을 더듬어서 다시 찍은 영상입니다.
```

> 딥러닝 loss landscape를 interactive하게 볼 수 있게 만들었네요.
https://losslandscape.com/explorer

이렇게 스니펫 모아서 라이브러리로 만드는것도 나중에 도전해보고 싶습니다.
https://github.com/klevron/threejs-toys

이분 리포 보고 배울점이 많아보여서 가져왔습니다. 제가 팔로우하는 일본사람중에 한분이에요.
https://github.com/toshiya-marukubo/toshiya-marukubo.github.io

Made React hooks for Rapier physics (https://rapier.rs/) for use in React-Three-Fiber.
Simpler API than use-cannon, and the computations are wasm based with high performance.

@scroll-timeline아직 브라우저들이 지원하진 않지만  
만약 지원하게된다면 js로 구현하지 않아도 되고 너무 좋아요!!조금만 더 기다리면 언젠간 지원하게 되겠죠.  
지금 당장 사용하기 어려운건 공유 잘 안하는 편인데이건 제가 얼마나 기다렸던 속성인지 모릅니다.  
https://drafts.csswg.org/scroll-animations/#scroll-timeline-at-rule  
https://github.com/chokcoco/iCSS/issues/166

3js 독스를 보다가 Interpolation 라는 단어가 나와서 이게뭐지 하고 검색했는데 보간 이라고 번역이 나와요.  
아래 블로그에 설명은 '새로운 점을 만들기 위해 수많은 점들을 평균화시키는 것' 이라고 적혀있습니다.  
자주 보는 단어의 용어 설명은 나중에 다른 사람에게 설명할때 좋은거 같아요.  
https://iskim3068.tistory.com/35

> 애니매이션에선 주로 두개의 서로 다른 상태 혹은 동작을 이어주는 목적으로 사용하는데, 0을 상태 a 1을 상태 b라고 했을 때, 시간 0~1을 위의 그래프들 x축이라 할 때 그 상태를 y축으로 둔 것이라 생각하면 편한듯합니다. 선형 인터폴레이션은 주로 lerp라는 함수로 제공되고요..! 상태 a, b는 포지션, color 같이 완벽하진 않아도 float으로 나름 continous할 때 사용할 수 있습니다. 저는 dj들이 사용하는 장비에 두개의 음악에서 level을 조절하는 바가 있었는데 그게 가장 적절한 예 같았어요ㅎㅎ  
> 
> lerp는 linear interpolation의 약자일거에요
> 
> 블렌딩이 다 인터폴레이션해서 하는거죠
> 
> 애니메이션에서 많이 쓰이죠!
> 
> 이제 Extrapolation (외삽)도 알아보고 공부하세요~ 

그래픽스 책에도 보간 챕터가 있어서 노션에 적어두었어요! 보간은 이미지나 영상처리에도 사용되는 용어였군요!  
https://miniature-coral-d49.notion.site/Interpolation-47fd092ed90f470885f92a3a3ac8bc37

clamp() 에 대해 한번에 설명되어있어요!  
https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

이분은 Raymarch를 아래 유튭 보고 배워서 만든 예제라고 합니다  
https://raymarching-engine-visualiser.vercel.app/

아트오브코드  
https://youtube.com/c/TheArtofCodeIsCool

리액트에서 3js, d3, ngraph로 그린 데이터시각화 리포 있어서 가져왔어요.  
https://github.com/reaviz/reagraph

> threejs로 만든 너무너무 멋진 포트폴리오 사이트가 있어 공유합니다!
https://robinpayot.com

> 포트폴리오 사이트 같은데 모델 몇가지 누르면 카메라 이동하면서 보여주고 아이디어가 좋네요! 특히 홀로그램 라면 누르면 사라졌다가 다시 생기는거 신기한데 봐도 모르겠는 쉐이더 코드 @.@.. 그룹에 쉐이더 잘 다루는 분들 계신지 궁금해요.  
https://jesse-zhou.com/

> 전광판 누르면 깃헙링크가 있는데 코드도 볼수있네요.  
https://github.com/enderh3art/Ramen-Shop

> 홀로그램효과 threejs example에도 있었네요PointsMaterial 활용해서 하는건데 코드를 봐도 어렵군요@_@  
https://threejs.org/examples/?q=point#webgl_points_dynamichttps://github.com/mrdoob/three.js/blob/master/examples/webgl_points_dynamic.html

3js 기본 튜토리얼도 있고 따라하기 쉬운 글이 정리되어있는 곳이라 공유합니다.
https://en.threejs-university.com/

1.  
블렌더에서 obj 익스포트해서  
https://en.threejs-university.com/2021/08/04/exporting-a-3d-blender-model-to-three-js-format-obj-mtl/

3js에서 obj와 tml 불러오거나  
https://en.threejs-university.com/2021/08/04/loading-a-3d-obj-mtl-model-with-three-js/

.glb 파일이나 .gltf 파일 불러오는  
https://en.threejs-university.com/2021/08/04/loading-a-3d-glb-gltf-with-three-js-gltfloader/

간단한 방법이지만 정리되어 있습니다.

2.  
anti aliasing 을 true 와 false 일 때 비교 이미지와 pixel ratio 1.0과 0.5 비교 이미지도 있습니다.  
https://en.threejs-university.com/2021/08/06/optimizing-a-three-js-application-tips-for-achieving-a-fluid-rendering-at-60-fps/

3.  
3js에서 이미지로 smoke 효과 적용하는 간단한 방법도 있습니다.  
https://en.threejs-university.com/2021/08/04/creating-a-smoke-effect-in-three-js/

4.  
with ammo.js 베이직 튜토리얼도 있습니다. 이미지와 영상이 있어서 읽기 편한거 같아요.  
https://en.threejs-university.com/category/tutorials/physics/

r3f 성능최적화는 sketchfab 따라가는거 같은데 나중에 에픽게임즈가 pmnd 인수해가는거 아닌가몰라요 ㄷㄷ (오픈소스라서 안되겠져)  
https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance

퐁모델에 대해서 공부해보아요  
https://ally10.tistory.com/23

> 와~ 개발은 코드로 먼저 접근해버리네요. 저런거 배울때 저런 공식은 모르겠고 결과물로 나온 샘플샷으로 봐왔는데.
> 
> 앗 저두 공감해요! 일단 만들어보고 나중에 공부하는게 맞는거 같아요. 그래야 머릿속에 그려지면서 이해가 잘되는거 같습니다.

mask-clip으로 이미지를 원하는 모양으로 디자인해보아요  
https://css-tricks.com/almanac/properties/m/mask-clip/

r3f 전용 캐논 훅이 있어서 공유합니다. 이번 주말은 이거 갖고 놀아야겠습니다.
https://github.com/pmndrs/use-cannon

오! 해외에 소재박물관을 옛날에 보고 한국도 있으면 좋겠다는 생각을 한적이 있었는데 온라인에 생겼어요. 아카이브에 들어가서 샘플 보시면 소재 정보랑 기술공정, 분야 등 내용 상세하게 나와서 좋아요! 한국 제품 모델링할때 머테리얼 참고할 수 있을거 같습니다!  
https://www.fnnews.com/news/202205021445498074  
https://dkworks.designdb.com/  


스플라인으로 몰랑이 방 만들어봤어요.
https://my.spline.design/molang3dcopy-2de2c6761c011b3b2d2aa529db72ad62/

```
텍스처는 베이킹을해야 자연스러운듯해요. 조금 신기했던건 텍스처가 피그마처럼 컬러를 따로 묶어서 관리할 수 있는 것이 마음에 들고, 클립보드에 있는 이미지를 브라우저에 바로 붙여넣어서 텍스처로 사용 가능한 점이 제일 마음에 들었어요. 전체적인 평은 다른 3d 툴에서 모델링하고 스플라인에 올려서 프로토타입용으로 url 공유해서 보여주거나 r3f나 3js 코드로 뽑는 용도로 사용하기에 적절한거 같아요. 나머지는 음.. 모델링할때 뷰포트 4등분으로 나눠서 한번에 보고 단축키를 좋아하는 저로서는... 아..아직... 그래도 작년보다 훨씬 많이 개선된거 같아서 좋아요. 계속 더 발전하면 좋겠습니다. 시간은... UI 살펴보면서 만들면 한시간반 정도면 금방 익숙해지는거 같아요. 기즈모 초기화를 못찾아서 한참 헤맸습니다.
근데 기즈모는 맥스 사용자만 그렇게 부르고 다른 툴은 엑시스라고 부르나요..? 지금까지 저는 기즈모라고만 불렀는데 못알아듣는 분이 계셔서.. 정확한 용어가 툴마다 다른건지 궁금해져요. 아, 검색해보니까 유니티, 에펙, 지브러쉬도 기즈모라고 부르는군요! 3js에서는 엑시스 헬퍼라고 칭하던데.. 나중에도 못알아들으면 그냥 `기즈모 & 엑시스 & 엑시스 헬퍼 & xyz삼각막대기` 라고 말해야겠습니다.
```

> 3D 모델 몇가지를 무료로 제공하고 있는 사이트 공유드려요.모델만 받을수도 있고, React-three-fiber 또는 three.js 버전 용으로 바로 다운받아서 실행도 가능합니다. 코드 복사 기능도 제공하고 있구요. Edit Material에서 색상도 바꿔서 받아볼수 있어서 간단한 프로젝트에 활용하기 좋은 사이트입니다
https://market.pmnd.rs/

이거 후디니로 애니메이션 목킹하고 CSV로 뽑은다음 r3f로 만드셨대요! 우와! 은하계가 탄생하는 과정 같아요!!  
mocking in Houdini → exporting CSVs for each frame → writing a script to dump the frame data to a texture → sampling that for the keyframes  
https://otherside.xyz/explore

CSS로 3d할때 이렇게도 사용할수 있군요..!  
https://css-tricks.com/creating-the-digitalocean-logo-in-3d-with-css/

트랜스폼으로 반사되어 보이는 그림자를 만들어보아요.  
https://css-tricks.com/creating-realistic-reflections-with-css/

스크롤로 섹션 이동하는 개인포폴 있어서 예제에 참고하기 좋아보여서 가져왔습니다.  
아이소로 작업실이나 본인 룸 꾸미는거.. 귀여운거 같은데 저도 제가 원하는 작업실을 한번 컨셉잡고 만들어봐야겠습니다.  
https://bokoko33.me/

오.... css doodle 이게 무엇이죠.... 와.... 스타일 안에 쉐이더 넣는건 처음봤어요 ㄷㄷㄷ 와.... 신세계!  
https://www.jcode.pub/?css-doodle#/7091669983536611365

> 1995년도에 만든 3D 관련 소스코드입니다.
https://github.com/microsoft/Microsoft-3D-Movie-Maker

> 3D 에서 컨텐츠를 배치하는 방식이 필요할 때 쓰면 좋을 것 같습니다.  
예를 들어 블로그 글을 나열해서 보여준다던가 할 때 엄청 쓸모 있을 것 같네요.
https://github.com/pmndrs/react-three-flex

여기도 어워드랑 비슷한 곳이라서 WebGL 관련해서 참고해볼 디자인이 많아보여서 공유합니다.
https://orpetron.com/

> 그래픽스 위클리  
https://www.jendrikillner.com/post/graphics-programming-weekly-issue-233/

> 세상엔 참 멋진 작품이 많아요. twgl  
Hexells – Self-Organising System of Cells Drawing Textures [WebGL]  
https://znah.net/hexells/#149

사파리에서 루트에있는 변수들 레이어별로 접어서 볼 수 있어서 좋아보여요! (크롬도 어서 추가를..)  
https://webkit.org/blog/12303/css-variables-web-inspector/

이거 웹 컴포넌트로 만들어져있는데  
https://github.com/ManzDev/twitch-dvd-screensaver/blob/main/src/components/DVDScreenSaver.js

코드가 마치 SCSS 같이 읽혀져서 찾아봤습니다.  
데모 https://www.kirilv.com/canvas-confetti/  
리포 https://github.com/catdad/canvas-confetti  
웹에 쉽게 적용할 수 있는 재밌는 효과라서 가져왓어요. 우헹 이런거 재밌네요!

으와우 이정도면 영상 아닌가요! 일본은 말 그대로 크리에이티브한 분들이 정말 많이 계신거 같습니다.  
https://codepen.io/toshiya-marukubo/pen/QWaeReW

스플라인에서 만든거 3js r3f 익스포트 가능하대요! 아니 이렇게 업뎃이 빠를수가!  
Hi dev friends! We are exploring a couple of new ways to get your Spline scenes into your code projects.  
Now you can export Spline scenes as:- Vanilla JS- @threejs - react-three-fiber #r3f- React  
https://codesandbox.io/s/lol3p7

오오오 브루노쌤 3js 강의 r3f 리포가 있군요!!! 작년엔 없었는데!! 넘좋습니다!  
https://github.com/pmndrs/threejs-journey

와!! 언젠간 이거 비교해보고 싶었는데 역시 비교한 글이 있었군요!!!  
디자인 툴 마다 SVG passthrough precision 을 비교한 글 입니다.  
https://bjango.com/articles/svgpassthroughprecision/

간단한 CSS 키프레임을 쉽게 만들 수 있는 사이트 입니다.  
https://keyframes.app/

-aspect-ratio 블로그 글과  
https://www.bram.us/2020/11/30/native-aspect-ratio-boxes-in-css-thanks-to-aspect-ratio/#demo-2

미디어쿼리에 적용된 -aspect-ratio 공유합니다.  
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio

> `aspect-ratio`는 너무 최신 스펙이라서 막 사용하다가 QA에서 많이 얻어맞았어요.  
```iframe[width][height] {  aspect-ratio: attr(width) / attr(height);}```이건 상당히 흥미롭네요.  
> 
> 저희 회사에서는 이런식으로 사용하고 있어요 😃  
> https://blog.cobalt.run/co-design/?path=/story/co-design-core-aspectratio--default  
> https://github.com/cobaltinc/co-design/blob/main/packages/co-design-core/src/components/AspectRatio/AspectRatio.style.ts

Vue 사용하시는 분들은 3js를 이걸 많이 사용하시는군요. 스타 꽤 많은거 보고 놀랐습니다.  
https://github.com/troisjs/trois

블렌더 결과물을 웹에서 볼 수 있도록 해주는 웹뷰어 입니다.  
https://github.com/elia-orsini/BlenderWebViewer

이미지 한장만 준비하면 리액트에서 파티클을 굉장히 쉽게 만들 수 있는 라이브러리입니다!  
https://github.com/malerba118/react-particle-image

스크롤시 시차를 적용한 parallax 중에 흔하게 사용하는 sticky 와 fixed 예제 두가지를 쉽게 적용할 수 있어서 가져왔습니다. scrollex로 따로 만들어놔서 Keyframes, Parallax 처럼 필요한 부분만 임포트해서 적용하면 될거 같습니다.  
https://github.com/malerba118/scrollex

스타일은 이모션, UI는 chakra-ui, 애니메이션은 framer-motion, popmotion이 적용되어 있습니다. popmotion은 gsap랑 비슷해보이는데 TS 위에서 쓸 수 있는게 장점 같아요.  
https://popmotion.io/

> 훈민님이 작업하신 링크 : 약속 갑자기 미뤄졌을 때 시간 때울 겸 종종 고양이 페이지(?)를 만들었는데,내용물은 별게 없지만 한번 공유해봅니다.
https://avantgarde95.github.io/cat/cat2.html

VanillaJS, 3js, vite, lil gui 보일러 리포가 있어서 가져왔습니다.
https://github.com/andersonleite/threejs-andy-bolierplate

간단한 모델을 Touchdesigner로 만들고 텍스처랑 glsl을 3js에 올리는 영상입니다.
https://youtu.be/lCyILpkPQ4g

조금 더 나아가서 파티클 glsl을 만드는 영상도 있습니다.
https://youtu.be/iq0npg_O-rI

웹 에이전시 포폴도 좋지만 이렇게 개인적인 Creative developer 포트폴리오를 보는것도 재밌는거 같아요.  
디자인하고 코드 오픈되어있어서 참고하기 좋아보입니다.  
https://www.john-beresford.com/

CSS 애니메이션으로 물결을 만들어보아요.  
1. svg로 만들기 https://pokecoder.hashnode.dev/create-a-wavy-text-effect-with-pure-css  
2. 백그라운드로 만들기 https://codepen.io/t_afif/full/MWrZPoB  
3. 이미지 움직여서 만들기 https://github.com/fe-w/drawingwithcode/tree/before/src%2Fui%2F11-20%2F19-Water

r3f와 GLSL로 만들면서 설명을 한글로 정리해주신 분이 계셔서 공유합니다.  
https://velog.io/@kimbyungchan/shader-halftone  
https://velog.io/@kimbyungchan/react-threejs-shader-tutorial

구글폰트 사용하고있다가 폰트가 변하는 일이 생길수도 있대요. 그래서 웹폰트 생성기로 자체 글꼴 호스팅하여 만드는걸 추천한다고 합니다.

여기 포스팅안에 웹폰트 생성기 있어요.  
https://css-irl.info/a-reason-to-self-host-fonts/

여기는 구글폰트 속도 향상에 대한 내용이 정리되어 있습니다.  
https://sia.codes/posts/making-google-fonts-faster/

본문에 나온 주소에서 테스트하면 나오는 이미지였어요! 검색은 webpagetest org로 검색했습니다.  
https://jasonfleetwoodboldt.com/2020/07/01/webpagetest-org-1/

(hover: hover) 지금까지.... 이거.. 왜 몰랐... 저는.. 아는게 없군요.. ㅠㅠ지금이라도 알아서 다행입니다.
https://velog.io/@nooroong/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9%EC%97%90%EC%84%9C-hover-%ED%9A%A8%EA%B3%BC-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-uqp0511a

```
CSS, WebGL, Shader 로 작업하신 분들 링크 모아봤습니다.
공부하고계신거 정리하시거나 간단하게 만든 링크도 좋아요.(전 WebGL은 배우는 중이라서 CSS로 만들었어요.)
예제 코드를 계속 보거나 강의를 듣는 것도 좋지만 결국 남는 건 만든 결과물이라 생각합니다!
일년에 한번 하나씩 추가해가면 몇 해 뒤에는 실력 뿐 아니라 결과물도 많이 쌓여있지 않을까합니다.

김태우 강의 정리 (3js) https://github.com/kim-taewoo/threejs_journey
박용 개인 프로젝트 (3js)  https://pangol.github.io/donate99
박진호 개인 프로젝트 (Web Editor) https://editor.easylogic.studio/
붉은거위 개인 프로젝트 (Visual) https://redgoose.me/nest/visual/
엄태성 개인 프로젝트 https://eumray.com/
이다래 개인 프로젝트 (CSS) https://github.com/fe-w/drawingwithcodeCSS
예제모음 https://fe-w.github.io/svg-basic/
강의 정리 (3js) https://github.com/webgldev/threejs-journey
이선협 개인 발표 (Metal) https://present.do/presentations/61346fa35b179c0da746536a
Seungmin Lee 개인 프로젝트(p5js) https://uxplus.dev/noisy-grid/
이윤규 아티클 (3d 이모지) https://jackface.oopy.io/framer
이재호 개인 프로젝트(shader) https://observablehq.com/@acidsound/monofireworks
장성진 아티클 (CSS 애니메이션) https://brunch.co.kr/@99-life/2
정용진 개인 프로젝트 (3js) https://instagram.com/ainvyu
Yu Jin Yi 개인 프로젝트 (creative coding, canvas sketch) https://www.instagram.com/rrnwnsgl/?hl=ko
Jehyun Lee 개인 블로그 https://jehyunlee.github.io/
Hun-Min Park 미니 프로젝트 https://codesandbox.io/s/simple-christmas-tree-c6jjj?file=/index.html
jang seon ho 강의 정리 (3js, p5js, canvas) https://github.com/dion-hoo/threeJs
```

여기 포스팅에서는 이정도만 보이는거 같습니다.  
https://css-irl.info/exciting-times-for-browsers-and-css/?utm_source=dailydevlinks.com&utm_medium=newsletter&utm_campaign=dailydevlinks.com&ref=dailydevlinks.com

- css에 삼각함수 추가 sin() cos() https://www.w3.org/TR/css-values-4/#trig-funcs
- 사파리에 New Viewport가 vi 뷰포트인라인 하고 vb 뷰포트블럭 추가되었다고 합니다. https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/
- :focus-visible https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#selectively_showing_the_focus_indicator
- window.scrollTo & scroll-behavior: smooth; https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

SVG 익스포트할때 팁이 소개되어 있습니다.  
https://bjango.com/articles/svgexports

> 안녕하세요!코드로 모션 작업을 해보고 싶은 프로덕트 디자이너 이윤규입니다. 이번에 포폴 작업하면서 모션 작업을 쉽게 도와주는 라이브러리 framer-motion을 쓴 사용 후기랑 간단한 사용법 정리했습니다.https://jackface.oopy.io/framer 더 공부해서 다음엔 더 좋은 글 갖고 오겠습니다. 

conic-gradient 는 사용해본적 없는데 이렇게 패턴을 만들수도 있군요! 지그재그랑 하트 패턴  
https://codepen.io/t_afif/pen/rNpQYGW  
https://codepen.io/t_afif/pen/OJzaoQN  

그라디언트를 저는 헥사랑 rgba 값으로 넣곤했는데 from at을 사용하기도 하나봐요.  
CSS로 백라이팅 표현할때 그라디언트를 변수로 컬러 여러개 섞어서 사용하는것도 봤는데 만드는데는 쉬워도 관리하기는 어려울거 같아요.

```css
--s: 120px;
/* control the size */
background: radial-gradient(at 80% 80%,#e7525b 25.4%,#0000 26%), radial-gradient(at 20% 80%,#e7525b 25.4%,#0000 26%), conic-gradient(from -45deg at 50% 41%,#e7525b 90deg,#78dbf0 0) calc(var(--s)/2) 0;
background-size: var(--s) var(--s);
```

으어 SVG도 아닌데 이렇게 div 하나에 마스크로 공 세개를 만드는 방법도 있군요.
```css
.loader {
  --s: 180px;
  /* the size */ 
  /* the colors */ 
  --c1: #F77825; 
  --c2: #D3CE3D; 
  --c3: #60B99A; 
  --c4: #554236;
  /**/
  width: var(--s);
  aspect-ratio: 8/5;

  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: calc(var(--s)/4) calc(var(--s)/4);
  background: conic-gradient(var(--c1) 50%,var(--c2) 0) no-repeat, conic-gradient(var(--c3) 50%,var(--c4) 0) no-repeat;
  background-size: 200% 50%;
  animation: b 4s infinite linear, l 2s infinite;
}

@keyframes l {
  0%     {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  16.67% {-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
  33.33% {-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
  50%    {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
  66.67% {-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
  83.33% {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
  100%   {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
}
@keyframes b {
  0% ,24.9% {background-position: 0%   0%,0%   100%}
  25%,49.9% {background-position: 100% 0%,0%   100%}
  50%,74.9% {background-position: 100% 0%,100% 100%}
  75%,100%  {background-position: 0%   0%,100% 100%}
}
```

https://codepen.io/t_afif/pen/xxpyoqL

> https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradientconic-gradient 라는게 있군요!  
> https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient#gradient_pie-chart 파이차트 그릴 떄 좋겠다..라고 생각하면서 보고 있는데 역시 있군요. 좋은 거 배워갑니다.

> 선협님이 작업하신 링크 : canvas에 간단한 그림판처럼 쓸 수 있는 라이브러리를 제작했습니다. 회사 제품에 적용할 계획으로 만들었는데 언제 적용하게 될지는 모르겠네요.  
https://github.com/cobaltinc/atelier

앗?! scss에서 &를 뒤에다가 쓰는 경우도 있나요. 멀티 클래스를 이렇게 적을수도 있군요!저 처음봤어요...!
https://zenn.dev/kagan/articles/1aa466bb6ef8eb

```
// ❌.Block {
  &.Block--modifier {        
    .Block__Element {            //  → .Block.Block--modifier .Block__Element {}        }    }}.Block__Element {}

// ✅.Block__Element {    
  .Block.Block--modifier & {        //  → .Block.Block--modifier .Block__Element {}    }}

> 계층 구조를 거꾸로 표현해요. 자식 기준으로 selector 를 만들어줍니다.  
> -> 아!! 왜 거꾸로 표현하는건지 궁금해요..! 헷갈릴수도 있을거 같아요 ㅜㅡㅜ  
> 미디어 쿼리 트릭 쓸 때랑 비슷해요. media 쿼리 쓸려면 최상단부터 맞춰야 하는데 그럼 특정 자식 변경점 수정하기 너무 어려우니 자식 기준으로 상위 미디어나 부모를 나열하면 그 자식 코드만 수정하면 되서 코딩할 때 심플해져요.  
> -> 앗 설명 너무 감사합니다!! 자식을 기준으로 수정할수있는 컴포넌트가 어떤게 있는지 잘 안그려지는데.. 진호님은 혹시 자식을 기준으로 작업해보신적 있으신지 궁금해요..!  
> `.section {  @include media("retina", "<minWidth") {    color: white;  };}` 이런거랑 비슷해요. 
.section 에만 media 쿼리 적용 하고 싶을 때 이렇게 안하면 미디어 쿼리를 최상단에 정의해놓고 .section 까지 와야 하는데 .section 혼자 있지 않고 몇 겹으로 중첩되어 있으면 상당히 불편할거에요.  
> -> 아아.. 저도 include로 해당 미디어만 주는편인데 나중에 수정 찾아기 힘든적이 있었어요 이거에 대한 해결은 아직도 찾고있습니다. 근데 이거랑 별개로 본문에 있는 멀티클래스를 부모에 넣으면 상속으로 &를 클래스명 앞에 두는데 자식에 넣어서 만들면 왜 마지막에 &를 적는지가 궁금한점이긴 했습니다. (제가 지금 처음보는거라 혼란스러운가봐요)
> 이렇게 생각하시면 쉬울 것 같습니다. 두단계 이상 부모를 넘어가야 할 때 를 상상해보세요. 마지막 자식 기준으로 부모를 맞출 수 있으면 상당히 편리할 때가 있습니다.  
A {    
  B {        
    C {             
      D {    --> 요기에 A 랑 연관된 코드를 적고 싶음             
      }         
    }     
  }
}
> -> 아... 그럼 D에서 A를 적고 B에서도 A를 적을 수 있겠군요..! 저는 이런 경우가 생기면 아예 루트로 빼서 전역에서 관리하곤 했는데.. 자식을 기준으로 관리하는게 편할수 있겠군요. 친절한 설명 감사합니다!  
> 네 맞아요. ^^ 가끔이지만 코드 자체를 자식 기준으로 맞추면 A 에 모든 코드를 넣지 않아도 되니깐요 ^^
```

저 이분꺼 보다가 farthest-side 보고 mdn 검색해봤습니다. circle 하고 ellipse 에 적용하는 gradients 엘리먼트가 closest-side, closest-corner, farthest-side, farthest-corner 라는게 있는데... 지금 알았습니다!  
https://codepen.io/t_afif/pen/rNpZdpY  
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient


정호님이 공유해주신 zustand 도입
```
몇 일 전에 zustand를 도입했는데, 그 이유 입니다. 틀린 부분 있으면 지적해주세요 ㅎㅎClass Componentreact class component 의 라이프 싸이클은 아래와 같습니다.마운트될때constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()this.props나 this.state가 업데이트될때getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()shouldComponentUpdate()에서 this.props, this.state를 전과 비교하고false를 리턴하면 render()가 불리지 않고,true를 리턴하면 render()가 불려서 component에 해당하는 부분만 다시 그려집니다.props는 <Welcome name="my name" /> 에서 name과 같이 외부에서 전달되는 property이고state는 component 내부에서 정의하고 변경합니다.Functional Componentreact 16.8 버전 이후 부터는 functional component를 쓰기 시작했는데요아래 두 코드는 동일한 component를 표현합니다.// example react class componentclass Welcome extends React.Component {  render() {    return <h1>Hello, {this.props.name}</h1>;  }}const Welcome: React.FC = props => {  const { name } = props
return <h1>Hello, {name}</h1>}마찬가지로 props나 내부 state 변경 시, function 본문이 실행됩니다.State managementprops로 일일이 값을 넘겨주게 되면 component tree depth가 깊은 경우 복잡하고 불편해지기 때문에,Context API, redux, zustand 등의 툴은상위 단계에서 관리되고 있는 변수값에 하위 컴포넌트에서 바로 접근해서 쓸 수 있도록 도와줍니다.state가 변경될 때 마다 re-render되면 자기뿐만 아니라 children까지도 recursive하게 전부 re-render됩니다.정말 필요한 부분만 re-render가 호출되도록 제한하기 위해서state에 접근해서 필요한 부분만 꺼내오는 selector function들은 equality 비교 함수를 지원합니다.Zustandreact의 기본 컨셉은 state가 변경되면 re-render하고, state가 변경되지 않으면 re-render 하지 않는 것입니다.하지만 three.js는 기본적으로 react를 위해 구현된 라이브러리가 아닙니다.react-three-fiber는 three.js를 react component로 wrapping하면서render가 불리면 내부에서 three.js instance의 메모리를 새로 할당하는 방식이기 때문에re-render가 되버리면 기존에 생성된 인스턴스들이 자동으로 disposal이 되지가 않아서,메모리 누수가 발생하는 구조입니다.memoize를 통해 이미 생성된 인스턴스를 재활용할 수 있는 부분을 최대한 신경쓰면서 동시에,state가 변경되더라도 component re-render는 막아야 할 필요가 있습니다.하지만 동시에 GL draw call에 전달되야할 state는 변경된 값이 useFrame hook 내부로 전달되야 합니다.zustand는 이런 상황에 필요한 transient update 기능이 지원되는 state management library입니다.
```

텍스트 드래그시 그라디언트 애니메이션 입니다. 크롬 기준이고 갤럭시 모바일에서는 안되나봅니다.  
https://devdev.jp/

> Making a 2D RPG game with react-three-fiber  
https://dev.to/flagrede/making-a-2d-rpg-game-with-react-tree-fiber-4af1

How to reproduce Death Stranding UI with react and react-three-fiber  
https://dev.to/flagrede/how-to-reproduce-death-stranding-ui-with-react-and-react-three-fiber-cif

> Inigo Quilez 님 최신 영상이 올라왔는데 그룹에 없어서 가져옵니다. 요즘 행렬 보고 있는데 넘 재밌네요.  
https://www.youtube.com/watch?v=BFld4EBO2RE

> 그래픽 관련 아티클들을 모아놓은 곳입니다
https://www.jendrikillner.com/article_database/

css에서 :where() 사용 방법에 대한 포스팅 입니다. 전 scss 사용하고나서 한 컴포넌트 안에 상속받는 돔노드들은 다른곳에 중복 영향이 없는이상 클래스명을 모두 명시해주지 않는 편인데, 이젠 전처리도구 없이도 그냥 css로 작업이 가능해져서 점점 더 좋아지는거 같아요.  
https://blog.logrocket.com/deep-dive-css-where-function/

코드 샌드박스 CI 사각형(?)으로 바꿨나봅니다. 종종 이렇게 랜딩페이지 스압 심하게 뽑은거 보는데 스크롤 계속내리면 불편하지 않나요. 데탑쓰면서 마우스로 내려서 그런가... 랩탑은 손으로 휙휙 하기만하면 되니까 상관없으려나요. 이미지, 아이콘, 텍스트 애니메이션 등 인터랙션 참고하는정도로 마지막까지 참으면서 스크롤 내리며 봤습니다.  
https://projects.codesandbox.io/

이 포폴은 3js 강의듣고 만드셨대요. 이분 스택은 웹+게임+건축시각화 이군요. WebGL 하시는 분들 스택 보면미디어아트, 건축시각화, 게임셋중 하나는 꼭 들어가는거 같아요.기본적으로 모델링은 다들 하실줄 아시는듯 합니다. 그렇다면.. 3d 모델러, 건축 디자이너, UI디자이너, 프론트개발자 중에누가 WebGL을 배우고 스스로 만드는게 빠를지 궁금해지는군요. 요즘 디자이너를 위한 3js 강의들 나오는거 같던데 어떤 디자이너를 위한 강의일지.. 디자인도 분야가 많은데 말이죠. 입문하시는 분들은 WebGL 배우려면 알아야할거 정말 많은데 라이브러리 사용방법 강의 갖고 될지 모르겠습니다.. (제 자신이나 잘하는걸로..)  
https://www.nincs.design/

실시간 바람 데이터로 이런 기하학을 만들수도 있군요. 이런 작품을 온라인으로 볼 수 있다니.. 너무 좋습니다.
https://fb.watch/flpg2p54AX/

3D 물체가 mesh rendering되고 우리가 실제로 관찰하는 모니터에 나타나기까지의 과정인 vertex shader -> rasterizer -> fragment shader -> output merger  

- 위에 순서중에 두번째인 래스터라이저에 대해 알아보아요  
https://sos0911.github.io/cg/CG7/

- 이건 위에 내용과 동일한데 설명이 더 풀어져있어서 개념을 이해하기 쉬워보입니다.  
https://m.blog.naver.com/tlsqudgns6/222422217375

CS랑 CPU GPU 통신 이해하며 WebGL과 OpenGL을 따로 공부하기보다 같이하는게 (저는) 이해가 빠를거 같아요. 전 C나 C#, GLSL, HLSL 언어는 아직 잘 모르지만 일단 개념을 이해하고 언어를 시작하면 코드를 짜는데 이해가 쉬울거 같습니다. 자주 사용하는 용어들을 눈에 익혀두는게 나중에 자료를 찾아볼때 도움이 되서 좋아요.

블로그보다 영상으로 이해하는게 더 쉬운 분들도 계실거 같아서 유튭 링크도 같이 적어둡니다.

- 몇달전에 공유했던 아주대 교수님의 WebGL 1.0 그래픽스 강의도 같이 들으면 개념을 이해하는데 도움이 됩니다.  
https://youtube.com/playlist?list=PLKseYrrlvWNqmtCMZyoraXIAG2F0sG2o7

- 위에 영상이 너무 길고 어려우면 강원대 교수님 OpenGL 강의가 좀더 쉽게 설명해주십니다.  
https://youtube.com/playlist?list=PLvNHCGtd4kh_cYLKMP_E-jwF3YKpDP4hf

> 그룹에서 webgl fundamentals 시리즈 공부하시는 분들이 계실텐데 webgl2로 넘어오세요~  
> 이미지 처리까지 봤다가 Vertex Array Objects 가 표준으로 들어온 걸 보고 변경하는 걸로 결정했습니다.  
> varying 보다 in/out이 더 직관적이고 여러모로 편리합니다.  
https://webgl2fundamentals.org/webgl/lessons/ko/webgl-getting-webgl2.html

> 컴퓨터 그래픽을 제대로 다뤄본 적이 없어서 글을 정확하게 이해하고 있는지 헷갈립니다. 제가 이해한 내용은 다음과 같습니다.  
three.js 같은 3D 라이브러리에서 제공하는 것보다 저수준의 개발이 필요할때는 WebGL API 을 사용하는데, WebGL API 를 사용하기 위해서는 선형대수학 등의 더 깊은 지식이 필요하다.  
https://webglfundamentals.org/webgl/lessons/ko/webgl-2d-vs-3d-library.html

ease-in-out으로 떨어지는 별똥별을 그려봅시다!  
https://codepen.io/YusukeNakaya/pen/XyOaBj

Verly 라는 물리엔진 라이브러리 입니다.  
https://github.com/anuraghazra/Verly.js

혹시 여기에 v.s v.t v.p v.q 에서 s t p q 가 무슨 약자인지 아시는 분 계신가요.  
https://webglfundamentals.org/webgl/lessons/ko/webgl-shaders-and-glsl.html

> texture 좌표를 표현하기 위해서 사용하는데 따로 약자가 아닌 그냥 xyzw, rgba와 겹치지 않는 문자를 사용하는 것으로 알고있어요.  
> https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf
> 
> 텍스처 이미지는 크기가 제각각인데다 크기를 바꾸는 경우도 종종 있으므로 픽셀 단위로 좌표를 지정하면 일관성이 없다. 그래서 0 ~ 1 사이의 실수 좌표로 비율을 지정한다. 정점의 좌표 표현시 보통 xyzw 명칭을 축으로 사용하지만 축 명칭이 같으면 헷갈리므로 텍스처는 strq라는 좌표축 명칭을 대신 사용한다.
void glTexCoord[1,2,3,4][s,i,f,d][v](s, t, r, q);  
> http://soen.kr/lecture/library/opengl/opengl-10.htm
> 
> rgba의 r과 겹쳐서 strq -> stpq  
> 
> s는 scalar의 s, t는 s다음이라 t, 그 다음 알파벳인 u와 v는 uv좌표계와 혼동될 수 있어 s 이전 알파벳을 사용하는데 r, q에서 r은 이미 겹치니 자주 사용안되는 q를 사용했다.. 라는 말은 들었는데 이게 진짜인지 아닌지는 확실하지는 않습니다.
> ㅇㅏ.. 여기서 그냥 검색해볼껄 질문부터 했.. https://stackoverflow.com/questions/47969475/what-is-the-meaning-of-s-t-p-q-in-vector-components  
> 말씀주신 이유로 OpenGL ES에서 이름이 변경되었다고 읽었는데 다른 이유는 없는듯해요.
> 

로우폴리로 화면만 좌우 이동시키는거면 유니티에서 3js로 익스포트하는걸로 만들어도 좋을거 같아요! (그 기능 나중에 나온다면요 ㄷㄷ)  
음... 그룹에 공유 4개월 해보니까이제 js 라이브러리 사용법 공부 그만하고쉐이더 하나만 파는게 좋을거 같다는 생각이 듭니다.  
결국엔 표현하고 싶은걸 표현하려면 쉐이더가 답이 아닌가 싶어요.  
https://twitter.com/perbyhring/status/1511244278298783751

> vertex shader는 고정하고 fragment shader 로만 프로그램 만들면 멀티플랫폼 되요 xD폰이든 컴이든 웹이든 쉐이더 코드는 같으니.uniform으로 이벤트(키보드/마우스/터치 입력, 시간)만 주입하는 껍데기만 만들구 다 그냥 한판짜리 전체회면에 밀어넣는거죠! https://youtu.be/VYueRQea74c 이런거 재미있어요..

이제 WebGL 하려면 c# + JS면 되는 세상이 온 것 같습니다. 유니틴 원래 html canvas 보내지 않았나요! 3js 익스포트 된다해도 라이팅은 다시 손봐야하는거 같던데.. 모델링 불러오는거 정도는 그냥 웹에서 해도.. 아무래도 물리 애니메이션 때문에 기다린 사람들 많았던거 같아요. 뭐든 시도는 좋은거 같아요. 이런 웹앱 경계 없어지는 세상 너무좋습니다!

오... 제가 좋아하는 쉐이더만 쏙쏙 모아둔 라이브러리 발견해서 가져왔어요!  
https://github.com/pschroen/alien.js

오브젝트가 여러개일 경우도 각각 gui 편집도 가능해서 좋아요!  
https://alien.js.org/examples/3d_panel_tracking.html

폴리곤 메쉬와 법선 벡터에 대해 요약정리 되어있는 글 입니다. 이분 이해하기 쉽게 정리 잘하는거 같아요. 블로그가 노트패드 같아서 읽기도 편합니다.  
https://gusdnd852.tistory.com/279  
https://gusdnd852.tistory.com/280  

> 최근에 Cascade layer에 관심을 갖고 보고 있는데 과연 Flex와 Grid 속성만큼 엄청난 변화를 일으킬 수 있을지 기대되네요.  
https://developer.chrome.com/blog/cascade-layers/  
https://caniuse.com/?search=layer  
https://css-tricks.com/css-cascade-layers/  

CSS에서 사용하는 Math 함수를 알아보아요  
https://stackdiary.com/css-math-functions/  
`calc()min()max()clamp()sin()cos()tan()acos()asin()atan()atan2()hypot()sqrt()pow()`

폰을 회전해야만 읽을 수 있는 글이라고 합니다.  
https://github.com/ikeryou/sketch194

익스텐션 공유한김에 p5js 튜토리얼 긱스에 있어서 공유해요!  
https://www.geeksforgeeks.org/p5-js-introduction/

r3f 버전8은 리액트 18 버전이 나오길 기다렸나봐요. 항목별로 정리하려했는데 시간이 걸릴듯하여 일단 공유하고 퇴근할때 천천히 보려합니다.  
https://docs.pmnd.rs/react-three-fiber/tutorials/v8-migration-guide

이분 작년에 RN에 r3f올리다가 삽질기만 남아있고 포기하셨길래 이번에 버전업된거 댓글 달아드렸습니다.  
https://090k.tistory.com/164

p5js 에디터에서 작업하실때보면 프리뷰가 우측에 있는데요. 프리뷰를 좌측으로 위치 바꿔주고, 우측에서 에디터로 작업할수 있게좌우 바꿔주는 간단한 기능인 크롬 익스텐션입니다. 근데 코드샌드박스도 그렇고 다른 에디터들도 좌측에 있는 경우가 많은 이유가개발 에디터들이 파일 경로 탐색기가 보통 좌측에 있어서 그런건데 vscode도 보면 우측으로 옮겨서 사용하시는 분들이 계신걸보아에디터도 우측에서 사용하는걸 선호하는 사람들이 있을걸로 생각됩니다. 혹시 나라마다 다른 운전대 방향이나 식사하는 손에 따라 선호하는게 다른건지 상관관계가 궁금해지기도 하는군요.  
https://chrome.google.com/webstore/detail/p5js-editor-flipper/helambaokfdbmagiklpikpbhkkjkjblc

> 재미있는 이펙트라 공유드립니다. 아마 PC에서만 보일 수도 있으니 PC로 한번 봐주세요! 페이지 맨 위에 우주배경으로한 이미지에서 퍼스펙티브가 변하는 거 같은 효과를 2d div판 위에서 구현해놨는데, 흥미롭습니다. 이정도 효과에는 저정도만 해줘도 충분한 착시가 생기는거 같네요.  
https://art.hellodave.co/

이렇게 꾸준히 작업하시는분을 보면, 그사람이 무슨 생각과 말을 하던꾸준함 한가지만 보고 존경심이 생기는 것 같습니다. 꾸준함은 쉽지 않다는걸 알고있기 때문입니다.  
https://openprocessing.org/user/240456/?view=sketches

마크업 속성들은 가끔 한번 보는것도 점검할수 있어서 좋아요.이미지에 loading=lazy 같은 엘리먼트를 적용해주면 천천히 나오고dialog 적용하면 js로 안만들어도 모달 나오기도하고  
1에서 6까지 그냥 쭉 보다가  
7에 보시면 윈도우 오브젝트도 나와있어요  
8은 웹 애플리케이션 api  
12는 웹스토리지  
13은 HTML syntax  
15 렌더링  
전 이정도만 퇴근하면서 그냥 슥 읽어봤습니다!  
https://html.spec.whatwg.org/


```
질문이 하나 있습니다. 여기 계신 분들은 3D 관련 개발 직업으로 회사 면접을 볼 때 어떤 과제를 주로 하시나요? 그냥 코딩 테스트만 하시나요? 이 쪽으로는 한번도 진행을 해본적이 없어서 ^^;; 감이 잘 없네요.

> 실제로 하는 프로젝트와 같은(혹은 비슷한) 플랫폼을 사용하면서, 진행 중인 프로젝트와는 내용은 조금 다른 과제들을 준 것 같습니다. 혹시 면접 중의 질문을 말씀하시는 거라면, 알고리즘이나 언어나 플랫폼의 특성들에 대한 질문하는 세션과 시스템 디자인 하는 세션을 나눠서 진행하고 있습니다.  
> 
> 소중한 의견 감사합니다. ^^ 혹시 과제 퀄리티는 연차에 맞게 내시나요?
> 
> 연차 보단 포지션의 레벨과 저희가 원하는 수준에 따라 결정합니다. 같은 지원자가 mid level과 senior level을 동시에 진행한다면 당연히 senior level 면접에서 더 많은 걸 요구합니다.  
> 
> 다른 사람이 같은 레벨을 지원한다면, 같은 수준의 요구사항을 갖고요.  
>  
> 아하, 일단 저희의 수준을 먼저 정리를 하고 그 상황에 맞게 과제를 맞춰봐야겠네요. 감사합니다. ^^  
> 
> 네 아무래도 지원자에 맞춰 질문을 준비하기 보단 포지션에 맞춰 지원자에게 면접이 주어지는게, 서로에게 불필요한 오해를 줄이는 방법이라고 생각해요. 화이팅입니닷~  
```

> Bloomberg Green에서 국가별 탄소배출량을 three.js를 활용해 시각화한 기사입니다.  
이런 멋진 그래픽 기사를 쓸 수 있는 환경이 부러우면서, 이런 data-driven storytelling에 대해 한편으로는 많이 배우게되네요. 같이 보면 좋을 것 같아 공유합니다!
https://www.bloomberg.com/graphics/2022-wealth-carbon-emissions-inequality-powers-world-climate/

> 제로초님을 아시는 분이 계실지 모르겠네요. 책도 출간하시고, 여러가지 강의도 올려주시는데요.
2D, 3D의 기본 Base가 javascript이고, 요즘 정말 js는 막강한 언어가 되어가고 있는거 같습니다. 
JavasSript에 대해서 좀 더 학습해보고 싶으시면 아래 강의 한번 보시면 도움이 많이 되실거 같아서 공유드립니다.즐거운 주말 보내세요.  
https://m.youtube.com/watch?v=NS1cIsWlFGI&list=PLcqDmjxt30Rt9wmSlw1u6sBYr-aZmpNB3

저번에 노이즈 텍스처 만드는 방법을 몇가지 찾아서 공유한적 있었는데요. 쉐이더로 적용된 텍스처가 있어서 공유합니다. 근데 카메라가 이동되고 멈출때까지 계속 자글자글하게 보여지는거 같아요. 3d보단 2D가 적합한걸까요.  
https://codesandbox.io/s/bhwrn?file=/src/index.js

> 자글자글한건 uv 값을 랜덤에 넣어줘서 그런데, 랜덤이 tendency가 없어서 그런 것 같습니다. uv는 카메라의 위치에 따라 변환되는 matrix 연산이 계속 있어서 아주 작게나마 값이 계속 변하고 그게 영향을 주는 듯 합니다. `float random(vec2 st)    {      float _x = trunc(st.x* 1000.0) / 1000.0;      float _y = trunc(st.y * 1000.0) / 1000.0;      return fract(sin(dot(vec2(_x, _y), vec2(12.9898,78.233))) * 43758.5453123);    }`
> 
> random을 이렇게 바꿔주시면, 작은 변환는 무시해서 텐던시는 유지하되, 해상도가 다소 낮아보이는 side effect가 잇습니다.  
> 
> 1000.0을 적당한 값으로 조절해주는 heuristic 한 작업이 필요할거 같네요.  

drei에 api는 무엇무엇이 있는지 살펴보아요. 오늘 개발하며 느낀점은... 라이브러리에 있는 api를 먼저 살펴보자! 입니다.  
https://drei.pmnd.rs/?path=/story/staging-accumulativeshadows--accumulative-shadow-st

> 3d 모델링에 대한 이야기가 많아서 가지고 왔습니다. (저기 있는 말 다 이해할 수 있는 사람이 되고 싶네요. ^^)  
https://topologyguides.com/

이요오오 shader tool for the web ♡  
https://nodetoy.co/

흠 맵핑 이렇게 사용하면 라이팅 안써도 될 거 같아요. 근데 단순한 오브젝트 아니면 위치잡기 어려워 보이기도 하고.. 킵했다가 담에 함 만들어봐야겠습니다.  
https://codesandbox.io/embed/kpuxe?file=/src/App.js&codemirror=1

오 svg 사이즈를 이렇게 줄일수가 있군요! 단순한건 좋은데... 위치 복잡한건 줄일수 있을지 의문이에요.  
https://css-tricks.com/optimizing-svg-patterns/

> 일본에서 최근 몇번 언급되는걸 봤는데, 찾아보니 흥미롭네요!  
노드로 gl코드를 만드는 건데, 웹에서 작동합니다.작업 편의성이 나쁘지 않아보이고, 무엇보다 익스포트가 자유로운게 좋아보이네요.  
https://cables.gl/

포스트 프로세싱 관련 내용 찾아보다가 Nebula를 알게되었는데요. 파티클을 쉽게 만들수 있도록 데탑 앱도 같이 있군요! 이분하고 스플라인팀이 협업하면 시너지 나올거 같다는 생각이 듭니다.  
https://github.com/creativelifeform/three-nebula  
https://three-nebula.org/

앞에 공유한 nemutas분이 post processing 을 리드미에 계속 적길래 독스에서 읽어봤어요.모든 리포에 post processing 코드를 읽어보면 쉐이더 이펙트는 모두 다른데 코드는 어느정도 비슷한 패턴이 보이는듯합니다.링크는 3js 독스입니다.  
https://threejs.org/docs/#manual/en/introduction/How-to-use-post-processing

이분도 ts r3f로 작업 꾸준히 해오신 분이시군요. 리포마다 리드미에 사용한 기술 적혀있어서 참고하기 좋아보여요. 
https://github.com/nemutas?tab=repositories

부드러운 웹 애니메이션 성능에 관한 아티클이예요. 이것도 재밌는 글이예요!  
https://www.freecodecamp.org/news/web-animation-performance-fundamentals/

WebGPU 글이 있어서 가져왔어요. 이렇게 정리된 글 찾고싶었는데 내용이 조금 길지만 재밌어요! 디노가 WebGPU 지원하는지도 이 글 덕분에 알게되었습니다. 모든 디바이스 호환까지 가려면 멀었겠지만.. 그래도 조금 기대중이에요.  
https://surma.dev/things/webgpu/

> 다들 아실 것 같긴 한데 992개 아이템 안엔 게임 뿐만 아니라 51개의 Game Assets도 있는데요.  
고품질 유료 픽셀 아트 에셋도 있습니다. (첨부 스샷)우크라이나 기부도 하시고 좋은 아이템들도 챙겨가셔요.  
https://itch.io/b/1316/bundle-for-ukraine

> 픽셀아트에 관심있으신 분 계실련지요? 손이 많이 가긴 하지만, 참고삼아 볼만한 내용입니다. (매우 기초적일테지만, 저한텐 저세상급이라..)  
https://s4ch1.hashnode.dev/how-to-create-pixel-art-with-css

> HackerNews에 소개된 라이브러리입니다. 자바스크립트를 이용해서 실시간 2D/3D 그래픽을 만드는 데 유용해 보이네요.
https://shaderpark.com/

리액트에서 r3f를 사용해서 3d를 렌더링하는 글 입니다.저번에 공유한 리플 갤러리도 글 안에 예제에 있어요. 요즘은 특정 라이브러리만 공유하는거 같은데 주제를 조금 다양하게 바꿔봐야겠습니다. 아직 배우는중이라 그런가봐요.전 제 실력이 만족할때까지 그것만 보는편이라..ㄷㄷ  
https://tsh.io/blog/react-three-fiber/

figure 와 figcaption 으로 만든 여러 예제들을 살펴보아요. 와 근데 여기 아티클 레이아웃 하나하나에 공을 많이들인거 같아요. 마치 갤러리를 소개하는거 같습니다! 이미지, mp4, 작성자, 작성일, 데모와 코드 링크, 언어, 타이틀, 호환브라우저, 반응형, 디팬던시 영상은 hover 시에 실행되도록 라벨 붙여놓고 실행되면 라벨이 쏙~ 들어갑니다. 이렇게 신경써서 체크해서 정리했는데 몇 년 후에 링크 비공개 되거나 사라지면 마음아플거 같아요.  
https://freefrontend.com/html-figure-figcaption-css/

크롬 101 버전에 inert 비활성화 속성이 추가된대요.접근성 높이는 방향으로 개선되는거 좋아요!  
https://chromestatus.com/feature/5703266176335872  
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert

리액트에서 3js로 3d 모델 (gltf, glb) 불러오는 포스팅이 있어서 공유합니다. 블렌더에 모델 불러와서 애니메이션 넣고 glb로 뽑아서 r3f에서 useGLTF로 불러오는것 까지 기본적인 과정이 소개되어있어요.  
https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf

> 대단하네요.  
https://www.vw.com.mx/app/virtual-studio/

이 갤러리에는 그림보다는 모델링, 리깅, 애니메이션을 동일한 전시대에 올려두었군요. 카메라와 페이지별 포멧은 같은데 모델링만 다른거보면 전시를 너무 어렵게 기획할 필요 없이 이렇게 모델만 불러와서 보여주는것도 좋을거 같아요.  
https://gallery.swell.ripple.com/

text-decoration에 속성이 line, style, color, thickness 가 존재(?)하는지 지금알았어요.지금까지 써봤던건 없애는거 (none) 줄긋는거 (underline) 만 써봤는데줄 두께도 얇거나 두껍게 할수가 있군요!!!  
https://css-tricks.com/when-to-avoid-css-text-decoration-shorthand/

> text-underline-offset 속성으로 텍스트와 줄 간격 조절도 가능하더라구요!

데이터시각화를 포스팅하면서 보여주는거, 너무 좋은 아이디어 같아요! 예전엔 그냥 d3만 공유하는 곳인지 알았는데 Boilerplates 에 보니까SVG, p5js, d3, HTML Canvas, threejs, WebGL shader, Regl, plot scatterplot, Blog Post가 있고,기본 템플릿은 SQL, Search table + chart 가 있군요!! 공유하는 글은 'BTS는 가사 속에서 어떤 이야기를 전달하고 있을까' 입니다.  
https://observablehq.com/@shwldus3/03-3-bts

며칠전에 달라진 MDN 사이트에 대해 글이 올라왔어요MDN에 글이 4만4천개가 있다고 합니다.이렇게 방대한 사이트를 개편하는건 쉽지 않을텐데요. GNB 레퍼런스에 해당하는 LNB를 컬러별로 구분하고 해당 포스팅에도 같은 컬러가 적용되어있어서지금 보고있는 페이지가 어떤 페이지에 대한 내용이구나 라는걸 알 수 있어요. 저도 가끔 MDN 탭 잔뜩 띄워놓으면 JS에 대한 페이지인지 CSS에 대한 페이지인지 맨날 헷갈렸는데 이젠 헷갈릴필요 없겠군요! 이번에 개편하면서 컬러별로 구분한거 잘한거같아요.  
MDN 개편내용 글 https://hacks.mozilla.org/2022/03/a-new-year-a-new-mdn/  
MDN 사이트 https://developer.mozilla.org/ko/

올해 적용될 CSS 속성은 어떤 기능이 있는지 알아보아요이건 작년부터 계속 얘기 나온거긴 합니다역시 has는 빠지지 않는군요. 컨테이너도 레이어도 좋아요!
https://www.smashingmagazine.com/2022/03/new-css-features-2022/
```
container:has() @when/@elseaccent-color
hwb()lab()lch()rgb()hsl()color-mix()color-contrast()
@layerreset, base, theme
```

> three.js에 관심이 많으신거 같아서 React에서도 import { Canvas } from "@react-three/fiber";import { OrbitControls } from "@react-three/drei";요런식으로 npm으로 모듈 설치해서 사용가능한 내용이 있어서 공유드립니다. (이미 알고 계실수도 있구요^^)  
https://morioh.com/p/6b934622b0f4?f=5e44c59998b8037d03aa8178  
샘플 데모코드 : https://codesandbox.io/s/three-js-final-5phhd?ref=morioh.com&utm_source=morioh.com

SVG 텍스트에 애니메이션 주는 방법은 stroke-dashoffset이 가장 많은거 같아요. 이 예제는 path, line, path 에 딜레이 차이를 주어서 3단계로 그려지는군요. 루트에 폰트 사이즈가 이렇게 선언되어있는데 폰트사이즈를 이렇게 주기도 하나요..(?) calc 사용하면 대응은 괜찮아보여도 매번 연산해야해서 오히려 느리게 적용되는게 아닌지 궁금해요.
https://codepen.io/jkantner/pen/dyZjWvG
```
--hue: 223; --bg: hsl(var(--hue),10%,90%); --fg: hsl(var(--hue),10%,10%); --primary: hsl(var(--hue),90%,55%); font-size: calc(16px + (32 - 16) * (100vw - 320px) / (1280 - 320));
```

제가 보는 예제들은 모바일에서 문제없이 잘나오는 사이트들을 관심있게 보는듯해요. 일단 모바일에서 보고 끊김 없이 잘나오면 그룹에 공유하고 나중에 pc에서 한번 더 보면서 개발자도구를 확인하게 됩니다. 이 사이트는 페북 브라우저와 트윗 브라우저에선 반딧불이 제대로 안나오는거 같아요. sketchfab 같은 효과를 만드신분이 계셔서 가져왔어요. 역시 쉐이더의 완성은 라이팅인거 같다는 생각이 듭니다. 선풍기 회전은 다른 앱을 보고 다시 보니까 회전 상태가 원활하지 않는군여 ㄷㄷ 반딧불은 정상인데.. 이거 머테리얼 섭스턴스 사용했겠죠! 낡은 재질은 낡은대로 느낌있어서 좋은거 같아요.  
https://boxing-gym.vercel.app/

와!! 저 매직 리플렉션 전시 1월에 나온거 지금봤어요! 이거 공유해주신분 설명 그대로 가져왔어요. 여기에도 공유해요!

`구 페이스북 현 메타가 베를린 미술관과 함께 매직 리플렉션(Magical Reflections)이라는 전시를 선보였는데요. 그동안 가상으로 그림을 보는 건 많았잖아요. 그런데 이번엔 그림으로 들어가서 그 안에서 사진도 찍어볼 수 있는 몰입형 체험을 가능하게 해서 화제가 됐어요. 이 가상 전시엔 요한 에르드만 험멜이라는 작가의 작품들이 주를 이루는데요. 그중에서 마지막 작품을 클릭하면 마법처럼 그림 속으로 들어가게 된답니다. 휴대폰으로 아래 링크를 클릭하시면 실감 나게 경험할 수 있어요. 메타 첫 광고에서 앙리 루소의 그림으로 들어가는 내용의 영상을 선보였었는데요. 새로운 차원의 상상 속으로 들어간다고 했던 이유를 이제야 알 것 같습니다.`

영상 링크 : https://youtu.be/H2VkRewBFBM  
매지컬 리플렉션 체험링크 : https://www.magische-spiegelungen.de/

애니메이션 씬이 넘어가는 영상 콘티를 조금 공부해두면 브라우저에서도 섹션이 자연스럽게 전환되는 기획이 가능할거 같아요. 여기 사이트처럼요.
아 근데 이런건 피그마로 어떻게 기획하져.....? 도형이랑 레이아웃이 인터랙션 들어가는 부분은 프로토타입을 직접 보여주는 방법 말고는 말로 설명하는데는 한계가 있을듯해요.  
https://china.circus-inc.com/

스플라인으로 작업한 분들이 경험을 공유해주셨어요. 문장의 의미를 담은 컬러와 오브젝트를 보고 우와 정말 신경 많이써서 작업한 사이드 프로젝트구나 라는 생각이 들어서 공유합니다. 저도 이렇게 의미를 형상화한 디자인들을 좋아해요.

제가 예전에 스플라인을 잠시 사용해봤을때 머테리얼과 라이팅이 디자인을 표현하기에 제한적이라는 생각이 들었었는데 스플라인에서 나오는 예제들도 클레이 디자인들이 많았고, 작업한 분들도 대부분 간단한 오브젝트를 디자인하는걸 보아서 브라우저에서 너무 무겁지 않고 가볍게 작업하려고 나온 툴이구나 라는 생각이 들었어요.  
https://brunch.co.kr/@outlines/62

오... 이정도면 게임 아닌가요...! 모바일에서도 잘나오는군요.  
https://domenicobrz.github.io/webgl/projects/experiment1/

3js로 만든 포트폴리오러고 하길래 공유합니다. 호텔 건물 소개할때 이렇게 작업해도 좋을거 같아요.
https://realestate-neotix.vercel.app/

일본 디자인 사이트 주워왔어요.만드는데 디자인 참고가 될듯해요.  
http://bm.straightline.jp  
https://bm.s5-style.com  
https://www.freejapanesefont.com  
https://muuuuu.org  
https://responsive-jp.com  
https://www.webdesignclip.com  
https://liginc.co.jp/416443  

오 여기 참고할만한 인터랙션 많이 아카이빙해둔 사이트군요!  
https://www.hoverstat.es/features/marcd

앗 구찌에서 3js 게임 만들었는데 오브젝트 캔디같고 너무예뻐요!  
https://pickntwist.gucci.com/

CSS로 하이라이트 만드는거 전 늦게 알았어요. (맨날 비포에다가 줄긋는다고..) 개발은 하다보면 속성을 하나씩 발견하거나 알아가는 재미가 있는거 같아요.
(처음부터 외웠으면 좋았겠지만요 ㅎㅎㅎ)  
https://dev.to/robin_a_p/text-highlighting-using-html-and-css-19n6

프랑스 에이전시 사이트인데요. 컬러, 폰트, 그래픽, 인터랙션 모두 부드럽게 조화 잘되어있어서 공유합니다.  
https://leonard.agency/

너무 화려해서 정신없지만 파티클에 스크롤이벤트 예제라서 가져왔어요.  
https://atelier.net/social-mobility/economic-opportunities-for-our-avatars/

와, 여기 광채 효과 진짜 자연스러워요. 전체적으로 라이팅을 잘쓰는 곳이군요저 이런거 찾고있었는데 관찰해봐야겠습니다 후후모바일에서도 잘나옵니다.  
https://showcase.pixotronics.com/

3js 공부한 내용을 블로그에 기록하신분이 계시길래 가져왔어요. 친절하고 자세한 기록은 아니지만 여러 이펙트를 정리한건 많이 못봐서 킵해두려고 올립니다.  
https://webdoli.tistory.com/category/%EC%9B%B9%EA%B0%9C%EB%B0%9C%20%EC%9E%90%EB%A3%8C%EC%8B%A4/three.js%20%ED%94%84%EB%A1%A0%ED%8A%B8%EA%B0%9C%EB%B0%9C%20Code

웹지엘 하시는 분들 중에 한국분 만나면 너무 신기해요! 이분 갖고 계신 스택이 완전 제취향! 제가 원하는 스택이에요!!
- Programming LanguageC#, Javascript, HTML/CSS, Shader Language(GLSL/HLSL), C++  
- FrameworkUnity3D, Threejs, Reactjs, Cinder, Openframeworks, Touch Designer, Max/MSP/Jitter  
- DesignCinema 4D, Blender, Adobe Creative(After Effects, Premiere, Photoshop, Illustrator)  
https://avseoul.net/avseoul/#about

아닛!!? 이거 보셨나요!!! 대박쓰! 브라우저에서 직접 모델링할날이 얼마 안남았습니다아ㅏ아ㅏㅏㅏ 적어도 쉐이더는!!!!! 노드 연결 너무우우우우 죠아요오오오오♡  
https://github.com/mrdoob/three.js/pull/23508

키프레임으로 애니메이션 작업하는건 한땀한땀이지만 막상 작업하고나면 넘재밌어요. 꽃잎이 활짝 피는 애니메이션 예쁘네용🌷  
https://codepen.io/mdusmanansari/pen/bGYrmjY

스크롤이벤트로 시차 적용해서 블럭 쌓는 효과도 재밌을거 같아요. 전 스크롤이벤트 적용된 사이트를 보면 수집하는편인데 애니메이션영상+2d3d크리에이티브코딩+브라우저가 섞여있어서 웹이 주는 매력을 전 포기할수가 없습니다.  
https://ikeryou.jp/sketch/165/  
https://codesandbox.io/embed/shoe-configurator-forked-2rztl7?file=/src/App.js&codemirror=1

호오 포인트클라우드는 처음들어봤는데 복잡한 사물을 스캔해서 가져온 데이터를 점으로 만들어주는거군요! 그럼 저번에 공유했던 공원 파티클 사이트도
포인트클라우드 일거란 생각이 들어요!  
포인트클라우드란 https://23min.tistory.com/8  
포인트클라우드 예제 https://codepen.io/Alca/pen/wjxLmK

> 자율주행에서는 pointcloud로 이루어진 지도를 만들고, pointcloud 매칭을 통해서 내 위치를 알아내야 하는데요, pointcloud sensor(lidar)가 하나에 수천만원씩해요 ㅎㅎ

> 발렌타인데이 주간을 맞아 three.js를 활용한 codepen.io에 올라온 하트애니메이션 레퍼런스를 공유합니다. 노래도 함께 나와 더 역동성이 느껴지고 좋네요! 모두 사랑 가득한 2월 되세요!  
https://codepen.io/pehaa/pen/wvPgboY

앗 이걸로 컬러 다른 오브젝트 간단히 배치하면 자연스럽게 연결되는 그라데이션 컬러 가능할거 같아요! (소리가 나와서 영상 지울까하다가 그냥 소리 제거해서 올렸습니다)  
https://github.com/danielesteban/three-raymarcher

폰에서는 끊켜서 나오는데 길을 따라서 카메라 회전하는 방법도 괜찮아보여서 공유합니다.  
https://robinpayot.com/

> CSS-TRICKS에 color 속성에 대한 재밌는 글이 올라와서 공유드려요! (hwb은 확실히 더 직관적인 것 같아요)

> 요즘 우버에서 만든 deck.gl 로 프로젝트를 진행하고 있습니다.  
아래 링크는 뉴욕의 그린캡 vs 엘로우캡 이동에 대한 예제입니다.
https://deck.gl/examples/trips-layer/

deck.gl 을 기반으로 만든 kepler.gl(역시 우버가 만든) 이 조금 더 상위 버전 같은 느낌이라 같이 링크 걸어 둡니다.  
https://kepler.gl/demo/nyctrips

> 뭔가 재미나 보이는 프로젝트를 찾아서 공유합니당  
전세계 지도 중 원하는 부분을 클릭(빗방울 떨구기) 하면, 그 빗방울이 어느 강들에 합류되어 최종적으로 어디까지 흘러가는지를 시각화한 프로젝트 같네요. 첨부 동영상은 제가 임의로 대한민국 어딘가에 빗방울을 떨어뜨린 결과를 녹화한 것입니다. 제가 이쪽은 잘 모르지만 저장소의 요약 정보에 따르면 스벨트, 자바스크립트가 주로 사용된것으로 보입니다. (잘 아시는분이 디테일을 추가해 주시면..)
깃헙 repo: https://github.com/sdl60660/river-runner  
시뮬레이션 사이트: https://river-runner-global.samlearner.com/

> 재미난 css 사이트입니다
https://comicss.art/

동물 모델이 통통 튀는게 잘어울려서 가져왔어요. 문득 든 생각은 블렌더로 뭔가 화려하게 만들 필요 없이 여러 지오메트리 연습해서 원컬러로 배경에 배치해서 여기 사이트처럼 강조하고싶은 텍스트만 중앙에 배치해도 괜찮을거 같아요. 이렇게 쉬운 방법으로 하나씩 시작하는 것도 좋지않을까 해요. 뭐든 시작만 해두면 다시 건들게 되는거 같아요 (제자신에게 하는말)
https://garden-eight.com/

> 여기는 제작 업체인데.. 여기도 대단하더라구요..  
> https://lusion.co/
> 
> 이런 느낌의 웹사이트들은 주로 https://www.awwwards.com/ 여기에 많이 소개 되던데, 귀엽네요 ㅋㅋ

와 색감 너무예뻐요 이거 만드신 분이  
https://codesandbox.io/embed/basic-demo-forked-nvup4?codemirror=1

이걸로 쉽게 만드셨다고 합니다  
https://github.com/pmndrs/lamina

React three fiber 를 줄여서 r3f로 많이 말하더라구요! 전 그냥 threejs 가 길어서 쓰기 귀차나서 3js로 쓰게되었는데 3js로 쓰는사람들도 있긴 있어서 다행 같습니다.


이분도 css로 3d 하시는분이군요! 하루종일 밥먹고 css랑 3d만하면 이렇게 될까요. 저도 밥먹고 이런것만 했으면 좋겠습니다.  
https://codepen.io/amit_sheen/pen/LYORMgL

으아닠ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ CSS에서 SQL 보신분 ㅋㅋㅋㅋ 저 처음봤어욬ㅋㅋㅋㅋㅋㅋㅋㅋ 으아악 혼종이닷  
https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html
```
.query-display {  background: paint(sql-css);}
main {  --sql-query: SELECT * FROM genre;  --sql-database: url(...);}
```

> 안녕하세요! 처음으로 글을 쓰네요. 원래는 webgl을 공부하려고 강의를 들으력고 했는데, 뭔가 제대로 이해가 된다는 느낌이 잘 안들어서 그래픽스 공부부터 하고 있습니다.  아래 링크는 cmu 그래픽스 강의를 들으면서 중요한 내용을 요약 한 링크입니다. 사실 쓰는데 시간은 꽤 들었는데, 막상 내용이 그렇게 길진 않아서 조금 민망하네요. 지적은 언제나 환영합니다. 
https://velog.io/@dfgh1534/cmu-%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4-%EA%B0%95%EC%9D%98-%EC%9A%94%EC%95%BD-lecture-04-drawing-a-triangle

CSS 위클리 순위에 있는 블로그들이 제가 구독하고있는 메일에 자주 보이는 블로그들이라서 공유합니다. 여기 구독해두시면 css 관련된 정보 메일로 받아보실 수 있어요.  
https://css-weekly.com/issue-487/

피그마에서 그림자 쉽게 만들수있는 플러그인이래요. 처음엔 그냥 그림자 각도로 조절하면되는걸.. 이런게 필요할까? 라고 생각했지만 여러 도형을 플러그인이 적용된 햇님 근처에 배치하면 그림자가 햇님 방향에 맞춰서 한번에 생성되서 피그마로 전체 도형 입체 방향을 주고싶을때 편해보여서 공유합니다!  
https://www.figma.com/community/plugin/1068595505353552645/Beautiful-Shadows

> https://playcanv.as/p/Dx2IVZ17/  
> 2월중에 온라인 미술 전시회를 할일이 있어서 자료를 찾다가 예전에 플캔 공부하면서 만들었던 습작이 있어 공유합니다. 가상의 콘을 박아서 그 사이사이에 카메라를 lerp로 잡고 이동하게 했구요. 코딩 이외의 것들이 은근 빡세서 시간 많이 걸렸습니다.3차원으로 뭔가를 배치하고 조정하는 것 자체가 쉽지 않더라구요.  
> https://playcanvas.com/project/677410/overview/galleria  
> 로그인 하시면 프로젝트랑 소스코드도 보실 수 있습니다.구현은 변변치 않은데 최소한의 코드로 자동으로 움직이는 동선을 어떻게 넣을까 하는 고민이 담겨있으니 필요한 분들에게 도움이 되셨으면 합니다.

R3f로 만든 탁구 예제 입니다. Valtio라는 프록시기반 상태관리는 처음봤는데 사용하시는분 계신가요. 아니 이런 질문을 하기전에.. 웹지엘 개발하시는 분들이... 많이 안계신듯해요..  
https://codesandbox.io/embed/ping-pong-with-valtio-wb25s

> 물리구현 괜찮네요. 회전 같은 것도 잘먹고요.뭘 쓰나 싶어서 봤더니 Cannon.js 군요.  
https://schteppe.github.io/cannon.js/  
webGL은 영역 자체가 3D그래픽스하시는 분들이 웹쪽 보다는 다른 영역에 많이 계셔서 그런게 아닐까 싶습니다.

cannon js 물리엔진 테스트하는 영상인데요, 마스크로 특정 오브젝트만 충돌처리 하셨다는 글이 있어서 공유합니다.  
https://www.instagram.com/p/CPYCs_FJOzK/?utm_medium=copy_link

오... svg path + 3js 응용한 예제 넘좋네요!! svg로 다양한 표현이 가능한 예제들은 바로 수집하고 싶어요! 너무 좋습니다!  
SVG 예제 - 트위터 짹짹이 https://codepen.io/Nekto/pen/xxPwLPa

이 포스팅을 보고 응용하셨대요 (Animate Anything Along an SVG Path)  
https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/

Path에 모션줘서 별이랑⭐️ 하트랑💛 두개 변경해보아용 두 모양 버텍스 갯수가 동일해야 자연스럽게 변형되는거 잊지 말아야해용 이런거 구름모양 같은거 바꿀때 많이 쓰이곤합니다  
https://codesandbox.io/embed/motion-one-morph-svg-paths-qldsz?file=/src/index.js&codemirror=1

이거 두달전에 궁금한채로 지나갔었는데요. 박스 안에 공간을 어떻게 넣고, 씬을 어떻게 잡았는지 아직 상상이 잘 안되서 링크 남겨둡니다. 비슷한 내용으로 디자인 바꿔서 계속 작업하시는 분이예요. 코드는 없고 영상만 공유해요.  
이거랑 https://www.instagram.com/p/CUh2UamgPBz/?utm_medium=copy_link
이거 두개 입니다.https://www.instagram.com/bentonjohn/p/CVDy2hLKRok/?utm_medium=copy_link

> https://codesandbox.io/s/magic-mirror-ddk57
>  
>  https://codesandbox.io/s/mixing-html-and-webgl-w-occlusion-9keg6

> Three.js 강의 8강 screen resizing  과 9강 geometries 에 대해 듣고 정리했습니다. 잠깐 쉬어가는 느낌의 짧은 강의들이네요.  
> https://github.com/kim-taewoo/threejs_journey/blob/master/09-geometries-final/src/script.js


JS를 공부해봅시다 🌿

1. 자바스크립트를 한달동안 배워보아요 https://github.com/Asabeneh/30-Days-Of-JavaScript
2. 자바스크립트 개발자가 알아야 하는 33가지 개념 이라는 리포도 있습니다.조금 옛날 글이긴 하지만 알고있는 지식 체크할겸 보는 용도로는 좋은듯해요
브라우저에 따라 자바스크립트도 계속 변하기에 아무래도 최근 내용을 보는것이 도움되겠지만자바스크립트의 기본적인 내장함수나 개념들은 크게 변하지 않는거 같아요 https://github.com/yjs03057/33-js-concepts

아래 세개는 크롬개발자분이 추천해줬어요  
3. 자바스크립트 알고리즘도 공부해보고 https://github.com/trekhleb/javascript-algorithms
4. 이것도 자바스크립트 알고리즘! https://github.com/mgechev/javascript-algorithms
5. 자바스크립트로 컴퓨터싸이언스의 패러다임과 알고리즘을 배워봅시다 https://github.com/humanwhocodes/computer-science-in-javascript

이거 다 알면 자바스크립트 마스터 가능하겠져 후후 (죽기전에 가능하겠져 ㄷㄷ)


> https://observablehq.com/@vezwork/webgl2-shaderobservablehq 에서 쓰기 좋은 shader 패키지인데 이런저런거 다 건너뛰고 바로 fragmentShader 코드를 해볼 수 있어요. https://observablehq.com/@acidsound/monofireworksshaderToy 에서 만들었던 걸 그대로 가져왔는데 iTime 옵션주니까 잘 되네요. 좋습니다!

> https://uxplus.dev/tickler/

혹시 nivo 네트워크 시각화에서 텍스트 보이게 작업한 예제를 찾으려면 어떤 키워드로 검색해야하는지 아시는분 계신가요 클릭이벤트로 작업할지 툴팁으로 표시할지 시각화에 따라 ux 다르게 구성해야해서 고민이 많아요.
https://nivo.rocks/network/canvas/

> 커스텀 노드 렌더러를 직접 만들어야할 듯 합니다.  
https://nivo.rocks/storybook/?path=/docs/networkcanvas--custom-node-renderer  
기본 패턴이 대략 이렇게 되어 있어서 아래쪽 target.x, y 쪽에 text 그리는걸 추가 하면 될 듯 한데 코드를 좀 더 봐야겠네요.  
```JS
<Node extends InputNode, Link extends InputLink>( ctx: CanvasRenderingContext2D, link: ComputedLink<Node, Link> ) => { 
     ctx.strokeStyle = link.color      ctx.lineWidth = link.thickness      ctx.beginPath()      ctx.moveTo(link.source.x, link.source.y)       ctx.lineTo(link.target.x, link.target.y)       ctx.stroke() }
```

제가 만들고 싶었던 화면중에 하나 발견해서 공유합니다.
https://www.loewe.com/int/en/stories-projects/loewe-spirited-away-harajuku-popup.html

> css gradient 에 대한 좋은 글이 있어서 가지고 왔습니다.
https://www.smashingmagazine.com/2022/01/css-radial-conic-gradient/

브루노쌤도 리소스 모음집 만들고 있대요! 개인 노션페이지 공유해주셔서 줍줍해서 가져왔습니당  
https://brunosimon.notion.site/brunosimon/Resources-Learning-45cacca08e884d0f9c4cf59d0d9b8d72

스크롤 이벤트로 SVG 라인드로잉을 그려보아요 (영상) gsap로 쉽게 만들수도 있지만 이분은 바닐라JS를 사용하셨군요 SVG를 스트로크 옵셋으로 애니메이션 작업한 예제들은 많이 봤습니다. 옵셋으로 원하는 결과물을 얻으려면 패스 그릴때 스타트랑 엔드포인트 위치를 생각하며 그려야 원하는 모양의 애니메이션이 구현됩니다. 그리면서 많이 망해봤어요.  
https://m.youtube.com/watch?v=FJ44qmE5odc&feature=youtu.be

> 혹시 지금 공유주신 이 방법 비스무리하게 아래 사이트도 만든걸까요? 계속 궁금했었는데..! https://2020.feconf.kr/  
> 
> 여기는 dasharray  앞쪽 위치를 바꿔서 처리하네요.  offset 은 고정
stroke-dashoffset: 0;    stroke-dasharray: 6283.37, 33434.2;

음 이건 css나 webgl은 아니지만 오픈소스에 기여하는 방법과 vscode 뜯어보면서 살펴보는 영상이라 공유합니다.  
https://m.youtube.com/watch?v=-ybVWOHVDyA&feature=youtu.be

CSS의 역사를 알아봅시다 🌿  
https://velog.io/@teo/css-history-1  
https://github.com/ManzDev/frontend-evolution

이렇게 직접 수화 손모양을 해당 페이지 타이틀로 넣은건 처음봐요! 여기는 강의 들으면서 노말 텍스처 부분 보다가 알게되었습니다.  
https://www.ilithya.rocks/

CSS 속성에 대해 요약별로 이미지 설명이 잘되어있습니다. 이미지랑 코드 같이 보면서 공부하기 좋아보여요  
https://github.com/PacktPublishing/CSS---The-Complete-Guide-incl.-Flexbox-Grid-and-Sass-

3j로 마우스 호버시 책 방향이 움직이는걸 만드신 분도 계시군요알라딘 사이트를 참고해서 만드셨다고 합니다.다른 3d 이펙트를 주는게 아니고 간단한 회전이라면 css로도 가능할듯 합니다.  
만드는방법 https://www.zoomkoding.com/3d-book/  
코드 https://github.com/zoomkoding/3d-book  
데모 https://zoomkoding.github.io/3d-book/

이렇게 다음 섹션으로 스크롤이 넘어가면서 캔이나 병으로된 모델 회전하는 사이트들은 많이 봤습니다.로테이트 각도와 방향이 각각 다르고 섹션이 넘어가면서 나오는 이펙트도 다릅니다.  
https://lab.mango.astanusic.dev/

CSS 문제를 풀면서 공부해보아요. 화면에 나온 그림과 HTML 코드를 보고 css를 A B C 중에 선택해서 맞추시면 됩니다! CSS를 처음 시작하기 좋아보입니다. 생각보다 문제 꽤 많아서 놀랐어요. 오늘 css 교육하는데 이 내용도 공유하려 합니다.  
https://github.com/aleksei-berezkin/guess-css  
https://www.guess-css.app/

> 재미난 토이프로젝트 입니다.  
> https://velog.io/@soonmac/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B0%B1%EC%8B%A0-%EC%9D%B8%EC%A6%9D-%EC%B9%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0

> 3d 팝업 카드 만들어 주는 빌더입니다. 오래되긴 했지만 threejs 로 만들어져있어요.  
https://github.com/caa1211/webOAcard

픽셀 왜곡하는거 어제 포스팅 올라왔군요! 아 저 지금 브레인 관련 그래픽 작업하고 있었는데 ㄷㄷ 이게 눈에 띄길래 가져왔습니다!  
https://tympanus.net/codrops/2022/01/12/pixel-distortion-effect-with-three-js/

앗 전에는 별로 안보였었는데 이제 이런 글도 보이는군요! 이분도 디자인하시는걸로 알고 있었는데 언제 또 개발을..ㄷㄷ 역시 디쟌하시는 분들은 그래픽스에 관심을 안둘수가 없는것같아요.  
https://blog.dalgu.app/dev/1

포지션하고 로테이션 수정해서 이미지만 바꾸면 쓰리디 갤러리 완셩☆ 근데 계속 리액트 라이브러리 공유하고있는데.. 뷰 사용하시는 분들은 웹지엘 라이브러리 어떤거 사용하는거졍 그냥 3js 임포트해서 사용하려나요. 캔버스 수작업이면... 능력자 인정합니다.  
https://codesandbox.io/embed/reflector-variant-forked-lx2h8

2년 전에 공유한 내용이 피드에 떠서 링크 다시 들어가서 보니까 2021 버전으로 되어있어서 그룹에도 공유합니다.  
https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/

자바스크립트, 폰트, 이미지 렌더링, 서버사이드, 호이스팅, 코드분할, 로딩패턴 등문제해결과 성능항샹을 위한 프론트엔드 모니터링  
https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/

오우.. 바람에 날리는 동물의 퍼를 이렇게 표현할수도 있군요 ㄷㄷ 멋있어요!!  
https://codepen.io/Mamboleoo/pen/qBPyqKg


> 간단하게 선 기반으로 그림을 그릴 수 있게 해주는 툴입니다. 엄청 쉬워요.  
https://github.com/maxwellito/minimator

> CSS 로 한땀 한땀 쌓아올린 3D 입니다.  
https://codepen.io/cobra_winfrey/full/GRMdwwG

CSS in JS 에서 vanilla extract가 가장 핫한데 사용해보신분 계신가요. 전 css in css를 선호하는 편입니다.  
https://github.com/seek-oss/vanilla-extract

브라우저에 React three fiber를 사용하여 태양계를 그려보아요.  
리포 https://github.com/markshenouda/Solar-System  
데모 https://solar-system-r3f.netlify.app/

p2js 물리엔진과 3js로 공을 떨어뜨려서 도미노를 만들어보아요. 모바일에서는 안나와용 모바일 브라우저에서 pc버전으로 보시면 나옵니다.  
데모 https://codesandbox.io/embed/use-p2-marble-run-9feis?codemirror=1
p2js https://github.com/schteppe/p2.js

> 안녕하세요! 비영리단체 운영하는 개발자 박용입니다. 제가 운영하는 단체에서 후원페이지 리뉴얼을 3D로 진행을 해서 소개드리려고 글을 씁니다.  개발은 THREE.JS를 사용했고 블렌더를 이용해서 3D 모델링을 진행했습니다. 캐릭터는 https://readyplayer.me/ 사이트를 이용해서 만들었고 캐릭터들의 애니메이션은 https://www.mixamo.com/ 를 이용했습니다. 나머지는 제가 처음으로 모델링을 해서 사용했습니다. 개인적으로 웹으로 어디까지 3D가 될까? 확인해볼겸! 진행한 프로젝트였는데 만들면서 재밌어서 계속 3D로 웹에서 만들어 볼 것 같습니다. 디자인과 기획, 최적화를 더 다듬어야 하긴 하지만 이 후에 생각하기로 했습니다. 구경해보실분은 https://pangol.github.io/donate99/  (PC와 와이파이 필수)

> plotly를 이용해서 재미있는 글이 medium-plotly공식홈 (https://medium.com/plotly/) 스포츠분석에 글이 있어서 가지고 왔습니다.  
스포츠 분석을 이용한 글 : https://medium.com/plotly/7-dash-apps-bringing-ai-ml-to-sports-analytics-cb6e7c993064  
plotly가 기본적으로 d3.js와 stack.gl을 내장하고 있어서 동적으로 표현이 가능한것으로 알고 있습니다.  
데이터를 수집해서 동적으로 저렇게 활용하면 재미있는 product이 나올거 같습니다.https://miro.medium.com/max/1030/0*4u0c4cFOXgSIikFd  
> 
> 제가 알고 있는것들도 있는데, 처음 본 Library들도 정리되어 있어서 공유드려요.  
> 데이터 분석할때, Matplotlib, seaborn, plotly많이들 사용하실거 같은데, 다른것들도 참고하시면 좋을거 같습니다.  
https://www.fusioncharts.com/blog/best-python-data-visualization-libraries/

갤러리를 큐브 형태로 만들어서 큐브에 뚫려있는 모양따라 자연광을 비춘 아이디어 좋네요! 구역 구분이 확실하고, 어두운 부분은 스폿라이트 추가해서빛에 따라 시선이 작품으로 이동하도록 만든 아이디어 괜찮은거 같습니다! 갤러리에 여러 시각적인 효과를 주며 개성있게 만드는것은 온라인만의 장점이라 생각하고 공간과 동선, 빛, 소리 등 물리적인 요소를 통해 작품에 집중할수 있도록 만드는건 오프라인만의 장점이라 생각하는데 두가지를 적절히 섞어서 온라인에 녹여내는게 온오프라인이 떨어져있지 않고 자연스럽게 녹아내는 방법이 아닐까 합니다.  
https://artsandculture.google.com/pocketgallery/IQUxrMnvNro2DQ

여긴 얼마전에 현우님이 공유해주신 링크 구경하다가 전시관을 WebGL로 만들었길래 구경하다가 알게되었어요. 한국 미술관에 있는 작품도 있군요! 갑자기 모달이 뜨길래 보니, 게이미피케이션 요소도 있습니다.  
https://artsandculture.google.com/achievements

CSS 팁을 배워보아요.  
https://github.com/AllThingsSmitty/css-protips

한글로 번역해주신분이 계시는군여.  
https://github.com/AllThingsSmitty/css-protips/blob/master/translations/ko-KR/readme.md

위에 번역하신분이 MDN canvas 애니메이션 부분 번역하셨대요.  
https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Advanced_animations

원문 번역은 같은 내용이라도 사람들에게 다른 언어로 어떻게 전달해야할지 고민되기 때문에  
지식을 배우는것과 동시에 전달하는 과정을 배우는것에 의미가 있는것 같습니다.  
그런 의미에서 저도 텍스트와 이해를 돕는 이미지를 같이 작성하려고 하는편입니다.

> 이거는 터미널 UI를 CSS로 만드는 프로젝트 입니당  
> https://github.com/willmcgugan/textual

자연을 파티클로 표현하는걸 얼마전에 봤었는데 이렇게 작업하시는 분들이 계신듯합니다. 모델링을 웹에 그냥 올려서 디테일하게 보여주려면 브라우저 무거워지니까 가벼운(?) 방식으로 표현하는건가봐요!  
https://le-voyage-azarien.art/

> https://www.jendrikillner.com/post/graphics-programming-weekly-issue-216/

> 간단한 코드로 웹 페이지에 3차원 배경을 넣어주는 프로젝트랍니다.  
https://www.vantajs.com/

> 도쿄의 대중 교통 시스템을 3차원으로 표현한 사이트입니다.  
https://minitokyo3d.com/

> 지도데이터는 뭐 썼나해서 봤더니 mapbox 네요.벡터 데이터도 있고 GL 라이브러리 제공 해서 https://docs.mapbox.com/mapbox-gl-js/example/add-3d-model/ 3D 모델 얹어서 포케몬고 재밌는 게임 같은 것도 만들 수 있을 거 같아요.

최근에 업뎃된 블렌더 3.0에 노드지오메트리 에디터로패스 하나로 모델링 쉽게 하시는 분들이 많으신거 같아요. 미리 설정해둔 노드를 적용해서 모델링하는 분들을 알아보아요. 아직 개선되어야할 버그들이 조금 있긴하지만 크리에이터가 스크립트를 직접 짜지 않아도 노드 연결 하나로 쉽게 커스텀 할 수 있는 것이 장점이라 생각합니다.

이렇게 디자인소스처럼 노드 스크립트만 따로 거래되는것도 봤어요.  
https://blenderesse.gumroad.com/ 

간단한 튜토리얼을 한글로 영상 올려주신분이 계시는군염  
https://youtu.be/f50Vv-Lq20Q  
https://youtu.be/JAZIXt4IxsU  

파이프 연결하는거 만든사람도 있어요  
https://twitter.com/Ray_T6L/status/1475084876298989570

브루노쌤도 이거 좋아하나봅니다  
https://twitter.com/bruno_simon/status/1474760410209345546

그리스펜슬처럼 비슷하게 응용하신 분도 계십니다  
https://twitter.com/erindale_xyz/status/1474250246003773440

전 이제 무거운 3d맥스 버릴겁니다! 스케치업도 c4d도 브이레이도 다필요없습니닿ㅎ핳하하ㅏ핳ㅏ 간단한 도면 필요하면 캐드나 래빗, 라이노 사용하고 모델링하고 렌더 뽑는건 블렌더랑 섭스턴스 정도만 해도 괜찮을거란 생각이 듭니다. (지브러쉬는 아직 고민중)
전 게임은 만들지 않아서 언리얼하고 유니티는 다루지 않지만 렌더 한장이나 짧은 씬이 담긴 애니메이션 뽑는 것에 관심이 더 많습니다. (하지만 내년에 c# 강제로 배우게 되었..) 암튼 아직도 블렌더 UI가 낯설지만 ㅜ 하다보면 익숙해지겠져...

clip-path 로 sin 과 cos을 계산하여 원하는 폴리곤을 그려보아요 (그냥 일러스트에서 svg 그리고 뽑아서 코드 정리하는게 더 빠를거 같습니다.)  
https://css-tricks.com/cutting-inner-part-element-using-clip-path/

위에 포스팅을 참고해서 아래 데모를 만들었다고 합니다. 이정도면 css 덕후로 인정합니다.  
데모 https://codepen.io/thebabydino/pen/gORwReM  
설명과 만드는 영상 https://youtu.be/too5ALYrbfU

데모 이것도 있어요 https://codepen.io/thebabydino/pen/ExWrbqj  
영상 https://youtu.be/MSPF-oHpehQ

이분꺼 다른 영상도 보시면 휘황찬란한거 많습니다.  
https://youtube.com/c/anatudor

이분 pens 보면.. CSS는 수학이 많이 필요한게 아닐까 생각됩니다  
https://codepen.io/thebabydino

전 css 잘하려면 아직 멀은듯합니다.

얼마전에 노이즈 텍스처 포스팅에 있던홀로그램 예제 코드로 디자인해보았습니다.
아이패드로 급하게 만드느라 윈도 브라우저 체크는 못하고폰에서만 체크했는데, 페북 브라우저만 폰트사이즈가 다르게 나오네요..
올해 첫 작업은 꽃말 홀로그램 카드가 되겠군요.  
https://codepen.io/wfedev/full/rNGJzNY

> https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw

여기 이분도 3js랑 셰이더 개인프로젝트로 작업하시는 분이예요! 예제 중에 프리징 큐브에서 큐브 얼리는거 보시면 처음에 frost.jpg가 디폴트이고, time.jpg인 height map이 중간단계로 변하면서 얼음 moss.jpg가 최종적으로 나오게 되는데 지오메트리가 아닌, 간단히 맵핑 이미지로 오브젝트를 표현하는거 재밌는듯해요. 여기에 노멀이나 범프도 추가하면 더 좋을텐데요.. 얼음처럼 자연스럽게 이미지가 바뀌는 비슷한 예제로 뭘 만들수 있을까 생각해봤더니 쇠가 자연스럽게 녹스는 과정이나천 재질이 자연스럽게 때묻고 더러워지는거나유리창에 김이 서리는 장면이나전구나 네온싸인에 빛이 켜지거나 아니면 자연으로 넘어와서나뭇잎이 서서히 낙옆이 되거나 카멜레온이 컬러가 변하는 등등 생각해 보면 하이트맵 하나로 응용해볼 수 있는 예제들이 많이 있군요!  
프리징큐브 데모 https://boytchev.github.io/etudes/webgl/freezing-cube.html  
전체 데모 https://boytchev.github.io/etudes/  
리포 https://github.com/boytchev/etudes

> https://virtual.plus-ex.com/showroom

> 괜찮은 컬러셋 코드가 있어서 가지고 왔습니다.   
https://yeun.github.io/open-color/ingredients.html
혹시 자체 컬러셋  관리를 따로 하시나요?  컨텐츠랑 UI 랑 분리해서 한다던가?  
저는 개발자다 보니  아직 색에 대한 연관 관계를 분석하기가 여간 어려운게 아니네요. ^^

> https://colorhunt.co/  
> 저는 컬러 헌트 조합을 애용하는 편이에욤...! 매번 만드는 것마다 규칙을 정해놓고 하기는 좀 힘들어서 그 때 그 때 적절한 조합을 찾는 편입니당  
> 흠 근데 시멘틱 컬러셋 설정이 미리 필요하시면 
> https://paletton.com/  
> https://colors.muz.li/  
> https://maketintsandshades.com/  
> 위 세개 사이트에서 컬러 variation을 미리 나눠보시는 것도 좋을 것 같아욤  
> https://omatsuri.app/color-shades-generator  
>  
> gray 뒤에 숫자가 3자리인 이유는 중간 단계의 회색조가 추가된 상황, opacity나 다른 규칙을 적용하기 위해서 입니다.
중간 단계의 회색조: gray-950, gray-850 ...opacity나 다른 규칙: gray-951, gray-952 …
>  
> 가끔 안예쁘다고 생각되는 색상을 써야할 때에는 색 대비 비율을 보면서 자기암시를 하기도 합니다 ㅠㅠ..https://webaim.org/resources/contrastchecker/   
> 
> 혹시 이쁘다 안 이쁘다의 기준 같은게 있나요?  
> 
> 색상 같은 경우에는 요즘 트렌드에 맞는 색상인지 판단하거나, 같은 검정색이어도 푸른 계열인지 혹은 붉은 계열인지 정도와 같은 미세한 차이에요.회색조에서는 요소 간의 위계를 설정할 때 어느정도의 대비를 줬는가 라거나.. 사실 많이 보시고 데이터를 쌓으시는 것이 가장 좋습니당!
> 
> 
> 우앙 저도 컬러를 적게 사용할땐 뒤에 넘버를 붙이면서 작업하곤 했습니다! black-1 이렇게요!  
> 컬러를 많이 사용해야하는 경우에는대표 컬러를 지정한다음 각 컴포넌트에 지정해주기도 했어요  
> 예를들어 메인 컬러가 black-1 이 #000 이라면테이블에 보더 컬러는 table-black-1 도 #000 이지만  
> 나중에 해당 부분 컬러만 수정이 가능하도록 이름을 따로 지정해주었습니다.  
> 테이블 컬러가 주변에 다른 컴포넌트 대비 너무 진하거나 연하면 그것도 보정해줘야해서그때마다 컬러를 매번 새로 만들기도 번거로워서.. 전 컬러를 분기치는걸로 자연스럽게 적용했습니다 ㄷㄷ  
> 예를들어 대표컬러인 --black-1: #000; 이런건 root에 넣어두고변수 지정하는 폴더에 $table-black-1 : var(--black-1); 이렇게요!  
> 유사 컬러값을 여러개 사용해야하는 경우는피그마에서 작업할땐 공통 스타일을 묶을때 헥사값을 이름에 같이 넣어주곤 했습니다.나중에 컬러 미세하게 조정이 필요하면 해당 이름만 변경하면되니까 컬러 관리하기 좋았어요  
> Black-1-#000Black-2-#333 이렇게요!  
> 전 opacity가 브라우저별로 나오지 않는 경우를 생각해서투명값 퍼센트를 지정하기보다 컬러를 직접 지정해서 주는 편입니다.  
> 나중에 누가보아도 수정 가능하도록 최대한 직관적이게 관리하는걸 선호하는 편입니다!


> 2022 년에 펼쳐질 다양한 css 를 알아보아요 . ^^  
https://www.bram.us/2021/12/27/css-in-2022/

노이즈 텍스처를 세가지 방법으로 그려보아요.  
SVG로 그라데이션으로 그려보고 https://css-tricks.com/grainy-gradients/  
일러스트로도 그려봅시다 https://youtu.be/qrGHs4d0yt0  
백그라운드에 data img로 넣어본 예제 입니다 https://codepen.io/DavidJAldred/pen/pVbQBJ

> 와 feTurbulence라니 역시 아는 만큼 표현할 수 있네요.iOS safari 지원이 ? 로 나오는데 아이폰으로 보니 이렇게 나와요 원래 이런거 맞나요? https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence
> 
> 네넹 맞아요! 저도 방금 궁금해서 아이패드로 확인해봤어요! circle에 필터로 적용한거라서 외곽에 노이즈되는 부분이 적용되어있는 결과 같아요. 공유해주신 <feTurbulence> 링크에서 dom 인터페이스에 링크로 들어가보니 사파리는 6으로 지원하는거 확인했습니다! 예전에 filter 관련 속성들로 개인적으로 만들어보다가 브라우저에 반영이 안되는 경우가 있었던걸로 기억하는데, 지금은 브라우저에서 지원 많이 하나봐요!!ㅎ 여러가지 방법으로 다양한 디자인을 만들수 있다는것이 너무 좋습니다.  
> 
> 아 css-tricks 원문에도 나와있네요. safari 도 된다고 하는군요. ferlin noise를 이렇게 간단하게 구현할 수 있다니 ㄷㄷ  

Ogl로 만든 결과물이래요. 단순히 모델 로드해서 마우스이벤트랑 씬만 잡아주는거면 3js에서 작업해도 될듯합니다.  
https://twitter.com/johnnydekkers/status/1473737516788424705?t=oXHeqspFSz9F0ExFwtOkyQ&s=19

OGL  
https://github.com/oframe/ogl

> 훈민님이 작업하신 링크 : 크리스마스 기념으로 만든 작은 트리를 올려봅니다.  
https://codesandbox.io/s/simple-christmas-tree-c6jjj?file=/index.html

이렇게 트리를 각자 방식으로 꾸미는 방법도 재밌는거 같아요. 저도 작년부터 올해 가을까지 사람들하고 한달에 한번 공통 주제 정해서 작업하던게 있었는데
단어 하나로 각자의 방식으로 풀이하는게 재밌었습니다.  
https://github.com/Resten1497/christmas_tree/tree/master/html  
https://github.com/Resten1497/christmas_tree/tree/master/js

포스터에 원형과 사각형 도형을 마우스 이벤트로 가볍게 만드는 방법도 있군요. x축 방향은 이동, y축 방향은 스케일인데 사각형과 원형 도형과 컬러에 따라 플러스 방향과 마이너스 방향 이동과 스케일이 달라집니다. p5js 태그가 걸려있는거보니 p5로 만든듯해요. 이분은 포스터에 기본 도형 갖고 움직임을 다르게 주는걸 좋아하는거 같아요.  
위에 설명과 아래 썸네일은 이 영상이고 https://www.instagram.com/p/CXYchJfs3DT/  
이건 동그라미가 교차되면서 갯수가 달라지고 https://www.instagram.com/p/CXQdMtJM5WD/  
이건 스케일과 회전 각도가 달라집니다. https://www.instagram.com/p/CWvBHE-DcR3/

예전에 에펙으로 모션그래픽 디자인을 제작하기는 했었지만애니메이션과 영상을 다루지 않았어서 콘티 같은건 제가 부족한 부분이기도한데요.그래서 이런 무빙을 관찰하는 연습을 하는중이예요. 코드가 바로 있으면 좋지만 인스타는 결과만 공유한 경우가 많아서어떤 라이브러리를 사용해서 제작했고, 무슨 디자인을 작업했는지를 주로 보고있습니다.

아잇 정말 갤러리 너무 예쁜데 스크롤 반응 너무 느려요. 그래도 디자인 참고될거 같아서 공유합니다. 모바일버전 레이아웃이 잘 어울려요. 제 사진들도 이렇게 액자에 넣어서 온라인 전시관에 넣어볼... 생각해봤는데 사진 고르는데 한세월일듯 싶네요. 나중에 하는걸로...아! 코드로 그림그린거 전시해도 되겠어요!! 다들 개인 전시관 하나씩 만드시죠!  
https://gallery.mediciism.com/

path 따라서 ease: jumping으로 rotation 하는 크리스마스볼을 SVG와 GSAP로 만들어보아요. css에 display를 block으로 바꿔보면 패스가 나옵니당  
https://codepen.io/Nekto/pen/vYeJQMX

react + three.js 로 구성한 autonomous driving system visualization 입니다.  
https://m.youtube.com/watch?v=x009wWOVB6M&feature=youtu.be

파티클 트리입니다. 노래도 너무 잘어울려요.  
https://codepen.io/pehaa/pen/KKXMKMN

전 개인적으로 빛과 어둠을 같이 표현하는걸 좋아합니다.
이거보고 영감 받아서 만들었다고 합니다.이정도면 glsl이 메인이고 3js와 gsap는 보조같습니다.
https://github.com/kekkorider/threejs-audio-reactive-visual

인포그래픽은 오래전부터 visual capitalist나 203인포그래픽연구소 처럼 정보를 전달하는 인포그래픽을 한번씩 구경하곤 했습니다. 인포그래픽으로 워낙 유명한 곳들이라 아시는분들도 계시겠지만 모를수도있어서 공유해요.  
https://www.visualcapitalist.com/  
http://203x.co.kr/

오 이분 제가 평소에 자바스크립트 문제 깃헙 구독해서 보고 있었는데이번에 자바스크립트 패턴을 정리한 사이트를 만들었대요. 브라우저 직접 보면서 케이스 스터디 재밌어보이네요!(dev.to에서 비슷한 포스팅 종종 보긴 했습니다.) 저는 학문 같은 공부보다 실제 사례를 보면서 분석하는 것에 흥미가 매우 큽니다.
UX 기획이나 UI는 케이스 스터디가 있는편이예요. FE는 소규모나 개인으로만 사례연구하고 블로그에 작성하여 공개하는건 봤지만, 오픈된 곳은 없는게 항상 아쉬웠습니다. 스터디를 찾다보면, 보통 문법 관련되거나 CRUD 같은 미니플젝을 만드는게 대부분이예요. 그것도 중요한거긴한데 케이스 스터디가 없는게 아쉬웠습니다. 전 개인적으로 머릿속에 사례가 떠오르지 않으면 학습이 잘 안되더라구요 ㅜㅜ 아직은 운영할 실력이 안되니까 적극적이게 하지는 못했지만, 스스로 어느정도 만족할 실력이되면 꼭 하려구요! 전에는 자바스크립트나 프론트엔드 관련 내용은 사람들이 공유할수있게 오픈된 공간에 올리곤 했는데요. 여기는 #webgl 관련 내용을 올리는 곳이라서 자바스크립트 자료를 여기에 올릴지 고민되더라구요. 여깄는 자료들 모두 JS와 GLSL을 모르면 못만들고 디쟈너 분들도 JS 공부하시니까 그냥 올리려 합니다.

- 자바스크립트 패턴https://www.patterns.dev/   
- 자바스크립트 문제 (문제는 계속 추가되고있어서 알람 걸어두면 추가될때마다 배울 수 있어요)https://github.com/lydiahallie/javascript-questions

> 저 사이트랑 https://refactoring.guru/ 퀄리티가 좋아 아끼고 있어욤

우오옹 이거 언젠간 한번 만들어보고 싶었는데 발견하는날도 생기는군요. 디지털 안에서 물리적인 촉감을 갖기란 제한적일 수밖에 없지만, 익숙한 경험을 넣는 것이 다른 방법이 될수도 있을거란 생각이 들었습니다.  
https://primavistatexture.com/

바람에 흔들리는 잔디를 만들어보아요  
데모 https://bayazuma.github.io/grasswind/  
리포 https://github.com/bayazuma/grasswind

피그마 컴포넌트로 캐릭터 그릴생각은 안해봤는데 svg로 관리할때는 일러보다 작업하기 괜찮아보이는군요. 전 svg 파일로 애니메이션 적용할때 일러보다는 피그마에서 뽑는게 레이어나 코드 정리가 피그마가 훨씬 잘되어있어서 좋아합니다. ai랑 psd랑 피그마가 호환되면 정말 최고 그자체일텐데 어도비가 놔주질 않으니.. 메쉬 버텍스에 그라데이션을 적용하는것 같이 정교하게 작업하는건 피그마에서 한계가 있지만 플랫디자인 같이 단순해보이는걸 작업할때는 피그마에서 그냥 빠르게 작업하는게 나은듯해요.  
https://twitter.com/brdrck/status/1471926235274096648?t=JW9_ZqheC3bvT1NecFdvOg&s=19

> 아바타 만들 때 참고했던 프로젝트인데 정리+설명이 좋더라구요.  
> https://www.figma.com/community/file/834210307944210537

glb 파일 사용현황 이라고 합니다. 검색하면 스페인어랑 러시아어가 많이 나오는 이유가 있었군요. 아시아에서 인터넷이 가장 많이 발전한 나라들중에 중일이 많고 한국은 적은편이에요. 한국은 같은 소프트웨어를 사용하더라도 모델링하시는 분들 커뮤가 게임, 산업, 건축, 영상 명확하게 나뉘어져 있습니다.
게임은 원화 같이 하시는 분들도 많으시고, 게임과 산업은 보통 카페나 단톡에서 봤습니다. 건축인테리어는 지인아니면 커뮤는 거의 없다고 봐야...
지금은 제가 웹개발로 넘어와서 잘 모르는걸수도 있지만, 확실한건 개발 커뮤처럼 자유롭게 의견을 주고받으며 활성화되어 있지는 않아요. 모델링에 애니메이션 더해서 작업하시는 분들은 영상 커뮤에서 활동하시는건 봤습니다. 스페인어 사용은 멕시코라고 나오는데 그쪽도 모델링 많이하나 봅니다. 데이터 통계 출처가 어딘지 궁금하네요. 전 이런건 정보를 검색할때 참고되는 부분이라 한번씩 살펴보곤 합니다.  
https://www.fileviewpro.com/ko/file-extension-glb/

모니터 화면안에 외부를 반사되게하는 방법도 있군요.  
https://codepen.io/zachernuk/full/oNGWZgG?s=09

CSS에서 @property 로 color, percentage, length를 사용하여그라데이션 컬러를 변경하는 예제를 살펴보아요.  
https://github.com/chokcoco/iCSS/issues/109

MDN에서도 @property syntax 볼 수 있습니다. 정리하자면 이정도 속성이 있습니다.
https://developer.mozilla.org/en-US/docs/Web/CSS/@property/syntaxhttps://developer.mozilla.org/en-US/docs/Web/CSS/@property
length, number, percentage, length-percentagecolor, image, url, integer, angle, time, resolutiontransform-list, transform-functioncustom-ident (a custom identifier string)

> 웹에서 2D , 3D 가 혼합된 경험을 할 수 있게 해주는 라이브러입니다. 오픈소스라서 코드를 참고해볼 수도 있습니다. 
https://lume.io/  

> nasa 에서 일하시는 분이 만들고 있습니다.  
https://github.com/lume/lume

gsap가 3.9 릴리즈하면서 유료에서 무료로 기능 추가했어요. 데모 보시면 비디오 스케일이 확대/축소 자연스럽습니다.3js랑 같이 사용하면서 씬 잡으면 프레이머 같은 화면 가능할듯 싶어요 https://greensock.com/3-9  
릴리즈노트 https://github.com/greensock/GSAP/releases/tag/3.9.0

TS & 3js 보일러 플레이트 리포랑 강의 공유해요. 이분 유튭에서 채널 코스 가입으로 강의하시는 분입니다. 유튜브는 멤버쉽 정산이 70%라고 하는데 크리에이터만 가입 받는거 말고 강의로 괜찮은 채널이 더 많아졌으면 하는 바람입니당  
리포는 여기서 볼수있고 https://github.com/Sean-Bradley/Three.js-TypeScript-Boilerplate  
3js 기본 튜토리얼 영상 보면서 기초 공부할수 있어요 https://youtube.com/playlist?list=PLKWUX7aMnlEKTmkBqwjc-tZgULJdNBjEd

브루노 유료 강의 들으시면 디스코드에 webgl 하시는분들 많이 모여계셔요. 천천히 기초부터 잘가르쳐줘서 영어 못해도 이해하는덴 어렵지 않았습니다. 3js 개발자분인 mrdoob도 디스코드에 들어와계셔요. 한국분들은 21년 5월쯤부터 많이 들어오시더라구요. 채널은 퍼블릭하고 프라이빗 두개 따로 있습니다.  
https://threejs-journey.com/?s=09

2021년 CSS 현황 조사 결과 내용이 상세하게 잘나와있습니다. 몇가지 새로나온 프로퍼티도 알고있는지까지 결과에 나와있어요.  
https://2021.stateofcss.com/en-US/

5kb 경량 webgl로 만든 지구를vercel에 디쟌&개발 하시는 분이 만들었대요. 몇 달 전에, 디자인 오래 하신 분들이 개발하게 되면 결국 그래픽스를 하게 된다는 말을 건축 시각화 하시는 분에게 들었는데 너무우우 공감되더라구요! 다른분들이 다 기능에 집중하고 있을때 그 속도를 못따라가는거 같아서 연초에 답답해서 얼마나 울었는지 모릅니다. 그런 말을 듣고나니까 그동안 혼자라는 느낌을 조금 지울수 있었어요. 기능 개발 못따라간다고 좌절할 필요가 없는거였네 라는 생각이 들었죠! 일반 FE 커리큘럼에 정해진 개발만 잘 따라해도 되는데.. 제 관심사는 그게 아니였나봅니다.  
https://github.com/shuding/cobe

프레이머 모션 3d에 레이아웃 카메라 사용해서 공간을 확대해서 보아요  
독스는 여기 https://www.framer.com/docs/layoutcamera/?s=09  
데모랑 코드는 여기여기 https://codesandbox.io/s/framer-motion-3d-layoutcamera-i84e3?file=%2Fsrc%2FApp.js&s=09

프레이머가 리액트 기반이라 언젠간 피버 넣을거라 예상했습니다. 작년이었나.. 캐나다에 계신분하고 협업할때 윈도랑 맥이랑 호환 버그 너무심해서 바로 버리고
gsap 같은 다른 애니메이션 라이브러리 직접 사용하는게 편해서 지금은 안쓰는데여 개인적으로는 접근성이 편하고 연령이 낮은 사람들도 사용하기 편한 UX를 선호하는 편이라 나중에 필요해지면 사용할듯 합니다. 지금은 많이 변한거 같았어요. 전 안쓰지만 프레이머 사용하시는 분들 계셔서 공유해요. 어제 공유했었던 개인플젝 작업하신 물고기 캐릭터도 프레이머 모션 사용한거 봤습니다.

webgl로 만든 사이트 모음집이예요.  

썸넬에 비디오로 다 올려져있어서 직접 접속 안해도 한번에 보기 편합니다.  
https://godly.website/websites/webgl  

더 많이 보시려면 메인으로 가시면 예제 많이 있어요.  
https://godly.website/  

다른데 올려져있는 예제도 보면 중복된 사이트들 있습니다.  
https://threejs.org/https://greensock.com/showcase/https://www.awwwards.com/

muzli에도 webgl 사이트 많이 올라오는데종종 한국분들이 작업한 사이트들도 올라오는거 봤습니다. muzli는 크롬 익스텐션 입니다.  
https://chrome.google.com/webstore/detail/muzli-2-stay-inspired/glcipcfhmopcgidicgdociohdoicpdfc

서핏은 한국형 디자인 모음 크롬 익스텐션 입니다.  
https://chrome.google.com/webstore/detail/%EC%84%9C%ED%95%8F-%EB%A7%A4%EC%9D%BC-%EC%84%B1%EC%9E%A5%ED%95%98%EB%8A%94-%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%98-%EC%BB%A4%EB%A6%AC%EC%96%B4-%EC%A7%80%EC%8B%9D-%ED%94%8C%EB%9E%AB/ipjibgkeofiedbfcfekfggdmjhhljgjn

이분도 개인 프로젝트를 꾸준히 작업하시는 분이셔요. 예전에 TS는 웹지엘 작업하기 조금 불편하다는 글을 어디서 읽었는데... 출처가 기억이.. TS로 작업하시는분 계시면 참고해봐도 좋을거 같아서 공유합니다.  
데모는 여기 https://creativeprojects.vercel.app/  
코드는 여기서 볼 수 있어요. https://github.com/javusScriptus/creativeprojects

> 한국분이 만드시는 오픈소스 WebGL 라이브러리 입니다.   
https://github.com/redcamel/RedGL2

> 샘플은 여기서 확인 하실 수 있어요.  
https://redcamel.github.io/RedGL2/example/index.html  
오픈소스라 같이 참여해보는 것도 좋을 듯 합니다. ^^ 

전시를 웹으로 표현하는 것은 역시 멋있어요. webgl 사이트, 접근성 버전 두가지로 나누었군여. manoloblahnik 마놀로 블라닉...(?) 이라는 구두 브랜드 라고 합니다. 붓으로 동그라미 치면서 전시관으로 이동하는 상상은 못해봤는데 멋있네요! 가운데 탁자를 누르면 메뉴로 이동하는데 노트에 적힌 싸인이 메뉴인지 몰랐어요. 화살표라도 표시해주지.. 웹지엘 사이트에 파티클이 들어간 곳이 자주 보입니다.  
https://thearchives.manoloblahnik.com/

실제 정원을 스캔하여 웹에 담는 과정이 적힌 아티클과 사이트 입니다. 작곡가이자 정원사인 Krzysztof Penderecki (누군지 모르는) 분의 정원을 담았다고 합니다. 저번에 파티클로 작업한 예제에 엔씨 사이트를 공유했었는데요. 그냥 보면 멋있어 보이지만 파티클도 정신없는데 카메라까지 빨라서 너무 어지럽고 더 정신없었어요.

이 사이트 메인에서 엔터 클릭하지 말고, 좌우를 클릭해서 이동하면 카메라는 픽스되고 파티클이 morphing 되는 방법 처럼 뭐라도 좀 고정되어야 덜 어지러운듯 합니다. 자연을 담은 삽화는 너무 아름다워요.  

이건 사이트이고 (소리가 나옵니다.) https://pendereckisgarden.pl/en  
이건 아티클 입니다. https://www.awwwards.com/pendereckis-garden-by-huncwot.html


크리에이티브 코딩은 크리에이티브 코더가 가르치는 강의를 들으면 더 도움되겠져. 여기도 유데미 못지않게 평생소장에 가격이 만원대로 저렴합니다. 주로 아티스트 작업이 많은편인데, JS 인기가 많아서 점점 코딩 강의도 올라오고 있어요. 영어가 아닌 강의도 있지만 자막에 영어를 지원하는 강의를 보시면 됩니다.
이분은 영어를 사용합니다.  
https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript

Codrops는 워낙 유명한 블로그라서 많은 분들도 아실텐데요. crnacura 라는 분은 크리에이티브 코딩을 즐기는 분 같습니다. (저도 이렇게 글쓰려다가 매번 물거품이.. 아직 잘 못해서 그런지 쉽지 않더라구요..ㅠㅠ)  
블로그 https://tympanus.net/codrops/  
리포 https://github.com/codrops

Webgl 1.0 기초는 이 교수님 영상 보고 공부했습니다. 이거 다 본다고 이해하는건 아니지만, 그래도 본거랑 안본거랑 차이는 있을거라 생각합니다. 리스트에 보면 언어는 영어 강의랑 한국어 강의 두가지 타입이 있습니다. 다른 강의 리스트도 보면 배울수 있는게 많아서 좋아요. 유튭에는 알려지지 않은 강의 영상들이 많아서 정말 좋습니다.  
https://youtube.com/playlist?list=PLKseYrrlvWNqmtCMZyoraXIAG2F0sG2o7  
https://github.com/hwan-ajou/webgl-1.0

유데미에서 glsl 강의하시는분 리포 입니다. 예제를 코드펜에서 1번부터 따라하기로 가르치는데 코드를 전부 읽어주면서 강의하셔서 화면에서 놓친 부분도 음성 듣고 기억하게 돼요. 완전 기초부터 가르쳐주셔서 따라만해도 이해하는데 어렵지 않았습니다. 전 이분에게서 glsl 공부했어요.  
https://github.com/NikLever/GLSLfromScratch

> 예전에 iOS에서 Metal과 Shader를 이용하여 좀 특이한 UI를 만드는 법에 대해서 발표한 자료입니다. 결국 여러가지 이유로 실제 제품에 적용해보지는 못했지만 재밌는 UI가 많이 나왔으면 좋겠네요.  
슬라이드 자료 : https://present.do/presentations/61346fa35b179c0da7465369  
영상 자료 : https://www.youtube.com/watch?v=mB9d5RDNryw

3d 목업 사이트는 많은데 목업을 애니메이션까지 작업해주는곳은 거의 못본거 같아요. 이거 만든분은 JS 시작할때 이런거 만들줄 몰랐다고 합니다.(When I started learning JavaScript, I had no idea I'd eventually be able to build apps like this )

목업 애니메이션 예제는 이 사이트에 있습니다.  
https://mockrocket.io/?s=09

며칠전에 제가 질문했던 영상에 정호님이 댓글로 공유해주셨던 코드 참고해서 만들어봐도 좋을듯해요  
https://codesandbox.io/embed/magic-mirror-ddk57?codemirror=1  
https://codesandbox.io/embed/mixing-html-and-webgl-w-occlusion-9keg6?codemirror=1


> 몇가지 옵션으로 격자 형태의 패턴을 쉽게 만들 수 있게 해주는 프로그램입니다.    
> https://simulacroix.github.io/dithering/  
> 코드는 이쪽으로 : https://github.com/simulacroix/dithering

랜덤으로 스케일 커졌다가 작아지면서 ease in out 속도로 페이드 아웃되는 버블을 만들어보아요. 혹시 pug 사용하시는 분 계신가요. 코드펜에서만 유독 많이 보이는데 코드로 자신의 생각과 그림을 표현해내는데 css 랑 JS에만 집중할수 있게 만들어진듯해요. 알고나면 정말 편한데 가르치는 교육도 없고 보편적인 스킬이 아니라서 그런지 그렇게 막 활성화되지는 않는듯해요.  
https://css-tricks.com/the-power-and-fun-of-scope-with-css-custom-properties/ 

이런 사이트 진심 너무좋아요! 빛이 투영되는 물속과 물고기를 이렇게 예쁘게 표현할수도 있다니 🐟 텍스트도 읽어주고 음악 전환도 조화로워서 너무 좋습니다.
며칠전에 공유한 두바이 엑스포는 뭘 눌러야할지 UX가 복잡했는데 여기는 화면 전환과 클릭을 유도하는게 복잡하지 않아서 좋습니다. 영상도 아니고 게임도 아니고 정적 웹도 아닌 다 섞인 복잡해보이는걸 전 왜 좋아하는걸까요. 웹지엘 사이트는 보통 접속할때 로딩시간이 필요해서 로딩 UI를 어떤식으로 구상하면 좋을지 관심이 생기더라구요. 두바이 엑스포도 여기 블루마린도 사이즈가 큰 원형으로 표현했군요. 

근데 폰에서 접속했더니 핸드폰 뜨거워지는데;; 노트북에서 접속하면 랩탑 우주로 날아갈수도 있을듯해요. 다 너무좋은데 웹지엘은 이게 문제입니다 ㅠ 여기 무빙하는 홀 통로는 gsap에 물어봐서 샘플 코드 공유받은적 있었어요. 전에 데모 어디서 보는지 문의했었는데 페이지를 따로 마련해줬네용  

블루마린파운데이션
https://codepen.io/motionharvest/pen/WNQYJyM

셰이더 예제 2d 3d 이미지, 시뮬, 이펙트 등등 3년전이 마지막 커밋인데, 이분도 카테고리 나눠서 모음집 하려고 했었나봐요. 저도 개인플젝 카테고리에 셰이더를 어떻게 넣을지 고민중인데 참고해야겠습니다.

코드는 여기서 보고  
https://github.com/jagracar/webgl-shader-examples

데모는 여기서 볼 수 있어요  
https://webgl-shaders.com/

예상 못했던 css 체크하는 글 입니다. 전 그리드는 안쓰는데 익스 버리고 그리드 많이들 쓰시더라구요. scrollbar-gutter: stable 프로퍼티는 이 글 읽고 처음 알았어요. 그동안 뭘로 검색해야할지 몰랐는데 이렇게라도 알아가니 다행입니다.  
https://ishadeed.com/article/defensive-css/?s=09

터치디자이너로 glsl 을 만들기도 하는군요. 미디어아트나 오디오 비주얼에 많이 사용되나봐요. 확대하면 노드 플로우 보이고, 축소하면 렌더 결과 보이는게 편리하네요! 조금 더 찾아보니까 렌더를 배경에 깔거나 파사드 형태를 미리 잡아서 만드는군요. 노드 연결하는 것이 은근 재밌어서 나중에 해볼만할듯해요!
그리고 shadertoy 보면서 항상 궁금했던 건, 분명 제작하는 프로그램이 있을텐데.. 그게 대체 뭘까? 라는 생각을 항상 갖고 있었거든요.
이것도 지금 한번 알아두고, 다음에 영상 조금씩 봐둬야겠습니다. shadertoy 에서 아직 풀리지 않은 궁금증은.. 아이패드에 어떤건 나오고, 어떤건 안나오는게 풀리지 않는 궁금증이긴해요.

아래 유튜브는 한국어로 터치디자이너에 대해 설명해주는 영상이고 (14분)  
https://youtu.be/A4wchK34tnU

이건 일본어 블로그에서 본 유튭 영상 튜토리얼 1-12까지 나와있어요.(404 뜨는거보니 블로그 링크는 닫았나봐요. 본문에있던 영상 링크로 대체합니다.)  
https://youtu.be/0Bm8CjpdsAY

vscode에서 svg 다이어그램 수정하면 보통은 로컬호스트라도 저장해야 반영되는데 핫 리로딩으로 반영되는거 신기하네요! 화살표 방향도 쉽게 수정 가능해서 랜딩페이지에 간단하게 글쓰면서 설명하기에는 좋아보입니다. 전 이미 사용하는 익스텐션 많고, 컴터도 빠른게 아니라서 더 설치하기 망설여지는데 리포 뜯어서 구조 시각화할때 사용해보려 합니다.  
https://github.com/tldraw/tldraw  
https://twitter.com/seflless/status/1463710140687949826?t=AT0xnASRa_qGM2gkIjfnww&s=19

열차 내부를 이렇게 입체적으로 스크롤해서 보여주는거 방법도 있군여. 같은 모양으로는 비행기, 배, 큰 트럭, 전시관 등 내부를 표현해도 될듯합니다. 여기 그룹 첫 포스팅도 drcmda 이분꺼였는데, 리액트 스프링하고 피버 개발하는 분이셔서 이분이 코드샌드박스에서 올린 목록에 있는것만 봐도 필요한 내용 보고 응용 가능할듯해요. (저도 언제간 이렇게 되겠져.... 멀다...😶)  
https://codesandbox.io/u/drcmda  
https://codesandbox.io/embed/react-three-fiber-suspense-gltf-loader-l900i?file=%2Fsrc%2FApp.js&codemirror=1&s=09

> 미래 지향 SF 느낌의 UI 입니다.   
> https://github.com/arwes/arwes  
> 앞으로 이런 것도 많이 볼 수 있지 않을까해서 가지고 왔어요 ^^

모질라에 cap 단위가 머지 되었다는데 파폭에서 한번 구경해봐요. 캡을 근데 어떻게 쓰는게 좋을지 아직 모르겠어요. 이미지처럼 체크박스에 쓰는게 좋을까요. 체크박스 안에 체크 디자인마다 css로 커스텀하는거 은근 귀찮은데.. 단위로 빠르게 수정 된다면 넘환영입니다.  
https://bugzilla.mozilla.org/show_bug.cgi?id=1702924&s=09

여기 천문회 동아리에서 전시회를 웹지엘로 만들었길래 공유합니다. 천체사진전 12/3-12/16일까지 라고 합니다. 이렇게 예쁜데 그 이후에 사이트 닫으면 아쉬울거 같아요.  
https://exhibition39.snuaaa.net/

디자인을 하고 있어서 애니메이션을 최적화해서 구현한다거나, 웹 타이포그래피 구현에 대해서 관심이 많습니다. 아직 글로는 발행하지는 않았지만, 내부에서 퍼블리싱 작업도 겸하면서 협업을 위한 CSS에 대한 글도 작성해서 공유하고 있어요.  
https://brunch.co.kr/@99-life/2https://www.notion.so/veluga/CSS-ce833773a8174100993856d9ca5cd58f

> 잘 보았습니다 🙂 저도 비슷한 포지션인데 깔끔하게 정리된 노션을 보니 정말 좋네요! 저희는 react + styled component 사용해서 클래스 네이밍을 크게 고려하지 않는데 post css 때문에 css가 깨지면 어디서 깨진건지 찾는데 시간이 좀 걸리는 단점이 있네요😢 장단점이 모두 있는 것 같아요! 좋은 글 공유해주셔서 감사합니다!

3d 목업 사이트는 많은데 목업을 애니메이션까지 작업해주는곳은 거의 못본거 같아요. 이거 만든분은 JS 시작할때 이런거 만들줄 몰랐다고 합니다.(When I started learning JavaScript, I had no idea I'd eventually be able to build apps like this ) 목업 애니메이션 예제는 이 사이트에 있습니다.  
https://mockrocket.io/?s=09

며칠전에 제가 질문했던 영상에 정호님이 댓글로 공유해주셨던 코드 참고해서 만들어봐도 좋을듯해요  
https://codesandbox.io/embed/magic-mirror-ddk57?codemirror=1  
https://codesandbox.io/embed/mixing-html-and-webgl-w-occlusion-9keg6?codemirror=1

오브제에 매핑할수 있는 에디터 공유합니다. 그룹에 아트나 에디터 작업하시는 분들 계셔서 최대한 데모있는 오픈소스로 공유하려 합니다.  
https://lab.julienverneaut.com/matcap-editor/?s=09  
https://github.com/jverneaut/laboratoire  

리액트에 올린 shader 예제 51개 입니다. Shader 가 한글로 쉐이더라고 하기도하고 셰이더라고 하기도 하는데 둘다 같아서 뭐가 더 맞는건지는 잘 모르겠어요. (셰이더로 표기하기로 했습니다!) 여기있는 예제들로 3js에 대표 예제 사이트처럼 만드는 방법도 재밌을거 같아요.  
https://cineshader.com/

> network graph engine 을 개발할때 프론트단에서 사용했던 라이브러리예욤. 탄성이 좋으며 랜더링 속도가 비교적 빠르며 컬러 커스티마이징도 용이해서 좋은 느낌을 받았던 아이예욤  
> https://www.npmjs.com/package/3d-force-graph

> 알리바바에서 만드는 3d 엔진입니다.  
> https://github.com/hiloteam/Hilo3d  

요홍 스플라인 발전이 빠른편이군여 얼마전에 파티클 렌더시 CPU GPU 통신하는거 성능개선 관련 아티클 번역하면서 공부했는데 스플라인 트윗 보고 와 여기는 발전 빠르게하네 라는 생각이 들어서 공유합니다. 영상 보시면 웹캠으로 볼수있고, 모델링 업로드도 가능해요. 번역하면서 그냥 오브제로 나오는거 말고 파티클을 렌더하는건 쉬운게 아니라는걸 알았습니다.  

데모 사이트는 여기서 모델링 업로드 가능합니다.  
https://matrix.spline.design/?s=09

엔씨소프트 메인에도 파티클 있어서 링크 같이 올려요.  
https://kr.ncsoft.com/kr/index.do

엔씨소프트에 있는 석탑(?)모양으로된 비슷한 내용이 dev.to에도 있어서 같이 공유합니다.  
https://dev.to/maniflames/pointcloud-effect-in-three-js-3eic


여기 리포 알림 걸어두었는데 이슈에 예제들이 계속 계속 추가되는거보고 '와 이거 따라만들기 쉽고 재밌는 예제들 정말 많넹 CSS에 진심인 분들이 여기 다모였구나' 라고 생각했습니다. 설명은 중국어이긴한데 이미지랑 코드만 보고 챌린지 같이 연습해보는것도 좋을거 같아서 공유합니다. (얼마전에 진호님이 공유해주셔서 알게된 css 리포입니다.)  
https://github.com/chokcoco/iCSS

여기 작년 2020 두바이 엑스포 사이트 입니다.  
https://virtualexpodubai.com/

> 재호님이 작업하신 링크  
> https://www.shadertoy.com/view/Xty3zd  
> shaderToy로 간단한 신서사이징을 구현해보았습니다.  
> 킥하나 떨어뜨리고 사인으로 베이스를 얹은 다음 16스텝 멜로디 노가다를 하였습니다.볼륨컨트롤 사용해서 하나짜리 숏딜레이도 했는데 괜히 했다 싶네요.

> 안녕하세요 잘부탁드려요. 저는 최근에 THREE.js로 화면 구성할 일이 있어서 참고 많이했던게 react-three-fiber document에 example이랑,drei storybook이었어요. 앞으로 좋은 정보 많이 얻어가겠습니다~  
> react-three-fiber example https://docs.pmnd.rs/react-three-fiber/getting-started/examples  
> drei storybook https://drei.pmnd.rs/?path=/story/performance-adaptive--adaptive-scene-st

> 혹시 shader도 취급하나요? https://www.shadertoy.com/view/7sjSRt
> 혼자 공부하려니 흥이 나지 않더라구요 ;ㅁ;

r3f 예제 입니다.
https://codesandbox.io/s/bdctv


***
***

<br/>

> 이렇게 되어있는 부분은  
> 진호님, 재호님, 정호님, 세웅님, 보나님, 선협님, 유진님, 재원님, 제현님, 찬성님, 지환님, 혁환님, 정규님, 박용님, 성우님, 기은님, 송희님, 훈민님, 거위님, 윤규님, 지훈님, 찬웅님, 병승님, 준우님, 보나님, 현우님, 서윤님, 승민님, 유진님, 광호님, 연희님, 성진님, 성진님
> 께서 공유해주신 내용 입니다.  
> 
> 모두들 같이 공부하며 성장하게 되어서 인생에서 가장 소중한 시간을 보내고 있는 것 같습니다. 감사합니다.
> 