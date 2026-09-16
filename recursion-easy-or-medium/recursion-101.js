// =============================================
// Recursion & Call Stack
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
// function fun(num) {
//   // Base case
//   if (num == 0) return;

//   console.log(num);
//   num = num - 1;

//   // Recursive case
//   fun(num);
// }

// let a = 10;
// fun(a);

// =============================================
// Use case: 02
// =============================================
// function fun(num) {
//   if (num == 0) return;

//   console.log(num);
//   num = num - 1;
//   fun(num);
// }

// let a = 100;
// fun(a);

// =============================================
// Use case: 03
// =============================================
// function fun(num) {
//   if (num == 0) return;

//   console.log(num);
//   num = num - 1;
//   fun(num);
// }

// let a = 1000;
// fun(a);

// =============================================
// Use case: 04
// =============================================
// function fun(num) {
//   console.log(num);
//   num = num - 1;
//   fun(num);
// }

// let a = 10;
// fun(a);

// =============================================
// Use case: 05
// =============================================
// function fun(num) {
//   if (num == 0) return;

//   debugger;

//   console.log(num);
//   num = num - 1;
//   fun(num);
// }

// let a = 10;
// fun(a);

// =============================================
// Print n.........to........1 using Recursion?
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
// function printNum(num) {
//   if (num == 0) return;

//   console.log(num);
//   num = num - 1;
//   printNum(num);
// }

// let a = 10;
// printNum(a);

// =============================================
// Use case: 02
// =============================================
// function print(n) {
//   if (n < 1) return;

//   console.log(n);
//   print(--n);
// }

// let n = 10;
// print(n);

// =============================================
// Use case: 03
// =============================================
// let n = 10;

// function print(x) {
//   if (x > n) return;

//   console.log(x);
//   print(++x);
// }

// print(1);
