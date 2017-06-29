var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var modify = {
    storage : {},
    sizer : 0,
    firstKey : 0,
    lastKey : 0
  };
  _.extend(modify, queueMethods);
  return modify;
};

var queueMethods = {

  enqueue : function(value) {
    if(this.sizer === 0) {
      this.sizer++
      this.firstKey++;
      this.lastKey++;
      this.storage[this.firstKey] = value;
    }
    else {
      this.storage[this.lastKey+1] = value;
      this.sizer++;
      this.lastKey++;
    }
  }
  ,
  dequeue : function() {
    if (this.sizer > 1) {
      this.sizer--;
      var dequeued = this.storage[this.firstKey];
      delete this.storage[this.firstKey];
      this.firstKey++;
      return dequeued;
    }
    else if (this.sizer === 1) {
      this.sizer--
      var dequeued = this.storage[this.lastKey];
      delete this.storage[this.lastKey];
      this.firstKey = 0;
      this.lastKey = 0;
      return dequeued;
    }
  }
  ,
  size : function() {
    return this.sizer;
  }
};