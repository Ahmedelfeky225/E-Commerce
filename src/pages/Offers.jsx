import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../app/features/product/productSlice";
import ProductCard from "../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OfferPage = () => {
  const numberOfProducts = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const offers = allProducts.filter(
    (product) => product.discountPercentage > 0
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const indexOfLastProduct = currentPage * numberOfProducts;
  const indexOfFirstProduct = indexOfLastProduct - numberOfProducts;
  const currentProducts = offers.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProduct = offers.length;
  const totalPages = Math.ceil(totalProduct / numberOfProducts);
  console.log("Number Of Page", totalPages);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(numberOfProducts)].map((_, index) => (
            <div
              key={index}
              className="w-[180px] h-[140px] bg-gray-100 animate-pulse rounded-md"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 min-h-screen">{error}</div>;
  }
  return (
    <div className="mt-20 container mx-auto  max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl  my-4">
      <h2 className="font-bold text-xl mb-3">Products ({offers.length})</h2>
      {currentProducts.length > 0 ? (
        <ul
          className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-6
        "
        >
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>No Products discounts</p>
      )}

      {offers.length > 0 && (
        <div className="flex justify-center gap-2 md:gap-3 items-center mt-8 w-[90%] mx-auto">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#eee] hover:bg-[#ddd] text-gray-900"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`px-0 md:px-2 text-lg font-medium ${
                    currentPage === pageNumber
                      ? "border-black border-b-2 text-black dark:border-gray-300 dark:text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#eee] hover:bg-[#ddd] text-gray-900"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default OfferPage;
