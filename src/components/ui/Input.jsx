import { forwardRef } from "react";


const Input = forwardRef(({...rest},ref)=>{
    return (
        <input ref={ref} className="border-[1px] border-[#c4c4c4] shadow-sm focus:outline-none  focus:border-[#1a0c31] focus:ring-1 focus:ring-[#1a0c31] hover:border-[#000000de] p-[10px] text-md w-full bg-transparent" 
        {...rest}
        />
    )
})
export default Input;