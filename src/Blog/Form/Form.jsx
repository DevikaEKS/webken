import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/api/v1/user/blog-form",formData);

    if(response.status === 200){
      alert("Form submitted successfully")
      setFormData({
        first_name : "",
        email : "",
        website : "",
        message : ""
      })
    }else{
      alert(response.data.message)
    }

    console.log("Form Data:", formData); 
  };

  return (
    <div className="w-full max-w-[442px] mx-auto p-7 bg-white rounded-2xl shadow-lg">
      <h2 className="text-center text-[20px] font-bold text-[#001040] mb-6">Leave a Reply</h2>

      <form className="space-y-5 font-medium" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm"
            placeholder="https://example.com (optional)"
          />
        </div>

        <div>
          <label className="block text-sm text-[15px] text-[#001040] mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#001040] shadow-sm resize-none"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-[166px] h-[42px] bg-[#001040] text-white hover:bg-[#112260] transition-colors py-2 rounded-md font-semibold shadow-md"
          >
            <span className="text-[#FFA200]">Post a Comment</span>
          </button>
        </div>
      </form>
    </div>
  );
}
