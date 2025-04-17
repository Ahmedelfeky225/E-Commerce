import { Share2 } from "lucide-react";
import { calculateDiscountPrice, limitTitleLength } from "../utils/functions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToBagAction } from "../app/features/bag/bagSlice";
import { toast } from "react-toastify";
import { t } from "i18next";
const ProductCard = ({ product }) => {
  const { id, thumbnail, discountPercentage, brand, title, price } = product;
  const dispatch = useDispatch();
  const addProductToBag = () => {
    dispatch(addItemToBagAction(product));
    toast.success("Product added successfully to Bag", {
      icon: "✅",
      style: {
        border: "none",
        background: "#fff",
        color: "#4c1d95",
      },
      hideProgressBar: true,
      closeButton: false,
    });
  };
  return (
    <div className="card overflow-hidden relative hover:scale-110 transition duration-300 flex flex-col pb-4   dark:bg-gray-900 dark:rounded-sm dark:border dark:border-gray-800">
      <div className="dark:bg-[#3a3a3a3e] bg-[#3a3a3a0e]">
        <Link to={`/product/${id}`} reloadDocument>
          <img
            src={thumbnail}
            alt={`Image of ${title}`}
            className="w-full h-48 object-cover p-4"
          />
        </Link>
      </div>
      {Math.round(discountPercentage) ? (
        <span className="text-xs leading-4 font-medium bg-red-500 dark:bg-yellow-600 dark:text-black w-fit text-white px-3 py-1 z-30 absolute right-0 top-8 -rotate-90">
          {Math.round(discountPercentage)}% OFF
        </span>
      ) : null}
      <div className=" h-full flex flex-col gap-4 mt-3">
        <div className="flex flex-col flex-1 px-3">
          <h3 className="text-[15px] sm:text-base  font-semibold text-gray-900 uppercase leading-normal dark:text-white tracking-widest">
            {brand}
          </h3>
          <h2 className="mt-1 text-[13px] text-[#666] uppercase tracking-widest leading-normal dark:text-[#ccc] ">
            {limitTitleLength(title)}
          </h2>
        </div>
        <div className="flex items-center gap-2 px-3">
          {Math.round(discountPercentage) ? (
            <span
              className="text-red-600 dark:text-yellow-600
             text-[15px]"
            >
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

        <div className="flex items-center gap-3 px-3">
          <button
            className="text-[12px] sm:text-base bg-[#230b45] dark:bg-yellow-600 hover:bg-[#230b45e3] dark:hover:bg-yellow-500 text-white py-2 px-4 font-medium w-full  dark:text-black"
            onClick={addProductToBag}
          >
            {t("Buy Now")}
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
