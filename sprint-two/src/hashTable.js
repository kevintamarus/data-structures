var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined && this._storage.get(index).length > 0) {
    if (this._storage.get(index)[0][0] === k) {
      this._storage.set(index, [[k, v]]);
    } 
    else {
      var newPair = this._storage.get(index).concat([[k, v]]);
      this._storage.set(index, newPair);
    }
  } 
  else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
};

HashTable.prototype.remove = function(k) {
};