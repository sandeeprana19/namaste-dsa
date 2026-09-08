// =============================================
// Problem: 01
// =============================================
// Write a function that returns the count of digits in a number
// function countDigits(n) {
// }
// let num = 259;
// let result = countDigits(num);

// Solution:
// =============================================
// Use case: 01
// =============================================
// function countDigits(n) {
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// let num = 259;
// let result = countDigits(num);
// console.log(result);

// =============================================
// Use case: 02
// =============================================
// function countDigits(n) {
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// let num = 259114389;
// let result = countDigits(num);
// console.log(result);

// Corner cases of above problem so lets say what if:
// 1. Number is 0:
// =============================================
// Use case: 03
// =============================================
// function countDigits(n) {
//     // If number is 0
//     if (n == 0) return 1;

//     let count = 0;

//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// let num = 0;
// let result = countDigits(num);
// console.log(result);

// 2. Number is negative lets say -259:
// =============================================
// Use case: 04
// =============================================
// function countDigits(n) {
//   // If number is 0
//   if (n == 0) return 1;

//   // Converting negative numbers to positive
//   n = Math.abs(n);

//   let count = 0;

//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }

//   return count;
// }

// let num = -259;
// let result = countDigits(num);
// console.log(result);
