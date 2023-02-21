// главное отличие debounce от throttling заключается в том, что второй, ограничивает выполнение функции за опеределенный промежуток времени.  А debounce ограничивает выполнение функции, пока не будет сделана пауза в N милисекунд.

// Например, пока пользователь скролит страницу функция не вызовется, но как только он перестал скролить, функция будет вызвана через 300 миллисекунд. Если скролл возобновится раньше чем через 300 миллисекунд после паузы, функция не вызовется.

// Используя debounce мы не управляем тем как часто браузер будет генерировать события, а всего-лишь берем контроль над частотой выполнения функции обработчика события.

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const trailingOutput = document.querySelector(".output.trailing");
const leadingOutput = document.querySelector(".output.leading");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
};

// Trailing debounce
document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter.trailing += 1;
    trailingOutput.textContent = eventCounter.trailing;
  }, 300)
);

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
// у debounce есть 2 метода для контроля выполнения функции. то, что используется по умолочанию, называется trailing (т.е в конце, после скролла.), иногда может потребоваться выполнение leading (т.е в начале, как только был скролл. И потом после задержки). debounce принимает необязательный обьект настроек с двумя параметрами. leading, trailing.
document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      eventCounter.leading += 1;
      leadingOutput.textContent = eventCounter.leading;
    },
    300,
    { trailing: false, leading: true }
  )
);
