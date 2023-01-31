const names = [
  {
    name: "vadim",
    genre: "hip-hop",
  },
  { name: "sergey", genre: "classic" },
  { name: "anna", genre: "hip-hop" },
];
const find = names.find((name) => name.genre === "hip-hop");
console.log(find);
const genres = ["hip-hop", "hip hop", "classic"];
console.log(genres.find((genre) => genre === "hip hop"));
