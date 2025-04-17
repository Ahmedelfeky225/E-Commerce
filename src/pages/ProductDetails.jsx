import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchProductById,
  clearSelectedProduct,
} from "../app/features/product/productSlice";
import { calculateDiscountPrice } from "../utils/functions";
import { ChevronLeft, Expand, X } from "lucide-react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    selectedProduct: product,
    loading,
    error,
  } = useSelector((state) => state.products);

  // حالة للتحكم في وضع ملء الشاشة
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-lg">Product not found</p>;
  }

  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0]
      : product.thumbnail;

  return (
    <div className="pt-[5.5rem] px-4 pb-5 container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="w-fit mb-4 mt-4 bg-[#eee] hover:bg-[#ddd] text-gray-900 rounded-full pl-2 pr-4 py-1 flex justify-center item-center"
      >
        <ChevronLeft />
        Back
      </button>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* left Section */}
        <div className="lg:w-[60%] lg:h-[600px] bg-white dark:bg-gray-900 dark:border dark:border-gray-800 shadow-md relative cursor-zoom-in flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-[80%]">
              <InnerImageZoom
                className="w-full h-full"
                src={imageSrc}
                zoomSrc={imageSrc}
                zoomScale={1.3}
                hideCloseButton={true}
                imgAttributes={{
                  className: "object-cover w-full h-full object-center",
                }}
                width={600}
                height={600}
                hasSpacer={true}
                zoomPreload={true}
              />
            </div>
            <button
              onClick={openFullscreen}
              className="absolute top-2 right-2 bg-gray-800 text-white p-[5px] rounded-md hover:bg-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              <Expand
                size={30}
                className="border-gray-100 border-2 rounded-md p-[2px]"
              />
            </button>
          </div>
        </div>
        {/* left Section */}

        {/* Right Section */}
        <div className="lg:w-[40%] flex flex-col gap-5">
          <p className="text-lg text-gray-700 uppercase leading-9 tracking-wider font-semibold dark:text-white">
            {product.brand}
          </p>
          <h1 className="text-2xl font-bold uppercase leading-9 tracking-wider">
            {product.title}
          </h1>
          <div className="flex items-center gap-3 text-[24px]">
            {Math.round(product.discountPercentage) ? (
              <span className="text-red-600 text-[24px] dark:text-yellow-600">
                {calculateDiscountPrice(
                  product.price,
                  product.discountPercentage
                )}{" "}
                KWD
              </span>
            ) : null}
            {Math.round(product.discountPercentage) ? (
              <span className="text-gray-400 line-through text-[24px]">
                {product.price} KWD
              </span>
            ) : (
              <span className="text-gray-900 text-[24px]">
                {product.price} KWD
              </span>
            )}

            {Math.round(product.discountPercentage) > 0 && (
              <span className="text-red-500 dark:text-yellow-600 dark:bg-[#c3905d6d] text-sm bg-[#f94c4340] inline-block py-1 px-3 rounded-md">
                {Math.round(product.discountPercentage)} % -
              </span>
            )}
          </div>
          <div>
            <h2 className="uppercase font-semibold">Product Description</h2>
            <p className="text-gray-500 text-[14px] leading-[1.8] mt-2 mb-5">
              {product.description || "No description available"}
            </p>
          </div>
        </div>
        {/* Right Section */}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-[#ffffffe6] dark:bg-gray-800 bg-opacity-90 flex justify-center items-center z-50">
          <img
            src={imageSrc}
            alt="Fullscreen view"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
          <button
            onClick={closeFullscreen}
            className="absolute bottom-[10%] left-[50%] translate-x-[-50%] flex justify-center items-center scale-125 text-[#fff] w-[48px] h-[48px] p-2 rounded-full bg-[#230b45] hover:bg-[#230b45c4] focus:outline-none"
          >
            <X size={22} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
