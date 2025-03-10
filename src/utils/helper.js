import { SlidesItems, categories, popularProducts } from "./data";

export const getProductById = (id) => {
  let findObject;
  findObject =
    SlidesItems.find((item) => item.id === id) ||
    categories.find((item) => item.id === id) ||
    popularProducts.find((item) => item.id === id);

  return findObject;
};

const config = {
  "100 ml": 30,
  "250 ml": 50,
  "500 ml": 90,
  "1 liter": 190,
  "5 liter": 600,
};

export const getPrice = (size) => {
  return config[size];
};



export const CATEGORY_MENU = [
  { id: 1, title: "All", name: "" },
  {
    id: 2,
    title: "Liquid Detergent",
    name: "detergent",
    similar: ["dishWasher", "detergent"],
    otherRelated: ["floorCleaner", "toiletCleaner"]
  },
  {
    id: 3,
    title: "Hand Wash",
    name: "handWash",
    similar: ["toiletCleaner", "glassCleaner"],
    otherRelated: ["floorCleaner", "dishWasher"]
  },
  {
    id: 4,
    title: "Floor Cleaner",
    name: "floorCleaner",
    similar: ["detergent", "toiletCleaner"],
    otherRelated: ["glassCleaner", "dishWasher"]
  },
  {
    id: 5,
    title: "Dish Washer",
    name: "dishWasher",
    similar: ["detergent", "handWash"],
    otherRelated: ["floorCleaner", "glassCleaner"]
  },
  {
    id: 6,
    title: "Toilet Cleaner",
    name: "toiletCleaner",
    similar: ["floorCleaner", "handWash"],
    otherRelated: ["detergent", "dishWasher"]
  },
  {
    id: 7,
    title: "Glass Cleaner",
    name: "glassCleaner",
    similar: ["toiletCleaner", "floorCleaner"],
    otherRelated: ["detergent", "dishWasher"]
  }
];

export const flattenProductSizes = (products) =>
  products.flatMap((product) =>
    product.size.map((size) => ({
      id: product.id,
      name: product.title, // Updated to use `title` as product name
      description: product.productDescription, // Assuming you want the full description
      categoryId: product.categoryId,
      category: product.type, // Updated to use `type` as the category
      size: size, // Size directly from the array
      price: product.price[size], // Getting price by size
      image: product.img[size], // Getting image based on the size
      inStock: true, // Placeholder for stock info (update this if you have stock data)
      discountPercentage: 0, // Placeholder for discount (you can modify this if needed)
      ratingCount: product.ratingCount,
      averageRating: product.averageRating
    }))
  );
