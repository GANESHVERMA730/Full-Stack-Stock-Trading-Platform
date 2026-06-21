import React from 'react'

function Brokerage() {
  return ( 
    <div className='container'>
      <div className='row border-top'>
        <div className='col-8 p-5'>
          <a href='' className='text-decoration-none d-flex align-items-center justify-content-center fs-5 mb-3'>Brokerage calculator</a>
          <ul className='text-muted' style={{lineHeight: "2", textAlign: "left", fontSize: "15px"}}>
            <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for eqquity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instade of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className='col-4 p-5'>
          <h3><a href='' className='text-decoration-none d-flex align-items-center justify-content-centerr fs-5 mb-3'>List of charges</a></h3>
        </div>
      </div>
    </div>
   );
}

export default Brokerage;