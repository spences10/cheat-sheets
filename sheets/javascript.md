---
title: JavaScript
createdDate: 2017-12-01
updatedDate: 2017-12-11
published: true
---

# JavaScript

## Arrays

### New array from existing

Return one new entry for every existing entry: `map()`

```js
const originalArray = [1, 2, 3];
const newArray = originalArray.map(item => item * 2);
console.log(newArray);
```

output:

```
[ 2, 4, 6 ]
```

### Return new array filter

Return a new array with only some of the existing entries: `filter()`

```js
const originalArray = [1, 9, 4, 2, 42];
const newArray = originalArray.filter(item => item > 5);
console.log(newArray);
```

output:

```
[ 9, 42 ]
```

### Return one new thing only

Return one new thing only: `reduce()`

```js
const originalArray = [
  'Alice',
  'Bob',
  'Charlie',
  'Bob',
  'Bob',
  'Charlie',
];
const numberOfBobs = originalArray.reduce((accumulator, item) => {
  if (item === 'Bob') {
    return accumulator + 1;
  } else {
    return accumulator;
  }
}, 0);
console.log(numberOfBobs);
```

output:

```
3
```

## Interview questions

### Sum all even numbers from array

```js
const arr = [0, 1, 2, 3, 4, 5, null, 6, 9];

function addEven() {
  return arr.reduce(
    (acc, cur) => (cur % 2 === 0 ? acc + cur : acc),
    0
  );
}

addEven(arr);
```

### Return the first duplicate number

```js
function firstDuplicate(arr) {
  // empty array to use to check incoming array against
  let checkArray = {};

  // loop it
  for (let i = 0; i < arr.length; i++) {
    // check that array element against
    // checkArray
    if (checkArray[arr[i]] !== undefined)
      // if there's no matching item then
      return arr[i];
    // append to the checkArray
    else checkArray[arr[i]] = i;
  }
  return -1;
}
```
