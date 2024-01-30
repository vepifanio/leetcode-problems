function singleNumber(nums: number[]): number {
  const items = new Set(nums)
  const appereances: { [key: string]: number } = {}

  items.forEach((item) => {
    appereances[item] = 0
  })

  nums.forEach((item) => {
    appereances[item]++
  })

  let unique = -1

  Object.keys(appereances).forEach((num) => {
    if (appereances[num] === 1) {
      unique = Number(num)
    }
  })

  return unique
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
