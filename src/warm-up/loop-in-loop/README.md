# Loop in Loop

### 16. How double loop works?

**A.** Let's dry run double loop below:

```text
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // CODE
    }
}
```

```text
i = 0
    j = 0
    j = 1
    j = 2
    j = 3
    j = 4
    j = 5
    {inner loop ends}

i = 1
    j = 0
    j = 1
    j = 2
    j = 3
    j = 4
    j = 5
    {inner loop ends}

i = 2
    j = 0
    j = 1
    j = 2
    j = 3
    j = 4
    j = 5
    {inner loop ends}

i = 3
    j = 0
    j = 1
    j = 2
    j = 3
    j = 4
    j = 5
    {inner loop ends}

i = 4
    j = 0
    j = 1
    j = 2
    j = 3
    j = 4
    j = 5
    {inner loop ends}

i = 5
{outer loop ends}

5 x 5 = 25 times
```

**Code x 25**

**Example:**

#### 1.

```text
for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
        console.log(i,j);
    }
}
```

```text
Console

0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

#### 2.

```text
for(let i=0; i<3; i++) {
    for(let j=0; j<i; j++) {
        console.log(i,j);
    }
}
```

```text
Console

1 0
2 0
2 1
```

So, every time i value is increased then j count is getting increased:

```text
i(loop)    j(loop)
0          X
1          0 → 1 lines
2          0,1 → 2 lines
```

#### 3.

```text
for(let i=0; i<5; i++) {
    for(let j=0; j<=i; j++) {
        console.log(i,j);
    }
}
```

```text
Console

0 0
1 0
1 1
2 0
2 1
2 2
3 0
3 1
3 2
3 3
4 0
4 1
4 2
4 3
4 4
```

```text
i(loop)    j(loop)
0          0
1          0,1
2          0,1,2
3          0,1,2,3
4          0,1,2,3,4
```

#### 4.

```text
for(let i=0; i<3; i++) {
    for(let j=i; j>0; j--) {
        console.log(i,j);
    }
}
```

```text
Console

1 1
2 2
2 1
```

```text
i(loop)    j(loop)
0          X {loop won't start}
1          1
2          2
           1
3 (X) fails
{loop ends}
```

P.T.O.

### 5.

```text
for(let i=0; i<3; i++) {
    for(let j=i; j>=0; j--) {
        console.log(i,j);
    }
}
```

Console:

```text
0 0
1 1
1 0
2 2
2 1
2 0
```

```text
i = (loop)    j = (loop)

0             0

1             1
              0

2             2
              1
              0

3 (X) fails
{loop ends}
```

### 6.

```text
for(let i=5; i>0; i--) {
    for(let j=0; j<i; j++) {
        console.log(i,j);
    }
}
```

Console:

```text
5 0
5 1
5 2
5 3
5 4
4 0
4 1
4 2
4 3
3 0
3 1
3 2
2 0
2 1
1 0
```

```text
i = (loop)    j = (loop)

5             0
              1
              2
              3
              4

4             0
              1
              2
              3

3             0
              1
              2

2             0
              1

1             0
```

```text
i = 5   j = 5 lines
i = 4   j = 4 lines
i = 3   j = 3 lines
i = 2   j = 2 lines
i = 1   j = 1 line

15 lines
```
