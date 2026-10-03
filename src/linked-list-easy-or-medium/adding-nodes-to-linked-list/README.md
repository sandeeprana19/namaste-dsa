# Adding Node to Linked List

### 100. Leetcode: 707. Design Linked List?

**A.** Let's continue understanding and solve it.

### 8. How to add an element to the head of the linked list?

This `addAtHead` function basically takes a value and to add the value
to the head of the linked list like:

### Add to Index --- Continued

I have to add value 8 before index 3 then what I have to do is basically
I have to create a new node 8 and point 2 to 8 and then I have to point
8 to 3.

And the links between 2 and 3 should go away so now my linked becomes
like:

```text
        0    1    2    3    4    5    6
HEAD → (6) → (1) → (2) → (3) → (4) → (5) → (7) → null
                    \     /
                     (8)
```

After the change:

```text
HEAD → (6) → (1) → (2) → (8) → (3) → (4) → (5) → (7) → null
```

`addToIndex(3, 8)`

And now, after the above changes happens then the indexes is also change
like shown above.

### 7. Delete At Index

Now, deleteAtIndex(4) meaning the index 4th value should be deleted so
if I delete the value 4 then 3 should point to 5 directly.

### Adding Node to Linked List

### 100. Leetcode: 707. Design Linked List?

**A.** Let's continue understanding and solve it.

### 8. How to add an element to the head of the linked list?

This `addAtHead` function basically takes a value and to add the value
to the head of the linked list like:

```text
HEAD → (1) → (2) → (3) → (4)
```

```text
→ addAtHead(5);
```

### What should happen if I call this addAtHead(5) function?

This `addAtHead` function will basically create a new node with value 5
over here and then it should point to 1st value or node over here and
then the head should point the value 5 like:

```text
HEAD → (5) → (1) → (2) → (3) → (4) →
```

```text
→ addAtHead(5);
```

```text
→ newNode is create...
→ newNode points to firstNode.
→ head points to newNode.
```

> Sequence of steps

### Code:

```javascript
function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}
```

### Dry Run

As if I call `addAtHead(5)` and then when it runs then
`let newNode = new Node(5)` so it create a new node 5 like:

```text
       (5)

HEAD → (1) → (2) → (3) → (4) →
```

In the 2nd line `newNode.next` is the head so the head is pointing to
value 1, so the head is pointer 1.

So, when I say `newNode.next` is head so basically I am pointing 5 to 1
like:

```text
       (5)
        ↓
HEAD → (1) → (2) → (3) → (4) →
```

Now, `this.head = newNode` meaning this head points to newNode, so now
what I will do is now I have remove the connection between head and
value 1 and now my this.head is now pointing to 5 like:

```text
       (5)
      ↙
HEAD → (5) → (1) → (2) → (3) → (4) →
```

Now, `this.size++` meaning the linked list size was 1 more because I
have added a new node 5 over above at the starting.

---

## Page 186

So, now my new linked list becomes like:

```text
       (5)
      ↙   ↘
HEAD → (1) → (2) → (3) → (4) →
```

### 9. Now, let's see how shall I addAtTail?

First of all let understand what it mean by `addAtTail`.

Suppose if I have a linked list which is pointing to null at the end and
suppose 1 is my head of the below linked list like:

```text
HEAD
  ↓
(1) → (2) → (3) → (4) → null
```

Now, suppose I have to write a function `addAtTail(5)` so when I say I
have to add 5 in tail that means 5 should come in place of null and this
4 link should not point to null but 4 should point to new node which is
5 and then 5 should point to null like:

```text
(1) → (2) → (3) → (4) → (5) → null
```

```text
addAtTail(5);
```

So, above is how I need to add this 5 to tail.

Now, to add 5 to tail first of all I have to reach to the tail so I will
reach to tail by looping over the below linked list:

```text
HEAD
  ↓
(1) → (2) → (3) → (4) → null
```

So over above linked list, I have to traverse one by one so I have to
start from node 1 and then I have to keep going to the next and then to
the next until I reach a point at the end of the linked list and there
once I reach at last now I will add the node 5 over there.

This is what I will do.

### How can I write code for addAtTail(5)?

```javascript
function addAtTail(val) {
  let curr = this.head;

  while (curr.next != null) {
    curr = curr.next;
  }

  let newNode = new Node(val);
  curr.next = newNode;
}
```

That's all, so the function `addAtTail` will add my node to the tail.

### Dry Run

First of all, I will reach the last element so let `curr = this.head`
meaning current is pointing to 1 like:

```text
HEAD
  ↓
(1) → (2) → (3) → (4) → null

curr → (1)
```

`addAtTail(5);`

Now, I will run a loop unless my `curr.next` becomes null so basically
keep running the loop unless my current dot next is not null and if my
current dot next is null skip the loop.

So, it checks `curr.next = null` (1 next is not null) so it is first and
then it will check is `curr.next = null` so it is not and then it will
check is `curr.next = null` so it is not and then it will check is
`curr.next = null` so it is not and when it comes to 4 it was pointing
to null so then it will skip to my current becomes 4 like:

```text
HEAD
  ↓
(1) → (2) → (3) → (4) → null
                  ↑
                 curr
```

And then, once I reach the above last node and current becomes the last
node and then I just have to create the above new node 5 and then attach
current dot next to new node 5.

That's all I need to do.

### Corner case

Suppose my linked list is empty meaning let's say my `this.head = null`
then my code will break because my `curr` while will be null and I will
try to do `curr.next` so I have to write a condition to handle this case
if my head is null.

Basically, if my linked list is an empty list and I am trying to add an
element to the list then my code for reaching to the last element will
fail.

So to fix the above mentioned corner case I have to add small little
logic into `addAtTail` function like:

```javascript
function addAtTail(val) {
  let newNode = new Node(val);

  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next != null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  this.size++;
}
```

### Process to write code for problem statement

0.  Read the problem statement.
1.  Create new node.
2.  Link last node to new node.
3.  Handle corner case.
4.  Increase size.

No handwritten content is visible on this page.

# End of Newly Shared Notes

**Covered pages:** 174--191\
**Previous README content:** Not included.
