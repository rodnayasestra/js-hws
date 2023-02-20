const form = document.querySelector(".form");
console.log(form);
function handleSubmit(e) {
  e.preventDefault(); //Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().
  const {
    elements: { login, password },
  } = e.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
// form.addEventListener("submit", handleSubmit); // событие submit. Происходит при нажатии на кнопку с типом submit, или enter в любом месте формы.
const input = document.querySelector(".js-input");
const outputText = document.querySelector(".js-output");
// input.addEventListener("change", (e) => { /// change производится, когда поле формы, чекбоксы и т.д теряются из фокуса. После этого происходит обновление.
//   outputText.textContent = e.currentTarget.value;
// });

// input.addEventListener("input", (e) => { /// Происходит только на текстовых полях и textarea, и создаётся каждый раз при изменении значения элемента
//   console.log(e.currentTarget);
//   console.log(e);
//   outputText.textContent = e.currentTarget.value;
// });

/// focus & blur

const setFocusBtnEl = document.querySelector('button[data-action="set"]');
const removeFocusBtnEl = document.querySelector('button[data-action="remove"]');
const textInputEl = document.querySelector(".text-input");

setFocusBtnEl.addEventListener("click", () => {
  textInputEl.focus(); // при клике добавляем фокус на инпут.
});
removeFocusBtnEl.addEventListener("click", () => {
  textInputEl.blur(); // blur делает противоположное focus (убирает его)
});
textInputEl.addEventListener("focus", () => {
  textInputEl.value = "Произошел Фокус";
}); // событие фокус, работает с элементами форм.

textInputEl.addEventListener("blur", () => {
  textInputEl.value = "Произошел Блюр";
});
console.log(document.activeElement);

// событие change - применимо на инпутах и текстовых полях, но не используется на них. Чаще - на радиокнопках или чекбоксах. Обновляется после потери фокуса с инпута.

// событие input - применятся на инпутах. Обновляется каждый раз как только в инпут был введен новый символ.
