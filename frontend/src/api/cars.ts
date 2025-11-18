import axios from "axios";
const API_URL = "http://localhost:3000/api/cars";

export const getAllCars = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getMyCars = async (token: string) => {
  const res = await axios.get(`${API_URL}/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addCar = async (token: string, carData: any) => {
  const res = await axios.post(API_URL, carData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
