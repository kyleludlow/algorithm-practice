// 1

function findMiddle(list) {
  var slow = list.head;
  var fast = list.head;

  var increment = false;

  while (fast.next){
    if (increment) slow = slow.next;

    increment = !increment;

    fast = fast.next;
  }
  return slow;
}


// 2

function findKthNode(list, k){
  var kthNode;

  var node = list.head;
  var counter = 1;

  if (k <= 0) return;

  while (node.next) {
    if (k === counter){
      kthNode = list.head;
    } else if (k - counter < 0){
      kthNode = kthNode.next;
    }

    counter++;

    node = node.next;
  }
  return kthNode;
}


// 3

function()
