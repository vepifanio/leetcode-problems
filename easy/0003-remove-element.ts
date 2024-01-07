function removeElement(nums: number[], val: number): number {
  const numsWithoutVal = nums.filter((num) => num !== val)

  for (let i = 0; i < numsWithoutVal.length; i++) {
    nums[i] = numsWithoutVal[i]
  }

  return numsWithoutVal.length
}

const numbers = [0, 1, 2, 2, 3, 0, 4, 2]
console.log(removeElement(numbers, 2)) // 5

console.log(numbers) // [0,1,3,0,4]
