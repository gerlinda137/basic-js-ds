const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError("Not implemented");
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError("Not implemented");
    let currNode = this.rootNode;
    if (!currNode) {
      currNode = this.rootNode = new Node(data);
      return;
    }

    if (currNode.data === data) {
      return;
    }

    while (true) {
      if (data < currNode.data) {
        if (!currNode.left) {
          currNode.left = new Node(data);
          return;
        }
        currNode = currNode.left;
      }
      if (data > currNode.data) {
        if (!currNode.right) {
          currNode.right = new Node(data);
          return;
        }
        currNode = currNode.right;
      }

      if (data == currNode.data) {
        return;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

const bt = new BinarySearchTree();
bt.add(1);
console.log(bt);
bt.add(2);
console.log(bt);
bt.add(5);
console.log(bt);
bt.add(3);
console.log(bt);
bt.root();

module.exports = {
  BinarySearchTree,
};
