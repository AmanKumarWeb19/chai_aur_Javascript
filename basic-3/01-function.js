// .1. Function

function kuchBhi() {
  console.log("Aman");
  console.log("kumar");
}
// kuchBhi();

/** ******************************************************************************************************8 */

// function AddTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// let x = AddTwoNumbers(5, 10);
// console.log("Results:- ", x); // it will give you undefined

function AddTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

let x = AddTwoNumbers(4, 65);
// console.log("Results:- ", x);

/** **********************************************************************************************/

function UserLoginMessage(username) {
  return `${username} Just Logged in!!`;
}
let user = UserLoginMessage("Aman");
// console.log(user);

//..........................................................................................................

const userObj = {
  name: "Aman",
  price: 238,
};

function handleObject(anyObject) {
  console.log(
    `UserName is ${anyObject.name} and the price is ${anyObject.price}.`
  );
}
handleObject(userObj);
