import PropTypes from "prop-types";
import React from "react";
import VideoComponent from '../../components/video&poweredby/VideoComponent';

const HeroSliderOneSingle = ({ data, sliderClassName }) => {
  return (
    <div className='herocontainer'>
    <div
      className={`single-slider slider-height-1  ${sliderClassName ? sliderClassName : ""
        }`}
        style={{
          backgroundImage: `url('${data.image}')`,
          backgroundSize: 'cover'
        }}
    >
      {/* <img className='heroimg' src={data.image}/> */}
      <div className="container w-auto">
        <div className="row text-align-center">
          <div className="">
            <div className="slider-content slider-animated-1">
            <h1 className="animated">{data.subtitle}</h1>
              <h3 className="animated">{data.title}</h3>
              {/* <div className="slider-btn btn-hover">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bottom-right fixed'>
        <VideoComponent />
      </div>
    </div>
  );

};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderOneSingle;
