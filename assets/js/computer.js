const productList = [
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

