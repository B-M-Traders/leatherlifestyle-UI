export const reviews = [
  {
    name: "Aarav Mehta",
    date: "12/05/2025",
    rating: 5,
    verifiedBuyer: true,
    review:
      "This jacket is insane. The fit, the feel—everything screams premium.",
    image: [""],
  },
  {
    name: "Ishita Verma",
    date: "08/03/2025",
    rating: 4,
    verifiedBuyer: true,
    review:
      "Looks even better in person. Got compliments the first day I wore it.",
  },

  {
    name: "Mehul Desai",
    date: "25/02/2025",
    rating: 5,
    verifiedBuyer: true,
    review: "Incredible craftsmanship. You can tell it's made to last.",
  },
];

export const productDetail = {
  product_id: 151,
  product_name: "Green Matte Color Leather Jacket for Men",
  product_images: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p5.jpg"],
  product_price: 150,
  isStock: true,
  review: {
    star: 4,
    count: 150,
    reviews: [],
  },

  variation: [
    {
      name: "Color",
      options: [
        { label: "Black", value: "#242424" },
        { label: "Brown", value: "#52362F" },
        { label: "Tan", value: "#8A5A36" },
      ],
    },
    {
      name: "Size",
      options: [
        {
          label: "XS (US 34)",
          value: "xs",
        },
        {
          label: "S (US 36)",
          value: "s",
        },
        {
          label: "M (US 38)",
          value: "m",
        },
        {
          label: "L (US 40)",
          value: "l",
        },
        {
          label: "Custom Size",
          value: "custom",
        },
      ],
    },
  ],
};
