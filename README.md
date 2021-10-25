# Term 1 - Midterm Exam

<img src='./motivation.gif' />

Welcome to the Term 1 midterm exam. This test will begin at 10:40am (or earlier) and end at 4:00pm or whenever you finish.

Once you're finished, upload your `main.js` to the assignment on Populi (through the CodeGrade link) then send a message on Slack to Alex and Brian.

Please take a one hour break from 1:00pm - 2:00pm to eat lunch, rest your brain, and come back to the exam with a fresh set of eyes. 

To start off, do an `npm install`.

From here, you can run the tests with the `npm run test` command.

## Tips

* If you're feeling stuck, skip it!
* It's okay if you don't finish
* You can go in any order
* It's better to show a little work on each problem than a lot of work on one problem
* Relax and have fun!

## Problems

### Problem 1: `ageToAbilities`

Write a function, `ageToAbilities` that takes a person's age and returns a message of their abilities according to the table below:

```
┌──────────┬────────────────────────────────────┐
│ age      │ message                            │
├──────────┼────────────────────────────────────┤
│ under 16 │ 'You can't drive.'                 │
│ 16 to 17 │ 'You can drive but not vote.'      │
│ 18 to 24 │ 'You can vote but not rent a car.' │
│ 25 plus  │ 'You can do pretty much anything.' │
└──────────┴────────────────────────────────────┘
```

**Examples**
```
ageToAbilities(10) => 'You can't drive.'
ageToAbilities(25) => 'You can do pretty much anything.'
```

---

### Problem 2: `oddIndices`

Write a function, `oddIndices`, that takes in an array of numbers and returns only the ones that are located at odd indices (indices is plural of index). Recall that the index of the first value in an array (or string) is 0.

**Examples**
```
oddIndices([0, 2, 4, 6, 8, 10]) => [2, 6, 10]
oddIndices([1]) => []
oddIndices([100, 101, 102]) => [101]
```

---

### Problem 3: `numOddValues`

Write a function, `numOddValues`, that takes in an array of numbers and returns the quantity of odd values in that array.

**Examples**
```
numOddValues([0, 1, 2, 3]) => 2
numOddValues([5, 5, 5, 5]) => 4
numOddValues([]) => 0
```

---

### Problem 4: `averageStringLength`

Write a function, `averageStringLength`, that takes in an array of strings and returns the average length of the strings. An average is calculated by first summing X values, then dividing the sum by X.

**Examples**
```
averageStringLength(['oh', 'hello']) => 3.5
averageStringLength([]) => 0
averageStringLength(['a', 'pleasant', 'string']) => 5
```

---

### Problem 5: `lastPunctuationIndex`

Write a function, `lastPunctuationIndex`, that returns the index of the last appearance of a period, question mark, or exclamation mark in the given string. If none are found, return `-1`.

**Examples**
```
lastPunctuationIndex('wow! goodness me.') => 16
lastPunctuationIndex('I love taking tests.') => 19
lastPunctuationIndex('...hello') => 2
lastPunctuationIndex('...hello?') => 8
lastPunctuationIndex('alright alright alright') => -1
```

---

### Problem 6: `incrementalCount`

Write a function, `incrementalCount`, that takes in three numbers: a starting value,
an ending value, and an increment.

The function should count from the starting value to the ending value (inclusive) in increments
of the given increment. All of these values should be returned in an array.

**Examples**

```
incrementalCount(5, 10, 1) => [5, 6, 7, 8, 9, 10]
incrementalCount(5, 11, 2) => [5, 7, 9, 11]
incrementalCount(5, 7.5, 0.5) => [5, 5.5, 6, 6.5, 7, 7.5]
incrementalCount(30, 10, -10) => [30, 20, 10]
```

---

## Extra credit: `multiplicationTable`

Write a function, `multiplicationTable`, that takes in two numbers which represent a number of rows and a number of columns.

The function should then return a multiplication table with a number of rows and columns equal to the given parameters. The multiplication table should be returned as an array of arrays of numbers (a matrix of numbers) where every number in the table can be calculate as the row index multiplied by the column index (starting at 0).

For example, a 4 x 5 multiplication table would look like the following:
```
    0 1 2 3 4
  ┌───────────
0 │ 0 0 0 0 0
1 │ 0 1 2 3 4
2 │ 0 2 4 6 8
3 │ 0 3 6 9 12
```

**Examples**

```
multiplicationTable(0, 0) =>
  [[]]
```

```
multiplicationTable(2, 2) =>
  [
    [0, 0],
    [0, 1]
  ]
```

```
multiplicationTable(4, 5) =>
  [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12]
  ]
```