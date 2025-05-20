// export default function Course() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10 font-helvetica font-bold gap-10">
      
      
//       <div className="flex flex-col items-center space-y-4 md:w-1/2 w-full">
//         <img src="./Course-lap.png" alt="Course Laptop" className="w-full  object-contain" />
//         <button className="bg-[#FFA200] text-2xl font-bold rounded-full px-10 max-w-xs h-[59px] text-white">
//           Enroll Now
//         </button>
//       </div>

      
//       <div className="flex flex-col space-y-5 md:w-1/2 w-full text-center md:text-left">
//         <h1 className="font-bold text-[32px] md:text-[48px] text-[#001040]">Enroll in the Course</h1>
//         <h3 className="text-[#E00000] text-[28px] md:text-[40px] font-bold">My Spine Coach</h3>
//           <p className="font-medium text-[#000000] text-[16px] md:text-[18px] leading-7 md:leading-8">
//           Transform your spinal health with Dr. Ken Hansraj’s My Spine Coach course. Backed by over 20 years of expertise in spine care, this program offers proven strategies to improve your physical, mental, and emotional well-being through the power of spine wellness.
//         </p>
//         <p className="font-medium text-[#000000] text-[16px] md:text-[18px] leading-7 md:leading-8">
//           Join now to access cutting-edge insights and personalized guidance from the globally renowned spinal surgeon who has impacted lives worldwide.
//         </p>
//       </div>
      
//     </section>
//   );
// }


import React from 'react';
export default function Course() {
  return (
    <section className="container py-5">
      <div className="row align-items-center justify-content-center">      
        {/* Image + Button */}
        <div className="col-sm-12 col-md-7 text-center mb-4 mb-md-0">
          <img src="./Course-lap.png" alt="Course Laptop" className="img-fluid mb-3" />
          <button className="contactbtn px-4 py-2 font-bold">
            Enroll Now
          </button>
        </div>
        {/* Text Content */}
        <div className="col-sm-12 col-md-5 text-center text-md-start ps-md-5">
          <h1 className="fw-bold mb-3 headingarea">Enroll in the Course</h1>
          <h3 className="text-danger fw-bold mb-3" style={{ fontSize: '2.3rem' }}>
            My Spine Coach.
          </h3>
          <p className="text-dark mb-3 text-[16px] md:text-[18px] ">
            Transform your spinal health with Dr. Ken Hansraj’s My Spine Coach course. Backed by over 20 years of expertise in spine care, this program offers proven strategies to improve your physical, mental, and emotional well-being through the power of spine wellness.
          </p>
          <p className="text-dark text-[16px] md:text-[18px] ">
            Join now to access cutting-edge insights and personalized guidance from the globally renowned spinal surgeon who has impacted lives worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
