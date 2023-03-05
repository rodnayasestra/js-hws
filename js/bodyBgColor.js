const startBtnEl = document.querySelector(".js-start");
const stopBtnEl = document.querySelector(".js-stop");
let intervalId = null;
startBtnEl.addEventListener("click", styleBgColor);
stopBtnEl.addEventListener("click", stopColorizing);
stopBtnEl.setAttribute("disabled", "true");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function styleBgColor() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 2000);
  startBtnEl.setAttribute("disabled", "true");
  stopBtnEl.removeAttribute("disabled");
}
function stopColorizing() {
  clearInterval(intervalId);
  stopBtnEl.setAttribute("disabled", "true");
  startBtnEl.removeAttribute("disabled");
}
