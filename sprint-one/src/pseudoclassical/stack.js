var Stack = function() {
  this.storage = {};
  this.sizeOf = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.sizeOf] = value;
  this.sizeOf++;
};

Stack.prototype.pop = function(){
  if (this.sizeOf > 0) {
    this.sizeOf--;
    var popped = this.storage[this.sizeOf];
    delete this.storage[this.sizeOf];
  }
  return popped;
};

Stack.prototype.size = function(){
  return this.sizeOf;
};

Stack.prototype.log = function(key){
  return this.storage[this[key]];
};


