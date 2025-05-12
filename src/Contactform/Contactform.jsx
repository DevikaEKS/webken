// import React from 'react';
// import "./Contactform.css";
// function Contactform() {
//   return (
//     <div className="max-w-6xl mx-3 md:mx-auto  p-3 curvedarea my-6 font-normal ">
//       <div className="flex flex-col md:flex-row gap-2 items-start p-0 md:p-8">
//         {/* Text Content - Left Side */}
//         <div className="md:w-1/2  p-4">
//           <h1 className="text-xl md:text-3xl font-bold mb-4">
//             Join Our Email List For<br />
//             The Latest Podcasts,<br />
//             Interviews, And<br />
//             Events!
//           </h1>  
//           <p>
//             Stay up to date with Dr. Ken and the Watch Your Back movement as we relieve 
//             the world of neck and back pain - without surgery!
//           </p>
//         </div>

//         {/* Form - Right Side */}
//         <div className="md:w-1/2  p-4 rounded-lg ">
//           <form className="space-y-4">
//             <div>
//               <label className="text-[#ffa200] mb-1 ">First Name</label>
//               <input 
//                 type="text" 
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="text-[#ffa200] mb-1 ">Last Name</label>
//               <input 
//                 type="text" 
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="text-[#ffa200] mb-1 ">Email</label>
//               <input 
//                 type="email" 
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <button 
//   type="submit"
//   className="block mx-auto bg-[#ffa200] text-white py-3 px-6 rounded-full hover:bg-[#e69100] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffa200] focus:ring-offset-2 font-medium  border-2 border-[#ffff] hover:border-[#ffff] hover:text-white cursor-pointer"
// >
//   Get Updates
// </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contactform;



import React, { useState } from 'react';
import "./Contactform.css";
import axios from 'axios';

function Contactform() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[a-zA-Z\s.]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Validate fields
    if ((name === "firstName" || name === "lastName") && !nameRegex.test(value)) {
      newErrors[name] = "Enter a valid name";
    } else if (name === "email" && !emailRegex.test(value)) {
      newErrors[name] = "Enter a valid email address";
    } else {
      delete newErrors[name];
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(newErrors);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/v1/user/email-form",formData)

    if(response.status === 200){
      alert("Form submitted successfully!");
      setFormData({
        firstName :"",
        lastName : "",
        email :""
      })
    }else{
      setErrors(response.data.message)
    }
  };

  return (
    <div className="max-w-6xl mx-3 md:mx-auto p-3 curvedarea my-8 font-normal">
      <div className="flex flex-col md:flex-row gap-2 items-start p-0 md:p-8">
        <div className="md:w-1/2 p-4">
          <h1 className="text-xl md:text-3xl font-bold mb-4">
            Join Our Email List For<br />
            The Latest Podcasts,<br />
            Interviews, And<br />
            Events!
          </h1>  
          <p>
            Stay up to date with Dr. Ken and the Watch Your Back movement as we relieve 
            the world of neck and back pain - without surgery!
          </p>
        </div>

        <div className="md:w-1/2 p-4 rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-[#ffa200] mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.firstName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                }`}
                required
              />
              {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
            </div>
            
            <div>
              <label className="text-[#ffa200] mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.lastName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                }`}
                required
              />
              {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
            </div>
            
            <div>
              <label className="text-[#ffa200] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                }`}
                required
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="block mx-auto bg-[#ffa200] text-white py-3 px-6 rounded-full hover:bg-[#e69100] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffa200] focus:ring-offset-2 font-medium border-2 border-[#ffff] hover:border-[#ffff] hover:text-white cursor-pointer"
            >
              Get Updates
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
