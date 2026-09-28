# Insertion Sort

## 87. How insertion sort works?

### A.

Now, let's take the example of an array and see that how insertion sort
works on an array:

1.  So we know, if there is only 1 card that means it already sorted.

So, suppose if `7` is the 1st element, so it is already sorted, meaning
this is my sorted side of card and from `4` to `2` is not sorted like:

```text
[7, 4, 3, 5, 1, 2]

[Sorted] [Not Sorted]
```

2.  Now I will take element `4` from not sorted one.

The insertion-sort dry run continues:

> by one and I will try to put it in my sorted place.
>
> So, I will check is `4` greater than `7` or else less than `7` so it
> is less than `7` that means I have to move this `7` in index `1` and
> `4` in index `0` like:

```text
Index:  0  1  2  3  4  5

       [7, 4, 3, 5, 1, 2]
        ↘
        4 is compared with 7

Sorted:     [4, 7]
Not Sorted:       [3, 5, 1, 2]
```

```text
[4, 7, 3, 5, 1, 2]
 S     NS
```

So, what I have did above is I have checked my current element `4` with
the previous element `7` and when I found that previous is greater than
`4` I have move this previous to `+1` and then I have move the current
to its index. And the rest of the elements remains the same.

And now, `4` and `7` are sorted and `3` to `2` are not sorted.

### 3.

Now, I will take my next card `3` and then I will try to check is `3`
greater than `7` or less than `7`, meaning I will check this current
element `3` with the previous element `7` so like this is `3` is greater
than or less than `7` and `3` is less than `7`.

So, I will move this `7` over in index `2` and the rest of the elements
like `5` to `2` remains the same.

Now, I will compare my current element `3` with previous element `4` so
now again `4` is greater so I will move it also by `+1` index so my `4`
will come over in index `1`.

And now, there is no more elements left to compare with current element
`3` that means index `0`.

`0` is the only place `3` can come.

And now, `3` to `7` are sorted part and `5` to `2` are not sorted part.

Like:

```text
Index:  0  1  2  3  4  5

       [4, 7, 3, 5, 1, 2]
        └── S ──┘ └── NS ──┘
```

After inserting `3`:

```text
[3, 4, 7, 5, 1, 2]
 S         NS
```

### 4.

Now, I will take `5` current element and `1` and `2` are remaining that
same because I will just check for current element `5` and now I will
check my `5` with my previous element `7`.

So just like cards, I will check my current element `5` one by one by
all sorted elements and I will see where it fits.

So, I will check my current element `5` with `7` so that means `7` is
greater so my previous element `7` is greater so I will move my previous
element `7` to the previous `+1` like:

```text
[3, 4, 7, 5, 1, 2]
       p  curr

{p < curr} → p = p + 1
```

After moving `7`:

```text
[3, 4, 5, 7, 1, 2]
 S          NS
```

So now, I will check with the next previous `4` and the previous element
`4` is less than current element `5` so that means I have found a place
where current element `5` needs to be.

`5` needs to go to the `p+1` position so `5` will come over in index
`2`.

### 5.

Now, the current element is `1` and now I will check my current element
`1` with my previous element `7` and I will check is my current element
`1` is less than my previous element `7` and yes it is so I will move my
previous element `7` to `+1` so I will `p = p + 1`.

So I will move this previous element `7` over in index `4` like:

```text
Index:  0  1  2  3  4  5
       [3, 4, 5, 7, 1, 2]
                   p  curr

{p = p + 1}       {curr < p}
```

After moving `7`:

```text
[3, 4, 5, 7, 1, 2]
            7, 2
```

Now, I will compare my current element `1` with next previous element
`5` and my current element `1` is less than next previous element `5` so
this next previous element `5` also goes `+1` so `p = p + 1` so `5` will
also move one step like:

```text
[3, 4, 5, 7, 1, 2]
          p       curr

{p = p + 1}       {curr < p}
```

After moving `5`:

```text
[3, 4, 5, 7, 1, 2]
       5, 7, 2
```

Now, I will compare my current element `1` with my next previous element
`4` and yes my next previous element `4` is also greater so I have to
move `4` also and `4` will also move `+1` so `p = p + 1`.

So, `4` will also move one step like:

```text
Index:  0  1  2  3  4  5
       [3, 4, 5, 7, 1, 2]
           p           curr

{p = p + 1}       {curr < p}
```

After moving:

```text
[3, 4, 5, 7, 1, 2]
     4, 5, 7, 2
```

Now, my next previous element is `3` so it is greater than `1` and yes
it is greater than `1` so I have to move this previous element `3` to
`+1` so `p = p + 1` so `3` will also move over in index `1` like:

```text
Index:  0  1  2  3  4  5
       [3, 4, 5, 7, 1, 2]
        p              curr

{p = p + 1}       {curr < p}
```

After moving:

```text
[3, 4, 5, 7, 1, 2]
```

Now there is no previous element so when there is no previous element
that means index `0` is the place where my current element `1` should
be. So `1` will move over in index `0` like:

```text
[3, 4, 5, 7, 1, 2]
 ↑                ↑
p                curr

{No previous element?}
```

After insertion:

```text
[1, 3, 4, 5, 7, 2]
 S             NS
```

### 6.

Now, my current element is `2` and I will compare my current element `2`
with my sorted list and I will try to place this current element `2`
somewhere.

Now, I will keep checking my current element `2` with my previous
element.

So I will compare my current element `2` with my previous element `7`.

So my previous element `7` is greater than my current element `2` so I
will move this `7` to `p+1` so `7` will come over in index `5` like:

```text
Index:  0  1  2  3  4  5
       [1, 3, 4, 5, 7, 2]
                    p  curr

{p > curr} → {p = p + 1}
```

After moving:

```text
[1, 3, 4, 5, 7, 2]
                 7
```

Now, my next previous is `5` like see previous was `7` and I had moved
this previous `7` to `+1`, now I will do `p--` then my previous become
`5`.

Now, I will compare `5` is greater than `2` and yes it is so I will move
this previous `5` to `p+1` so my `5` will move over in index `4` like:

```text
Index:  0  1  2  3  4  5
       [1, 3, 4, 5, 7, 2]
               p     curr

{p > curr} → {p = p + 1}
```

After moving:

```text
[1, 3, 4, 5, 7, 2]
             5, 7
```

Now, I will check my current `2` with my next previous `4` so my next
previous `4` is still greater so I will move this `4` to `p = p + 1`
like:

```text
[1, 3, 4, 5, 7, 2]
          p           curr

{p > curr} → {p = p + 1}
```

After moving:

```text
[1, 3, 4, 5, 7, 2]
          4, 5, 7
```

Now, I will check with next previous `3` and next previous `3` is also
greater than `2` so I move this previous `3` to `p = p + 1` so this `3`
will move one index `2` position like:

```text
Index:  0  1  2  3  4  5
       [1, 3, 4, 5, 7, 2]
           p           curr

{p > curr}
{p = p + 1}
```

After moving:

```text
[1, 3, 4, 5, 7, 2]
       3, 4, 5, 7
```

Now, it will check with next previous `1` and now my current element `2`
is greater so now I don't have to move anything so I stop at its index
`0` position but this current `2` comes over in `p+1` position so `2`
will come in index `1` position and `1` will move over in index `0`
like:

```text
Index:  0  1  2  3  4  5
       [1, 3, 4, 5, 7, 2]
        p              curr

{Stop here}            {curr > p}
```

After insertion:

```text
[1, 2, 3, 4, 5, 7]
```

## SORTED

So finally all the array elements are sorted now.

So, this is how insertion sort works.

## Code

```text
[7, 4, 3, 5, 1, 2]
```

```js
for (i = 1; i < n; i++) {
  curr = a[i];
  prev = i - 1;

  while (a[prev] > curr) {
    a[prev + 1] = a[prev];
    prev--;
  }

  a[prev + 1] = curr;
}
```

## Corner Case

If my array is:

```text
[3, 4, 5, 7, 1, 2]
```

and my current element `1` and my previous element is `7`, and I will
keep on checking while my previous is greater than current then keep
moving it.

So I move my previous element `7` over in index `4` and then my `5` will
come over in index `3` and then my `4` will come over in index `2` and
then `3` will come over here in index `1` and then `p` is exhausted.

So now, my `p` becomes `-1` after doing `p--` when `p` was at index `0`
like:

```text
[3, 4, 5, 7, 1, 2]

p → 0 → -1
```

The notebook shows the `prev` pointer becoming exhausted:

```text
{Exhausted}

Index:  0  1  2  3  4  5
       [3, 4, 5, 7, 1, 2]
        ←p ←p ←p ←p ←p
                         curr

p = -1
```

After shifting all greater elements:

```text
[1, 3, 4, 5, 7, 2]
```

So, once `p` becomes `-1` then I have to stop my while loop like:

```js
for (i = 1; i < n; i++) {
  curr = a[i];
  prev = i - 1;

  while (a[prev] > curr && prev >= 0) {
    a[prev + 1] = a[prev];
    prev--;
  }

  a[prev + 1] = curr;
}
```

## Time Complexity

The 1st loop is a loop which is running in order of `n` like `O(n)`. And
I am also running my while in order of `n` like `O(n)` because if I am
at position of current element `1` then I can at till `n-1` time so for
each place I am running it in `O(n)`.

So that means the outer loop is `n` and inner loop is `n` so `n × n`
that means:

## Time Complexity

```text
O(n²)
```

## Space Complexity

The extra variables that I have used are `i`, `curr`, `prev`. It's not
significant so this is constant:

```text
Space Complexity: O(1)
```
