# Loops 01

5. How can I do repetitive task?

A. By using loop I can do a repetitive tasks.

6. What is the meaning of loop?

A. Loop means doing the thing over and over.

7. How many types of loops are there in javascript?

A. There are two types of loops:

1. for loop
2. while loop

3. How for loop works?

A. Lets understand how for loop works through an example below:

1. Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}
```

```text
i = 0
i = 1
i = 2
i = 3
i = 4
i = 5  fail
```

Console:

```text
Hello World
Hello World
Hello World
Hello World
Hello World
```

2.

```javascript
for (let i = 0; i <= 4; i++) {
  console.log("Hello World");
}
```

```text
i = 0
i = 1
i = 2
i = 3
i = 4
i = 5  fail
```

Console:

```text
Hello World
Hello World
Hello World
Hello World
Hello World
```

3.

```javascript
for (let i = 3; i < 5; i++) {
  console.log("HW");
}
```

```text
i = 3
i = 4
i = 5  fail
```

Console:

```text
HW
HW
```

4.

```javascript
for (let i = 2; i < 9; i = i + 2) {
  console.log("HW");
}
```

```text
i = 2
i = 4
i = 6
i = 8
i = 10  fail
```

Console:

```text
HW
HW
HW
HW
```

5.

```javascript
for (let i = 5; i > 0; i = i - 1) {
  console.log("Hello World");
}
```

```text
i = 5
i = 4
i = 3
i = 2
i = 1
i = 0  fail
```

Console:

```text
Hello World
Hello World
Hello World
Hello World
Hello World
```

6.

```javascript
for (let i = 5; i < 4; i++) {
  console.log("Hello World");
}
```

```text
i = 5  fail
```

Condition fail so loop will never run.

7.

```javascript
for (let i = 0; i > 0; i++) {
  console.log("Hello World");
}
```

```text
i = 0  fail
```

Condition fail so loop will never run.

8.

```javascript
for (let i = 1; i > 0; i++) {
  console.log("Hello World");
}
```

```text
i = 1
i = 2
i = 3
i = 4
i = 5
i = 6
i = 7
i = 8
i = 9
i = 10
```

Infinite loop.

9. How while loop works?

```javascript
let i = 0;

while (i < 5) {
  console.log("Hello World");
  i++;
}
```

```text
i = 0
i = 1
i = 2
i = 3
i = 4
i = 5  fail
```

Console:

```text
Hello World
Hello World
Hello World
Hello World
Hello World
```
