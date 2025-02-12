// const isOdd = (number)=>{
//     let answer = number % 2 != 0;
//     return answer;
// }

//function getOddNumbers(array){
    //array.filter((number)=>)
    //return array.filter(isOdd);
//}

//Can also do this, still on oddNumbers
 function getOddNumbers(array){
     return array.filter((number)=> number % 2 != 0)
 };
// const isArrayMultipliedByFive = (number)=>{
//     let answer = number * 5;
//     return answer;
// }
// function getArrayMultipliedByFive(array){
//     array.filter((number)=>);
//     return array.filter(isArrayMultipliedNyFive)
// };

const getWordsGreaterThanFourLetters = (arrayOfWords) => {
    return arrayOfWords.filter((word) => word.length > 4);
}

// function getStudents(students){
//     return students.filter((student)=> student.age > 20)
// }

// function getScores(students){
//     return students.filter((student)=> student.scores >= 70)
// }

const getTestScores = (array)=>{
    let answer = array >= 70;
    return answer;
}

function getScores(students) {
    return students.filter(getTestScores)
}

function getAddScores(arr){
    let result = arr.map((scores) =>(scores + 5));
    return result;
}

module.exports = {getOddNumbers, getWordsGreaterThanFourLetters, getScores, getAddScores};
