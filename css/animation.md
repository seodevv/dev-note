# Animation
+ javascript 보다 css animation 이 성능 측면에서 좋다.
+ browser 가 보이지 않는 element 의 animation 은 업데이트 주기를 줄여 부하를 줄여준다.

# syntax
|attribute|:desc:|
|:---:|:------------|
| animation-name | 애니메이션의 중간 상태를 지정하기 위한 이름을 정의합니다. 중간 상태는 @keyframes 규칙을 이용하여 기술합니다. |
| animation-duration | 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다. |
| animation-delay | 엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다. |
| animation-direction | 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다. |
| animation-iteration-count | 애니메이션이 몇 번 반복될지 지정합니다. infinite 로 지정하여 무한히 반복할 수 있습니다. |
| animation-play-state | 애니메이션을 멈추거나 다시 시작할 수 있습니다. |
| animation-timing-function | 중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다. |
| animation-fill-mode | 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다. |
