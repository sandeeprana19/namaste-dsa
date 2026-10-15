## Remove Linked List Elements

**108. LeetCode: 203. Remove Linked List Elements**

**A. Let's understand and solve it.**

### 1. Problem statement

Now, the problem statement says that I have been given a linked list like:

```text
1 → 2 → 6 → 3 → 4 → 5 → 6
```

And I have also been given a value, and I have to remove all the nodes which have that current value. Suppose I have been given the above linked list and value `6` is given to me.

I have to remove all the nodes which are having value `6` from the above-given nodes. So, this new linked list should be:

```text
1 → 2 → 3 → 4 → 5
```

So, all the nodes having value `6` will be removed.

Now, there is a small catch whenever I have to delete elements from a linked list. So, what happens?

I basically have to keep a track of previous element also. Suppose I have to delete an element in the middle of the list. Suppose the below element is `6`.

I can move to one element before, so basically I need to know the previous element.

```text
HEAD: 1 → 2 → 6 → 3 → 4 → 5 → 6 → null
          ↑
         prev
```

The diagram marks the target as `val = 6`.

Once I know the previous element I can just write:

```javascript
prev.next = prev.next.next;
```

This is a simple way to delete: `prev.next` is made to point past the node to be deleted. The diagrams show the link bypassing the crossed-out `6`.

So, this is how I can remove a node from a linked list. But for that, I need:

### Requirements and edge case: deleting the head

a. I need to think about the previous element.

b. I need to ensure that it should be a middle element. When I say middle, this approach does not work on the head.

Suppose if I have to remove the head element: **How can I do that?**

Then this will not work:

```javascript
prev.next = prev.next.next;
```

Because head is important and it does not have a previous element, so `prev.next = prev.next.next` doesn't work for the head. But it works for a middle element.

## 2. Approaches

### Approach 1

A simple solution that comes to my mind is that I will keep a track of `head` and then I will check if the next node is `6`; delete it.

The diagram shows `HEAD` and the list `1 → 2 → 6 → 3 → 4 → 5 → 6 → null`, with target nodes marked `val = 6`.

So, it is easy when it is in the middle.

Suppose the linked list is something like this:

```text
6 → 6 → 6 → 7 → 1 → null
```

Now, I have deleted head node `6`. How do I delete it?

So, first of all, I somehow need to keep a track of my previous, because without the previous element I cannot delete any node, right? So, it is important to keep the track of previous and I have to keep deleting these elements `6`, like:

```text
HEAD: 6 → 6 → 6 → 7 → 1 → null
```

The first three nodes with value `6` are crossed out in the diagram, leaving:

```text
7 → 1 → null
```

Unless I found a good solution, I have to think about some logic to keep track of previous.

There is a concept of a **Sentinel Node**.

### What is a Sentinel Node?

Basically, a Sentinel Node keeps a watch on the next element. Its job is to keep a check.

So, this Sentinel Node will act like a previous element, and it will keep a check on the next element.

### How will I use Sentinel Node?

I will create a Sentinel Node, which is a dummy node, and I don't care what the value is of it. This is the node which I will add to the front of the list, like:

```text
dummy (sentinel) → 1 → 2 → 6 → 3 → 4 → 5 → 6 → null
```

The diagram labels the dummy node “Sentinel node” and marks the target as `val = 6`.

Now, this sentinel node will keep a check on the next element. So now, I will check with a sentinel node, so this becomes my previous basically.

So, my previous starts from here:

```text
prev
 ↓
dummy → 1 → 2 → 6 → 3 → 4 → 5 → 6 → null
```

The diagram marks the target as `val = 6`.

### Traversal and deletion

Now, I will check:

- Is this node `1` equal to `6`? No. Move ahead.
- So, the `prev` moves over to node `1`.
- Is the next value `6`? No. So, `prev` moves to node `2`.
- Is the next value `6`? Yes. So, change the previous link to skip that node.
- Is the next value `6`? No. So, `prev` moves to node `3`.
- Is the next value `6`? No. So, `prev` moves to node `4`.
- Is the next value `6`? No. So, `prev` moves to node `5`.
- Is the next value `6`? Yes. So, I will change the previous link to skip the last `6`, as shown in the diagram.

The diagram illustrates removing nodes whose value is `6` while maintaining a `prev` pointer. Target nodes are crossed out; the sentinel node remains before the head.

### But why use a sentinel node?

Sentinel node will not help me in the linked-list case above, but it will help me in another case.

Suppose if I have a sentinel node in front of my list, which is something like below:

```text
prev
 ↓
dummy → 6 → 6 → 6 → 7 → 1 → null
        ↑
       HEAD
```

Suppose if I have to delete lots of sixes, how will this work now?

If I have a sentinel node, then I will keep my previous over there on top of sentinel node. I will check my next node: is it `6`? Yes, so I will point my sentinel node over to node `6`. Now I will check: is my next node `6` also `6`? Yes, so I will point my sentinel node over to node `7`. Now I will check: is my next node `1` also `6`? No, so I will point my previous over to node `1`, like the diagram.

The diagram shows a sentinel node followed by multiple nodes with value `6`, then `7`, then `1`, then `null`. The `6` nodes are crossed out as they are skipped. The `prev` pointer stays at the sentinel while consecutive `6` nodes are removed.

So, basically, this sentinel node helps me to delete the elements from the head. So that is why I use this sentinel node.

## Pseudocode

```javascript
function removeElements(head, val) {
  sentinel = new ListNode();
  sentinel.next = head;
  prev = sentinel;

  while (prev && prev.next) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinel.next;
}
```

## Dry Run

### 1. Example

The diagram labels `val = 6`, places a sentinel node before the head, and crosses out the nodes with value `6`. A loop-break mark is shown at the end.

The notes write:

```text
return sentinel.next
```

which points to:

```text
Node (1)
```

The pictured list has a leading node `1` followed by nodes with value `6`; the `6` nodes are removed, so the result is the node `1`.

### 2. Example

The diagram labels `val = 6`, uses a sentinel node, and marks nodes with value `6` for removal. The node with value `7` remains.

The notes write:

```text
return sentinel.next
```

which points to:

```text
Node (7)
```
