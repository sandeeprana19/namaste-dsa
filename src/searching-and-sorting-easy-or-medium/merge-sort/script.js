// =============================================
// Merge Sort
// =============================================

// Problem
// # Merge 2 Sorted list into a single list:

// [1, 3, 5, 7] [2, 4, 8, 9]

// Solution:
// =============================================
// Use case: 01 [Mine Solution]
// =============================================
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 8, 9];
let m = arr1.length;
let n = arr2.length;

function mergeSortedList(a1, m, a2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i < m + n; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && a1[p1] > a2[p2]) {
      a1[i] = a1[p1];
      p1--;
    } else {
      a1[i] = a2[p2];
      p2--;
    }
  }

  return arr1;
}

let result = mergeSortedList(arr1, m, arr2, n);
console.log(result);
