import { X } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagSelector, removeItemFormBag } from '../app/features/bag/BagSlice'
import { calculateDiscountPrice, limitTitleLength } from '../utils/functions'
import { updateItemQty } from '../app/features/bag/BagSlice'
import Button from '../components/ui/Button'

const Drawer = ({ onClose }) => {
    const {bagItems} = useSelector(bagSelector)
    const dispatch = useDispatch()

    const totalPrice = bagItems.reduce((sum, product) => {
        return sum + product.qty * Number(calculateDiscountPrice(product.price, product.discountPercentage));
      }, 0);

    console.log(bagItems)
  return (
    <div className="fixed inset-0 z-[999]">
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Drawer Content */}
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg transition-transform duration-300 py-4">
        <div className="flex justify-between items-center mb-4 px-6">
          <h2 className="text-2xl font-bold"> Bag</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl font-bold"
          >
           <X/>
          </button>
        </div>        {/* Drawer body content here */}
        <div className='px-0 py-7 h-[75%] overflow-y-auto flex flex-col gap-6 border-t border-b'>
          {bagItems.length >= 1 ? bagItems.map((product)=>(
            <div key={product.id} className='flex items-center p-2'>
                <img className='w-32' src={product.thumbnail} alt="" />
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-1 ml-6' >
                    <h2>{limitTitleLength(product.title)}</h2>
                     <div className="flex items-center gap-14 ">
                              {Math.round(product.discountPercentage) ? (
                                <span className=" text-[13px]">
                                  {calculateDiscountPrice(product.price, product.discountPercentage)} KWD
                                </span>
                              ) : null}
                              {Math.round(product.discountPercentage) ? (
                                <span className="text-gray-400 line-through text-[13px]">
                                  {product.price} KWD
                                </span>
                              ) : (
                                <span className="text-gray-900 text-[15px]">{product.price} KWD</span>
                              )}
                     </div>
                    </div>
                        <div className="flex items-center gap-4 ml-6">
                            <div className='border h-10 w-28 p-2 flex items-center justify-around'>
                                    <span className='cursor-pointer' onClick={() => dispatch(updateItemQty({id:product.id,amount:-1}))}>-</span>
                                    <span>{product.qty}</span>
                                    <span className='cursor-pointer'  onClick={()=>dispatch(updateItemQty({id:product.id,amount:1}))}>+</span>
                            </div>
                            <span className='text-[13px] underline font-semibold cursor-pointer' onClick={()=>dispatch(removeItemFormBag(product))}>Remove</span>
                        </div>
                </div>
            </div>
        )) : <span className='text-center text-lg text-gray-500'>There are no data yet</span>}
        </div>

        <div className="checkout p-6 my-6">
            <Button disabled = {bagItems.length === 0}>Checkout {bagItems.length > 0 ? `- ${totalPrice.toFixed(2)} KWD` : ''} </Button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
