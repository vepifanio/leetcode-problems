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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let equal = false

  if (p === null && q === null) {
    return true
  }

  if (p === null || q === null) {
    return false
  }

  const leftIsSame = isSameTree(p?.left, q.left)

  if (p.val === q.val) {
    equal = true
  }

  const rightIsSame = isSameTree(p.right, q.right)

  return leftIsSame && equal && rightIsSame
}

const bst1 = new TreeNode(1)
bst1.left = new TreeNode(2)
bst1.right = new TreeNode(3)

const bst2 = new TreeNode(1)
bst2.left = new TreeNode(2)

const bst3 = new TreeNode(1)
bst3.right = new TreeNode(2)

console.log(isSameTree(bst1, bst1)) // true
console.log(isSameTree(bst2, bst3)) // false
