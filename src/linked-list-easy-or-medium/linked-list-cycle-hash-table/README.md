# Linked List: Cycle - Hash Table

### 104. Leetcode: 141. Linked List Cycle?

**A.** Let's understand and solve it:

**1.** I have to basically detect whether the linked list has a cycle or
not. So, in the final problem.

So if there is a cycle return true and if there is not a cycle return
false:

**2. What do you mean by a cycle in a linked list?**

So, regular linked list looks something like below:

```text
HEAD
 ↓
(1) → (2) → (3) → (4) → (5) → NULL
                         no cycle
```

The above regular linked list ends with null. That means it does not
have a cycle.

But over below is:

```text
(1) → (2) → (3) → (4)
       ↑             |
       |_____________|
```

**{Cycle}**

In this above linked list, 4 points to 2 directly. That means this
linked list have a cycle in it.

So the above one is a cycle in linked list.

Similarly like below one:

```text
        (3)
       ↙   ↘
(1) → (2)   (4)
       ↑   ↙
       └ (5)
```

**{Cycle}**

And 5 is again pointing to 2 so this also has a cycle.

So, if I go from 1 then it will go to 2 then it will go to 3 then it
will go to 4 then it will go to 5 and then if I go 5, next then it will
again go to 2.

If I do 2 next then it will again go to 3. So, basically, if I keep on
exploring the above linked list then it can go into infinite loop
because it will not reach null any time.

### 3. How do I find out does the linked list have a cycle or not?

### Approach 1:

The 1st approach is using a hash map or hash table or in JavaScript I
can call it hash set.

Now, these all things are same.

### Hash Table (set)

Hash Table (set) is kind of like a look up table. Suppose if I have a
set then I can add any value inside it. Suppose I added `"a"` inside it,
like:

```text
┌─────────┐
│    a    │
└─────────┘
```

So, suppose I have a set and suppose I add `a` inside it and then I
added `c` inside it like:

```text
             Set
              ↓
            ( a )
           ↙     ↘
         ( c )   ( b )
```

Now, I can directly quickly check if an element inside the above set is
present or not.

Suppose, I am putting in lots of elements inside it like
`a, b, c, d, e`, etc. and I have put thousand of elements inside set.

So, it will keep it in such a way, suppose if I have to find out does
the set have `"a"` like:

```text
(e) ───→ Set ───→ (a)
(d) ───↗  ↑  ↖─── (b)
           ↑
          (c)
```

Then:

```text
Set.has(a) → O(1) → {true, false}
```

**True/false very fast?**

So, it quickly returns me yes, it has. So it can say if we have a false
it is very fast. So, that retrieval is very quick and it is in `O(1)`.

This is why generally, this set or has map or hash table is used. So,
this has table is the main use of this data structure.

### Can I take some other data structure and do it?

Yes! Why not! Suppose if I take array and suppose if I add inside an
array like:

```text
arr = [ a | b | c | d ] → O(n)
         ↑   ↑   ↑   ↑
```

And I have to find out whether this array contain `"c"`. How will I find
out?

So I have to go one by one because I cannot directly tell whether it is
`"c"` or `"d"` or `"e"` or `"f"` because how will I find out. So the
only way to find out is I need to go one by one inside each element and
then it find out.

And the time complexity to find an element inside an array is `O(n)`.

But inside set if I have to find out certain element it is `O(1)`. And
this is very very fast.

So, `O(1)` means it will quickly give me and I don't have to check for
one by one.

So, whenever I have to find or search for any element inside the big
data I will use the set for that.

## Dry Run For Three Node

Initial state:

```text
prev
null

(1)        (2)        (3)
 ↑
curr
```

Linked list:

```text
prev
null

(1) → (2) → (3) → NULL
 ↑
curr
```

### First step

```text
prev
null → prev

(1)        (2) → (3) → NULL
 ↑           ↑
curr        curr
```

### Second step

```text
null ← (1) ← (2)        (3) → NULL
         ↑      ↑         ↑
        prev   curr      temp
```

### Third step

```text
null ← (1) ← (2) ← (3)
                ↑      ↑
               prev   curr
```

At this point:

```text
return prev
```

where `prev` is pointing to node `3`.

And now `curr = null` so the loop ends and my whole linked list reversed now and it returns `prev` which is the last node `3`.

# How do I detect a cycle?

A linked list without a cycle:

```text
(1) → (2) → (3) → (4) → null
```

**Not a Cycle Linked List**

A linked list with a cycle:

```text
(1) → (2) → (3) → (4)
       ↑             |
       |_____________|
```

**Cycle Linked List**

I will create a `"set"` and I will iterate through the above linked list one by one and I will keep pushing their elements into my linked list meaning I will keep pushing their nodes into my `"set"` so I'll do:

```javascript
Set.add(curr);
```

So, I will keep adding my current node and suppose my current node is like:

```text
(1) → (2) → (3) → (4)

  ↘     ↓     ↓     ↙
       Set.add(curr)
```

So, I will run a loop and I will keep adding these node and I will also keep checking if I have seen the same node again or not. So I will check using:

```javascript
Set.has(curr);
```

If I have seen the current node again I will stop and I will return `true` which means yes it has cycle and cycle is present.

Because see suppose if I have a `"set"` and suppose if I keep going so this is my current element over here like:

Example linked list:

```text
(1) → (2) → (3) → (4)
 ↑
curr
```

The nodes are checked against the set as they are visited.

So basically, see first of all 1st node 1 will be put into my `"set"` and now before adding 2nd node I will check is node 2 inside the `"set"` so no 2 is not inside so I will push this 2 also and now is 3 inside the `"set"` no 3 is not there so I will push it and now is 4 inside the `"set"` no so I will push it.

Now, it will go to next so it will check is 2 inside the `"set"` yes 2 is exist so that means there is cycle.

Example:

```text
(1) → (2) → (3) → (4)
       ↑             |
       |_____________|

curr
```

Set:

```text
[ 1   2   3   4 ]
```

So, if I ever reach `"null"` that means it is not a cyclic linked list.

So basically, it's a very easy logic like I keep maintaining a `"set"` with linked list values and if I find a same node again then I will break and I will say it has a cycle.

And if I found a null that means it does not have a cycle because I have encountered `"null"`.

So cyclic linked list can never have `"null"` and it will come back to any same node again.

So, this is how the whole logic works to detect do a linked list is a cycle or not.

## Pseudo code

```javascript
Function hasCycle(head) {
    SeenNodes = (new Set());
    let curr = head;

    while (curr) {
        if (SeenNodes.has(curr)) return true;
        SeenNodes.add(curr);
        curr = curr.next;
    }

    return false;
}
```

## Dry Run

### Case 1:

```text
(1) → (2) → (3) → (4) → (5) → null  ✕ {Loop break}

curr → curr → curr → curr → curr → curr

SeenNodes
[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] → {no cycles}
```

And it return `false` which means there is no cycle.
