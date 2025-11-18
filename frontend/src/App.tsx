import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard"; 
import ProtectedRoute from "./routes/ProtectedRoute";

const App: React.FC = () => (
  <Router>
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ✅ User dashboard (for normal users) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requiredRole="USER">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* ✅ Admin dashboard (for admins only) */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch-all route — redirect unknown URLs to login */}
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
