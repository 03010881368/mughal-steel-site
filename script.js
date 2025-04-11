const products = [
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740930035.jpg", 
        name: "Elegant Stainless Steel Table", 
        description: "This elegantly crafted single-piece stainless steel table is perfect for modern interiors."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740928332.jpg", 
        name: "Premium Quality Table", 
        description: "A premium-quality stainless steel table, offering an exceptional blend of strength and beauty."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394272907.jpg", 
        name: "Luxury Stainless Steel Table", 
        description: "This luxurious stainless steel table features a modern yet timeless design."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394290714.jpg", 
        name: "Modern Stainless Steel Table", 
        description: "A perfect fusion of modern design and functional utility, this single-piece stainless steel table."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740749978788.jpg", 
        name: "Classic Stainless Steel Table", 
        description: "This classic stainless steel table is a symbol of timeless design and superior craftsmanship."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740750046323.jpg", 
        name: "Stylish Stainless Steel Table", 
        description: "With a modern touch and exquisite craftsmanship, this stylish stainless steel table is designed for those who appreciate elegance."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740840431238.jpg", 
        name: "Contemporary Stainless Steel Table", 
        description: "Perfectly suited for contemporary interiors, this stainless steel table is a blend of elegance and functionality."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1741298424985.jpg", 
        name: "Elegant Steel Table", 
        description: "This elegant steel table features a minimalist design that adds charm to any interior."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/IMG_20250308_115240_316.jpg", 
        name: "Exclusive Stainless Steel Table", 
        description: "This exclusive stainless steel table is designed for those who appreciate luxury and style."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394200915.jpg", 
        name: "Sleek Stainless Steel Table", 
        description: "With a sleek and modern design, this stainless steel table offers the perfect balance of form and function."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201474.jpg", 
        name: "Premium Modern Table", 
        description: "Designed to cater to the needs of modern homes and offices, this premium stainless steel table exudes sophistication."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201805.jpg", 
        name: "Luxury Home Table", 
        description: "Enhance your living space with this luxurious stainless steel table. Perfect for upscale homes."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167018.jpg", 
        name: "Designer Stainless Steel Table", 
        description: "This designer stainless steel table offers a fusion of art and functionality."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167709.jpg", 
        name: "Modern Home Table", 
        description: "A modern home table designed to complement contemporary interiors."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168054.jpg", 
        name: "Classic Luxury Table", 
        description: "The classic luxury table is designed to provide timeless elegance to any interior."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168453.jpg", 
        name: "Signature Stainless Steel Table", 
        description: "The signature stainless steel table is the epitome of modern luxury."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168804.jpg", 
        name: "Minimalist Stainless Steel Table", 
        description: "Designed for those who appreciate minimalist aesthetics, this stainless steel table offers simplicity."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406574640.jpg", 
        name: "Exclusive Design Table", 
        description: "Crafted for those with a taste for luxury, this exclusive design table offers an artistic touch to any room."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575081.jpg", 
        name: "Timeless Stainless Steel Table", 
        description: "A timeless piece that seamlessly blends into any decor, this stainless steel table offers both style and durability."
    },
    {
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575606.jpg", 
        name: "Versatile Steel Table", 
        description: "A versatile steel table designed for all spaces, whether residential or commercial."
    }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="https://wa.me/923010881368?text=I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}" class="whatsapp-button" target="_blank">Order on WhatsApp</a>
    `;

    productList.appendChild(productDiv);
});
