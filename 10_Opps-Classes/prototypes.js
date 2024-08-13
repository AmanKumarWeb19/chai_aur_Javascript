// let myName = "Aman   ";
// let myChannel = "chai    ";
// console.log(myName.trim().length);

let myHeros = ["thor", "hulk"];

let heroPower = {
  thor: "hammer",
  hulk: "muscle",

  getThorPower: function () {
    // console.log(`Thor Power is ${this.thor}`);
  },
};

Object.prototype.aman = function () {
  console.log(`aman method is present in every where`);
};

Array.prototype.heyAman = function () {
  console.log(`Aman method power circulate through Array`);
};

// myHeros.aman();
// heroPower.aman();
// myHeros.heyAman();
// heroPower.heyAman();

// Inheritence : -

const user = {
  name: "chai",
  email: "chail@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: TeacherSupport,
};

Teacher.__proto__ = user;

//Modern syntax:-

Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUserName = "kalicharan      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true Length of string is ${this.trim().length}`);
};

anotherUserName.trueLength();
"Aman".trueLength();
"Miammi".trueLength();
