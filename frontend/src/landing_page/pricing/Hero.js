import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 border-bottom text-center'>
        <h1>Pricing</h1>
        <p className='fs-5 mt-3 text-muted'>Free equity investments and flat ₹20 traday and F&O trades</p>
      </div>

      <div className='row text-center p-5 mt-5'>
        <div className='col-md-4 mb-5'>
          <div className='d-flex align-items-center justify-content-center' style={{ height: 140 }}>
            <img src='media/images/pricingEquity.svg' className='img-fluid w-75' />
          </div>
          <h3 className='mt-4'>Free equity delivery</h3>
          <p className='text-muted small mt-3 px-3'>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className='col-md-4 mb-5'>
          <div className='d-flex align-items-center justify-content-center' style={{ height: 140 }}>
            <img src='media/images/intradayTrades.svg' className='img-fluid w-75' />
          </div>
          <h3 className='mt-4'>Intraday and F&O trades</h3>
          <p className='text-muted small mt-3 px-3'>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className='col-md-4 mb-5'>
          <div className='d-flex align-items-center justify-content-center' style={{ height: 140 }}>
            <img src='media/images/pricing0.svg' className='img-fluid w-75' />
          </div>
          <h3 className='mt-4'>Free direct MF</h3>
          <p className='text-muted small mt-3 px-3'>
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;