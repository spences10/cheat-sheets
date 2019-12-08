---
title: JavaScript
createdDate: 2017-12-01
updatedDate: 2017-11-03
published: true
cover: cover-javascript.png
---

## Copy an array

```js
// initial array
const cats = [`Darcy`, `Leo`, `Boris`];
// copy array
const copyCats = [...cats];
```

output:

```bash
["Darcy", "Leo", "Boris"]
```

## Combine two arrays

```js
// array 1
const cats = [`Darcy`, `Leo`, `Boris`];
// array 2
const people = [`Scott`, `Islem`, `Tom`, `George`];
// all
const catsAndPeople = [...cats, ...people];
```

output:

```bash
["Darcy", "Leo", "Boris", "Scott", "Islem", "Tom", "George"]
```

## Remove item without mutating

```js
// array 1
const cats = [`Darcy`, `Leo`, `Boris`];
// array 2
const people = [`Scott`, `Islem`, `Tom`, `George`];
// all
const catsAndPeople = [...cats, ...people];
// remove Tom
const withoutTom = [
  ...catsAndPeople.slice(0, 5),
  ...catsAndPeople.slice(6),
];
```

Tom is left out of the new array party, sorry Tom

output:

```bash
["Darcy", "Leo", "Boris", "Scott", "Islem", "George"]
```

## Reverse an array

So, `.reverse()` will mutate the original array so it's a good idea to
make a new array.

```js
const cats = [`Darcy`, `Leo`, `Boris`];
// reverse array
const reverseCatNames = [...cats].reverse();
```

output:

```bash
# cats
["Darcy", "Leo", "Boris"]
# reverseCatNames
["Boris", "Leo", "Darcy"]
```

## Reverse a string

There's a `.reverse()` method for arrays, so if you split your sting
into an array then you'll be able to reverse it.

```js
'racecar'
  .split('')
  .reverse()
  .join('');
```

output:

```bash
racecar
```

## New array from existing

Return one new entry for every existing entry: `.map()`

```js
const originalArray = [1, 2, 3];
const newArray = originalArray.map(item => item * 2);
console.log(newArray);
```

output:

```
[ 2, 4, 6 ]
```

## Return new array filter

Return a new array with only some of the existing entries: `.filter()`

```js
const originalArray = [1, 9, 4, 2, 42];
const newArray = originalArray.filter(item => item > 5);
console.log(newArray);
```

output:

```
[ 9, 42 ]
```

## Return one new thing only

Return one new thing only: `.reduce()`

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

## Sum all even numbers from array

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

## Return the first duplicate number

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

## Async await with axios and GraphQL

```js
const axios = require('axios');

axios({
  url: 'https://spotify-graphql-server.herokuapp.com/graphql',
  method: 'post',
  data: {
    query: `
      {
        queryArtists(byName:"Andy C") {
          name
          id
          image
          albums {
            name
            image
          }
        }
      }
      `,
  },
}).then(result => {
  console.log(result.data);
});
```

## Remove vowels from string

Use a regular expression:

```js
'replace vowels from string'.replace(/[aeiou]/gi, '');
```

Output:

```bash
"rplc vwls frm strng"
```

With JavaScript functions:

```js
'replace vowels from string'
  .split('a')
  .join('')
  .split('e')
  .join('')
  .split('i')
  .join('')
  .split('o')
  .join('')
  .split('u')
  .join('');
```

Output:

```bash
"rplc vwls frm strng"
```

## Closure examples

The running of a function within a function:

```js
function greeting(salutation = '') {
  const sarcasm = () => {
    return [...salutation]
      .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
      .join('');
  };
  return function(name) {
    return `${sarcasm()} ${name}`;
  };
}

// run the function
const sayHiya = greeting('Hiiiya');
const sayHello = greeting('Hellooo');

// now the function is closed but we can still
// access the variables inside it
console.log(sayHiya('scott'));
console.log(sayHello('margret'));
```

Private variables:

```js
function createGame(gameType) {
  let score = 0;
  return function increment() {
    score++;
    return `Your game of ${gameType} score is ${score}.`;
  };
}

const cribbage = createGame('Cribbage');
const bridge = createGame('Bridge');

console.log(cribbage());
console.log(cribbage());
console.log(cribbage());
console.log(cribbage());
console.log(bridge());
console.log(bridge());
console.log(cribbage());
```

Output:

```bash
Your game of Cribbage score is 1.
Your game of Cribbage score is 2.
Your game of Cribbage score is 3.
Your game of Cribbage score is 4.
Your game of Bridge score is 1.
Your game of Bridge score is 2.
Your game of Cribbage score is 5.
```
