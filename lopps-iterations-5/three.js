// for of :-

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const str = "hello code";

for (const greet of str) {
  //   console.log(greet);
}
/** ------------------------------------------------------------------------------------------------------ */

//--------------------------------------------Map-------------------------------------------------------

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObj = {
  game1: "NFS",
  game2: "MK",
};

// for (const [game, value] of myObj) {
//   console.log(game, ":-", value);
// }
