// =============================================
// Palindrome Linked List
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
var isPalindrome = function (head) {
  if (!head || head.length == 1) return false;
  let arr = new Array();
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) return false;
  }
  return true;
};
