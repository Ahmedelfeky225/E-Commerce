
export const calculateDiscountPrice = (price,discountPercentage)=>{
    if (!discountPercentage) return price;
    return  (price - (price * discountPercentage) / 100).toFixed(2)  
}

export const limitTitleLength = (title,maxLength = 20)=>{
    if(title.length > maxLength){
        return `${title.slice(0,maxLength)}...`
    }
    return title
}