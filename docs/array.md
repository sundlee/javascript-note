---
title: Array
---

# Array 조작

## concat
* 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 return

```js
var items = [1, 2];

var newItems = items.concat(3, 4, 5, 'str', undefined);
console.log(newItems);
// [1, 2, 3, 4, 5, 'str', undefined]

var newItems2 = items.concat([3, 4], [5, 6, 7]);
console.log(newItems2);
// [1, 2, 3, 4, 5, 6, 7]

var newItems3 = items.concat([3, 4], [5, 6, [7]]);
console.log(newItems3);
// [1, 2, 3, 4, 5, 6, [7]]

console.log(items);
// [1, 2] -> 원본은 변하지 않음
```

* concat 을 잘 활용하면 쓸데없는 코드를 줄일 수 있습니다.

```js
var people = [{name: 'Sally'}, {name: 'Shane'}];
var people2 = [{name: 'Simon'}, {name: 'Ben'}];

people.forEach(function(person) {
  console.log(person.name);
});
people2.forEach(function(person) {
  console.log(person.name);
});
// Sally
// Shane
// Simon
// Ben

people.concat(people2).forEach(function(person) {
  console.log(person.name);
});
// Sally
// Shane
// Simon
// Ben
```

* 새로운 배열을 생성할 때는 (값이 아닌) 객체 참조를 복사합니다.
```js
var a = [1, 2, 3];
var b = [4, 5, {name: 'Kevin'}];
var c = a.concat(b);
console.log(c);
// [1, 2, 3, 4, 5, {name: 'Kevin'}]

b[1] = 'power';
b[2].name = 'Bob';
console.log(c);
// [1, 2, 3, 4, 5, {name: 'Bob'}]

console.log(b);
// [4, 'power', {name: 'Bob'}]
```


## join

* join은 argument로 전달된 separator를 사용하여 array의 각 element를 연결한 string을 리턴
* 배열 요소 값이 null 이거나 undefined 일 경우, 빈 문자열을 return
* default separator는 comma (',')임

```js
var names = ['Shane', 'Alan', 'Osbourne'];

console.log(names[0] + ' ' + names[1] + ' ' + names[2]);
// Shane Alan Osbourne

console.log(names.join(' '));
// Shane Alan Osbourne

console.log(names.join('-'));
// Shane-Alan-Osbourne

console.log(names.join(''));
// ShaneAlanOsbourne

console.log(names.join());
// Shane,Alan,Osbourne

// 복잡한 예제
var name = 'shane osbourne';
var upper = name.split(' ')
 .map(x => x.charAt(0).toUpperCase() + x.slice(1))
 .join(' ');
console.log(upper);
// Shane Osbourne
```


## indexOf
* 배열에서 argument로 전달된 element를 찾으면 index를 리턴하고, 존재하지 않으면 -1을 리턴
* 두 번째 인자로는 검색을 시작할 인덱스를 넣어줄 수 있음(Default 값은 0: 전체 검색). 만약 값이 음수이면, 배열의 끝부터 offset 값으로 적용됨
* === (Strict Equality Comparison Algorithm)으로 비교

```js
var family = ['Shane', 'Sally', 'Isaac'];

console.log(family.indexOf('Isaac');
// 2

console.log(family.indexOf('Kittie');
// -1

var kittieExists = family.indexOf('Kittie') > -1;
// false

if (!kittieExists) {
  family.push('Kittie');
}
console.log(family);
// 'Shane', 'Sally', 'Isaac', 'Kittie'];

console.log(family.indexOf('Sally', 2));
// -1 -> index 2부터 검색했는데 없음

console.log(family.indexOf('Sally', 1));
// 1 -> index 1부터 검색했는데 index 1에 Sally가 발견됨

var numberExample = [1, 2, 3];
console.log(numberExample.indexOf("2"));
// -1

console.log(numberExample.indexOf(2));
// 1
```


* Object 검사도 가능함

```js
var shane = { name: 'Shane' };
var sally = { name: 'Sally' };
var kittie = { name: 'kittie' };
var family = [shane, sally, kittie];
console.log(family.indexOf(kittie));
// 2
```

* 요소의 모든 항목 찾기

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';

var idx = array.indexOf(element);
while(idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

array.forEach(function(v, i) {
  if (v === element) {
    indices.push(i);
  }
}
console.log(indices);
// [0, 2, 4]
```


## slice
* 배열을 전체 (or 부분)를 리턴함
* argument를 두개(시작 index(포함)와 끝 index(비포함)) 받음. 

```js
var items = [1, 2, 3, 4, 5];
var copy = items.slice();
copy[0] = 100;
console.log(items);
// [1, 2, 3, 4, 5]

console.log(copy);
// [100, 2, 3, 4, 5]

var copy2 = items.slice(2, 3);
// [3]

var copy3 = items.slice(2);
// [3, 4, 5]

var copy4 = items.slice(-2);
// [4, 5]

var copy5 = items.slice(1, -1);
// [2, 3, 4]
```


## splice

* array의 element를 제거하거나 새 element를 추가하여 배열의 내용을 변경
* start: 배열의 변경을 시작하는 인덱스
* deleteCount: 배열에서 제거를 할 요소의 수
* itemN: 배열에 추가될 요소, 리턴 값: 삭제된 요소들의 배열이 리턴
```js
array.splice(start, deleteCount[, item1[, item2[, ...]]])
```

```js
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

var remvoed = myFish.splice(2, 1); // 배열의 인덱스 2부터 1개를 제거
// myFish is ['angel', 'clown', 'surgeon']
// removed is ['mandarin']

removed = myFish.splice(1, 1, 'trumpet'); // aray에서 index부터 1개 제거, 그 자리에 'trumpet'을 삽입
// myFish is ['angel', 'trumpet', 'surgeon']
// removed is ['clown']

removed = myFish.splice(0, 2, 'parrot', 'anemone'); // array index 0부터 2개를 제거, 그 자리에 'parrot', 'anemone'를 삽입
// myFish is ['parrot', 'anemone', 'surgeon']
// removed is ['angel', 'trumpet']

removed = myFish.splice(2, Number.MAX_VALUE); // array index 2부터 뒤에 있는 모든 요소를 제거
// myFish is ['parrot', 'anemone']
// removed is ['surgeon']
```

## sort
* 배열의 요소를 적절한 위치에 정렬하고 배열을 반환 (원본이 바뀜)
* compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 순서로 문자열을 비교하여 정렬됩니다. (sort 메서드의 첫번째 인자로 비교함수를 전달합니다.)

```js
var items = ['Shane', 'Sally', 'Isaac'];
console.log(items); // ['Shane', 'Sally', 'Isaac']
items.sort();
console.log(items); // ['Isaac', 'Sally', 'Shane']
```

* 숫자(Numerically) vs. 문자(Alphabetically) 비교에 유의해야합니다. 아래와 같이 의도하지 않은 정렬이 일어날 수 있습니다.
```js
var items = [10, 30, 2, 20];
items.sort();
console.log(items); // [10, 2, 20, 30]
```

```js
var items = [10, 30, 2, 20];
// 오름차순
items.sort((a, b) => a - b);
console.log(items);
// [2, 10, 20, 30]

// 내림차순
items.sort((a, b) => b - a);
console.log(items);
// [30, 20, 10, 2]

// 이름길이순
var names = ['Kittie', 'John', 'Sally', 'Einstein'];
names.sort((a, b) => b.length - a.length);
console.log(names);
// ['Einstein', 'Kittie', 'Sally', 'John']
```


## push

* push: array의 끝에 하나 또는 그 이상의 엘리먼트를 추가하고 배열의 변경된 길이(length)를 리턴
* 비슷한 메서드로 pop, shift, unshift 가 있음

```js
const pets = ['Cat', 'Dog'];
pets.push('Hamster');
pets.push('Horse');
console.log(pets);
// ['Cat', 'Dog', 'Hamster', 'Horse'];

pets.push('Lion', 'Tiger');
console.log(pets);
// ['Cat', 'Dog', 'Hamster', 'Horse', 'Lion', 'Tiger'];
```

* pop: array의 마지막 element를 제거하고 그 element를 리턴 (빈 배열에 pop() 호출하면 undefined를 리턴)
* shift: array의 첫 번째 element를 제거하고, 그 element를 리턴
* unshift: 하나 또는 그 이상의 element를 array의 맨 앞에 추가하고 array의 새로운 length를 리턴

```js
var myFish = ['angel', 'clown', 'mandarin'];
var popped = myFish.pop();

console.log(myFish);
// ['angel', 'clown']

console.log(popped);
// 'mandarin'
```

```js
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
var shifted = myFish.shift();

console.log(myFish);
// ['clown', 'mandarin', 'surgeon']

console.log(shifted);
// 'angel'
```

```js
var arr = [1, 2];
var newLength = arr.unshift(0);
console.log(arr);
// [0, 1, 2]
console.log(newLength);
// 3

newLength = arr.unshift(-2, -1);
console.log(arr);
// [-2, -1, 0, 1, 2]
console.log(newLength);
// 5

arr.unshift([-3]);
console.log(arr);
// [[-3], -2, -1, 0, 1, 2]
```

## find, findIndex
* find: 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소를 반환
* findIndex: 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환



참고: https://github.com/sundlee/javascript-note/new/master/docs

