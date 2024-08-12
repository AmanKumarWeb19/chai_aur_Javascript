// generate random color:-

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//...........................................start reference ...............................................

const startChangingColor = function () {};
const stopChangingColor = function () {};

let start = document.getElementById("start");
start.addEventListener("click", startChangingColor);

let stop = document.getElementById("stop");
start.addEventListener("click", stopChangingColor);
