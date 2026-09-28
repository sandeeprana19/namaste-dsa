# Max Consecutive Ones

## 55. LeetCode: 485. Max Consecutive Ones?

The notebook starts with examples.

### Example 1

```text
[0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]
```

The consecutive groups are:

```text
0 | 1 1 1 | 0 0 0 | 1 1 | 0 | 1 | 0 | 1 1 1 1 1
      3          2        1       5
```

Therefore:

```text
return 5;
```

The notebook identifies `5` as the maximum consecutive count.

### Example 2

```text
[1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]
```

Initial state:

```text
curCount = 0
         = 1

maxCount = 0
```

The dry run continues on the next page.

## Max Consecutive Ones — Example 2 Dry Run

```text
nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]
        0  1  2  3  4  5  6  7  8  9  10 11
```

At the first consecutive ones:

```text
curCount = 1 + 1
         = 2

maxCount = 0
```

Then after encountering `0`:

```text
curCount = 0
maxCount = 2
```

Next consecutive group:

```text
nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]

                   i → i → i → i
```

The current count becomes:

```text
curCount = 3
maxCount = 2
```

```text
nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]
        0  1  2  3  4  5  6  7  8  9  10 11
```

At the group around indexes `7` and `8`:

```text
curCount = 2
maxCount = 3
```

After `0`:

```text
curCount = 0
maxCount = 3
```

The loop reaches the end:

```text
(X) → {loop ends}
```

At the final group:

```text
curCount = 2
maxCount = 3
```

The notebook notes:

```text
Whatever will be the maximum in I'll return that
```

Therefore:

```text
return maxCount;
```

Final answer:

```text
3
```

## Example 3

```text
[1, 1, 0, 1, 1]
```

Initial:

```text
curCount = 2
maxCount = 0
```

The next page continues the dry run.

## Max Consecutive Ones — Example 3

```text
nums = [1, 1, 0, 1, 1]
        0  1  2  3  4
```

Initial:

```text
curCount = 0
maxCount = 2
```

After the next group of ones:

```text
curCount = 2
maxCount = 2
```

The loop ends:

```text
(X) → {loop ends}
```

The notebook notes:

```text
curCount = 2
maxCount = 2

{Whatever will be the maximum
 in I'll return that}
```

So:

```text
return maxCount;
```

Result:

```text
2
```

## Example 4

```text
nums = [1, 0, 1, 1, 0, 1]
        0  1  2  3  4  5
```

Initial:

```text
curCount = 1
maxCount = 0
```

After the first `0`:

```text
curCount = 0
maxCount = 1
```

Next:

```text
nums = [1, 0, 1, 1, 0, 1]

             i → i
```

The consecutive `1`s give:

```text
curCount = 2
maxCount = 1
```

Then at the next zero:

```text
curCount = 0
maxCount = 2
```

## Max Consecutive Ones — Example 4 Continued

```text
nums = [1, 0, 1, 1, 0, 1]
        0  1  2  3  4  5
```

At the final `1`:

```text
curCount = 1
maxCount = 2
```

The loop ends:

```text
(X) → {loop ends}
```

Final:

```text
curCount = 1
maxCount = 2
```

The notebook notes:

```text
Whatever will be the maximum
in I'll return that
```

Therefore:

```text
return maxCount;
```

Result:

```text
2
```
