const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift by apple",
};

for (const key in myObj) {
  //   console.log(`${key} is a shortcut for ${myObj[key]}.`
}

let myArr = ["js", "ruby", "python", "java", "c++"];

for (const key in myArr) {
  //   console.log(myArr[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

for (const key in map) {
  //   console.log(key);
}
