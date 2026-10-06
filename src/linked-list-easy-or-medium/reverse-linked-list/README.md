# Reverse Linked List

### 103. Leetcode: 206. Reverse Linked List?

**A.** Let's understand and solve it:

**1.** Suppose I have been given a head of a linked list and the given
linked list is like:

```text
(1)    (2)    (3)    (4)    (5)
```

and I need reverse it. So, the problem is very straight forward so just
I need to reverse linked list.

### How I can reverse this linked list?

Let me first of all think about what should be the input and what should
be the output?

Basically I have been given below linked list and head is pointing at
node 1 like:

```text
HEAD
 ↓
(1) → (2) → (3) → (4) → (5) → NULL
```

Now, when I say reverse the above linked list that means my node 5
should point to 4, 4 should point to 3, 3 should point to 2, 2 should
point to 1 and 1 should point to null.

And my 5 should be the new head like:

```text
NULL ← (1) ← (2) ← (3) ← (4) ← (5)
                                      ↑
                                     HEAD
```

And now, my linked list becomes like above.

Now, what I know about linked list already is that suppose I am in 2nd
node then I can go next but what if I want to remove this next and I
have to point this 2nd node to the previous value so this is what I need
to do.

So suppose 3 is my curr element so I have to do `curr.next = prev` value
so basically somehow I need point 3 to my previous value like:

```text
(1) → (2) → (3) → (4) → (5) → NULL
          ↖       ↙
             curr

curr.next = prev
```

### How do I get the previous value?

Over here in singly linked list I cannot go backward and I can only go
forward. I can just go to right because I can just do a `.next` and I
can go to the next pointer basically next node that is all I can do.

So, to get the previous value I will try to maintain the previous value
also. So, what I do as I traverse through the below list one by one I
will go to each element and I will keep a track of previous value also
and then I will point current element to previous element and then I
will shift my current and then I will shift previous like:

```text
prev →
        (1) → (2) → (3) → (4) → (5) → NULL
curr →
```

Now, I will make node 2 as new current and I will make node 1 as new
previous and then I will move my current to previous so my current will
point to prev and then again I will move my current ahead and again I
will move my previous ahead like:

```text
prev
 ↓
(1) → (2) → (3) → (4) → (5) → NULL
       ↑
      curr
```

```text
NULL ← (1) ← (2) ← (3) ← (4) ← (5)
```

Then the pointers keep moving forward:

```text
prev → prev → prev → prev
  ↓      ↓      ↓      ↓
 (1) →  (2) →  (3) →  (4) → (5) → NULL
        ↑      ↑      ↑
       curr   curr   curr
```

### Pseudocode

So, the first thing I have to maintain is the previous value so I need
to keep a track of previous value.

And I will be starting from the 1st node which is head. So the previous
value will be initially null. So suppose if I start my current node from
node 1 then I want my previous value to be null over here and then I
will point current to previous like:

```text
prev
 ↓
NULL

(1) → (2) → (3) → (4) → (5) → NULL
 ↑
curr
```

```javascript
prev = null;
curr = head;

while (curr) {
  curr.next = prev;
}
```

As soon as I hit this line `curr.next = prev`, what happens is my
current will start pointing to previous value which is null and then
connection between node 1 and node 2 will go away because now my
`curr.next` points to null like:

```text
prev
 ↓
null
 ↑
(1)     (2) → (3) → (4) → (5) → NULL
 ↑
curr
```

Now, what I have to do is I have to move my current to next but I cannot
move it now because I have lost the connection of the next element.

So, this code `curr.next = prev` is not correct so before I remove the
connection between node 1 and node 2 I have to store my next value
somewhere so node 2 is my next value and my current is need to move to
the next so I have to somehow store the node 2 value into a temporary
variable.

So, I will create a temp variable and store this next 2 value and then I
will change the curr pointer like:

```text
prev → prev       temp
null    ↓          ↓
       (1) → (2) → (3) → (4) → (5) → NULL
        ↑      ↑
       curr   curr
```

```javascript
prev = null;
curr = head;

while (curr) {
  temp = curr.next;
  curr.next = prev;
  prev = curr;
  curr = temp;
}
```

### Dry Run

Initially:

```text
null
 ↓
(1) → (2) → (3) → (4) → (5) → NULL
 ↑      ↑
prev   curr
```

After one iteration:

```text
null ← (1) ← (2) → (3) → (4) → (5) → NULL
        ↑             ↑
       prev          curr
```

After the next iteration:

```text
null ← (1) ← (2) ← (3) → (4) → (5) → NULL
               ↑             ↑
              prev          curr
```

After the next iteration:

```text
null ← (1) ← (2) ← (3) ← (4) → (5) → NULL
                      ↑             ↑
                     prev          curr
```

Continuing the dry run:

```text
null ← (1) ← (2) ← (3) ← (4) ← (5) → NULL
                                  ↑
                                 prev
```

Now, I make this previous as head so my head becomes previous like:

```text
NULL ← (1) ← (2) ← (3) ← (4) ← (5)
                                  ↑
                                 HEAD
```

And then I will return this head and my linked list now has reversed.

### Final pseudocode

```javascript
prev = null;
curr = head;

while (curr) {
  temp = curr.next;
  curr.next = prev;
  prev = curr;
  curr = temp;
}

head = prev;
return head;
```

So, I can skip changing my head so head was pointing somewhere. And I
can directly return `prev` also and it will also work because I have to
just return the last node where the linked list will start from.

See, this head is nothing but just a pointer to that location so there
is no copy of head and I was doing `head = prev` which doesn't mean
anything as it is just changing the pointer where head will be pointing.

But the question says that I just have to return the node which it is.
So node can be previous also so can just return `prev` also.

This should also work.
