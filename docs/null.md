---
title: Null
---

# Null인지 확인하는 방법

자바스크립트에서 어떤 값이 비어있는지 체크하려면

```js 
var value2 = ""
if (value2 == "") {
  console.log("비어 있음");
} else {
  console.log("값이 있음");
}
// 비어있음 출력
```

이렇게 검사하거나

```js 
var value2 = ""
if(!value2) {
  console.log("비어 있음");
} else {
  console.log("값이 있음");
}
// 비어있음 출력
```

`!`를 사용해서 변수가 비어있는지를 확인할 수 있습니다. 자바스크립트에서 비교 결과로 false가 리턴되는 값은 아래의 경우이고 나머지는 모두 true가 리턴합니다.
* ""
* null
* undefined
* 0
* NaN


# 실행 예
```js 
if ('' || null || undefined || 0 || NaN){
  console.log("여기는 실행되지 않음");
} else {
  console.log("여기가 실행");
}
// 여기가 실행 출력
```

그리고 추가로 빈 배열 ([]), 빈 객체 ({})가 있을 수 있습니다. 
(상황에 따라 변형이 필요하겠지만) 어떤 값이 자료형에 상관없이 빈 값인지 알고 싶을때는 아래와 같은 방법으로 검사할 수 있습니다.

```js 
var isEmpty = function(value) {
  if (value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length)) {
    return true
  } else {
    return false
  }
};
```
