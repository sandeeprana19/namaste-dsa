# Linked List - Easy / Medium

## Introduction to Linked List

### 91. Define Linked List?

**A.** Linked list is a linear data structure just like we have array.
Just like array is a linear data structure we also have linked list but
linked list is slightly different.

So, when linked list stores data it doesn't stores data all of it
collectively. Basically see, in this array suppose if I have 4 numbers
like:

```text
[3, 1, 4, 5]
```

So, the above array numbers are stored together. In linked list, like
list say it has 4 nodes.

Suppose I have to store `3, 1, 4, 5` so it creates node for each of
these values like:

```text
[3 | •] → [1 | •] → [4 | •] → [5 | •]
```

```text
One Linked List Node
```

Now, I have lots of nodes above and these are linked together and it is
forming a list. That is why it is known as Linked List.

### Now:

1.  Linked List is a linear data structure.
2.  Nodes are linked together by a reference field.

In array, I don't have to link its elements together as they are already
linked together because they are in a contiguous memory location and
they are one after the other.

But linked list have these below nodes separately like:

```text
[3 | •] → [1 | •] → [4 | •] → [5 | •]
```

They can be in different locations but they also have a reference point
which points to the next node. So, it is not stored in a contiguous
memory location so it is stored here and there meaning all of these
above nodes are stored here and there. And they are pointing to each
other with reference pointers.

And now, linked list also have below portions before reference pointer
or pointer which is value like:

```text
┌─────────────┐      ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│  3 │   •────┼─────→│  1 │   •────┼─────→│  4 │   •────┼─────→│  5 │   •────┼──→
└─────────────┘      └─────────────┘      └─────────────┘      └─────────────┘
  value/data
     pointer
```

The above value/data and pointer are basically a single node.

Now, just like I represent `arr = [3,1,4,5]` which is an array but
linked list is represented by its head, so below one is the head and
that is where it is represented, so basically head is again a node like:

```text
HEAD
  ↓
[ 3 | • ] → [ 1 | • ] → [ 4 | • ] → [ 5 | • ] → null
```

```text
        value/data
           ↓
[   3   |   •   ]
          ↑
       pointer
```

The first node is the **HEAD** of the linked list and the last node is
the **TAIL**.

So, if I say I have a linked list that means I have a pointer to my head
and then suppose if I have to traverse through above linked list then I
can just go to next pointer, next pointer and then I can find the values
of each values.

So, this is how linked list works.

### 92. How many types of linked lists are there? Name them.

**A.** There are two types of linked lists like:

1.  Singly Linked List.
2.  Doubly Linked List.

### 93. Define Singly Linked List?

**A.** Each and every node has a pointer to next node like:

```text
HEAD
  ↓
[ 3 | • ] → [ 1 | • ] → [ 4 | • ] → [ 5 | • ] → null
                                                        ↑
                                                       TAIL
```

The pointer points to the next node.

```text
Singly Linked List
```

### 94. Define Doubly Linked List?

**A.** Doubly linked list is a linked list where each node has a pointer
to its next position also and previous position also. Just like I have
seen 2 things over there in singly linked list like its 1st one was
value or data and 2nd one was pointer to the next node.

But here in doubly linked list I have 3 things. So 1st is the value, 2nd
is the pointer to the next node and 3rd is the pointer to the previous
node like:

```text
        prev            next            next
         ←→              ←→              ←→
[ • | 3 | • ] ⇄ [ • | 1 | • ] ⇄ [ • | 2 | • ] ⇄ [ • | 5 | • ] → null
```

Now, in the above linked list I can go from node 3 to node 1 and then I
can go from node 1 to node 2 and then from node 2 to node 5, so
basically I can go from left to right direction. But if I am on node 2
let's say then I can go to next node as well as previous node also.

So, this is how Doubly Linked List. So, basically doubly linked list has
2 reference pointers and a value. So, one pointer pointing to next and
the other pointer pointing to previous.

So, this is what is Doubly Linked List. Now again doubly linked list
also have a head which is the head of the linked list and basically
whole thing is a node which is equals to value + 2 pointers references
like:

```text
node = value + 2 pointers

HEAD
  ↓
[ • | 3 | • ] ⇄ [ • | 1 | • ] ⇄ [ • | 2 | • ] ⇄ [ • | 5 | • ] → null
                                                        ↑
                                                       TAIL
```

- One pointer points to the next node.
- One pointer points to the previous node.
- Each node has one value/data and two pointer references.

### 95. Define Single Node?

**A.** So, if I say single node of singly linked list so this single
node contains 2 parts like:

1st one is the value which can have data, suppose `5` is the data and
2nd one is the pointer or reference pointer which is pointing to the
next node like:

```text
[ 5 | • ] →
  ↑     ↑
value  pointer
```

In doubly linked list, the above one looks something like below, so it
is pointing to its previous value also, it is pointing to next value
also and it also has data. let's say `3` like:

```text
      value/data
          ↓
←── [ • | 3 | • ] ──→
      ↑         ↑
     prev      next
```

### 96. Define Head?

**A.** Head is the starting point of a linked list and generally linked
list is represented by its head.

### 97. How linked list is different from array?

**A.** See both linked list and array are linear data structures. I have
already seen array which is also known as list data structure and the
other one is linked list.

So, in array, I have all the values together right like:

### Linked List vs Array

---

Linked List Array

---

**1.** But in Linked List, I have **1.** So in array, I have these
nodes, I have a value and I have a value together like: `[3, 4, 5, 1]`
pointer to the next node. So, these
are non-contiguous.

                                      The above array values are stored
                                      in a contiguous space. And they
                                      represented by index like
                                      `0, 1, 2 and 3`. So, this is how
                                      array is represented.

**2.** Linked list always have a **2.** Arrays have a fixed size so
dynamic size because the size is generally array have a fixed size
dynamic. Suppose if I want to add generally when I am defining an
one more node below linked list array. In JavaScript, I can write
then I can add it at the end so I an array like this `arr=[]` also
just need to point the pointer to but if I create a new I can pass
another node like: the length of an array also like
`new Array(5)`.

                                      So basically when I say an array as
                                      a fixed size that means I can
                                      define that size and it occupies
                                      that memory in the memory space. So
                                      it kind of have a fixed size which
                                      is the most important thing.

**3.** **3.**

**4.** **4.**

---

### Linked list dynamic-size example

```text
[3 | •] → [4 | •] → [5 | •] → [1 | •] → [   ]
    ↓                                  ↓
  can point to another node       more nodes can be added
```

Linked List Array

---

**3.** Now, in linked list the node is equal to `(value + pointer)` **3.** Over here in arrays I just stored values and it has
like: indexes like `0, 1, 2, 3`. So, it doesn't have a link or
reference to the next node or the previous node or something
and it doesn't happen like that.

`text\node = (value + pointer)`

**4.** Now, in linked list getting elements is hard. But fetching **4.** In array, getting elements is easy. So suppose if I want
data in linked list is hard. So suppose if I say that if I want to to find an element in an array how would I find it. So if I
find the 3rd element of the linked list so what I have to do is it write `arr[2]` then it will quickly give me `5` like:
will have to go one step, two step and then it will find the 3rd and
then it will return the value like:

`text\nHEAD → 3 → 4 → 5 → 1\n             ↑\n          return 3\n` `text\n    0   1   2   3\n   [3] [4] [5] [1]\n\narr[2] ⇒ 5\n`

See, linked list have a head above and it can not directly jump on That means it can return value quickly. So, array does not have
the 3rd value. to do a lots of math to find out what is there on 2nd index
because it is stored in such a way.

So, this is a bad thing about linked list and getting and fetching  
 element is hard.

But in linked list, suppose I have to find out 2nd element then I  
 have to start with head and then I go 1st element, 2nd element, 3rd  
 element and then I return the value. So over here getting element  
 become harder and over here the time complexity of getting an  
 element is `O(n)` like:

**Time Complexity: `O(n)`** **Time Complexity: `O(1)`**

The linked-list traversal cannot directly jump on the 3rd value.

So, this is a bad thing about linked list and getting and fetching
element is hard.

But in linked list, suppose I have to find out 2nd element then I have
to start with head and then I go 1st element, 2nd element, 3rd element
and then I return the value.

So over here getting element become harder and over here the time
complexity of getting an element is `O(n)` like:

```text
Time Complexity: O(n)
```

The array can return the value quickly. So, array does not have to do a
lots of math to find out what is there on 2nd index because it is stored
in such a way.

### 5. Insertion / Deletion

**Linked List:**

Yes, linked list is good if I have to do any insertion or deletion that
it is easy.

So if I have to insert or delete an element inside a linked list it is
very very easy.

Suppose I have to insert an element after element `4` so how will I do
it? It is pointing to `5`, so what I will do is I will remove node `4`
pointer. So basically I will create a new node `2`, then I will link
this `4` to this node `2` and then I will make the pointer of this node
`2` to node `5`.

### Linked List insertion example

```text
Before:

HEAD
  ↓
[3] → [4] → [5] → [1]

After inserting 2 after 4:

HEAD
  ↓
[3] → [4] → [2] → [5] → [1]
```

So, insertion in a linked list is easy.

So, if there are any problem where I have to do frequent addition and
deletion in my data then linked list comes handy and linked list is
favorable over here.

So that's why we say insertion/deletion is easy over here.

### Array insertion

Suppose I have an array:

```text
index:  0   1   2   3
       [3] [4] [5] [1]
```

If I want to insert `2` after element `4`, then what I have to do is
shift all the values to the right side.

So it is a complex and tricky thing to do like:

```text
[3] [4] [5] [1]
 ↓

[3] [4] [5] [1] [ ]

 ↓

[3] [4] [2] [5] [1]
```

**Tricky!**

But suppose if I have to fetch data quickly then array is my good
option.

So that's why we say insertion/deletion is complex over here.

At the bottom of the page:

```text
6. Extra memory: When I say
```

and

```text
6. Memory efficient: When I say
```

### 6. Extra Memory vs Memory Efficient

**Linked List --- Extra Memory**

See if I insert `4` elements inside linked list I need `8` memory spaces
because in 1 memory space it will store the value and in the other
memory space it will store the reference so each node takes `×2` memory
location.

So that's why it is extra memory.

**Array --- Memory Efficient**

See if I insert `4` values inside an array I just need these below `4`
memory spaces:

```text
  0   1   2   3
[ 3 | 4 | 5 | 1 ]
```

And over there it is just taking `1` memory location.

So that's why it is memory efficient.

In doubly linked list, it is `×3` because each node will have `2`
pointers and `1` value so it will have `3` memory locations.

So that's is why takes an extra memory!

### Quick Differences

```text
Linked List                         Array

HEAD                                0  1  2  3
 ↓                                  [3][4][5][1]
[3] → [4] → [5] → [1]

1. Linear.                         1. Linear.

2. Non-contiguous.                 2. Contiguous.

3. Dynamic Size (Change            3. Fixed size (Can be
   Easily).                           dynamic).

4. Node = (value + pointers)       4. Just value.
```

### Quick Differences --- continued

---

Linked List Array

---

**5.** Getting element or fetching **5.** Getting element or fetching
element is hard. **Time Complexity: element is easy. **Time Complexity:
`O(n)`** `O(1)`**

**6.** Insertion / deletion is **6.** Insertion / deletion is
easy. complex.

**7.** Extra memory. **7.** Memory efficient.

---

### 98. When should I use Arrays and when should I use linked list?

---

Arrays Linked List

---

**1.** If I want to access the **1.** If I have to insert or
elements by index fast then I will delete at head or tail frequently
use array because it does in then linked list is a good option.
`O(1)`. So, fetching values in  
 array does it in `O(1)`. So it is  
 really good.

**2.** Now, arrays are memory **2.** If I want to avoid resizing
efficient storage for static size. overhead or unknown size upfront
So, if I want to do memory meaning see suppose I have a data
efficient storage for static size which is incoming for me like
then I should choose array. `1,2,3,4,5` and I don't know the
size of that data or I don't know
anything about it then linked list
sometime comes handy because I
don't have to give it a size or its
very dynamic in nature. So that's
why linked list comes into handy if
I have a unknown size upfront.

**3.** If I want to do a lot of **3.** If I want to do a lot of
universal manipulation. Suppose if universal manipulation. Suppose if
I have to keep adding the values I have to keep adding the values
somewhere so linked list become somewhere so linked list become
handy over there. handy over there.

### 98. When should I use Arrays and when should I use linked list? --- continued

### 3. Linked List

If I want to do a lot of traversal/manipulation. Suppose if I have to
keep adding the values somewhere so linked list becomes handy over
there.

So suppose I have to add lots of nodes here and there, in between, I
have to remove the node in between or something like that. So linked
list is handy over there.

Now, the above ones are not the hard and fast rules. And there is not
like play book which I have to follow it blindly so it's just a
generally idea about comparing between array and linked list.

And there are different uses for both of these above data structures.

But Array is very good data structure and most of things we do using
arrays.
