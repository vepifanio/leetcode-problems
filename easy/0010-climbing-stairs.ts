/**
 * reference: https://leetcode.com/problems/climbing-stairs/solutions/3399534/one-liner-javascript-typescript-solution-with-recursion
 */

function climbStairs(n: number): number {
  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3)
}

console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
