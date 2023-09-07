# web push
+ Notification, navigator, serviceWorker, web-push API 등을 사용하여 특정 Chrome client 에 push 알림을 보낼 수 있다.


# references
+ https://wonsss.github.io/PWA/web-push-notification/
+ 아주 정리가 잘 되어있다. 작성자 분께 감사드립니다.🙏

# structure
<img src="./img/web-push-protocol.png" alt="web-push-protocol.png"/>

# API
+ Notification : 사용자에게 permission(알람 허용)을 요청하게 해주는 API
  + .permission : 알람 허용 상태를 확인한다.
  + .requestPermission( callback ) : 알람 permission 을 요청한다. callback 을 통해 허용, 차단 여부에 따라 분기가 가능하다.

+ navigator : serviceWorker 를 regist 하여 chrome(viewport) 가 종료되어도 알람을 수신할 수 있도록 해주는 API
  + .serviceWorker.getRegistration().then( callback ) : 
  + .serviceWorker.ready.then( callback ) : 
