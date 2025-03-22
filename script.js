document.getElementById("welcomeBtn").addEventListener("click", function() {
    window.location.href = "https://wa.me/923010881368";  
});

document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcomeText");
    welcomeText.style.opacity = 0;
    setTimeout(() => {
        welcomeText.style.opacity = 1;
        welcomeText.style.transition = "opacity 2s";
    }, 500);
});

const products = [
    {
        name: "Luxury Gold Frame Table",
        oldPrice: 35000,
        newPrice: 24999,
        image: "https://yourwebsite.com/images/table1.jpg",
        whatsapp: "https://wa.me/923001234567"
    },
    {
        name: "Luxury Coffee Table",
        oldPrice: 15000,
        newPrice: 10399,
        image: "https://yourwebsite.com/images/table2.jpg",
        whatsapp: "https://wa.me/923001234567"
    }
];

let productList = document.getElementById("product-list");

products.forEach(product => {
    let productCard = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: <span class="price-old">Rs.${product.oldPrice}</span> <span class="price-new">Rs.${product.newPrice}</span></p>
            <a href="${product.whatsapp}" target="_blank">
                <button>Order on WhatsApp</button>
            </a>
        </div>
    `;
    productList.innerHTML += productCard;
});
