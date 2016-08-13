var BinarySearchTree = function(key, value, parent) {
    this.key = key || null;
    this.value = value || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype.insert = function(key, value) {
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }
    else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        else {
            this.left.insert(key, value);
        }
    }
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
};

BinarySearchTree.prototype.get = function(key) {
    if (this.key == key) {
        return this.value;
    }
    else if (key < this.key && this.left) {
        return this.left.get(key);
    }
    else if (key > this.key && this.right) {
        return this.right.get(key);
    }
    else {
        throw new Error('Key Error');
    }
};

BinarySearchTree.prototype.remove = function(key) {
    if (this.key == key) {
        if (this.left && this.right) {
            var successor = this.right._findMin();
            this.key = successor.key;
            this.value = successor.value;
            successor.remove(successor.key);
        }
        else if (this.left) {
            this._replaceWith(this.left);
        }
        else if (this.right) {
            this._replaceWith(this.right);
        }
        else {
            this._replaceWith(null);
        }
    }
    else if (key < this.key && this.left) {
        this.left.remove(key);
    }
    else if (key > this.key && this.right) {
        this.right.remove(key);
    }
    else {
        throw new Error('Key Error');
    }
};

BinarySearchTree.prototype._replaceWith = function(node) {
    if (this.parent) {
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this == this.parent.right) {
            this.parent.right = node;
        }

        if (node) {
            node.parent = this.parent;
        }
    }
    else {
        if (node) {
            this.key = node.key;
            this.value = node.value;
            this.left = node.left;
            this.right = node.right;
        }
        else {
            this.key = null;
            this.value = null;
            this.left = null;
            this.right = null;
        }
    }
};

BinarySearchTree.prototype._findMin = function() {
    if (!this.left) {
        return this;
    }
    return this.left._findMin();
};


function createData(...data) {
  var result = []
  data.forEach(x => {
    let hash = null;
    x = x.toString();
    for (let i = 0; i < x.length; i++) {
      hash += x.charCodeAt(i);
    }
    let output = {
      key: hash,
      value: x
    }
    result.push(output);
  })
  return result;
}

const data = createData("Harry","Ron","Hermione","Snape","Dumbledore", "Fred", "George", "Ginny", "Malfoy", "Voldemort", "Nevil");

var Tree = new BinarySearchTree(data[0].key, data[0].value);

data.forEach(block => {
  if (block !== data[0]) {
    Tree.insert(block.key, block.value);
  }
});

// console.log(Tree);


// 1. check whether an arbitrary tree is a binary search tree

// stores last node checked
// var lastPrinted = null;
//
// function checkBST(node) {
//
//   if (node === null) return true;
//
//   // check recursive left
//   if (!checkBST(node.left)) return false;
//
//   // check current
//   if (lastPrinted !== null && node.key <= lastPrinted) {
//     return false;
//   }
//
//   // assign current to lastPrinted
//   lastPrinted = node.key;
//
//   // check recursive right
//   if (!checkBST(node.right)) return false;
//
//   return true;
// }


// or

function isBST(root, lowerBound, upperBound) {
  lowerBound = lowerBound || -Infinity;
  upperBound = upperBound ||  Infinity;

  if (!root) return true;

  if (root.value > upperBound || root.value < lowerBound) {
      return false;
  }

  return isBST(root.left, lowerBound, root.value) &&
         isBST(root.right, root.value, upperBound);

}


console.log(isBST(Tree));

// 2. find the height of a binary search tree


function findHeight(node) {
  // if no nodes after root, return -1 because
  // one is added later
  if (node === null) {
      return -1;
  }

  // recursive left
  leftHeight = findHeight(node.left);

  // recursive right
  rightHeight = findHeight(node.right);


  if (leftHeight > rightHeight) {
      return leftHeight + 1;
  } else {
      return rightHeight + 1;
  }
}

console.log('height    ', findHeight(Tree));

// 3. find the third largest value in a binary search tree

function kthlargest(node, k) {

	if (node === null) return null;

	else {
    // recursive right for largest probable values
    var result = kthlargest(node.right, k);

    if (result)	return result;

    k--;

    if (k === 0)return node;

    // recursive left for left branches of right nodes
    return kthlargest(node.left, k);
	}
}


function kthLargest(node, k, counter = 0) {
  if (node.right){
    kthLargest(node.right, k, counter);
  }

  counter += 1;

  if (counter === k) {
    return node;
  }

  if (node.left) {
    kthLargest(node.left, k, counter);
  }
}

console.log(kthlargest(Tree, 3));
