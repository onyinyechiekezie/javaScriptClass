var prompt = require('prompt-sync')();
let number =prompt('Enter a number: ')

function sumDigits(number) {
	let sum = 0
		while(number > 0) {
		let remainder = number % 10
		sum = sum + remainder 
		number = Math.floor(number / 10)
		//Using Math.floor to return an int, changing "//" to "/"//
	}
	return sum
}
console.log(sumDigits(number));
	
		





	
