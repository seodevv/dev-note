# String Property
### String.length
```
const str = 'Hello';
console.log(str.length); // 5
```


# String Method
### String.prototype.charAt ( number ) : string
+ 인자로 전달한 index 를 사용하여 index 에 해당하는 문자를 반환한다.
+ 인자가 문자열의 길이를 벗어난 경우 빈 문자열을 반환한다.
``` javascript
const str = 'Hello';
console.log(str.charAt(0)); // H
console.log(str.charAt(5)); // ''

// String 객체는 유사 배열 객체이므로 배열과 유사하게 접근할 수 있다.
console.log(str[0]); // H
console.log(str[5]); // undefined
```


### String.toString() : string
+ String 인스턴스의 값을 문자열로 반환한다.
``` javascript
const str = 'Hello World';

const toString = str.toString();
console.log(toString); // Hello World
```


### String.valueOf() : string
+ String 인스턴스의 값을 문자열로 반환한다.
``` javascript
const str = 'Hello World';

const valueOf = str.valueOf();
console.log(valueOf); // Hello World
```


### String.prototype.indexOf(searchstring [,fromIndex]) : number
+ 인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 index 값을 반환한다.
+ 2번째 인수가 전달되면 검색 시작 위치를 fromindex 로 이동하여 검색한다.
+ 문자가 없을 경우 -1 값을 반환한다.
``` javascript
const str = 'Hello World';
console.log(str.indexOf('l')); // 2
console.log(str.indexOf('l',5)); // 9
console.log(str.indexOf('a')); // -1
```


### String.prototype.lastIndexOf(searchString [, fromIndex]) : number
+ 인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 마지막으로 발견된 index 값을 반환한다.
+ 2번쨰 인수가 전달되면 검색 시작 위치를 fromindex 로 이동하여 역방으로 검색한다.
+ 문자가 없을 경우 -1 값을 반환한다.
``` javascript
const str = 'Hello World';
console.log(str.lastIndexOf('l')); // 9
console.log(str.lastIndexOf('l',5)); // 3
console.log(str.lastIndexOf('a')); // -1
```


### String.prototype.search(searchString) : number
+ 문자 혹은 정규표현식에 부합하는 맨 처음 index 값을 반환한다.
``` javascript
const str = 'Hello World';

const search1 = str.search(/\s/);
const search2 = str.search(' ');
console.log(search1); // 5
console.log(search2); // 5
```


### String.prototype.replace(searchValue, replaceValue) : string
+ 첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다.
+ 원본 문자열은 변경되지 않고, 결과가 반영된 새로운 문자열을 반환한다.
+ 검색된 문자열이 여럿 존재할 경우 첫번쨰로 검색된 문자열만 대체된다.
  + searchValue : 문자 or 정규표현식
  + replaceValue : 문자 or 콜백함수 (searchValue 를 인자로 받아 리턴 값으로 대체)
``` javascript
const str = 'HeLlo World';

const replace = str.replace('World', 'JavaScript');
const expression = str.replace(/l/gi, '-');
const callback = str.replace('World', () => 'React');
console.log(replace); // HeLlo JavaScript
console.log(expression); // He--o Wor-d
console.log(callback); // HeLlo React
```


### String.prototype.split(separator [, limit]) : string[]
+ 첫번쨰 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후
+ 분리된 문자열로 이루어진 배열을 반환한다.
+ 두번째 인수가 전달되면 해당하는 인수만큼 배열 길이를 반환한다.
+ 원본 문자열은 변경되지 않는다.
+ 인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
``` javascript
const str = 'Hello World';

const split1 = str.split(' ');
const split2 = str.split(' ',1);
const split3 = str.split(/l/);
const split4 = str.split();
console.log(split1); // ['Hello', 'Wrold']
console.log(split2); // ['Hello']
console.log(split3); // ['He', '', 'o Wor', 'd']
console.log(split4); // ['Hello World']
```


### String.prototype.substring(start, end) : string
+ 첫번째 인수로 전달한 start 인덱스에 해당하는 문자부터 
+ 두번째 인수에 전달된 end 인덱스 - 1 에 해당하는 문자까지 모두 반환한다.
+ 두번쨰 인수가 없을 경우 문자열 끝까지 반환한다.
``` javascript
const str = 'Hello World';

const subString = str.substring(0, 4);
console.log(subString); // Hell
```


### String.prototype.slice(start, end) : string
+ String.prototype.substring 과 동일하다.
+ slice 는 단 음수의 인수를 전달할 수 있다.
``` javascript
const str = 'Hello World';

const slice1 = str.slice(0,4);
const slice2 = str.slice(0,-1);
console.log(slice1); // Hell
console.log(slice2); // Hello Worl
```


### String.prototype.toLowerCase() : string
+ 대상 문자열의 모든 문자를 소문자로 치환한다.
``` javascript
const str = 'HELLO WORLD';

const toLowerCase = str.toLowerCase();
console.log(toLowerCase); // hello world
```


### String.prototype.toUpperCase() : string
+ 대상 문자열의 모든 문자를 대문자로 치환한다.
``` javascript
const str = 'hello world';

const toUpperCase = str.toUppderCase();
console.log(toUpperCase) // HELLO WORLD
```


### String.prototype.trim() : string
+ 대상 문자열 양 끝의 공백 문자를 제거한 문자를 반환한다.
``` javascript
const str = '        hello world     ';

const trim = str.trim();
const trimStart = str.trimStart();
const trimEnd = str.trimEnd();
console.log(trim) // 'hello world'
console.log(trimStart); // 'hello world     
console.log(trimEnd); // '        hello world'
```


### String.prototype.repeat(count) : string
+ 인수로 전달한 숫자만큼 문자열을 반복하여 새로운 문자열을 반환한다.
``` javascript
const str = 'Hello World';

const repeat1 = str.repeat(0);
const repeat2 = str.repeat(2);
const repeat3 = str.repeat(2.5); // 2.5 -> 2 치환
const repeat4 = str.repeat(-1); // RangeError
console.log(repeat1); // ''
console.log(repeat2); // 'Hello WorldHello World'
console.log(repeat3); // 'Hello WorldHello World'
// console.log(repeat4);
```


### String.prototype.includes(searchString [, position]) : boolean
+ 인수로 전달한 문자열이 포함되어 있는지를 검사하고 결과를 boolean 값으로 반환한다.
+ 두번째 인수는 옵션으로 검색할 위치를 나타낸다.
``` javascript
const str = 'Hello World';

const includes1 = str.includes('Hello');
const includes2 = str.includes('Hello', 0);
const includes3 = str.includes('Hello', 2);
console.log(includes1); // true
console.log(includes2); // true
console.log(includes3); // false
```


### String.prototype.padStart(targetLength [, padString])
+ 첫번째 인수로 전체 스트링 길이를 지정하고, 
+ 만일 현재 문자열의 길이가 인수보다 짧다면, 빈 나머지를 두번째 인수 값으로 채운다.
+ padStart : 좌측부터 채워 넣기
+ padEnd : 우측부터 채워 넣기
``` javascript
const str = 'Hello World';
const length = str.length;

const padStart1 = str.padStart(length);
const padStart2 = str.padStart(length + 3);
const padStart3 = str.padStart(length + 3, '-');
const padStart4 = str.padStart(length - 3);
console.log(padStart1); // 'Hello World'
console.log(padStart2); // '   Hello World'
console.log(padStart3); // '---Hello World'
console.log(padStart4); // 'Hello World'
const padEnd1 = str.padEnd(length);
const padEnd2 = str.padEnd(length + 3);
const padEnd3 = str.padEnd(length + 3, '-');
const padEnd4 = str.padEnd(length - 3);
console.log(padEnd1); // 'Hello World'
console.log(padEnd2); // 'Hello World   '
console.log(padEnd3); // 'Hello World---'
console.log(padEnd4); // 'Hello World'
```


### String.prototype.concat(...string) : string
+ 인수로 전달 된 문자열이 뒤에 합쳐진 값을 반환한다.
+ 인수는 여러개가 될 수 있다.
``` javascript
const start = 'Hello';
const trim = ' ';
const end = 'World';

const concat = start.concat(trim, end);
console.log(concat); // Hello World
```


### String.prototype.startsWith(searchString, [, position]) : boolean
### String.prototype.endsWith(searchString, [, endPosition]) : boolean
+ startsWith : 인수로 전달 받은 문자나 문자열로 시작하는 지를 검사하고 결과를 boolean 값으로 반환한다.
+ endsWith : 인수로 전달 받은 문자나 문자열로 끝나는 지를 검사하고 결과를 boolean 값으로 반환한다.
+ position : 두번째 인자가 전달되면 탐색 시작 위치를 지정할 수 있다.
+ endPosition : 해당 인수만큼의 문자열 길이에서 검사한다.
``` javascript
const str = 'Hello World';

const startsWith1 = str.startsWith('Hello');
const startsWith2 = str.startsWith('Hello' , 1);
const startsWith3 = str.startsWith('World' , 6);
console.log(startsWith1); // true
console.log(startsWith2); // false
console.log(startsWith3); // true
const endsWith1 = str.endsWith('World');
const endsWith2 = str.endsWith('World', 1);
const endsWith3 = str.endsWith('Hello', 5);
console.log(endsWith1); // true
console.log(endsWith2); // false
console.log(endsWith3); // true
```


### String.localeCompare(that) : number
+ 인수로 전달받은 문자열과 정렬 순서를 비교하여 그 결과를 정수 값으로 반환한다.
``` javascript
const str = 'Hello World B';

const localeCompare1 = str.localeCompare('Hello World A');
const localeCompare2 = str.localeCompare('Hello World B');
const localeCompare3 = str.localeCompare('Hello World C');
console.log(localeCompare1); // 1
console.log(localeCompare2); // 0
console.log(localeCompare3); // -1
```
