// PUT - полная замена обьекта, удаляет все кроме индентификатора и загружает новую информацию
// PATCH - Заменяет только отдельные поля обьекта, которые были указаны в  body
const BASE_URL = "http://localhost:3000/books";

// fetch(`${BASE_URL}/5`, options)
//   .then((r) => r.json())
//   .then(console.log)
//   .catch(console.log);
function renameBook(updateObj, id) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateObj),
  };
  return fetch(`${BASE_URL}/${id}`, options).then((r) => r.json());
}
renameBook({ name: "I love Paris. Small Edition", rating: 11 }, 6).then(
  console.log
);
