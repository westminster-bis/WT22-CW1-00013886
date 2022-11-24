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
        name: 'Acer Nitro 5',
        price: 900,
        type: 'product'
    },
    {
        id: 2,
        name: 'MSI Laptop #1',
        price: 800,
        type: 'product'
    },
    {
        id: 3,
        name: 'MSI Laptop #2',
        price: 1200,
        type: 'product'
    },
    {
        id: 4,
        name: 'MSI Laptop #3',
        price: 1300,
        type: 'product'
    },
    {
        id: 5,
        name: 'MSI Laptop #4',
        price: 1500,
        type: 'product'
    },
    {
        id: 6,
        name: 'Acer Nitro 5 #2',
        price: 1000,
        type: 'product'
    },
    {
        id: 7,
        name: 'HP Omen',
        price: 800,
        type: 'product'
    },
    {
        id: 6,
        name: 'Assemble #1',
        price: 500,
        type: 'comp'
    },
    {
        id: 5,
        name: 'Assemble #2',
        price: 550,
        type: 'comp'
    },
    {
        id: 4,
        name: 'Assemble #3',
        price: 700,
        type: 'comp'
    },
    {
        id: 3,
        name: 'Assemble #4',
        price: 900,
        type: 'comp'
    },
    {
        id: 2,
        name: 'Assemble #5',
        price: 1200,
        type: 'comp'
    },
    {
        id: 1,
        name: 'Assemble #6',
        price: 2000,
        type: 'comp'
    },
    {
        id: 1,
        name: 'Varmiloo keyboard #1',
        price: 120,
        type: 'device'
    },
    {
        id: 2,
        name: 'Varmiloo keyboard #2',
        price: 125,
        type: 'device'
    },
    {
        id: 3,
        name: 'Varmiloo keyboard #3',
        price: 110,
        type: 'device'
    },
    {
        id: 4,
        name: 'XTRFY mouse #1',
        price: 70,
        type: 'device'
    },
    {
        id: 5,
        name: 'XTRFY mouse #2',
        price: 75,
        type: 'device'
    },
    {
        id: 6,
        name: 'XTRFY mouse #3',
        price: 90,
        type: 'device'
    },
    {
        id: 1,
        name: 'USB flash-drive',
        price: 20,
        type: 'accessory'
    },
    {
        id: 2,
        name: 'Cooler for laptop',
        price: 30,
        type: 'accessory'
    },
    {
        id: 3,
        name: 'Varmiloo keycap',
        price: 40,
        type: 'accessory'
    },
    {
        id: 4,
        name: 'Mouse holder',
        price: 15,
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
                        <a href="#" class="btn">Buy</a>
                    </div>
                </div>
    `
        document.querySelector("#card-list").innerHTML = htmlCode;
    })
}

window.onload = function () {
    showCards()
}

