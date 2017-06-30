var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

//complexity: O(1)
setPrototype.add = function(item) {
  if(!this[item]) {
    this[item] = item;
  }
};

//complexity: O(1)
setPrototype.contains = function(item) {
  if(this[item]) {
    return true;
  }
  return false;
};

//complexity: O(1)
setPrototype.remove = function(item) {
  var removed = this[item];
  delete this[item];
  return removed;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
