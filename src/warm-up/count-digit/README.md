# Count Digit

### 27. What is the basic logic to find the number of digits in the number let say n = 259 and n = 45786 algorithmically?

**A.**

```text
n = 259
259 ÷ 10
25 ÷ 10
2 ÷ 10
0

= 3
```

```text
n = 45786
45786 ÷ 10
4578 ÷ 10
457 ÷ 10
45 ÷ 10
4 ÷ 10
0

= 5
```

So, write a loop in such a way where I have to keep on dividing the number by 10 and I have to run the loop unless 0 is left.

### 28. Write a function that returns the count of digits in a number?

```text
function countDigits(n) {
}

let num = 259;
let result = countDigits(num);
```

**A.**

#### Logic:

```text
let count = 0;

while(n > 0) {
    n = n / 10;
    count++;
}

return count;
```

While `n > 0` keep on dividing it by 10.

Then increase the count.

Run again.

Dry run:

```text
n = 259

n       count
259     0
25      1
2       2
0       3
```

```text
n = 680125

n       count
680125  0
68012   1
6801    2
680     3
68      4
6       5
0       6
```

Complete flow:

```text
function countDigits(n) {
    let count = 0;

    while(n > 0) {
        n = n / 10;
        count++;
    }

    return count;
}

let num = 259;
let result = countDigits(num);

console.log(result);
```

Note: Pass this as argument to `Math.floor(n/10)` because `Math.floor()` round down the value like `25.9 => 25`.

### 29. How many mathematical rounding functions are there in javascript? Name them and define them?

**A.** There are mainly three mathematical rounding functions in javascript like:

#### 1. Math.ceil(x)

This function always round up no matter what the decimal point is.

For example:

```text
a. Math.ceil(10.0001) => round up to => 11
b. Math.ceil(10.5)    => round up to => 11
c. Math.ceil(10.9)    => round up to => 11
```

#### 2. Math.round(x)

This function always round up if decimal point is 0.5 or above otherwise it always round down if decimal point is less than 0.5.

For example:

```text
a. Math.round(10.5) => round up => 11
b. Math.round(10.1) => round down => 10
```

#### 3. Math.floor(x)

This function always round down no matter what the decimal point is.

For example:

```text
a. Math.floor(10.5) => round down to => 10
b. Math.floor(10.1) => round down to => 10
c. Math.floor(10.9) => round down to => 10
```

### 30. What are the corner cases of previous problem no. 28?

**A.** The following are the corner cases so what if:

#### 1. Number is 0:

```text
function countDigits(n) {
    if(n == 0) {
        return 1;
    }

    let count = 0;

    while(n > 0) {
        n = Math.floor(n/10);
        count++;
    }

    return count;
}

let num = 259;
let result = countDigits(num);
console.log(result);
```

#### 2. Number is negative let say -259:

```text
function countDigits(n) {
    if(n == 0) {
        return 1;
    }

    n = Math.abs(n);    // Convert to positive number

    let count = 0;

    while(n > 0) {
        n = Math.ceil(n/10);
        count++;
    }

    return count;
}

let num = -259;
let result = countDigits(num);
console.log(result);
```

### 31. Define Math.abs(x)?

**A.** `Math.abs(x)` function converts negative numbers to positive. And positive numbers will always be positive. For example:

```text
a. Math.abs(-259) => converts to => 259
b. Math.abs(259)  => converts to => 259
```
