var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree,treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

//complexity: O(n)
treeMethods.addChild = function(value) {
	var child = Tree(value);
	this.children.push(child);
};

//complexity: O(n)
treeMethods.contains = function(target) {
	var result = false;
	var search = function(node){
		if(node.value === target){
			result = true;
			return result;
		}
    if (result === true) {
			return result;
		}
		var i = 0;
    while(node.children.length !== i) {
			search(node.children[i]);
      i++;
		}
	}
	search(this);
	return result;
};