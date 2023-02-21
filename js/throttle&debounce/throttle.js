const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
  scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
}); // scroll, mousemove и тд. называются chatty events (болтливые события). подход, показаный выше, очень сильно будет нагружать DOM и браузер. Throttle и Debounce - это два похожих, но разных по поведению приёма, позволяющих контролировать сколько раз мы разрешаем выполнение функции с течением времени. Используем их реализацию из библиотеки lodash. (https://lodash.com/). Но чтобы ответ от библиотеки в зависимости от местоположения пользователя был в любом случае быстрым, используем CDN.  https://cdnjs.com/libraries/lodash.js. подключаем минифицированный файл библиотеки lodash в проект.

// Теперь мы можем получить доступ к библиотеке в нашем скрипте. При подключении библиотек через CDN, на объект window добавляется свойство в котором хранится то, что предоставляет библиотека. Имя этого свойства уникально для библиотеки и описано в её документации. Для Lodash это символ нижнего подчёркивания _. Для проверки используем метод add, который просто складывает два числа.

const add = _.add(2, 5);
console.log(add);

// throttle

// Прием throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени. То есть позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.

// используя throttle мы не контролируем как часто браузер будет генерировать события, а просто берем контроль над частотой выполнения функции.

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
};

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);

document.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("Scroll handler call every 300ms");
  }, 300)
);
