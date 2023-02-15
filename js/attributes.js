// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

const image = document.querySelector(".image");
console.log(image.attributes);
console.log(image.hasAttribute("src")); // проверяет на наличие указаного атрибута.
console.log(image.getAttribute("src")); // позволяет получить доступ к значению указанного атрибута.
image.setAttribute("alt", "Amazing Dogs");
console.log(image.getAttribute("alt"));
