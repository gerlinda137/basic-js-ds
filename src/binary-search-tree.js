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

  has(data) {
    // throw new NotImplementedError("Not implemented");
    let currNode = this.rootNode;
    while (true) {
      if (!currNode) {
        return false;
      }
      if (data < currNode.data) {
        currNode = currNode.left;
      } else if (data > currNode.data) {
        currNode = currNode.right;
      } else if (data == currNode.data) {
        return true;
      }
    }
  }

  find(data) {
    // throw new NotImplementedError("Not implemented");
    let currNode = this.rootNode;
    while (true) {
      if (!currNode) {
        return null;
      }
      if (data < currNode.data) {
        currNode = currNode.left;
      } else if (data > currNode.data) {
        currNode = currNode.right;
      } else if (data == currNode.data) {
        return currNode;
      }
    }
  }

  remove(data) {
    let currNode = this.rootNode;
    let prevNode = currNode;
    while (true) {
      if (!currNode) {
        return null;
      }
      if (data < currNode.data) {
        prevNode = currNode;
        currNode = currNode.left;
      } else if (data > currNode.data) {
        prevNode = currNode;
        currNode = currNode.right;
      } else if (data == currNode.data) {
        break;
      }
    }

    let deletable = currNode;

    if (!deletable.right && !deletable.left) {
      if (prevNode.left == currNode) {
        prevNode.left = null;
      } else if (prevNode.right == currNode) {
        prevNode.right == null;
      }
      return;
    }
    if (!deletable.left) {
      if (prevNode.left == currNode) {
        prevNode.left = deletable.right;
      } else if (prevNode.right == currNode) {
        prevNode.right = deletable.right;
      }
      return;
    }
    if (!deletable.right) {
      if (prevNode.left == currNode) {
        prevNode.left = deletable.left;
      } else if (prevNode.right == currNode) {
        prevNode.right = deletable.left;
      }
      return;
    }

    let minNode = deletable.right;
    let prevMinNode = deletable;

    while (true) {
      if (!minNode.left) {
        break;
      }
      prevMinNode = minNode;
      minNode = minNode.left;
    }

    deletable.data = minNode.data;

    if (prevMinNode.left == minNode) {
      prevMinNode.left = null;
    } else if (prevMinNode.right == minNode) {
      prevMinNode.right = null;
    }
  }

  min() {
    // throw new NotImplementedError("Not implemented");
    let currNode = this.rootNode;
    while (true) {
      if (!currNode.left) {
        console.log(currNode.data);
        return currNode.data;
      }
      currNode = currNode.left;
    }
  }

  max() {
    // throw new NotImplementedError("Not implemented");
    let currNode = this.rootNode;
    while (true) {
      if (!currNode.right) {
        console.log(currNode.data);
        return currNode.data;
      }
      currNode = currNode.right;
    }
  }
}

const bt = new BinarySearchTree();
bt.add(2);
bt.add(7);
bt.add(1);
bt.add(8);
bt.add(4);
bt.add(32);
bt.add(12);
bt.add(54);
bt.min();
bt.max();
bt.remove(1);

module.exports = {
  BinarySearchTree,
};
