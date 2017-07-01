var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//complexity 0(1)
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

//complexity 0(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  } 
  else {
    return undefined;
  }
};

//complexity 0(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};