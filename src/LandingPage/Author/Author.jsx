// export default function Author() {
//   return (
//     <section className=" flex flex-col justify-center items-center py-10 space-y-15 px-4">
      
//         <h1 className="headingarea text-center">
//         Published Author <span className="text-[#F99420]">.</span>
//       </h1>
      
//       <img 
//         src="./Authors.png" 
//         alt="Published Author" 
//         className="w-full max-w-6xl h-auto object-contain"
//       />
      
    
//     </section>
//   );
// }


import logo1 from "../../assets/timeslogo.webp";
import logo2 from "../../assets/webmd.png";
export default function Author() {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-4 space-y-10">
      <h1 className="headingarea text-center">
        Published Author <span className="text-[#F99420]">.</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl w-full">
        <img src="./Authors.png" alt="Author 1" className="object-contain" />
        <img src={logo1} alt="Author 2" className=" object-contain" />
        <img src={logo2} alt="Author 3" className=" object-contain" />
        <img src={logo1} alt="Author 4" className=" object-contain" />
        <img src={logo1} alt="Author 5" className=" object-contain" />
      </div>
    </section>
  );
}
