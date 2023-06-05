# import
const path = require('path');
import path from "path";


# Usage
### __path.join(directory, file)__
+ 여러 개의 문자열을 통해 경로를 반환해준다.
``` javascript
app.get("/path", (req, res) => {
  var dir = "data";
  var file = "data.json";
  var filePath = path.join(__dirname, dir, file);
  res.send(filePath); 
});
```
> result
```
C:\Users\black\Documents\Seodev\develope\nodejs\mysql2\data\data.json
```


# path.resolve(path, relative path, file)
// cd 명령어를 연속으로 실행하는 것처럼 작동을 한다.
// 항상 절대 경로를 반환한다.
app.get("/resolve", (req, res) => {
  var filePath = path.resolive(__dirname, "../mysql/data", "../data", "data.json");
  res.send(filePath); 
});
// res : C:\Users\black\Documents\Seodev\develope\nodejs\mysql\data\data.json


# path.dirname(filePath)
// 디렉토리 이름을 반환해준다.
app.get("/dirname", (req, res) => {
  var dir = path.dirname(__dirname + '/data/data.json');
  res.send(dir); 
});
// res : C:\Users\black\Documents\Seodev\develope\nodejs\mysql2/data


# path.basename(filePath)
// 파일 이름을 반환해준다.
// 2번째 인자로 "." 을 포함한 확장자를 넘기면 순수 파일 이름만 반환한다.
app.get('/basename', (req, res) => {
  var base1 = path.basename(__dirname + 'data/data.json');
  var base2 = path.basename(__dirname + 'data/data.json', '.json');
  res.send([base1, base2]);
});
// res : ["data.json","data"]


# path.extname(filePath)
// 파일 확장자명을 반환해준다. 
// "." 을 포함한 확장자 명을 반환해준다.
app.get('/extname', (req, res) => {
  var ext = path.extname(__dirname + '/data/data.json');
  res.send(ext);
});
// res : .json


# path.isAbsolute(filePath)
// 경로가 절대 경로인지 체크해준다.
// 절대 경로일 경우 반환 값은 true
app.get("/isAbsolute", (req, res) => {
  var isAbsolute1 = path.isAbsolute(__dirname + "/data/data.json");
  var isAbsolute2 = path.isAbsolute("./data/data.json");
  res.send([isAbsolute1, isAbsolute2]);
});
// res : [true,false]


# path.normalize(filePath)
// [./, ../, /] 와 같은 경로를 정리하여 경로를 반환해줌
app.get("/normalize", (req, res) => {
  var normalize = path.normalize(
    __dirname + "../mysql2" + "./data/" + "/data.json"
  );
  res.send(normalize);
});
// res : C:\Users\black\Documents\Seodev\develope\nodejs\mysql2..\mysql2.\data\data.json


#path.relative(filePath)
// 어떤 절대 경로를 기준으로 다른 절대 경로의 상대 경로를 알고 싶을 때 사용한다.
// 1번쨰 인자(경로)를 기준으로 2번째 인자(경로)까지의 상대 경로 값을 반환한다.
app.get('/relative', (req, res) => {
  var relative = path.relative( __dirname + '/data/data.json', __dirname + '/public/image');
  res.send(relative);
});
// res : ..\..\public\image
