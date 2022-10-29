// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
	binary8bitStr += str[i];
	count++;

	if (count % 8 === 0) {
	  if (!str[i + 1]) break;
	  binary8bitStr += ',';
	}
  }

  return binary8bitStr.split(','); // [ '01100001', '01100010', '01100011' ]
};

const binaryToAscii = str => {

	let result = '';
	let array = binaryStringToArray(str);
	for (let element of array) {
		let decimal = parseInt(element, 2);
		// console.log(decimal)
		let letter = String.fromCharCode(decimal);
		// console.log(letter) // abc
		result += letter;
	}
	return result;
};

/******************************************************************************/

// console.log(binaryStringToArray('011000010110001001100011'))

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
