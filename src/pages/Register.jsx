import {Link} from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";

const RegisterPage = () => {
     const [email, setEmail] = useState("");
    
      const handleInputChange = (e) => {
        setEmail(e.target.value); // تحديث القيمة عند تغيير الإدخال
      };
  return (
    <div className="text-center flex flex-col min-h-[600px] justify-center w-full max-w-[400px] mx-auto">
    <div className="flex flex-col gap-2">
       <h2 className="font-semibold text-xl">Register</h2>
       <p>Please fill in the information below</p>
    </div>
    <form action="" className=" w-full flex flex-col items-center gap-4 mt-3">
    <Input 
      type="text"
      placeholder="Username"
      value={email} 
      onChange={handleInputChange} 
      className="focus:border-[#1a0c31] focus:ring-1 focus:ring-[#1a0c31] hover:border-[#000000de]"
    />

      <Input 
      type="email"
      placeholder="Email"
      value={email} 
      onChange={handleInputChange} 
    />
        <Input 
      type="password"
      placeholder="Password"
      value={email} 
      onChange={handleInputChange} 
    />

    <Button>Login</Button>
  </form>

  <p className="mt-6 tracking-wide text-sm">Have an account? <Link to="/login" className="ml-2 font-semibold">Login Now</Link></p>
  </div>
  )
}

export default RegisterPage;;