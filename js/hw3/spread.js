const numbers = [0, 1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(...numbers);
// Разбивает массив на независимые элементы

const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
