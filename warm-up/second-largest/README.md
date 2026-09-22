# Second Largest

15. Find the second largest number in an array lets say [4, 9, 0, 2, 8, 7, 1]?

A.
Array:

```js
let arr = [4, 9, 0, 2, 8, 7, 1];
```

```js
function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

Corner cases:

1.  Array should have at least 2 elements.
2.  Array has negative numbers.
3.  Array has duplicate numbers.

Array should have at least 2 elements:

1.

```js
let arr = [];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

Array has negative numbers:

2.

```js
let arr = [-2, -10, -5, -34];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

Array has duplicate numbers:

3.

```js
let arr = [10, -20, 8, 9, -3, 5, 20, 20];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```
