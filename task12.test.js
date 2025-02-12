const {increaseArrayByOne} = require("./task12");

test("add to the element by one", () =>{
    let array = [3, 4, 2];
    let result = increaseArrayByOne(array);
    let answer = [3, 4, 3];
    expect(result).toEqual(answer);
})