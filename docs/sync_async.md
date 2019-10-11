---
title: Sync/Async
---

# Sync/Async


sample.txt

```js
B
```

sync.js

```js
var fs = require('fs');
 
/*
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/
 
 
console.log('A');
fs.readFile('sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
```



```js
/*
function a(){
  console.log('A');
}
*/
var a = function(){
  console.log('A');
}
 
 
function slowfunc(callback){
  callback();
}
 
slowfunc(a);
```



----

```js
console.log('start');
let a;
setTimeout(function() {
  a = 1;
  console.log(`setTimeout에서 a출력: ${a}`);
}, 0);
console.log(`a출력: ${a}`);
```
