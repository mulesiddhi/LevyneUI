import React, { Fragment } from "react";

import FooterOne from "../wrappers/footer/FooterOne";
import HeaderOne from "../wrappers/header/HeaderOne";
import PropTypes from "prop-types";

const LayoutOne = ({
  children,
  headerContainerClass,
  BrandName,
  ProfileImage,
  headerTop,
  headerPaddingClass
}) => {
  return (
    <Fragment>
      <HeaderOne
        layout={headerContainerClass}
        top={headerTop}
        BrandName={BrandName}
        ProfileImage={ProfileImage}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <FooterOne
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutOne;
