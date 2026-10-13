### 107. LeetCode: 160. Intersection of Two Linked Lists?

**A. Let's understand and solve it.**

1. The problem statement says that I have been given two singly linked lists, but these linked lists intersect at a point.

### Diagram from the notes

```text
List A:  a1 ──→ a2 ──┐
                     ↓
                     c1 ──→ c2 ──→ c3
                     ↑
List B:  b1 ──→ b2 ──→ b3
```

Suppose one linked list is:

```text
a1 → a2 → c1 → c2 → c3
```

And there is one more linked list:

```text
b1 → b2 → b3 → c1 → c2 → c3
```

So, I have to find the intersection point, which is **`c1`**.

I have to find out whether these linked lists intersect or not. If they intersect, I have to return the intersection node, `c1`.

There are two singly linked lists:

- The first is denoted by `headA`.
- The second is denoted by `headB`.

I have to return the node at which the two lists intersect. If there is no intersection, meaning the two linked lists are independent of each other, I return `null`.

The notes also mention that test cases are generated so that there are no cycles in the linked lists. I can assume there will be no cycle in a linked list, because it would become confusing if there were a cycle.

I also have to note that the linked lists must retain their original structure. Therefore, I cannot modify the linked lists or move their pointers here and there.

### Approaches

```text
headA: a1 → a2 ─┐
                ├→ c1 → c2 → c3
headB: b1 → b2 → b3 ─┘
```

### 1. Brute-force approach

Brute force is a direct, naive approach and is not very efficient.

Take one element at a time from the first linked list. For example, if I take `a1`, I check in the second linked list whether `a1` exists or not.

```text
For a1:
    Is a1 present in headB?
```

Then I check whether `a2` is present in `headB`, repeating the same steps for each element in `headA`.

```text
For a2:
    Is a2 present in headB?
```

Next, I check `c1`. If I find the intersecting element, I return that element. In this example, I find `c1`, so I return the `c1` node.

### Time complexity

Suppose the length of `headA` is `m` and the length of `headB` is `n`.

The notes use this example:

- `headA` has length 5, so \(m = 5\).
- `headB` has length 6, so \(n = 6\).

```text
headA (m = 5): a1 → a2 → c1 → c2 → c3
headB (n = 6): b1 → b2 → b3 → c1 → c2 → c3
```

For the first element of `headA`, I may have to scan the elements of `headB`. Then I do the same for the second element, the third element, and so on.

For each of the `m` elements in `headA`, I may have to scan all `n` elements in `headB`.

The first element of `headA` may require up to `n` checks, the second may require up to `n` checks, the third may require up to `n` checks, and so on for all `m` elements.

### Worst-case time complexity

Therefore:

\[
O(m \times n)
\]

I check each element of `headA`, and for each element I may scan `headB`, which takes up to `n` checks. There are `m` elements in `headA`.

So the brute-force time complexity is:

\[
O(mn)
\]

If `m` and `n` are equal:

\[
O(mn) = O(n^2)
\]

### Space complexity

Do I need extra space? Do I have to create an array or a separate linked list?

No. The brute-force approach uses only a constant number of pointers and variables, so its space complexity is:

\[
O(1)
\]

### Brute-force conclusion

This solution is not efficient because \(O(n^2)\) time complexity can be very high when the lists are large.

### Optimized approach

```text
headA: a1 → a2 ─┐
                ├→ c1 → c2 → c3
headB: b1 → b2 → b3 ─┘
```

I need to find whether every node inside `headA` is present in `headB`. The brute-force approach repeats the search for each node.

I can optimize searching by using a **Hash Map / Hash Table / Set** in JavaScript. A Set or Hash Map can find or fetch an element in average \(O(1)\) time.

### Approach

**Step 1: Put all nodes of `headB` into a Set.**

For this example, the Set contains:

```text
Set(b1, b2, b3, c1, c2, c3)
```

**Step 2: Loop through every node of `headA`.**

For each node, check whether it is present in the Set.

```text
Set.has(a1) → false
Set.has(a2) → false
Set.has(c1) → true
```

When `c1` is found in the Set, it is the intersection node, so I can return it.

### Checking the Set

- Is `a1` present in the Set? **No.**
- Is `a2` present in the Set? **No.**
- Is `c1` present in the Set? **Yes.**

That means `c1` is the intersection point, and I can return it.

```text
headA: a1 → a2 → c1 → c2 → c3
                    ↑
                    └── first node found in the Set

headB: b1 → b2 → b3 → c1 → c2 → c3

Set: { b1, b2, b3, c1, c2, c3 }
```

### Pseudocode

```javascript
function getIntersectionNode(headA, headB) {
  // Put all the nodes of headB inside a Set
  const store = new Set();

  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  // Check each and every node of headA inside the Set
  while (headA) {
    if (store.has(headA)) return headA;
    headA = headA.next;
  }

  return null;
}
```

### How the algorithm works

1. Create an empty Set called `store`.
2. Traverse `headB` and add each **node** to the Set.
3. Traverse `headA` from its head.
4. For each node in `headA`, check `store.has(headA)`.
5. If the Set contains that node, return the node itself as the intersection.
6. If traversal reaches the end of `headA` without finding a match, return `null`.

The Set stores node references, so the check identifies the same node object, rather than merely checking whether two nodes have equal values.

### Complexity of the Set approach

Let `m` be the number of nodes in `headA` and `n` be the number of nodes in `headB`.

- **Time complexity:** \(O(m+n)\) on average, because each list is traversed at most once and Set insertion/lookups are average \(O(1)\).
- **Space complexity:** \(O(n)\), because the Set stores the nodes of `headB`.

This improves the brute-force approach from \(O(mn)\) time to average \(O(m+n)\) time, at the cost of extra space for the Set.
