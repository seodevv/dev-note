# scroll

## references
+ https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
+ https://ko.javascript.info/size-and-scroll

## getBoundingClientRect()
+ viewport 를 기준으로 해당 element 의 좌표를 구할 수 있음.
<img src="./img/element-box-diagram.png" alt="getBoundingClientRect" width="600px"/>

### html
``` html
<div id="target"></div>
```
### usage
``` javascript
const target = document.querySelector('#target');
console.log(target.getBoundingClientRect());
```
> result
```
DOMRect {
    "x": 379.09088134765625,
    "y": 160.1988525390625,
    "width": 300,
    "height": 561.9033813476562,
    "top": 160.1988525390625,
    "right": 679.0908813476562,
    "bottom": 722.1022338867188,
    "left": 379.09088134765625
}
```
