# Time/Space Complexity

## Time & Space Complexity

### 37. Define Algorithm?

**A.** Whenever I got a problem let's say I got an array to sort it up so I have to develop an algorithm or solution. So this solution is known as algorithm.

So if I say like:

1. I want to sort it up using a bubble sort then this is an algorithm.
2. I want to sort it like using a selection sort then this is an algorithm.

And there are so many types of algorithm. So basically my solution reaching whatever solution I'll be developing for that problem is known as Algorithm.

### 38. Define Time Complexity?

**A.** Time Complexity is used to measure the efficiency of algorithm in terms of speed, as input size grows.

Let's understand the above Time Complexity definition by breaking it down into small units with an example below:

# Time Complexity

## 1. "Measure efficiency of algorithm" this phrase consists of couple of following queries:

a. How would I measure the efficiency of that solution?

b. Whether where my solution is efficient or inefficient?

c. Is a good or bad solution?

So, to measure efficiency I need time complexity in terms of speed.

## 2. "in terms of speed"

So basically, whenever I say Time Complexity that means "speed" comes into picture.

So algorithm which has low time complexity that means it has high speed so it means it is a better approach and it will run faster.

**SPEED ↑**

## 3. Clarification of myth that "Time Complexity = Time Taken"

Suppose, I have developed an algorithm let say searching algorithm and suppose it takes 10 ms to run my program so what is this "Time Taken"?

And some people think that "Time Complexity = Time Taken" but no it's not so.

**Time Complexity ≠ Time Taken**

And actually, time taken isn't so important because it depends where I'm running the code meaning it depends on lots of factors like:

a. It depend on machine where I'm running the code.

b. It can depend on language of code that I'm writing.

c. Etc.

So "time taken" is not the right parameter to define the efficiency of an algorithm. So that's why, we come up with "Time Complexity".

## 4. Now, I need to find:

**Speed Efficiency → When input size grows**

### Examples:

a. How the code execute in two algorithm? And then I'll try to figure it like:

i. What is an efficient algorithm?

ii. What is time complexity and everything?

| Linear Search          | Binary Search                               |
| ---------------------- | ------------------------------------------- |
| `[2,1,3,5,4,7]`        | `[1,3,4,7,9,10,15]`                         |
| Search (5)             | Search (10)                                 |
| `n elements → n lines` | Binary search always happen on sorted array |
|                        | Search (10)                                 |
|                        | `[9,10,15]`                                 |
|                        | `n elements`                                |
|                        | Mathematically: `n/2 × 1/2 × 1/2 × ... × x` |
|                        | `n/2^x = 1`                                 |
|                        | `n = 2^x`                                   |
|                        | `log₂ n = x` ← No. of lines                 |

### 39. How do I represent Time Complexity?

To represent time complexity, we use something known as **Big O notation**.

### 40. Define Big O notation?

Big O notation says we will measure the **time complexity in the worst case**.

### 41. Why does Big O notation measure Time Complexity in the worst case?

The notebook compares Linear Search and Binary Search.

```text
| Linear Search                         | Binary Search                         |
|---------------------------------------|---------------------------------------|
| [5,6,1,0,7]                           | [5,8,10,15,20]                        |
| Best Case → Search(5)                 | Best Case → Search(10)                |
| x = 1 line                            | x = 1 line                            |
|                                       |                                       |
| Worst Case → Search(100)              | Worst Case → Search(100)              |
| x = 5 lines                           | x = 3 lines                           |
| x = n lines                           | x = log(n)                            |
```

### 42. What is notation in Big O notation?

“Notation” is nothing but a **symbol** and nothing more than that.

Examples from the notes:

```text
$  → Dollar symbol
₹  → Indian Rupee symbol
```

### 43. What is O symbol and how to write it?

Suppose we have to write the time complexity of Linear Search and Binary Search.

```text
1. Linear Search

   O(n)
```

The notebook explains that `n` is related to the number of operations/input size.

```text
2. Binary Search

   O(log n)
```

This is known as logarithmic time complexity.

```text
O(log n)  >>  O(n)
```

### 44. What are the common Time Complexities?

The notebook starts listing the common time complexities.

#### 1. O(n) → Linear Search

```text
O(n)

for(let i=0; i<n; i++) {
    // operation
}

n = n
```

### 2. O(log n) → Binary Search

```text
O(log n)

n
↓
n/2
↓
n/4
↓
n/8
↓
...
↓
1
```

The notebook writes:

```text
n → n/2 → n/4 → n/8 → ... → 1

x = log₂ n
```

### 3. O(n²) → Nested Loop

```text
for(i = 0; i < n; i++) {

    for(j = 0; j < n; j++) {

        // operation
    }
}
```

The inner loop runs `n` times for every iteration of the outer loop.

```text
| i = 0 | n operations |
| i = 1 | n operations |
| i = 2 | n operations |
| ...   | ...           |
| i = n | n operations |
```

Therefore:

```text
n × n = n²

O(n²)
```

The notebook notes:

> Whenever I see a nested loop in any algorithm that I will develop, and I am using nested loop, that means my time complexity is O(n²).

### 4. O(n log n) → Merge Sort

```text
for(i = 0; i < n; i++) {

    n × 1/2 × 1/2 × 1/2 × ... × 1
                    ↑
                  log n
}
```

Therefore:

```text
O(n × log n)
    ↓
O(n log n)
```

### 5. O(n³)

When there are **3 nested levels of loops**, the time complexity can become:

```text
O(n³)
```

### 6. O(2ⁿ)

The notebook explains exponential complexity with the idea that the number of operations grows exponentially.

```text
O(2ⁿ)
```

The notes illustrate the growth as the input grows.

### 7. O(n!)

```text
O(n!)

→ O of n factorial
```

The notebook notes that this is a **very high time complexity**, so generally we do not want to see this type of time complexity in normal efficient algorithms.

### 8. O(1)

```text
O(1)
→ Constant Time Complexity
```

Constant time means that even if the array/input size grows, the operation remains constant.

```text
| n = 10   | x = 1 |
| n = 100  | x = 1 |
| n = 1000 | x = 1 |
```

The notebook explains that `n` does not significantly affect the number of operations.

Suppose we are given an array `[n]` and want to find the number at index `5`.

```text
arr[5]
```

This is a very fast operation because it goes directly to a specific position of the array.

```text
arr[5] → O(1)
```

## Graph of All Common Time Complexities

The notebook draws a graph with:

```text
Y-axis → Time Complexity
X-axis → n
```

The curves/lines shown are:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2ⁿ)
O(n!)
```

### Efficiency Order Written in the Notes

```text
O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2ⁿ) > O(n!)
```

The notebook's intended meaning is that the lower-growth complexities are more efficient as `n` becomes large.

## 45. Define Space Complexity?

Space Complexity means **how much extra space we are using**.

### 1. Find 5th Element in Array

```text
Find5thElementInArray(arr) {
    return arr[5];
}
```

```text
Time Complexity  → O(1)
Space Complexity → O(1)
```

### 2. Find Maximum Array

```text
FindMaxArray(arr) {
    let max = arr[0];

    for(let i = 0; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
```

```text
Space Complexity → O(1)
Time Complexity  → O(n)
```

### 3. Double Array Elements

The notebook gives:

```text
[1,2,3,4,5]
↓
[2,4,6,8,10]
```

Code:

```text
DoubleArray(arr) {
    newArray = [size(n)];

    for(let i = 0; i < n; i++) {
        newArray[i] = arr[i] × 2;
    }

    return newArray;
}
```

```text
| Time Complexity | Space Complexity |
|-----------------|------------------|
| O(n)            | O(n)             |
```

The new array requires additional space proportional to `n`.

## 4. 2D Array Example

Given an array:

```text
[1,3,2,8,10]
```

Create a 2D array where the array number elements double.

The notebook shows:

```text
[
 [1,  3,  2,   8,  10],
 [2,  6,  4,  16, 20],
 [8, 12,  8,  32, 40],
 [16,24, 16,  64, 80],
 [32,48, 32, 128,160]
]
```

The notes mark:

```text
Time Complexity  → O(n²)
Space Complexity → O(n²)
```

### 46. Corner Cases

```text
arr[] → size n
```

Two loops:

```text
for(i = 0; i < n; i++) {

    for(j = 0; j < n; j++) {
        // operation
    }
}
```

The notebook simplifies the operation count:

```text
n + n = 2n
```

Then:

```text
O(2n)
  ↓
O(n)
```

The note says the constant `2` is ignored in Big O.

```text
O(2n) = O(n)
```

### Nested Loops

```text
for(1...n) {
    for(1...n) {
        // operation
    }
}
```

```text
n × n

O(n²)
```

### 3 Independent Loops

```text
for(1...n) {
    // operation
}

for(1...n) {
    // operation
}

for(1...n) {
    // operation
}
```

```text
3n

O(3n)
↓
O(n)
```

### Difference — Nested vs Independent

```text
| Nested Loops                       | 3 Independent Loops              |
|------------------------------------|----------------------------------|
| n × n                              | 3n                               |
| O(n²)                              | O(3n) → O(n)                     |
|                                    |                                  |
| n = 10 → 100x                      | n = 10 → 30x                     |
| n = 100 → 10000x                   | n = 100 → 300x                   |
| n = 1 million → (1 million)²      | n = 1 million → 3 million       |
```

The notebook then shows that constants can be ignored:

```text
O(2n)
O(3n)
O(5n)
O(10n)

        ↓

      O(n)
```

So, when comparing:

```text
O(n²)  vs  O(3n)
```

we simplify the second one to `O(n)`.

### 2.

```text
O(n² + n)
```

The higher-order term dominates:

```text
O(n² + n)
      ↓
    O(n²)
```

### 3.

```text
O(n³ + n + n²)
```

The highest-order term is `n³`:

```text
O(n³ + n + n²)
        ↓
      O(n³)
```

### 4.

```text
O(n² + 2n)
      ↓
    O(n²)
```

### 5.

```text
O(n² + n log n + 2n + 5)
              ↓
            O(n²)
```

The notebook writes the rule:

> So whenever there is a greater order in the time complexity, boil down to that order.

The same idea applies to Space Complexity: if there is a higher-order term, it dominates the lower-order terms.
