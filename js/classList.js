// В свойстве classList хранится объект с методами для работы с классами элемента. ///

// elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.

// elem.classList.add(cls) - добавляет класс cls в список классов элемента.

// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.

// elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.

// elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.
// const body = document.querySelector(".body");
// console.log(body.classList.contains("body"));

// body.classList.add("bodyClassListAdd");
// console.log(body.classList.contains("bodyClassListAdd"));
// body.classList.remove("bodyClassListAdd");
// console.log(body.classList.contains("bodyClassListAdd"));

// body.classList.replace("body", "bodyTestingReplace");
// console.log(body.classList.contains("bodyTestingReplace"));

// body.classList.forEach((cls) => {
//   // к classlist можно применить метод forEach
//   console.log(cls);
// });
// console.log(body.classList); // выводит псевдомассив из классов, которые имеет элемент
