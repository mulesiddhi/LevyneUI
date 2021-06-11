import BannerEight from "../banner/BannerEight";
import HeroSliderSeven from "../hero-slider/HeroSliderSeven";
import React from "react";

const SliderBanner = () => {
  return (
    <div className="slider-banner-area">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 ">
             {/* banner */}
          <BannerEight  />
        </div>
            {/* hero slider */}
            <HeroSliderSeven  />
          </div>
         
      </div>
    </div>
  );
};

export default SliderBanner;
