let coding = ["js", "ruby", "python", "java", "c++"];

coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((item) => {
  //   console.log(item);
});

// coding.forEach((item) => console.log(item));

function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCodingArr = [
  {
    languageName: "JavaScript",
    languageFile: "Js",
  },
  {
    languageName: "Java",
    languageFile: "Java",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
];
myCodingArr.forEach((item, index) => {
  console.log(
    `at ${index} index item name is ${item.languageName} and file is ${item.languageFile}`
  );
});
