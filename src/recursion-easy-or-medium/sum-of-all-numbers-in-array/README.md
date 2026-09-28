# Sum of all numbers in Array

## 68. Sum of all elements in an Array?

### A. Let's understand and solve it

## 1. Example 1

```text
arr = [5, 3, 2, 0, 1]

index: 0  1  2  3  4
```

### Dry Run

```text
sum[5, 3, 2, 0, 1]
      ↓
5 + sum[3, 2, 0, 1]
          ↓
       3 + sum[2, 0, 1]
               ↓
            2 + sum[0, 1]
                    ↓
                 0 + sum[1]
                         ↓
                         1
```

---

## 2. Approach 1

```js
function sum(n) {
  if (n == 0) return arr[n];

  return arr[n] + sum(n - 1);
}
```

Call:

```js
sum(arr.length - 1);
```

## Dry Run

### Recursion Tree

```text
sum(4) ⇒ return 11
   ↓
1 + sum(3)
   ↓
0 + sum(2)
   ↓
2 + sum(1)
   ↓
3 + sum(0)
   ↓
5
```

The values shown during the return are:

```text
sum(4) → 11
sum(3) → 10
sum(2) → 8
sum(1) → 5
sum(0) → 5
```

### Recursion Formula

```text
sum(n) = arr[n] + sum(n - 1);
```

## Call Stack

```text
                    sum(0)
                      ↑
                      5

              sum(1)
                 ↑
                 3 + sum(0)
                 = 5

              sum(2)
                 ↑
                 2 + sum(1)
                 = 8

              sum(3)
                 ↑
                 0 + sum(2)
                 = 10

              sum(4)
                 ↑
                 1 + sum(3)
                 = 11
```

The notebook marks:

```text
{return}
```

at the end of the call-stack dry run.
