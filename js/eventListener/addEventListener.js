// const buttonEl = document.querySelector(".js-click");
// console.log(buttonEl);
// let value = 0;
// buttonEl.addEventListener("click", () => {
//   value += 1;
//   console.log(`button was clicked ${value} times`);
// }); // по классу js. колбэк функция сразу передалась в вызов addEventListener
const buttonByDataEl = document.querySelector('button[data-action="click"]');
console.log(buttonByDataEl);
let value = 0;
function consoleClick() {
  value += 1;
  console.log(`button was clicked ${value} times`);
}

buttonByDataEl.addEventListener("click", consoleClick);

/// removeEventListener

buttonByDataEl.removeEventListener("click", consoleClick); // удаляет слушателя событий, порядок действия и передачи аргументов такой же, как и у addEventListener. При удалении слушателя события функция должна быть такой же, как и при добавлении, поэтому функцию, с которой в будущем придется снять слушателя событий, нужно знаести в отдельную переменную.

// если при передаче аргументом в функции будет ключевое слово this, то оно будет ссылаться на контекст того элемента, к которому мы добавляем слушателя событий.
const egor = {
  name: "egor",
  showUserName() {
    console.log(`User name is ${this.name}`);
  },
};
buttonByDataEl.addEventListener("click", egor.showUserName); // будет выведен undefined, так как this будет привязан к элементу, на который повесили слушателя событий. Поэтому не забываем явно указать контекст выполнения метода.
buttonByDataEl.addEventListener("click", egor.showUserName.bind(egor));

// одновременно с this показал еще то, что на один элемент можно вызвать сразу несколько слушателей события.
