import React, { useEffect,useState } from 'react';
import './Testimonialpart.css'; // Keep this if you're using custom styles
import axios from 'axios';


function Testimonialpart() {

  const[testimonial,setTestimonial] = useState({})

  async function getTestimonial(){
    const response = await axios.get("http://localhost:3000/api/v1/admin/testimonial")

    if(response.status !== 200){
      console.error("Error getting testimonials")
    }

    setTestimonial(response.data.testimonial)
  }

  useEffect(() =>{
    getTestimonial()
  },[])

  
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">
        
        {/* Testimonial Card */}
        <div className="col-md-6 mb-4 order-2 order-md-1">
            <div className='crd'>
          <div className="cards shadow-sm p-3">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle text-white d-flex justify-content-center align-items-center" style={{ width: '48px', height: '48px', fontWeight: 'bold', fontSize: '1.25rem',backgroundColor:'#001040' }}>
                {testimonial.patient_name.split("")[0]}
              </div>
              <h3 className="text-warning mb-0 ms-3" style={{ fontSize: '1.25rem' }}>{testimonial.patient_name}</h3>
            </div>
            
            <h5 className="text-center mb-3">Patient</h5>
            <p className="text-muted">
              {testimonial.content}
            </p>
          </div>
        </div>
</div>
        {/* Heading */}
        <div className="col-md-6 text-center text-md-end order-1 order-md-2 py-5 md-py-0">
          <h1 className="fw-bold patientwords" style={{ color: '#001040' }}>
            Words from our <br className="d-none d-sm-block" />
            Patient...
          </h1>
        </div>
        </div>
      
    </div>
  );
}

export default Testimonialpart;
