//for(let index = 0; index <= 3; index++);
	var prompt = require('prompt-sync')();
	let num1 =prompt("Enter number: ");
	let num2 =prompt("Enter number: ");
	let num3 =prompt("Enter number: "); 
function displaySortedValues(num1, num2, num3) {
	let numbers = [num1, num2, num3];
	numbers.sort((a, b) => a - b); // Sorting in ascending order
    console.log(numbers);
}

displaySortedValues(num1, num2, num3);



