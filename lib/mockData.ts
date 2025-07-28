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

export const address: any[] = [
  {
    isDefault: true,
    firstName: "Ansari",
    lastName: "Afroz",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    zipCode: "400017",
    phoneCode: "+91",
    phone: "7208820113",
    address: "Sion Dharavu",
  },
  {
    isDefault: false,
    firstName: "Ansari",
    lastName: "Afroz",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    zipCode: "400017",
    phoneCode: "+91",
    phone: "7208820113",
    address: "Sion Dharavu",
  },
];

export const measurementData = {
  Jacket: [
    "Chest",
    "Sleeve",
    "Shoulder",
    "Front Length",
    "Waist",
    "Bottom",
    "Bicep",
  ],
  Pant: [
    "Waist",
    "Bottom",
    "Thighs",
    "Knees",
    "Leg Bottom",
    "Length",
    "Front Rise",
    "Back Rise",
  ],
  Suit: [
    "Chest",
    "Sleeve",
    "Shoulder",
    "Front Length",
    "Waist",
    "Bottom",
    "Thighs",
    "Knees",
    "Leg Bottom",
    "Length",
    "Front Rise",
    "Back Rise",
  ],
  Shorts: [
    "Waist",
    "Bottom",
    "Thighs",
    "Shorts Length",
    "Leg Bottom",
    "Front Rise",
    "Back Rise",
  ],
  Vest: ["Chest", "Vest Length", "Shoulder", "Waist", "Bottom"],
  "T-Shirt": [
    "Chest",
    "Sleeve",
    "Half Sleeve",
    "Shoulder",
    "Front Length",
    "Waist",
    "Bottom",
  ],
  Skirt: ["Waist", "Bottom", "Skirt Length", "Skirt Flare"],
  "Flare Skirt": ["Waist", "Bottom", "Skirt Length"],
  Coat: ["Chest", "Sleeve", "Shoulder", "Front Length", "Waist", "Bottom"],
  Kid: ["Chest", "Sleeve", "Shoulder", "Front Length", "Waist"],
} as const;

export const measurementInfo = {
  Chest: {
    label: "Chest",
    name: "Chest",
    min: "25",
    max: "75",
    imgsrc: {
      Male: "/images/measurements/men/chest_01.jpg",
      Female: "/images/measurements/women/chest_01.jpg",
      Other: "/images/measurements/men/chest_01_01.jpg",
    },
    info: "Measure around the fullest part of your chest",
  },
  Sleeve: {
    label: "Sleeves",
    name: "Sleeve",
    min: "18",
    max: "30",
    imgsrc: {
      Male: "/images/measurements/men/sleeve_01.jpg",
      Female: "/images/measurements/women/sleeve_01.jpg",
      Other: "/images/measurements/other/sleeve_01.jpg",
    },
    info: "Measure from shoulder to wrist",
  },
  Shoulder: {
    label: "Shoulder",
    name: "Shoulder",
    min: "15",
    max: "28",
    imgsrc: {
      Male: "/images/measurements/men/shoulder_01.jpg",
      Female: "/images/measurements/women/shoulder_01.jpg",
      Other: "/images/measurements/other/shoulder_01.jpg",
    },
    info: "Measure across the back from shoulder to shoulder",
  },
  "Front Length": {
    label: "Front Length",
    name: "Front Length",
    min: "15",
    max: "35",
    imgsrc: {
      Male: "/images/measurements/men/front-length_01.jpg",
      Female: "/images/measurements/women/front-length_01.jpg",
      Other: "/images/measurements/other/front-length_01.jpg",
    },
    info: "Measure from shoulder to desired length",
  },
  Waist: {
    label: "Waist",
    name: "Waist",
    min: "22",
    max: "85",
    imgsrc: {
      Male: "/images/measurements/men/waist_01.jpg",
      Female: "/images/measurements/women/waist_01.jpg",
      Other: "/images/measurements/other/waist_01.jpg",
    },
    info: "Measure around your natural waistline",
  },
  Bottom: {
    label: "Hip/Bottom",
    name: "Bottom",
    min: "0",
    max: "75",
    imgsrc: {
      Male: "/images/measurements/men/seat_01.jpg",
      Female: "/images/measurements/women/seat_01.jpg",
      Other: "/images/measurements/other/seat_01.jpg",
    },
    info: "Measure around the fullest part of your hips",
  },
  Bicep: {
    label: "Bicep",
    name: "Bicep",
    min: "10",
    max: "20",
    imgsrc: {
      Male: "/images/measurements/men/bicep_01.jpg",
      Female: "/images/measurements/women/bicep_01.jpg",
      Other: "/images/measurements/other/bicep_01.jpg",
    },
    info: "Measure around the fullest part of your upper arm",
  },
  Thighs: {
    label: "Thighs",
    name: "Thighs",
    min: "0",
    max: "50",
    imgsrc: {
      Male: "/images/measurements/men/thighs_01.jpg",
      Female: "/images/measurements/women/thighs_01.jpg",
      Other: "/images/measurements/other/thighs_01.jpg",
    },
    info: "Measure around the fullest part of your thigh",
  },
  Knees: {
    label: "Knees",
    name: "Knees",
    min: "13",
    max: "40",
    imgsrc: {
      Male: "/images/measurements/men/knees_01.jpg",
      Female: "/images/measurements/women/knees_01.jpg",
      Other: "/images/measurements/other/knees_01.jpg",
    },
    info: "Measure around your knee",
  },
  "Leg Bottom": {
    label: "Leg Bottom",
    name: "Leg Bottom",
    min: "9",
    max: "25",
    imgsrc: {
      Male: "/images/measurements/men/leg-bottom_01.jpg",
      Female: "/images/measurements/women/leg-bottom_01.jpg",
      Other: "/images/measurements/other/leg-bottom_01.jpg",
    },
    info: "Measure around the bottom of your leg",
  },
  Length: {
    label: "Length",
    name: "Length",
    min: "35",
    max: "55",
    imgsrc: {
      Male: "/images/measurements/men/length_01.jpg",
      Female: "/images/measurements/women/length_01.jpg",
      Other: "/images/measurements/other/length_01.jpg",
    },
    info: "Measure from waist to desired length",
  },
  "Front Rise": {
    label: "Front Rise",
    name: "Front Rise",
    min: "3",
    max: "14",
    imgsrc: {
      Male: "/images/measurements/men/front-rise_01.jpg",
      Female: "/images/measurements/women/front-rise_01.jpg",
      Other: "/images/measurements/other/front-rise_01.jpg",
    },
    info: "Measure from the crotch seam to the top of the waistband",
  },
  "Back Rise": {
    label: "Back Rise",
    name: "Back Rise",
    min: "5",
    max: "18",
    imgsrc: {
      Male: "/images/measurements/men/back-rise_01.jpg",
      Female: "/images/measurements/women/back-rise_01.jpg",
      Other: "/images/measurements/other/back-rise_01.jpg",
    },
    info: "Measure from the back crotch seam to the top of the waistband",
  },
  "Shorts Length": {
    label: "Shorts Length",
    name: "Shorts Length",
    min: "5",
    max: "23",
    imgsrc: {
      Male: "/images/measurements/men/shorts-length_01.jpg",
      Female: "/images/measurements/women/shorts-length_01.jpg",
      Other: "/images/measurements/other/shorts-length_01.jpg",
    },
    info: "Measure from waist to desired length",
  },
  "Vest Length": {
    label: "Vest Length",
    name: "Vest Length",
    min: "20",
    max: "30",
    imgsrc: {
      Male: "/images/measurements/men/vest-length_01.jpg",
      Female: "/images/measurements/women/vest-length_01.jpg",
      Other: "/images/measurements/other/vest-length_01.jpg",
    },
    info: "Measure from shoulder to desired length",
  },
  "Half Sleeve": {
    label: "Half Sleeves",
    name: "Half Sleeve",
    min: "5",
    max: "15",
    imgsrc: {
      Male: "/images/measurements/men/half-sleeves_01.jpg",
      Female: "/images/measurements/women/half-sleeves_01.jpg",
      Other: "/images/measurements/other/half-sleeves_01.jpg",
    },
    info: "Measure from shoulder to desired length",
  },
  "Skirt Length": {
    label: "Skirt Length",
    name: "Skirt Length",
    min: "0",
    max: "28",
    imgsrc: {
      Male: "/images/measurements/men/skirt-length_01.jpg",
      Female: "/images/measurements/women/skirt-length_01.jpg",
      Other: "/images/measurements/other/skirt-length_01.jpg",
    },
    info: "Measure from waist to desired length",
  },
  "Skirt Flare": {
    label: "Skirt Flare",
    name: "Skirt Flare",
    min: "0",
    max: "28",
    imgsrc: {
      Male: "/images/measurements/men/skirt-flare_01.jpg",
      Female: "/images/measurements/women/skirt-flare_01.jpg",
      Other: "/images/measurements/other/skirt-flare_01.jpg",
    },
    info: "Measure the width at the bottom of the skirt",
  },
};

export const mockMeasurements = [
  {
    id: 1,
    name: "Arshad Ansari",
    type: "jacket",
    gender: "male",
  },
  {
    id: 2,
    name: "Afroz's Custom Jacket",
    type: "pant",
    gender: "male",
  },
];
