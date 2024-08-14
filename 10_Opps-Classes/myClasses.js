// .......................... ........... ......ES6 ............... ...................... ...................

// class User {
//   constructor(username, email, pass) {
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
//   }
//   encryptPassword() {
//     return `${this.pass}abc`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("aman", "chai@hmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// Behind the Scene:-

function User(username, email, pass) {
  this.username = username;
  this.email = email;
  this.pass = pass;
}

User.prototype.encryptPassword = function () {
  return `${this.pass}abxc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@hmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
