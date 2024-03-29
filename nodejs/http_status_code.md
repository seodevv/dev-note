# 상태코드 (status code)
+ 개발자 도구를 열고 [network] 탭을 열고 파일을 클릭해보면 [header]-[general] 옵션 아래에서 status code를 볼수 있다.
+ HTTP 통신을 하게 되면 응답 상태를 나타내는 코드로 100~500번때의 번호를 갖고 있다. 그! 번호! 에 대해 정리해보자.


## 1xx ~ 5xx
+ 위 설명과 같이 코드는 100~500번때의 3자리수로 이루어져 있다. 500이 끝이 아니고 그 다른 숫자가 붙는다. 502, 503과 같이!
+ 3자리 수 중 첫번째 자리는 응답의 종류를 나타낸다.

| code | content |
|:---:|:-----------------------|
| 1xx | Infomational(정보제공), 임시응답, 현재 클라이언트 요청까지 잘처리됨. keep going! 계속하시오! (본 기억이 없다..) |
| 2xx | Success(성공), 클라이언트 요청에 대한 서버처리가 성공적! |
| 3xx | Redirection(리다이렉션), 완전한 처리를 위해 추가적인 동작이 필요한 경우. 주로 서버의 주소, 또는 uri의 웹 문서가 이동되었으니 그 주소로 다시 시도해 보라는 의미! |
| 4xx | ClientError(클라이언트에러), 없는 페이지 요정, 클라이언트(or 프론트엔드)에서 요청이 잘못된 경우! |
| 5xx | ServerError(서버에러), 서버 측 문제, 백엔드가 가장 싫어하는 에러, 서버의 부하, DB처리오류, 서버의 예외처리 발생하는 경우 |
+ 대략 2xx번, 4xx번, 5xx번을 자주 보게 되며, uri 잘못된경우 3xx번을 볼수 있다!

### 자주보는 상태코드
| code | content |
|:---:|:-----------------------|
| 200 OK | 성공, 서버가 요청을 성공적으로 처리 |
| 201 created | 생성됨, 요청이 처리되어 새로운 리소스가 생성됨. 응답헤더 Location에 새로운 시소스의 절대 uri를 기록한다. |
| 202 accepted | 허용됨, 요청만 접수완료, 처리는 미완료! 클라이언트는 응답헤더의 Location, Retry-After를 참고하여 다시 요청을 보내자! |
| 301 moved permanently | 영구이동, 지정한 리소스가 새로운 uri로 이동했다. endpint 에 마지막 '/' 확인 |
| 303 see other | 다른위치보기 : 다른위치로 요청하라. POST 를 처리하고 그 결과를 화면으로 리다이렉트 시킬때 자주 사용되는 응답코드. |
| 307 temporary redirect | 임시 리다이렉션, 요청한 uri가 없음, 클라이언트는 메소드를 그대로 유지한채 응답해더 Location에 표시된 다른 uri로 요청을 재송신하라. 302의 업글버전 상태코드 |
| 400 bad request | 잘못된 요청, 요청구문이 잘못됨. 클라이언트에서는 요청이 잘된건지 다시 확인하기! |
| 401 Unauthorized | 권한없음, 응답해더 WWW-Authenticate에 필요한 인증방식을 지정.. 엑세스 토큰 잘 보냈는지 확인하기, |
| 403 forbidden | 금지됨, 엑세스 금지됨. 있긴하지만 안보여줄꺼임! |
| 404 not found | 찾을수 없음, 있는 정보이지만 존재조차 하지 않는것 처럼 하고싶을때 403 대신 404를 사용하기도 함. 암튼 없는거 요청했다. 
| 500 internet server error | 내부 서버 오류 |
| 502 bad gateway | 불량 게이트웨이, 서버가 그 뒷단 서버로 부터 잘못된 응답을 받았을때. 
| 503 service unavailable | 서비스 제공 불가, 현재 서비스 제공할 수 없음. 서버과부하, 서비스점검 등 일시적인 상태 |

#### source
+ https://velog.io/@hwang-eunji/%EC%83%81%ED%83%9C%EC%BD%94%EB%93%9C-status-code-%EC%A0%95%EB%A6%AC
