class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  toArray() {
    const valuesArray: number[] = []
    let head = this

    while (head !== null) {
      valuesArray.push(head.val)
      head = head.next
    }

    return valuesArray
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let prev = head
  let dummy = head

  while (dummy !== null) {
    dummy = prev?.next

    if (prev?.val === dummy?.val) {
      prev.next = dummy.next
      dummy = prev.next
    } else {
      prev = dummy
    }
  }

  return head
}

const list1 = new ListNode(1, new ListNode(1, new ListNode(2)))
console.log(deleteDuplicates(list1).toArray()) // [1, 2]

const list2 = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))),
)
console.log(deleteDuplicates(list2).toArray()) // [1, 2, 3]
