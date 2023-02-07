// const person = {
//   name: "Maxim",
//   age: 25,
//   greet() {
//     console.log("Hello");
//   },
// };
// person.greet();
// person.sayHello(); // выдаст ошибку, у обьекта нет такого метода

// console.log(person.toString());
//выдает нам строку, так как обьект person прототип обьекта Object, у которого есть метод toString.

// console.log(person);

const person = new Object({
  name: "Maxim",
  age: 25,
  greet() {
    console.log("Greet");
  },
});
Object.prototype.sayHello = function () {
  console.log("Hello!");
};
console.log(person.sayHello());

const egor = {
  name: "egor",
  age: 25,
};

console.log(egor.sayHello()); //мы создали на 23 строке метод глобального обьекта sayHello. Интерпретатор пытался найти этот метод у нас в первом обьекте, после провала пошел искать глубже, и нашел. Это и есть прототипное наследование.

const lena = Object.create(person);
lena.name = "Elena";
console.log("Lena", lena);
console.log(person.isPrototypeOf(lena));
console.log(lena.hasOwnProperty("name"));
console.log(lena.hasOwnProperty("age"));
console.log(Object.keys(lena));
lena.sayHello();
lena.greet();

const objC = {
  z: 4,
};
console.log("objC:", objC);

const objB = Object.create(objC);
objB.y = 1;
console.log(`ObjB:`, objB);

const objA = Object.create(objB);
objA.x = 2;
console.log(`ObjA:`, objA);

console.log('objA.hasOwnProperty("y"): ', objA.hasOwnProperty("y"));
console.log("X:", objA.x, "Y:", objA.y, "Z:", objA.z, "objA:", objA);
