# Missing Number

## 56. LeetCode: Missing Number?

The notebook starts the next problem.

### Approach / Problem Setup

```text
n = 1 - 10⁴

n = 5
```

Example array:

```text
[0, 1, 2, 4, 5]
```

The missing number is:

```text
3
```

The notebook writes:

```text
return missingNumber;
```

and:

```text
P.T.O.
```

## 2. Approach 1 — (Brute Force)

```text
n = 5

[4, 0, 2, 1, 5]
```

### Sort

```text
[0, 1, 2, 4, 5]
     +1   +1   +1

arr[i] == arr[i-1] + 1
```

The notebook marks the missing value as:

```text
3
```

The note says this is not the optimized solution because the time complexity is:

```text
O(n log n)
```

### Approach 2 — O(n)

```text
[4, 0, 2, 1, 5]

n = 5

sum(0 + 1 + 2 + 3 + ... + n)
= n(n + 1) / 2

(0 + 1 + 2 + 3 + 4 + 5)
= 5 × 6 / 2
= 15
```

Sum of the array:

```text
Sum = 12
```

Therefore:

```text
Difference = 3 → Missing Number
```
