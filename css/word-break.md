# word-break
+ 문자열의 줄바꿈을 설정해준다.
+ 줄바꿈은 공백(띄어쓰기) 혹은 하이픈(hyphen) 사용 시 줄바꿈이 시행되지만, CJK(중국, 일본, 한국)의 언어에서는 '음절'에 따라 줄바꿈이 시행된다.

## attribute
|attribute|desc|
|----|--------------|
| normal(default) | 기존 줄바꿈 규칙으로 사용한다. |
| break-all | overflow 를 방지하려면 두 문자 사이의 단어 분리를 삽입해야 한다. CJK 는 제외된다. |
| keep-all | CJK 에서는 단어 분리를 사용하면 안된다. Non-CJK 는 normal 과 동일하다. |
| break-word | overflow-wrap 속성의 실제 값에 관계 없이 word-break: normal 과 결합된 overflow-wrap: where 와 동일한 효과가 있다. |
