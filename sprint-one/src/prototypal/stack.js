var Stack = function() {
  var modify = Object.create(stackMethods);
  modify.storage = {};
  modify.sizeOf = 0;

  return modify;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeOf] = value;
  this.sizeOf++;
};

stackMethods.pop = function() {
  if (this.sizeOf > 0) {
    this.sizeOf--;
    var popped = this.storage[this.sizeOf];
    delete this.storage[this.sizeOf];
  }
  return popped;
};

stackMethods.size = function() {
  return this.sizeOf;
};