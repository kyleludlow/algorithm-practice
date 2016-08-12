// Binary Search from Khan psuedocode

// 1. algo to find secret number between 1 and 100

function binarySearch(n, max, min) {
  var max = max;
  var min = min || 0;

  var guess = Math.floor((max - min) / 2);

  if (guess === n) {
    return 'number found';
  } else if (guess < n) {

    return binarySearch(n, max, guess + 1);
  } else if (guess > n){
    return binarySearch(n, guess - 1, min);
  }
}

// console.log(binarySearch(23, 100));

// 2. Find a number in a sorted array

// recursive
function binaryArraySearch(n, arr, max, min) {
  var max = max || (arr.length - 1);
  var min = min || 0;



  var guess = Math.floor((max + min) / 2);
  console.log(guess);
  // console.log(arr[12]);
  if (max <= min) {
    return - 1;
  }

  if (arr[guess] === n) {
    return 'number found';
  } else if (arr[guess] < n) {

    return binaryArraySearch(n, arr, max, (guess + 1));
  } else if (arr[guess] > n){
    return binaryArraySearch(n, arr, (guess - 1), min);
  }
};
var base = [1, 2];

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


console.log(binaryArraySearch(5, primes));


// while loop
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    while (max >= min){
    guess = Math.floor((max+min)/2);
    if (array[guess] === targetValue) {
        return 'doSearch worked';
    }
    else if (array[guess] < targetValue) {
        min = guess + 1;
    }
    else {
        max = guess -1;
    }
  }
	return -1;
};












function example(arr, target) {
  let max = arr.length - 1;
  let min = 0;

  let guess = Math.floor((max + min) / 2);

  while(max >= min){
    if(arr[guess] === target){
      return guess;
    }
    else if (arr[guess] < target){
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}







// var result = doSearch(primes, 73);
// println("Found prime at index " + result);
