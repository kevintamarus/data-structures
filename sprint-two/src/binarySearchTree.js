var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.logArray = [];
  return binaryTree;
};

//complexity: O(log)
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
  this.logArray.push(value);
};

//complexity: O(log)
BinarySearchTree.prototype.contains = function(value) {
  var isLeftEmpty = (this.left === null);
  var isRightEmpty = (this.right === null);
  //base case
  if(value === this.value) {
    return true;
  } 
  //edge cases
  if (value < this.value && !isLeftEmpty) {
    return this.left.contains(value);
  }
  if (value > this.value && !isRightEmpty) {
    return this.right.contains(value);
  }
  if (value !== this.value && isLeftEmpty && isRightEmpty) {
    return false;
  }
};

//complexity: O(log)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};