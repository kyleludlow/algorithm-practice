// 1. does string have all unique characters?
// ASK IF ASCII OR UNICODE. 256 FOR EXTENDED ASCII. 128-CHARACTER ALPHABET

// O(n) time complexity where n is string, O(1) space complexity because only 128 character set
function isUniqueCharacters(str) {
  // if more than 128, none can be unique. That's max amount of characters
  if (str.length > 128) {
    return false;
  }

  var char_set = [];
  for (var i = 0; i < str.length; i++){
    var value = str.charAt(i);
    if (char_set[value]) {
      // it's already been found
      return false;
    }
    char_set[value] = true;
  }
  return true;
}

var uniqueString = "Pachelo";
var notUniqueString = "cool";

console.log(isUniqueCharacters(uniqueString));
console.log(isUniqueCharacters(notUniqueString));


// 2. Given two strings, write a method to decide if one is a permutation of the other
// Is it case sensive? Is whitespace significant? Below algorithm assumes both.
// strings of different length cannot be permutation of the other

// Clean but not as efficient as possible. Still good. #1 choice if no more efficiency needed

function sortPerms(str) {
  // splits strings into by letter into an array
  var content = str.split('');
  // sorts alphabetically
  content.sort();

// creates new string from array
  return content.join();
};

function isPerm(str1, str2) {
  if (str1.length != str2.length){
    return false;
  }
  return sortPerms(str1) === sortPerms(str2);
};


// more efficient approach. Not entirely from Cracking. Always ask.
// Permutations will always have the same character count

function isPerm2(str1, str2){
  if (str1.length !== str2.length){
    return false;
  }

  var letters = {}
  var length = str1.length;

  for (var i = 0; i < length; i++) {
    var char = str1.charAt(i);
    // if not a number yet, count = 1, else count + 1
    letters[char] = (isNaN(letters[char]) ? 1 : letters[char] + 1);
  }

  for (var k = 0; k < length; k++){
    var char = str2.charAt(k);

    letters[char] --;
  }
  console.log(letters);
  for (var z in letters){
    // if less or more not a perm
    if(letters[z] !== 0) {
      return false;
    }
  }
  return true;
}


var permString1 = 'foobar';
var permString2 = 'boofar';
var notPerm = 'boofab';

console.log(isPerm(permString1, permString2));
console.log(isPerm(permString1, notPerm));
console.log(isPerm2(permString1, permString2));
console.log(isPerm2(permString1, notPerm));
