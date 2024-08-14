class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const aman = new User("Aman");
// console.log(aman.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("adi", "adi@gmail.com");
iphone.logMe();
console.log(iphone.createId());
