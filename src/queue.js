const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    let currNode = Queue.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    let node = new ListNode();
    node.value = value;
    node.next = null;

    if (Queue.head == null) {
      Queue.head = node;
    } else {
      let currNode = Queue.head;
      if (currNode.next == null) {
        currNode.next = node;
        currNode = currNode.next;
        currNode.value = value;
      } else {
        while (currNode.next !== null) {
          currNode = currNode.next;
        }
        currNode.next = node;
        currNode = currNode.next;
        currNode.value = value;
      }
    }
    return Queue;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    const originHead = Queue.head.value;
    Queue.head = Queue.head.next;
    return originHead;
  }
}
//const queue = new Queue();
//queue.enqueue(666);
// queue.enqueue(6);
// queue.enqueue(7);
// const resultDequee = queue.dequeue();
// // queue.dequeue();
// queue.getUnderlyingList();

module.exports = {
  Queue,
};
