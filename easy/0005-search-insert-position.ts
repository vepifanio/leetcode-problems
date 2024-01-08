function searchInsert(nums: number[], target: number): number {
  let insertIndex = 0

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target) {
      insertIndex = i
      break
    }

    insertIndex = i

    if (nums[i] > target) {
      break
    }
  }

  return insertIndex
}

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
