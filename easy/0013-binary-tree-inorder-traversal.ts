class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0: val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const accessedVals: number[] = []

  if (root === null) {
      return accessedVals
  }

  accessedVals.push(...inorderTraversal(root.left))
  accessedVals.push(root.val)
  accessedVals.push(...inorderTraversal(root.right))

  return accessedVals
};

const bst = new TreeNode(1)
bst.left = null
bst.right = new TreeNode(2)
bst.right.left = new TreeNode(3)


console.log(inorderTraversal(bst)) //[1, 3, 2]
console.log(inorderTraversal(null)) // []
console.log(inorderTraversal(new TreeNode(1))) // [1]