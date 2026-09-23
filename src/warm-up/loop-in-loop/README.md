# Loop in Loop

16. How does a double loop work?

A.

```js
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

The outer loop runs 5 times and the inner loop runs 5 times for every
outer-loop iteration.

Total:

```text
5 × 5 = 25 lines
```

Example 1

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
```

Output:

```text
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

Example 2

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}
```

Output:

```text
0 0
1 0
1 1
2 0
2 1
2 2
```

Number of lines:

```text
1 + 2 + 3 = 6
```

Example 3

```js
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}
```

Number of lines:

```text
1 + 2 + 3 + 4 + 5 = 15
```

Example 4

```js
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}
```

Output:

```text
1 1
2 2
2 1
```

Example 5

```js
for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(i, j);
  }
}
```

Example 6

```js
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
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

Total:

```text
5 + 4 + 3 + 2 + 1 = 15 lines
```
