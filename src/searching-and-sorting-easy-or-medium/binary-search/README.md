# Binary Search

### 78. Define Binary Search?

### A.

Binary Search is an algorithm which searches for an element inside an
array and uses a technique known as Binary Search.

This is an optimized solution if we are searching for an element, but
the constraint is that binary search can apply only to arrays which are
sorted.

## 79. LeetCode: 704. Binary Search?

### A. Let's understand the problem statement and solve it

### 1. Example 1

```text
Index:  0   1   2   3   4   5
Array: [-1,  0,  3,  5,  9, 12]

target = 9
```

Whenever I do binary search, I try to find the middle element of my
array.

I will divide an array in such a way that I will try to find out the
middle element of the array.

### How will I find the middle element?

I will take two pointers, say pointer is left and right.

```text
left  → first index
right → last index
```

For the array:

```text
[-1, 0, 3, 5, 9, 12]
```

```text
left  = 0
right = 5
```

Then:

```text
middle = (right + left) / 2
       = (0 + 5) / 2
       = 2
```

So `2` is the middle index.

Once I find out the middle element, I will check whether my middle
element is equal to target.

If the middle element is not equal to target, then I will check whether
my middle element is greater than or less than target.

If my target is greater than the middle element, that means it lies
between the middle element and the last element.

Example:

```text
Index:  0   1   2   3   4   5
Array: [-1,  0,  3,  5,  9, 12]
                 ↑       ↑
                 m       r

target = 9
```

Because the array is sorted and the middle element is `3`, while the
target is `9`, the target should be on the right-hand side.

So I have to search the target between index `3` and `5`.

```text
[-1, 0, 3, 5, 9, 12]
             l   m   r
```

The notebook summarizes:

```text
I don't have to search for this portion
of array anymore.

I have to search for this portion of array now.
```

### Pseudocode

```text
[-1, 0, 3, 5, 9, 12]
  l       m       r

if (m == target) {
    return m;
}

if (target > m) {
    l = m + 1;
}

else {
    ...
}
```

If target is greater than the middle element, then in the next iteration
I will make index `3` my left pointer and I will keep my right pointer
as it is.

So basically, I will shift my left pointer to index `3`.

Now:

```text
left = 3
right = 5
```

So what I can say is:

```text
my left pointer is equal to middle + 1
```

```text
Index:  0   1   2   3   4   5
Array: [-1,  0,  3,  5,  9, 12]
                 ↑   ↑       ↑
                 l   m       r
```

The array space is reduced to:

```text
[5, 9, 12]
```

and I will be finding the target in this array.

Now, I will again find my middle value:

```text
Index:       3   4   5
Array:      [5,  9, 12]

             ↑
             m
```

```text
m = (l + r) / 2
  = (3 + 5) / 2
  = 4
```

So `4` is the middle index.

I found my middle element. Now I will check whether my middle element is
equal to target.

```text
Array: [-1, 0, 3, 5, 9, 12]
                         ↑
                    target = 9

middle index = 4
middle value = 9
```

The middle value is equal to the target, so I will return `m`.

```text
return 4
```

So this is how my binary search works and my binary search should end
over here.

## Final Pseudocode

```text
if (m == target) {
    return m;
}

if (target > m) {
    l = m + 1;
}

else {
    ...
}
```

There can be three cases while performing binary search:

```text
                 target < m
                     ←

target              m              target
   ←─────────────────┼────────────────→

                     →
                 target > m
```

More specifically:

```text
if target > m:
    l = m + 1

if target < m:
    r = m - 1

if target == m:
    return m
```

### Base condition / stopping condition

The notebook gives another example:

```text
[-20, -8, -1, 0, 5, 8, 9, 12, 15]
```

```text
Index: 0   1   2   3   4   5   6   7   8

left  = 0
right = 8

target = 7

m = (l + r) / 2
  = (0 + 8) / 2
  = 4
```

The middle value is:

```text
5
```

Since:

```text
target > m
```

the left pointer moves:

```text
l = m + 1
  = 5
```

The notebook then shows the target and pointer movement until the search
space becomes invalid.

### Base condition

```text
if r < l
```

The note explains:

```text
So now, whenever it happens that my right pointer
becomes less than my left pointer, then now I know
that I will not find any element which is my target.

So my base condition will be:
my right becomes less than left.
```

## 80. Which loop is the best approach to use for Binary Search?

### A.

The notebook chooses the `while` loop as the better approach for Binary
Search because the pointers keep changing during the search.

The `while` loop can continue while the search range is valid:

```text
left <= right
```

The notebook explains that inside the loop:

```text
move left pointer
move right pointer
calculate middle
check all conditions
```

and therefore the `while` loop is a better fit.

It also discusses the `for` loop:

```text
for loop is generally used when we are
traversing through an array for a sequence.
```

For Binary Search, however, the pointer movement is dynamic, so the
notebook prefers the `while` loop.

### Main idea

```text
while (left <= right) {
    calculate middle;
    check target;
    move left or right pointer;
}
```

The notebook concludes that the `while` loop is the better approach for
writing Binary Search because the iteration is controlled by the
changing `left`, `right`, and `middle` pointers rather than by a fixed
sequential traversal.

## 81. If array have only one element then why my code didn't work for LeetCode: 704. Binary Search?

### A.

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
```

### Checking code

```text
Index:  0
Array:  [5]

target = 5

left  = 0
right = 0
```

So, my left pointer is pointing at index `0` and my right pointer is
also pointing at index `0`.

So what happens is when it is checked for the base condition:

```text
while (right > left)
```

then this failed and this loop didn't run.

So ideally, the base condition should be:

```text
right >= left
```

So even if my `left` is equal to `right`, the loop should run.

For example, if my target is `5` then my left is `0` and my right is
`0`, my loop will run one time.

It didn't run and it returns `-1`.

But if my target is `5` then the correct output should have been `0` so
it should return `0`.

And it would have been `0` if while loop inside code would have been:

```text
right >= left
```

So, the problem over here is with the base condition.

So ideally the base condition should run this while loop till my `right`
is greater than and equal to `left`.

So even if my `left` is `5`, then what will happen is:

```text
left  = 0
right = 0
```

my loop will run one time.

### Corrected code

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
```

Now, my middle will be:

```text
(0 + 0) / 2 = 0
```

and then it will check:

```text
target === nums[middle]
```

and yes, it is equal to middle, so then it will return middle.

# Time Complexity and Space Complexity of this problem algorithm

## Binary Search

So, what I am basically doing, like exactly my sample size of array was
the whole 9 elements.

When I find out middle and after one iteration it reduces to half like
shown below and then after every iteration my sample size reduces to
half like:

```text
Index:  0   1   2   3   4   5   6   7   8

Array: [-20, -8, -1, 0, 5, 8, 9, 12, 15]
```

After every iteration my sample size reduces to half.

Each array sample size:

```text
n elements
    ↓
   n/2
    ↓
   n/4
    ↓
   n/8
    ↓
    ...
    ↓
    1
```

Suppose I have given an array of `n` elements, so after one iteration I
find out the middle and then I moved my left pointer, so in my next
iteration about half of elements are remaining and after next iteration
`1/4` elements are remaining and then after next iteration `1/8`
elements and I will keep on dividing this `n` till my array contains one
element at the end.

So that is when I stop when there is only one element remaining, like
when my left and right go inside that `n` when I stop like.

## Mathematically

```text
n × 1/2 × 1/2 × 1/2 × 1/2 × ... × x = 1

n/2^x = 1

n = 2^x

x = log₂ n
```

This is what I need.

### What is the meaning of log₂ n (log n iteration)?

For example:

```text
n = 10  →  10 / 5 / 2 / 1
           x = 3

n = 100 →  100 / 50 / 25 / 12 / 6 / 3 / 1
           x = 6

n = 1000 → 1000 / 500 / 250 / 125 / 62 / 31 / 15 / 7 / 3 / 1
            x = 9
```

Therefore:

```text
n = 10    x = 3     log₂ 10 = 3
n = 100   x = 6     log₂ 100 = 6
n = 1000  x = 9     log₂ 1000 = 9
```

So, whenever there is an algorithm that I will develop where I will take
a lot of array elements and divide them and in the next iteration I will
divide them again and divide them, then in such a search case the time
complexity always boils down to like:

## Time Complexity

```text
O(log n) → {logarithm}
```

## Space Complexity

About the space complexity, so I have used 3 extra spaces for data
pointers or variables like `left`, `right` and `middle`.

So my space complexity over here is like:

```text
Space Complexity

O(1) → {Constant}
```

So I don't have to think about how many variables, so if it is a
constant number that means it is a constant so it will be `O(1)`.

And ideally, I have use 3 variables which I can boil down to `O(1)`
constant.
