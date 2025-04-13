import { forwardRef } from "react";

const Input = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={`border-[1px] border-[#c4c4c4] shadow-sm focus:outline-none  text-md w-full bg-transparent  p-[10pX] ${className}`}
      {...rest}
    />
  );
});
export default Input;
