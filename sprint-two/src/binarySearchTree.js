var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var isLeftEmpty = (this.left === null);
  var isRightEmpty = (this.right === null);
  if(value < this.value) {
    //edge case
    if(!isLeftEmpty) {
      this.left.insert(value);
    }
    //base case
    else {
      this.left = BinarySearchTree(value);
    }
  }
  else {
    if(!isRightEmpty) {
      this.right.insert(value);
    }
    else {
      this.right = BinarySearchTree(value);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */