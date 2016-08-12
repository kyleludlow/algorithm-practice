var LinkedList = function() {
    this.length = 0;
    this.head = null;
};

LinkedList.prototype.insert = function(index, value) {
    if (index < 0 || index > this.length) {
        throw new Error('Index error');
    }

    var newNode = {
        value: value
    };

    if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
    }
    else {
        // Find the node which we want to insert after
        var node = this._find(index - 1);
        newNode.next = node.next;
        node.next = newNode;
    }

    this.length++;
};

LinkedList.prototype._find = function(index) {
    var node = this.head;
    for (var i=0; i<index; i++) {
        node = node.next;
    }
    return node;
};

LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    return this._find(index).value;
};

LinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    if (index == 0) {
        this.head = this.head.next;
    }
    else {
        // Find the node before the one we want to remove
        var node = this._find(index - 1);
        node.next = node.next.next;
    }

    this.length--;
};

var sll = new LinkedList();

sll.insert(0, 'a');
sll.insert(1, 'b');
sll.insert(2, 'c');
sll.insert(3, 'd');
sll.insert(4, 'e');
sll.insert(5, 'f');
sll.insert(6, 'g');
sll.insert(7, 'h');
sll.insert(8, 'i');


// 1. Find middle of single linked list

function findMiddle(list){

  // define and start slow and fast pointers
  var slowPointer = list.head;
  var fastPointer = list.head;

  // variable to turn off and on the incrementing of slowPointer
  var increment = false;

  // while node after fastPointer is not null
  while(fastPointer.next){

    // increment slow pointer only every other loop
    if(increment) slowPointer = slowPointer.next;

    // turn on or off slow pointer incrementing
    increment = !increment;

    // move fast pointer to next node every time until end of list
    fastPointer = fastPointer.next;
  }
  return slowPointer;
}


// console.log(sll);
// console.log(findMiddle(sll));


// 2. Find kth node from end


function findKthNode(list, k){
  var node = list.head,
      i = 1,
      kthNode;

  //handle, 0 or negative value of k
  if(k<=0) return;

   while(node){

     // if looking for last node, keep track right away
     if(i == k) kthNode = list.head;

     // else wait until k distance away from leading iteration
     else if(i - k > 0){
      kthNode = kthNode.next;
     }

     i++;

     // onto next node
     node = node.next;
   }
  return kthNode;
}

// console.log(findKthNode(sll, 1));


// 3. Reverse a linked list


// for single linked list
function reverseSingleList(sll) {

  //if there is no head node or second node
  if(!sll.head || !sll.head.next) return sll;

  //storing all the nodes in an array
  var nodes=[],
    current = sll.head;

  // iterates over list and pushes nodes to nodes array
  while(current){
    nodes.push(current);
    current = current.next;
  }

  // creates new list to be reverse
  var reversedLL = new LinkedList();

  // head equals last item in nodes array
  reversedLL.head = nodes.pop();
  current = reversedLL.head;

  var node = nodes.pop();

  while(node){
    // remove old next property from node
     node.next = null;
     current.next = node;

     // move to next node
     current = current.next;
     // next node to
     node = nodes.pop();
  }
  return reversedLL;
}


// console.log(reverseSingleList(sll));



// 4. Find whether a linked list has a cycle (i.e whether a node in the list has its next value
// pointing to an earlier node in the list.)

function doesListHaveCycle(list) {
  // create two pointers that increment and different speeds (tortoise and hare)
  // set them both to initially to list head
  var slowPointer = list.head,
      fastPointer = list.head;

  //while both pointers and the next node after the fast pointer are not null
  while(slowPointer && fastPointer && fastPointer.next){
    // increase slow pointer by one
    slowPointer = slowPointer.next;
    // increase fast pointer by two
    fastPointer = fastPointer.next.next;

    // if at any time they intersect there is a cycle
    if(slowPointer == fastPointer){
       return true;
    }
  }

  // else there is no cycle
  return false;
}






console.log(findKthNode(sll, 3));
