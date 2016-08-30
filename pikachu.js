
// https://community.topcoder.com/stat?c=problem_statement&pm=8152

function check(string) {
	var syllables = ['pi', 'ka', 'chu'];

  if (string.length === 0) return 'YES';

	for (var i = 0; i < syllables.length; i++) {
  	var syllable = syllables[i];
    if (string.indexOf(syllable) === 0) {
    	return check(string.substring(syllable.length));
    }
  }
  return 'NO';
}

console.log(check('pikapi') , 'YES');
console.log(check('pipikachu') , 'YES');
console.log(check('pikaqiu') , 'NO');
console.log(check('topcoder') , 'NO');
console.log(check('piika') , 'NO');
console.log(check('chupikachupipichu') , 'YES');
console.log(check('pikapipachu') , 'NO');
