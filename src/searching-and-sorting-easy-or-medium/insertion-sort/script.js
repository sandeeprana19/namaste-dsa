// =============================================
// Insertion Sort
// =============================================

// Problem
// Insertion sort: arr = [7, 4, 3, 5, 1, 2]

// Solution:
// =============================================
// Use case: 01
// =============================================
// let arr = [7, 4, 3, 5, 1, 2];

// function insertionSort(a) {
//   let n = arr.length;

//   for (let i = 1; i < n; i++) {
//     let curr = a[i];
//     let prev = i - 1;

//     while (a[prev] > curr) {
//       a[prev + 1] = a[prev];
//       prev--;
//     }

//     a[prev + 1] = curr;
//   }

//   return arr;
// }

// let result = insertionSort(arr);
// console.log(result);

// =============================================
// Use case: 02 [Corner case like when prev is exhausted meaning when it becomes -1 then I'll break while loop]
// =============================================
// let arr = [7, 4, 3, 5, 1, 2];

// function insertionSort(a) {
//   let n = arr.length;

//   for (let i = 1; i < n; i++) {
//     let curr = a[i];
//     let prev = i - 1;

//     while (a[prev] > curr && prev >= 0) {
//       a[prev + 1] = a[prev];
//       prev--;
//     }

//     a[prev + 1] = curr;
//   }

//   return arr;
// }

// let result = insertionSort(arr);
// console.log(result);

// =============================================
// Use case: 02
// =============================================
let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function insertionSort(a) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = a[i];
    let prev = i - 1;

    while (a[prev] > curr && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }

    a[prev + 1] = curr;
  }

  return arr;
}

let result = insertionSort(arr);
console.log(result);
