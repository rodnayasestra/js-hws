const firstArrowFunc = (vadim, b, c) => {
  return vadim + b * c;
};

console.log(firstArrowFunc("vadim", 10, 20));

const people = [
  { name: "vadim", age: 18, budget: 10 },
  { name: "anna", age: 22, budget: 11 },
  { name: "sergey", age: 101, budget: 12 },
];
const sumAgeAndBudget = (people) => {
  let total = 0;
  for (const person of people) {
    total += person.age + person.budget;
  }
  console.log(total);
};
// people.forEach(function budgetSum(person) {
//   let total = 0;
//   total += person.budget;
//   console.log(total);
//   return total;
// });
console.log(sumAgeAndBudget(people));

const add = (a, ...args) => {
  console.log(a, args);
};

add(1, 2, 3); // [1, 2, 3]

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
const logMessage = (number, index) => {
  return `Индекс ${index}, значение ${number}`;
};
// console.log(logMessage());
numbers.forEach(logMessage);
