## Second largest

### 15. Find second largest number in an array let say [4,9,0,2,8,7,1]?

**A.**

```text
function findSecondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

```text
firstLargest    secondLargest    i =    arr[i]
-Infinity       -Infinity        0      4    (✓)
4               -Infinity        1      9    (✓)
9               4                2      0    (X)
9               4                3      2    (X)
9               4                4      8    (✓)
9               8                5      7    (X)
9               8                6      1    (X)
                                 7 (X) fails
                                 {loop ends}
```

#### Corner cases:

1. Array is empty.
2. Array has negative numbers.
3. Array has duplicates.

#### 1. Let arr = []:

```text
function findSecondLargest(arr) {
    if(arr.length < 2) {
        return "Array should have atleast 2 elements";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

```text
Console:
Array should have atleast 2 elements
```

#### 2. Let arr = [-2,-10,-5,-34]:

```text
function findSecondLargest(arr) {
    if(arr.length < 2) {
        return "Array should have atleast 2 elements";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

```text
firstLargest    secondLargest    i =    arr[i]
-Infinity       -Infinity        0      -2    (✓)
-2              -Infinity        1      -10   (✓)
-2              -10              2      -5    (✓)
-2              -5               3      -34   (X)
                                 4 (X) fails
                                 {loop ends}

Console:
-5
```

#### 3. Let arr = [10,20,8,9,3,5,20,20]:

```text
function findSecondLargest(arr) {
    if(arr.length < 2) {
        return "Array should have atleast 2 elements";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
```

```text
firstLargest    secondLargest    i =    arr[i]
-Infinity       -Infinity        0      10    (✓)
10              -Infinity        1      20    (✓)
20              10               2      8     (X)
20              10               3      9     (X)
20              10               4      3     (X)
20              10               5      5     (X)
20              10               6      20    (X)
20              10               7      20    (X)
                                 8 (X) fails
                                 {loop ends}

Console:
10
```

### Corner cases:

1. Array is empty.
2. Array has negative numbers.
3. Array has duplicates.
