const BASE_URL = "http://localhost:3000/books";
function deleteDBElement(id) {
  const option = {
    method: "DELETE",
  };
  return fetch(`${BASE_URL}/${id}`, option).then((r) => r.json());
}
deleteDBElement(1).then(console.log);
