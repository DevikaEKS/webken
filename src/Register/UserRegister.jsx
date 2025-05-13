import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Userregistration() {
   const navigate = useNavigate() 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    retypePassword: '',
  });

  const [errors, setErrors] = useState({});

  const regex = {
    name: /^[A-Za-z. ]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[1-9]\d{1,14}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ // at least 8 chars, letters and numbers
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    switch (name) {
      case 'firstName':
      case 'lastName':
        setErrors((prev) => ({
          ...prev,
          [name]: regex.name.test(value) ? '' : 'Enter a valid Name',
        }));
        break;
      case 'email':
        setErrors((prev) => ({
          ...prev,
          email: regex.email.test(value) ? '' : 'Enter a valid email address',
        }));
        break;
      case 'phone':
        setErrors((prev) => ({
          ...prev,
          phone: regex.phone.test(value) ? '' : 'Enter a valid Mobile number',
        }));
        break;
      case 'password':
        setErrors((prev) => ({
          ...prev,
          password: regex.password.test(value)
            ? ''
            : 'Password must be at least 8 characters and include letters and numbers',
          retypePassword:
            value === formData.retypePassword ? '' : 'Passwords do not match',
        }));
        break;
      case 'retypePassword':
        setErrors((prev) => ({
          ...prev,
          retypePassword:
            value === formData.password ? '' : 'Passwords do not match',
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((msg) => msg !== '');
    const isEmptyField = Object.values(formData).some((v) => v.trim() === '');

    if (hasErrors || isEmptyField) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/user/register',
        payload
      );
      toast.success('User registered successfully!');
      navigate("/login")
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        retypePassword: '',
      });
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || 'Registration failed. Try again.'
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-[#001040] mb-6">
          User Registration
        </h2>

        {/* First Name */}
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        {/* Last Name */}
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Phone */}
        <InputField
          label="Mobile Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        {/* Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* Retype Password */}
        <InputField
          label="Retype Password"
          name="retypePassword"
          type="password"
          value={formData.retypePassword}
          onChange={handleChange}
          error={errors.retypePassword}
        />

        <button
          type="submit"
          className="w-full bg-[#001040] text-white py-2 rounded font-semibold hover:bg-[#001060] transition duration-300"
        >
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

// Reusable InputField component
const InputField = ({ label, name, value, onChange, error, type = 'text' }) => (
  <div className="mb-4">
    <label className="block font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border ${
        error ? 'border-red-500' : 'border-gray-300'
      } rounded focus:outline-none focus:ring-2 focus:ring-[#001040]`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Userregistration;
