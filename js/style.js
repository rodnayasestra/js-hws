// Используется для чтения и изменения инлайновых стилей. Возвращает объект CSSStyleDeclaration, который содержит список всех свойств, определенных только во встроенных стилях элемента, а не весь CSS. При записи свойства записываются в camelCase, то есть background-color превращается в element.style.backgroundColor и т. д.

const body = document.querySelector(".body");
body.style.displaye = "flex";
