// ДОБАВЛЕНИЕ
// element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
// element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
// element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
// element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.

const list = document.querySelector(".usernames");
// list.append
const lastItem = document.createElement("li");
lastItem.textContent = "Egor";
list.append(lastItem);
// list.prepend
const firstItem = document.createElement("li");
firstItem.textContent = "Lena";
list.prepend(firstItem);
// list.before

const title = document.createElement("h1");
title.textContent = "Usernames";
list.before(title);

const text = document.createElement("p");
text.textContent = "lorem ipsum dolor sit amets";
list.after(text);

// remove

//elem.remove();

// Для того, чтобы удалить элемент используется метод remove(). Он вызывается на самом элементе elem, который необходимо удалить

text.classList.add("textToRemove");
const removingText = document.querySelector(".textToRemove");
removingText.remove();
