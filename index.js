function divideNumbers(secondNumber, firstNumber) {
	let answer = secondNumber / firstNumber;
	return answer;
}

function addTwoNumbers(firstNumber, secondNumber) {
	let answer = firstNumber + secondNumber;
	return answer;
}

function multiply(numberOne, numberTwo) {
	result = numberOne * numberTwo;
	return result;
}

//Using in-built function
/*const getOddNumbers =(arr)=> {
	let newArray = [];
	for(element of arr) {
		if(element % 2 != 0) {
			newArray.push(element);
		}
	}
	return newArray;
}*/
//Without using in-built function
const getOddNumbers =(arr)=> {
	let newArray = [];
	let count = 0;
	for(index in arr) {
		if(arr[index] % 2 != 0) {
			newArray[count++] = arr[index];
		}
	}
	return newArray;
}





module.exports = {multiply, addTwoNumbers, divideNumbers, getOddNumbers};