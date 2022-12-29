

const URL = "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users";

logUser();
// fetch(URL, {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     getlistUser(data);
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

function getlistUser(abc) {
  let elmBody = document.getElementById("tbody_user");
  let tempRowTable = "";
  function list(user) {
    let total = `
    <tr>
       <th scope="row">${user.id}</th>
       <td>${user.name}</td>
       <td>${user.City}</td>
       <td>${user.avatar}</td>
       <td>${user.rank}</td>
       <td>
       <button class="btn btn-success" onclick="goToDetail(${user.id})">Detail</button>
       <button class="btn btn-info" onclick="handleEdit(${user.id})">Edit</button>
       <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
       </td>
  </tr>
        `;
    return total;
  }
  for (let i = 0; i < abc.length; i++) {
    tempRowTable += list(abc[i]);
  }
  elmBody.innerHTML = tempRowTable;
}
function logUser() {
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      
      getlistUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function goToDetail(userId) {
  console.log("goToDetail", userId);
  window.location.href =`./detail.html?id=${userId}`;
}
function deleteUser(userId) {
  console.log(deleteUser);
  let userDelete = URL + '/' + userId
  fetch(userDelete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      
      logUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  
}
function handleEdit(userId) {
  console.log("goToDetail", userId);
  window.location.href =`./form.html?id=${userId}`;
}
