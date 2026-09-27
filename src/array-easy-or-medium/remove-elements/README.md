## Remove Element

### 50. LeetCode: 27 — Remove Element

The notebook starts with:

```text
nums = [3,2,1,5,3,4,8,3]
```

The value to remove is:

```text
val = 3
```

The idea is to remove the occurrences of `3` **in-place**.

### Two Pointers

```text
x → position where the next valid element should be placed
i → pointer traversing the array
```

The notebook marks the elements equal to `val` with `X`.

```text
nums = [3,2,1,5,3,4,8,3]
        X       X       X
```

The elements which are not equal to `3` are kept.

## Remove Element — Code

```text
let x = 0;

for(let i = 0; i < n; i++) {

    if(arr[i] != val) {
        arr[x] = arr[i];
        x = x + 1;
    }
}

return x;
```

### Dry Run — `val = 3`

Initial:

```text
[3,2,1,5,3,4,8,3]
```

`3` is removed/ignored.

The remaining values are compacted toward the beginning.

The notebook's dry run shows the movement of the valid elements, eventually producing the logical prefix:

```text
[2,1,5,4,8,...]
```

The important rule is:

```text
if(arr[i] != val)
    arr[x] = arr[i]
```

Then:

```text
x = x + 1
```

If:

```text
arr[i] == val
```

nothing is copied and `x` does not move.

### Return Value

Unlike the previous problem, here we return:

```text
return x;
```

because `x` itself represents the number of remaining elements.

## Remove Element — Final Dry Run

The notebook continues the dry run for:

```text
val = 3
```

Starting array:

```text
[3,2,1,5,3,4,8,3]
```

The traversal pointer `i` moves through every position.

The write pointer `x` moves only when a value is **not** equal to `3`.

The final logical prefix contains:

```text
[2,1,5,4,8]
```

The remaining positions are not important.

The notebook emphasizes:

```text
x = number of elements remaining
```

Therefore:

```text
return x;
```
