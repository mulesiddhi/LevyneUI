import BannerEight from "../banner/BannerEight";
import HeroSliderSeven from "../hero-slider/HeroSliderSeven";
import React from "react";

const SliderBanner = ({BannerImages}) => {
  return (
    <div className="slider-banner-area">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12">
             {/* banner */}
          <BannerEight Images={[BannerImages[1], BannerImages[2]]} />
        </div>
            {/* hero slider */}
            <HeroSliderSeven Image={BannerImages[0]} />
          </div>
         
      </div>
    </div>
  );
};

export default SliderBanner;
