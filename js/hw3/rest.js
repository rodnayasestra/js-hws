function multiply(...args) {
  //   console.log(args); // массив всех аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

function multipl(firstNumber, secondNumber, ...otherArgs) {
  //   console.log(firstNumber); // Значение первого аргумента
  //   console.log(secondNumber); // Значение второго аргумента
  //   console.log(otherArgs); // Массив остальных аргументов
  console.table(otherArgs);
}

multipl(1, 2);
multipl(1, 2, 3);
multipl(1, 2, 3, 4);
