// Object Literals:-

const mySym = Symbol("key1");

const JsUser = {
  name: "Aman",
  "full name": "Aman",
  [mySym]: "myKey1",
  age: 18,
  location: "Patna",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesday"],
};

// console.log(JsUser.name);
// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.name = "Hanuman ji";
// console.log(JsUser.name);

// Object.freeze(JsUser);
JsUser.name = "shaktiman";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js");
};

JsUser.greetTwo = function () {
  console.log(`Hello JsUser! My Name is ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetTwo());
