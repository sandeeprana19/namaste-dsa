### 1. Problem understanding

Basically, I have to check whether the given linked list is a palindrome. If it is a palindrome, I have to return `true`; otherwise, return `false`.

Examples drawn in the notes:

- `1 → 2 → 2 → 1` — palindrome
- `1 → 2` — not a palindrome

Let's see how to solve it.

The linked list below is a palindrome:

`HEAD → 1 → 2 → 3 → 3 → 2 → 1 → null`

There are two approaches to solve whether the above linked list is a palindrome or not:

1. The easy and straightforward approach.
2. A second approach, to be discussed later.

### 2. Approach 1

In approach 1, I can convert the above linked list to an array, and then I need to check whether the array is a palindrome.

#### How to convert this linked list?

Basically, I can push all its elements into an array, and my array will become something like this:

| Index |   0 |   1 |   2 |   3 |   4 |   5 |
| ----- | --: | --: | --: | --: | --: | --: |
| Value |   1 |   2 |   3 |   3 |   2 |   1 |

`n = 6`
