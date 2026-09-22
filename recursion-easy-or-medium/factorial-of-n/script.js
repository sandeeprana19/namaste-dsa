// =============================================
// Factorial using recursion
// =============================================

// Solution:
// =============================================
// Use case: 01
// =============================================
function fact(n) {
  if (n < 0) return undefined; // Factorial is undefined for negative numbers
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5));
console.log(fact(6));
console.log(fact(0));
console.log(fact(-5));
