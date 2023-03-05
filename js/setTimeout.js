// console.log("First Dog");
// console.log("Second Dog");
// console.log("Third Dog");

// const async = setTimeout(() => {
//   console.log("Async");
// }, 2000);
// console.log(async);

console.log("First Dog");
setTimeout(() => {
  console.log("Second Dog");
}, 2000);
console.log("Third Dog");

const greet = () => {
  console.log("hello!");
};

const timerId = setTimeout(greet, 2000); // setTimeout  метод, который позволяет "отложить выполнение функцию" на определенный промежуток времени. в данном примере 2с. время указывается в МС.
console.log(timerId);
clearTimeout(timerId); // метод удаляет отложенный вызов, и при следующем вызове функции, она сработает сразу
