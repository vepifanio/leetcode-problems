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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false
  }

  const nodeStack = []
  const sums = []
  nodeStack.push(root)
  sums.push(root.val)

  while (nodeStack.length > 0) {
    const node = nodeStack.pop() as TreeNode
    const sum = sums.pop() as number

    if (node.left === null && node.right === null) {
      if (sum === targetSum) {
        return true
      }
    }

    if (node.left !== null) {
      nodeStack.push(node.left)
      sums.push(sum + node.left.val)
    }

    if (node.right !== null) {
      nodeStack.push(node.right)
      sums.push(sum + node.right.val)
    }
  }

  return false
}

const root = new TreeNode(10)
root.left = new TreeNode(8)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(2)

console.log(hasPathSum(root, 23)) // true

const root2 = new TreeNode(5)
root2.left = new TreeNode(4)
root2.right = new TreeNode(8)
root2.left.left = new TreeNode(11)
root2.left.left.left = new TreeNode(7)
root2.left.left.right = new TreeNode(2)
root2.right.left = new TreeNode(13)
root2.right.right = new TreeNode(4)
root2.right.right.right = new TreeNode(1)

console.log(hasPathSum(root2, 22)) // true
