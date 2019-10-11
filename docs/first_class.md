---
title: First Class
---

# 1급시민 (first class citizen)

1급객체/2급객체에 대한 개념은 1960년대에 [Christopher Strachey](https://en.wikipedia.org/wiki/Christopher_Strachey)에 의해서 소개되었습니다. (1급객체/2급객체가 '뭐다'라고 명확하게 정의하지는 않았지만 ALGOL언어의 실수(real number)를 예로 들어 언급했었습니다.)

## 1급시민의 조건
* 변수에 할당할 수 있다.
* 함수의 인자로 전달할 수 있다.
* 함수의 반환 값으로 전달할 수 있다.


# 1급객체 (first class object)

```js
var a = { msg: 'a는 1급 객체입니다.' } // 변수에 담을 수 있다.
function f1 (a) { // 매개변수로 전달할 수 있다.
  var b = a
  b.msg2 = '이것은 2번째 메세지입니다.'
  return b  // return으로 전달할 수 있다.
}
console.log(f1(a)) // result : {msg: 'a는 1급 객체입니다.', b: '이것은 2번째 메세지입니다.'}
```


# 1급함수 (first class function)

```js
// 변수에 함수를 할당한다.
var a = function (num) {
  return num * num
}
// 매개변수로 함수를 전달한다.
function b (fun) {
  var num = fun(10)
  // return 값으로 함수를 사용할 수 있다.
  return function (num2) {
    var num2 = num2 || 2
    return num * num2
  }
}
// b에 a라는 함수 전달했으며
// b는 다시 함수를 반환한다.
// 결국 c도 함수로 사용할 수 있다.
var c = b(a)
console.log(c())  // result : 200
console.log(c(3)) // result : 300
```

## closure

```js
var fn = function (){
  var num = 1
  return function () {
    return num++
  }
}
var fn2 = fn() // fn을 실행함과 동시에, fn 속에 있는 num이 만들어진다.
// fn2를 실행할 경우, fn의 num값을 다루게 되며, fn의 num은 소멸되지 않고 메모리에 계속 잔류하게 된다.
// 따라서 다음과 같은 결과를 확인할 수 있다.
console.log(fn2()) // 1
console.log(fn2()) // 2
console.log(fn2()) // 3
console.log(fn2()) // 4
console.log(fn2()) // 5
```


## 참조
* [JavaScript의 함수는 1급 객체이다](https://bestalign.github.io/2015/10/18/first-class-object/)
* [1급시민, 1급객체, 1급함수](http://junil-hwang.com/blog/javascript-1%EA%B8%89%ED%95%A8%EC%88%98/)
* [Wikipedia](https://en.wikipedia.org/wiki/First-class_citizen)

