import React from 'react';
import './Testimonialpart.css'; // Keep this if you're using custom styles

function Testimonialpart() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">
        
        {/* Testimonial Card */}
        <div className="col-md-6 mb-4 order-2 order-md-1">
            <div className='crd'>
          <div className="cards shadow-sm p-3">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle text-white d-flex justify-content-center align-items-center" style={{ width: '48px', height: '48px', fontWeight: 'bold', fontSize: '1.25rem',backgroundColor:'#001040' }}>
                RL
              </div>
              <h3 className="text-warning mb-0 ms-3" style={{ fontSize: '1.25rem' }}>Rose Lavacca</h3>
            </div>
            
            <h5 className="text-center mb-3">Patient</h5>
            <p className="text-muted">
              Dr. Hansraj saved my life. He performed cervical surgery on C3-C5 in June 2017 he is a miracle worker, with a MS lesion in the same area. Because of the degeneration of these discs I couldn't move my neck and splintered pain throughout my neck, shoulders and arms. I'm 100% now I can lift things move my neck in any direction and lift my arms. Thank you Dr. Hansraj
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
