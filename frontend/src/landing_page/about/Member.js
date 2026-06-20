import React from "react";

function Member() {
  return (
    <div className="container p-5">
      <div className="row mt-4 text-muted">
        <div className='col-4 text-center'>
          <img src='media/images/Nikhil.jpg' style={{ borderRadius: "100%", width: "50%" }} />
          <h4 className='mt-4 fs-5'>Nithin Kamath</h4>
          <h6 className="fs-6">Co-founder & CFO</h6>
        </div>
        <div className='col-4 text-center'>
          <img src='media/images/kailash.jpg' style={{ borderRadius: "100%", width: "50%" }} />
          <h4 className='mt-4 fs-5'>Dr. Kailash Nadh</h4>
          <h6 className="fs-6">CTO</h6>
        </div>
        <div className='col-4 text-center'>
          <img src='media/images/venu.jpg' style={{ borderRadius: "100%", width: "50%" }} />
          <h4 className='mt-4 fs-5'>Venu Madhav</h4>
          <h6 className="fs-6">COO</h6>
        </div>
      </div>

      <div className="row mt-5 text-muted">
        <div className='col-4 text-center'>
          <img src='media/images/seema.jpg' style={{ borderRadius: "100%", width: "50%" }} />
          <h4 className='mt-4 fs-5'>Seema Patil</h4>
          <h6 className="fs-6">Director</h6>
        </div>
        <div className='col-4 text-center'>
          <img src='media/images/karthik.jpg' style={{ borderRadius: "100%", width: "50%" }} />
          <h4 className='mt-4 fs-5'>Karthik Rangappa</h4>
          <h6 className="fs-6">Chief of Education</h6>
        </div>
        <div className='col-4 text-center'>
          <img src='media/images/austin.jpg' style={{ borderRadius: "100%", width: "50%" }} />
          <h4 className='mt-4 fs-5'>Austin Prakesh</h4>
          <h6 className="fs-6">Director Strategy</h6>
        </div>
      </div>
    </div>
  );
}

export default Member;