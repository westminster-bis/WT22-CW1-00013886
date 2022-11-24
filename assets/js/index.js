//function to show carousel

function show(id) {
    document.getElementsByClassName('active').item(0).classList.add("disabled")
    document.getElementsByClassName('active').item(0).classList.remove("active")
    document.getElementsByClassName('carousel-item').item(id).classList.remove("disabled")
    document.getElementsByClassName('carousel-item').item(id).classList.add("active")
}

const productList = [
    {
        id: 1,
        name: 'First',
        price: 50,
        type: 'product'
    },
    {
        id: 2,
        name: 'Second',
        price: 70,
        type: 'product'
    },
    {
        id: 3,
        name: 'First',
        price: 50,
        type: 'product'
    },
    {
        id: 4,
        name: 'Second',
        price: 70,
        type: 'product'
    },
    {
        id: 5,
        name: 'First',
        price: 50,
        type: 'product'
    },
    {
        id: 6,
        name: 'Second',
        price: 70,
        type: 'product'
    },
    {
        id: 7,
        name: 'Second',
        price: 70,
        type: 'product'
    },
    {
        id: 1,
        name: 'Second',
        price: 70,
        type: 'comp'
    },
    {
        id: 2,
        name: 'Second',
        price: 70,
        type: 'comp'
    },
    {
        id: 3,
        name: 'Second',
        price: 70,
        type: 'comp'
    },
    {
        id: 4,
        name: 'Second',
        price: 70,
        type: 'comp'
    },
    {
        id: 5,
        name: 'Second',
        price: 70,
        type: 'comp'
    },
    {
        id: 6,
        name: 'Second',
        price: 70,
        type: 'comp'
    },
    {
        id: 1,
        name: 'Second',
        price: 70,
        type: 'device'
    },
    {
        id: 2,
        name: 'Second',
        price: 70,
        type: 'device'
    },
    {
        id: 3,
        name: 'Second',
        price: 70,
        type: 'device'
    },
    {
        id: 4,
        name: 'Second',
        price: 70,
        type: 'device'
    },
    {
        id: 5,
        name: 'Second',
        price: 70,
        type: 'device'
    },
    {
        id: 6,
        name: 'Second',
        price: 70,
        type: 'device'
    },
    {
        id: 1,
        name: 'Second',
        price: 70,
        type: 'accessory'
    },
    {
        id: 2,
        name: 'Second',
        price: 70,
        type: 'accessory'
    },
    {
        id: 3,
        name: 'Second',
        price: 70,
        type: 'accessory'
    },
    {
        id: 4,
        name: 'Second',
        price: 70,
        type: 'accessory'
    },


]

let htmlCode = ``;

//func to show cards list

function showCards() {
    productList.forEach((item) => {
        htmlCode += `
        <div class="card">
                    <img src="assets/img/${item.type}${item.id}.jpg" alt="">
                    <div class="card-text">
                        <h4>${item.name}</h4>
                        <p>${item.price} $</p>
                        <a href="#">Buy</a>
                    </div>
                </div>
    `
        document.querySelector("#card-list").innerHTML = htmlCode;
    })
}

window.onload = function () {
    showCards()
}
