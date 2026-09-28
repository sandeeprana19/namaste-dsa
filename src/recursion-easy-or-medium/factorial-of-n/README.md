# Factorial of n

## 70. What is a factorial?

### A.

Suppose I have to find the factorial of `5`:

```text
5! = 5 × 4 × 3 × 2 × 1
   = 120
```

The notebook notes:

```text
{This is known as Factorial}
```

---

## 71. What is the formula of factorial?

### A.

Formula:

```text
n! = n × (n - 1) × (n - 2) × ........ × 1
```

So, let's say I have to find `n` factorial then I have to use the
formula. So basically, I have to keep decreasing by `1` and I have to
keep multiplying those numbers.

## 72. Write a function factorial

I have to pass in `n` and it should return the result like:

```text
factorial(n) → result
```

### A. Let's understand and solve it

## 1. Approach 1

```js
function fact(n) {
  if (n == 1) return 1;

  return n * fact(n - 1);
}

console.log(fact(5));
```

### Dry Run

### Recursion Tree

```text
fact(5) → 120 → {return value}

5 * fact(4)
      ↓
4 * fact(3)
      ↓
3 * fact(2)
      ↓
2 * fact(1)
      ↓
1
```

The notebook also writes the recursive formula:

```text
fact(n) = n * fact(n - 1)

n = 1 → fact(1) = 1
```

## Call Stack

For `fact(5)`:

```text
fact(1)
    ↑
2 * fact(1)
    ↑
3 * fact(2)
    ↑
4 * fact(3)
    ↑
5 * fact(4)

5 * fact(4) = 120

return 120
```

The call stack builds while the recursive calls go down and then returns
back up after reaching the base case.

## 2. Corner Case

### a. Handling of factorial of zero and negative number

```js
function fact(n) {
  if (n < 0) return undefined;

  if (n <= 1) return 1;

  return n * fact(n - 1);
}

console.log(fact(0));
```

The notebook notes that:

```text
n < 0  → undefined
n <= 1 → 1
```

So:

```text
fact(0) → 1
```

## Dry Run: Zero Factorial

### Recursion Tree

```text
fact(0) → 1 → {return value}
             ↓
         {return}
```

### Call Stack

```text
fact(0)
   ↓
return 1
```

### Negative Number Factorial

```text
Recursion Tree:

fact(-5) → undefined
              ↓
        {return value}
```

### Call Stack

```text
undefined
   ↑
fact(-5)

{return}
```

# Power of Two

## 73. LeetCode: 231. Power of Two?

### A. Let's understand and solve it

## 1. How do I find whether something is a power of 2?

```text
2⁰ = 1

2¹ = 2

2² = 4 = 2 × 2

2³ = 8 = 2 × 2 × 2

2⁴ = 16 = 2 × 2 × 2 × 2
```

The notebook then asks:

```text
Now, let's say if I want to find out whether 16 is
the power of 2 or not then how shall I find it?
```

The approach written is to keep dividing `16` by `2`.

The division continues:

```text
16 / 2 = 8
 8 / 2 = 4
 4 / 2 = 2
 2 / 2 = 1
```

## Condition to check if `n` is power of 2

### 1. If `n` is a power of 2

```text
If (n) is power of 2 it means
if I keep ÷ by 2,
then it reaches (1) for sure
because this is the condition.
```

### 2. Below numbers cannot be power of 2

```text
1. 3      ❌
2. 5      ❌
3. 538721 ❌
```

The notebook notes:

```text
{ODD numbers cannot be a power of 2}
```

### 3. Suppose it is an even number which is not a power of 2

Example:

```text
6 / 2 = 3
3 / 2 = 1.5
1.5 / 2 = 0.75
```

So it goes less than `1`.

```text
0.75 < 1 → ❌
```

Therefore, if it goes less than `1`, then it is not a power of `2`.

## 2. Approach 1

```js
function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;

  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(n));
```

## Dry Run

### Recursion Tree

```text
powerOfTwo(16)
        ↓
powerOfTwo(8)
        ↓
powerOfTwo(4)
        ↓
powerOfTwo(2)
        ↓
powerOfTwo(1)
        ↓
      true
```

### Call Stack

```text
powerOfTwo(1) → {return true}

powerOfTwo(2)
        ↑
powerOfTwo(4)
        ↑
powerOfTwo(8)
        ↑
powerOfTwo(16)
```
