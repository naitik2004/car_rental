// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard: React.FC = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Welcome to AutoReserve 🚗</h1>
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;




import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
