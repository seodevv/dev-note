# OpenGraph
+ 카카오톡와 같은 메신저에서 href 를 보냈을 때 preview 를 보여주는데,
+ 이 데이터는 해당 html head 의 meta opengraph 를 보여준다.


## in HTML
``` html
<head>
  <meta property="og:title" content="네이버">
  <meta property="og:url" content="https://www.naver.com/">
  <meta property="og:image" content="https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png">
  <meta property="og:description" content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요">
</head>
```


## git
+ https://github.com/samholmes/node-open-graph


## install
+ express 에선 잘 동작하나, react 에선 추가 설정이 필요하므로 주의에 요한다.
```
npm i open-graph
```


## Usage
``` javascript
const og = require('open-graph');
const url = 'http://github.com/samholmes/node-open-graph/raw/master/test.html';

og(url, function (err, meta) {
  console.log(meta);
});
```
> output
```
{
  title: 'OG Testing',
  type: 'website',
  url: 'http://github.com/samholmes/node-open-graph/raw/master/test.html',
  site_name: 'irrelavent',
  description: 'This is a test bed for Open Graph protocol.',
  image: {
    url: 'http://google.com/images/logo.gif',
    width: '100',
    height: '100'
  }
}
```


## example code
``` javascript
const og = require("open-graph");
router.get("/opengraph", (req, res) => {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: true, message: "bad request" });
    return;
  }
  og(url, (error, meta) => {
    if (error) {
      setTimeout(() => {
        res.json({ error: true, ...error });
      }, 300);

      // console.log(error);
      // res.status(500).json({ error: true, ...error });
      return;
    }
    setTimeout(() => {
      res.json(meta);
    }, 300);
  });
});
```
