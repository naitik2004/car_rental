import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = async (form: { name?: string; email: string; password: string }) => {
    try {
      const res = await signup(form.name || "", form.email, form.password);
      alert(res.message);
      if (res.message === "User registered") navigate("/login");
    } catch (err: unknown) {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white space-y-4">
      <h1 className="text-3xl font-bold mb-4">Join AutoReserve 🚗</h1>
      <AuthForm title="Sign Up" onSubmit={handleSignup} includeName />
      <p className="text-sm text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Signup;
