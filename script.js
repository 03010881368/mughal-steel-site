// Product data
const products = [
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740930035.jpg", name: "Elegant Stainless Steel Table", description: "A modern and stylish table perfect for any setting." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740928332.jpg", name: "Premium Quality Table", description: "Crafted with high-quality stainless steel for durability." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394272907.jpg", name: "Luxury Stainless Steel Table", description: "Sleek design with a perfect finish for your home." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394290714.jpg", name: "Modern Stainless Steel Table", description: "A perfect blend of style and functionality." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740749978788.jpg", name: "Classic Stainless Steel Table", description: "Timeless design with unmatched durability." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740750046323.jpg", name: "Stylish Stainless Steel Table", description: "A stylish and durable table for modern interiors." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740840431238.jpg", name: "Contemporary Stainless Steel Table", description: "Designed for elegance and functionality." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1741298424985.jpg", name: "Elegant Steel Table", description: "Minimalist yet sophisticated." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/IMG_20250308_115240_316.jpg", name: "Exclusive Stainless Steel Table", description: "Perfect for both home and office use." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394200915.jpg", name: "Sleek Stainless Steel Table", description: "A blend of beauty and strength." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201474.jpg", name: "Premium Modern Table", description: "Perfectly crafted for elegance." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201805.jpg", name: "Luxury Home Table", description: "Enhance your living space with this premium table." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167018.jpg", name: "Designer Stainless Steel Table", description: "Built for perfection and style." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167709.jpg", name: "Modern Home Table", description: "A touch of elegance for your home." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168054.jpg", name: "Classic Luxury Table", description: "A perfect addition to your space." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168453.jpg", name: "Signature Stainless Steel Table", description: "A high-end finish with durable material." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168804.jpg", name: "Minimalist Stainless Steel Table", description: "Designed for modern aesthetics." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406574640.jpg", name: "Exclusive Design Table", description: "Crafted for luxury lovers." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575081.jpg", name: "Timeless Stainless Steel Table", description: "A long-lasting investment for your home." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575606.jpg", name: "Versatile Steel Table", description: "A must-have for elegant interiors." },
    { image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575988.jpg", name: "Artistic Stainless Steel Table", description: "A unique masterpiece for your space." }
];

// Pricing and WhatsApp link
const marketPrice = 40000;
const offerPrice = 30000;
const productList = document.getElementById("product-list");

document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/03010881368/mughal-steel-site/a85c89088dc1fbcf618cc5d3c3108c973fa07ea8/images/edited_background.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

document.addEventListener("DOMContentLoaded", () => {
    products.forEach((product, index) => {
        let uniqueWhatsAppLink = `https://wa.me/923010881368?text=I%20want%20to%20order%20Table%20${index + 1}`;
        
        let productCard = `
            <div class=\"product\">
                <img src=\"${product.image}\" alt=\"Table ${index + 1}\">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: <span class=\"price-old\">Rs.${marketPrice}</span> 
                <span class=\"price-new\">Rs.${offerPrice}</span></p>
                <a href=\"${uniqueWhatsAppLink}\" target=\"_blank\">
                    <button>Order on WhatsApp</button>
                </a>
            </div>
        `;
        productList.insertAdjacentHTML("beforeend", productCard);
    });
});
