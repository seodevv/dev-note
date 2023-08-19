# fs

## import
``` javascript
const fs = require('fs');
```
+ fs 패키지를 import

---
## Usage
### fs.readFileSync( path [, option : BufferEncoding] )
+ 해당 파일을 불러온다.
+ 2번째 인자로 불러올 캐릭터셋을 지정한다.
``` javascript
app.get("/readFileSync", (req, res) => {
  var file = fs.readFileSync(__dirname + "/data/data.json", "utf-8"); // readFileSync 함수를 통해 파일을 불러온다.
  res.setHeader("Content-Length", file.length); // 콘텐츠 길이를 파일의 길이로 설정
  res.write(file, (error) => { console.log(error); }); // 파일을 response 객체에 담는다.
  res.end(); // response 종료
});
```

+ 파일을 바로 다운로드 시키고 싶을 때
``` javascript
app.get("/download", (req, res) => {
  var fileName = 'data.json'; // 파일명을 변수에 담는다.
  var filePath = path.join( __dirname, `/data/${fileName}` ); // 파일의 절대 경로를 만든다.
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`); // header 를 설정한다. (이게 핵심)
  res.sendFile(filePath); // 파일의 절대 경로를 보낸다.
  res.end();
});
```


### fs.existSync( path )
+ path 의 파일의 존재 여부에 따라 boolean 값을 반환한다.
``` javascript
app.post('/existSync', (req, res) => {
  const category = req.body.category || 'default'; // body로 부터 category 를 받아옴. 없을 경우 default 값을 가짐
  const dir = path.join(__dirname, './public/image', category); // 존재 여부를 확인할 dir 변수를 작성
  const exist = fs.existSync(dir); // dir 변수가 존재할 경우 true 를 반환
  res.send(exist);
});
```


### fs.mkdirSync( path [, option : fs.MakeDirectoryOptions ])
+ path 경로의 디렉토리를 생성함
+ 2번째 인자로 { recursive: true } 를 줄 경우, 2 Depth 이상의 디렉토리도 생성된다.
``` javascript
app.post('/mkdirSync', (req, res) => {
  const category = req.body.category || 'default'; // body로 부터 category 를 받아옴. 없을 경우 default 값을 가짐
  const dir = path.join(__dirname, './public/image', category); // 존재 여부를 확인할 dir 변수를 작성
  fs.existSync(dir) && fs.mkdirSync(dir, { recursive: true });
  res.send('mkdir success');
});
```


### fs.rename( sourceFileName, targetFileName, callback )
+ sourceFileName -> targetFileName 으로 파일을 옮김.
+ callback 은 인자로 error 가 들어오므로, 에러 여부에 따른 로직을 작성하면 된다.
``` javascript
fs.rename(source, target, (error) => {
  if (error) {
    console.error(error);
    return res.json({ success: false, error });
  }
  return res.json({
    success: true,
    file: target,
  });
});
```
