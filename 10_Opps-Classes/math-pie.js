const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const chai = {
  name: "ginger tea",
  price: 50,
  isAvailable: true,
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
