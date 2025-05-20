import { STUDIES } from "../../utils/Links";

export default function Studies() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-center  relative px-4 space-y-10 md:space-y-0 md:space-x-6 ">
    
      <div className="relative md:-left-[105px] rounded-r-full bg-[#FFA200] w-full max-w-[543px] h-[180px] md:h-[230px] text-[36px] md:text-[64px] text-white flex items-center justify-center">
        <div className="text-center leading-snug">
          <p className="md:ml-20">Completed</p>
          <p>Studies.</p>
        </div>
      </div>

      
      <div className="flex flex-row justify-center gap-6 md:gap-10">
        {STUDIES.map((study) => (
          <div
            key={study.id}
            className="flex flex-col  items-center justify-center max-w-[90vw] md:max-w-none "
          >
            <img
              src={study.img}
              alt={study.alt}
              title={study.title}
              className="w-[300px] h-[150px] md:w-[447px] md:h-[211px] object-cover rounded-lg "
            />
            <p className="text-[20px] md:text-[32px] text-[#001040] mt-3 text-center">{study.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// import { STUDIES } from "../../utils/Links";
// export default function Studies() {
//   return (
//     <section>
//       <div className="container-fluid m-0 p-0">
//         <div className="row justify-content-center align-items-center mb-5">
//           <div className="col-md-4 d-flex justify-content-md-start justify-content-center">
//             <div
//               className=" text-white text-center fw-bold d-flex flex-column justify-content-center rounded-end-pill d-none d-lg-block"
//               style={{
//                 width: "100%",
//                 maxWidth: "543px",
//                 height: "230px",
//                 fontSize: "64px",
//                 backgroundColor:"#ffa200"
//               }}>
//               <p className="m-0">Completed</p>
//               <p className="m-0">Studies.</p>
//             </div>
//           </div>
       

//        <h1 className="headingarea d-block d-lg-none text-center">Completed Studies</h1>
//           {STUDIES.map((study) => (
//             <div key={study.id} className="col-md-6 col-lg-4 d-flex flex-column align-items-center m-3">
//               <img
//                 src={study.img}
//                 alt={study.alt}
//                 title={study.title}
//                 className="img-fluid rounded mb-3"
//                 style={{ width: "100%", maxWidth: "447px", height: "211px", objectFit: "cover",margin:"10px" }}/>
//               <p className="text-center fw-bold text-primary" style={{ fontSize: "24px" }}>
//                 {study.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }