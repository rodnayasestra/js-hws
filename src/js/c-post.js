const BASE_URL = "http://localhost:3000/books/";
const newBook = {
  author: "Me",
  name: "I love Paris",
  rating: "10",
};

function addBook(newBook) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  };
  return fetch(`${BASE_URL}`, options).then((r) => r.json());
}
addBook(newBook).then(console.log);
