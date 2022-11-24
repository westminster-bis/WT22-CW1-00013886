const productList = [
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
    }

]

let compHTML = ``;

//func to show cards list

function showCards() {
    productList.forEach((item) => {
        compHTML += `
        <div class="card">
                    <img src="assets/img/${item.type}${item.id}.jpg" alt="">
                    <div class="card-text">
                        <h4>${item.name}</h4>
                        <p>${item.price} $</p>
                        <a href="#" class="btn">Buy</a>
                    </div>
                </div>
    `
        document.querySelector("#card-list").innerHTML = compHTML;
    })
}

window.onload = function () {
    showCards()
}

