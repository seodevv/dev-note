# multer

### install
``` javascript
npm i -D multer
```

### usage
``` html
<form action="http://localhost:8081/image/upload" method="post" encType="multipart/form-data">
  <input type="text" name="title" />
  <input type="file" name="profile" />
  <button type="submit">upload</button>
</form>
```


``` javascript
const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file) // req.file 은 `avatar` 라는 필드의 파일 정보입니다.
  console.log(req.body) // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files 는 `photos` 라는 파일정보를 배열로 가지고 있습니다.
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files는 (String -> Array) 형태의 객체 입니다.
  // 필드명은 객체의 key에, 파일 정보는 배열로 value에 저장됩니다.
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
})
