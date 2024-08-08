// const myNumber = [1, 2, 3];

// const Total = myNumber.reduce(function (acc, currVal) {
//   console.log(`acc:- ${acc} curValue:- ${currVal}`);

//   return acc + currVal;
// }, 0);

// with Arrow Function:-

// const myNumber = [1, 2, 3];

// const Total = myNumber.reduce((acc, curValue) => acc + curValue, 0);

// console.log(Total);

const shoppingCart = [
  {
    itemName: "Js",
    price: 299,
  },
  {
    itemName: "Python",
    price: 399,
  },
  {
    itemName: "Java",
    price: 499,
  },
  {
    itemName: "Ruby",
    price: 199,
  },
];

const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(Total);
