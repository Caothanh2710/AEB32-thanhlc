let elmBodyTable = document.getElementById("tbody_user");
console.log("tbody_user");
const URL = "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users";

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    getlistUser(data);
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function getlistUser(abc) {
  let tempRowTable = "";
  function list(_user) {
    let total = `
    <tr>
       <th scope="row">${_user.id}</th>
       <td>${_user.name}</td>
       <td>${_user.City}</td>
       <td>${_user.avatar}</td>
       <td>${_user.rank}</td>
  </tr>
        `;
    return total;
  }
  for (let i = 0; i < abc.length; i++) {
    tempRowTable += list(abc[i]);
  }
  elmBodyTable.innerHTML = tempRowTable;
}
