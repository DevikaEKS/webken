import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validate = async() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{8,}$/;

    if (!emailRegex.test(username)) {
      toast.error('Invalid email format');
      return false;
    }

    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 8 characters');
      return false;
    }

    const response = await axios.post("http://localhost:3000/api/v1/admin/login",{
        username,
        password
    })

    if(response.status === 200){
        toast.success('Login successful!');
        localStorage.setItem("status","logined")
        return true;
    }else{
        toast.error(response.data.message)
    }

    
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-[#001040] font-normal">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Username (Email)</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="admin@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#001040] text-white py-2 rounded cursor-pointer transition duration-200"
        >
          Login
        </button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default Adminlogin;