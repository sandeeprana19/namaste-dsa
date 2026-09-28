# Recursion 101

## 58. Define Recursion?

### A.

```text
Function calls itself to solve smaller version
of the same problem.
```

Example:

```text
fn() {
    fn()
}
```

The inner `fn()` is the function calling itself.

---

## 59. How many parts of Recursion are there?

### A.

There are two parts of recursion:

### 1. Base case

```text
Stop condition
(when to stop calling itself)
```

### 2. Recursive case

```text
Parts where function calls itself
```

Example:

```text
fn() {
    fn()   → {Recursive Case}
}
```

## 60. Real Life Examples

The notebook gives three real-life examples:

```text
1. Queue of people
2. Comment Threads
3. Organisational Hierarchies
```

### A. 1. Queue of people

The notebook shows a queue of people and recursion moving from one person to the next.

```text
Start
  ↓
[person][person][person][person] ... [person]
                                         ↑
                                        End
```

The positions shown below the people are:

```text
12  11  10  9  8  7  6  5  4  3  2  1  0
```

The notebook writes:

```text
12 + 1 = 13
```

Question:

```text
How many people
in the queue?
```

This is described as:

```text
{This process in the real world
 example of Recursion}
```

### 2. Comment Threads

The notebook explains that there are comment threads inside Reddit or any social-media app, and Reddit has many nested comments.

A nested structure is drawn where each comment leads to a child/reply:

```text
Comment
   ↓
  Reply
   ↓
  Reply
   ↓
  Reply
   ↓
  Reply
   ↓
  Reply
```

The explanation says that each comment has its own reply until the replies end, meaning there is a child where there is no reply.

```text
{This is also a kind of Recursion}
```

### 3. Organisational Hierarchies

The notebook asks:

```text
So suppose I need to find out how many people are there
in organisation? Then how would I find out?
```

The organisational hierarchy is represented as a tree.

```text
                         CEO
                       /     \
                     CTO     CMO
                   / |  \    / \
                  ○  ○   ○  ○   ○
                 / \       |
                ○   ○      ○
               / \
              ○   ○
                  \
                   ○
```

The notebook explains the recursion approach:

```text
So, I will keep these people starting from bottom
and they keep on telling me how many children
are there and then I keep on counting and then
when I reach at the CEO level then I get the
total number of people in the organisation.
```

Conclusion:

```text
So that how kind of Recursion works.
```

---

## 61. What a function call inside a function means?

### A.

```js
function Fun() {
  console.log("Namaste");
  Fun();
}

Fun();
```

The note points out:

```text
So this function calling itself
is known as Recursion.
```

### Console

```text
Namaste
Namaste
Namaste
Namaste
...
∞
```

```text
{Infinite Loop}
```

## 62. Recursion & Call Stack

```js
function fun(num) {
  console.log(num);
  num = num - 1;
  fun(num);
}

a = 5;
fun(a);
```

Question written in the notebook:

```text
How Call stack will behave into above example?
And how the whole above example code will
run actually?
```

### Dry run without a base case

The first call is:

```text
a = 5;
fun(a);
```

Call sequence:

```text
fun(5)
fun(4)
fun(3)
fun(2)
fun(1)
fun(0)
fun(-1)
fun(-2)
fun(-3)
...
```

Console:

```text
5
4
3
2
1
0
-1
-2
-3
-4
...
∞
```

The notebook marks:

```text
{Endless Recursion}
```

and shows the call stack continuing to grow.

### Base Case

The notebook then adds:

```js
if (num == 0) return;
```

This is marked as:

```text
{Base Case}
```

and the call stack can stop at `0`.

## Dry run Recursion having base case defined

```js
function fun(num) {
  if (num == 0) return;

  console.log(num);
  num = num - 1;
  fun(num);
}
```

```text
a = 5;
fun(a);
```

### Console

```text
5
4
3
2
1
```

The notebook notes:

```text
This base case stops Recursion.
```

and:

```text
Console.log doesn't happen &
this code will not run again.
```

Once:

```text
0 == 0
```

matches, the program returns from there and the recursion ends.

The notebook writes an important note:

```text
Wherever I will write recursion code most of
time, the first thing that I will write on the
top of the function will be my base case.
```

Then:

```text
Always Always Always Always make sure that
my base case is written on the top and it actually
stop the recursion.

And if I make mistake over there then I will
run into an infinite loop.
```

Conclusion:

```text
So this is what is Recursion along with Recursive
Case and Base Case.
```

## Dry run! Recursion and Call Stack in case of infinite loop and see how call stack behaves.

```js
function fun(num) {
  console.log(num);
  num = num - 1;
  fun(num);
}

a = 5;
fun(a);
```

### Call Stack

```text
fun(5)
fun(4)
fun(3)
fun(2)
fun(1)
fun(0)
fun(-1)
fun(-2)
fun(-3)
fun(-4)
...
```

Console begins with:

```text
5
4
3
2
1
0
...
```

The notebook marks:

```text
{Stack Overflow}
```

and shows the stack continuing to grow.

### Conclusion

```text
So, infinite recursion leads to infinite recursion.
So this is Stack Overflow.
```

The notebook explains:

```text
So, when I keep putting functions inside the call
stack and it ends meaning it basically overflows
because there is a capacity of where I am running
this code meaning capacity of the browser,
capacity of the machine, etc.

So when it happens that is actually known as
Stack Overflow.
```

## 63. Print n ........ to ........ 1 using Recursion?

### A. Code

## Approach 1

```js
function printNum(num) {
  if (num == 0) return;

  console.log(num);
  num = num - 1;
  printNum(num);
}

let a = 10;
printNum(a);
```

### Dry run

```text
printNum(10)
printNum(9)
printNum(8)
printNum(7)
printNum(6)
printNum(5)
printNum(4)
printNum(3)
printNum(2)
printNum(1)
printNum(0)
```

### Console

```text
10
9
8
7
6
5
4
3
2
1
```

The notebook notes:

```text
After return all printNum functions are popped out
and call stack become empty again.
```

### Approach 2

```js
function print(n) {
  if (n < 1) return;

  console.log(n);
  print(--n);
}

n = 10;
print(n);
```

### Dry run

```text
print(10)
print(9)
print(8)
print(7)
print(6)
print(5)
print(4)
print(3)
print(2)
print(1)
```

### Console

```text
10
9
8
7
6
5
4
3
2
1
```

The notebook again notes that after return, all print functions pop out and the call stack becomes empty again.

## 64. Print 1 to n using Recursion?

### A.

```text
n = 10;
```

```js
function print(x) {
  if (x > n) return;

  console.log(x);
  print(++x);
}

print(1);
```

### Dry run

```text
print(1)
print(2)
print(3)
print(4)
print(5)
print(6)
print(7)
print(8)
print(9)
print(10)
print(11) → return
```

### Console

```text
1
2
3
4
5
6
7
8
9
10
```

The notebook notes:

```text
After return all the print functions
pop out and call stack become empty again.
```

---

## 65. Common Mistakes?

### A.

```text
1. Missing Base Case - Stack Overflow
2. Not simplifying the input - never reaches base case
3. Too deep recursion - Large inputs
4. Keeping in mind the time complexity
```

---

## 66. When to use Recursion?

### A.

```text
1. Problem can be broken into sub problems.
2. Trees & Graphs
3. Backtracking, DP, Divide & Conquer.
```
