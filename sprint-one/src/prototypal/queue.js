var Queue = function() {
  var modify = Object.create(queueMethods);
  modify.storage = {};
  modify.sizeOf = 0;
  modify.firstKey = 0;
  modify.lastKey = 0;
  return modify;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  if(this.sizeOf === 0) {
      this.sizeOf++
      this.firstKey++;
      this.lastKey++;
      this.storage[this.firstKey] = value;
    }
    else {
      this.storage[this.lastKey+1] = value;
      this.sizeOf++;
      this.lastKey++;
    }
};

queueMethods.dequeue = function(){
  if (this.sizeOf > 1) {
    this.sizeOf--;
    var dequeued = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
    return dequeued;
  }
  else if (this.sizeOf === 1) {
    this.sizeOf--
    var dequeued = this.storage[this.lastKey];
    delete this.storage[this.lastKey];
    this.firstKey = 0;
    this.lastKey = 0;
    return dequeued;
  }
};

queueMethods.size = function(){
  return this.sizeOf;
};

queueMethods.log = function(key) {
  return this.storage[this[key]];
};