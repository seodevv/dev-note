req.params 
// URL 파라미터로 받은 인자 값을 담는다.
app.get('/:idx', (req, res) => {
  res.send(req.params.idx); 
});


req.query 
// GET 방식으로 넘어오는 query string 파라미터를 담는다.
curl -XGET http://localhost:8080/?idx=123
app.get('/', (req, res) => {
  res.send(req.query.idx);
}


req.body
// POST 방식으로 넘어오는 파라미터를 담는다. 
// HTTP 의 Body 에 담겨오는데 이 부분을 파싱하기 위해 body-parser 가 필요하다.
// 21년 이후 프로젝트는 body-parser 라이브러리가 express 포함되어 설치하지 않아도 된다.
app.use(express.urlencoded({extended: true})); // body-parser 미들웨어 설정
app.post("/example/:idx", (req, res) => {
  const data = {
    body: req.body.idx,
  };
  res.send(data);
});


req.route
// 현재 route에 관한 정보를 담는다.
app.get("/route", (req, res) => {
  const data = {
    route: req.route,
  };
  res.send(data);
});
// req.route 에 대한 정보
Route {
  path: '/route',
  stack: [
    Layer {
      handle: [Function (anonymous)],
      name: '<anonymous>',
      params: undefined,
      path: undefined,
      keys: [],
      regexp: /^\/?$/i,
      method: 'get'
    }
  ],
  methods: { get: true }
}


req.cookies
// 클라이언트에서 전달된 cookies 값을 담는다.
app.get('/cookie', (req, res) => {
  var cookies = req.cookies;
  res.json(cookies);
});
// req.cookies 에 대한 정보 // {key1, key2, ...} 와 같이 Object 형태로 정보를 갖는다.
{
  cookie1: { name: 'kim', age: '32' },
  cookie2: { name: 'lee', age: '33' }
}


req.headers
// HTTP의 header 정보를 담는다.
app.get("/header", (req, res) => {
  res.json(req.headers);
});
// req.headers 에 대한 정보 // host, connection 등의 정보를 갖는다.
{
  host: 'localhost:8080',
  connection: 'keep-alive',
  'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
  cookie: 'cookie1=j%3A%7B%22name%22%3A%22kim%22%2C%22age%22%3A%2232%22%7D; cookie2=j%3A%7B%22name%22%3A%22lee%22%2C%22age%22%3A%2233%22%7D',
  'if-none-match': 'W/"2dc-57tyhqK1k6JnuFWEIPGHnI3inGQ"'
}


req.ip
// 클라이언트의 IP Address 정보를 담는다.
app.listen(8080, "0.0.0.0", (req, res) => {}); // "0.0.0.0" 을 설정하지 않을 경우, req.ip 에 ipv6 주소가 담긴다. 
app.get("/ip", (req, res) => {
  res.json(req.ip); // 127.0.0.1
});


req.path
// 클라이언트가 요청한 경로로 프로토콜, 호스트, 포트, 쿼리스트링을 제외한 순수 요청 경로 정보가 담긴다.
app.get('/path', (req, res) => {
  res.json(req.path); // "/path"
});


req.host
// 요청 호스트 이름 정보를 담는다. // host 가 조작될 가능성이 있어 보안 목적으로 사용을 지양한다.
app.get("/host", (req, res) => {
  res.json(req.host); // "localhost"
});


req.xhr
// 요청이 ajax 호출로 시작되었다면 true 를 반환한다.
app.get('/xhr', (req, res) => {
  if(req.xhr) res.json({message: 'ajax'});
  else res.json({message: 'not ajax'});
});


req.protocol
// 현재 요청의 프로토콜 정보를 담는다. (http, https 등)
app.get('/protocol', (req, res) => {
  res.json(req.protocol); "http"
});


req.secure
// 현재 요청이 보안 요청(SSL7) 이면 true 를 반환한다.
app.get('/secure', (req, res) => {
  if(req.secure) res.json({message: 'secure is SSL7'});
  else res.json({message: 'secure isn not SSL7'});
});


req.originalUrl
// 클라이언트가 요청한 오리지널 경로 정보가 담긴다.
app.get('/originalUrl', (req, res) => {
  res.json(req.originalUrl);
});
http://localhost:8080/originalUrl?value1=123&value2=321 >> "/originalUrl?value1=123&value2=321"


req.url
// 클라이언트가 요청한 경로 정보가 담긴다.
app.get('/url', (req, res) => {
  res.json(req.url);
});
http://localhost:8080/url?value1=123&value2=321 >> "/url?value1=123&value2=321"


req.acceptedLanguages
// 클라이언트가 선호하는 자연어 목록을 반환한다. // 다국어를 지원하는 어플리케이션이라면 초기 언어 선택에 도움을 줄 수 있다.
app.get('/acceptedLanguages', (req, res) => {
  res.json(req.acceptedLanguages);
});
