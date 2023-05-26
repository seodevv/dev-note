// String Property
const str = 'Hello';
console.log(str.length); // 5


// String Method
String.prototype.charAt(number) : string
// 인자로 전달한 index 를 사용하여 index 에 해당하는 문자를 반환한다.
// 인자가 문자열의 길이를 벗어난 경우 빈 문자열을 반환한다.
const str = 'Hello';
console.log(str.charAt(0)); // H
console.log(str.charAt(5)); // ''
// String 객체는 유사 배열 객체이므로 배열과 유사하게 접근할 수 있다.
console.log(str[0]); // H
console.log(str[5]); // undefined


String.prototype.indexOf(searchstring, [fromIndex]) : number
// 인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 index 값을 반환한다.
// 2번째 인수가 전달되면 검색 시작 위치를 fromindex 로 이동하여 검색한다.
// 문자가 없을 경우 -1 값을 반환한다.
const str = 'Hello World';
console.log(str.indexOf('l')); // 2
console.log(str.indexOf('l',5)); // 9
console.log(str.indexOf('a')); // -1


String.prototype.lastIndexOf(searchString, [fromIndex]) : number
// 인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 마지막으로 발견된 index 값을 반환한다.
// 2번쨰 인수가 전달되면 검색 시작 위치를 fromindex 로 이동하여 역방으로 검색한다.
// 문자가 없을 경우 -1 값을 반환한다.
const str = 'Hello World';
console.log(str.lastIndexOf('l')); // 9
console.log(str.lastIndexOf('l',5)); // 3
console.log(str.lastIndexOf('a')); // -1


String.prototype.replace(searchValue, replaceValue) : string
// 첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다.
// 원본 문자열은 변경되지 않고, 결과가 반영된 새로운 문자열을 반환한다.
// 검색된 문자열이 여럿 존재할 경우 첫번쨰로 검색된 문자열만 대체된다.
// searchValue : 문자 or 정규표현식
// replaceValue : 문자 or 콜백함수 (searchValue 를 인자로 받아 리턴 값으로 대체)
const str = 'HeLlo World';

const replace = str.replace('World', 'JavaScript');
const expression = str.replace(/l/gi, '-');
const callback = str.replace('World', () => 'React');

console.log(replace); // HeLlo JavaScript
console.log(expression); // He--o Wor-d
console.log(callback); // HeLlo React


String.prototype.split(separator, [limit]) : string[]
// 첫번쨰 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후
// 분리된 문자열로 이루어진 배열을 반환한다.
// 두번째 인수가 전달되면 해당하는 인수만큼 배열 길이를 반환한다.
// 원본 문자열은 변경되지 않는다.
// 인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
const str = 'Hello World';

const split1 = str.split(' ');
const split2 = str.split(' ',1);
const split3 = str.split(/l/);
const split4 = str.split();

console.log(split1); // ['Hello', 'Wrold']
console.log(split2); // ['Hello']
console.log(split3); // ['He', '', 'o Wor', 'd']
console.log(split4); // ['Hello World']


String.prototype.substring(start, end) : string
// 첫번째 인수로 전달한 start 인덱스에 해당하는 문자부터 
// 두번째 인수에 전달된 end 인덱스 - 1 에 해당하는 문자까지 모두 반환한다.
// 두번쨰 인수가 없을 경우 문자열 끝까지 반환한다.
const str = 'Hello World';

const subString = str.substring(0, 4);

console.log(subString); // Hell


String.prototype.slice(start, end) : string
// String.prototype.substring 과 동일하다.
// slice 는 단 음수의 인수를 전달할 수 있다.
const str = 'Hello World';

const slice1 = str.slice(0,4);
const slice2 = str.slice(0,-1);

console.log(slice1); // Hell
console.log(slice2); // Hello Worl


String.prototype.toLowerCase() : string
// 대상 문자열의 모든 문자를 소문자로 치환한다.
const str = 'HELLO WORLD';

const toLowerCase = str.toLowerCase();

console.log(toLowerCase); // hello world

String
