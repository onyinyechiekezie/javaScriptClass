//const array = [1, "egg", {firstName, lastName}, null, []]; //LITERAL METHOD

//const arrayOfNumbers = new Array(); // ARRAY CONSTRUCTOR
// push and pop
// arrayOfNumbers[0] = 20;
// arrayOfNumbers[1] = 2;
// arrayOfNumbers.push(1);
// arrayOfNumbers.push(3);
// arrayOfNumbers.push(4);

// console.log(arrayOfNumbers)

// let pop = arrayOfNumbers.pop()

// console.log(pop)
// console.log(arrayOfNumbers)  

// Shift and unshift
// arrayOfNumbers[0] = 20;
// arrayOfNumbers[1] = 2;
// arrayOfNumbers.unshift(1);
// arrayOfNumbers.unshift(3);
// arrayOfNumbers.unshift(4);

// console.log(arrayOfNumbers);

// let shift = arrayOfNumbers.shift();

// console.log(shift);
// console.log(arrayOfNumbers);

//console.log(arrayOfNumbers);

// let firstName = "Chinedu";

// let newArray = Array.from(firstName);
// console.log(newArray);

// Slice and splice
 let animals = ["dog", "chicks", "goat", "fish", "rat", "sheep"];
// console.log(animals.slice(2))
// console.log(animals.slice(1,4))

let answer = animals.splice(2,3)
console.log(answer)
console.log(animals)