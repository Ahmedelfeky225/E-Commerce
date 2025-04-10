import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      toast.success("Registration successful! Welcome!");
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
    <div className="text-center flex flex-col min-h-screen justify-center w-full max-w-[400px] mx-auto">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 shadow-sm">
          {error}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Register</h2>
        <p>Please fill in the information below</p>
      </div>
      <form
        className=" w-full flex flex-col items-center gap-4 mt-3"
        onSubmit={handleSubmit}
      >
        <Input type="email" placeholder="Email" ref={emailRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />
        <Input
          type="password"
          placeholder="Confirmation Password"
          ref={passwordConfirmationRef}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>

      <p className="mt-6 tracking-wide text-sm">
        Have an account?{" "}
        <Link
          to="/auth/login"
          className="ml-2 font-semibold relative text-gray-600 hover:text-blue-600 transition-all duration-500 ease-in-out group inline-block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Login Now
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
