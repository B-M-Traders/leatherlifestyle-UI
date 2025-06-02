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
          { label: "Leather Jackets", url: "/category/men/jackets" },
          { label: "Leather Bottoms", url: "/category/men/bottoms" },
          { label: "Leather Tops", url: "/category/men/tops" },
          { label: "Leather Blazers", url: "/category/men/blazers" },
          { label: "Leather Coats", url: "/category/men/coats" },
          { label: "View all", url: "/category/men", bold: true },
        ],
      },
      {
        type: "list",
        title: "Shop by Style",
        lists: [
          { label: "Leather Vests", url: "/category/men/tops/vest-coat" },
          { label: "Leather Tops", url: "/category/men/tops" },
          { label: "Leather Shirts", url: "/category/men/shirts" },
          { label: "Leather Trench Coats", url: "/category/men/trench-coats" },
          { label: "Leather Biker Jackets", url: "/category/men/jacket/bike-jackets" },
          { label: "View all", url: "/category/men/", bold: true },
        ],
      },
      {
        type: "product",
        image: "/men1.jpg",
        text: "Leather Jackets",
        url: "/jackets",
      },
      {
        type: "product",
        image: "/men2.jpg",
        text: "Leather Jackets",
        url: "/jackets",
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
          { label: "Leather Jackets", url: "/category/women/jackets" },
          { label: "Leather Bottoms", url: "/category/women/bottoms" },
          { label: "Leather Tops", url: "/category/women/tops" },
          { label: "Leather Blazers", url: "/category/women/blazers" },
          { label: "Leather Coats", url: "/category/women/coats" },
          { label: "View all", url: "/category/women", bold: true },
        ],
      },
      {
        type: "list",
        title: "Shop by Style",
        lists: [
          { label: "Leather Vests", url: "/category/women/tops/vest-coat" },
          { label: "Leather Tops", url: "/category/women/tops" },
          { label: "Leather Shirts", url: "/category/women/shirts" },
          {
            label: "Leather Trench Coats",
            url: "/category/women/trench-coats",
          },
          {
            label: "Leather Biker Jackets",
            url: "/category/women/jacket/bike-jackets",
          },
          { label: "View all", url: "/category/women/", bold: true },
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
