import React, { useState } from "react";

interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  title: string;
  onSubmit: (data: AuthFormData) => void | Promise<void>;
  includeName?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, onSubmit, includeName }) => {
  const [form, setForm] = useState<AuthFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-900 text-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      {includeName && (
        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            className="w-full bg-transparent border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-transparent border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full bg-transparent border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {title}
      </button>
    </form>
  );
};

export default AuthForm;
