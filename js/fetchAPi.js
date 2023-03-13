// const fetchUsersBtnEl = document.querySelector(".btn");
// const userListEl = document.querySelector(".user-list");
const pokemons = fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.results);
  });
