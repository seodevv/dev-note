# multer

### install
``` javascript
npm i -D multer
```
---

### Usage
``` html
<form action="http://localhost:8081/image/upload" method="post" encType="multipart/form-data">
  <input type="text" name="category" />
  <input type="file" name="profile" />
  <button type="submit">upload</button>
</form>
```
+ 단일 파일을 업로드하는 form 을 만든다.
+ 이 때, form 의 encType은 multipart/form-data 로 설정해준다.
---


``` javascript
const express = require('express');
const app = express();

const multer = require('multer');
```
+ multer 패키지를 import 한다.


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
  + destination : 파일을 저장할 위치
  + filename : 저장할 파일명


``` javascript
const upload = multer({
  storage: storage, // 파일이 저장될 위치
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
