window.onload = function () {
    showPartners()
}


const partnerList = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
    {
        id: 13,
    },
    {
        id: 14,
    },
    {
        id: 15,
    },
    {
        id: 16,
    },
    {
        id: 17,
    },
]

let partnerHTML = ``;


function showPartners() {
    partnerList.forEach((item) => {
        partnerHTML += `
        <div class="partner">
                    <img src="assets/img/partners/partner${item.id}.png" alt="none">
                </div>
    `
        document.querySelector("#partner-list").innerHTML = partnerHTML;
    })
}
