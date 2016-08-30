// 1. The share price for a company over a week's trading is as follows:
// [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company
//  on one day, and sell the shares on one of the following days, write an
//  algorithm to work out what the maximum profit you could make would be.


// BRUTE FORCE O(n^2)
// function findMaxProfit(stockArray) {
//
//   var maxProfit = 0;
//
//   // go through every price and time
//   for ( var earlierTime = 0; earlierTime < stockArray.length; earlierTime++ ){
//
//     var earlierPrice = stockArray[earlierTime];
//
//     // then go through all prices after buy time
//     for (var laterTime = earlierTime + 1; laterTime < stockArray.length; laterTime++ ) {
//
//       // use those times to find earlier and later prices
//       var laterPrice = stockArray[laterTime];
//
//
//       var potentialProfit = laterPrice - earlierPrice;
//
//       // update maxProfit if best profit yet
//       maxProfit = Math.max(maxProfit, potentialProfit);
//
//     }
//   }
//     return maxProfit;
// }

// greedy approach O(n)

function findMaxProfit(stockArray) {

  if (stockArray.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // greedily update minPrice and maxProfit
  // initialize them to first price and first possible profit
  var minPrice = stockArray[0];
  var maxProfit = stockArray[1] - stockArray[0];


  // start at second index because we need to buy first
  for ( var i = 1; i < stockArray.length; i++ ){

    var currentPrice = stockArray[i];


    // profit at current sell price
    var potentialProfit = currentPrice - minPrice;


    // update maxProfit if best profit yet
    maxProfit = Math.max(maxProfit, potentialProfit);


    // sets min price to lowest price seen so far
    minPrice = Math.min(minPrice, currentPrice);

  }
    return maxProfit;
}

var stockPrices = [128, 97, 121, 123, 98, 97, 105];

// console.log(findMaxProfit(stockPrices));

// 2. Imagine that you wanted to find what the highest floor of a 100
// story building you could drop an egg was, without the egg breaking.
// But you only have two eggs. Write an algorithm to work out which
// floors you should drop the eggs from to find this out in the most
// efficient way.


function findHighestFloor(floor, n = 14, counter = 1, previous = 1, guess = 15) {
  // console.log(counter);
  // console.log('N', n);
  if (n === floor) {
    return counter;
  }
  else if (n > floor) {
    console.log('PREVIOUS', previous, 'N', n, 'COUNTER', counter);
    for (var i = previous; i < n; i++) {
      // console.log(counter);
      if (i === floor) {
        return counter;
      } else {
        counter++;
      }
    }
  }
  else {
    previous = n;
    guess--;
    n = n + guess;
    return findHighestFloor(floor, n, counter += 1, previous, guess );
  }
}


console.log(findHighestFloor(91));
