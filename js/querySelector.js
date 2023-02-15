// elem.querySelector(selector) Используется если необходимо найти только один, чаще всего уникальный элемент.
// Возвращает первый найденный элемент внутри element, соответствующий CSS-селектору selector.
// Если ничего не найдено, вернет null.
/////////////////////////////////////////////////////////////////////////////////////////////////////
// elem.querySelectorAll(selector) Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором. Например, все элементы списка с классом menu-item.
// Возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector.
// Если ничего не найдено, вернет пустой массив.

// const body = document.querySelector(".body"); // получаем доступ
// body.style.backgroundColor = "grey";

// const list = document.querySelector(".body-list");
// list.style.display = "flex";

// const li = document.querySelectorAll(".body-list__item");
// console.log("🚀 ~ file: dom.js:21 ~ li", li);
