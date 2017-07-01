//create object with the node as the key, this is paired with a nested object that will have sets that reference other links
//if we want to connect the link, we add sets to the nested object for each key
//if we want to remove the link, we need to remove all the links and also remove the current node

var Graph = function() {
  this.storage = {};
};

//complexity: O(1)
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};

//complexity: O(1)
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

//complexity: O(n)
Graph.prototype.removeNode = function(node) {
  for(var key in this.storage[node]) {
    delete this.storage[key][node];
  }
  delete this.storage[node];
};

//complexity: O(1)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.storage[fromNode][toNode]) {
  return true;
  }
  return false;
};

//complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = [toNode];
  this.storage[toNode][fromNode] = [fromNode]; 
};

//complexity: O(1)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

//complexity: O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

