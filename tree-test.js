function isBST(root) {

  var lowerBound = lowerBound || -Infinity;
  var upperBound = upperBound || Infinity;

  if (root === null) return true;


  return isBST(root.left, root.value, upperBound) &&
    isBST(root.right, lowerBound, root.value);
}


function findHeight(root) {

  if (root === null) return -1;

  var leftHeight = findHeight(root.left);
  var rightHeight = findHeight(root.right);

  if (leftHeight > rightHeight) {
    return leftHeight + 1;
  } else {
    return rightHEight + 1;
  }
}


function findKthLargest(root, k) {

  if (root === null) return null;

  var result = findKthLargest(root.right, k);

  if (result) return result;

  k--;

  if (k===0) return root;

  return findKthLargest(root.left, k);
}
