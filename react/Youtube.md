# Youtube Component
+ react-youtube 라이브러리를 통해 youtube component 를 사용할 수 있다.

## install
```
$ npm install react-youtube
```

## usage
+ https://developers.google.com/youtube/player_parameters
``` javascript
import Youtube from 'react-youtube';

const App = () => {
  return (
    <YouTube
      videoId={string}                  // defaults -> null
      id={string}                       // defaults -> null
      className={string}                // defaults -> null
      containerClassName={string}       // defaults -> ''
      title={string}                    // defaults -> null
      opts={obj}                        // defaults -> {}
      onReady={func}                    // defaults -> noop
      onPlay={func}                     // defaults -> noop
      onPause={func}                    // defaults -> noop
      onEnd={func}                      // defaults -> noop
      onError={func}                    // defaults -> noop
      onStateChange={func}              // defaults -> noop
      onPlaybackRateChange={func}       // defaults -> noop
      onPlaybackQualityChange={func}    // defaults -> noop
    />
  )
}
```

## example
``` javascript
<YouTube
//videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
  videoId={video.key}
//opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
//밑에서 더 설명하겠습니다.
  opts={{
    width: "560",
    height: "315",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  }}
  //이벤트 리스너 
  onEnd={(e)=>{e.target.stopVideo(0);}}      
/>
```
