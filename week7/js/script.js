const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzMyZWMwNTgzNTAwMTg1MjJlYzAiLCJpYXQiOjE3MDIzNzYyMzgsImV4cCI6MTcwMzU4NTgzOH0.jjseT5VpVpjcjeD9jG4d9t-dtw1pbBO8R8pgXgF1PvE" 

let product = []

const getRecords = () => {
    fetch(url, {
        headers: {
            "authorization": token,
            "Accept": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        product = data
        console.log(data);
        createCard(data);
    })
}
// const getRecord = (id) => {
//     fetch(url + id, {
//         headers: {
//             "authorization": token,
//             "Accept": "application/json",
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         product = data
//         console.log(data);
// handelDetailsData(data)
//     })
// }

function createCard(data) {
    const card = document.getElementById("cards");
    card.innerHTML = "";

    data.forEach(element => {
        let newRow = `
        <div class="col-4">
        <div class="card"> 
        <img src="${element.imageUrl}" class="card-img-top "  alt="..." id="imgURL">
            <div class="card-body">
              <h5 class="card-title" >${element.name}</h5>
              <p class="card-text" id="description">${element._id}</p>
              <p class="card-text" id="description">${element.description}</p>
              <p class="card-text" id="brand">${element.brand}</p>
              <p class="card-text" id="price">${element.price}</p>
<div class="card-footer">
              <a  href="details.html?id=${element._id}" class="btn btn-primary" >DETAILS</a>
              <a  href="#" class="btn btn-secondary">elimia</a>
</div>
              </div>
              </div>`
              card.innerHTML += newRow;
    });
};
// function handelDetailsData(data) {
//     document.getElementById('name').innerText = "detagli prodotti" + data.name;
//     document.getElementById('description').innerText = data.description;
//     document.getElementById('price').innerText = data.price;
//     document.getElementById('img').innerText = data.imageUrl;
// }
window.onload = () => {
    getRecords();
};