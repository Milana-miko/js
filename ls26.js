// HTTP Request methods
// GET
// POST
// PUT
// DELETE

// Milana-miko

/*
fetch("https://api.github.com/users/Milana-miko", {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json())
.then(res => console.log(res))
.catch(err => console.log(err));
*/

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    firstName: 'Ani',
    lastName: 'Sargsyan',
    age: 35,
    gender: "female"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));