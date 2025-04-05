import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/features/product/productSlice";
import ProductCard from "./ProductCard";

const ProductCategories = () => {
  const dispatch = useDispatch();
  const { productsByCategory, loading: productsLoading } = useSelector((state) => state.products);

  // الكاتيجوريات المحددة
  const categories = ["womens-shoes", "sunglasses", "laptops"];

  useEffect(() => {
    categories.forEach((category) => {
      // جلب المنتجات فقط لو لسه ما اتجابتش
      if (!productsByCategory[category]) {
        dispatch(fetchProducts(category));
      }
    });
  }, [dispatch, productsByCategory]);

  return (
    <div className="space-y-10 p-2">
      {categories.map((category) => {
        const categoryProducts = productsByCategory[category] || []; // التأكد من وجود المنتجات

        return (
          <section key={category} className="pb-6">
            <h2 className="text-2xl font-bold capitalize mb-6 text-gray-800 pb-2">
              {category.replace("-", " ")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {productsLoading && !categoryProducts.length ? (
                [...Array(10)].map((_, i) => (
                  <div key={i} className="border overflow-hidden shadow-sm animate-pulse">
                    <div className="w-full h-52 bg-gray-300"></div>
                    <div className="p-4">
                      <div className="h-5 w-32 bg-gray-300 mb-2"></div>
                      <div className="h-4 w-20 bg-gray-300 mb-1"></div>
                      <div className="h-3 w-16 bg-gray-300"></div>
                    </div>
                    <div className="h-10 bg-gray-300"></div>
                  </div>
                ))
              ) : (
                categoryProducts.slice(0, 10).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductCategories;