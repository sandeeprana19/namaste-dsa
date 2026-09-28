# Selection Sort

## 86. What is selection sort? How do I build this algorithm? And how this algorithm works?

### A.

Let's say I have been given an array and currently there are 6 elements
like below which I have to basically sort:

```text
[7, 1, 5, 4, 3, 2]

n = 6
```

So selection sort what name suggests it will select one by one each
element and it will put it in the right place.

So, basically, it will loop through all the elements in the above array
and it will try to find out the minimum element in the above array so it
will go to each and every element one by one and then it will select the
minimum element.

So suppose, if it has selected the minimum element `1` and it will move
this minimum element `1` to the 1st index which means the place where it
should be in a sorted array.

So I will continuously loop through an array and put all the minimum
elements at their right places like:

```text
[7, 1, 5, 4, 3, 2]
 ↑  ↑
```

So, I will find the minimum element and move it to the first place.

Let's see how this algorithm actually works.

### 1. In the 1st pass

It will traverse through each and every element and it will find out the
minimum and then it will move the minimum and it basically kind of swap
it like:

```text
[7, 1, 5, 4, 3, 2]
    ↑

[1, 7, 5, 4, 3, 2]
```

So now, the 1st element in the above array is sorted already and the
rest of them are unsorted.

### 2.

Now, my array should start from index `1` and it should go through till
the end to find the next minimum.

So, it will find the next minimum at last index and then it will move to
the next location meaning at index `1` like:

```text
[7, 1, 5, 4, 3, 2]

[1, 7, 5, 4, 3, 2]
       ↑───────────────↑

[1, 2, 5, 4, 3, 7]
       ↑
```

So basically `(n - 1)` iterations will happen which is equal to `5`
iterations and then my array will be sorted.

### 3.

```text
[1, 2, 5, 4, 3, 7]

[1, 2, 3, 4, 5, 7]

[1, 2, 3, 4, 5, 7]
```

So basically now my array is sorted.

So, this is my Selection Sort algorithm.

## Code

```text
[7, 1, 5, 4, 3, 2]    n = 6

for (i = 0; i < n - 1; i++) {
    min = i;

    for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }

    swap(arr[min], arr[i]);
}
```

## Dry Run

With the above code, it is going from `0` to `n - 1`.

I am assuming my minimum to be:

```text
i = 0 → 7 = min
```

Now, I am running my `j` loop from:

```text
j = i + 1 = 1
```

to `< n`, so it will loop through all the elements.

Now it will compare all the `arr[j]` with `arr[min]`.

If `arr[j]` is less than `arr[min]`, meaning `1` is less than `7`, then
`min` index will be updated with the minimum value.

And after my inner `j` loop is finished I would have found the minimum
index in the above whole array.

And now, I just have to do this min to the front meaning I will swap it
with `i`.

And I will keep on doing it till my whole function is executed.

And that's all I have to do.

Now, the interesting thing to note over here is when:

```text
i becomes 1
```

and my `min` becomes `5`, what happens is:

```text
min = 1
j = i + 1 = 2
```

So, I start from element `5` i.e. `i + 1 = 2`.

I will go again check for the minimum and whatever the minimum will be,
`1` will replace it with the min index and then swap their values.

So this is how the selection sort algorithm works.

## Improvement

One improvement that I can do in this selection sort algorithm is
suppose I am finding the minimum value every time and the minimum comes
out to be an array of index.

So suppose element `4` is `i` and the minimum comes out to be equivalent
to `i`, meaning:

```text
i = min
```

So basically then I don't need to swap this `4` now as it doesn't make
sense.

So what I can do is I need to only swap if:

```text
min != i
```

otherwise don't swap.

```js
for (i = 0; i < n - 1; i++) {
  min = i;

  for (j = i + 1; j < n; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }

  if (min != i) {
    swap(arr[min], arr[i]);
  }
}
```

## Time Complexity

This loop is running in the order of `n` and the inner loop is also
running in the order of `n`, so basically the time complexity of this
algorithm comes out to be:

```text
O(n²) → {In the worst case}
```

## Space Complexity

An extra space I am using are `i`, `min`, `j`, `temp`.

So basically 4 extra spaces, so these all are constant and I don't have
to worry about it because it is not in the order of `n` or something.

So space complexity of this selection sort algorithm is:

```text
O(1)
```
