import React from 'react'

function CreateTicket() {
  return ( 
    <div className='container'>
      <div className='row mt-5'>
        <h2>To create a ticket, select a relevent topic</h2>
        
        <div className='col-4 p-5 mt-5'>
          <h3 className='mb-4 fs-4'> <i class="fa-solid fa-circle-plus"></i> Account Opening</h3>
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Online Account Opening</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Offline Account Opening</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Company, Partnership and HUF Account Opening</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>NRI Account Opening</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Charges at Zerodha</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Zerodha IDFC First Bank 3-in-1 Account</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Getting Started</a><br />
        </div>

        <div className='col-4 p-5 mt-5'>
          <h3 className='mb-4 fs-4'> <i class="fa-solid fa-user"></i> Your Zerodha Account</h3>
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Login Credential</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Account Modification And Segment Addition</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>DP ID and bank details</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Your Profile</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Transfer and conversioncof shares</a><br />
        </div>

        <div className='col-4 p-5 mt-5'>
          <h3 className='mb-4 fs-4'> <i class="fa-solid fa-chart-column"></i> Your Zerodha Account</h3>
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Mergin/Leverage, Product and Order types</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Kite Web and Mobile</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Trading FAQs</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>corporate Actions</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Sentinel</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Kite API</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Pi and other platforms</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Stockreports+</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>GTT</a><br />
        </div>
      </div>

      <div className='row'>
        
        <div className='col-4 p-5'>
          <h3 className='mb-4 fs-4'> <i class="fa-solid fa-circle-plus "></i> Funds</h3>
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Adding Funds</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Fund Withdrawal</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>eMandates</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Adding Bank Accounts</a><br />
        </div>

        <div className='col-4 p-5'>
          <h3 className='mb-4 fs-4'> <i class="fa-solid fa-user"></i> Console</h3>
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Reports</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Ledger</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Portfolio</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>60 Day Challenge</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>IPO</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Refferral Program</a><br />
        </div>

        <div className='col-4 p-5'>
          <h3 className='mb-4 fs-4'> <i class="fa-solid fa-chart-column"></i> Coin</h3>
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Understanding Mutual Funds</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>About Coin</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Buying and Selling through Coin</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Starting an SIP</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Managing your Portfolio</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Coin App</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Moving to Coin</a><br />
          <a href='' style={{textDecoration: "none", lineHeight: "2", fontSize: "16px"}}>Government Securities</a><br />
        </div>
      </div>
    </div>
   );
}

export default CreateTicket;