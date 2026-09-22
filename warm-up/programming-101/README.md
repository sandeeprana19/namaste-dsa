## Warm Up

## Programming 101

3. How does javascript store an array let say `arr = [5,10,2,0,1]` behind the scene?

A. JavaScript creates a table and it store a index and value. And the index start from 0,1,2,3,4 and for each index, there is a value like 5,10,2,0,1. And suppose, if I want to find there is a value of index 2 then I just need to do `arr[2] => 2` and so on to find.
So, that's how array works and that's how javascript store an array behind the scene.

Example:

`arr = [5,10,2,0,1]`

| index | value |
| ----- | ----- |
| 0     | 5     |
| 1     | 10    |
| 2     | 2     |
| 3     | 0     |
| 4     | 1     |

`arr[2] => 2`

`arr[4] => 1`

4. How does javascript store an object behind the scene?

A. So, javascript store an object behind the scene like below example:

```javascript
obj = {
  a: 1,
  name: Sandeep,
  bool: true,
};
```

| Key  | Value   |
| ---- | ------- |
| a    | 1       |
| name | Sandeep |
| bool | true    |

`obj.a => 1`

`obj.name => Sandeep`

`obj.bool => true`
