let elmBodyTable = document.getElementById("tbody_user");
console.log(elmBodyTable);

const URL = "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users";

// lay' windown.loation deq? truyen qUa detail
function gotoDetail(userId) {
  console.log("gotoDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}

// getUser()
fetch( URL , {
  method: "GET",
})
.then((response) => response.json())
.then((data) => {
  // console.log(data);
  getListUsers(data)
})
.catch((error) => {
  console.error("Error:", error);
});
function getListUsers(data) {
  let tempRowTable = '';
  function danhsach(list_user) {
    let total = `
        <tr>
            <th scope="row" >${list_user.id}</th>
            <td>${list_user.name}</td>
            <td>${list_user.City}</td>
            <td>${list_user.avatar}</td>
            <td>
                <button class="btn btn-success" onclick=gotoDetail(${list_user.id}) >detail</button>
                <butoon class="btn btn-danger" onclick=deleteUser(${list_user.id}) >delete</butoon>
            </td>
        </tr>

    `
    return total}

  for (let i = 0; i < data.length ; i++) {
      tempRowTable += danhsach(data[i])}
      
  elmBodyTable.innerHTML = tempRowTable;

}
// function getUser() {
//   fetch( URL , {
//     method: "GET",
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     getListUsers(data)
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// }


function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + '/' + userId   ;
  fetch( user_delete, {
  method: "DELETE",
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
  fetch( URL , {
    method: "GET",
  })
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    getListUsers(data)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  
  
})
.catch((error) => {
  console.error("Error:", error);
});
  
}




// let tempRowTable = "";
// let user = {
//     id: 1,
//     name: "toi ten thanh",
//     Age: 18,
//     Adress: "adress1",
// }

// const list_user = [
//   {
//     id: 1,
//     name: "toi ten thanh",
//     Age: 18,
//     Adress: "adress 1",
//   },
//   {
//     id: 2,
//     name: "toi ten thanh",
//     Age: 20,
//     Adress: "adress 2",
//   },
//   {
//     id: 3,
//     name: "toi ten thanh",
//     Age: 26,
//     Adress: "adress 3",
//   },
//   {
//     id: 4,
//     name: "toi ten thanh",
//     Age: 30,
//     Adress: "adress 4",
//   },

// ];

// function danhsach(list_user) {
//     let total = `
//         <tr>
//             <th scope="row">${list_user.id}</th>
//             <td>${list_user.name}</td>
//             <td>${list_user.Age}</td>
//             <td>${list_user.Adress}</td>
//         </tr>

//     `
//     return total
// }

// for (let i = 0; i < list_user.length ; i++) {
//     tempRowTable += danhsach(list_user[i])

// }
