import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // change after deploying
});

export interface AuthResponse {
  message: string;
  token?: string;
  user?: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

export const signup = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  const { data } = await API.post("/auth/signup", { name, email, password });
  return data;
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const { data } = await API.post("/auth/login", { email, password });
  return data;
};

