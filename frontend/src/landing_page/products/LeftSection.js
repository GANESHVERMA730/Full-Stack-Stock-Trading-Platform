import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, Coin, hideLinks, }) {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-6'>
          <img src={imageURL} />
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className='text-decoration-none'>

            {Coin ? (
              <a href="#" style={{ textDecoration: "none" }}>
                {Coin} <i className="fa-solid fa-arrow-right"></i>
              </a>
            ) : !hideLinks ? (
              <>
                <a href={tryDemo} style={{ textDecoration: "none" }}>
                  Try Demo <i className="fa-solid fa-arrow-right"></i>
                </a>

                <a
                  href={learnMore}
                  style={{ marginLeft: "40px", textDecoration: "none" }}
                >
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </>
            ) : null}

          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
            <a href={appStore}><img src='media/images/appstoreBadge.svg'
              style={{ marginLeft: "40px" }}
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;