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

function isSymmetric(root: TreeNode | null): boolean {
  function areMirror(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null && b === null) {
      return true
    }

    if (a === null || b === null) {
      return false
    }

    return (
      a.val === b.val &&
      areMirror(a.left, b.right) &&
      areMirror(a.right, b.left)
    )
  }

  return areMirror(root.left, root.right)
}

const bst = new TreeNode(1)
bst.left = new TreeNode(2)
bst.left.left = new TreeNode(3)
bst.left.right = new TreeNode(4)

bst.right = new TreeNode(2)
bst.right.left = new TreeNode(4)
bst.right.right = new TreeNode(3)

console.log(isSymmetric(bst))

const bst2 = new TreeNode(1)
bst2.left = new TreeNode(2)
bst2.left.right = new TreeNode(3)

bst2.right = new TreeNode(2)
bst2.right.right = new TreeNode(3)

console.log(isSymmetric(bst2))
