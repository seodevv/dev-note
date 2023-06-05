# multer

### install
``` javascript
npm i -D multer
```
---

### Usage
#### import library
``` javascript
const express = require('express');
const app = express();

const multer = require('multer');
```
+ multer 패키지를 import 한다.


#### storage setting
``` javascript
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const upload_path = path.join(__dirname, process.env.PUBLIC_URL, req.body.category);
    callback(null, upload_path);
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname + "_" + Data.now());
});
```
+ multer.diskStorage 를 사용해 파일이 저장될 곳을 지정한다.
  + destination : 파일이 저장될 위치
  + filename : 저장될 파일명


#### multer setting
``` javascript
const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if(!['.png','.jpg','.jpeg'].includes(ext)){
      callback(new Error("Please upload image file(png, jpg, jpeg)"), false);
    }
  callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});
```
+ multer 를 사용해 file 을 저장할 위치와 파일 필터링, 용량 제한 등을 설정한다.
  + dest or storage : 파일이 저장될 위치
  + fileFilter : 어떤 파일을 허용할 것인지 제어하는 함수
  + limits : 업로드 된 데이터의 한도
  + preserverPath : 파일의 base name 대신 보존할 파일의 전체 경로


---
### 단일 파일 업로드
``` html
<form action="http://localhost:8081/upload" method="post" encType="multipart/form-data">
  <input type="text" name="category" />
  <input type="file" name="profile" />
  <button type="submit">upload</button>
</form>
```
+ 단일 파일을 업로드하는 form 을 만든다.
+ 이 때, form 의 encType은 multipart/form-data 로 설정해준다.


``` javascript
app.post('/upload', upload.single('profile'), (req, res, next) => {
  console.log(req.file);
  res.send('upload success');
});
```
+ /upload 에 단일 파일 업로드 요청이 들어올 경우
+ upload.single 함수가 실행되어 업로드가 진행된다.
+ upload.single 은 인수로 file input 의 name 을 받는다.
``` javascript
{
  fieldname: 'profile',
  originalname: '4YDYWEL.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'C:\\Users\\black\\Documents\\Seodev\\develope\\react\\zerocho\\server\\public\\products',      
  filename: '4YDYWEL.jpg',
  path: 'C:\\Users\\black\\Documents\\Seodev\\develope\\react\\zerocho\\server\\public\\products\\4YDYWEL.jpg',
  size: 11140
} 
```
+ file input 으로부터 받은 파일 정보는 req.file 에 저장된다.


---
``` html
<form action="http://localhost:8081/uploas" method="post" encType="multipart/form-data">
  <input type="text" name="category" />
  <input type="file" name="profile" multiple/>
  <button type="submit">upload</button>
</form>
```
+ 여러 파일을 업로드하는 form 을 만든다.
+ 이 때, form 의 encType은 마찬가지로 multipart/form-data 로 설정해준다.
