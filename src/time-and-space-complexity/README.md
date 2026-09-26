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
