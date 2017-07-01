var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

//complexity: O(1)
  list.addToTail = function(value) {
    var node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  };

//complexity: O(1)
  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

//complexity: O(n)
  list.contains = function(target) {
    var result = false;
    var node = this.head;
    while (node) {
      if (node.value === target) {
        result = true;
      }
      node = node.next;
    }
    return result;
  };
//fun function for an extra test
//complexity: 0(n)
  list.order = function(element) {
    var node = this.head;
    var count = 0;
    var button = 'on';
    while (button = 'on') {
      count++;
      if (node.value === element) {
        button = 'off';
        return count;
      }
      node = node.next;
    }
  }
  
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};