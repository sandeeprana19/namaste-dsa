## Remove Duplicates

### 47. What are:

1. Sorted, increasing order?
2. Sorted, decreasing order?
3. Sorted, non-decreasing order?

### 1. Sorted, Increasing Order

```text
[1, 2, 4, 8, 12]
```

Condition:

```text
a[i+1] > a[i]
```

### 2. Sorted, Decreasing Order

```text
[12, 9, 8, 7, 5, 1]
```

Condition:

```text
a[i+1] < a[i]
```

### 3. Sorted, Non-Decreasing Order

```text
[1,2,3,3,3,4,4,5,8,9]
```

Condition:

```text
a[i+1] >= a[i]
```

The notebook specifically points out that **duplicates are allowed** in non-decreasing order.

### Difference — Three Sorted Orders

```text
| Sorted Increasing       | Sorted Decreasing      | Sorted Non-Decreasing      |
|-------------------------|------------------------|----------------------------|
| [1,2,4,8,12]            | [12,9,8,7,5,1]         | [1,2,3,3,3,4,4,5,8,9]     |
| a[i+1] > a[i]           | a[i+1] < a[i]          | a[i+1] >= a[i]             |
| No duplicates           | No duplicates           | Duplicates allowed         |
```

### 48. What do you mean by Integer?

The notebook answer:

```text
Integer means both positive numbers and negative numbers.
```

## 49. Remove Duplicates from Sorted Array

Given an integer array `nums`, sorted in **non-decreasing order**, remove the duplicates in-place such that each unique element appears only once.

The relative order of the elements should be kept the same.

Then return the number of unique elements in `nums`.

### Problem Requirements

Consider the number of unique elements in `nums` to be `k`.

To get accepted:

- Change the array `nums` such that the **first `k` elements** of `nums` contain the unique elements in the order they were originally present.
- The remaining elements of `nums` are not important.
- The size of `nums` is also not important.
- Return `k`.

### In-Place

The notebook starts with:

```text
[0,0,1,1,1,2,2,3,3,4]
```

After modifying the same array:

```text
[0,1,2,3,4,_,_,_,_,_]
```

```text
5 unique
remaining elements → don't care
```

### Difference — In-Place vs New Array

```text
| In-Place                                | New Array                              |
|-----------------------------------------|----------------------------------------|
| Modify the same nums array              | Create a separate array                |
| No new result array                     | Extra result array is created          |
| First k elements are unique             | Unique elements are copied to new arr  |
| Remaining elements don't matter         | Additional memory is used              |
```

### 1. In-Place

The first `k` elements of the **same array** must contain the unique values.

Example:

```text
[0,0,1,1,1,2,2,3,3,4]
```

becomes logically:

```text
[0,1,2,3,4, ...]
```

### 2. Relative Order

The relative order of the unique elements should remain the same.

For example:

```text
[0,1,2,3,4]
```

should **not** become:

```text
[0,4,3,1,2]
```

### 3. Return the Number of Unique Elements

If the unique values are:

```text
[0,1,2,3,4]
```

then:

```text
k = 5
```

So return:

```text
5
```

### 4. What does `k` mean?

The notebook explains that `k` is simply the number of unique elements.

```text
nums = [0,0,1,1,1,2,2,3,3,4]

unique = [0,1,2,3,4]

k = 5
```

The problem only cares about the first `k` positions:

```text
[0,1,2,3,4 | remaining elements...]
 ^^^^^^^^^
 first k elements
```

### 5. First `k` Elements

The notebook emphasizes:

> The first `k` elements in the array should be the unique elements.

The remaining elements of `nums` are not important, and the size of `nums` does not need to be changed.

### 6. Custom Judge

The notebook notes that a **Custom Judge** can read/check the modified array and the returned value.

### 7. Whenever I read problem statement

The notebook notes:

> I always have to go through the examples.

### 8. Constraints

The notebook notes that there is no need to worry about the constraints at this point.

## 49. Remove Duplicates — Build a Solution

### 9. Let's build a solution now

Input:

```text
[0,0,1,1,1,2,2,3,3,4]
```

### a. Two Pointers

The notebook introduces two pointers:

```text
x → position where the next unique element should be placed
i → array traversal pointer
```

### Difference — Pointer `x` vs Pointer `i`

```text
| Pointer x                         | Pointer i                         |
|-----------------------------------|-----------------------------------|
| Maintains unique/write position   | Traverses the complete array      |
| Moves when a new value is found   | Moves one position at a time      |
| Stores the next unique value      | Checks current array value        |
```

### b. What do the two pointers do?

```text
1st pointer:
→ index where the unique element needs to be placed

2nd pointer:
→ position where we are currently traversing
→ helps in shifting/identifying the unique element
```

### c. Array Traversal

The notebook says:

> Always assume there would be some pointer who would be traversing through the below array.

Example:

```text
[0,0,1,1,1,2,2,3,3,4]
 ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
 i i i i i i i i i i
```

The notebook explains that array traversal means traversing through an array from one position to another.

### d. Pointer Movement / Dry Run

The `i` pointer traverses the array while `x` identifies where the next unique element should go.

The duplicate values are ignored.

The unique values are placed at the beginning:

```text
[0,1,2,3,4,_,_,_,_,_]
```

The loop ends after traversing the complete array.
The notebook writes the two-pointer solution:

```text
let x = 0;

for(let i = 0; i < n; i++) {

    if(a[i] > a[x]) {
        x = x + 1;
        a[x] = a[i];
    }
}

return (x + 1);
```

### Why `a[i] > a[x]`?

Because the input array is sorted in **non-decreasing order**.

So, when:

```text
a[i] > a[x]
```

we know that the current value is a **new unique value**.

If:

```text
a[i] == a[x]
```

it is a duplicate, so we do not move `x`.

### Dry Run

Start:

```text
x = 0
```

Input:

```text
[0,0,1,1,1,2,2,3,3,4]
```

As `i` traverses:

```text
0 → same as a[x] → duplicate → ignore
0 → same as a[x] → duplicate → ignore
1 → greater      → x++ → place 1
1 → duplicate    → ignore
1 → duplicate    → ignore
2 → greater      → x++ → place 2
2 → duplicate    → ignore
3 → greater      → x++ → place 3
3 → duplicate    → ignore
4 → greater      → x++ → place 4
```

Final logical array:

```text
[0,1,2,3,4,_,_,_,_,_]
```

```text
x = 4

x + 1 = 5

return (x + 1)
```

Therefore:

```text
5
```

unique elements are returned.
