# Deleting Nodes in Linked List

### 10. Leetcode: 707. Design Linked List?

**A.** Let's continue understanding and solve it.

### 11. How to write the code to get an element?

Suppose I have below linked list and I have the index `0, 1, 2, 3, 4`
and suppose if I have to `get(2)` meaning get the element at index 2, so
it should return me `3` because at 2, 3 is there.

And `get(4)` like it should return me `5` like:

```text
HEAD
  0       1       2       3       4
  1  ---> 2  ---> 3  ---> 4  ---> 5  ---> NULL
```

```text
get(2)  -> 3

get(4)  -> 5
```

And there is also a corner case in the problem statement like:

> Get the value of the index's node in the linked list. If the index is
> invalid, return -1.

Suppose if somebody says I want to get index `< 0`, so suppose if I say
get me an element at index 1, so this is not possible.

So suppose if someone says get me the index at `6`, so 6 isn't there, so
6 is not possible. So at that point I have to return `-1`.

### Approach a problem

1.  I will keep a pointer at 1 lets say `current` and then I will keep
    on going like number of times where the index is till I reach
    position 2 and then once I reach position 2 then I will return the
    value.

### Pseudocode:

```javascript
for (let i = 0; i < index; i++) {
  // ...
}

let curr = this.head;

for (let i = 0; i < index; i++) {
  curr = curr.next;
}

return curr.val;
```

Because in the problem statement it is asking to return number, so
that's why I return `curr.val`.

But if it was asking to return a node then I would return `curr` itself.

### Corner case

What if the index is not valid? Suppose somebody says I have to return
`-1` for something?

### Pseudocode with handle corner cases

```javascript
function get(index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
}
```

### 12. How to delete at particular index 1?

Suppose somebody says I have to delete at index 2, like `delete(2)`,
then 3rd node needs to be deleted like:

```text
HEAD
  0       1       2       3       4
  1  ---> 2  ---> 3  ---> 4  ---> 5  ---> NULL

delete(2);
         ↑
       index
```

Now, suppose if I start my current pointer from index 0 and I reach to
index 2 itself, so I can't delete itself, meaning I cannot prevent at
node 2 and delete itself.

So what I need to do is I need to reach a node 1 before node 2 which I
want to delete.

So once I reach at node 1 then I just need to point node 1 to node 4
directly. So if I point this node 2 to node 4 directly, then node 3 is
vanished. So now the linked list that node 3 will be vanished.

### Approach:

1.  Reach the `(index - 1)` for deletion.
2.  Link it to new node? `(2nd step ahead)`.
3.  Handle corner case.
4.  Reduce the size.

Example:

```text
HEAD
  0       1       2       3       4
  1  ---> 2  ---> 3  ---> 4  ---> 5  ---> NULL
           ^
          curr

delete(2);
         ↑
       index
```

### Pseudocode

```javascript
function deleteAtIndex(index) {
  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
}
```

### Corner cases

There can be multiple corner cases like:

**1. Suppose I have to delete something which is not present, meaning
suppose the index is not in the range like:**

```javascript
function deleteAtIndex(index) {
  if (index <= 0 || index >= this.size) return;

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
}
```

**2. Suppose I have to delete 1st index itself then how do I? So I will
just move my head like:**
