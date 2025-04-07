import { Fragment, useState } from "react";
import Input from "../components/ui/Input"
import Button from "../components/ui/Button";
import {Link} from "react-router-dom";
import { LOGIN_FORM } from "../data";

import InputErrorMessage from "../components/ui/InputErrorMessage";



const LoginPage = () => {




  const renderFormInput = LOGIN_FORM.map(({name,placeholder,type,validation},idx)=>(
    <Fragment key={idx}>
      <Input placeholder={placeholder} type={type} className="focus:border-[#1a0c31] focus:ring-1 focus:ring-[#1a0c31] hover:border-[#000000de] " />
    </Fragment>
  ))
  return (
    <div className=" text-center flex flex-col min-h-[600px] justify-center max-w-sm mx-auto">
      <div className="flex flex-col gap-2">
         <h2 className="font-semibold text-xl">Login</h2>
         <p>Please fill in the information below</p>
      </div>
      <form  className=" w-full flex flex-col items-center gap-4 mt-3" >
      {renderFormInput}

      <Button>Login</Button>
    </form>

    <p className="mt-6 tracking-wide text-sm">Don't have an account? <Link to="/register" className="ml-2 font-semibold">Create One</Link></p>
    </div>
  )
}

export default LoginPage