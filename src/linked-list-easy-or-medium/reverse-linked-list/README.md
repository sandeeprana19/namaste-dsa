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
