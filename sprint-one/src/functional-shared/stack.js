var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var modify = {
    storage : {},
    sizer : 0
  };
  _.extend(modify, stackMethods);
  return modify;
};

var stackMethods = {

  push : function(value){
    this.storage[this.sizer] = value;
    this.sizer++;
  }
  ,
  pop : function(){
    if(this.sizer > 0) {
      this.sizer--;
      var popped = this.storage[this.sizer];
      delete this.storage[this.sizer];
    }
    return popped;
  }
  ,
  size : function(){
    return this.sizer;
  }
};