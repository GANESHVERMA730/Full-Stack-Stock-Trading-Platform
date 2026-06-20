import React from 'react'

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

import Navbar from '../Navbar';
import Footer from '../Footer';

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription=""
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Coin="Coin"
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobileKite"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        hideLinks={true}
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <Universe />
    </>
  );
}

export default PricingPage;