import Input from "../components/ui/Input";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const googleFontsLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
    rel="stylesheet"
  />
);

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterBrands, setFilterBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const brandsPerPage = 12;
  const navigate = useNavigate();

  const getBrands = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products?limit=194&select=brand,images,title"
      );
      const data = await res.json();
      const products = data.products.filter((product) => product.brand);
      const uniqueBrands = [
        ...new Set(products.map((product) => product.brand)),
      ];
      setBrands(uniqueBrands);
      setFilterBrands(uniqueBrands);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  const handleSearchQuery = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = brands.filter((brand) =>
      brand.toLowerCase().includes(query)
    );
    setFilterBrands(filtered);
    setCurrentPage(1);
  };

  const indexOfLastBrand = currentPage * brandsPerPage;
  const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
  const currentBrands = filterBrands.slice(indexOfFirstBrand, indexOfLastBrand);
  const totalPages = Math.ceil(filterBrands.length / brandsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBrandClick = (brandName) => {
    navigate(`/brands/${brandName}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-[180px] h-[140px] bg-gray-100 dark:bg-gray-700 animate-pulse rounded-md"
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
    <div className="flex flex-col">
      {googleFontsLink}
      <div className="mt-20 mb-6 container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <button
          onClick={() => navigate(-1)}
          className="w-fit bg-[#eee] hover:bg-[#ddd] text-gray-900 rounded-full pl-2 pr-4 py-1 flex justify-center items-center"
        >
          <ChevronLeft />
          Back
        </button>
      </div>
      <div>
        <img
          src="https://briggekw.com/_next/image/?url=https%3A%2F%2Fbridgeskw.s3.eu-north-1.amazonaws.com%2FsuperDeals%2F2024-02-06-02-59-39-065c21f2b528ca.png&w=1920&q=75"
          alt=""
          className="w-full lg:h-[85vh]"
        />
      </div>
      <div className="container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mt-10 mb-10">
        <div className="flex justify-end">
          <div className="relative flex items-center gap-3 md:w-[30%] mb-5 self-end">
            <Input
              type="text"
              placeholder="Search "
              className="focus:!border-[#c4c4c4] focus:!ring-0 focus:!ring-[#c4c4c4] pl-10 "
              value={searchQuery}
              onChange={handleSearchQuery}
            />
            <span className="absolute left-2 top-[50%] -translate-y-[50%]">
              <Search className="text-[#c4c4c4]" size={20} />
            </span>
          </div>
        </div>
        <ul className="w-full flex flex-wrap gap-4 justify-center">
          {currentBrands.length > 0 ? (
            currentBrands.map((brand, index) => (
              <li
                key={index}
                onClick={() => handleBrandClick(brand)}
                className="bg-[#25104912] w-[180px] md:w-[200px] h-[200px] p-3 border border-gray-200 flex justify-center items-center rounded-md text-2xl font-bold text-gray-800 text-center hover:bg-[#25104923] hover:scale-105 cursor-pointer transition-all duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  fontFamily: "Anton",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  transform: "skew(-3deg)",
                }}
              >
                {brand && (
                  <span style={{ transform: "skew(3deg)" }}>{brand}</span>
                )}
              </li>
            ))
          ) : searchQuery ? (
            <div className="w-full flex justify-center items-center pt-14">
              <img
                src="/images/empty-search.576b99d7.svg"
                className="md:w-[30%] object-cover"
              />
            </div>
          ) : (
            <div>No Available Brands</div>
          )}
        </ul>
        {filterBrands.length > 0 && (
          <div className="flex justify-center items-center gap-3 mt-8">
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
            <div className="flex">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`px-4 text-lg font-medium ${
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
    </div>
  );
};

export default BrandsPage;
