---
title: Immutable
---

# Immutable

## Data type

Javascript의 자료형은 크게 Primitive 형과 Object 형으로 나눌 수 있습니다. 

| *Primitive*    | *Object*       | 
| :------------: | :------------: |
| Number         | Object         |
| String         | Array          |
| Boolean        | Function       |
| Null           |                |
| Undefined      |                |
| Symbol         |                |


## 단순비교

*아래 자바스크립트 코드의 결과를 예상해보세요.*

Primitive variable의 비교

```js
var n1 = 1;
var n2 = 1;
console.log(n1 === n2);
// true입니다. primitive는 value를 비교
```


Object variable의 비교

```js
var o1 = { name:'kim' }
var o2 = { name:'kim' }
console.log(o1 === o2);
// false 입니다. object는 reference를 비교
```


object variable의 할당 후 변경

```js
var o1 = { name:'kim' }
var o2 = o1;
o2.name = 'lee';
console.log(o1.name, o2.name);
// lee lee 입니다. o1와 o2는 같은 reference값을 가지기 때문에 o1, o2 둘다 변합니다.
```


object variable값이 변하지 않도록 조심하기

```js
var o1 = { name:'kim' }
var o2 = Object.assign({}, o1); // Object.assign은 빈 객체에 o1을 추가하고 리턴합니다.
o2.name = 'lee';
console.log(o1.name, o2.name);
// kim lee 입니다. o2를 위한 memory가 새로 생성하고 o1을 추가했습니다. 공간이 다르기 때문에 o2를 수정해도 o1은 영향 받지 않습니다.
```


object안에 들어있는 또 다른 object (array)가 들어있는 경우에는요?

```js
var o1 = { score:[1,2] }
var o2 = Object.assign({}, o1);
o2.score.push(3);
console.log(o1.score, o2.score);
// [1,2,3] 입니다. o2를 위해서 memory를 새로 생성했지만 o1.score에 대한 reference가 같기 때문에 o2.score를 변경하면 01.score도 바뀝니다.
```


object안에 들어있는 또 다른 object (array)의 값이 변하지 않도록 방지하기

```js
var o1 = { score:[1,2] }
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat(); // concat은 새로운 배열을 생성하여 리턴합니다.
o2.score.push(3); // push는 기존 배열에 추가합니다.
console.log(o1.score, o2.score);
// [1, 2] [1, 2, 3] 입니다.
```


다른 방법도 있습니다. 몽땅 다 복사 (deep copy)를 하는 것입니다.

```js
var o1 = { score:[1,2] }
var o2 = JSON.parse(JSON.stringify(o1));
o2.score.push(3);
console.log(o1.score, o2.score)
// [1, 2] [1, 2, 3] 입니다.
```


원본이 바뀌지 않게 조심하는 것도 좋지만, 원본이 아예 안바뀌게 하는 것도 가능합니다.

```js
var o1 = { name:'kim' }
Object.freeze(o1);
o1.name = 'lee'; // 무시됩니다.
console.log(o1.name);
// 'kim' 입니다.
```


하지만 object안에 들어있는 또 다른 object (array)의 경우 이게 안됩니다.

```js
var o1 = { score:[1,2] }
Object.freeze(o1);
o1.score.push(3);
console.log(o1.score);
// [1,2,3] 입니다.
```


score도 object (array)이기때문에 방어적으로 얼려야 합니다.

```js
var o1 = { score:[1,2] }
Object.freeze(o1);
Object.freeze(o1.score);
o1.score.push(3); // 변경이 안됩니다. 심지어 항의성 에러를 발생시켜버립니다.
console.log(o1.score);
```


## 응용


다음 2가지를 비교해 봅시다.

```js
var score = [1, 2, 3];
var a = score;
var b = score;
score.push(4);
var score2 = score.concat(5);
console.log(score, score2, a, b);
// [1, 2, 3, 4] [1, 2, 3, 4, 5] [1, 2, 3, 4] [1, 2, 3, 4]
```


```js
var score = [1, 2, 3];
var a = score;
var b = score;
var score2 = score.concat(4);
console.log(score, score2, a, b);
// [1, 2, 3] [1, 2, 3, 4] [1, 2, 3] [1, 2, 3]
```

----
또 다음 2가지를 비교해 봅시다.

```js
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim
```


```js
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim
```


## const vs Object.freeze


```js
const o1 = { name:'kim' }
Object.freeze(o1);
const o2 = { name:'lee' }
// o1 = o2; // (const와 관련) Assignment to constant variable.
o1.name = 'park'; // (Object.freeze와 관련) 무시됨
console.log(o1, o2);
// {name:'kim'}
```


## call by reference

```js
function mutate(obj) {
  obj.a = true;
}

const obj = {a: false};
mutate(obj)
console.log(obj.a); // prints true
```

## call by value

```js
function mutate(str) {
  str = 'world';
}

const str = 'hello';
mutate(str)
console.log(str); // hello 
```



## 참조
* [생활코딩 - JavaScript Immutability](https://www.opentutorials.org/module/4075)
* [Javascript의 Immutability](http://blog.naver.com/wj8606/221209820504)
* [객체와 변경불가성(Immutability)](https://poiemaweb.com/js-immutability)
* [Deep-copying in JavaScript](https://dassur.ma/things/deep-copy/)
