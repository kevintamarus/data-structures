var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.sizer = 0;
  extend(instance, stackMethods);
  return instance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};

stackMethods.push = function(value){
this.storage[this.sizer] = value;
this.sizer++;
};

stackMethods.pop = function(){
if(this.sizer > 0) {
    this.sizer--;
    var popped = this.storage[this.sizer];
    delete this.storage[this.sizer];
}
return popped;
};

stackMethods.size = function(){
return this.sizer;
};

stackMethods.log = function(key){
return this.storage[this[key]];
};