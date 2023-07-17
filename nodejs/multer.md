# multer

### install
``` javascript
npm i -D multer
```
---

### Usage
#### 1) import library
``` javascript
const express = require('express');
const app = express();

const multer = require('multer');
```
+ multer 패키지를 import 한다.


#### 2) storage setting
``` javascript
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const upload_path = path.join(__dirname, process.env.PUBLIC_URL, req.body.category);
    cb(null, upload_path);
  },
  filename: (req, file, callback) => {
    cb(null, file.originalname + "_" + Data.now());
});
```
+ multer.diskStorage 를 사용해 파일이 저장될 곳을 지정한다.
  + destination : 파일이 저장될 위치
  + filename : 저장될 파일명
+ destination 을 사용할 경우 디렉토리를 미리 생성해두어야 한다. (미리 생성해놓지 않을 경우 error 발생)


#### 3) multer setting
``` javascript
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const accessExt = [".png", ".jpg", ".jpeg", "gif"];
    if (!accessExt.includes(ext)) {
      cb(new Error("Please upload image file"), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});
```
+ multer 를 사용해 file 을 저장할 위치와 파일 필터링, 용량 제한 등을 설정한다.
+ dest or storage : 파일이 저장될 위치
+ fileFilter : 어떤 파일을 허용할 것인지 제어하는 함수
  + callback(null, false) : 파일을 거부하려면 false 를 전달
  + callback(null, true) : 파일을 허용하려면 true 를 전달
  + callback(new Error('I don\'t have a clue!') : 문제가 생겼다면 에러를 전달할 수 있다.
+ limits : 업로드 된 데이터의 한도
  + fieldNameSize : 필드명 사이즈 최대값 (기본값 100bytes)
  + fieldSize : 필드값 사이즈 최대값 (기본값 1MB)
  + fields : 파일 형식이 아닌 필드의 최대 개수 (기본값 무제한)
  + fileSize : multipart 형식 폼에서 최대 파일 사이즈(bytes) (기본값 무제한)
  + files : multipart 형식 폼에서 파일 필드의 최대 개수 (기본값 무제한)
  + parts : multipart 형식 폼에서 최대 파트(필드 + 파일) 개수 (기본값 무제한)
  + headerPairs : multipart 형식 폼에서 파싱할 헤더의 key => value 쌍의 최대 개수 (기본값 2000)
+ preserverPath : 파일의 base name 대신 보존할 파일의 전체 경로


---
#### 4) 파일 업로드
> 4-1) 단일 파일 업로드
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
+ /upload 에 단일 파일 업로드 요청이 들어올 경우, upload.single 함수가 실행되어 업로드가 진행된다.
+ upload.single 은 인수로 file input 의 name 을 받는다.
``` javascript
{
  fieldname: 'profile',
  originalname: '4YDYWEL.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'C:\\Users\\black\\Documents\\develope\\server\\public\\products',      
  filename: '4YDYWEL.jpg',
  path: 'C:\\Users\\black\\Documents\\develope\\server\\public\\products\\4YDYWEL.jpg',
  size: 11140
} 
```
+ file input 으로부터 받은 파일 정보는 req.file 에 저장된다.


---
> 4-2) 여러 파일 업로드
``` html
<form action="http://localhost:8081/uploads" method="post" encType="multipart/form-data">
  <input type="text" name="category" />
  <input type="file" name="profiles" multiple/>
  <button type="submit">upload</button>
</form>
```
+ 여러 파일을 받기 위해 multiple 설정을 해준다.
``` javascript
app.post('/uploads', upload.array('profiles'), (req, res, next) => {
  console.log(req.files);
  res.send('upload success');
});
```
+ /uploads 에 여러 파일 업로드 요청이 들어올 경우, upload.array 함수가 실행되어 업로드가 진행된다.
+ upload.array 는 인수로 file input 의 name 을 받는다.
``` javascript
 [
  {
    fieldname: 'profiles',
    originalname: '4YDYWEL.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'C:\\Users\\black\\Documents\\develope\\server\\public\\products',
    filename: '4YDYWEL.jpg',
    path: 'C:\\Users\\black\\Documents\\develope\\server\\public\\products\\4YDYWEL.jpg',
    size: 11140
  },
  {
    fieldname: 'profiles',
    originalname: 'DBhxaXb.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'C:\\Users\\black\\Documents\\develope\\server\\public\\products',
    filename: 'DBhxaXb.jpg',
    path: 'C:\\Users\\black\\Documents\\develope\\server\\public\\products\\DBhxaXb.jpg',
    size: 204881
  }
] 
```
+ 여러 파일의 경우 req.files 에 배열 형태로 저장된다.


---
> 4-3) 복합 처리
``` html
<form action="http://localhost:8081/cool-upload" method="post" encType="multipart/form-data">
  <input type="text" name="category" />
  <input type="file" name="profile" />
  <input type="file" name="profiles" multiple/>
  <button type="submit">upload</button>
</form>
```
+ 단일, 복수 파일을 받는 file input 을 설정한다.

``` javascript
const cbUpload = upload.fields([
  { name: "profile", maxCount: 1 },
  { name: "profiles", maxCount: 3 },
]);
app.post('/cool-upload', cbUpload, (req, res, next) => {
   console.log(req.files);
  res.send("upload success");
});
```
+ /cool-upload 에 파일 업로드 요청이 들어올 경우 upload.fields 함수가 실행된다.
+ upload.fields 함수의 인자는 file input 의 파일 객체가 배열 형태로 담긴다.
+ 만약 업로드된 파일의 수가 maxCount 가 넘을 경우 error 가 발생한다.


### Error handling
``` javascript
const upload = multer().single('profile');

app.post('/profile', (req, res, next) => {
   upload(req, res, (error) => {
      if(error){
         // 업로드할 때 오류가 발생할 경우의 처리
        return;
      }
     // 정상적인 처리
   });
});
```
