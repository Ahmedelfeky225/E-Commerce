
export const calculateDiscountPrice = (price,discountPercentage)=>{
    if (!discountPercentage) return price;
    return  (price - (price * discountPercentage) / 100).toFixed(2)  
}