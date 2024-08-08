// if (2 === "2") {
//   console.log("executed");
// }

// if (2 !== 3) {
//   console.log("executed");
// }

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power:- ${power}`);
// }

//......................................................................................................

// short hand notation:-

// const balance = 1000;
// if (balance > 500) console.log("test");

// const balance = 1000;

// if (balance < 500) {
//   console.log("Less Than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }
//...........................................................................................................

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to Buy Courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged in");
}
