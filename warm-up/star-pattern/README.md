# Star Patterns

17. How do I print below star pattern on console where `n = 4`:

```text
* * * *
* * * *
* * * *
* * * *
```

?

A.

```js
let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n; j++) {
    row = row + "*";
  }

  console.log(row);
}
```

Here:

- `i` is responsible for the number of rows.
- `j` is responsible for the number of columns.

17. How do I print below star pattern on console where `n = 4`:

```text
*
* *
* * *
* * * *
```

?

A.

```js
let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }

  console.log(row);
}
```

Before `i + 1`, the inner loop runs:

```text
i = 0  -> 1 line
i = 1  -> 2 lines
i = 2  -> 3 lines
i = 3  -> 4 lines
```

---

19. Different conditions but the same loop?

A.

1.

```js
for (let i = 0; i < 5; i++) {
  // 5 lines -> [0, 1, 2, 3, 4]
}

for (let i = 0; i <= 4; i++) {
  // 5 lines -> [0, 1, 2, 3, 4]
}
```

Both loops produce the same number of iterations.

2.

```js
let n = 4;

for (let i = 0; i < n + 1; i++) {
  // 5 lines -> [0, 1, 2, 3, 4]
}

for (let i = 0; i <= n; i++) {
  // 5 lines -> [0, 1, 2, 3, 4]
}
```

---

20. How do I print below pattern on console where `n = 5`:

```text
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

?

A.

```js
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }

  console.log(row);
}
```

---

21. How do I print below pattern on console where `n = 5`:

```text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

?

A.

```js
let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row = row + i;
  }

  console.log(row);
}
```

---

22. How do I print below pattern on console where `n = 5`:

```text
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

?

A.

```js
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }

  console.log(row);
}
```

The number of inner-loop iterations is:

```text
n, n-1, n-2, ..., 1
```

---

23. How do I print below star pattern on console where `n = 5`:

```text
* * * * *
* * * *
* * *
* *
*
```

?

A.

```js
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - i; j++) {
    row = row + "*";
  }

  console.log(row);
}
```

The inner loop runs:

```text
5 lines
4 lines
3 lines
2 lines
1 line
```

---

24. How do I print below star pattern on console where `n = 5`:

```text
        *
      * *
    * * *
  * * * *
* * * * *
```

?

A.

```js
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  // Adding spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }

  // Adding stars
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }

  console.log(row);
}
```

---

25. How do I print below pattern on console where `n = 6`:

```text
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
```

?

A.

```js
let n = 6;

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;

  for (let j = 0; j <= i; j++) {
    row = row + toggle;

    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }

  console.log(row);
}
```

---

25. How do I print below pattern on console where `n = 5`:

```text
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
```

?

A.

```js
let n = 5;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row = row + toggle;

    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }

  console.log(row);
}
```

The important logic is:

```js
if (toggle === 1) {
  toggle = 0;
} else {
  toggle = 1;
}
```

This switches the value between `1` and `0`.
