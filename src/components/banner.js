import React from 'react';
import Header from '../components/header'
import "../assets/css/animate.css"
import HomeBannerSlider from '../components/HomeBannerSlider'

const Banner = () => {
  return (<header className="header-outer home-page">
    <div className="banner-slider position-relative">
      <HomeBannerSlider/>
    </div>
    <Header color="dark"/>
  </header>)
}
export default Banner
