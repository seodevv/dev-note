# word-break
+ 문자열의 줄바꿈을 설정해준다.
+ 줄바꿈은 공백(띄어쓰기) 혹은 하이픈(hyphen) 사용 시 줄바꿈이 시행되지만, CJK(중국, 일본, 한국)의 언어에서는 '음절'에 따라 줄바꿈이 시행된다.
+ 특수 문자는 적용되지 않는다.

## syntax
``` css
word-break: normal|break-all|keep-all|break-word|initial|inherit;
```

## property
| property | desc |
|----|--------------|
| normal(default) | 기존 줄바꿈 규칙으로 사용한다. |
| break-all | overflow 를 방지하려면 두 문자 사이의 단어 분리를 삽입해야 한다. CJK 는 제외된다. |
| keep-all | CJK 에서는 단어 분리를 사용하면 안된다. Non-CJK 는 normal 과 동일하다. |
| break-word | overflow-wrap 속성의 실제 값에 관계 없이 word-break: normal 과 결합된 overflow-wrap: where 와 동일한 효과가 있다. |

# word-wrap
+ 박스의 가로 영역에 넘친 단어를 분리한다.
+ word-wrap 이 적용되려면 width 값이 지정된 inline, block 요소여야한다.

## syntax
``` css
word-wrap: normal|break-word|initial|inherit;
```

## property
| property | desc |
|----|--------------|
| normal | break point 에서 줄바꿈한다. |
| break-word | 요소의 경계에서 break point 가 아니여도 줄바꿈을 한다. |
| initial | 기본 값으로 설정한다. |
| inherit | 부모 요소의 속성 값을 상속 받는다. |
