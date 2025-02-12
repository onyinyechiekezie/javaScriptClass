const {multiply, addTwoNumbers, divideNumbers, getOddNumbers} = require("./index.js")

test('multiply two numbers', ()=> {
	let numberOne = 2;
	let numberTwo = 6;  // Arrange
	let result = multiply(numberOne, numberTwo); // Act
	//expect(result).toBe(12); // Assert
	//for clean code, use this instead(below)
	let answer = 12;
	expect(result).toBe(answer); // Assert
});

test("add two numbers", ()=> {
	let numberOne = 2;
	let numberTwo = 6;  // Arrange
	let sum = addTwoNumbers(numberOne, numberTwo);
	let answer = 8;
	expect(sum).toBe(answer);

});

test("divide two numbers", ()=> {
	let numberOne = 2;
	let numberTwo = 6;  // Arrange
	let division = divideNumbers(numberTwo, numberOne);
	let answer = 3;
	expect(division).toBe(answer);

});

test("return odd numbers", ()=> {
	let arrayOfNumbers = [1,2,3,4,8,5];
	let result = getOddNumbers(arrayOfNumbers);
	let answer = [1,3,5];
	expect(result).toEqual(answer);
});

