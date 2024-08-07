// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123sdo";
tinderUser.name = "Wolvrine";
tinderUser.location = "U.S.A";

// console.log(tinderUser);

const regularUser = {
  email: "ak@gmai.com",
  fullName: {
    userFullName: {
      firstName: "Aman",
      lastName: "Kumar",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullName?.userFullName.firstName);
//////////////////////
// .................................................. merge two object ....................................

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "a",
  5: "b",
  6: "c",
};

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// output :- { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//.........................................................................................................\

const users = [
  {
    id: 1,
    email: "ak@gmail.com",
  },
  {
    id: 2,
    email: "mk@gmail.com",
  },
  {
    id: 3,
    email: "ssk@gmail.com",
  },
];

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("location"));
