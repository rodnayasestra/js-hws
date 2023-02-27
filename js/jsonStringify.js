const dog = {
  name: "bobik",
  age: 12,
  legs: 4,
  isHappy: true,
  bark() {
    console.log("WOOF!"); // если в обьекте есть метод, то при переведении его в JSON формат, они будут проигнорированы
  },
};
console.log("dog->", dog);

const dogJSON = JSON.stringify(dog);
console.log("dogJSON->", dogJSON);

function functionToStringify() {
  console.log("string");
}

const JSONFunction = JSON.stringify(functionToStringify); // при попытке привести к строке функцию, будет undefined
console.log("JSONFunction->", JSONFunction);
