# Loops 01

### 5. How can I do repetitive tasks?

**A.** By using loop I can do a repetitive tasks.

### 6. What is the meaning of loop?

**A.** Loop means doing the things over and over again.

### 7. How many types of loops are there in javascript?

**A.** There are two types of loops:

1. for loop.
2. while loop.

### 8. How for loop works?

**A.** Let's understand how for loop works through an example below:

#### 1. Example:

```text
(Initialization) (Condition) (Change)
       ↓              ↓         ↓
for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}
```

Here:

- Initialization: `let i = 0`
- Condition: `i < 5`
- Change: `i++`

```text
i = 0
i = 1
i = 2
i = 3
i = 4
i = 5 (X) fails
{loop ends}

Console:
Hello World
Hello World
Hello World
Hello World
Hello World
= 5 times
```

#### 2. Example:

```text
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
i = 5 (X) fails
{loop ends}

Console:
Hello World
Hello World
Hello World
Hello World
Hello World
= 5 times
```

#### 3.

```text
for (let i = 3; i < 5; i++) {
    console.log("HW");
}
```

```text
i = 3
i = 4
i = 5 (X) fails
{loop ends}

Console:
HW
HW
= 2 times
```

#### 4.

```text
for (let i = 2; i < 9; i = i + 2) {
    console.log("HW");
}
```

```text
i = 2
i = 4
i = 6
i = 8
i = 10 (X) fails
{loop ends}

Console:
HW
HW
HW
HW
= 4 times
```

#### 5.

```text
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
i = 0 (X) fails
{loop ends}

Console:
Hello World
Hello World
Hello World
Hello World
Hello World
= 5 times
```

#### 6.

```text
for (let i = 5; i < 4; i++) {
    console.log("Hello World");
}
```

```text
i = 5 (X) fails
{Condition fails so loop will never run}

Console:
```

#### 7.

```text
for (let i = 0; i > 0; i++) {
    console.log("Hello World");
}
```

```text
i = 0 (X) fails
{Condition fails so loop will never run}

Console:
```

#### 8.

```text
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
...

Console:
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
...
Infinite Loop
```

### 9. How while loop works?

**A.**

```text
Initialization
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
i = 5 (X) fails
{loop ends}

Console:
Hello World
Hello World
Hello World
Hello World
Hello World
= 5 times
```
