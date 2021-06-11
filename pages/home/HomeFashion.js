import React, { Fragment } from "react";

import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import LayoutOne from "../../layouts/LayoutOne";
import MetaTags from "react-meta-tags";
import SliderBanner from "../../wrappers/slider-banner/SliderBanner";
import StayUpdate from '../../components/updated/StayUpdate'

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />
        {/*Sliderbanner*/}
        <SliderBanner />
		{/*stay updated*/}
		<StayUpdate/>
        {/* <TabProduct spaceBottomClass="pb-60" category="fashion" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
