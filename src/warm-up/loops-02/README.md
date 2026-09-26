# Loops 02

### 10. Write a function that searches for an element let say 10 in an array let say arr = [4,2,0,10,8,30] and return the index if the element is not present then return -1?

#### 1. Let's say search element is 10:

```text
let arr = [4,2,0,10,8,30];

function searchElement(arr,x) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == x) {
            return i;
        }
    }
    return -1;
}

let result = searchElement(arr,10);
console.log(result);
```

```text
x = 10

i = 0    arr[i] = 4    (X)
i = 1    arr[i] = 2    (X)
i = 2    arr[i] = 0    (X)
i = 3    arr[i] = 10   (✓)
         return 3

Console:
3
```

And as soon as a function return something it will not do anything else and the function will break at that moment. So, whenever I am returning something from function then function stops executing and it just returns the value. So that's how function works.

#### 2. Let's say second element is 49:

```text
let arr = [4,2,0,10,8,30];

function searchElement(arr,x) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == x) {
            return i;
        }
    }
    return -1;
}

let result = searchElement(arr,49);
console.log(result);
```

```text
x = 49

i = 0    arr[i] = 4    (X)
i = 1    arr[i] = 2    (X)
i = 2    arr[i] = 0    (X)
i = 3    arr[i] = 10   (X)
i = 4    arr[i] = 8    (X)
i = 5    arr[i] = 30   (X)
i = 6    (X) fails
{loop ends}

So function return -1
```

### 11. Write a function that returns the number of negative numbers in an array let say [2,-9,17,0,1,-10,-4,8].

**A.**

```text
let arr = [2,-9,17,0,1,-10,-4,8];

function countNegatives(arr) {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            count = count + 1;
        }
    }
    return count;
}

let result = countNegatives(arr);
console.log(result);
```

```text
i = 0   arr[i] = 2    (X)
i = 1   arr[i] = -9   (✓)
i = 2   arr[i] = 17   (X)
i = 3   arr[i] = 0    (X)
i = 4   arr[i] = 1    (X)
i = 5   arr[i] = -10  (✓)
i = 6   arr[i] = -4   (✓)
i = 7   arr[i] = 8    (X)
i = 8   (X) fails
{loop ends}

Count:
0
1
2
3

return 3
```

**Note:** `count = count + 1` && `count++` && `++count` are all one and the same thing does.

### 12. Write a function that returns the largest number in an array let say [5,0,10,8,17,1]?

**A.**

```text
let arr = [5,0,10,8,17,1];

function findLargest(arr) {
    let largest = -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const result = findLargest(arr);
console.log(result);
```

```text
Largest      i =       arr[i]
-1           0         5    (✓)
5            1         0    (X)
10           2         10   (✓)
10           3         8    (X)
17           4         17   (✓)
17           5         1    (X)
             6 (X) fails
             {loop ends}

Console:
17
```

**Note:** Initializing largest variable with value -1 isn't the correct approach as it will create a bug in the array containing negative number.

So, there are two ways to fix the initial value of largest variable like:

1. Either initialize the value of largest with the smallest number as possible so in javascript there is something known as infinity and -infinity so I can initialize it like:

```text
let largest = -Infinity;
```

2. Or I can also initialize it like:

```text
let largest = arr[0];
```

### Dry run of above two ways below!

#### 1.

```text
let arr = [-9,-19,-3];

function findLargest(arr) {
    let largest = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const result = findLargest(arr);
console.log(result);
```

```text
Largest        i =       arr[i]
-Infinity      0         -9    (✓)
-9             1         -19   (X)
-3             2         -3    (✓)
               3 (X) fails
               {loop ends}

Console:
-3
```

#### 2.

```text
let arr = [5,0,10,8,17,1];

function findLargest(arr) {
    let largest = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const result = findLargest(arr);
console.log(result);
```

```text
Largest      i =       arr[i]
5            1         0    (X)
10           2         10   (✓)
10           3         8    (X)
17           4         17   (✓)
17           5         1    (X)
             6 (X) fails
             {loop ends}

Console:
17
```

### 13. What is the logic of Infinity and -Infinity?

**A.** Logic:

1. Finding the largest I start with -Infinity (the smallest possible value) so that any real number in the array is definitely beats it on the first comparison.
2. Finding the smallest I start with Infinity (the largest possible value) so that any real number beats it going in the other direction.

### 14. Write a function that returns the smallest number in an array let say [-9,-19,-3]?

**A.**

```text
let arr = [-9,-19,-3];

function findSmallest(arr) {
    let smallest = Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

const result = findSmallest(arr);
console.log(result);
```

```text
Smallest      i =       arr[i]
Infinity      0         -9    (✓)
-9            1         -19   (✓)
-19           2         -3    (X)
              3 (X) fails
              {loop ends}

Console:
-19
```
