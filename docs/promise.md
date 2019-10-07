---
title: Promise
---

# Promise

## callback 1

```js
function first(a,b,callback){
	let v=a*b;
	callback(v);
}

first(1,2,function(v){
	console.log(v);		//2
})
```

## callback 2

```js
function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

delay(1, (result) => {
  console.log(1, result);
});

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayP(1)
.then((result) => {
  console.log(1, result);
  return delayP(1);
})
.then((result) => {
  console.log(2, result);
  return delayP(1);
})
.then((result) => {
  console.log(3, result);
  return 'wow';
})
.then((result) => {
  console.log(result);
});
```

인스턴스의 라이프 사이클 흐름을 그림으로 나타내어 보면 다음과 같습니다.



## 

