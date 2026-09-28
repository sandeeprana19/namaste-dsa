# Move Zeros

## 54. LeetCode: 283. Move Zeros

### Approach 1

Given:

```text
nums = [0, 1, 0, 3, 12]
```

Create a new array:

```text
[1, 3, 12, 0, 0]
```

Then:

```text
return
```

But the notebook says this approach isn't correct for the problem because the problem statement clearly mentions doing the operation **in-place**.

The important point written in the notebook is:

> I have to modify the same array and I don't have to create a new array.

Therefore, a new-array solution is not the desired approach.

### Approach 2 — Example 1

```text
nums = [0, 1, 0, 3, 12]
```

The notebook explains:

> I'll check the value one by one and I will see if it is a non-zero value. If it is a non-zero value then I will do a shift that non-zero value to its left and it will keep shifting all non-zero values within an array to the left.

At the end:

> I just have to make sure that all the zeros comes at the end of an array.

## Move Zeros — Approach 2

The notebook introduces `x` as:

```text
x → position where I need to fill next non-zero number
```

Starting array:

```text
nums = [0, 1, 0, 3, 12]
        ↑
        i
```

The algorithm checks each value.

After moving the first non-zero value:

```text
nums = [1, 1, 0, 3, 12]

       x   i
```

Then the next non-zero value is shifted:

```text
nums = [1, 3, 0, 3, 12]

          x  i
```

Then:

```text
nums = [1, 3, 12, 3, 12]

             x
```

The loop ends after processing the array.

Then the remaining positions are filled with zeros:

```text
nums = [1, 3, 12, 0, 0]
```

The notebook writes the logic approximately as:

```js
for (...) {
    if (arr[i] == non-zero) {
        shift;
        x++;
    }
}
```

After all non-zero values are shifted to the left:

```text
Fill remaining positions with 0
```

## Move Zeros — Example 2

```text
nums = [0, 1, 0, 0, 3, 2, 0, 0]
        0  1  2  3  4  5  6  7
```

Initial pointers:

```text
x → x
i → i
```

After moving `1`:

```text
nums = [1, 0, 0, 0, 3, 2, 0, 0]
```

Then `3` is moved:

```text
nums = [1, 3, 0, 0, 3, 2, 0, 0]
```

Then `2` is moved:

```text
nums = [1, 3, 2, 0, 3, 2, 0, 0]
```

The loop ends.

Finally, fill all remaining positions with zero:

```text
nums = [1, 3, 2, 0, 0, 0, 0, 0]
```

The notebook marks:

```text
{Fill with 0's}
```

and:

```text
P.T.O.
```

## Move Zeros — Example 3

```text
nums = [1, 2, 3]
        0  1  2

x → x
i → i
```

The array already contains only non-zero values.

Pointer movement:

```text
nums = [1, 2, 3]
          x → x
          i → i
```

At the end:

```text
nums = [1, 2, 3]  ✓
```

The loop ends after reaching the end of the array.

## Example 4

```text
nums = [0, 0, 0, 0]
        0  1  2  3

i → i
```

The values are all zero.

The pointer continues:

```text
nums = [0, 0, 0, 0]
           i → i
```

The loop ends.

Final:

```text
nums = [0, 0, 0, 0]  ✓
```
