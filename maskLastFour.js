// mask last four digits of credit card if more than 4 digits
function maskify(cc) {
  if ( cc.length < 4) {
    return cc;
  } else {
  var cardArray = cc.split('');
  var lastFourDigits = cardArray.splice(-4, cc.length -1 );

  for (var i = 0; i < cardArray.length; i++) {
  	lastFourDigits.unshift('#');
    }
  }
  return lastFourDigits.join('');
}


console.log(maskify('4556364607935616'));
