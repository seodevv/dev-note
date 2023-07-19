# Regular Expression(정규표현식)

## syntax
| 표현식 | 의미 |
|:---:|:------------------------------|
| ^x | 문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다. |
| x$ | 문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다. |
| .x | 임의의 한 문자의 자리수를 표현하며 문자열이 x 로 끝난다는 것을 의미한다. |
| x+ | 반복을 표현하며 x 문자가 한번 이상 반복됨을 의미한다. |
| x? | 존재여부를 표현하며 x 문자가 존재할 수도, 존재하지 않을 수도 있음을 의미한다. |
| x* | 반복여부를 표현하며 x 문자가 0번 또는 그 이상 반복됨을 의미한다. |
| x\|y | or 를 표현하며 x 또는 y 문자가 존재함을 의미한다. |
| (x) | 그룹을 표현하며 x 를 그룹으로 처리함을 의미한다. |
| (x)(y) | 그룹들의 집합을 표현하며 앞에서 부터 순서대로 번호를 부여하여 관리하고 x, y 는 각 그룹의 데이터로 관리된다. |
| (x)(?:y) | 그룹들의 집합에 대한 예외를 표현하며 그룹 집합으로 관리되지 않음을 의미한다. |
| x{n} | 반복을 표현하며 x 문자가 n번 반복됨을 의미한다. |
| x{n,} | 반복을 표현하며 x 문자가 n번 이상 반복됨을 의미한다. |
| x{n,m} | 반복을 표현하며 x 문자가 최소 n번 이상 최대 m 번 이하로 반복됨을 의미한다. |

| 표현식 | 의미 |
|:---:|:------------------------------|
| [xy] | 문자 선택을 표현하며 x 와 y 중에 하나를 의미한다. |
| [^xy] | not 을 표현하며  x 및 y 를 제외한 문자를 의미한다. |
| [x-z] | range를 표현하며 x ~ z 사이의 문자를 의미한다. | 
| \\^ | escape 를 표현하며 ^ 를 문자로 사용함을 의미한다. |
| \b | word boundary를 표현하며 문자와 공백사이의 문자를 의미한다. |
| \B | non word boundary를 표현하며 문자와 공백사이가 아닌 문자를 의미한다. |
| \d | digit 를 표현하며 숫자를 의미한다. | 
| \D | non digit 를 표현하며 숫자가 아닌 것을 의미한다. | 
| \s | space 를 표현하며 공백 문자를 의미한다. | 
| \S | non space를 표현하며 공백 문자가 아닌 것을 의미한다. |
| \t | tab 을 표현하며 탭 문자를 의미한다. |
| \v | vertical tab을 표현하며 수직 탭(?) 문자를 의미한다. |
| \w | word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다. | 
| \W | non word를 표현하며 알파벳 + 숫자 + _ 가 아닌 문자를 의미한다. | 


| Flag | 의미 |
|:---:|:------------------------------|
| g | Global 의 표현하며 대상 문자열내에 모든 패턴들을 검색하는 것을 의미한다. |
| i | Ignore case 를 표현하며 대상 문자열에 대해서 대/소문자를 식별하지 않는 것을 의미한다. |
| m | Multi line을 표현하며 대상 문자열이 다중 라인의 문자열인 경우에도 검색하는 것을 의미한다. |

 
### Email
``` javascript
const regex = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
```
* 첫 글자 알파벳, 하이픈, 언더바, 마침표 허용

### phone / smart phone number
``` javascript
const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
const cellularPhoneRegex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
```


### Password
``` javascript
// 최소 8 자, 최소 하나의 문자 및 하나의 숫자
const regex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ ;

// 최소 8 자, 대문자 하나 이상, 소문자 하나 및 숫자 하나
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// 최소 8 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

// 최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
```

### URL
``` javascript
// http, https 반드시 포함
const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/

//http(s) 프로토콜은 있으나 없으나 상관없음
const regex = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
```

### Youtube
``` javascript
// Youtube Video ID 추출
const regex = /(?:http:|https:)?(?:\/\/)?(?:www\.)?(?:youtube.com|youtu.be)\/(?:watch|embed)?(?:\?v=|\/)?(\S+)?/;
'https://www.youtube.com/watch?v=aNmPFdXf7is&ab_channel=MBCNEWS'.match(regex)
// ['https://www.youtube.com/watch?v=aNmPFdXf7is&ab_channel=MBCNEWS', 'aNmPFdXf7is&ab_channel=MBCNEWS', index: 0, input: 'https://www.youtube.com/watch?v=aNmPFdXf7is&ab_channel=MBCNEWS', groups: undefined]
```


#### source
+ https://digitalfortress.tech/tips/top-15-commonly-used-regex/
