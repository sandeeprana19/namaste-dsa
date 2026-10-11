### 1. Problem understanding

Basically, I have to check whether the given linked list is a palindrome. If it is a palindrome, I have to return `true`; otherwise, return `false`.

Examples drawn in the notes:

- `1 → 2 → 2 → 1` — palindrome
- `1 → 2` — not a palindrome

Let's see how to solve it.

The linked list below is a palindrome:

`HEAD → 1 → 2 → 3 → 3 → 2 → 1 → null`

There are two approaches to solve whether the above linked list is a palindrome or not:

1. The easy and straightforward approach.
2. A second approach, to be discussed later.

### 2. Approach 1

In approach 1, I can convert the above linked list to an array, and then I need to check whether the array is a palindrome.

#### How to convert this linked list?

Basically, I can push all its elements into an array, and my array will become something like this:

| Index |   0 |   1 |   2 |   3 |   4 |   5 |
| ----- | --: | --: | --: | --: | --: | --: |
| Value |   1 |   2 |   3 |   3 |   2 |   1 |

`n = 6`

### Pseudocode

```javascript
function isPalindrome(head) {
  let arr = new Array();
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) return false;
  }

  return true;
}
```

### Corner Case

The notes show an additional guard for an empty head or an empty list:

```javascript
function isPalindrome(head) {
  if (!head || !head.length) return false;

  let arr = new Array();
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) return false;
  }

  return true;
}
```

### Dry run

The example array has \(n = 6\):

| Index |   0 |   1 |   2 |   3 |   4 |   5 |
| ----- | --: | --: | --: | --: | --: | --: |
| Value |   1 |   2 |   3 |   3 |   2 |   1 |

The comparison proceeds from the outside toward the middle:

- Compare index `i` with index `n - i - 1`.
- For this example, compare `1` with `1`, `2` with `2`, and `3` with `3`.
- All comparisons match, so return `true` — the list is a palindrome.

### Time and space complexity

**Time complexity**

First, convert the linked list into an array by looping through the linked list and pushing all its values into the array. This takes:

\[
O(n)
\]

Checking whether the array is a palindrome also takes:

\[
O(n)
\]

Therefore:

\[
O(n) + O(n) = O(n+n) = O(n)
\]

**Space complexity**

Because the linked-list values are copied into an array, the additional space required is:

\[
O(n)
\]

An interviewer may ask whether Approach 1 can be optimized, whether the problem can be solved without extra \(O(n)\) space, whether it can be solved using \(O(1)\) space, or whether the space complexity can be reduced.

If the interviewer asks for a solution without extra space, move to an approach that does not convert the linked list into an array. Converting it into an array is described in the notes as undesirable extra work: the values are copied into an array and then checked.

Ideally, check the linked list directly to determine whether it is a palindrome.

### Approach 2 — How can I find a palindrome in a linked list?

Example linked list:

```text
HEAD
  1 → 2 → 3 → 3 → 2 → 1 → null
```

It is straightforward to check a palindrome in an array, but a linked list can only be traversed forward from its start.

Example non-palindrome-shaped list:

```text
HEAD
  1 → 2 → 3 → 4 → 5 → 6 → null
```

A singly linked list cannot be traversed backward, and it is not possible to directly find the previous element. The notes describe this as an obstacle to checking the values from both ends.

### Basic logic

To find a palindrome, first find the **middle element**. The middle is important because it determines the left half and right half that should match.

Example:

```text
HEAD
  1 → 2 → 3 | 3 → 2 → 1 → null
            mid
```

The corresponding values should match:

- The first `1` should equal the last `1`.
- The first `2` should equal the second-last `2`.
- The middle values `3` and `3` should match.

### Step 1 — Find the middle and reverse the second half

Suppose I find the middle element. Then I reverse the second half of the linked list. After reversing that half, the list can be compared from the beginning and from the reversed half.

Original:

```text
1 → 2 → 3 | 3 → 2 → 1 → null
```

After reversing the second half, the second-half links point in the opposite direction, allowing the values to be compared from corresponding ends.

### Step 2 — Compare values

Iterate from the first element (`1`), the second element (`2`), and the third element (`3`) while comparing them with the values in the reversed second half.

The notes begin describing the pointer changes: the extra nodes are `3`, `2`, and `1`; after reversal, the first of these points to the next node in the reversed order.

The notes continue the pointer-reversal illustration:

- The node containing `2` points to the node containing `3`.
- The node containing `3` points to the next `3` if desired; the note says this does not matter for the comparison being illustrated.
- The traversal reaches the end of the linked list.
- One pointer can be considered the **start** pointer at the first element, and another the **end** pointer at the last element.

Diagram represented in text:

```text
Start                         End
  ↓                             ↓
  1 → 2 → 3 → 3 → 2 → 1
        ←──── ←──── ←────
```

### Compare in the next step

Move the `start` pointer forward and move the `end` pointer through the reversed second half. Check the values one by one — compare each pair. The page illustrates the comparison positions over the list:

```text
Start ─────────────→
  1 → 2 → 3   3 → 2 → 1
              ←──────── End
```

The right-hand page in the last supplied image is blank; no additional written content is visible there.

### Pseudocode

```javascript
function isPalindrome(head) {
  // Find the middle element
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Check for palindrome
  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.val !== secondList.val) return false;

    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
}
```

### Dry run — even-length list

Example:

```text
1 → 2 → 3 → 3 → 2 → 1 → null
```

The diagram marks the **middle element** and shows the `slow` (`S`) and `fast` (`F`) pointers moving through the list. The loop breaks when the fast pointer reaches the end (`null`).

After that, reverse the second half by updating the links using `prev`, `curr`, and `temp`. The diagram then labels the first half as `FL` and the reversed half as `SL`, and compares corresponding values. All the comparisons match, so:

```text
return true
```

This means the linked list is a palindrome.

### Reversing the second half

The diagrams continue the pointer updates during reversal. In each iteration:

1. `temp` stores `curr.next`.
2. `curr.next` is redirected to `prev`.
3. `prev` moves to `curr`.
4. `curr` moves to `temp`.

This repeats until `curr` becomes `null`, at which point the reversal loop breaks.

### Compare the two halves

The diagram labels the pointers:

- `FL` — first-list pointer.
- `SL` — second-list pointer.
- `SL = prev` — the second-list pointer begins at the head of the reversed second half.

The paired values are checked from both halves. The shown even-length example matches at every comparison and ends with:

```text
return true
// Which means it is a palindrome
```

### Odd-length dry run

The notes then start a second example labelled **“2. Odd”**, with the middle element highlighted:

```text
1 → 2 → 3 → 2 → 1 → null
        ↑
      Middle Element
```

The `slow` (`S`) and `fast` (`F`) pointer movements are shown, and the loop breaks when the fast pointer reaches the end condition.

The pointer diagrams continue the odd-length example:

```text
1 → 2 → 3 → 2 → 1 → null
```

They show the reversal of the second half through successive `prev`, `curr`, and `temp` updates. After reversal, the second half is traversed in the opposite direction and its values are compared with those in the first half.

The diagram labels the first and second lists (`FL` and `SL`) and marks the matching comparisons. The example finishes with:

```text
return true
// Which means it is a palindrome
```

### 3. One node

Example:

```text
Middle Element
      ↓
      1 → null
```

The diagram shows the `slow` (`S`) and `fast` (`F`) pointers at the only node, then shows the reversal variables (`prev`, `curr`, `temp`) and the loop-break condition. The one-node example returns:

```text
return true
// Which means it is a palindrome
```

### 3. Vital following steps to follow during an interview

a. Tell my approaches.  
b. Then move on to optimizing my solution if required.  
c. Dry run with some corner cases.  
d. Think about corner cases and find them.  
e. Then move on to writing code.

### 4. Time and Space Complexity

#### Time complexity

**Finding the middle element**

The loop to find the middle element runs \(n/2\) times, so the notes express its time complexity as:

\[
O(n)
\]

**Reversing the second-half list**

The notes ask for the time complexity of reversing the second half; the continuation and answer appear on page 241.

### Time complexity

Reversing the second half takes about \(n/2\) iterations, which is:

\[
O(n)
\]

Checking whether the list is a palindrome also traverses about half the list, so its time complexity is:

\[
O(n)
\]

Therefore, the three operations are:

\[
O(n+n+n) = O(3n) = O(n)
\]

**Worst-case time complexity:**

\[
\boxed{O(n)}
\]

### Space complexity

The notes count the extra variables used in this approach: `slow`, `fast`, `prev`, `curr`, `firstList`, and `secondList` — six variables altogether.

When \(n\) is very large, the fixed number of variables can be ignored relative to \(n\). Therefore, the auxiliary space complexity is constant:

\[
\boxed{O(1)}
\]

The notes conclude that this is the worst-case scenario for the described approach.
