function removeDuplicates(nums: number[]): number {
  const uniqueNums = Array.from(new Set(nums))

  for (let i = 0; i < nums.length; i++) {
    nums[i] = uniqueNums[i] !== undefined ? uniqueNums[i] : -1
  }

  return uniqueNums.length
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums)) // 5

console.log(nums) // [ 0,  1,  2,  3,  4, -1, -1, -1, -1, -1 ]
