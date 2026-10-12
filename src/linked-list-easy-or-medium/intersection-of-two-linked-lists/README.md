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
