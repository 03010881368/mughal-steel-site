// Product data (Rearranged)
const products = [
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740928332.jpg" }, 
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740930035.jpg" },
    
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
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575988.jpg" }
];

// Pricing and WhatsApp link
const marketPrice = 40000;
const offerPrice = 30000;
const productList = document.getElementById("product-list");

// Loop through products and display them
products.forEach((product, index) => {
    let uniqueWhatsAppLink = `https://wa.me/923010881368?text=I%20want%20to%20order%20Table%20${index + 1}`;
    
    let productCard = `
        <div class="product">
            <img src="${product.image}" alt="Stainless Steel Table ${index + 1}">
            <h3>Luxury Stainless Steel Table</h3>
            <p>Price: <span class="price-old">Rs.${marketPrice}</span> 
            <span class="price-new">Rs.${offerPrice}</span></p>
            <a href="${uniqueWhatsAppLink}" target="_blank">
                <button>Order on WhatsApp</button>
            </a>
        </div>
    `;

    setTimeout(() => {
        productList.insertAdjacentHTML("beforeend", productCard);
    }, index * 50);
});

