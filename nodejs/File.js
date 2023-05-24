# import
const fs = require('fs');

# Usage
# readFileSync( path, [option : BufferEncoding] )
# type BufferEncoding = | 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex';
app.get("/readFileSync", (req, res) => {
  var file = fs.readFileSync(__dirname + "/data/data.json", "utf-8"); // readFileSync 함수를 통해 파일을 불러온다.
  res.setHeader("Content-Length", file.length); // 콘텐츠 길이를 파일의 길이로 설정
  res.write(file, (error) => { console.log(error); }); // 파일을 response 객체에 담는다.
  res.end(); // response 종료
});


// 파일을 바로 다운로드 시키고 싶을 때
app.get("/download", (req, res) => {
  var fileName = 'data.json'; // 파일명을 변수에 담는다.
  var filePath = path.join( __dirname, `/data/${fileName}` ); // 파일의 절대 경로를 만든다.
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`); // header 를 설정한다. (이게 핵심)
  res.sendFile(filePath); // 파일의 절대 경로를 보낸다.
});


