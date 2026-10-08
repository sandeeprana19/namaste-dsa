// =============================================
// Linked List Cycle Hash Table
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr) {
    if (seenNodes.has(curr)) return true;
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};
