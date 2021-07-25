const products = [
    {
        name: "Casual Short Sleeve",
        slug: "casual-short-sleeve",
        rating: 2,
        numReviews: 4,
        countInStock: 28,
        imageSrc: "/images/product-1-0.png",
        sideImagesSrc: [
            {
                imageSrc: "/images/product-1-0.jpg",
                alt: "side-img-1"
            },
            {
                imageSrc: "/images/product-1-s1.jpg",
                alt: "side-img-2"
            },
            {
                imageSrc: "/images/product-1-s2.webp",
                alt: "side-img-3"
            },
            {
                imageSrc: "/images/product-1-s3.webp",
                alt: "side-img-4"
            },
            {
                imageSrc: "/images/product-1-s4.webp",
                alt: "side-img-5"
            },
            {
                imageSrc: "/images/product-1-s5.webp",
                alt: "side-img-6"
            }
        ],
        price: 7.26,
        vendorName: "Ravel Fashions",
        featuring: false,
        gender: "female",
        category: "new-in",
        colors: [
            {
                colorName: "black",
                imageSrc: "/images/product-1-0.jpg"
            },
            {
                colorName: "white",
                imageSrc: "/images/product-1-s2.webp"
            }
        ],
        sizes: ["S", "M", "L"],
        features: [
            "Brand Name: AOWOFS",
            "Material: Polyester",
            "Sleeve Length(cm): Short",
            "Pattern Type: DOT",
        ]
    },
    {
        name: "Gothic Vintage Retro",
        slug: "gothic-vintage-retro",
        rating: 3,
        numReviews: 8,
        countInStock: 12,
        imageSrc: "/images/product-2-0.png",
        sideImagesSrc: [
            {
                imageSrc: "/images/product-2-0.jpg",
                alt: "side-img-1"
            },
            {
                imageSrc: "/images/product-2-s1.webp",
                alt: "side-img-2"
            },
            {
                imageSrc: "/images/product-2-s2.webp",
                alt: "side-img-3"
            },
            {
                imageSrc: "/images/product-2-s3.webp",
                alt: "side-img-4"
            },
            {
                imageSrc: "/images/product-2-s4.webp",
                alt: "side-img-5"
            },
            {
                imageSrc: "/images/product-2-s5.webp",
                alt: "side-img-6"
            }
        ],
        price: 19.87,
        vendorName: "Kayle Store",
        featuring: false,
        gender: "female",
        category: "clothing",
        colors: [
            {
                colorName: "black",
                imageSrc: "/images/product-2-0.jpg",
            },
            {
                colorName: "red",
                imageSrc: "/images/product-2-6.webp",
            },
            {
                colorName: "blue",
                imageSrc: "/images/product-2-7.webp",
            },
        ],
        sizes: ["S", "M", "L", "XXL"],
        features: [
            "Collar:  Bow Neck",
            "Closure style: pullover",
            "Popular elements: Robe retro Hepburn style, classic 1950s 60S 70S print, slim waist , sheath dress.",
            "Feminino Vestidos:  Short sleeve elegant sexy stylish youthful rockabilly dress",
            "Composition of main fabric:  Polyester",
            "The real color of the item may be slightly different from the pictures shown on website caused by many factors such as brightness of your monitor and light brightness",
        ]
    },
    {
        name: "INCERUN Men Short Sleeve Lapel Printed Shirt Tropical Leaf Pattern Floral Shirt",
        slug: "incerun-men-short-sleeve",
        rating: 4,
        numReviews: 24,
        countInStock: 10,
        imageSrc: "/images/product-3-0.png",
        sideImagesSrc: [
            {
                imageSrc: "/images/product-3-0.webp",
                alt: "side-img-1"
            },
            {
                imageSrc: "/images/product-3-s1.webp",
                alt: "side-img-2"
            },
            {
                imageSrc: "/images/product-3-s2.webp",
                alt: "side-img-3"
            },
            {
                imageSrc: "/images/product-3-s3.webp",
                alt: "side-img-4"
            },
            {
                imageSrc: "/images/product-3-s4.webp",
                alt: "side-img-5"
            },
        ],
        price: 11.36,
        vendorName: "INCERUN",
        featuring: true,
        gender: "male",
        category: "bags",
        colors: [
            {
                colorName: "Yellow",
                imageSrc: "/images/product-3-0.webp",
            },
            {
                colorName: "Black",
                imageSrc: "/images/product-3-s2.webp",
            },
            {
                colorName: "Blue",
                imageSrc: "/images/product-3-s3.webp"
            },
            {
                colorName: "Pink",
                imageSrc: "/images/product-3-s4.webp"
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        features: [
            "Collar: Turn-Down Collar",
            "Closure type: Single Breasted",
            "Fabric Material: 100% Cotton",
            "Type: Fit"
        ]
    },
    {
        name: "Devil Full Printed Short Sleeve Shirts Men Summer Floral Loose Hawaiian Korean Streetwear Hip Hop Couple Fashion Shirts Camisa",
        slug: "devil-full-printed-short",
        rating: 5,
        numReviews: 17,
        countInStock: 1,
        imageSrc: '/images/product-4-0.png',
        sideImagesSrc: [
            {
                imageSrc: "/images/product-4-0.webp",
                alt: "side-img-1"
            },
            {
                imageSrc: "/images/product-4-s1.webp",
                alt: "side-img-2"
            },
            {
                imageSrc: "/images/product-4-s2.webp",
                alt: "side-img-3"
            },
            {
                imageSrc: "/images/product-4-s3.webp",
                alt: "side-img-4"
            },
            {
                imageSrc: "/images/product-4-s4.webp",
                alt: "side-img-4"
            },
        ],
        price: 13.80,
        vendorName: "NAGRI Streewear store",
        featuring: true,
        gender: "male",
        category: "shoes",
        colors: [
            {
                colorName: "Black",
                imageSrc: "/images/product-4-0.webp",
            },
            {
                colorName: "Pink",
                imageSrc: "/images/product-4-s2.webp",
            },
            {
                colorName: "Pirple",
                imageSrc: "/images/product-3-s3.webp",
            },
            {
                colorName: "White",
                imageSrc: "/images/product-3-s4.webp",
            }
        ],
        sizes: ["S", "M", "L", "XXL"],
        features: [
            "Collar: Turn-down Collar",
            "Closure type: Single Breasted",
            "Fabric Material:100%Cotton",
            "Type: Fit"
        ]
    },
    {
        name: "Sleeveless Strap Long Maxi Evening Party Elegant Dress Sundress Plus Size Pullover Long Dresses",
        slug: "sleeveless-strap-long-maxi",
        rating: 3,
        numReviews: 5,
        countInStock: 18,
        imageSrc: '/images/product-5-0.png',
        sideImagesSrc: [
            {
                imageSrc: "/images/product-5-0.webp",
                alt: "side-img-1"
            },
            {
                imageSrc: "/images/product-5-s1.webp",
                alt: "side-img-2"
            }
        ],
        price: 8.80,
        vendorName: "YI AN Store",
        featuring: false,
        gender: "female",
        category: "accessories",
        colors: [
            {
                colorName: "Black",
                imageSrc: "/images/product-5-0.webp",
            }
        ],
        sizes: ["S", "M", "L"],
        features: [
            "Gradient,Sleeveless,Women and girls Fashion Casual",
            "Softy and good texture material,lightweight,breathable",
            "Party Wear or Casual Daily Wear. Perfect for beach, vacation and more",
            "Washing Suggestion: Hand wash cold and hang dry"
        ]
    },
    {
        name: "Woman Punk Pants Vintage Solid Color Long Trousers Hollow Workwear Belt Buckle High Waist Zipper Casual Loose Pants",
        slug: "woman-punk-pants-vintange",
        rating: 4,
        numReviews: 1,
        countInStock: 2,
        imageSrc: '/images/product-6-0.png',
        sideImagesSrc: [
            {
                imageSrc: "/images/product-6-0.webp",
                alt: "side-img-1"
            }
        ],
        price: 11.21,
        vendorName: "YI AN Store",
        featuring: true,
        gender: "female",
        category: "active-wear",
        colors: [
            {
                colorName: "Black",
                imageSrc: "/images/product-6-0.webp",
            }
        ],
        sizes: ["S", "M", "L"],
        features: [
            "Hollow, high waist, zipper, strapped feetCasual,Trend and Fashion design, suit for all Season Pants.",
            "It is made of high quality materials,durable enought for your daily wearing",
            "Comfortable,perfect for home wear or lounging around or outdoor activities"
        ]
    },
    {
        name: "Men's Classic Relaxed Fit Flex Jean 2021 spring autumn new Four Seasons High waist Business casual black blue denim trousers",
        slug: "mens-classic-relaxed-fit-flex-jeans",
        rating: 5,
        numReviews: 1,
        countInStock: 14,
        imageSrc: '/images/product-7-0.png',
        sideImagesSrc: [
            {
                imageSrc: "/images/product-7-0.webp",
                alt: "side-img-1"
            },
            {
                imageSrc: "/images/product-7-s1.webp",
                alt: "side-img-2"
            },
            {
                imageSrc: "/images/product-7-s2.webp",
                alt: "side-img-3"
            },
            {
                imageSrc: "/images/product-7-s3.webp",
                alt: "side-img-4"
            },
        ],
        price: 21.99,
        vendorName: "QUANBO",
        featuring: true,
        gender: "male",
        category: "new-in",
        colors: [
            {
                colorName: "Blue",
                imageSrc: "/images/product-7-s3.webp",
            },
            {
                colorName: "Black",
                imageSrc: "/images/product-7-s4.jpg",
            }
        ],
        sizes: ["28", "29", "30", "31", "32", "34", "36", "38", "39", "40"],
        features: [
            "Trendy Fit Wear"
        ]
    },
];

export default products;