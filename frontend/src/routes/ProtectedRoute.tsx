import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "USER" | "ADMIN";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // 1️⃣ Not logged in → redirect to /login
  if (!token) return <Navigate to="/login" replace />;

  // 2️⃣ Logged in but role doesn’t match the required one
  if (requiredRole && role !== requiredRole) {
    // 👇 Send them to their correct dashboard
    return role === "ADMIN" ? (
      <Navigate to="/admin-dashboard" replace />
    ) : (
      <Navigate to="/dashboard" replace />
    );
  }

  // 3️⃣ Otherwise → access granted
  return <>{children}</>;
};

export default ProtectedRoute;
