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

So, the above steps or process will help me to write code confidently
without memorizing the code. So basically, I don't have to memorize DSA
but I always have to understand the core logic of all DSA problem
statements.

### 10. Suppose I have to add an element at a particular index. What I do then?

So, let's take an example of a linked list again like below and suppose
I have to add at index 2 and I have add a number 6 like:

```text
HEAD
  0       1       2       3       4
  1  ---> 2  ---> 3  ---> 4  ---> 5  ---> NULL

addAtIndex(2, 6);
             ↑       ↑
           index   value
```

### How will I add value `6` to index 2?

The problem statement says I have to add value 6 before index 2, so I
will have to write pseudocode initially.

**Pseudocode steps to follow:**

1.  Create a new node.
2.  Link the last node to the new node.
3.  Handle corner cases.
4.  Increase size.

5.  Create a new node 6 and then I have to reach index 1 because I have
    to add the new node 6 before index 2 as per the problem statement.

6.  So, I have to reach `(index - 1)` because if I have to add it
    between index 1 and index 2 then I have to reach index 1 point
    because I have to link index 2 to new node 6.

And generally I call this `(index - 1)` as current node. And also say
why current node reaches `(index - 1)` because `(index - 1)` has to
point to new node 6 and then new node 6 should point to node 3.

3.  Important thing to remember is there can be two ways to add value 6
    before index 2, like:

    **a.** First link the current to new node 6 and then link this new
    node 6 to node 3.

    **No!** I don't have to do it in this way as I need to do it in a
    different way.

    **b.** I have to first link the new node 6 to node 3 and then I have
    to link current to new node 6.

So, I have to do it in sequence otherwise my logic will not work. So
when I do `current.next = newNode`, the node 2 pointer goes from node 3
to new node 6, so it changes to new node 6.

4.  And then I have to think about corner cases.
5.  And then I have to just increase the size.

So basically, I need to follow below summarized pseudocode approaches,
like:

1.  Create a new node.
2.  Reach at `(index - 1)` = `curr`.
3.  `newNode.next = curr.next`.
4.  `curr.next = newNode`.
5.  Corner cases.
6.  Increase size.

Example:

```text
HEAD
  0       1       2       3       4
  1  ---> 2  -X-> 3  ---> 4  ---> 5  ---> NULL
           \
            \
             6
```

```text
addAtIndex(2, 6);
             ↑   ↑
           index value
```

After insertion:

```text
HEAD
  0       1       2       3       4
  1  ---> 2  ---> 3  ---> 4  ---> 5  ---> NULL
           \
            \
             6
```

```text
addAtIndex(2, 6);
             ↑   ↑
           index value
```

So, this is how I have to add a node to specific index or before index 2.

### Pseudocode

```javascript
function addAtIndex(index, val) {
  let newNode = new Node(val);
  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;
}
```

### Corner cases

**1. What if the length of my head is 0? And what if I have to add my
element on the 1st index? What will I do then?**

I don't have to run the above `addAtIndex` function inside pseudocode
like loop and do all of it, so what I can do is I can directly use the
function which I have already created, like `addAtHead`.

So suppose if I have to add it at `0th index` or `1st index`, meaning
the initial or starting point of the index, so I will just call
`addAtHead` and pass in the value which I have to add and then I will
return from `addAtIndex` function.

So now `addAtHead` function code will run and it will take care of
everything.

### Corner case 1 pseudocode

```javascript
function addAtIndex(index, val) {
  let newNode = new Node(val);

  if (index == 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;
}
```

### 2. What if I have to add my element at the last or at `index`?

Then I can again do this `addAtTail` inside `else-if` condition like
`index == this.size` and then I just have to return.

### Corner case 2 pseudocode

```javascript
function addAtIndex(index, val) {
  let newNode = new Node(val);

  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;
}
```

So, if index is not at the front or it is not at the last and if I don't
have to put element at the front or if I don't have to put an element at
the last and if it is in between index from 0 to `this.size`, then my
algorithm will perfectly work.

And now I have add loop and all the code excluding corner cases inside
else case like:

```javascript
function addAtIndex(index, val) {
  let newNode = new Node(val);

  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }

  this.size++;
}
```

### Why this line `newNode.next = curr.next` is 1st and this line `curr.next = newNode` is 2nd? Can I switch these above lines?

Suppose if the below one is the linked list and suppose I have to add 5
in between 2 and 3 and suppose I have created a new node 5 and suppose I
run this `curr.next = newNode` first and suppose I link this 2 to 5 1st,
then my pointer of 2 which is pointing to 3 will be removed and then my
current 2 will start pointing to new node 5.

```text
1  --->  2  -X->  3  --->  4
          \
           \
            5
```

### Now, how will I get to know where new node 5 will point to?

Suppose if I run:

```javascript
newNode.next = curr.next;
```

so it will start pointing to itself again, so this way this condition
will be in order like:

```javascript
newNode.next = curr.next;
curr.next = newNode;
```

So, if this is case like if node 2 is linked with node 3, I now have to
remove this linking between node 2 and node 3 and then I will point new
node 5 to node 3.

So remove this linking between node 2 and node 3 at the end so 1st point
node 5 to node 3 and then point node 2 to new node 5 like:

```text
1  --->  2          3  --->  4
          \        /
           \      /
              5
```
