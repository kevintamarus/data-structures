var Queue = function() {
  var someInstance = {};
  var size = 0;
  var firstKey = 0;
  var lastKey = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if(size === 0) {
      size++;
      firstKey++;
      lastKey++;
      storage[firstKey] = value;
    }
    else {
      storage[lastKey+1] = value;
      size++;
      lastKey++;
    }
  };

  someInstance.dequeue = function() {
    if (size > 1) {
      size--;
      var dequeued = storage[firstKey];
      delete storage[firstKey];
      firstKey++;
      return dequeued;
    }
    else if (size === 1) {
      size--;
      var dequeued = storage[lastKey];
      delete storage[lastKey];
      firstKey = 0;
      lastKey = 0;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return size;
  };
  
  someInstance.log = function(key) {
    return storage[key];
  };

  return someInstance;
};

var random = Queue();


