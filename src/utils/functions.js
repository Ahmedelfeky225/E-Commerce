export const calculateDiscountPrice = (price, discountPercentage) => {
  if (!discountPercentage) return price;
  return (price - (price * discountPercentage) / 100).toFixed(2);
};

export const limitTitleLength = (title, maxLength = 20) => {
  if (title.length > maxLength) {
    return `${title.slice(0, maxLength)}...`;
  }
  return title;
};

export const addItemsToShoppingBag = (bagItems, product) => {
  //** exists => increase qty */
  const exists = bagItems.find((item) => item.id === product.id);
  console.log(exists);

  if (exists) {
    return bagItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  //** not exist add The Product */

  return [...bagItems, { ...product, qty: 1 }];
};
