function setUserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, pass) {
  setUserName.call(this, username);
  this.email = email;
  this.pass = pass;
}

let user = new createUser("aman", "ak@gmail.com", "12345");
console.log(user);
