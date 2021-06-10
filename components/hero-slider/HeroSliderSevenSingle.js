import PropTypes from "prop-types";
import React from "react";

const HeroSliderSevenSingle = ({ data, sliderClass }) => {

  return (
    <div
      className={`single-slider-2 slider-height-18 d-flex align-items-center slider-overly-res w-100 ${
        sliderClass ? sliderClass : ""
      }`}
      style={{
        backgroundImage: `url('${data.image}')`,
        backgroundSize: 'cover'
      }}
    >
      
      <div className="slider-content-7 slider-animated-1 ml-70">
        <h3 className="animated">{data.title}</h3>
        {/* <h1
          className="animated"
          dangerouslySetInnerHTML={{ __html: data.subtitle }}
        /> */}
        {/* <div className="slider-btn-9 btn-hover">
          <Link className="animated" href={data.url}>
            SHOP NOW
          </Link>
        </div> */}
      </div>
    </div>
  );
};

HeroSliderSevenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderSevenSingle;
