var Queue = function() {
  this.storage = {};
  this.sizeOf = 0;
  this.firstKey = 0;
  this.lastKey = 0;
};

Queue.prototype.enqueue = function(value){
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

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.sizeOf;
};