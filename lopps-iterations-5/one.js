// for loop :-

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element === 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }

//............................................................................................................

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop Value ${i}`);

//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop Value ${j}`);
//   }
// }

//  print Table 1 to 10 :-

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop Value ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//............................................................................................................

// const myArray = ["Batman", "Flash", "SuperMan"];

// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }

//............................................................................................................

// .........................................Break And Continue:-..............................................

//     Break:----
//  for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of index is ${index}`);
}
