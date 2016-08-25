// 1. Use recursion to log a fibonacci sequence of n length.

function findFibonacciSequence(n) {

  // if n = 1, we know the sequence is 0, 1
  if (n===1) {
    return [0, 1];
  } else {
    var s = findFibonacciSequence(n - 1);

    s.push(s[s.length -1] + s[s.length - 2]);

    return s;
  }
}

console.log(findFibonacciSequence(8));
