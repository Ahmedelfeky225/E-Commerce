import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById, clearSelectedProduct } from "../app/features/product/productSlice";
import { calculateDiscountPrice } from "../utils/functions";
import { ChevronLeft } from "lucide-react";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct: product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-lg">Product not found</p>;
  }

  return (
    <div className="pt-[5.5rem] px-4 pb-5 container mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col">
      <button onClick={() => navigate(-1)} className="w-fit mb-4 mt-4 bg-[#eee] hover:bg-[#ddd] text-gray-900 rounded-full pl-2 pr-4 py-1 flex justify-center item-center">
        <ChevronLeft />
        Back
      </button>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* left Section */}
        <div className="lg:w-[60%] lg:h-[600px] bg-white shadow-md flex flex-col justify-center items-center relative cursor-zoom-in overflow-hidden">
        <InnerImageZoom
                  className="w-full h-auto object-contain"
                        src={product.thumbnail}
                        zoomScale={1.3}
                        hideCloseButton={true}
        />
        </div>
        {/* left Section */}

        {/* Right Section */}
        <div className="lg:w-[40%] flex flex-col gap-5">
          <p className="text-lg text-gray-700 uppercase leading-9 tracking-wider font-semibold">{product.brand}</p>
          <h1 className="text-2xl font-bold uppercase leading-9 tracking-wider">{product.title}</h1>
          <div className="flex items-center gap-3 text-[24px]">
            {Math.round(product.discountPercentage) ? (
              <span className="text-red-600 text-[24px]">
                {calculateDiscountPrice(product.price, product.discountPercentage)} KWD
              </span>
            ) : null}
            {Math.round(product.discountPercentage) ? (
              <span className="text-gray-400 line-through text-[24px]">
                {product.price} KWD
              </span>
            ) : (
              <span className="text-gray-900 text-[15px]">{product.price} KWD</span>
            )}

            {product.discountPercentage > 0 && (
              <span className="text-red-500 text-sm bg-[#f94c4340] inline-block py-1 px-3 rounded-md">{Math.round(product.discountPercentage)}% OFF</span>
            )}
          </div>
          <div>
            <h2 className="uppercase font-semibold">Product Description</h2>
            <p className="text-gray-500 text-[14px] leading-[1.8] mt-2 mb-5">{product.description || "No description available"}</p>
          </div>
        </div>
        {/* Right Section */}
      </div>
    </div>
  );
};

export default ProductDetails;
