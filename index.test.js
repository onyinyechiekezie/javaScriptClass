const multiply = require("./index.js")

test('multiply two numbers', ()=> {
	let numberOne = 2;
	let numberTwo = 6;  // Arrange
	let result = multiply(numberOne, numberTwo); // Act
	//expect(result).toBe(12); // Assert
	//for clean code, use this instead(below)
	let answer = 12;
	expect(result).toBe(answer); // Assert
});