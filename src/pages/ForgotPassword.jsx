import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const ForgotPasswordPage = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return setError("Please enter your email");
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for a password reset link");
    } catch (err) {
      setError(err.message || "Failed to Reset Password");
    }
    setLoading(false);
  };

  return (
    <div className="text-center flex flex-col min-h-[600px] justify-center max-w-sm mx-auto">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 shadow-sm">
          {error}
        </div>
      )}
      {message && (
        <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
          {message}
        </div>
      )}
      <h2 className="font-semibold text-xl">Reset Password</h2>

      <form
        className="w-full flex flex-col items-center gap-6 mt-3"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button disabled={loading}>
          {loading ? "Loading..." : "Reset Password"}
        </Button>
      </form>
      <Link
        to="/auth/login"
        className={`text-center underline mt-4 text-sm text-blue-600 hover:text-blue-800 
        } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
      >
        Login
      </Link>
      <p className="mt-4 tracking-wide text-sm">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="ml-2 font-semibold relative text-gray-600 hover:text-blue-600 transition-all duration-500 ease-in-out group inline-block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Create One
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
