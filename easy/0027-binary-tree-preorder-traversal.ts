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

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return []
  }

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ]
}

const bst = new TreeNode(1)
bst.left = null
bst.right = new TreeNode(2)
bst.right.left = new TreeNode(3)

console.log(preorderTraversal(bst)) // [1, 2, 3s]
