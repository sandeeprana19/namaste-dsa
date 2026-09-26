// =============================================
// Bubble Sort
// =============================================

// Problem
// Bubble sort: arr = [5, 4, 9, 1, 0]

// Solution:
// =============================================
// Use case: 01
// =============================================
// let arr = [5, 4, 9, 1, 0];

// function bubbleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// let result = bubbleSort(arr);
// console.log(result);

// =============================================
// Use case: 02
// =============================================
// let arr = [5, 4, 9, 15, 7, 1, 0];

// function bubbleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// let result = bubbleSort(arr);
// console.log(result);

// =============================================
// Use case: 03 [Improved or Optimized Bubble Sort Version]
// =============================================
let arr = [5, 4, 9, 15, 7, 1, 0];

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) break; // If no two elements were swapped in the inner loop, then break
  }

  return arr;
}

let result = bubbleSort(arr);
console.log(result);
