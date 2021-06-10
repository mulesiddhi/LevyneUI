import HeroSliderSevenSingle from "../../components/hero-slider/HeroSliderSevenSingle.js";
import React from "react";

//import { Carousel } from "react-bootstrap";

const HeroSliderSeven = ({Image}) => {
  /*return (
    <div className="slider-area res-mrg-md-mb ">
      <div className="slider-active-3 ">
        {/* <Carousel> * /}
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                // <Carousel.Item key={key}>
                  <HeroSliderSevenSingle
                    data={single}
                    key={key}
                    sliderClass="swiper-slide"
                  />
                // </Carousel.Item>
              );
            })}
        {/* </Carousel> * /}
      </div>
    </div>
  );
  */

  return (
    <div className="slider-area res-mrg-md-mb w-100 m-lg-4 m-md-3 m-sm-5">
      <div className="slider-active-3 ">
        <HeroSliderSevenSingle
          data={{
            "id": 1,
            "title": "New Arrivals",
            "subtitle": "Customize Now",
            "image": 'https://th.bing.com/th/id/OIP.ugi6ka2-mACRREYtCh7KUAHaEK?w=278&h=180&c=7&o=5&dpr=1.5&pid=1.7',
            "url": "/search"
          }}
          sliderClass="swiper-slide"
        />
      </div>
    </div>
  );
};

export default HeroSliderSeven;
