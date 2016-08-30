// https://community.topcoder.com/stat?c=problem_statement&pm=12479


function getLegend(cityMap, legend) {

  var characterCount = {};

  for (var i = 0; i < cityMap.length; i++) {

    var currentRow = cityMap[i];

  	for (var j = 0; j < currentRow.length; j++ ) {

      var currentCharacter = currentRow[j];

      if(currentCharacter === '.') continue;

      if (!characterCount[currentCharacter]) {
      	characterCount[currentCharacter] = 1;
      } else {
      	characterCount[currentCharacter]++;
      }
    }
  }

  var resultArray = [];
  var characters = Object.keys(characterCount);
  for (var k = 0; k < legend.length; k++){
  	var currentCount = legend[k];

    for ( var z = 0; z < characters.length; z++ ) {
    	var key = characters[z];

      if (characterCount[key] === currentCount) {
      	resultArray.push(key);
      }
    }
  }
  return resultArray.join('');
}


console.log(getLegend(["M....M",
 "...R.M",
 "R..R.R"], [3, 4]), "MR");
console.log(getLegend(["XXXXXXXZXYYY"], [1, 8, 3]), "ZXY");
console.log(getLegend(["...........",
 "...........",
 "...........",
 "..........T"], [1]) , "T");
console.log(getLegend(["AIAAARRI.......GOAI.",
 ".O..AIIGI.OAAAGI.A.I",
 ".A.IAAAARI..AI.AAGR.",
 "....IAI..AOIGA.GAIA.",
 "I.AIIIAG...GAR.IIAGA",
 "IA.AOA....I....I.GAA",
 "IOIGRAAAO.AI.AA.RAAA",
 "AI.AAA.AIR.AGRIAAG..",
 "AAAAIAAAI...AAG.RGRA",
 ".J.IA...G.A.AA.II.AA"], [16,7,1,35,11,66]) , "GOJIRA");
