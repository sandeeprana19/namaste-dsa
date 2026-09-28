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

Let's merge array in a sorted fashion:

```text
[1, 3, 4, 5, 6, 8, 9] → {result}

arr = [8, 4, 5, 6, 9, 1, 3, 6]

      [8, 4, 5, 6]       [9, 1, 3, 6]

      [8, 4] [5, 6]       [9, 1] [3, 6]

       [8] [4] [5] [6]     [9] [1] [3] [6]
```

The notebook's arrows show the individual elements being merged back
into sorted sub-arrays:

```text
[8] + [4] → [4, 8]
[5] + [6] → [5, 6]

[9] + [1] → [1, 9]
[3] + [6] → [3, 6]
```
