function mergeArrays(firstArray, secondArray) {

  var mergedArray = [];

  firstArrayIndex = 0;
  secondArrayIndex = 0;
  mergedArrayIndex = 0;

  while (mergedArrayIndex < (firstArray.length + secondArray.length)) {

    firstArrayExhausted = firstArrayIndex >= firstArray.length;
    secondArrayExhausted = secondArrayIndex >= secondArray.length;

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

console.log(mergeArrays(arr1, arr2));
