res.status(code)
// HTTP 응답 코드를 설정한다. 응답 코드가 redirect(30x)라면 res.redirect 를 쓰는 것이 낫다.
app.get('/status', (req, res) => {
  res.status(200); // 응답 코드를 200으로 설정한다.
  res.json({ message: res.statusCode }); // 설정된 응답 코드를 응답한다.
});


res.set(name, value)
// 응답 헤더를 설정한다.
app.get('/set', (req, res) => {
  res.set('setHeader', 'header is setted');
  res.json({ message: 'header set' });
});
// Response Header 정보
...
setHeader: header is setted
...


res.cookie(name, value, [options])
// 클라이언트에 저장될 쿠키를 설정하거나 제거한다. // 자세한 내용은 cookie-parser 에서 설명한다.
app.get('/cookie', (req, res) => {
  res.cookie( 'user', { name: 'kim', age: 32 } );
  res.json({ message: 'cookie is setted' });
});


res.redirect([code], url)
// 해당 url 로 code 값과 함께 redirect 한다. // code 미 지정시 기본 값은 302 이다.
app.get('/redirect', (req, res) => {
  res.redirect(200, '/');
});


res.send([code], body)
// 클라이언트에 응답을 보낸다. 상태 코드는 옵션이다. 
// 기본 콘텐츠 타입은 text/html 이므로 text/plain 으로 보내려면 res.set('Content-Type', 'text/plain') 을 먼저 호출해야 한다.
// JSON 을 보낼 거면 res.json 을 사용하는게 효율적이다. (함수 호출이 res.send 보다 적음)
app.get('/send', (req, res) => {
  res.send(200, 'send data');
});


res.json([code], json)
// 클라이언트에 JSON 값을 보낸다.
// express 에선 res.status(code) 와 res.json(joson) 을 나눠쓰는 것을 권장한다.
app.get('/json', (req, res) => {
  res.json(200, { data: 'json data' });
});


res.jsonp([code], jsonp)
// 클라이언트에 JSONP 값을 보낸다. // jsonp 는 <script> 는 cors 정책에 걸리지 않는다는 것을 우회하여 json 을 응답하는 기법이다.
app.get('/jsonp', (req, res) => {
  res.jsonp(200, { data: 'json data' });
});


res.type(type)
// Content-Type 헤더를 설정할 수 있는 간단한 메서드이다.
app.get('/type', (req, res) => {
  res.type('application/json');
  res.send(200, { data: 'json data' });
});


res.format(object)
// Accept 요청에 따라 다른 콘텐츠를 전송할 수 있는 메소드
// 이건 잘 모르겠다


res.attachment([fileName])
res.download(path, [filename], [callback])
// 클라이언트에게 파일을 표시하지 말고 다운로드 받으라고 전송한다.
// filename 을 주면 파일 이름이 명시되며, res.attachment 는 헤더만 설정하므로 다운로드를 위한 node 코드가 따로 필요하다.
// 어떻게 써야하는지 모르겠음... 그냥 fs 모듈 쓰는게 나을 듯


res.sendFile(path, [callback])
// path의 파일을 읽고 해당 내용을 클라이언트로 전송한다.
app.get("/sendFile", (req, res) => {
  let file = path.join(__dirname, "/data", "data.json");
  // 콜백 함수로 에러가 날 경우를 처리할 수 있다.
  res.sendFile(file, (error) => { 
    res.json(error);
  });
});
// res : 
{
  "user": [
    { "name": "kim", "age": 30 },
    { "name": "lee", "age": 31 },
    { "name": "park", "age": 32 }
  ]
}


res.links(links)
// Links 응답 헤더를 설정한다.
// 어디에 쓰이는 지 모르겠음..
app.get('/links', (req, res) => {
  res.links('/example');
  res.send('links');
});
// header.Link = </>; rel="0", <e>; rel="1", <x>; rel="2", <a>; rel="3", <m>; rel="4", <p>; rel="5", <l>; rel="6", <e>; rel="7"


res.render
// ejs 와 같은 템플릿 엔진을 사용하여 뷰를 렌더링한다.
app.get('/render', (req, res) => {
  res.render('index.ejs');
});
