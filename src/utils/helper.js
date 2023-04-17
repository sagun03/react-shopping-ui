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
