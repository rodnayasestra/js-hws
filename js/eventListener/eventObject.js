const buttonEl = document.querySelector(".js-click");
function eventClick() {
  console.log(event);
}

buttonEl.addEventListener("click", eventClick);
buttonEl.addEventListener("click", (e) => {
  // первым аргументом в колбэк функцию передается обьект события. Event обычно обозначают как e, evt, event
  console.log(e);
  console.log("type of event", e.type);
  console.log("current target of event", e.currentTarget);

  //event.type - тип события.
  // event.currentTarget - элемент, на котором выполняется обработчик события.
});

/// key events.

// два основных события клавиатуры. keydown, keyup. В отличие от других событий, эти обрабатываются не на элементе, а на всем документе. Объекты событий клавиатуры происходят от базового класса KeyboardEvent.
document.addEventListener("keydown", (e) => {
  console.log("keydown type", e.type);
  console.log("keydown target", e.currentTarget);
  console.log("keydown event", e);
  console.log("key code", e.code); // свойство код будет выводить код клавиши, на которую нажали.
  console.log("key", e.key);
});
document.addEventListener("keyup", (e) => {
  console.log("keyup type", e.type);
  console.log("keyup target", e.currentTarget);
  console.log("keyup event", e);
  console.log("key code", e.code);
});
// ..События keydown и keyup срабатывают при нажатии любой клавиши, включая служебные (Ctrl, Shift, Alt, Escape и другие).
