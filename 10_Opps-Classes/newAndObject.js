// Objects --

function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

//...........................................................................................................

function createUser(userName, price) {
  this.userName = userName;
  this.price = price;
}

createUser.prototype.increment = function () {
  this.price++;
};
createUser.prototype.printMe = function () {
  console.log(`my name is ${this.userName}`);
};

const chai = new createUser("chai", 50);
const coffee = new createUser("coffee", 100);
chai.printMe();

coffee.increment();

console.log(coffee.price);
