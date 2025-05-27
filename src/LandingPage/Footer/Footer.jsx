

// import { Links,CONTACT_US,SOCIAL } from "../../utils/Links";

// export default function Footer() {
//   return (
//     <>
//     <div className="container-fluid" style={{backgroundColor:"#001040"}}>
//       <div className="row">
//         <div className="col-sm-12 col-md-3 col-lg-3"><div className="d-flex justify-content-center align-items-center"><img className="w-[250px] md:w-[356px] h-auto" src="/image 66.png" alt="Logo" /></div></div>
//         <div className="col-sm-12 col-md-3 col-lg-3">

//            <h4 className="font-bold  text-[20px] md:text-[20px]" style={{color:"#ffa200"}}>
//               Quick Links
//             </h4>
//             {Links.map((link) => (
//               <>
//               <a
//                 key={link.id}
//                 className="text-white text-[16px] md:text-[18px] text-decoration-none"
//                 href={link.link}>
//                 {link.name}
//               </a><br/>
//               </>
//             ))}
//         </div>


//         <div className="col-sm-12 col-md-6 col-lg-3">

//         </div>
        
//       </div>
//     </div>
//     <div className="bg-[#001040] w-full px-6 md:px-10 py-10 md:py-0">
//       <div className="flex flex-col md:flex-row items-start md:items-center md:h-[392px] w-full gap-y-8 md:gap-0">
        
//         <div className="w-full md:w-[25%] flex justify-center md:justify-start md:ml-20">
//           <img className="w-[250px] md:w-[356px] h-auto" src="/image 66.png" alt="Logo" />
//         </div>

        
//         <div className="flex flex-col md:flex-row w-full md:w-[75%] justify-between md:justify-center md:space-x-20 gap-y-10 md:gap-y-0 mt-8 md:mt-0">
          
//           <div className="flex flex-col space-y-3">
//             <h4 className="font-bold  text-[20px] md:text-[20px]" style={{color:"#ffa200"}}>
//               Quick Links
//             </h4>
//             {Links.map((link) => (
//               <a
//                 key={link.id}
//                 className="text-white text-[16px] md:text-[18px] text-decoration-none"
//                 href={link.link}>
//                 {link.name}
//               </a>
//             ))}
//           </div>

         
//           <div className="flex flex-col space-y-3">
//   <h4 className="font-bold text-[20px] md:text-[24px]" style={{ color: "#ffa200" }}>
//     Contact Us
//   </h4>
//   {CONTACT_US.map((item) => {
//     const Icon = item.icon;
//     const value = item.value;
//     const isAddress = item.type === "address";
//     const isEmail = item.type === "mail";
//     const isPhone = item.type === "phone";

    
//     const href = isEmail
//       ? `mailto:${value}`
//       : isPhone
//       ? `tel:${value.replace(/\D/g, "")}` // sanitize phone number
//       : isAddress
//       ? `https://maps.google.com/?q=${encodeURIComponent(value)}`
//       : "#";

//     return (
//       <div
//         key={item.id}
//         className="text-white text-[16px] md:text-[18px] flex items-start gap-2"
//       >
//         {isAddress ? (
//           <a
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col text-white text-decoration-none "
//           >
//             <div>{value.split(",")[0]},</div>
//             <div>
//               {value.split(",")[1]?.trim()},{" "}
//               {value.split(",")[2]?.trim()}
//             </div>
//           </a>
//         ) : (
//           <a href={href} className="flex items-center space-x-3 cursor-pointer text-decoration-none  ">
//             {Icon && <Icon className="text-[#FFA200]" />}
//             <span className="font-helvetica text-white ">{value}</span>
//           </a>
//         )}
//       </div>
//     );
//   })}
// </div>

//           {/* Follow Us */}
//           <div className="flex flex-col space-y-3">
//             <h4 className="font-helvetica font-bold text-[20px] md:text-[24px]" style={{color:"#ffa200"}}>
//               Follow Us
//             </h4>
//             <div className="flex space-x-3">
//               {SOCIAL.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={item.id}
//                     href={item.link}
//                     className="text-white text-[18px] flex items-center gap-2 font-normal"
//                   >
//                     <Icon />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



import { Links, CONTACT_US, SOCIAL } from "../../utils/Links";

export default function Footer() {
  return (
    <>
      <div className="container-fluid py-4 " style={{ backgroundColor: "#001040" }}>
        <div className="row text-white">
          {/* Logo */}
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img src="/image 66.png" alt="Logo" className="img-fluid" style={{ maxWidth: "210px" }} />
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold" style={{ color: "#ffa200" }}>Quick Links</h5>
            {Links.map((link) => (
              <div key={link.id}>
                <a href={link.link} className="text-white text-decoration-none d-block my-1">
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold" style={{ color: "#ffa200" }}>Contact Us</h5>
            {CONTACT_US.map((item) => {
              const Icon = item.icon;
              const value = item.value;
              const isAddress = item.type === "address";
              const isEmail = item.type === "mail";
              const isPhone = item.type === "phone";

              const href = isEmail
                ? `mailto:${value}`
                : isPhone
                  ? `tel:${value.replace(/\D/g, "")}`
                  : isAddress
                    ? `https://maps.google.com/?q=${encodeURIComponent(value)}`
                    : "#";

              return (
                <div key={item.id} className="mb-2">
                  {isAddress ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-block my-1">
                      <div>{value.split(",")[0]},</div>
                      <div>{value.split(",")[1]?.trim()} {value.split(",")[2]?.trim()}</div>
                    </a>
                  ) : (
                    <a href={href} className="text-white text-decoration-none d-flex align-items-center">
                      {Icon && <Icon className="me-2" style={{ color: "#ffa200" }} />}
                      <span>{value}</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold" style={{ color: "#ffa200" }}>Follow Us</h5>
            <div className="d-flex gap-3">
              {SOCIAL.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.id} href={item.link} className="text-white fs-5">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
