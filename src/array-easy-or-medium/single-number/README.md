# Single Number

## 57. LeetCode: 136. Single Number?

### A. Let's try to solve it

```text
[3, 1, 5, 4, 1, 5, 3]
```

The notebook identifies:

```text
4
↓
{Single Number}
```

```text
return singleNumber;
```

The first approach is based on the observation that all numbers will be duplicated except for one.

The notebook explains that a hash map / hash table can be maintained while looping through the whole array.

```text
"3" : 2
"1" : 2
"5" : 2
"4" : 1
```

After the loop ends, go through each value in the hash map and find the value whose count is `1`, then return it.

### Approach 1

```text
[3, 1, 5, 4, 1, 5, 3]
```

Hash-map idea:

```text
{
    "3": 2,
    "1": 2,
    "5": 2,
    "4": 1
}
```

```text
count = 1
→ return 4
```

## Time Complexity

```text
O(n)
```

## Space Complexity

The notebook first notes:

```text
O(n/2) ⇒ O(n)
```

For the hash-map approach:

```text
Time Complexity = O(n)
```

The notebook explains that going through the array is `O(n)` and going through the hash map is also `O(n)`, so the overall time complexity is:

```text
O(n)
```

The space complexity of the hash map is:

```text
O(n)
```

because the hash map requires extra space and approximately `n/2` key-value pairs may be stored, which still simplifies to:

```text
O(n)
```

### Approach 2

```text
[3, 1, 5, 4, 1, 5, 3]
```

There is a bitwise XOR mathematical operation that can be used to solve this problem.

## Bitwise XOR

```text
a (XOR) 0 = a

a (XOR) a = 0

a ⊕ b ⊕ b ⊕ a ⊕ c = c
```

The notebook notes the important principle:

```text
If I keep doing ⊕ then all the duplicates
will be removed and it will return the
unique element.
```

The notebook continues the XOR explanation:

```text
So whenever I have to eliminate duplicates,
I always have to use XOR (⊕) for it across
any similar kind of problems.
```

After using XOR:

```text
Time Complexity: O(n)

Space Complexity: O(Nothing)
```
