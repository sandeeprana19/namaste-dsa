# Bubble Sort

## 82. How bubble sort works?

### A.

So let's say I have got an array like:

```text
[5, 2, 4, 1]
```

and now I need to sort this array and this array needs to be sorted in
an ascending or descending fashion.

So, like this array I will sort it in an ascending order and the output
should look something like:

```text
[1, 2, 4, 5]
```

which I want from the program.

## Approach 1

If I have to sort this array:

```text
[5, 2, 4, 1]
```

programmatically I will have to check the value pair by pair.

So when I start by pair, first of all I check this pair between `5` and
`2`.

One is greater, so suppose if `5` is greater than `2` then I will swap
the values because when I am sorting in ascending order then I want the
number which is smaller to come on the left side and then I want the
number which is greater to come on the right side.

So this is what all I have to do.

My array will look like:

```text
[5, 2, 4, 1]
```

So basically I somehow have to shift the numbers which are greater on
the right side and then I somehow have to shift the numbers which are
smaller on the left side.

So that's how I will do.

I cannot do it directly in one go and again so I have to keep checking
the pairs and then again and again I will just keep on moving the
numbers which are greater to forward and will be just see how this
algorithm work.

### 1.

First of all, I will check for these two numbers `5` and `2`.

So, if I see my `5` is greater than `2`, so I will swap it like:

```text
[5, 2, 4, 1]
    ↓
[2, 5, 4, 1]
```

### 2.

Now, I will move on the next pair between `5` and `4`:

```text
[2, 5, 4, 1]
    ↓
[2, 4, 5, 1]
```

### 3.

Now, I will compare the last two elements between `5` and `1`:

```text
[2, 4, 5, 1]
       ↓
[2, 4, 1, 5]
```

Now, I had swapped every array elements so I have swap pairs 3 times
meaning the 1st two numbers and 2nd two numbers and 3rd two numbers.

```text
3 times
```

```text
n = 4

[5, 2, 4, 1]
   ↓
[2, 5, 4, 1]
      ↓
[2, 4, 5, 1]
         ↓
[2, 4, 1, 5]
```

```text
3 times
```

Now, I will again do the same thing on the array but I will start with
this array and say:

```text
[2, 4, 1, 5]
```

### 1.

Now, I will again check for these two numbers between `2` and `4` and I
don't need to swap them because the lower number is already on the left
side.

So, my array remains same in the next iteration like:

```text
[2, 4, 1, 5]
   ↓
[2, 4, 1, 5]
```

### 2.

Now, I will check for these two numbers between `4` and `1`:

```text
[2, 4, 1, 5]
      ↓
[2, 1, 4, 5]
```

### 3.

Now, I will check for `4` and `5`:

```text
[2, 1, 4, 5]
         ↓
[2, 1, 4, 5]
```

Now, again I have checked 3 times. Now, let's put every group of
iterations altogether:

## Bubble Sort

```text
n = 4

[5,2,4,1]      [2,4,1,5]      [2,1,4,5]
[2,5,4,1]      [2,4,1,5]      [1,2,4,5]
[2,4,5,1]      [2,1,4,5]      [1,2,4,5]
[2,4,1,5]      [2,1,4,5]      [1,2,4,5]

  3 times        3 times        3 times
```

And now I observe that if I keep doing this same process again and again
and again so I figure out that array will be sorted.

And slowly slowly my array elements will move in their correct order
because I am swapping these numbers again and again so if I keep
repeating this process then my array will be sorted finally.

So this is how bubble sort actually works.

But while I save optimization what I can do in this process, so let's
try to do the same thing again.

```text
n = 4

[5, 2, 4, 1]    [2, 4, 1, 5]    [2, 1, 4, 5]
[2, 5, 4, 1]    [2, 4, 1, 5]    [1, 2, 4, 5]
[2, 4, 5, 1]    [2, 1, 4, 5]    [1, 2, 4, 5]
[2, 4, 1, 5]    [2, 1, 4, 5]    [1, 2, 4, 5]
```

```text
3 times        3 times        3 times
```

In the 2nd phase, last iteration above the comparison between `4` and
`5` not worth it because `5` is already in its correct position, so I
don't have to move `5` and also I don't have to do my last iteration
now.

So, only if I do the iteration 2 times then what will happen is `5` is
already sorted and I have also sorted my second last element which is
`4` and it also comes in its correct position.

In the 3rd phase, it will need one comparison and I only need to sort
between `2` and `1` and then I will get my final array.

So, bubble sort is an algorithm where in every iteration I will compare.
Like suppose I have started with `n = 4` and suppose I am iterating for
1st time, so in my 1st iteration I always have to iterate for `(n - 1)`
times that is equivalent to `3`.

And in my 2nd iteration I iterated for `2` times.

And in my 3rd iteration meaning that `i = 2` I iterated for `1` time.

### For 1 time

So basically, as I move ahead my number of iteration keep on decreasing,
that is the point over here.

So this sequence will help me to remember the conditions in my loop.

Suppose let's take an example like if my array of was `n = 10` length or
elements:

1.  So in the first iteration I will do `9` times.
2.  In the second iteration I will compare `8` times.
3.  In the third iteration I will compare `7` times.
4.  In the fourth iteration I will compare `6` times.
5.  ...

And I will keep doing it till it reaches `1` time.

And when I will reach the last iteration then I will stop and my array
will be already sorted.

```text
n = 10
→ 9 times
→ 8 times
→ 7 times
→ 6 times
...
→ 1 time
```

So, this is how I will do an optimization of bubble sort.

---

## 83. Why do we name it bubble sort?

### A.

We name it "bubble sort" because after one iteration of doing swapping
and comparing of below array elements, pairs wise like:

```text
[5, 0, 1, 2, 7, 9, 3, 4]
```

So, if I keep comparing the above array pair wise then what happen is I
am bubbling up my largest number towards the end.

So, what will happen if I will keep doing bubble sort algorithm after my
first iteration I would have bubbled up the largest number at the end.

have bubbled up the largest number at the end.

So, in the array the largest number is `9` so it will somehow bubble up
at the end like:

```text
[5, 0, 1, 2, 7, 9, 3, 4]
[0, 5, 1, 2, 7, 9, 3, 4]
[0, 1, 5, 2, 7, 9, 3, 4]
[0, 1, 2, 5, 7, 9, 3, 4]
[0, 1, 2, 5, 7, 3, 9, 4]
[0, 1, 2, 5, 7, 3, 4, 9]
```

So, that is why this algorithm is known as Bubble Sort.

---

## 84. How can I write code for bubble sort?

### A.

See, if my `n = 4` then I have to do an iteration `(n - 1)` times and in
each iteration basically I have to compare `3` times then `2` times and
then `1` times.

So, times are decreasing so iteration in `n - 1` like:

```text
n = 4

(n - 1) iteration

(n-1), (n-2), (n-3), ...... 1
        ↑
        Stop after one time
```

## Code

```js
for (i = 0; i < n - 1; i++) {
  for (j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr[j], arr[j + 1]);
    }
  }
}
```

> This is all the code for Bubble Sort.

## Table Dry Run

```text
n = 4

i = 0, j = 0 → 3 times
i = 1, j = 2 → 2 times
i = 2, j = 1 → 1 time

Keep on decreasing
Keep on increasing
```

## Time Complexity

```text
O(n²)
```

For sorting algorithm, `O(n²)` is not a good time complexity in the
worst case.

That is the reason the bubble sort are not generally used on production.

So generally if I want to sort an array bubble sort is not a preferred
way of solving it because the time complexity is `O(n²)` in the worst
case.

So, this bubble sort is not a good approach.

## Space Complexity

```text
Constant = O(1)
```

---

## 85. Can I improve the solution for this bubble sort? Can I improve its time complexity?

### A.

I cannot improve the `O(n²)` time complexity because in the worst case
it will be `O(n²)` and it will definitely will be there but I can
improve my solution so that bubble sort can run faster.

So, suppose my array is already sorted then bubble sort will again start
comparing like:

```text
i = 0

[1, 2, 3, 4, 5]
```

- Compare `1` and `2` → no swapping.
- Compare `2` and `3` → no swapping.
- Compare `3` and `4` → no swapping.
- Compare `4` and `5` → no swapping.

So, if `i = 1` and `2`, it will keep comparing and then my loop will
still run but my array was already sorted.

bubble sort will do the whole process for whole array so it's not good.

So that's why I need to improve my solution.

But improving my solution, let's understand one important point.

So, suppose I have an array:

```text
[9, 1, 2, 3]
```

and if I have to bubble sort this array, I know that after one iteration
my largest element will definitely move towards the end.

So that's what I know about the bubble sort.

So, let me run my bubble sort below:

```text
i = 0

[9, 1, 2, 3]    [1, 2, 3, 9]
```

Comparisons/swaps:

```text
[9, 1, 2, 3] → [1, 9, 2, 3]
[1, 9, 2, 3] → [1, 2, 9, 3]
[1, 2, 9, 3] → [1, 2, 3, 9]
```

According to my solution, my array was already sorted at this point but
still my algorithm will all the process like it started comparing
elements on the already sorted array after the 1st iteration.

Can I figure out a way to stop in between after the array is already
sorted?

Yes, looks like I can figure out a way to stop in between after the
array is already sorted. So let's take an example:

```text
[9, 1, 2, 3, 4, 7, 8]
```

So suppose at one point my array is sorted completely and there are
still so many iterations left.

```text
[1, 2, 3, 4, 7, 8, 9]
```

```text
Sorted
```

So can I figure out a solution that I should stop once my array is
sorted already?

## How will I find out if my array is sorted already?

If in any iteration:

```text
[no swapping happened]
```

then:

```text
× Stop bubble sort

(Array is sorted)
```

So, suppose my array is already sorted:

```text
[1, 2, 3, 4]
```

In the iteration:

```text
[1, 2, 3, 4]
    ↓
[1, 2, 3, 4]
```

No swapping.

```text
[no swapping]
        ↓
      SORTED
```

So, suppose I have an array of 1 million elements and after suppose 10
iterations my array is already sorted, no swap and 10 iterations no more
swapping is happening then I should stop it there right.

So that is where my code should be improved.

So that there is no swapping happening in the next iteration, so I
should stop my bubble sort there and there.
