# Design Linked List

### 99. Leetcode: Design Linked List?

**A.** Let's understand and solve it.

### 1. Node and Creating node in Linked List

#### What is a Node?

As I already know, Node is represented like below so it has a value and
reference or pointer which points to the next node like:

```text
value    ref
  X    [ • ] ───→ next
```

### How shall I create a node?

In JavaScript, I will create a node using below function:

```javascript
function Node()
```

Now, when I create a new node I have to pass in a value right like:

```javascript
function Node(val)
```

Now, I have to create three attributes over here like:

```javascript
function Node(val) {
  this.val = val;
  this.next = null;
}
```

So, this is how I basically represent a node in JavaScript.

Now, in the above Node function, this.val is equal to value and
this.next, which points to the next node, but now as the above node is
independent and not part of a list then basically the next reference
will point to null like:

```text
val  ───→ null
```

So, initially if the above Node is independent and is not part of a list
then basically the next should point to null.

So basically it creates a new node for me and the value comes over here
like below and this reference goes to null over here like below.

### Represent a node / Create a new node

```javascript
function Node(val) {
  this.val = val;
  this.next = null;
}
```

```text
Represent a node          Create a new node

function Node(val) {      let newNode = new Node(5);

    this.val = val;                  ↓
    this.next = null;           [ 5 ][ • ] ───→ null
}
                              {newNode}
```

So, this is how I will create a new node in my code.

### 2. How do I represent a linked list?

#### What is Linked List?

Linked List is basically a series of nodes like:

```text
[ ][•] → [ ][•] → [ ][•] → [ ][•]
 HEAD
```

So above is how I create a linked list but how shall I represent or
create in code.

So, whenever linked list in the representation of its head, so if I have
to write it in code then this linked list again represented as a
function and this is how I call it MyLinkedList like:

```javascript
function MyLinkedList() {}
```

The `this.next` should point to null. So, I can say I can give null over
here.

### Create a new node

In JavaScript, I will just do a simple thing so I will not write that
code as whatever I can use but I will use let because I use to writing
let like:

```javascript
let newNode = new Node(5);
```

When I will execute the above code so what will happen the above code
will create a list?

See, when I'll write the above code like `let newNode = new Node(5)` so
this `"Node"` is the name of Node function like:

```javascript
function Node(val) {
  this.val = val;
  this.next = null;
}
```

```text
                 let newNode = new Node(5)
                               ↓
                              [ 5 ][ • ] ───→ null
                              {newNode}
```

So the above Node function name can be different also but here it's a
Node, which I will call with a new keyword and I have one new keyword
because I am creating a new instance of this Node and I am initializing
with value 5.

So the above value 5 goes over to val parameter and this.val become 5
and this.next is null.

So basically it creates a new node for me and the value comes over here
like below and this reference goes to null over here like below:

```text
function Node(val) {                 let newNode = new Node(5);

    this.val = val;                         ↓
    this.next = null;                 [ 5 ][ • ] ───→ null
}
```

So, this is how I will create a new node in my code.

### 2. How do I represent a linked list?

#### What is Linked List?

Linked List is basically a series of nodes like:

```text
[ ][•] → [ ][•] → [ ][•] → [ ][•]
 HEAD
```

So above is how I create a linked list but how shall I represent or
create in code.

So, whenever linked list in the representation of its head so if I have
to write it in code then this linked list again represented as a
function and this is how I call it MyLinkedList like:

```javascript
function MyLinkedList() {}
```

### What will a linked list contain?

Linked List is represented by its head so this linked list in a pointer
to its head so basically this.head is equal to the pointer to the head
so whatever the node is there it pointer to the head.

Suppose the below one is the empty linked list and suppose I am creating
an empty linked list so this.head will be pointing to null initially
like:

```javascript
function MyLinkedList() {
  this.head = null;
}
```

So, like above one is the basic implementation of a linked list.

And now, I can also have some extra attribute in the above MyLinkedList
function like say `this.size` or `this.length`.

So I can use the word size or length whatever I want to call it. So,
let's use size because length I call it for an array. And this size will
be initially 0 like:

```javascript
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
```

So, this is the new linked list that I have created.

### 3. Get on index

Now, I have to write a function `get` on index so if I pass an index
into get function it should get the value out of it.

Suppose I have a linked list `1, 2, 3, 4 and 5` and suppose they pass
some index then it will give me the `ith` element.

So suppose they call this function `get` and they say `get(2)` then this
should return me the value `3` because the value at index 2 or `"i"`
index is 3.

And if I do `get(3)` it should return me 4.

```text
Index:  0    1    2    3    4
       (1) → (2) → (3) → (4) → (5)

get(2) => val(3)
get(3) => 4
```

So, this is a new implementation of a linked list.

So this is how I represent a linked list?

So basically this linked list is empty right now because the head is
pointing null which means there are no nodes inside this linked list.

So, this is how MyLinkedList is initialize just like I say `let a = 10`
or I say `let a = 0` so these are just initialization. Similarly
initialize my linked list like `MyLinkedList` and it is initialized by
null.

### 3. Get on index --- Continued

Now, I have to write a function `get` on index so if I pass an index
into get function it should get the value out of it.

Suppose I have a linked list `1, 2, 3, 4 and 5` and suppose they pass
some index then it will give me the `ith` element.

So suppose they call this function `get` and they say `get(2)` then this
should return me the value `3` because the value at index 2 or `"i"`
index is 3.

And if I do `get(3)` it should return me 4.

```text
Index:  0    1    2    3    4
       (1) → (2) → (3) → (4) → (5)

get(2) => val(3)
get(3) => 4
```

### 4. Add at Head

And now there is also a function to add at head.

Suppose the above linked list I have given to me and they call this
function `addAtHead` and they give me some value, let's say
`addAtHead(6)`.

So this 6 value be added at the head of the linked list so that my new
linked list should become like below so as 6 should be added in front of
the linked list and it should be head now and the head should be point
over here:

```text
        0    1    2    3    4
HEAD → (6) → (1) → (2) → (3) → (4) → (5)
```

```text
addAtHead(6) ✓
```

So, this is what they are asking if they are asking me to `addAtHead`.

### 5. Add at Tail

Now, suppose they are saying `addAtTail(7)` so what I have to do is so
basically I have to add 7 to tail and then 5 should point to 7 and 7
should point to null like:

```text
HEAD → (6) → (1) → (2) → (3) → (4) → (5) → (7) → null
```

```text
addAtTail(7) ✓
```

### 6. Add to Index

Now, suppose they say `addToIndex(2, 8)` meaning before index 2 it
should be added value 8.

So, 2 is my index and 8 is my value. So if I have to add value 8 before
index 3 then what I have to do is basically I have to create a new node
8 and point 2 to 8 and then I have to point 8 to 3.

And the links between 2 and 3 should go away so now my linked becomes
like:

```text
HEAD → (6) → (1) → (2) → (3) → (4) → (5) → (7) → null
                         ↘   ↗
                           (8)
```

More specifically:

```text
HEAD → (6) → (1) → (2) → (8) → (3) → (4) → (5) → (7) → null
```

`addToIndex(3, 8)` --- index, value.

And now, after the above changes happens then the indexes is also change
like shown above.

### 7. Delete At Index

Now, deleteAtIndex(4) meaning the index 4th value should be deleted so
if I delete the value 4 then 3 should point to 5 directly.
