# Star Pattern

### 17. How do I print below star pattern on console where n = 4?

```text
* * * *
* * * *
* * * *
* * * *
```

**A.**

```text
let n = 4;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<n; j++) {
        row = row + "*";
    }

    console.log(row);
}
```

Console:

```text
* * * *
* * * *
* * * *
* * * *
```

```text
i = (loop)    j = (loop)
0             4 lines
1             4 lines
2             4 lines
3             4 lines
```

**Note:** So, i is responsible for how many rows of stars it will have and j is responsible for how many columns of stars it will have.

### 18. How do I print below stars pattern on console where n = 4?

```text
*
* *
* * *
* * * *
```

**A.**

```text
let n = 4;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<i+1; j++) {
        row = row + "*";
    }

    console.log(row);
}
```

Console:

```text
*
* *
* * *
* * * *
```

```text
i = (loop)    j = (loop)
0             1 line
1             2 lines
2             3 lines
3             4 lines
```

### 19. Different conditions but same loop?

**A.**

#### 1.

```text
for(let i=0; i<5; i++) {
    // 5 times -> [0,1,2,3,4]
}

for(let i=0; i<=4; i++) {
    // 5 times -> [0,1,2,3,4]
}
```

**Same loops**

#### 2.

```text
let n = 4;

for(let i=0; i<n+1; n++) {
    // 5 times -> [0,1,2,3,4]
}

for(let i=0; i<=n; n++) {
    // 5 times -> [0,1,2,3,4]
}
```

**Same loops**

### 20. How do I print below pattern on console where n = 5?

```text
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

**A.**

```text
let n = 5;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<=i; j++) {
        row = row + (j+1);
    }

    console.log(row);
}
```

P.T.O.

## Pattern Dry Run

```text
j loop before i+1

i = (loop)    j = (loop)
0             0
1             0 1
2             0 1 2
3             0 1 2 3
4             0 1 2 3 4

(j+1)

i = (loop)    j = (loop)
0             1
1             1 2
2             1 2 3
3             1 2 3 4
4             1 2 3 4 5
```

Complete flow below:

```text
Console          i = (loop)    j = (loop)
1                0             1 line
1 2              1             2 lines
1 2 3            2             3 lines
1 2 3 4          3             4 lines
1 2 3 4 5        4             5 lines
```

### 21. How do I print below pattern on console where n = 5?

```text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

**A. 1.**

```text
let n = 5;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<=i; j++) {
        row = row + (i+1);
    }

    console.log(row);
}
```

Console:

```text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

```text
i = (loop)    j = (loop)
0             1 line (i+1) x 1
1             2 lines (i+1) x 2
2             3 lines (i+1) x 3
3             4 lines (i+1) x 4
4             5 lines (i+1) x 5
```

#### 2.

```text
let n = 5;

for(let i=1; i<=5; i++) {
    let row = "";

    for(let j=1; j<=i; j++) {
        row = row + i;
    }

    console.log(row);
}
```

Console:

```text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

```text
i = (loop)    j = (loop)
1             1 lines (i x 1)
2             2 lines (i x 2)
3             3 lines (i x 3)
4             4 lines (i x 4)
5             5 lines (i x 5)
```

### 22. How do I print below pattern on console where n = 5?

```text
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

**A.**

```text
let n = 5;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<n-(i+1); j++) {
        row = row + (j+1);
    }

    console.log(row);
}
```

P.T.O.

### 23. How do I print below stars pattern on console where n = 5?

```text
* * * * *
* * * *
* * *
* *
*
```

**A.**

```text
let n = 5;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<n-i; j++) {
        row = row + "*";
    }

    console.log(row);
}
```

Console:

```text
* * * * *
* * * *
* * *
* *
*
```

```text
i = (loop)    j = (loop)
0             5 lines
1             4 lines
2             3 lines
3             2 lines
4             1 line
```

`(n-i)`

### 24. How do I print below star pattern where n = 5?

```text
        *
      * *
    * * *
  * * * *
* * * * *
```

**A.**

```text
let n = 5;

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<n-(i+1); j++) {
        row = row + " ";
    }

    for(let k=0; k<i+1; k++) {
        row = row + "*";
    }

    console.log(row);
}
```

```text
Console       i = (loop)    j = (empty space)    k = (star loop)

    *         0             4 lines             1 line
  * *         1             3 lines             2 lines
* * *         2             2 lines             3 lines
* * * *       3             1 line              4 lines
* * * * *     4             0 line              5 lines
```

`(n-(i+1))` = Empty space

`(i+1)` = Star loop

### 25. How do I print below pattern on console where n = 6?

```text
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
```

**A.**

```text
let n = 6;

for(let i=0; i<n; i++) {
    let row = "";
    let toggle = 1;

    for(let j=0; j<=i; j++) {
        row = row + toggle;

        if(toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row);
}
```

### 26. How do I print below pattern on console where n = 5?

```text
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
```

**A.**

```text
let n = 5;
let toggle = 1;   ← By defining toggle outside it won't get redefined

for(let i=0; i<n; i++) {
    let row = "";

    for(let j=0; j<=i; j++) {
        row = row + toggle;

        if(toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row);
}
```

→ Switch toggle
