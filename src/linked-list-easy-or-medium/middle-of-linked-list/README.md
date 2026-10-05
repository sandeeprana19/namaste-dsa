# Middle of Linked List

### 102. Leetcode: 876. Middle of the Linked List?

**A.** Let's understand and solve it:

**1.** So basically, I have to find the middle of the linked list when I
have to return that node.

### How will I do it?

So suppose I have a below linked list like:

```text
HEAD
  0       1       2       3       4       5       6       7       8
  0  ---> 1  ---> 2  ---> 3  ---> 4  ---> 5  ---> 6  ---> 7  ---> 8
```

Now, the problem statement says that there can be more than one middle
element.

Two sample cases and one of them is like:

- If there are two middle nodes, return the second middle node.

Meaning, see there can be two cases:

**1.** If the list is odd number of elements like:

```text
(1) ---> (2) ---> (3) ---> (4) ---> (5)
                    ↓
                  middle
```

then return the middle 3.

**2.** But suppose if the list have even numbers of elements like:

```text
(1) ---> (2) ---> (3) ---> (4) ---> (5) ---> (6)
                         ↘   ↙
                       middles
```

Then there are two middle so if I see above list then either 3 will be
middle or 4 will be middle.

So, if there are two middle then I have to return the second middle node
as per defined in the problem statement.

So, I have to make sure that I handle the cases for odd as well even
numbers of elements in the list.

### 2. Approach 1:

#### Convert linked list to an array

**1.** It's a very basic and easy approach is to convert this linked
list to an array. So, traverse through each and every items of this list
and create a new array like:

```text
  0    1    2    3    4    5    6    7    8
```

And also keep calculating the size and then at the end I have to find
the middle element like `(length / 2)` and then just return
`arr[length/2]` like:

```javascript
return arr[length / 2];
```

```text
arr[(8 / 2)]
arr[4] → {Answer}
```

So, this is an easy 1st approach but this is not a good approach for my
interview. An interviewer will say I don't have to convert it into array
to resolve it.

Because see this approach will use extra memory.

So if I convert this linked list to array the space complexity will be
like:

### Space Complexity

```text
O(n)
```

Because I will need order of n extra space to create a new array.

### Time Complexity

```text
O(n)
```

Because it will traverse through whole linked list and create an array
out of it.

### Approach 2:

So, over here I will have a **Slow & Fast Pointer Approach**:

### Slow & Fast Pointer

So, slow and fast pointer approach says that I will keep a 2-pointers
like one is the slow pointer that moves one step at a time and another
one I will have a fast pointer that moves two step at a time like:

```text
S → 1 step

F → 2 steps
```

And when I will keep doing this and once I reach the end of the list for
the fast pointer then my slow pointer will be at the middle position.

### Let's experiment it for understanding

Suppose my slow pointer and fast pointer starts at the same place like
head. Now, my slow pointer move one step at a time so my slow pointer
moves from 1 to 2 and then I will keep iterating.

Now, my fast pointer moves two steps from head 1 to 3.

Now, my slow pointer moves one step from 2 to 3 and my fast pointer
moves two steps from 3 to 5.

Now, my slow pointer moves one step from 3 to

4 and my fast pointer moves two steps from 5 to 7.

Now, my slow pointer moves one step from 4 to 5 and my slow pointer
moves two steps from 7 to 9.

Now, my slow pointer moves one step from 5 to 6 and my slow pointer
moves two steps from 9 to 11.

Now, my slow pointer moves one step from 6 to 7 and now my fast pointer
is null.

Like:

```text
HEAD
  ↓
(1) → (2) → (3) → (4) → (5) → (6) → (7) → (8) → NULL
S     → S     → S     → S     → S     → S
F           → F           → F           → F
```

Like:

```text
HEAD
 ↓
(1) → (2) → (3) → (4) → (5) → (6) → (7) → (8) → (9) → (10) → (11) → (12) → NULL
S      S      S      S      S      S      S
F             F             F             F             F             F
                                                                  {Break Point}
```

**Middle Element → 7**

So, when my fast pointer reaches the last index or the null then
whatever my slow pointer will be it will be middle element.

### Corner Case

There can be three corner cases:

**1.** Suppose the linked list ends so the fast pointer can be at point 12.

**2.** And the fast pointer can also be at point 11.

So basically, I have to make sure where the fast pointer ends. This is
the slight corner case that I need to think of otherwise I will keep on
finding the middle element.

And this is for the even numbers of elements in the list.

**3.** Suppose if I had odd numbers of elements in the list like:

```text
HEAD
 ↓
(1) → (2) → (3) → (4) → (5) → (6) → (7) → (8) → (9) → (10) → (11) → NULL
S      S      S      S      S      S
F             F             F             F
                         ↑
                   {Middle Element}
```

So once fast move at the end should I move fast more?

So, if fast reaches the last element 11 over here then I have to stop
the loop because that is the point where I have reached the middle
element.

### 4. Time and Space Complexity of Approach 2 Algorithm

### Time Complexity

So the loop is running for `n/2` time because if the numbers of element
are n then loop is only for `n/2` times so the time complexity
essentially comes down to be:

```text
O(n/2) = O(n)
```

### Space Complexity

Space complexity is nothing because I just need two spaces like slow and
fast pointers but it's not in order of n so space complexity is:

```text
O(1)
```

### 5. Pseudocode for Approach 2 Algorithm

```javascript
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

### Reason behind returning "slow" instead of "slow.val"

See, I always have to see the signature of `middleNode` function so
signature says that:

**1.** `@param` which means whatever I am getting as a input is a list
node.

**2.** `@return` means whatever I have return is a list node again. So
if this was a "Number" instead of "ListNode" then I would have done
return "slow.val" but I have to return a list node so I have to return
slow.
