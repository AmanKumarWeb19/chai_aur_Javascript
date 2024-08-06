/**
 * premitive data Type:-
 * a. Number
 * b. String
 * c. Bolean
 * d. Null
 * e. undefined
 * f. Symbol
 * g. BigInt
 *
 * Non-Premitive DataType(Reference DataType):-
 *
 * a. Array
 * b. Object
 * c. Function
 *
 */

const id = "123";
const id2 = 123;
// console.log(id == id2);
// console.log(id === id2);

const x = Symbol("124");
const x2 = Symbol("124");
// console.log(x === x2);
// console.log(x == x2);

const bigNumber = 1234543214567532244n;

/** *************************** ***************  MEMORY  *********** *********************************************** */

/** two types of memory
 *
 * a. Stack (Primitive DataTypes)
 * a. Heap (Non-Primitive DataTypes)
 *
 */

let myYouTubeName = "Ak@mafia.com";
let anotherName = myYouTubeName;
anotherName = "chai aur code";

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
  email: "ak@gmail.com",
  upi: "78646453ybl",
};

let userTwo = userOne;

userTwo.email = "rohan@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
