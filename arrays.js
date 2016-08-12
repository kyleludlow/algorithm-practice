// 1. remove all values less than 5 from array

function removeLessThanK(array, k) {

  var newArray = [];

  for (i = 0; i < array.length; i++) {
    var number = array[i];
    if (number >= k ) {
      newArray.push(number);
    }
  }
  return newArray;
}

var karr = [ 2, 9, 5, 6, 1, 3, 3, 4, 5, 6, 7, 8 ];


console.log(removeLessThanK(karr, 5));

// 2. merge two sorted arrays

function mergeArrays(firstArray, secondArray) {

  // set up our mergedArray
  var mergedArray = [];

  // set all current array indexes to 0
  firstArrayIndex = 0;
  secondArrayIndex = 0;
  mergedArrayIndex = 0;

  // while the current merged index is less than the length of both arrays combined
  while (mergedArrayIndex < (firstArray.length + secondArray.length)) {

    // arrays exhausted when their current index is equal to their length or greater
    firstArrayExhausted = firstArrayIndex >= firstArray.length;
    secondArrayExhausted = secondArrayIndex >= secondArray.length;

    // if first array is not exhausted AND
    // 1. second array is exhausted OR
    // 2. current index of first array is less than current index of second array
    if (!firstArrayExhausted && (secondArrayExhausted || (firstArray[firstArrayIndex] < secondArray[secondArrayIndex]))) {

      mergedArray[mergedArrayIndex] = firstArray[firstArrayIndex];

      firstArrayIndex++;
    } else {
      mergedArray[mergedArrayIndex] = secondArray[secondArrayIndex];

      secondArrayIndex++;
    }
    mergedArrayIndex++;

  }
  return mergedArray;
}

var arr1 = [0, 6, 9, 10, 20];
var arr2 = [3, 4, 12, 15, 23];

// console.log(mergeArrays(arr1, arr2));



// 3. Get the product of all integers in array aside from index


function getProductsOfAllIntsExceptAtIndex(intArray) {

  // create new array for products
  var productsOfAllIntsExceptAtIndex = [];

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  var productSoFar = 1;
  for (var i = 0; i < intArray.length; i++) {
      productsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar *= intArray[i];
  }

  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (var j = intArray.length - 1; j >= 0; j--) {
      productsOfAllIntsExceptAtIndex[j] *= productSoFar;
      productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}
var productArray = [5 , 2, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(productArray));
