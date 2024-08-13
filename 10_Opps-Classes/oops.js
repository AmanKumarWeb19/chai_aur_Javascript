//  JavaScript and Classes:-
/**
 * OPPs:-
 *
 * Object:-
 * -- collection of properties and method.
 * -- toLowerCase
 *
 *
 * parts of Opps:-
 * - object Literal.
 *
 * - constructor function
 * - protoTypes
 * - classes
 * - Instance(new,this)
 *
 * -- 4 Pillars:-
 * . Abstraction
 * . Encapsulation
 * . Inheritence
 * . Polymerphism
 */

// Object Literal:--

const user = {
  userName: "Aman",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("got user details");
  },
};
// console.log(user.userName);
// console.log(user.getUserDetails());

//............................................................................................................

// Constructor Function:-

function userDetails(name, age, isLoggedIn) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greet = function () {
    console.log(`walcome ${this.name}`);
  };
  return this;
}

const userOne = new userDetails("Raka", 45, true);
const userTwo = new userDetails("shakshi", 45, true);

console.log(userOne);
console.log(userTwo);
