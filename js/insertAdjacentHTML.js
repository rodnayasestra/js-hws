// Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента. Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей.

// elem.insertAdjacentHTML(position, string);

// Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.

// inserAdjacentHTML method
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

const technologies = ["React", "Node.js", "React Native"];
const markup = technologies
  .map((technology) => `<li>${technology}</li>`)
  .join("");

const list = document.querySelector(".listAdjacent");
list.insertAdjacentHTML("beforeend", markup);

/// "beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.
