import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (form: { email: string; password: string }) => {
    try {
      const res = await login(form.email, form.password);

      // If no response or no token
      if (!res || !res.token) {
        alert("Invalid response from server");
        return;
      }

      // Safe access to res.user
      const userRole = res.user?.role ?? "USER";

      // Save token + role
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", userRole);

      // Redirect based on role
      navigate(userRole === "ADMIN" ? "/admin-dashboard" : "/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white space-y-4">
      <h1 className="text-3xl font-bold mb-4">Welcome Back 👋</h1>
      <AuthForm title="Login" onSubmit={handleLogin} />
      <p className="text-sm text-gray-400">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-400 hover:underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;
