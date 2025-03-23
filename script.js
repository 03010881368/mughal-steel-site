
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

// Product data
const products = [
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394272907.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394290714.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740749978788.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740750046323.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740840431238.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1741298424985.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/IMG_20250308_115240_316.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394200915.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201474.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201805.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167018.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167709.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168054.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168453.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168804.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406574640.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575081.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575606.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575988.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740928332.jpg" },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740930035.jpg" }
];

// Pricing and WhatsApp link
const marketPrice = 40000;
const offerPrice = 30000;
const whatsappLink = "https://wa.me/923010881368?text=I%20want%20to%20order%20this%20table";

// Insert products into the page
let productList = document.getElementById("product-list");

products.forEach((product, index) => {
    let productCard = `
        <div class="product">
            <img src="${product.image}" alt="Stainless Steel Table ${index + 1}">
            <h3>Luxury Stainless Steel Table</h3>
            <p>Price: <span class="price-old">Rs.${marketPrice}</span> <span class="price-new">Rs.${offerPrice}</span></p>
            <a href="${whatsappLink}" target="_blank">
                <button>Order on WhatsApp</button>
            </a>
        </div>
    `;
    productList.innerHTML += productCard;
});
