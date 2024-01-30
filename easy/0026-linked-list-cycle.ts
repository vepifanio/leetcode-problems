class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function hasCycle(head: ListNode | null): boolean {
  const nodes: (ListNode | null)[] = []
  let current = head

  while (current !== null) {
    if (current.next === null) {
      return false
    }

    for (const node of nodes) {
      if (node === current) {
        return true
      }
    }

    nodes.push(current)

    current = current.next
  }

  return false
}

const listHead = new ListNode(3)
const listHeadNext = new ListNode(2)
listHead.next = listHeadNext
listHead.next.next = new ListNode(0)
listHead.next.next.next = new ListNode(-4)
listHead.next.next.next.next = listHeadNext

console.log(hasCycle(listHead))

const listHead2 = new ListNode(1)
listHead2.next = new ListNode(2)
listHead2.next.next = listHead2

console.log(hasCycle(listHead2))
console.log(hasCycle(new ListNode(1)))
