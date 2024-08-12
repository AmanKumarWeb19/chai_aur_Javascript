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

let intervalId;
function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

let start = document.getElementById("start");
start.addEventListener("click", startChangingColor);

let stops = document.getElementById("stop");
stops.addEventListener("click", stopChangingColor);
