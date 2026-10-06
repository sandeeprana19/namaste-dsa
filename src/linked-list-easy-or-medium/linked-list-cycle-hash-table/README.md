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
