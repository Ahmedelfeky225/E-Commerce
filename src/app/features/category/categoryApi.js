const baseUrl = import.meta.env.VITE_BASE_URL; // استخدم import.meta.env بدلاً من process.env في Vite

export const getCategories = async () => {
    const res = await fetch(`${baseUrl}/products/category-list`);
    const data = await res.json();
    return data;
};
