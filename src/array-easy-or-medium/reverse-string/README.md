# Reverse String

## 51. LeetCode: 344 — Reverse String

### Example 1

Given:

```text
s = ["a","k","s","h","a","y"]
```

```text
n = 6
```

The notebook shows the swaps:

```text
swap(0,5)
swap(1,4)
swap(2,3)
```

General form:

```text
swap(i, n-1-i)
```

### Swap Pairs

```text
| i | n-1-i | Swap              |
|---|-------|-------------------|
| 0 | 5     | swap(0,5)          |
| 1 | 4     | swap(1,4)          |
| 2 | 3     | swap(2,3)          |
```

After the swaps:

```text
["y","a","h","s","k","a"]
```

### Q&A — How many times do I have to swap?

For:

```text
n = 6
```

we perform:

```text
n/2 = 6/2 = 3 swaps
```

So the notebook says:

> I basically have to swap the first half of the array with the last half of the array.

## Reverse String — Code

For:

```text
n = 6
n/2 = 3
```

The notebook writes:

```text
s = ["a","k","s","h","a","y"]

for(let i = 0; i < n/2; i++) {
    swap(i, n-1-i);
}
```

### Dry Run

```text
| i | n-1-i |
|---|-------|
| 0 | 5     |
| 1 | 4     |
| 2 | 3     |
| 3 | loop ends |
```

The swaps produce:

```text
["y","a","h","s","k","a"]
```

### Reverse Array

```text
Original:
["a","k","s","h","a","y"]

          ↓ reverse

Reverse:
["y","a","h","s","k","a"]
```

## Dry Run — Reverse Array

The notebook shows a dry run for reversing:

```text
s = [h, e, l, l, o]

n = 5
n / 2 = 2
```

Pointers are moved from the two ends toward the middle.

```text
        0   1   2   3   4
s = [   h,  e,  l,  l,  o   ]

        ↘               ↙
```

After swapping the first and last elements:

```text
s = [o, e, l, l, h]
```

Then the next pair is considered:

```text
s = [o, l, l, e, h]
```

The loop stops when the pointers meet/cross.

### Reverse Array

```text
Swap ???
```

### Swap using a temporary variable

```text
a = 10
b = 20

Output:
a = 20
b = 10
```

The notebook writes:

```text
temp = a;        // 10
a = b;           // 20
b = temp;        // 10
```
