/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.parentNode - выберет родителя elem.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
/////////////////////////////////////////////////////////////////////////////////////////////////////// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).
//
//
// const list = body.firstElementChild;
// console.log("🚀 ~ file: dom.js:6 ~ list", list);
// const listChild = list.firstElementChild;
// console.log("🚀 ~ file: dom.js:8 ~ listChild", listChild);
// const childNodes = list.childNodes;
// console.log("🚀 ~ file: dom.js:10 ~ childNodes", childNodes);

// const lastChild = body.lastElementChild;
// console.log("🚀 ~ file: dom.js:9 ~ lastChild", lastChild);
