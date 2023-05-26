// String Property
const str = 'Hello';
console.log(str.length); // 5


// String Method
String.prototype.charAt(number)
// 인자로 전달한 index 를 사용하여 index 에 해당하는 문자를 반환한다.
// 인자가 문자열의 길이를 벗어난 경우 빈 문자열을 반환한다.
const str = 'Hello';
console.log(str.charAt(0)); // H
console.log(str.charAt(5)); // ''

// String 객체는 유사 배열 객체이므로 배열과 유사하게 접근할 수 있다.
console.log(str[0]);
console.log(str[5]);
