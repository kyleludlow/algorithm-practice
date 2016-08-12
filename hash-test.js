function isPalindrome(string) {

  var unpairedCharacters = new Set();

  for (i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();

    if(unpairedCharacters.has(char)) {

      unpairedCharacters.delete(char);
    } else {

      unpairedCharacters.add(char);
    }

  }
  return unpairedCharacters.size <= 1;
}

console.log(isPalindrome('maaM'));
