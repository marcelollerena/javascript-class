const books = await fetch(
  "http://private-anon-7e1ab70760-bookstore.apiary-mock.com/data/books",
)
  .then((response) => {
    if (response.ok) return response.json();
    throw new Error(response.status);
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.error("ERROR: ", err.message);
  });

console.log(books);
console.log("funcionando");
