// .......................... ........... ......ES6 ............... ...................... ...................

class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }
  encryptPassword() {
    return `${this.pass}abc`;
  }
}

const chai = new User("aman", "chai@hmail.com", "123");
console.log(chai.encryptPassword());
