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
