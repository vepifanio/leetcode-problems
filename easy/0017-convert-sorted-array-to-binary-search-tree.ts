class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null
  }

  const pivot = Math.floor(nums.length / 2)
  const val = nums[pivot]
  const left = nums.slice(0, pivot)
  const right = nums.slice(pivot + 1)
  const root = new TreeNode(val)
  root.left = sortedArrayToBST(left)
  root.right = sortedArrayToBST(right)

  return root
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
console.log(sortedArrayToBST([1, 3]))
