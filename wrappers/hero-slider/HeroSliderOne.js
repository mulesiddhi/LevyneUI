import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle.js";
import React from "react";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import styles from '../../styles/HeroSliderOne.module.scss';

const HeroSliderOne = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <div styleName={styles.sliderarea}>
      <div className={`${slider-active} ${nav-style-1}`}>
        
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <HeroSliderOneSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              );
            })}
        
      </div>
    </div>
  );
};

export default HeroSliderOne;
