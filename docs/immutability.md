---
title: 불변성
---

# 불변성

아래 자바스크립트 코드의 결과를 예상할 수 있나요?

```js
var n1 = 1;
var n2 = 1;
console.log(n1 === n2);
// true입니다. 당연합니다.
```

```js
var o1 = {name:'kim'}
var o2 = {name:'kim'}
console.log(o1 === o2);
// false 입니다. 조금 애매하죠. JavaScript는 값이 바뀌지 않는 원시 데이터 타입과 값이 바뀔 수 있는 객체를 다르게 취급합니다.
```


```js
var o1 = {name:'kim'}
var o2 = o1;
o2.name = 'lee';
console.log(o1.name);
// lee 입니다. o1은 영문도 모르고 자신이 가르키고 있는 name의 값이 바뀌어 버렸습니다.
```

```js
var o1 = {name:'kim'}
var o2 = Object.assign({}, o1); // 빈 객체에 o1을 복사합니다.
o2.name = 'lee';
console.log(o1.name);
// kim입니다. o2를 변경해도 o1이 영향을 받지 않습니다. o2에 대해서 o1은 불변한 상태를 유지할 수 있게 됩니다.
```

```js
var o1 = {score:[1,2]}
var o2 = Object.assign({}, o1);
o2.score.push(3);
console.log(o1.score)
// [1,2,3] 입니다. 영문도 모르고 o1이 또 바뀌었습니다. score는 객체의 일종인 배열이기 때문입니다.
```

```js
var o1 = {score:[1,2]}
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat(); // 배열을 복사합니다.
o2.score.push(3);
console.log(o1.score)
// [1,2] 입니다.
```

다른 방법도 있습니다. 몽땅 다 복사를 하는 것입니다.

```js
var o1 = {score:[1,2]}
var o2 = JSON.parse(JSON.stringify(o1));
o2.score.push(3);
console.log(o1.score)
// [1,2] 입니다.
```

원본이 바뀌지 않게 조심하는 것도 좋지만, 원본이 아예 안바뀌게 하는 것도 가능합니다.

```js
var o1 = {name:'kim'}
Object.freeze(o1);
o1.name = 'lee';
console.log(o1.name);
// 'kim' 입니다.
```

하지만 객체는 이게 안됩니다.
```js
var o1 = {score:[1,2]}
Object.freeze(o1);
o1.score.push(3);
console.log(o1.score);
// [1,2,3] 입니다.
```

방어적으로 냉동을 해야 합니다.
```js
var o1 = {score:[1,2]}
Object.freeze(o1);
Object.freeze(o1.score);
o1.score.push(3);
console.log(o1.score);
// 변경이 안됩니다. 심지어 항의성 에러를 발생시켜버립니다.
```

