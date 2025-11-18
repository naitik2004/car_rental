import React, { useEffect, useState } from "react";
import { addCar, getMyCars } from "../api/cars";

interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  type?: string;
  seats?: number;
  pricePerDay: number;
  location?: string;
  imageUrl?: string;
  availability: boolean;
}

const AdminDashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    model: "",
    type: "",
    seats: "",
    pricePerDay: "",
    location: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // Fetch admin's cars
  const fetchCars = async () => {
    try {
      if (!token) return;
      const res = await getMyCars(token);
      setCars(res);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  //  Handle add car form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!token) return;
      await addCar(token, form);
      setForm({
        name: "",
        brand: "",
        model: "",
        type: "",
        seats: "",
        pricePerDay: "",
        location: "",
        imageUrl: "",
      });
      fetchCars();
      alert("Car added successfully ");
    } catch (error) {
      console.error("Error adding car:", error);
      alert("Failed to add car ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🚗 Admin Dashboard</h1>

      {/* Add Car Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto mb-10 space-y-4"
      >
        <h2 className="text-xl font-semibold mb-2">Add a New Car</h2>
        <div className="grid grid-cols-2 gap-4">
          {["name", "brand", "model", "type", "seats", "pricePerDay", "location", "imageUrl"].map(
            (field) => (
              <input
                key={field}
                type={field === "pricePerDay" || field === "seats" ? "number" : "text"}
                name={field}
                value={(form as any)[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              />
            )
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold"
        >
          {loading ? "Adding..." : "Add Car"}
        </button>
      </form>

      {/* Display Cars */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={car.id} className="bg-gray-900 p-4 rounded-lg shadow-md space-y-2">
              {car.imageUrl && (
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
              <h3 className="text-lg font-bold">{car.brand} {car.model}</h3>
              <p className="text-gray-400">Type: {car.type || "N/A"}</p>
              <p className="text-gray-400">Seats: {car.seats || "-"}</p>
              <p className="text-gray-400">Price: ₹{car.pricePerDay}/day</p>
              <p className={`text-sm ${car.availability ? "text-green-400" : "text-red-400"}`}>
                {car.availability ? "Available" : "Not Available"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No cars added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
