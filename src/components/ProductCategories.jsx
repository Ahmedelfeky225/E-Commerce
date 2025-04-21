import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/features/product/productSlice";
import ProductCard from "./ProductCard";
import SkeletonLoader from "./SkeletonLoader";
import { t } from "i18next";
import { motion } from "framer-motion";

const ProductCategories = () => {
  const dispatch = useDispatch();
  const { productsByCategory, loading: productsLoading } = useSelector(
    (state) => state.products
  );

  const categories = ["fragrances", "sports-accessories", "laptops"];

  useEffect(() => {
    categories.forEach((category) => {
      if (!productsByCategory[category]) {
        dispatch(fetchProducts(category));
      }
    });
  }, [dispatch, productsByCategory]);

  return (
    <div className="space-y-10">
      {categories.map((category) => {
        const categoryProducts = productsByCategory[category] || [];

        return (
          <section key={category} className="pb-6">
            <h2 className="text-2xl font-bold capitalize mb-6 text-gray-800 pb-2 dark:text-gray-300">
              {t(category.replace("-", " "))}
            </h2>
            {productsLoading && !categoryProducts.length ? (
              <SkeletonLoader />
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
                {categoryProducts.slice(0, 10).map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "linear",
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ProductCategories;
