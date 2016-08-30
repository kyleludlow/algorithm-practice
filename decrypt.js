// https://community.topcoder.com/stat?c=problem_statement&pm=8152

function decrypt(legendArray, encryption) {

	var legendObject = {};

	for (var i = 0; i < legendArray.length; i++) {
  	var currentLegendItem = legendArray[i];
    var value = currentLegendItem[0];
    var key = currentLegendItem.substring(2);

    legendObject[key] = value;
  }

  var encryptionArray = encryption.split(' ');

	for (var j = 0; j < encryptionArray.length; j++ ) {
  	var currentEncryption = encryptionArray[j];
  	var characterReplacement = legendObject[currentEncryption];

    if (!characterReplacement) {

	    encryptionArray[j] = "?";
    } else {

  		encryptionArray[j] = characterReplacement;
    }
  }
	return encryptionArray.join("");
}

console.log(decrypt(["O ---",
 "S ..."], "... --- ..."), "SOS");
console.log(decrypt(["O ---"], "... --- ..."), "?O?");
console.log(decrypt(["H -",
 "E .",
 "L --",
 "L ..",
 "O -."], "- . -- .. -."), "HELLO");
console.log(decrypt(["H -.-.-.-.-.-.-.-.-.-.",
 "I .-.-.-.-.-.-.-.-.-.-",
 "K -.-.-.-.-.",
 "E .-.-.-.-.-"], "-.-.-.-.-.-.-.-.-.-. .-.-.-.-.-.-.-.-.-.-"), "HI");
console.log(decrypt(["O ---",
 "S ...",
 "B -...",
 "T -",
 "R .-.",
 "E .",
 "N -.",
 "X -..-",
 "D -.."], "-... --- ... - --- -. .-. . -.. ... --- -..-"), "BOSTONREDSOX");
console.log(decrypt(["B -...",
 "N -.",
 "H ....",
 "O --",
 "Z --..",
 "G ---",
 "I ..",
 "J .---"], "--- -- -... .- -. .- -. .-"), "GOB?N?N?");
 console.log(decrypt(["A --",
 "B -.",
 "N ...-",
 "I --..",
 "F -.-.-."], "-. -- -.-.-. -.-.-. --- --.. ...- .-..--."), "BAFF?IN?");
