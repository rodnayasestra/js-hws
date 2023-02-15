// СОЗДАНИЕ

// document.createElement(tagName);

//Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения. tagName - это строка, указывающая тип создаваемого элемента. Элемент создается в памяти, в DOM его еще нет.

const heading = document.createElement("h1");
heading.textContent = "hello World";
console.log(heading);
