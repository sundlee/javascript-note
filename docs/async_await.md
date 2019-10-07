---
title: Async/Await
---

# 예제

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


# 가독성이 높음

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


