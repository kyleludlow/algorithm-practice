// https://community.topcoder.com/stat?c=problem_statement&pm=13521


function toCamelCase(string) {

	var stringArray = string.split('_');

  for ( var i = 1; i < stringArray.length; i++) {
  	var currentWord = stringArray[i];

    var remainingLetters = currentWord.substring(1);

    stringArray[i] = currentWord[0].toUpperCase() + remainingLetters;
  }

	return stringArray.join('');
}


console.log(toCamelCase('sum_of_two_numbers'), 'sumOfTwoNumbers');
console.log(toCamelCase('variable'), 'variable');
console.log(toCamelCase('t_o_p_c_o_d_e_r'), 'tOPCODER');
console.log(toCamelCase('the_variable_name_can_be_very_long_like_this'), 'theVariableNameCanBeVeryLongLikeThis');
