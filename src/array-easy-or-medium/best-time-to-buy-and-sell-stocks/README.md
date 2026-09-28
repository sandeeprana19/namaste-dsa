# Best Time to Buy and Sell Stock

## 52. LeetCode: 121. Best Time to Buy and Sell Stock

The notebook first breaks down the problem statement and tries to understand what it is asking.

### 1. Example

```text
p = [7, 1, 5, 3, 6, 4]
     0  1  2  3  4  5
```

```text
p[i] = day's price
```

The idea is to buy at a lower price and sell later at a higher price.

For example:

```text
Buy = 1
Sell = 5

Profit = 5 - 1
       = 4
```

### 2. Another example

```text
p = [7, 1, 5, 3, 6, 4]

Buy = 1
Sell = 6

Profit = 6 - 1
       = 5
```

So:

```text
Profit = 5
```

The notebook notes that the buy day must come before the sell day.

### 3. Loss / No Profit Example

```text
p = [7, 6, 4, 3, 1]
```

Here the prices keep decreasing.

```text
Loss → return 0
```

### 4. Brute Force Approach

The notebook illustrates that, in the brute-force approach, all possible combinations of buy and sell days are considered to find the maximum profit.

```text
Buy at one position
        ↓
Sell at every position after it
        ↓
Calculate profit
        ↓
Find maximum profit
```

The notebook's brute-force idea is to try all possible combinations of buy and sell.

The notebook explains:

> But it is a very bad approach to solve a problem because the time complexity will go on order of:

```text
O(n²)
```

```text
O(n²) → Time Complexity of Brute Force approach
```

The reason is that two loops are required.

```js
for (i = 0; i < n; i++) {
  for (j = i + 1; j < n; j++) {
    // calculate profit
  }
}
```

The notebook notes that:

```text
2 loops
   ↓
Time complexity will be in n² mode
```

## Example 1

```text
p = [7, 1, 5, 3, 6, 4]
     0  1  2  3  4  5
```

The notebook points out:

> Left hand side

and considers the left-side value as the minimum/buying point before calculating profit with the values on the right.

It also notes:

> One important thing I have to not over here is whenever I'm selling at any point except the same day because problem had clearly mentioned that I can't sell on the same buying day so I have to find out the buying minimum point before that to make maximum profit.

The idea is:

```text
Find minimum buying price first
            ↓
Sell after that day
            ↓
Calculate maximum profit
```

## Example 1 — Brute Force Dry Run

```text
p = [7, 1, 5, 3, 6, 4]
     0  1  2  3  4  5
```

Initial state:

```text
min = 7
maxProfit = 0
```

### At index 1

```text
p[1] = 1

min = 7
maxProfit = 1 - min
          = 1 - 7
          = -6 or 0
```

Then:

```text
min = 1
```

### At index 2

```text
p[2] = 5

min = 1
maxProfit = 5 - 1
          = 4
```

### At index 3

```text
p[3] = 3

min = 1
maxProfit = 3 - 1
          = 2

2 < 4
→ maxProfit remains 4
```

### At index 4

```text
p[4] = 6

min = 1
maxProfit = 6 - 1
          = 5

5 > 4
→ update maxProfit = 5
```

### At index 5

```text
p[5] = 4

min = 1
maxProfit = 4 - 1
          = 3

3 < 5
→ maxProfit remains 5
```

The notebook's dry run demonstrates that the maximum profit found is:

```text
maxProfit = 5
```

## Example 2

```text
p = [7, 6, 4, 3, 1]
     0  1  2  3  4
```

Initial:

```text
min = 7
```

At index 1:

```text
maxProfit = 6 - min
          = 6 - 7
          = -1 or 0
```

Then:

```text
p = [6, 6, 4, 3, 1]

min = 6
```

At index 2:

```text
min = 6
maxProfit = 4 - 6
          = -2 or 0
```

Since the current value is smaller:

```text
min = 4
```

At index 3:

```text
min = 4
maxProfit = 3 - 4
          = -1 or 0
```

Then:

```text
min = 3
```

At index 4:

```text
min = 3
maxProfit = 1 - 3
          = -2 or 0
```

The notebook marks this as:

```text
This is maxProfit
```

Final result:

```text
maxProfit = 0
```

## Example 3

```text
p = [1, 3, 5, 7, 2, 8, 10]
     0  1  2  3  4  5  6
```

Initial:

```text
min = 1
```

At index 1:

```text
maxProfit = 3 - min
          = 3 - 1
          = 2

← Current
```

At index 2:

```text
min = 1
maxProfit = 5 - 1
          = 4

← Updated because 4 > 2
```

At index 3:

```text
min = 1
maxProfit = 7 - 1
          = 6

← Updated because 6 > 4
```

At index 4:

```text
min = 1
maxProfit = 2 - 1
          = 1

← Not updated because 1 < 6
```

At index 5:

```text
min = 1
maxProfit = 8 - 1
          = 7

← Updated because 7 > 6
```

At index 6:

```text
min = 1
maxProfit = 10 - 1
          = 9

← Updated because 9 > 7
```

Final:

```text
maxProfit = 9
```

## Example 3 — Final Step

```text
p = [1, 3, 5, 7, 2, 8, 10]
     0  1  2  3  4  5  6

min = 1

maxProfit = 10 - min
          = 10 - 1
          = 9
```

```text
← Updated because 9 > 7
```

The loop ends.
