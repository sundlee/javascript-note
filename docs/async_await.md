---
title: Async/Await
---

# Async/Await

Promise를 사용하면 코드가 then chaining 으로 인해서 가독성이 좋지 않습니다. 


::: tip
TIP:
await은 항상 async함수 안에서 호출되어야 합니다.
```js
async function func1() {
    await func2();
}

func1();
```
:::

## 예제1
----
asyncawait1.js
```js
function requestData(value){
    return new Promise(resolve => 
        setTimeout(() => {
            console.log('requestData:', value);
            resolve(value);
        }, 100),
    );
}
async function getData() {
    const data1 = await requestData(10);
    const data2 = await requestData(20);
    console.log(data1, data2);
    return [data1. data2];
}
getData();
// requestData : 10
// requestData : 20
// 10 20
```


# Async/Await의 장점

async/await는 Promise보다 가독성이 높습니다.

## Promise와 Async/Await
Promise와 Async/Await를 각각 사용한 예의 비교
```js
// Promise로 작성한 코드
function getDataPromise(){
    asyncFunc1()
    .then(data => {
        console.log(data);
        return asyncFunc1(data);
    })
    .then(data => {
        console.log(data);
        return asyncFunc1(data);
    })
    .then(data => {
        console.log(data);
    })
}

// async await로 작성한 코드
async function getDataAsync(){
    const data1 = await asyncFunc1();
    console.log(data1);
    const data2 = await asyncFunc1(data1);
    console.log(data2);
    const data3 = await asyncFunc1(data2);
    console.log(data3);
}

getDataPromise();
getDataAsync();
```


## 예제2
----
asyncawait2.js
```js
const fetch = require("node-fetch");

function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1';
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(url).then(function (response) {
    return response.json();
  });
}

async function logTodoTitle() {
  var user = await fetchUser();
  console.log(`user: ${JSON.stringify(user, null, 2)}`);
  if (user.id === 1) {	// 받아온 사용자 아이디가 1이면 todo 정보 호출
    var todo = await fetchTodo();
    console.log(`todo: ${JSON.stringify(todo, null, 2)}`);
    console.log(todo.title);
  }
}

logTodoTitle();
```



# error handling

보통 error handling을 위해서 try ~ catch문을 함께 사용합니다.
----
asyncawait-try.js
```js
const fetch = require("node-fetch");

function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1';
  return fetch(url).then(function (response) {
    return response.json();
  });
}

async function logTodoTitle() {
  try {
    var user = await fetchUser();
    console.log(`user: ${JSON.stringify(user, null, 2)}`);
    return Promise.resolve(user);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
}

logTodoTitle().then((result) => {
  console.log(result);
});
```
