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

function treeHeight(root: TreeNode | null) {
  if (root === null) {
    return 0
  }

  return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true
  }

  const lHeight = treeHeight(root.left)
  const rHeight = treeHeight(root.right)

  if (
    Math.abs(lHeight - rHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  ) {
    return true
  }

  return false
}

const bst = new TreeNode(3)
bst.left = new TreeNode(9)
bst.right = new TreeNode(20)
bst.right.left = new TreeNode(15)
bst.right.right = new TreeNode(7)

console.log(isBalanced(bst)) // true

const bst2 = new TreeNode(1)
bst2.left = new TreeNode(2)
bst2.right = new TreeNode(2)

bst2.left.left = new TreeNode(3)
bst2.left.right = new TreeNode(3)

bst2.left.left.left = new TreeNode(4)
bst2.left.left.right = new TreeNode(4)

console.log(isBalanced(bst2)) // false
