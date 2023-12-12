const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MzMyZWMwNTgzNTAwMTg1MjJlYzAiLCJpYXQiOjE3MDIzNzYyMzgsImV4cCI6MTcwMzU4NTgzOH0.jjseT5VpVpjcjeD9jG4d9t-dtw1pbBO8R8pgXgF1PvE" 

let product = []

const getRecord = (id) => {
    fetch(url + id, {
        headers: {
            "authorization": token,
            "Accept": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        product = data
        console.log(data);
handelDetailsData(data)
    })
}

function handelDetailsData(data) {
    document.getElementById('name').innerText = "detagli prodotti" + data.name;
    document.getElementById('description').innerText = data.description;
    document.getElementById('price').innerText = data.price;
    document.getElementById('id').innerText = data._id;
    document.getElementById('img').src = data.imageUrl;
}
window.onload = () => {
    const params = new URLSearchParams(location.search)
    const id = params.get("id")
    getRecord(id);
};