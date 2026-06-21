import React from 'react';

function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center justify-content-center'>

        <h1 className='mb-3'>The Zerodha Universe</h1>
        <p className='text-muted mb-5'>
          Extend your trading and investment experience even further with our partner platforms
        </p>

        <div className='col-4 d-flex flex-column align-items-center mb-5'>
          <div className='d-flex align-items-center justify-content-center' style={{ height: "80px" }}>
            <img
              src="media/images/smallcaseLogo.png"
              className='img-fluid'
              style={{ width: "140px", objectFit: "contain" }} alt="Smallcase"
            />
          </div>
          <p className='text-muted small mt-4 px-3'>
            Thematic investing platform that helps you invest
            in diversified baskets of stocks and ETFs.
          </p>
        </div>

        <div className='col-4 d-flex flex-column align-items-center mb-5'>
          <div className='d-flex align-items-center justify-content-center'
            style={{ height: "80px" }}>
            <img
              src="media/images/sensibullLogo.svg"
              className='img-fluid'
              style={{ width: "140px", objectFit: "contain" }} alt="Sensibull"
            />
          </div>
          <p className='text-muted small mt-4 px-3'>
            Options trading platform that lets you create
            strategies, analyze positions, and examine data points.
          </p>
        </div>

        <div className='col-4 d-flex flex-column align-items-center mb-5'>
          <div className='d-flex align-items-center justify-content-center'
            style={{ height: "80px" }}>
            <img
              src="media/images/streakLogo.png"
              className='img-fluid'
              style={{ width: "140px", objectFit: "contain" }} alt="Streak"
            />
          </div>
          <p className='text-muted small mt-4 px-3'>
            Systematic trading platform that allows you
            to create and backtest strategies without coding.
          </p>
        </div>

        <div className='col-4 d-flex flex-column align-items-center mb-5'>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ height: "80px" }}>
            <img src="media/images/zerodhaFundhouse.png"
              className='img-fluid'
              style={{ width: "140px", objectFit: "contain" }} alt="Zerodha Fund House"
            />
          </div>
          <p className='text-muted small mt-4 px-3'>

            Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.

          </p>
        </div>

        <div className='col-4 d-flex flex-column align-items-center mb-5'>
          <div className='d-flex align-items-center justify-content-center'
            style={{ height: "80px" }}>
            <img
              src="media/images/dittoLogo.png"
              className='img-fluid'
              style={{ width: "140px", objectFit: "contain" }} alt="Ditto"
            />
          </div>
          <p className='text-muted small mt-4 px-3'>

            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
          </p>
        </div>

        <div className='col-4 d-flex flex-column align-items-center mb-5'>
          <div className='d-flex align-items-center justify-content-center'
            style={{ height: "80px" }}>
            <img
              src="media/images/tijori.svg"
              className='img-fluid'
              style={{ width: "140px", objectFit: "contain" }} alt="Tijori"
            />
          </div>
          <p className='text-muted small mt-4 px-3'>
            Investment research platform providing insights and detailed company analysis.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;