# Sum of first n numbers

**P.T.O.**

---

# Page 91

## 67. Sum of first n numbers?

### A. Let's try to understand and solve it

```text
sum(n)
```

The problem is:

```text
1 + 2 + 3 + ......... + n
```

For:

```text
n = 5
```

```text
1 + 2 + 3 + 4 + 5 = 15
```

Therefore:

```text
sum(5) ⇒ 15
```

---

## 2. Example 1

Suppose person A wants to know:

```text
How many people are there in the queue?
```

Queue:

```text
A  B  C  D  E  F  G  H  I  J
```

People behind each person:

```text
A → 9
B → 8
C → 7
D → 6
E → 5
F → 4
G → 3
H → 2
I → 1
J → 0
```

The notebook writes:

```text
9 + 1 = 10
```

According to recursion:

```text
peopleBehind(A) != 1 + peopleBehind(B)
```

Then:

```text
behind(A) = 1 + behind(B)

behind(B) = 1 + behind(C)

...
```

The notebook marks this as:

```text
{So it is kind of a loop right}
```

Explanation:

```text
So what it do, it will keep on going to another
function to another function..... and it will keep on
adding 1 to it. So, that's how basically the Recursion
works.
```

## Example 2

```text
1 + 2 + 3 + 4 + 5 = 15

5 + 4 + 3 + 2 + 1 = 15
```

The notebook notes:

```text
So both way of adding number gives same result
```

The second expression is marked:

```text
{Recursion}
```

The notebook then asks the sub-problem questions:

```text
1. Element 5: What is the sum of elements before 5?

2. Now 4 will find out what is the sum of
   numbers before 4?

3. Now 3 will find out what is the sum of
   numbers before 3?

4. Now 2 will find out what is the sum of
   numbers before 2?

5. Now 1 will find out what is the sum of numbers before 1?
```

Then:

```text
And once they find out all the numbers and keep
on adding them, it will give me a same answer
15.
```

---

## 2. Approach 1

```text
5 + 4 + 3 + 2 + 1 = 15
```

```js
function sum(n) {
  if (n == 0) return 0;

  return n + sum(n - 1);
}

sum(5);
```

## Dry run approach 1

### Call Stack

```text
sum(0)              → 0

sum(1)              → 1 + sum(1 - 1)

sum(2)              → 2 + sum(2 - 1)

sum(3)              → 3 + sum(3 - 1)

sum(4)              → 4 + sum(4 - 1)

sum(5)              → 5 + sum(5 - 1)
```

### Return / calculation

```text
sum(0) = 0

sum(1) = 1 + 0 = 1

sum(2) = 2 + 1 = 3

sum(3) = 3 + 3 = 6

sum(4) = 4 + 6 = 10

sum(5) = 5 + 10 = 15
```

The notebook's dry-run diagram shows:

```text
sum(0) → 0

sum(1) → 1 + sum(0) → 1

sum(2) → 2 + sum(1) → 3

sum(3) → 3 + sum(2) → 6

sum(4) → 4 + sum(3) → 10

sum(5) → 5 + sum(4) → 15
```

At the bottom:

```text
{Sum of value 5}
```

### Tree Dry Run Explanation (Reverse)

The notebook notes:

```text
This whole tree is created just by two lines of code
```

The tree is represented as:

```text
1 + sum(0)     → 0
      ↓
2 + sum(1)     → 1
      ↓
3 + sum(2)     → 3
      ↓
4 + sum(3)     → 6
      ↓
5 + sum(4)     → 10
      ↓
return sum(5)  → 15
```

## Formula

```text
sum(n) = n + sum(n - 1);
```

## About sub problem

The notebook breaks the problem into smaller sub-problems:

```text
sum(4....1)

5 + 4 + 3 + 2 + 1
```

Then:

```text
sum(3....1)

4 + 3 + 2 + 1
```

Then:

```text
sum(2....1)

3 + 2 + 1
```

The notebook labels these as:

```text
Sub Problems
```

---

## Straight Tree Dry run

```text
sum(5) → 15
   ↓
5 + sum(4) → 10
   ↓
4 + sum(3) → 6
   ↓
3 + sum(2) → 3
   ↓
2 + sum(1) → 1
   ↓
1 + sum(0) → 0
   ↓
0
```

The notebook marks:

```text
return 15
```

and:

```text
{Sum of value 5}
```
