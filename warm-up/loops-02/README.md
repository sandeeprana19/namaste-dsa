# Loops 02

10. Write a function that searches for an element let say 10 in an array let say `arr=[4,2,0,10,8,30]` and returns the index, if the element is not present then return -1?

A.

1. Let’s say search element is 10:

```javascript
let arr = [4, 2, 0, 10, 8, 30];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let result = searchElement(arr, 10);
console.log(result);
```

```text
x = 10

i = 0   4   X
i = 1   2   X
i = 2   0   X
i = 3   10  ✓
```

`return 3`

And as soon as the function returns something it will not do anything else and the function will be out at that moment. So, whenever I return something from function then function step executing and it just return the value. So that's how function works.

2. Let’s say search element is 49:

```javascript
let arr = [4, 2, 0, 10, 8, 30];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let result = searchElement(arr, 49);
console.log(result);
```

```text
x = 49

i = 0   4   X
i = 1   2   X
i = 2   0   X
i = 3   10  X
i = 4   8   X
i = 5   30  X
i = 6   fail
```

Loop ends.

So function returns -1.

11. Write a function that returns the number of negative numbers in an array lets say `[2,-9,17,0,1,-10,-4,8]`?

A.

```javascript
let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let result = countNegatives(arr);
console.log(result);
```

```text
i = 0    2    X
i = 1   -9    ✓
i = 2   17    X
i = 3    0    X
i = 4    1    X
i = 5  -10    ✓
i = 6   -4    ✓
i = 7    8    X
```

Count:

```text
0
1
2
3
```

`return 3`

Note: `count = count + 1` & `count++` are one and the same thing does.

12. Write a function that returns the largest number in an array let say `[5,0,10,8,17,1]`?

A.

```javascript
let arr = [5, 0, 10, 8, 17, 1];

function findLargest(arr) {
  let largest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const result = findLargest(arr);
console.log(result);
```

```text
largest
-1
5
10
17
```

```text
i = 0    5
i = 1    0
i = 2   10
i = 3    8
i = 4   17  ✓
i = 5    1
i = 6    fail
```

Note: Initializing largest let variable with value -1 might be a concern because it will not work in an array containing negative numbers.

So, there are two possible for the initial value of largest let variable like:

1. Either initialize the value of largest to the least number as possible so if array is there something known as infinity and -infinity, so I can initialize it like:

let largest = -Infinity;

2. Or I can also initialize it like:

let largest = [0];

13. What is the logic of `Infinity` and `-Infinity`?

A. Logic:

1. Finding the largest number: start with `-Infinity`(the smallest possible value) so that any real number in the array immediately beats it on the first comparison.

2. Finding the smallest number: start with `Infinity`(the largest possible value) so that any real number beats it going the other direction.

3. Find the smallest number in an array let say [-9, -19, -3]?

A.
Array:

```js
let arr = [-9, -19, -3];
```

```js
function findSmallest(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const result = findSmallest(arr);
console.log(result);
```

Output:

```text
-19
```
