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

function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  if (root.left === null && root.right === null) {
    return 1
  }

  if (root.left === null) {
    return 1 + minDepth(root.right)
  }

  if (root.right === null) {
    return 1 + minDepth(root.left)
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

const bst = new TreeNode(3)
bst.left = new TreeNode(9)
bst.right = new TreeNode(20)
bst.right.left = new TreeNode(15)
bst.right.right = new TreeNode(7)

console.log(minDepth(bst))
