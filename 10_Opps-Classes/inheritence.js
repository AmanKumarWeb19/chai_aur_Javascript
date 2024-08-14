class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }

  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "12345");
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalachai");
masalaChai.logMe();
