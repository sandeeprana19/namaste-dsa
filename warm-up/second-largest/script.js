// =============================================
// Use case: 01
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [4, 9, 0, 2, 8, 7, 1];

// function findSecondLargest(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 02
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [4, 9, 0, 12, 8, 7, 1];

// function findSecondLargest(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 03
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [4, 9, 0, 12, 10, 8, 7, 1];

// function findSecondLargest(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 04 (Corner case: 01)
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [];

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array should have atleast 2 elements";
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 05 (Corner case: 01)
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [10, 2];

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array should have atleast 2 elements";
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 06 (Corner case: 02)
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [10, 2, -2, -10, -5, 8, -34];

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array should have atleast 2 elements";
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 07 (Corner case: 02)
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [-2, -10, -5, -34];

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array should have atleast 2 elements";
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 08 (Corner case: 03)
// =============================================
// Write a function that returns the second largest number in an array
// let arr = [10, 20, 8, 9, 3, 5, 20];

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array should have atleast 2 elements";
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
//             secondLargest = arr[i];
//         };
//     }

//     return secondLargest;
// }

// const result = findSecondLargest(arr);
// console.log(result);

// =============================================
// Use case: 09 (Corner case: 03)
// =============================================
// Write a function that returns the second largest number in an array
let arr = [10, 20, 8, 9, 3, 5, 20, 20];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = findSecondLargest(arr);
console.log(result);
