const userObj = {
  name: "Aman",
  price: 345,
  welcomeMessage: function () {
    console.log(`${this.name}, welcome to website `);
    console.log(this);
  },
};
// userObj.welcomeMessage();
// userObj.name = "rana";
// userObj.welcomeMessage();
// console.log(this);

// function chai() {
//   let userName = "aman";
//   console.log(this.userName);
// }
// chai();

// const chai = function () {
//   let userName = "aman";
//   console.log(this.userName);
// };
// chai();

// const chai = () => {
//   let userName = "aman";
//   console.log(this);
// };
// chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(4, 5));

const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(4, 5, 6));

// if you want to console object in arrow function then use () parenthesis to show object

const showObj = () => ({
  userName: "aman",
});
console.log(showObj());
