# Merge Sorted Array

## 53. LeetCode: 88. Merge Sorted Array

The notebook first breaks the problem into smaller units.

### 1. Given arrays

```text
num1 = [1, 2, 3, 0, 0, 0]

Length
m = 3

num2 = [2, 5, 6]

n = 3
```

The expected merged result is:

```text
num1 = [1, 2, 2, 3, 5, 6]

Sorted
```

## Merge Sorted Array — Approach 1

### Approach 1: Brute Force

The notebook shows:

```text
num1 = [1, 2, 3, 2, 5, 6]
```

Then:

```js
num1.sort();
```

Return:

```text
[1, 2, 2, 3, 5, 6]
```

The notebook explains that this is a brute-force approach and therefore isn't a very good solution.

The first step is:

```text
put num2 elements into num1
```

This operation has:

```text
O(m + n)
```

Then sorting all elements takes:

```text
O((m + n) log(m + n))
```

So the overall approach is dominated by sorting.

## Approach 2

The notebook starts an optimized approach using pointers.

```text
n1 = [1, 2, 3, 0, 0, 0]
n2 = [2, 5, 6]
```

It first makes a copy of the valid elements:

```text
n1Copy = [1, 2, 3]
n2     = [2, 5, 6]
```

The goal is to fill `n1` in sorted fashion.

## Merge Sorted Array — Approach 2 Dry Run

### Example 1

```text
n1 = [2, 7, 10]

p1 ← p1

n2 = [1, 2, 3]

p2 → p2 → p2
```

The merged result is:

```text
n3 = [1, 2, 2, 3, 7, 10]

Sorted
```

The notebook then notes:

> Now, this is not the best approach 2 to solve this problem but this is another optimize approach.

### Complexity of Approach 2

```text
1. Time Complexity: O(m + n)

2. Space Complexity: O(m)
```

## Approach 3 — Case 1

```text
n1 = [1, 2, 3, 0, 0, 0]
      p1

n2 = [2, 5, 6]
      p2 ← p2
```

The notebook begins the in-place merging process.

After comparison:

```text
n1 = [1, 2, 3, 0, 0, 6]
```

with the pointers moving through the arrays.

## Merge Sorted Array — Approach 3

Continuing Case 1:

```text
n1 = [1, 2, 3, 0, 5, 6]
          p1

n2 = [2, 5, 6]
      p2
```

Next:

```text
n1 = [1, 2, 3, 3, 5, 6]
```

Then:

```text
n1 = [1, 2, 2, 3, 5, 6]

p1
```

The notebook marks:

```text
p2
     (1) p2
       ↓
{ p2  (X) }
    {Break}
```

The idea is that once the second array has been completely consumed, the loop can break.

## Case 2

```text
n1 = [2, 5, 6, 0, 0, 0]
      p1 ← p1

n2 = [1, 2, 3]
      p2
```

The dry run continues on the next page.

## Merge Sorted Array — Approach 3 — Case 2

Initial:

```text
n1 = [2, 5, 6, 0, 0, 0]
      p1 ← p1

n2 = [1, 2, 3]
      p2
```

After moving the smaller values:

```text
n1 = [2, 5, 6, 0, 5, 6]
      p1 ← p1

n2 = [1, 2, 3]
      p2 ← p2
```

Then:

```text
n1 = [2, 5, 6, 3, 5, 6]
      p1 ← p1

n2 = [1, 2, 3]
      p2
```

Then the pointers move toward the remaining elements.

```text
n1 = [2, 5, 2, 3, 5, 6]
       (X) p1
            ↑   ↑

n2 = [1, 2, 3]
      p2
```

The notebook shows the pointer movement and comparison of values.

Continuing the merge:

```text
n1 = [1, 2, 2, 3, 5, 6]
      (X) ← p1

n2 = [1, 2, 3]
```

The result is:

```text
n1 = [1, 2, 2, 3, 5, 6]
```

The notebook then starts the next problem.
