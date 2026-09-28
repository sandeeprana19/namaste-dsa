// =============================================
// Selection Sort
// =============================================

// Problem
// Selection sort: arr = [7, 1, 5, 4, 3, 2]

// Solution:
// =============================================
// Use case: 01
// =============================================
// let arr = [7, 1, 5, 4, 3, 2];

// function selectionSort(a) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     // find the minimum in the array
//     let min = i;

//     for (let j = i + 1; j < n; j++) {
//       if (a[j] < a[min]) {
//         min = j;
//       }
//     }

//     let temp = a[i];
//     a[i] = a[min];
//     a[min] = temp;
//   }

//   return arr;
// }

// let result = selectionSort(arr);
// console.log(result);

// =============================================
// Use case: 02
// =============================================
// let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

// function selectionSort(a) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     // find the minimum in the array
//     let min = i;

//     for (let j = i + 1; j < n; j++) {
//       if (a[j] < a[min]) {
//         min = j;
//       }
//     }

//     let temp = a[i];
//     a[i] = a[min];
//     a[min] = temp;
//   }

//   return arr;
// }

// let result = selectionSort(arr);
// console.log(result);

// =============================================
// Use case: 03 [Improvement or Optimize version]
// =============================================
let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function selectionSort(a) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // find the minimum in the array
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }

  return arr;
}

let result = selectionSort(arr);
console.log(result);
