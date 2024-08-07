// 1. Concat()=>

const marvelHeroes = ["Thor", "Hulk", "IronMan"];
const DcHeroes = ["SuperMan", "BatMan", "Flash"];

// marvelHeroes.push(DcHeroes);
// console.log(marvelHeroes);

let allHeroes = marvelHeroes.concat(DcHeroes);
// console.log(allHeroes);
// output :- [ 'Thor', 'Hulk', 'IronMan', 'SuperMan', 'BatMan', 'Flash' ]

//...........................................................................................................

// Spread (...) =>

const all_new_heroes = [...marvelHeroes, ...DcHeroes];
// console.log(all_new_heroes);

//  Flat():-

const flatArr = [1, [2, [3, [4, [5]]]]];
let newFlatArr = flatArr.flat(2);
// console.log(newFlatArr); // [ 1, 2, 3, [ 4, [ 5 ] ] ]
// let newFlatArr = flatArr.flat(3);
// console.log(newFlatArr);  // [ 1, 2, 3, 4, [ 5 ] ]

// console.log(Array.isArray("Aman"));  //false
// console.log(Array.from("Aman"));     //[ 'A', 'm', 'a', 'n' ]
// console.log(Array.from({ name: "Aman" })); // []  // interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

// console.log(Array.of(score1, score2, score3));  //  [ 100, 200, 300 ]
