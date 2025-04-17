import { Fragment, useRef, useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_FORM } from "../data";

import InputErrorMessage from "../components/ui/InputErrorMessage";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      toast.success("Logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className=" text-center flex flex-col min-h-[600px] justify-center max-w-sm mx-auto px-[10px]">
      <div className="flex flex-col gap-2">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 shadow-sm">
            {error}
          </div>
        )}
        <h2 className="font-semibold text-xl">Login</h2>
        <p>Please fill in the information below</p>
      </div>
      <form
        className=" w-full flex flex-col items-center gap-6 mt-3"
        onSubmit={handleSubmit}
      >
        <Input type="email" placeholder="Email" ref={emailRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />

        <Button disabled={loading}>{loading ? "Loading..." : "Login"}</Button>
      </form>
      <Link
        to="/auth/forgot-password"
        className="text-center underline mt-4 text-sm text-blue-600 hover:text-blue-800 "
      >
        Forgot Password
      </Link>
      <p className="mt-4 tracking-wide text-sm">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="ml-2 font-semibold relative text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all duration-500 ease-in-out group inline-block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Create One
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-blue-600 dark:bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
