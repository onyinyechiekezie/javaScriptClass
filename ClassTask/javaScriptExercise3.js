var prompt = require('prompt-sync')();
let number =prompt('Enter a number: ');
function reverse(number) {
	let reverseNumber = 0;
	for(count in number) {
		reverseNumber = reverseNumber * 10 + number % 10
		number = Math.floor(number/10);
	}
	return reverseNumber;
}
function isPalindrome(sameNumber){
	let reversedNumber = reverse(sameNumber);
	return sameNumber == reversedNumber;
	
}
console.log(reverse(number));
console.log(isPalindrome(number));


/*var prompt = require('prompt-sync')();
let number = prompt('Enter a number: ');

// Convert input to a number
number = parseInt(number);

function reverse(number) {
    let reverseNumber = 0;
    while (number > 0) {
        reverseNumber = reverseNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return reverseNumber;
}

function isPalindrome(originalNumber) {
    let reversedNumber = reverse(originalNumber);
    return originalNumber === reversedNumber;
}

console.log(reverse(number)); // To print the reversed number
console.log(isPalindrome(number)); // To check if the number is a palindrome*/
	