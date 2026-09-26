### 34. Reverse Integer

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

**A.**

```text
n = 1234;
nCopy = n;
n = Math.abs(n);
rev = 0;

while(n > 0) {
    rem = n % 10;
    rev = (10 * rev) + rem;
    n = Math.floor(n / 10);
}

limit = Math.pow(2,31);    ← Calculate 2^31

if(rev < -limit || rev > limit-1) return 0;

return (nCopy < 0) ? -rev : rev;
```

Dry run:

```text
n = (number)    rem = (remainder)    rev = (reverse)        n = (number) (updated)

1234            4                   (10 x 0) + 4 = 4       (1234/10) = 123
123             3                   (10 x 4) + 3 = 43      (123/10) = 12
12              2                   (10 x 43) + 2 = 432    (12/10) = 1
1               1                   (10 x 432) + 1 = 4321  (1/10) = 0 (X)
{loop ends}
```

### 35. Define Math.pow(x,y)?

**A.** `Math.pow(x,y)` function calculates a number raised to the power of itself.

### 36. What is the other way to calculate a number power?

**A.** Let's say integer is `2^31` then:

```text
2**31
```

is the other way to calculate a number raised to the power of itself.
