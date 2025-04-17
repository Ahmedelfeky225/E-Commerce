import { X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bagSelector,
  removeItemFormBag,
  updateItemQty,
} from "../app/features/bag/bagSlice";
import { calculateDiscountPrice, limitTitleLength } from "../utils/functions";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const Drawer = ({ onClose, setDrawer }) => {
  const { bagItems } = useSelector(bagSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = bagItems.reduce((sum, product) => {
    return (
      sum +
      product.qty *
        Number(
          calculateDiscountPrice(product.price, product.discountPercentage)
        )
    );
  }, 0);

  return (
    <div className="fixed inset-0 z-[999]">
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 py-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-5 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t("Bag")}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black dark:hover:text-white text-2xl font-bold"
          >
            <X />
          </button>
        </div>

        {/* Bag Items */}
        <div className="px-5 py-4 flex-1 overflow-y-auto border-y dark:border-gray-700">
          {bagItems.length >= 1 ? (
            bagItems.map((product) => (
              <div key={product.id} className="flex gap-4 mb-6">
                <img
                  className="w-24 h-24 object-cover rounded"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                      {limitTitleLength(product.title)}
                    </h2>
                    <div className="flex items-center gap-3 mt-1">
                      {Math.round(product.discountPercentage) ? (
                        <>
                          <span className="text-sm text-green-600 font-semibold">
                            {calculateDiscountPrice(
                              product.price,
                              product.discountPercentage
                            )}{" "}
                            KWD
                          </span>
                          <span className="text-sm line-through text-gray-400">
                            {product.price} KWD
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-900 dark:text-white">
                          {product.price} KWD
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded w-24 h-9 px-2 justify-between text-sm">
                      <button
                        className="text-gray-600 dark:text-gray-300 hover:text-black"
                        onClick={() =>
                          dispatch(
                            updateItemQty({ id: product.id, amount: -1 })
                          )
                        }
                      >
                        -
                      </button>
                      <span className="font-medium">{product.qty}</span>
                      <button
                        className="text-gray-600 dark:text-gray-300 hover:text-black"
                        onClick={() =>
                          dispatch(updateItemQty({ id: product.id, amount: 1 }))
                        }
                      >
                        +
                      </button>
                    </div>
                    <span
                      className="text-xs underline text-red-500 cursor-pointer"
                      onClick={() => dispatch(removeItemFormBag(product))}
                    >
                      {t("Remove")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-300 mt-10">
              {t("There are no data yet")}
            </div>
          )}
        </div>

        {/* Checkout Button */}
        <div className="px-5 mt-4">
          <Button
            disabled={bagItems.length === 0}
            onClick={() => {
              navigate("/checkout/payment");
              setDrawer(false);
            }}
            className="w-full py-2 disabled:bg-gray-400 text-white dark:bg-gray-700 disabled:cursor-not-allowed  bg-gray-600
            hover:bg-gray-700
            "
          >
            {t("Checkout")}{" "}
            {bagItems.length > 0 ? ` ${totalPrice.toFixed(2)} KWD` : ""}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
