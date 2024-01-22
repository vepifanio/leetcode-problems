function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let currentInsertIndex = 0
  let toBeInsertedIndex = 0
  let mergedItems = m

  while (mergedItems < m + n) {
    if (
      nums1[currentInsertIndex] >= nums2[toBeInsertedIndex] ||
      currentInsertIndex === mergedItems
    ) {
      let toBeMovedIndex = mergedItems - 1
      while (toBeMovedIndex >= currentInsertIndex) {
        nums1[toBeMovedIndex + 1] = nums1[toBeMovedIndex]
        toBeMovedIndex--
      }

      nums1[currentInsertIndex] = nums2[toBeInsertedIndex]
      toBeInsertedIndex++
      mergedItems++
    } else {
      currentInsertIndex++
    }
  }

  console.log(nums1)
}

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
merge([1, 2, 3, 0, 0, 0], 3, [1, 2, 3], 3)
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 0)
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
