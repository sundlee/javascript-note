---
title: 비교
---

# 비교

## '=='와 '==='의 차이

* '==': 값만 같으면 true
* '===': 값과 data type이 같아야 true


string, wrapper object 비교

```js
var str = "abcd";
var str2 = "abcd";
var strObj = new String("abcd"); // wrapper objects 

console.log(str == str2); //true 두 variable 모두 값으로 "abcd"를 가지고 있기 때문에 true
console.log(str === str2); //true 두 variable 모두 값으로 "abcd"를 가지고 type도 같기때문에 true
console.log(str == strObj); //true primitive와 object가 비교하는 경우, object는 toString의 값으로 비교함
console.log(str === strObj); //false type이 달라서 false
```


number/boolean, wrapper object 대한 배교

```js
var num = 1; 
var numObj = new Number(1); // wrapper objects

console.log(num == numObj); // true
console.log(num === numObj); // false

var b = true;
var bObj = new Boolean(true); // wrapper objects

console.log(b == bObj); // true
console.log(b === bObj); // false
```


그런데 Objet타입끼리의 비교는 다음과 같은 결과가 나옵니다.

```js
var strObj = new String("abcd"); 
var strObj2 = new String("abcd");
var strObj3 = strObj;

console.log(strObj == strObj2); // false object끼리는 reference를 비교하기때문에 false
console.log(strObj === strObj2); // false object끼리는 reference를 비교하기때문에 false
console.log(strObj == strObj3); // true 같은 object이기때문에 reference도 같음
console.log(strObj === strObj3); // true 같은 object이기때문에 reference도 같음
```


다른 primitive type끼리 비교시 혹은 object와 한쪽이 string 인 경우에는 string이 아닌 값을 string으로 변경하고 비교합니다.
 
```js
var str = "123"; 
var num = 123;

console.log(str == num); // true num을 string으로 변환한 후 비교합니다.
console.log(str === num); // false

//------------------------------

var str2 = "true";
var b = true;

console.log(str2 == b); // true b를 string으로 변환한 후 비교합니다.
console.log(str2 === b); // false

//------------------------------

var str3 = "obj";
var obj = new Object();
obj.toString = function() { return "obj"; }

console.log(str3 == obj); // true obj.toString의 결과 값으로 비교합니다.
console.log(str3 === obj); // false
```

## Auto-boxing

다음의 실행 결과를 예측해보세요.

```js
var str = "abcd";
console.log(str.substr(1, 2)); //bc
console.log("abcd".substr(1, 2)); // bc
```

Javascript의 Auto-Boxing이 작동하기 때문에 에러가 나지 않고 잘 실행이 됩니다.

Auto-Boxing이 뭐냐하면,
Primitive 타입의 "abcd"에 대해 substr()메소드를 호출하면, 그 순간 new String( "abcd" )와 같은 string wrapper object를 생성하고, 그 생성된 객체의 substr()이 호출하기 때문에 정상적으로 작동하는 것입니다. substr()이 호출되고 난 후에 String 객체는 쓰고난 후에 참조하는 곳이 없기 때문에 얼마의 시간이 지나면 가비지 콜렉터에 의해 사라지게 됩니다.

 
number나 boolean에 대해서도 동작하지만 string과는 달리 literal에 직접 호출하는 것은 에러가 발생합니다.

```js
var num = 123; 
console.log(num.toString()); //123
console.log(123.toString()); //에러

var b = true;
console.log(b.toString()); //true
console.log(true.toString()); //에러
```


이 Auto-Boxing이 작동한다는 사실은 다음을 보면 알 수 있다.

```js
var str = "abcd"; 
str.foo = "foo";
console.log(str.foo); //undefined
//------------------------------
var str2 = new String("abcd");
str2.foo = "foo2";
console.log(str2.foo); //foo2 
```


foo라는 프로퍼티를 set하려고 할때 Auto-Boxing에 의해 임시로 String 객체가 만들어 지고 이 String 객체에 대해 foo가 추가되지만 이후 String객체는 사라져 버려 아래에서 foo라는 프로퍼티를 읽으려고 할때 또 다른 String 객체가 만들고 이 String 객체의 foo를 읽으려고 하는 것이므로 foo라는 프로퍼티가 없기 때문에 undefined가 나오게 됩니다.
반면, String 객체를 직접생성해서 작업한는 경우에는 foo값이 출력되는 것을 볼 수 있습니다.


::: tip
TIP: boxing/unboxing
* 기본자료형을 래퍼클래스로 변경하는 것을 박싱, 그 반대를 언박싱이라고 함
* 자동으로 처리하는 것을 오토박싱(AutoBoxing), 오토언박싱(AutoUnBoxing)이라고 함
:::


## 참조
* [Javascript의 Primitive 타입과 Object 타입](https://m.blog.naver.com/jjoommnn/130153349502)
* [Javascript의 원시 타입](https://vomvoru.github.io/blog/javascript-primitive-type/)
* [래퍼 객체 (Wrapper object)](https://includestdio.tistory.com/26)

