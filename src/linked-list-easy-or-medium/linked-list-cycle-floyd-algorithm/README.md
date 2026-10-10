# Linked List Cycle - Floyd's Algorithm

### 105. Leetcode: 141. Linked List Cycle?

**A. Let's understand and solve it:**

### 1. Understand the problem

So basically, I have to find out a cycle inside a linked list.

Suppose the linked list is:

```text
(3) → (2) → (0) → (-4)
        ↑             |
        |_____________|
```

The `-4` is pointing back to some node which is already there in the linked list above, so this is the cycle.

So now, I need to find whether the linked list has a cycle or not?

- If a cycle is present → return `true`
- If the cycle is not present → return `false`

So, this is what I need to do in this program.

### 2. Floyd's Cycle Finding Algorithm

To solve this problem using the 2nd approach, I have to understand what is Floyd's Cycle Finding Algorithm?

Suppose there are two runners who are running in a race.

So, the 1st person and the 2nd person are there and both of these persons are running in a circular track where they are running.

And they are running in anti-clockwise direction like:

```text
        ↗──────────────↖
       /                \
      /                  \
     |        runners     |
      \                  /
       \________________/
```

The diagram continues the circular-track idea:

```text
        F
        (1)
       ↗   ↖
      /     \
     /       \
    (2)      ...
     ↖       ↙
       \   /
         S
```

So, what Floyd's Cycle Algorithm says that suppose 2 person are running and one person run faster suppose his 1st person is faster and the 2nd person is slower.

So what will happen they are running in a circular track?

So, what will happen is at some point of time after running and running and running, the slow and faster runner will meet at the same place.

Meaning, suppose there is a fast person and the another person is slow like:

### Slow & Fast Pointers Approach

```text
Slow = 1 step
Fast = 2 steps

Slow = Fast
→ difference in speed
→ Meet point
```

The diagram in the notes represents the slower runner moving around the inner circle and the faster runner moving around the outer circle until they meet.

So, Floyd's Algorithm says that they will meet once again and there will definitely be a point where my fast and slow pointer will meet once again if there is a difference in speed.

### How can I use the same logic inside finding our own linked list?

Suppose I have below linked list and I can have two pointers like:

- I can have a slow pointer.
- I can have a fast pointer.

Example:

```text
(1) → (2) → (3) → (4) → (5) → (6)
 ↑
 S

                         ↘
                           (7)
                         ↙
                  (8) ←────
```

The slow pointer moves 1 step at a time and the fast pointer moves 2 steps at a time.

And suppose my slow and fast pointers start from head like:

```text
S → 1 step
F → 2 steps
```

The notes then show the pointers moving through the cycle:

```text
S: 1 step at a time
F: 2 steps at a time

             (4) → (5)
            ↗        ↘
(1) → (2) → (3)      (6)
             ↖        ↓
              (8) ← (7)
```

At node 7 point, my slow pointer will definitely meet fast pointer if there is a cycle.

# Floyd's Cycle Finding Algorithm

Floyd's Cycle Finding Algorithm says that if cycle exist in a linked list so the slow pointer will meet the fast pointer at some pointer.

This is the theory of slow and fast pointer?

### Example: No cycle

Suppose, if the cycle doesn't exist in some other linked list like below example. And let's try to see how slow and faster pointer moves over there.

#### Even number of elements

```text
(1) → (2) → (3) → (4) → (5) → (6) → null
 ↑
 S

 F → moves 2 steps at a time
```

The notes mark the end with `{break loop}`.

As soon as:

```text
fast == null
```

return:

```text
false
```

which means **no cycle**.

#### Odd number of elements

```text
(1) → (2) → (3) → (4) → (5) → null
 ↑
 S

 F → moves 2 steps at a time
```

The notes show the fast pointer reaching the end and then the loop breaking.

So, this Floyd's Cycle Finding Algorithm is also known as **Slow & Fast Pointers Approach**.

## Pseudocode

```javascript
function hasCycle(head) {
  slow = head;
  fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
```

# Corner Case

My linked list can have 0 element or empty array as mentioned in problem constraints.

So, I need to handle this corner case as well like:

```javascript
function hasCycle(head) {
  if (!head) return false;

  slow = head;
  fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
```

The important corner case is the empty linked list:

```text
head = null
→ return false
```

### 2. Time and Space Complexity

#### Time Complexity

According to Floyd’s Algorithm, I am moving the slow pointer and fast pointer. The slow pointer is running at `x` speed and the fast pointer is running at `2x` speed.

When I am running something at `2x` speed, it will catch the slow pointer very fast, in just one or two loop cycles.

The fast pointer does not go in the order of `n²` or something, and it does not go into an infinite loop because it cannot. It will quickly catch the slow pointer if I am running it at `2x` speed.

So, the time complexity of this algorithm is:

`O(n)`

### Space Complexity

I am not using any extra space, so I am just using the slow pointer and fast pointer, like two variables.

So, the space complexity is:

`O(1)`

So, this Floyd’s Cycle-Finding Algorithm is much better than the previous **Hash Table or Hash Map** approach.

### 3. Dry Run

#### Case 1

The diagram shows a linked list whose pointers eventually meet:

`1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → (back into the list)`

The slow (`S`) and fast (`F`) pointers move through the list. When **Slow = Fast**, that means a **cycle** is present.

#### Case 2

The second diagram shows another list:

`1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → (back into the list)`

The pointers eventually meet as well, so the loop breaks and the function returns `true`.

The diagrams illustrate that when slow and fast pointers meet, a cycle is detected.
