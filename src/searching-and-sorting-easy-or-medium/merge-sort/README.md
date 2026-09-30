# Merge Sort

### 88. What is Merge Sort?

**A.**

Merge Sort is a sorting algorithm and it is a very famous sorting
algorithm. And this is a Divide & Conquer Algorithm.

So, when I say Divide & Conquer basically see its a concept in data
structure and algorithm where we basically divide our main problem to
smaller problems and then we conquer it.

### 89. Do there are more Divide & Conquer Algorithm except Merge Sort?

**A.**

Yes! As Merge Sort is one of the type of Divide & Conquer Algorithm but
there are more.

### 90. How merge sort works?

**A.**

Merge sort says that if given an array so suppose I have been given an
array and it have 8 elements in it. So I have 4 and 4 = 8 elements in it
like:

```text
arr = [8, 4, 5, 6, 9, 1, 3, 6]
```

So, what I will do is I will keep dividing my array into 2 halves.

So, initially I will divide the below array into 2 halves like:

```text
              {1st Half}          {2nd Half}

arr = [8, 4, 5, 6 | 9, 1, 3, 6]
             ↓             ↓
          [8, 4, 5, 6]   [9, 1, 3, 6]
```

And then, I will divide left half into 2 halves like:

```text
arr = [ [8, 4] [5, 6] | [9, 1, 3, 6] ]
        {1st Half} {2nd Half}
```

And then I will divide above last smaller portion into 2 halves like:

```text
{1st Half}        {2nd Half}       {1st Half}       {2nd Half}

   [8, 4]             [5, 6]           [9, 1]           [3, 6]
    ↓   ↓              ↓   ↓             ↓   ↓             ↓   ↓
   [8] [4]            [5] [6]           [9] [1]           [3] [6]
```

So similarly I will keep dividing my array into halves and then I will
merge them in a sorted way.

So what I will do I will divide and then divide it:

```text
                    Divide
                   /      \
                /            \
             /                   \
```

And then finally, when coming back I will merge it. So similarly just
like I did in Fibonacci!

So basically suppose I have to find like:

```text
             f(5)
            /    \
         f(4)    f(3)
         /  \
      f(3)  f(2)
```

### 2.

Now, first of all below array will be divided into 2 halves and the 1st
half will be the 1st 4 elements and the 2nd half will be 2nd 4 elements
like:

```text
arr = [8, 4, 5, 6 | 9, 1, 3, 6]
          1st Half       2nd Half
```

Now, merge sort is a recursive algorithm so I will be using recursion
over here! So every level of recursion I will divide an array into 2
parts and in the next level of recursion I will again divide it into 2
parts and in the next level of recursion I will again divide it into 2
parts so I will go like this.

Now, this smaller array `[8, 4, 5, 6]` will again be divided into 2
parts and this array `[9, 1, 3, 6]` will also divided into 2 parts like:

```text
[8, 4, 5, 6]        [9, 1, 3, 6]
     ↓                    ↓
[8, 4] [5, 6]        [9, 1] [3, 6]
```

```text
                  Divide
                 /      \
               /          \
```

```text
arr = [8, 4, 5, 6, 9, 1, 3, 6]

       [8, 4, 5, 6]       [9, 1, 3, 6]

        [8, 4] [5, 6]       [9, 1] [3, 6]
```

Now, I will again go some level deep so I will again divide the above
large array into smaller halves like:

```text
arr = [8, 4, 5, 6, 9, 1, 3, 6]

      [8, 4] [5, 6]       [9, 1] [3, 6]

       [8] [4] [5] [6]    [9] [1] [3] [6]
```

### 5.

So now, I will keep on divide this array `[8, 4, 5, 6, 9, 1, 3, 6]` in
every recursion steps meaning in every nested recursion.

So, I will just keep on dividing into half and keep on dividing into
half till I reach a place where my array become individual and singular
meaning every single element is remaining in the above last array.

So now, what I will do is as I already know recursion goes backwards
meaning I solve the problems backwards and this is a bottom up approach
in recursion. So recursion generally work that which I have seen in
Fibonacci also.

So what will happen now when I be going back I will basically merge
these 2 sorted array like `[8]` and `[4]` into 1 and that will:

Come in place of `[8, 4]` array.

In merge sort, there are 2 phases like:

1.  Divide Phase.
2.  Merge Phase.

And that's is the reason we also call merge sort as a Divide & Conquer
Algorithm because first of all I will divide an array and then I will
merge it.

### Let's merge arrays in a sorted fashion:

```text
[1, 3, 4, 5, 6, 8, 9]  ->  {result}

arr = [8, 4, 5, 6, 9, 1, 3, 6]

[4, 5, 6, 8]                     [1, 3, 6, 9]
      ↓                                 ↓
   [8, 4, 5, 6]                    [9, 1, 3, 6]
      ↓                                 ↓
    [8, 4]       [5, 6]           [9, 1]       [3, 6]
      ↓             ↓               ↓             ↓
     [8] [4]      [5] [6]        [9] [1]      [3] [6]
```

### DSA Problem

Before moving on to pseudo code, let's solve 1 merge sort array DSA
problem like:

```text
# Merge 2 Sorted list into a single list:
[1, 3, 5, 7]    [2, 4, 8, 9]
```

### Mine solution:

```js
let arr1 = [1, 3, 5, 7];

let arr2 = [2, 4, 8, 9];

let m = arr1.length;

let n = arr2.length;
```

```js
Function mergeSort(a1, m, a2, n) {

    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i < m + n; i--) {

        if (p2 < 0) break;

        if (p1 >= 0 && a1[p1] > a2[p2]) {

            a[i] = a1[p1];

            p1--;

        } else {

            a[i] = a2[p2];

            p2--;

        }
    }

    return arr1;
}

let result = mergeSort(arr1, m, arr2, n);

console.log(result);
```

### Dry Run

```text
a1 = [1, 3, 5, 7, 0, 0, 0, 0]
                         p1

a2 = [2, 4, 8, 9]
             p2
```

↓

```text
a1 = [1, 3, 5, 7, 0, 0, 0, 9]
                      p1

a2 = [2, 4, 8, 9]
             p2
```

↓

```text
a1 = [1, 3, 5, 7, 0, 0, 8, 9]
                   p1 ← p1

a2 = [2, 4, 8, 9]
             p2
```

↓

```text
a1 = [1, 3, 5, 7, 0, 7, 8, 9]
                   p1 ← p1

a2 = [2, 4, 8, 9]
             p2
```

↓

```text
a1 = [1, 3, 5, 7, 5, 7, 8, 9]
             p1

a2 = [2, 4, 8, 9]
```

```text
a2 = [2, 4, 8, 9]
             p2 ← p2
```

↓

```text
a1 = [1, 3, 5, 4, 5, 7, 8, 9]
             p1

a2 = [2, 4, 8, 9]
          p2 ← p2
```

↓

```text
a1 = [1, 3, 3, 4, 5, 7, 8, 9]
          p1

a2 = [2, 4, 8, 9]
          p2 ← p2
```

↓

```text
a1 = [1, 2, 3, 4, 5, 7, 8, 9]
       p1

a2 = [2, 4, 8, 9]
       p2 ← p2
       p2 → -1
```

```text
{ p2 ❌
  Break }
```

### Merge Sorted Array Lists:

```text
arr1 = [1, 2, 3, 4, 5, 7, 8, 9]
```

### Alternative Solution

```text
[1, 3, 5, 7]   (X)   [2, 4, 8, 9]
 i → i → i → i → i     j → j → j
                 {Loop ends}

[1, 2, 3, 4, 5, 7, 8, 9]
                     {Sorted Array}
```

```js
function merge(arr1, arr2) {
  // helper function in Merge Sort
  // arr1 -> Sorted Array
  // arr2 -> Sorted Array
  // return merged sorted single array;
}
```

Later I will build the above merge sort helper function but assume that
I have build the above helper function `mergeSort` and I already have a
`merge` function.

Now, the job of this above merge helper function is that it will take 2
sorted arrays like `arr1` and `arr2` and it merge these 2 sorted arrays
into single list and it will return it. This is merge helper function
which I will use.

### 4.

Now, coming back to earlier merge sort. So suppose, I have to sort this
array:

```text
[8, 4, 5, 6, 9, 1, 3, 6]
```

then I will divide it into smaller portion until there single element
remaining into array.

But while coming back in recursion, I was having these arrays list
`[4, 8]` and `[5, 6]` and now I have merge these arrays into single
array list but in a sorted fashion and return it.

So, here that merge helper function will be useful so I will use that
merge helper function to

...to merge 2 sorted list.

And then I get these 2 sorted list like the left half `[4, 5, 6, 8]` and
the right half `[1, 3, 6, 9]` and then I have to merge these into a
single list to get this result `[1, 3, 4, 5, 6, 8, 9]`. So this is where
that merge helper function will be useful.

So, this is how the whole merge sort works.

### 5. Before writing code, let's take a small example:

### Example 1:

1.  Suppose if I had an array of 4 elements, so let's say unsorted array
    like `[3, 1, 2, 8]`.

I have to divide it into 2 portions so like:

```text
        [3, 1, 2, 8]
          /       \
      [3, 1]     [2, 8]
       /  \       /  \
     [3]  [1]   [2]  [8]
```

Now, what I have to do is at each level when I am returning like see
`[3]` will return `3` and `[1]` will return `1` so what will `[3, 1]`
will return

So this is an important case:

```text
[3, 1, 2, 8]
      ↓
return merge([1,3], [2,8])
```

The two sides are:

```text
[3, 1]  ->  [3] [1]
[2, 8]  ->  [2] [8]

left       right
```

**Same helper `merge` function**

```text
return merge(left, right)
```

### Pseudo Code:

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

```text
        {Left Sorted Array}       {Right Sorted Array}
                       \             /
                        \           /
                         merge(left, right)
```

### Recursion Tree

```text
                    [1, 2, 3, 8]  ->  {Final Answer}
                         ↑
                  merge([3,1], [2,8])
                    /             \
                 [3,1]           [2,8]
                  /  \             /  \
                [3]  [1]         [2]  [8]
                 ↑    ↑           ↑    ↑
                ms    ms          ms   ms
```

```text
[3]   [1]   [2]   [8]
{Base Case}
```

### Recursion Tree For Bigger Array:

```text
[1, 3, 4, 5, 6, 8, 9]  ->  {Final Answer}

ms [8, 4, 5, 6, 9, 1, 3, 6]

        [4, 5, 6, 8]                    [1, 3, 6, 9]

      ms [8, 4, 5, 6]                 ms [9, 1, 3, 6]

          [4, 8]      [5, 6]          [1, 9]      [3, 6]

         ms [8, 4]    ms [5, 6]      ms [9, 1]    ms [3, 6]

          [8] [4]      [5] [6]        [9] [1]      [3] [6]

         ms [8] ms [4] ms [5] ms [6] ms [9] ms [1] ms [3] ms [6]
```

### Recursion Tree

```text
[1, 2, 3, 5]  ->  {Final Result}

            merge([2,5], [1,3])

[5, 2, 3, 1]  ->  [2, 5] and [1, 3]
```

### Function used in the recursion

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  mid = arr.length / 2;

  left = mergeSort(arr.slice(0, mid));

  right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

### Recursive calls shown in the notes

```text
[5, 2]
[5]

[2]

[3, 1]
[3]
[1]

[1, 3]
[2, 5]

[1, 2, 3, 5]  -> Final Result
```

The arrows in the handwritten recursion tree show the recursive calls
returning from the base cases and then merging the returned arrays.

### 6. Now, let's write the code for merge algorithm:

```text
[1, 3, 5, 7]    [2, 4, 8, 9]
```

```js
function merge(left, right) {
  res = [];
  i = 0;
  j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}
```

So, the above one is the logic for merge helper function.

### Dry Run

```text
[1, 3, 5, 7]  (X)  [2, 4, 8, 9]
 i → i → i → i → i     j → j → j

                         {i loop ends}

res = [1, 2, 3, 4, 5, 7]
```

### 7. MERGE SORT

```js
function merge(left, right) {
  res = [];
  i = 0;
  j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}
```

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  mid = arr.length / 2;

  left = mergeSort(arr.slice(0, mid));

  right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

```text
{ Divide
  &
  Merge }
```

```text
{Merge 2 sorted list into a single list}
```

So, these above two function when work together is

### Merge Sort

And the previous page `merge` function is the same `merge` function
inside `mergeSort` function.

### 8. Time Complexity

When I am in divide phase then I am doing it:

```text
Divide:
n → n/2 → n/4 → n/8 → ..... 1
```

### Mathematically

```text
n/2 × 1/2 × 1/2 × 1/2 × ..... 1

n/2^x = 1

x = log₂ n
```

So, suppose if my array is of length 8 then it becomes 4, and then it
becomes 2 and then it becomes 1. So basically, I am just reducing it
right:

```text
8/2 → 4/2 → 2/2 → 1
```

So, this comes out to be `log₂ n`. So basically:

```text
log₂ 8 = 3
```

That means 3 times my recursion will go in, so there will be 3 levels of
recursion.

So similarly the divide is happening `log₂ n` times.

### Merging

The time complexity of merging 2 arrays is `O(n)`.

So, the final time complexity of whole merge sort algorithm is:

### Time Complexity

```text
O(n log₂ n)
```

### Why `O(n log₂ n)`?

Because I am dividing my array into `O(log n)` times and I am doing
merging at each step which takes `O(n)`. So basically:

```text
O(log n) × O(n) = O(n log₂ n)
```

So, the above `O(n log₂ n)` time complexity is good and it is better
than bubble sort, insertion and selection because all these have time
complexity of `O(n²)`.

So, `O(n log₂ n)` is very good sorting algorithm. It is very efficient,
it is very stable also and it is faster also. So faster than bubble
sort, insertion sort and selection sort because `O(n log₂ n)` is better
time complexity than `O(n²)`.

### Space Complexity

So, every merge I need a result array which is an extra space. I am
talking so far extra space:

### Space Complexity

```text
O(n)
```

Because I am taking extra space while merging. So when I am merging I
need this extra space in result of push my array for which

I am doing that `result.push()` and then I am creating a new array and
then returning it.

So, all of these takes an extra space. So, that's is why space
complexity is:

```text
O(n)
```
