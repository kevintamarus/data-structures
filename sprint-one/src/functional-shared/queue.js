var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.sizer = 0;
  instance.firstKey = 0;
  instance.lastKey = 0;
  extend(instance, queueMethods);
  return instance;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if(this.sizer === 0) {
    this.sizer++;
    this.firstKey++;
    this.lastKey++;
    this.storage[this.firstKey] = value;
  }
  else {
    this.storage[this.lastKey+1] = value;
    this.sizer++;
    this.lastKey++;
  }
};
  
queueMethods.dequeue = function() {
  if (this.sizer > 1) {
    this.sizer--;
    var dequeued = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
    return dequeued;
  }
  else if (this.sizer === 1) {
    this.sizer--;
    var dequeued = this.storage[this.lastKey];
    delete this.storage[this.lastKey];
    this.firstKey = 0;
    this.lastKey = 0;
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.sizer;
};
