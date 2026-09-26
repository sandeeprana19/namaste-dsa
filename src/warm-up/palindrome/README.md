# Palindrome

### 32. Define Palindrome?

**A.** An integer is a palindrome when it reads the same forward and backward. For example:

```text
Palindrome Number

121     -> 121       ✓
1443441 -> 1443441   ✓
143     -> 341       X   Not a palindrome number
-121    -> 121       X
```

```text
rev == num

rev = reverse number
num = number
```

### 33. Palindrome Number

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

**A.** Breaking the above problem into small units below:

#### 1. So, I know palindrome numbers are those numbers where:

```text
rev == num

       reverse
         number
```

#### 2. So, I need to find the reverse number mathematically like below:

```text
Reverse Number

    x   x   x   x
n = 1   2   3   4

rev = 4   3   2   1
```

I somehow have to find the last digit from original given number and then I have to keep adding into `rev` and then also I have to keep removing the added number from original number.

#### 3. So, now I need to find the last digit and also remove it like below:

```text
a. Find last digit => n % 10
b. Remove last digit => n / 10
```

#### 4. Now, I need to find the reverse number using while loop where n = 1234.

```text
n = 1234;
rev = 0;

while(n > 0) {
    rem = n % 10;
    rev = (10 * rev) + rem;
    n = Math.floor(n / 10);
}

if(rev == n) {
    return true;
} else {
    return false;
}
```

Dry run of above one:

```text
n = (Number)    rem = (Reminder)    rev = (Reverse)       n = (Number) (Updated)

1234            4                  (10 x 0) + 4 = 4      1234/10 = 123
123             3                  (10 x 4) + 3 = 43     123/10 = 12
12              2                  (10 x 43) + 2 = 432   12/10 = 1
1               1                  (10 x 432) + 1 = 4321 1/10 = 0 (X)
{loop ends}
```

#### 5. Now, I need to handle the negative number and also improve the above code a bit:

```text
n = 1234;

if(n < 0) return false;

nCopy = n;
rev = 0;

while(n > 0) {
    rem = n % 10;
    rev = (10 * rev) + rem;
    n = Math.floor(n / 10);
}

return rev === nCopy;
```
