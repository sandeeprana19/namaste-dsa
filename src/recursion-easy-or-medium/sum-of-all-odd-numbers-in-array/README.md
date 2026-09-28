## 69. Sum of all odd numbers in an array?

### A. Let's solve it

## 1. Example 1

```js
let arr = [5, 2, 0, 3, 6, 7];
```

## 2. Approach 1

```js
function sum(n) {
  let isOdd = arr[n] % 2 != 0;

  if (n == 0) {
    if (isOdd) {
      return arr[n];
    } else {
      return 0;
    }
  }

  if (isOdd) {
    return arr[n] + sum(n - 1);
  } else {
    return 0 + sum(n - 1);
  }
}
```

## Approach 2

```js
function sum(n) {
  let isOdd = arr[n] % 2 != 0;

  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1));
```

---

## Dry Run

### Recursion Tree

```text
sum(5) ⇒ return 15
   ↓
7 + sum(4)
   ↓
0 + sum(3)
   ↓
3 + sum(2)
   ↓
0 + sum(1)
   ↓
0 + sum(0)
   ↓
5
```

The return values shown in the notebook are:

```text
sum(0) → 5
sum(1) → 5
sum(2) → 5
sum(3) → 8
sum(4) → 8
sum(5) → 15
```

## Call Stack

The notebook shows the following call-stack progression:

```text
                         sum(0)
                          ↑
                          5

                  0 + sum(0)      sum(1)
                       ↑
                       5

                  0 + sum(1)      sum(2)
                       ↑
                       5

                  3 + sum(2)      sum(3)
                       ↑
                       8

                  0 + sum(3)      sum(4)
                       ↑
                       8

                  7 + sum(4)      sum(5)
                       ↑
                       15
```

Final result:

```text
15
```
