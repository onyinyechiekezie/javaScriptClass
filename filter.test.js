const { getOddNumbers, getWordsGreaterThanFourLetters,getScores, getAddScores} = require("./filter");

beforeEach(() =>(
    numbers = [2,3,4,5,6,7,9] 
));


test("return odd Numbers",  () =>{
    let result = getOddNumbers(numbers)
    let answer = [3,5,7,9]
    expect(result).toEqual(answer);
})

// test("return array multiplied by five", () =>{
//     let result = getArrayMultipliedByFive(numbers)
//     let answer = [10,15,20,25,30,35,45];
//     expect(result).toEqual(answer);
// })

test("return words with the length greater than four", ()=>{
    let words = ["hello", "world", "javascript", "java", "egg"]
    let result = getWordsGreaterThanFourLetters(words)
    let answer = ["hello", "world", "javascript"];
    expect (result).toEqual(answer);
})

// test("Return objects with age greater than 20",()=>{
//     const students = [
//         {name: "John", age: 20},
//         {name: "Jane", age: 21},
//         {name: "Alice", age: 19},
//         {name: "Bob", age: 22},
//     ];
//     let result = getStudents(students);
//     let answer = [{name: "Bob", age: 22}, {name: "Jane", age: 21}]
//     expect(result).toStrictEqual(answer);

// })

test("Return scores greater than or equal to 70", ()=>{
    const students = [23,73,52,21,80,76,20,89,33,53];
    let result = getScores(students);
    let answer = [73,80,76,89]
    expect(result).toEqual(answer);
})

test("Add five point to each score", ()=>{
    let scores = [85, 92, 78, 88, 95]
    let result = getAddScores(scores)
    let answer = [90, 97, 83, 93, 100]
    expect(result).toEqual(answer);
})

// test("Return afternoon classes", ()=>{
//     const classTimings = [

//     ]
// })
