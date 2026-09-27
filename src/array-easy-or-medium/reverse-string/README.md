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

## Example 2 — Odd Number of Elements

The notebook gives:

```text
n = 5
n/2 = 2
```

For an odd number of elements, only the first half needs to be swapped.

```text
| i | n-1-i | Swap       |
|---|-------|------------|
| 0 | 4     | swap(0,4)  |
| 1 | 3     | swap(1,3)  |
```

The middle element does not need a swap.

The notebook notes:

> I don't have to do anything for this if the number of elements is odd.

### Difference — Even vs Odd Length

```text
| Even Length                         | Odd Length                         |
|-------------------------------------|------------------------------------|
| n = 6                               | n = 5                              |
| n/2 = 3                             | n/2 = 2                            |
| 3 swaps                             | 2 swaps                            |
| swap(0,5)                           | swap(0,4)                          |
| swap(1,4)                           | swap(1,3)                          |
| swap(2,3)                           | middle element stays in place      |
```

### Core Rule

```text
for(let i = 0; i < n/2; i++) {
    swap(i, n-1-i);
}
```

So, whether `n` is even or odd, we only traverse the **first half** of the array.

---

# Quick Reference — Differences From These Pages

## Linear Search vs Binary Search

```text
| Linear Search                  | Binary Search                    |
|--------------------------------|----------------------------------|
| Works on unsorted array        | Requires sorted array            |
| Search space reduces by 1      | Search space reduces by half     |
| O(n)                           | O(log n)                         |
| n = 100 → 100 lines            | n = 100 → 7 lines                |
| n = 1000 → 1000 lines          | n = 1000 → 10 lines              |
```

## Nested Loops vs Independent Loops

```text
| Nested Loops                   | Independent Loops                |
|--------------------------------|----------------------------------|
| n × n                          | n + n + n                        |
| O(n²)                          | O(3n) → O(n)                     |
| Growth is quadratic             | Growth is linear                 |
```

## Sorted Array Types

```text
| Increasing       | Decreasing       | Non-Decreasing       |
|------------------|------------------|----------------------|
| a[i+1] > a[i]   | a[i+1] < a[i]   | a[i+1] >= a[i]      |
| No duplicates    | No duplicates    | Duplicates allowed  |
```

## Time vs Space Complexity

```text
| Time Complexity                  | Space Complexity                  |
|----------------------------------|------------------------------------|
| How many operations are needed   | How much extra space is needed     |
| Depends on execution/work        | Depends on additional memory       |
| Example: O(n)                    | Example: O(1) or O(n)              |
```

## In-Place vs New Array

```text
| In-Place                         | New Array                         |
|----------------------------------|-----------------------------------|
| Same array is modified           | Separate array is created         |
| Saves extra result-array space   | Uses additional space             |
| First k positions are important  | New array stores the result       |
```

## Pointer `x` vs Pointer `i`

```text
| x / Write Pointer                | i / Traversal Pointer             |
|----------------------------------|-----------------------------------|
| Tracks output/write position     | Traverses the input               |
| Moves only when needed           | Usually moves every iteration     |
| Places valid/unique elements     | Checks current element             |
```

## Reverse String — Even vs Odd

```text
| Even n                           | Odd n                             |
|----------------------------------|-----------------------------------|
| n/2 swaps                        | n/2 swaps                         |
| Every element has a pair        | One middle element has no pair    |
| Middle is swapped as a pair      | Middle remains unchanged          |
```
