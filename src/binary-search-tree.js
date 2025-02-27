const { NotImplementedError } = require('../extensions/index.js');
/*class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}*/
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

 /* root() {
      this.root = null;*/

  add(data) {
    this.root = addWithin (this.root, data);

    function addWithin (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
    }
    return node;
    }}

  has(data) {
    return seachWithin(this.root, data);
    function seachWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return (data < node.data) ?
        seachWithin(node.left, data):
        seachWithin(node.right, data);
    } 
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.root = removeNode (this.root, data);
function removeNode(node, data){
  if (!node) {
    return null;
  }
  if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      node = node.right;
      return node;
    }
    if (!node.right) {
      node = node.left;
      return node;
    } 
let minFromRight = node.right;
while (minFromRight.left) {
  minFromRight = minFromRight.left;
}
node.data = minFromRight.data;
node.right = removeNode(node.right,minFromRight.data);
return node;
  }
}
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};