
// 1. Check whether any permutation of a string is a palindrome.


function isPalindrome(string) {

  // create new hash set for unpaired characters
  var unpairedCharacters = new Set();


  for (var i = 0; i < string.length; i++){

    // set current character to variable and make lower case
    var char = string[i].toLowerCase();

    // if a character is in unpaire character hashset, remove it
    if (unpairedCharacters.has(char)) {

      unpairedCharacters.delete(char);

    // else add character to hash set
    } else {

      unpairedCharacters.add(char);

    }
  }

  // if there are 0 or 1 unpaired characters, return true, else false
  return unpairedCharacters.size <= 1;
}

console.log(isPalindrome('admam'));


// 2. group a list of words into anagrams.
// For example, if the input was
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be:
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

function listAnagrams(strs) {

  // creates an array for resulting arrays
  var result = [];

  // catch for empty or nonexistent array
  if(strs === null || strs.length === 0) return result;

  // creates hash map for storing each letter combination
  var map = {};
  for (var i = 0; i < strs.length; i++){

      // take string from array, break into array of letters
      var arr = strs[i].split('');

      // sort array of letters in alphabetical order
      arr.sort();

      // turn array of letters into string
      var sortedString = arr.join('');

      // if sortedString not in hash map
      if(map[sortedString] == null){

          // create array for all anagrams of sortedString
          // push sortedString to array and set hash key value
          // to array of anagrams
          var anagramArray = [];
          anagramArray.push(strs[i]);
          map[sortedString] = anagramArray;
      } else {
          // else push the current string to anagram array
          map[sortedString].push(strs[i]);
      }
  }

  // for each anagram array in map, push to result array
  for(var array in map){
    result.push(map[array]);
  }

  return result;
}

var anaWords = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

console.log(listAnagrams(anaWords));
