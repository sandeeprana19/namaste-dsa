# Recursion Masterclass

## 74. LeetCode: 509. Fibonacci Number

### A. Let's understand and solve it

## 1. First of all, understand Fibonacci number

I need to understand the Fibonacci series.

The first element of Fibonacci series is `0`, the second element is
always `1`, and all the other elements are the sum of the previous two
elements.

```text
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
8 + 13 = 21
13 + 21 = 34
```

Therefore:

```text
Index:    0  1  2  3  4  5  6   7   8
Value:    0  1  1  2  3  5  8  13  21  34 ...
```

And this is the Fibonacci sequence. So, if I say like:

```text
F(0) = 0
F(1) = 1

if (n > 1)
```

Then the formula is:

```text
F(n) = F(n - 1) + F(n - 2)
```

The notebook marks this as the **formula**.

For example:

```text
F(4) = F(3) + F(2)
     = 2 + 1
     = 3
```

Understanding the above formula is important because that is how the
Fibonacci sequence is denoted.

### What is the question asking?

```text
Given n, calculate F(n)
```

They are saying that they will give you the value of `n` and you have to
return the number at that position.

For example:

```text
n = 8 → return F(n) → F(8) → 21

n = 9 → return F(n) → F(9) → 34
```

So this is what the problem is asking for.

The notebook then starts the function:

```js
function fib(n) {
    return fib.number at (n) position
}
```

## 2. Now, let's find out an approach to find Fibonacci number at `n` position

The Fibonacci series is written once again:

```text
Index:  0  1  2  3  4  5  6  7  8
Value:  0  1  -  -  -  -  -  -  -
```

For example:

```text
F(5), n = 5
```

There are two approaches to find out Fibonacci number at `5`:

```text
1. Iterative approach
2. Recursive approach
```

Now, we already know:

```text
F(0) = 0
F(1) = 1
```

And we have to find out `F(n)` where `n = 5`.

The notebook explains that to calculate `F(5)`, we need to know `F(4)`
and `F(3)` because:

```text
F(5) = F(4) + F(3)
```

To find `F(4)`, we need `F(3)` and `F(2)`.

To find `F(3)`, we need `F(2)` and `F(1)`.

So basically, to calculate `F(5)`, we need the values at:

```text
F(4), F(3), F(2)
```

and then we can calculate the value at `F(5)`.

## Iterative Approach

Start from location `0`:

```text
Index:  0  1  2  3  4  5  6  7  8
Value:  0  1  -  -  -  -  -  -  -
```

The notebook shows moving forward by adding the previous two values
until reaching `F(5)`.

## Iterative Approach --- Using a `for` loop

```js
for (i = 2; i < n; i++) {
  // add the previous two Fibonacci numbers
}
```

The notebook explains:

```text
I will start from index 2 and keep adding the
previous two index numbers to find out the value
at index 2, then the loop will go ahead and find
out the value at index 3 and so on.

So the for loop will end and whatever the value
at index 5 will be my answer and I will return it.
```

Therefore, the iterative approach is easy to understand because:

```text
I can think in for loop from left to right
and I don't need to think in a single to find
out iterative approach.
```

## Recursive Approach

The recursive approach works in a different fashion.

```text
For loop:
standing from 0 → 1 → 2 → 3 → ...

Recursive approach:
works backwards
```

A recursion tree is formed.

The notebook starts with:

```text
Index:  0  1  2  3  4  5  6  7  8
Value:  0  1  -  -  -  -  -  -  -
                         F(5), n = 5
```

The recursive approach says:

```text
To find F(5), I need F(4) and F(3).

So recursion says to find out F(5) first of all
find out F(4) and F(3), then add them up and
return the value of F(5).

And to find out F(4), I need to find out F(3)
and F(2) and I have to do it and return.
```

To find out `F(3)`, I have to find out `F(2)` and `F(1)`, and I have to
return. And to find out `F(2)`, I have to add `F(1)` and `F(0)` and then
I have to return.

So this is how recursion works.

### Recursion Tree --- `F(5)`

```text
                         F(5)
                       /      \
                    F(4)      F(3)
                   /   \      /   \
                F(3)   F(2) F(2)  F(1)
               /  \    / \   / \
            F(2) F(1) F(1) F(0) F(1) F(0)
            / \
         F(1) F(0)
```

The notebook marks the base cases:

```text
F(1)
F(0)
```

as the **BASE CASE**.

This tree demonstrates how recursion keeps going one level deeper until
it reaches `F(1)` and `F(0)`.

## In recursion

There are two important things:

```text
1. Recursive Case
2. Base Case
```

The branches forwarded into the recursive case are the recursive calls,
while the values `F(1)` and `F(0)` are the base cases.

The notebook then notes that if the values of `F(1)` and `F(0)` are
known, recursion starts going back up.

```text
This is also known as
bottom-up approach.
```

## 3. Recursive Code --- Approach 1

```js
function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
```

### Base Case

The base-case condition defined above in the `fib(n)` function works
like this:

```text
if n = 1
→ it falls under the base-case condition
→ it returns n
→ which is 1 itself
```

But if:

```text
n = 0
```

then it also falls under the base-case condition and returns `n`, which
is `0` itself.

And if:

```text
n < 0
```

then it represents negative numbers and this recursive function would
return `n`, which is a negative number itself.

## Recursion Tree

The notebook expands the recursive Fibonacci calls for `fib(5)`.

### Recursive function used at every branch

```js
function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
```

### Expansion of `fib(5)`

```text
fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1)
│   │   │   └── fib(0)
│   │   └── fib(1)
│   └── fib(2)
│       ├── fib(1)
│       └── fib(0)
└── fib(3)
    ├── fib(2)
    │   ├── fib(1)
    │   └── fib(0)
    └── fib(1)
```

The notebook numbers repeated branches and traces how each recursive
call returns back upward.

The final result is:

```text
fib(5) → 5
```

## Why is it making a tree?

See, it is making two structures like this:

```text
             f(n)
            /   \
        f(n-1)  f(n-2)

        f(n-2)  f(n-3)
```

The recursive `fib(n)` function is called multiple times, so it keeps
making two branches until the base case.

### Example

Suppose there is a function like:

```js
function fn() {
  return fn(n - 1) + fn(n - 2) + fn(n - 3);
}
```

The above `fn(n)` function will form the recursion tree.

```text
                         fn(n)
                    /       |       \
                fn(n-1)   fn(n-2)   fn(n-3)
               / | \       / | \       / | \
              ... ...     ... ...     ... ...
```

So every time the recursion will go one level deep, it will make three
branches:

```text
one for fn(n - 1)
one for fn(n - 2)
one for fn(n - 3)
```

The notebook continues from the previous recursion-tree example.

## What is the Time Complexity of this algorithm?

The tree is shown approximately as:

```text
Level 1 → n
Level 2 → 2n
Level 3 → 4n
Level 4 → 8n
...
```

More generally:

```text
n → 2n → 4n → 8n → ... → 2ⁿ
```

The number of branches grows exponentially.

Therefore:

```text
Time Complexity → O(2ⁿ)
```

The notebook marks:

```text
{This is Exponential Time Complexity}
{And this is V.V. Bad}
```

The note explains that this time complexity is not good because the
algorithm is making many branches.

### How to remove this time complexity?

```text
To remove the time complexity of this algorithm
I will use Dynamic Programming (DP).
```

## 75. Interview Question --- Rabbit Population

Suppose there are `2` rabbits and they multiply by `2` every month.

```text
How many rabbits will be there after n months?
```

### A.

This is the type of question where Fibonacci and recursion concepts come
into the picture because `2` rabbits are multiplying by `2` every month.

### Illustration

```text
                ○
              /   \
            ○       ○
           / \     / \
          ○   ○   ○   ○
```

The notebook notes that this is leading toward a Fibonacci-like
recursion idea, but it is **not directly a Fibonacci series**. Instead,
the rabbits are multiplying by `2`.

```text
2 rabbits
   ↓ ×2
4 rabbits
   ↓ ×2
8 rabbits
   ↓ ×2
16 rabbits
```

So basically, to find out the rabbits in the `n`th month:

```text
I need to find out rabbits in n - 1 month
and I need to find out in n - 2 months.
```

The notebook then points out that the question is a bit tricky because
an assumption has to be made.

It asks:

```text
How many rabbits are there if they multiply?
```

For example:

```text
2 rabbits multiply into 4
or
2 rabbits multiply into 2
```

So there can be different types of questions, and the exact answer
depends on the assumption made.
