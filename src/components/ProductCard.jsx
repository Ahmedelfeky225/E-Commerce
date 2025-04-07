import {Share2 } from "lucide-react";
import { calculateDiscountPrice, limitTitleLength } from "../utils/functions";
import { Link } from "react-router-dom";

const ProductCard = ({ product: { id,thumbnail, discountPercentage, brand, title, price }}) => {
  return (
    <div className="overflow-hidden relative shadow-sm hover:scale-110 transition duration-300 flex flex-col pb-4 px-3">
     <Link to = {`/product/${id}`}>
        <img
          src={thumbnail}
          alt={`Image of ${title}`}
          className="w-full h-48 object-cover p-4"
        />
        
      </Link>
      {Math.round(discountPercentage) ? (
        <span className="text-xs leading-4 font-medium bg-red-500 w-fit text-white px-3 py-1 z-30 absolute right-0 top-8 -rotate-90">
          {Math.round(discountPercentage)}% OFF
        </span> 
      ) : null}
      <div className="h-full flex flex-col gap-4">
        <div className="flex flex-col flex-1">
          <h3 className="text-md font-semibold text-gray-900 uppercase leading-normal">
            {brand}
          </h3>
          <h2 className="mt-1 text-sm text-[#666] uppercase tracking-wider leading-normal">
            {limitTitleLength(title)}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {Math.round(discountPercentage) ? (
            <span className="text-red-600 text-[15px]">
              {calculateDiscountPrice(price, discountPercentage)} KWD
            </span>
          ) : null}
          {Math.round(discountPercentage) ? (
            <span className="text-gray-400 line-through text-[15px]">
              {price} KWD
            </span>
          ) : (
            <span className="text-gray-900 text-[15px]">{price} KWD</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[12px] sm:text-base bg-[#230b45] hover:bg-[#230b45e3] text-white py-2 px-4 font-medium w-full">
            Buy Now
          </button>
          <span className="border p-2 h-full flex justify-center items-center">
            <Share2 size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
