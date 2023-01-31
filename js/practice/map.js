const arr = ["country", "rock", "rap", "hip-hop"];
const newArr = arr.map((element) => element.split(" "));
console.log(newArr);

const players = [
  {
    name: "sergey",
    budget: 1000,
  },
  {
    name: "vadim",
    budget: 1000,
  },
  { name: "anya", budget: 1000 },
];

const player = players.map((player) => player.budget ** 2);
console.log(player);

//map - используется для трансформации массива, возвращает новый массив.
