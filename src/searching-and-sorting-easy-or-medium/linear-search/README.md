## Linear Search

### 76. Define Linear Search?

### A.

Linear Search is an algorithm which searches for an element inside an
array.

## 77. How Linear Search works?

Suppose there is an array and I need to search a target element inside
the array and then return its index.

Example:

```text
arr = [4, 9, 1, 0, 2]
target = 0
```

How do I search the target inside an array to find out whether it is
present inside the array or not?

The approach is:

```text
I will iterate through an array and I will go to
each element one by one and check whether a
particular element is the target element or not.

And if I find that element then I will exit the loop
and I will just return the index of that position.
```

### Code

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }

  return -1;
}
```

The notebook notes:

```text
if target isn't inside an array → return -1
```
