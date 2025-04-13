import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ChevronLeft } from "lucide-react";

const BrandProductsPage = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const { brandName } = useParams();
  const [error, setError] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const navigate = useNavigate();

  console.log(brandName);

  const fetchBrandProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${brandName}`
      );
      const data = await res.json();
      const products = data.products.filter(
        (product) =>
          product.brand &&
          product.brand.toLowerCase() === brandName.toLowerCase()
      );
      setBrandProducts(products);
      console.log(
        `Selected Brand: ${brandName}, Found Products: ${products.length}`
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchBrandProducts();
  }, [brandName]);

  if (error) {
    return (
      <div className="text-center text-red-500 min-h-screen">
        {error.message}
      </div>
    );
  }
  if (loadingProducts) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading products...</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mt-10 mb-10">
      <div className="mt-20 mb-5">
        <button
          onClick={() => navigate("/brands")}
          className="w-fit bg-[#eee] hover:bg-[#ddd] text-gray-900 rounded-full pl-2 pr-4 py-1 flex justify-center items-center"
        >
          <ChevronLeft />
          Back to Brands
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {brandProducts.length > 0 ? (
          brandProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))
        ) : (
          <div className="w-full min-h-screen flex justify-center items-center pt-14">
            <p>No products available for this brand.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProductsPage;
