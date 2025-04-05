const baseUrl = import.meta.env.VITE_BASE_URL;

// جلب المنتجات حسب الفئة
export const getProducts = async (category) => {
  const res = await fetch(
    category
      ? `${baseUrl}/products/category/${category}?limit=0`
      : `${baseUrl}/products?limit=0`
  );
  const data = await res.json();
  return Array.isArray(data.products) ? data.products : [];
};


export const getProductById = async (id) => {
  const res = await fetch(`${baseUrl}/products/${id}`);
  const data = await res.json();
  return data;
};
