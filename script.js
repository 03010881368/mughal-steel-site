
const products = [
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740930035.jpg", 
        name: "Elegant Stainless Steel Table", 
        description: "This elegantly crafted single-piece stainless steel table is perfect for modern interiors. Its sleek design and premium finish make it an ideal choice for homes or offices that require a sophisticated and durable centerpiece. A combination of style and strength, this table is built to last while enhancing the aesthetics of any space."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740740928332.jpg", 
        name: "Premium Quality Table", 
        description: "A premium-quality stainless steel table, offering an exceptional blend of strength and beauty. Perfect for homes and offices, this single-piece table ensures maximum stability while offering a polished, contemporary look that complements any decor. Its durable frame and elegant design guarantee a long-lasting investment."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394272907.jpg", 
        name: "Luxury Stainless Steel Table", 
        description: "This luxurious stainless steel table features a modern yet timeless design, crafted to provide both elegance and functionality. Ideal for high-end residential and commercial spaces, this piece is designed to bring style and sophistication to any room while offering the durability of stainless steel."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740394290714.jpg", 
        name: "Modern Stainless Steel Table", 
        description: "A perfect fusion of modern design and functional utility, this single-piece stainless steel table is a great addition to any contemporary living or working environment. Its clean lines and robust construction make it an ideal choice for people seeking a sleek, minimalistic look without compromising on durability."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740749978788.jpg", 
        name: "Classic Stainless Steel Table", 
        description: "This classic stainless steel table is a symbol of timeless design and superior craftsmanship. It offers a perfect balance of simplicity and durability, making it suitable for both traditional and modern interiors. Whether in a living room or an office, this table guarantees to add elegance and sophistication."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740750046323.jpg", 
        name: "Stylish Stainless Steel Table", 
        description: "With a modern touch and exquisite craftsmanship, this stylish stainless steel table is designed for those who appreciate elegance and practicality. The sleek design and high-quality material make it a perfect choice for modern homes and offices."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1740840431238.jpg", 
        name: "Contemporary Stainless Steel Table", 
        description: "Perfectly suited for contemporary interiors, this stainless steel table is a blend of elegance and functionality. Its unique design makes it an eye-catching piece that will complement any space, offering both style and practicality for your home or office."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/1741298424985.jpg", 
        name: "Elegant Steel Table", 
        description: "This elegant steel table features a minimalist design that adds charm to any interior. Ideal for modern spaces, its sturdy frame and simple design make it a versatile addition to living rooms, offices, or entryways."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/IMG_20250308_115240_316.jpg", 
        name: "Exclusive Stainless Steel Table", 
        description: "This exclusive stainless steel table is designed for those who appreciate luxury and style. Featuring a high-end finish and contemporary design, it is perfect for both residential and commercial use. A blend of art and functionality, this table makes a statement in any space."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394200915.jpg", 
        name: "Sleek Stainless Steel Table", 
        description: "With a sleek and modern design, this stainless steel table offers the perfect balance of form and function. Ideal for minimalist interiors, this single-piece table provides a stylish and durable solution for modern living and working spaces."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201474.jpg", 
        name: "Premium Modern Table", 
        description: "Designed to cater to the needs of modern homes and offices, this premium stainless steel table exudes sophistication and elegance. Its sleek lines and high-quality construction offer both practicality and style, making it an ideal choice for contemporary spaces."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740394201805.jpg", 
        name: "Luxury Home Table", 
        description: "Enhance your living space with this luxurious stainless steel table. Perfect for upscale homes, this table brings together style, durability, and functionality. Its contemporary design makes it suitable for any modern living area, office, or lounge."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167018.jpg", 
        name: "Designer Stainless Steel Table", 
        description: "This designer stainless steel table offers a fusion of art and functionality. Crafted with precision and attention to detail, it is designed for those who value luxury and elegance. Perfect for stylish interiors, this table promises durability and exceptional aesthetic appeal."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406167709.jpg", 
        name: "Modern Home Table", 
        description: "A modern home table designed to complement contemporary interiors. This sleek stainless steel table brings a touch of elegance to any room. Its clean design and premium material make it an ideal choice for those looking for durability and style in one."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168054.jpg", 
        name: "Classic Luxury Table", 
        description: "The classic luxury table is designed to provide timeless elegance to any interior. Its robust construction and stylish finish make it a perfect fit for high-end homes or offices. This table is a perfect fusion of sophistication and functionality."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168453.jpg", 
        name: "Signature Stainless Steel Table", 
        description: "The signature stainless steel table is the epitome of modern luxury. With a striking design and durable structure, this table is ideal for people who want to make a statement in their homes or offices. Its premium finish guarantees long-lasting quality and elegance."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406168804.jpg", 
        name: "Minimalist Stainless Steel Table", 
        description: "Designed for those who appreciate minimalist aesthetics, this stainless steel table offers simplicity and elegance. Perfect for modern spaces, its clean lines and durable build make it a versatile addition to any home or office."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406574640.jpg", 
        name: "Exclusive Design Table", 
        description: "Crafted for those with a taste for luxury, this exclusive design table offers an artistic touch to any room. With its unique design and premium construction, it enhances the aesthetic appeal of both residential and commercial spaces."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575081.jpg", 
        name: "Timeless Stainless Steel Table", 
        description: "A timeless piece that seamlessly blends into any decor, this stainless steel table offers both style and durability. Whether in a living room, office, or study, this table provides lasting value and enhances the beauty of the space."
    },
    { 
        image: "https://github.com/03010881368/mughal-steel-site/raw/main/images/Photo_1740406575606.jpg", 
        name: "Versatile Steel Table", 
        description: "A versatile steel table designed for
const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
    `;

    productList.appendChild(productDiv);
});
