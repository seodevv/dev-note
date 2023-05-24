# 미들웨어 설정
app.use(express.static("public"));

# 디렉토리가 다음과 같이 구성
/public/css/index.css
/public/js/index.js
/public/image/profile.png

# index.ejs
<head>
    <link rel="stylesheet" href="/css/index.css">
</head>

<body>
    <img src="/image/profile.png" alt="profile">
    <script src="/js/index.js"><script>
</body>
