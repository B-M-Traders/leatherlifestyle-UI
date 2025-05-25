export const menuItems = [
  {
    label: "Men",
    megamenu: true,
    dropdown: false,
    megamenuItems: [
      {
        type: "list",
        title: "Shop by Category",
        lists: [
          { label: "Leather Jackets", url: "/" },
          { label: "Leather Bottoms", url: "/" },
          { label: "Leather Tops", url: "/" },
          { label: "Leather Blazers", url: "/" },
          { label: "Leather Coats", url: "/" },
          { label: "View all", url: "/", bold: true },
        ],
      },
      {
        type: "list",
        title: "Shop by Style",
        lists: [
          { label: "Leather Vests", url: "/" },
          { label: "Leather Tops", url: "/" },
          { label: "Leather Shirts", url: "/" },
          { label: "Leather Trench Coats", url: "/" },
          { label: "Leather Biker Jackets", url: "/" },
          { label: "View all", url: "/", bold: true },
        ],
      },
      {
        type: "product",
        image: "/men1.jpg",
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
      {
        type: "product",
        image: "/men2.jpg",
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
    ],
  },
  {
    label: "Women",
    megamenu: true,
    dropdown: false,
    megamenuItems: [
      {
        type: "list",
        title: "Shop by Category",
        lists: [
          { label: "Leather Jackets", url: "/" },
          { label: "Leather Bottoms", url: "/" },
          { label: "Leather Tops", url: "/" },
          { label: "Leather Blazers", url: "/" },
          { label: "Leather Coats", url: "/" },
          { label: "View all", url: "/", bold: true },
        ],
      },
      {
        type: "list",
        title: "Shop by Style",
        lists: [
          { label: "Leather Vests", url: "/" },
          { label: "Leather Tops", url: "/" },
          { label: "Leather Shirts", url: "/" },
          { label: "Leather Trench Coats", url: "/" },
          { label: "Leather Biker Jackets", url: "/" },
          { label: "View all", url: "/", bold: true },
        ],
      },
      {
        type: "product",
        image: "/women1.jpg",
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
      {
        type: "product",
        image: "/women2.jpg",
        text: "Leather Jackets",
        url: "/leather-jackets",
      },
    ],
  },
  {
    label: "Kids",
    url: "/kids",
    megamenu: false,
    dropdown: false,
  },
  {
    label: "Pillow Covers",
    url: "/pillow-covers",
    megamenu: false,
    dropdown: false,
  },
  {
    label: "Accessories",
    url: "/accessories",
    megamenu: false,
    dropdown: false,
  },
  {
    label: "Travel Bags",
    url: "/travel-bags",
    megamenu: false,
    dropdown: false,
  },
];

export const featuredProducts = [
  {
    id: 1,
    url: "/product/leather-jacket",
    text: "Leather Jacket",
    price: 199.99,
    image: "/men1.jpg",
  },
  {
    id: 2,
    url: "/product/leather-coat",
    text: "Leather Coat",
    price: 249.99,
    image: "/men2.jpg",
  },
  {
    id: 3,
    url: "/product/leather-bag",
    text: "Leather Bag",
    price: 89.99,
    image: "/women1.jpg",
  },
  {
    id: 4,
    url: "/product/leather-shoes",
    text: "Leather Shoes",
    price: 129.99,
    image: "/women2.jpg",
  },
  {
    id: 1,
    url: "/product/leather-jacket",
    text: "Leather Jacket",
    price: 199.99,
    image: "/men1.jpg",
  },
  {
    id: 2,
    url: "/product/leather-coat",
    text: "Leather Coat",
    price: 249.99,
    image: "/men2.jpg",
  },
];
