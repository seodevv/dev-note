# Youtube Component
+ react-youtube 라이브러리를 통해 youtube component 를 사용할 수 있다.

## install
```
$ npm install react-youtube
```

## usage
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
