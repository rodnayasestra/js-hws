// метод setInterval позволяет нам вызывать функцию множество раз с определенным промежутком времени.
const startBtnEl = document.querySelector(".js-start");
const stopBtnEl = document.querySelector(".js-stop");
let timerId = null;

startBtnEl.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love Async JS ${Math.random()}`);
    console.log(timerId);
  }, 2000);
});
stopBtnEl.addEventListener("click", () => {
  clearInterval(timerId); // так же как и метод clearTimeOut удаляет повтор функции
  console.log(`Interval ${timerId} was stopped`);
});

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
