const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
/**
 * logs each item name to the console
 */
const itemName = products.forEach((item) => {
  console.log(item.product);
});

/**
 * filters out names with 6 or more characters
 */
const filterLongName = products.filter((item) => item.product.length <= 5);

/**
 * converts prices that are strings to numbers using filter()
 * removes all products from the array that do not have prices using map()
 * combined price of all remaining products using reduce()
 */
const finalOutcome = products
  .filter((item) => item.price !== "" && !isNaN(item.price))
  .map((item) => ({ ...item, price: Number(item.price) }))
  .reduce((total, item) => total + item.price, 0);

/**
 * concatenates all product names using reduce()
 */
const concatenate = products.reduce(
  (names, item) => names + " " + item.product,
  ""
);

/**
 * calculates both highest and lowest-priced items
 */
const { highestProduct, lowestProduct } = products.reduce(
  (acc, product) => {
    if (product.price > acc.highestPrice) {
      acc.highestPrice = product.price;
      acc.highestProduct = product.product;
    }
    if (product.price < acc.lowestPrice) {
      acc.lowestPrice = product.price;
      acc.lowestProduct = product.product;
    }
    return acc;
  },
  { highestPrice: -Infinity, lowestPrice: Infinity }
);

/**
 * creates exact same values with object keys changing names using
 * object.entries() and reduce()
 */
const newNames = products.reduce((acc, item) => {
  const newItem = Object.entries(item).reduce((obj, [key, value]) => {
    if (key === "product") {
      obj.name = value;
    } else if (key === "price") {
      obj.cost = value;
    } else {
      obj[key] = value;
    }
    return obj;
  }, {});
  acc.push(newItem);
  return acc;
}, []);

console.log(filterLongName, finalOutcome, concatenate, {
  highestProduct,
  lowestProduct,
  newNames,
});
