// Array :-

// const myArray = [0, 1, 2, 3, 4, 5];

const myArray2 = ["hulk", "shaktiman", "Aman"];

const newArr = new Array(1, 2, 3, 4);

// console.log(newArr);

// Array methods:-

// 1. push

const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);

//........................................................................................................

// 2. pop
const arr2 = [1, 2, 3, 4, 5, 6];

arr2.pop();
// console.log(arr2);

//........................................................................................................

// 3.unshift

const arr3 = [1, 3, 4, 5, 6, 8, 9];
arr3.unshift(76);
// console.log(arr3);

//...........................................................................................................

// 4. shift

const arr4 = [1, 3, 4, 5, 6, 8, 9];
arr4.shift();
// console.log(arr4);

//........................................................................................................

// 5. includes

const arr5 = [1, 2, 3, 4, 5, 6];
// console.log(arr5.includes(12)); // it will give false value because 12 is not present in that array.

//........................................................................................................

// 6. indexOf()=>
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr6.indexOf(12)); // it will give -1 value because 12 is not present in that array.

//........................................................................................................

// 7. join()=>

const arr7 = [1, 2, 3, 4, 5, 6];
// console.log(arr7.join());

//........................................................................................................

// 8. Slice()=>

const myArray = [1, 2, 3, 4, 5, 6, 7, 0];
const nwAr1 = myArray.slice(2, 6);
// console.log(nwAr1);
// console.log(myArray);

// 9. Splice()=>

const fruits = ["apple", "banana", "litchi", "mango", "kiwi"];
console.log("A " + fruits);

let spliceArr = fruits.splice(1, 3, "orange");
console.log("B " + fruits);

console.log("splice :-" + spliceArr);
console.log("c " + fruits);
