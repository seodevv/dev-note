# public
+ static 폴더를 설정한다.
+ build 를 하여도 static 파일들은 설정한 경로에 그대로 남는다.

## set middleware
+ 미들웨어로 static 경로를 설정한다.
``` javascript
app.use(express.static("public"));
```

## usage
> directory setting
```
└ /public
  └ /css
    └ /index.css
  └ /js
    └ /index.js
  └ /image
    └ /profile.png
```

+ 다음과 같이 정적인 파일을 사용하면 된다.
> index.ejs
``` html
<head>
    <link rel="stylesheet" href="/css/index.css">
</head>

<body>
    <img src="/image/profile.png" alt="profile">
    <script src="/js/index.js"><script>
</body>
```
