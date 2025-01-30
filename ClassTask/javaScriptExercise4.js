var prompt = require('prompt-sync')();
let number =prompt('Enter a number: ');
function reverseInteger(number) {
	let reverseNumber = 0;
	for(count in number) {
		reverseNumber = reverseNumber * 10 + number % 10
		number = Math.floor(number/10);
	}
	return reverseNumber;
}
console.log("The reverse is" + " " + reverseInteger(number));

	