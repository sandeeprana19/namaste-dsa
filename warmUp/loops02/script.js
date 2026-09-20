// =============================================
// Use case: 01
// =============================================
// Write a function that searches for an element in the array and returns the index, if the element is not present then just return -1

// let arr = [4, 2, 0, 10, 8, 30];

// function searchElement(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == x) {
//             return i;
//         }
//     }
//     return -1;
// }

// const result = searchElement(arr, 10);
// console.log(result);

// =============================================
// Use case: 02
// =============================================
// Write a function that searches for an element in the array and returns the index, if the element is not present then just return -1

// let arr = [4, 2, 0, 10, 8, 30];

// function searchElement(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == x) {
//             return i;
//         }
//     }
//     return -1;
// }

// const result = searchElement(arr, 30);
// console.log(result);

// =============================================
// Use case: 03
// =============================================
// Write a function that searches for an element in the array and returns the index, if the element is not present then just return -1

// let arr = [4, 2, 0, 10, 8, 30];

// function searchElement(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == x) {
//             return i;
//         }
//     }
//     return -1;
// }

// const result = searchElement(arr, 49);
// console.log(result);

// =============================================
// Use case: 04
// =============================================
// Write a function that returns the number of negative numbers in an array
// let arr = [2, -9, 17, 0, 1, -10, -4, 8];

// function countNegatives(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = countNegatives(arr);
// console.log(result);

// =============================================
// Use case: 05
// =============================================
// Write a function that returns the number of negative numbers in an array
// let arr = [2, -9, 17, 0, -1, -10, -4, 8];

// function countNegatives(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = countNegatives(arr);
// console.log(result);

// =============================================
// Use case: 06
// =============================================
// Write a function that returns the number of negative numbers in an array
// let arr = [2, 9, 17, 0, 1, 10, 4, 8];

// function countNegatives(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = countNegatives(arr);
// console.log(result);

// =============================================
// Use case: 07
// =============================================
// Write a function that returns the largest number in an array
// let arr = [5, 0, 10, 8, 17, 1];

// function findLargest(arr) {
//     let largest = -1; // bug

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const result = findLargest(arr);
// console.log(result);

// =============================================
// Use case: 08
// =============================================
// Write a function that returns the largest number in an array
// let arr = [5, 0, 100, 8, 17, 1];

// function findLargest(arr) {
//     let largest = -1; // bug

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const result = findLargest(arr);
// console.log(result);

// =============================================
// Use case: 09
// =============================================
// Write a function that returns the largest number in an array
// let arr = [5, 0, 10, 8, 17, 1];

// function findLargest(arr) {
//     let largest = -Infinity; // Bug resolver

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const result = findLargest(arr);
// console.log(result);

// =============================================
// Use case: 10
// =============================================
// Write a function that returns the largest number in an array
// let arr = [-9, -19, -8];

// function findLargest(arr) {
//     let largest = -Infinity; // Bug resolver

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const result = findLargest(arr);
// console.log(result);

// =============================================
// Use case: 11
// =============================================
// Write a function that returns the largest number in an array
// let arr = [5, 0, 10, 8, 17, 1];

// function findLargest(arr) {
//     let largest = arr[0]; // Bug resolver

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const result = findLargest(arr);
// console.log(result);

// =============================================
// Use case: 12
// =============================================
// Write a function that returns the smallest number in an array
let arr = [-9, -19, -8];

function findSmallest(arr) {
  let smallest = Infinity;
  console.log(smallest);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const result = findSmallest(arr);
console.log(result);
