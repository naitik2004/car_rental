import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ✅ Only logged-in users can access dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requiredRole="USER">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* ✅ Optional admin route for later */}
      {/* 
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      /> 
      */}

      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
