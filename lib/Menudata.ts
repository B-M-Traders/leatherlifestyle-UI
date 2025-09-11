export const menuItems = [
  {
    label: "Men",
    megamenu: true,
    image: "/men2.jpg",
    dropdown: false,
    megamenuItems: [
      {
        type: "list",
        title: "Shop by Men Category",
        lists: [
          { label: "Leather Jackets", url: "/category/men/leather-jackets" },
          { label: "Leather Bottoms", url: "/category/men/leather-bottoms" },
          { label: "Leather Tops", url: "/category/men/leather-tops" },
          { label: "Leather Blazers", url: "/category/men/leather-blazers" },
          { label: "Leather Coats", url: "/category/men/leather-coats" },
          { label: "View all", url: "/category/men", bold: true },
        ],
      },
      {
        type: "list",
        title: "Shop by Style",
        lists: [
          { label: "Leather Vests", url: "/category/men/leather-vests" },
          { label: "Leather Tops", url: "/category/men/leather-tops" },
          { label: "Leather Shirts", url: "/category/men/leather-shirts" },
          {
            label: "Leather Trench Coats",
            url: "/category/men/leather-trench-coats",
          },
          {
            label: "Leather Biker Jackets",
            url: "/category/men/leather-bike-jackets",
          },
          { label: "View all", url: "/category/men/", bold: true },
        ],
      },
      {
        type: "product",
        image: ["/men1.jpg"],
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
      {
        type: "product",
        image: ["/men2.jpg"],
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
    ],
  },
  {
    label: "Women",
    megamenu: true,
    image: "/product2.jpg",
    dropdown: false,
    megamenuItems: [
      {
        type: "list",
        title: "Shop by Women Category",
        lists: [
          { label: "Leather Jackets", url: "/category/men/leather-jackets" },
          { label: "Leather Bottoms", url: "/category/men/leather-bottoms" },
          { label: "Leather Tops", url: "/category/men/leather-tops" },
          { label: "Leather Blazers", url: "/category/men/leather-blazers" },
          { label: "Leather Coats", url: "/category/men/leather-coats" },
          { label: "View all", url: "/category/men", bold: true },
        ],
      },
      {
        type: "list",
        title: "Shop by Style",
        lists: [
          { label: "Leather Vests", url: "/category/men/leather-vests" },
          { label: "Leather Tops", url: "/category/men/leather-tops" },
          { label: "Leather Shirts", url: "/category/men/leather-shirts" },
          {
            label: "Leather Trench Coats",
            url: "/category/men/leather-trench-coats",
          },
          {
            label: "Leather Biker Jackets",
            url: "/category/men/leather-bike-jackets",
          },
          { label: "View all", url: "/category/men/", bold: true },
        ],
      },
      {
        type: "product",
        image: ["/women1.jpg"],
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
      {
        type: "product",
        image: ["/women2.jpg"],
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
    ],
  },
  {
    label: "Kids",
    url: "/category/kids",
    megamenu: false,
    dropdown: false,
  },
  {
    label: "Pillow Covers",
    url: "/category/pillow-covers",
    megamenu: false,
    dropdown: false,
  },
  {
    label: "Accessories",
    url: "/category/accessories",
    megamenu: false,
    dropdown: false,
  },
  {
    label: "Travel Bags",
    url: "/category/travel-bags",
    megamenu: false,
    dropdown: false,
  },
];

export const featuredProducts = [
  // PRODUCTS
  {
    id: 1,
    url: "/product/leather-jacket",
    star: 4,
    name: "Leather Jacket",
    tag: "Best Seller",
    price: 199.99,
    image: ["/men1.jpg", "/men2.jpg"],
  },
  {
    id: 2,
    url: "/product/leather-coat",
    star: 2,
    name: "Leather Coat",
    price: 249.99,
    image: ["/men2.jpg"],
  },
  {
    id: 3,
    url: "/product/leather-bag",
    star: 3,
    name: "Leather Bag",
    tag: "On Sale",
    price: 89.99,
    image: ["/women1.jpg"],
  },
  {
    id: 4,
    url: "/product/leather-shoes",
    star: 5,
    name: "Leather Shoes",
    price: 129.99,
    image: ["/women2.jpg"],
  },
  {
    id: 1,
    url: "/product/leather-jacket",
    star: 2,
    name: "Leather Jacket",
    price: 199.99,
    image: ["/men1.jpg"],
  },
];
