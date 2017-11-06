/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.floor(Math.random() * 10) + 1;
let randomInteger = Math.floor(randomNumber);

let  min = Math.ceil(1000000020);
//let  max = Math.floor(1000000001);

let randomUserID = Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
