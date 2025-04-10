import { createSlice } from "@reduxjs/toolkit";
import { addItemsToShoppingBag } from "../../../utils/functions";


const initialState =  {
    bagItems:[]
}


const bagSlice = createSlice({
    name:"bag",
    initialState,
    reducers:{
        addItemToBagAction:(state,actionPayload)=>{
            state.bagItems= addItemsToShoppingBag(state.bagItems,actionPayload.payload)
        }, 
        updateItemQty: (state, action) => {
            const {id,amount} = action.payload
            state.bagItems= state.bagItems.map((item)=>{
                if(item.id === id){
                    console.log(item.id)
                    console.log(id)
                    const newQty = item.qty + amount
                    console.log(newQty)
                    return {...item, qty:newQty > 1 ? newQty : 1}
                }
                return item
            })
          },
          removeItemFormBag:(state,action)=>{
            state.bagItems= state.bagItems.filter(item=>item.id !== action.payload.id )
          }
          
    },
})

export const {addItemToBagAction,updateItemQty,removeItemFormBag} = bagSlice.actions;

export const bagSelector = ({bag}) => bag;

export default bagSlice.reducer