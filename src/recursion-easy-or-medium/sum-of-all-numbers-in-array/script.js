// =============================================
// Sum all numbers in Array
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
// let arr = [5, 3, 2, 0, 1];

// function sum(n) {
//   if (n == 0) return arr[n];

//   return arr[n] + sum(n - 1);
// }

// console.log(sum(arr.length - 1));

// =============================================
// Use case: 01
// =============================================
// let arr = [5, 3, 2, 10, 1];

// function sum(n) {
//   if (n == 0) return arr[n];

//   return arr[n] + sum(n - 1);
// }

// console.log(sum(arr.length - 1));

// =============================================
// Sum all odd numbers in an array
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
let arr = [5, 3, 2, 1, 1];

function sum(n) {
  if (arr[n] % 2 == 0) return sum(n - 1);
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));
