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
  if (list1 === null) {
    return list2
  }

  if (list2 === null) {
    return list1
  }

  let resultListNode: ListNode | null = null

  if (list1.val <= list2.val) {
    resultListNode = new ListNode(list1.val)
    resultListNode.next = mergeTwoLists(list1.next, list2)
  } else {
    resultListNode = new ListNode(list2.val)
    resultListNode.next = mergeTwoLists(list1, list2.next)
  }

  return resultListNode
}

const list1 = new ListNode(1, new ListNode(7, new ListNode(11)))
const list2 = new ListNode(4, new ListNode(9, new ListNode(10)))

console.log(JSON.stringify(mergeTwoLists(list1, list2)))
// {"val":1,"next":{"val":1,"next":{"val":3,"next":{"val":4,"next":{"val":7,"next":{"val":11,"next":null}}}}}}
