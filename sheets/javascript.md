---
title: JavaScript
createdDate: 2017-12-01
updatedDate: 2020-07-27
published: true
slug: javascript
---

<script>
  import Author from '$lib/author.svelte'
</script>

## Document Design Mode

Edit a web page, set the design mode to on.

```js
document.designMode = 'on'
// make edits, then
document.designMode = 'off'
```

## Copy an array

```js
// initial array
const cats = [`Darcy`, `Leo`, `Boris`]
// copy array
const copyCats = [...cats]
```

output:

```bash
["Darcy", "Leo", "Boris"]
```

## Combine two arrays

```js
// array 1
const cats = [`Darcy`, `Leo`, `Boris`]
// array 2
const people = [`Scott`, `Islem`, `Tom`, `George`]
// all
const catsAndPeople = [...cats, ...people]
```

output:

```bash
["Darcy", "Leo", "Boris", "Scott", "Islem", "Tom", "George"]
```

## Remove item without mutating

```js
// array 1
const cats = [`Darcy`, `Leo`, `Boris`]
// array 2
const people = [`Scott`, `Islem`, `Tom`, `George`]
// all
const catsAndPeople = [...cats, ...people]
// remove Tom
const withoutTom = [
  ...catsAndPeople.slice(0, 5),
  ...catsAndPeople.slice(6),
]
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
const cats = [`Darcy`, `Leo`, `Boris`]
// reverse array
const reverseCatNames = [...cats].reverse()
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
'racecar'.split('').reverse().join('')
```

output:

```bash
racecar
```

## New array from existing

Return one new entry for every existing entry: `.map()`

```js
const originalArray = [1, 2, 3]
const newArray = originalArray.map(item => item * 2)
console.log(newArray)
```

output:

```
[ 2, 4, 6 ]
```

## Return new array filter

Return a new array with only some of the existing entries: `.filter()`

```js
const originalArray = [1, 9, 4, 2, 42]
const newArray = originalArray.filter(item => item > 5)
console.log(newArray)
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
]
const numberOfBobs = originalArray.reduce((accumulator, item) => {
  if (item === 'Bob') {
    return accumulator + 1
  } else {
    return accumulator
  }
}, 0)
console.log(numberOfBobs)
```

output:

```
3
```

## Sum all even numbers from array

```js
const arr = [0, 1, 2, 3, 4, 5, null, 6, 9]

function addEven() {
  return arr.reduce(
    (acc, cur) => (cur % 2 === 0 ? acc + cur : acc),
    0
  )
}

addEven(arr)
```

## Return the first duplicate number

```js
function firstDuplicate(arr) {
  // empty array to use to check incoming array against
  let checkArray = {}

  // loop it
  for (let i = 0; i < arr.length; i++) {
    // check that array element against
    // checkArray
    if (checkArray[arr[i]] !== undefined)
      // if there's no matching item then
      return arr[i]
    // append to the checkArray
    else checkArray[arr[i]] = i
  }
  return -1
}
```

## Async await with axios and GraphQL

```js
const axios = require('axios')

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
  console.log(result.data)
})
```

## Remove vowels from string

Use a regular expression:

```js
'replace vowels from string'.replace(/[aeiou]/gi, '')
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
  .join('')
```

Output:

```bash
"rplc vwls frm strng"
```

## Closure examples

Closures are the ability for a child function (or inner function) to
access variables from a higher level scope even after the functions
have been called (closed or closed over).

The running of a function within a function:

```js
function greeting(salutation = '') {
  const sarcasm = () => {
    return [...salutation]
      .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
      .join('')
  }
  return function (name) {
    return `${sarcasm()} ${name}`
  }
}

// run the function
const sayHiya = greeting('Hiiiya')
const sayHello = greeting('Hellooo')

// now the function is closed but we can still
// access the variables inside it
console.log(sayHiya('scott'))
console.log(sayHello('margret'))
```

Private variables:

```js
function createGame(gameType) {
  let score = 0
  return function increment() {
    score++
    return `Your game of ${gameType} score is ${score}.`
  }
}

const cribbage = createGame('Cribbage')
const bridge = createGame('Bridge')

console.log(cribbage())
console.log(cribbage())
console.log(cribbage())
console.log(cribbage())
console.log(bridge())
console.log(bridge())
console.log(cribbage())
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

## Mock and endpoint

Use a mock endpoint to test against for auth forms.

```js
const wait = n => new Promise(resolve => setTimeout(resolve, n))

const mockFetch = url =>
  wait(1000).then(() => ({
    status: 200,
    body: {
      url: 'http://bbc.co.uk',
    },
  }))

mockFetch(`${endpoint}`).then(response => {
  console.log('=====================')
  console.log(response.status)
  console.log(form.userEmail.value)
  console.log(form.userPassword.value)
  console.log('=====================')
  response.status === 200
    ? (location = response.body.url)
    : console.error(`incorrect`)
})
```

## List all image URLs from a web page

Need to quickly grab a load of images from a page?

```js
let images = document.querySelectorAll('img')
Array.from(images).map(i => {
  console.log(i.src)
})
```

## `<div>` cannot appear as a descendant of `<p>`

If you're looking for where this is happening, in console you can use:

```js
document.querySelectorAll(' p * div ')
```

## Truncate a string

Shorten a string! Define the start and the end of the string you want
to return:

```js
const myString = 'ABCDEFG'
const myTruncatedString = myString.substring(0, 3)
// The value of myTruncatedString is "ABC"
```

## Current year one liner

```js
const copyrightYear = new Date().getFullYear()
```

## Fizz Buzz

Classic FizzBuzz loop.

```js
for (let i = 1; i <= 100; ++i) {
  let output = ''
  if (i % 3 === 0) {
    output += 'Fizz'
  }
  if (i % 5 === 0) {
    output += 'Buzz'
  }

  if (output === '') {
    output = i
  }

  console.log(output)
}
```

## Prototypical Instantiation

Instantiation patterns are ways to create something in JavaScript.

```js
var person = function (name) {
  var obj = Object.create(objMethods)
  obj.name = name
  return obj
}

var objMethods = {
  sayHello: function () {
    console.log(`${this.name} says hello!`)
  },
  changeName: function (newName) {
    var oldName = this.name
    this.name = newName

    console.log(`${oldName} has changed their name to ${this.name}`)
  },
}

// Implementation
var person1 = person('Austin')
person1.sayHello()
person1.changeName('Derek')
person1.sayHello()
```

Output:

```bash
Austin says hello!
Austin has changed their name to Derek
Derek says hello!
```

## Change Page Font Size

Want to change the font size on a page? Here you can target the while
document, but could change `html` with `p`, `span` whatever.

```javascript
document.getElementsByTagName('html')[0].style['font-size'] = '10px'
```

## Checking for `window`

<Author author="NickyMeuleman" />

[Optional chaining] can not be used on `window`. It will throw an
error when used on any undeclared root object, so no escaping the
`typeof window == 'undefined'` check with a clever `?.`.

## Unique Array of Values with Set and Spread Operator [ES6]

<Author author="anniebombanie" />

In ES6, Set objects are collections of values. Set uses strict
equality (`===`) to check values & each value may only occur once. We
use the spread operator to convert the Set object into an array.

```js
const numArr = [1, 1, 1, 2, 3]
// (5) [1, 1, 1, 2, 3]

const uniqueNumSet = new Set(numArr)
// Set(3) {1, 2, 3}

const uniqueNumArr = [...new Set(numArr)]
// (3) [1, 2, 3]
```

If you prefer something a bit more explicit, you can do this instead:
`const uniqueNumArr = Array.from(uniqueNumSet)`

## Convert an array of objects into a single object

If you have an array of objects, you can convert that list of objects
into a single object by using [`Object.assign()`][object.assign] and
[spread syntax][spread syntax]. The `Object.assign()` method copies
all enumerable own properties from one or more source objects to a
target object and it returns the modified target object. We use spread
syntax `...` on the array `items` so that each object in the array can
be "expanded" in places where key-value pairs exists.

```js
const items = [
  { address: '123 ABC street' },
  { isLeased: false },
  { hasPool: true },
]

const obj = Object.assign({}, ...items)
console.log(obj)
// { "address": "123 ABC street", "isLeased": false, "hasPool": true }
```

<!-- Links -->

[nicky meuleman]: https://twitter.com/NMeuleman
NickyMeuleman
[optional chaining]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
[object.assign]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
[spread syntax]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
