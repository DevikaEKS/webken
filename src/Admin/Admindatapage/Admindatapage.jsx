import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admindatapage() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const generalLeads = [
    {
      name: "John Doe",
      phno: "1234567890",
      email: "john@example.com",
      company_name: "Tech Corp",
      company_site: "www.techcorp.com",
      message: "Looking for a demo."
    },
    {
      name: "Jane Smith",
      phno: "0987654321",
      email: "jane@example.com",
      company_name: "Innovate Ltd",
      company_site: "www.innovate.com",
      message: "Interested in partnership."
    }
  ];

  const webinarLeads = [
    {
      name: "Alice Johnson",
      phoneNumber: "1112223333",
      email: "alice@example.com",
      designation: "Manager",
      companyName: "Alpha Inc",
      date: "2024-05-01",
      slot: "10:00 AM",
      state: "California",
      city: "Los Angeles"
    },
    {
      name: "Bob Lee",
      phoneNumber: "4445556666",
      email: "bob@example.com",
      designation: "Engineer",
      companyName: "Beta Solutions",
      date: "2024-05-02",
      slot: "2:00 PM",
      state: "Texas",
      city: "Austin"
    }
  ];

  const ContactLeads = generalLeads;
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-3xl font-bold my-6">Leads Page</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6 border-b pb-4 flex-wrap">
        {["Blog", "Email Subscribers", "ContactLeads"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedCategory === category
                ? "bg-[#001040] text-white"
                : "bg-[white] border border-[#001040] text-[#001040]"
            }`}>
            {category}
          </button>
        ))}
        <button
          onClick={() => navigate("/books")}
          className="px-4 py-2 bg-[white] text-[#001040] border border-[#001040] rounded hover:bg-[#001040] hover:text-white cursor-pointer transition">
          Books
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50 cursor-pointer">
          Logout
        </button>
      </div>

      {/* Render lead tables conditionally */}
      {selectedCategory === "Blog" && (
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-4">General Leads</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-[#001040] text-white">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Company Website</th>
                  <th className="px-4 py-2 border">Message</th>
                </tr>
              </thead>
              <tbody>
                {generalLeads.map((lead, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2 border">{lead.name}</td>
                    <td className="px-4 py-2 border">{lead.email}</td>
                    <td className="px-4 py-2 border">{lead.company_site}</td>
                    <td className="px-4 py-2 border">{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedCategory === "Email Subscribers" && (
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Webinar Leads</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-[#001040] text-white">
                <tr>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                  <th className="px-4 py-2 border">Email</th>
                </tr>
              </thead>
              <tbody>
                {webinarLeads.map((lead, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2 border">{lead.name}</td>
                    <td className="px-4 py-2 border">{lead.name}</td>
                    <td className="px-4 py-2 border">{lead.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedCategory === "ContactLeads" && (
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Contact Leads</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-[#001040] text-white">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Company Website</th>
                  <th className="px-4 py-2 border">Message</th>
                </tr>
              </thead>
              <tbody>
                {ContactLeads.map((lead, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2 border">{lead.name}</td>
                    <td className="px-4 py-2 border">{lead.email}</td>
                    <td className="px-4 py-2 border">{lead.company_site}</td>
                    <td className="px-4 py-2 border">{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admindatapage;
