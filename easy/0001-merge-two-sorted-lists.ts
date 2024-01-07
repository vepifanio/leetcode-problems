class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let resultListNode: ListNode | null = null

  if (list1 && list2) {
    if (list1.val <= list2.val) {
      resultListNode = new ListNode(list1.val)
      resultListNode.next = mergeTwoLists(list1.next, list2)
    } else {
      resultListNode = new ListNode(list2.val)
      resultListNode.next = mergeTwoLists(list1, list2.next)
    }
  } else if (list1 || list2) {
    if (list1) {
      resultListNode = new ListNode(list1.val, list1.next)
    }

    if (list2) {
      resultListNode = new ListNode(list2.val, list2.next)
    }
  }

  return resultListNode
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

console.log(JSON.stringify(mergeTwoLists(list1, list2)))
