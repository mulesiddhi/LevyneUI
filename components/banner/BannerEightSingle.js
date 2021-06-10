import Link from "../../helpers/Link";
import PropTypes from "prop-types";
import React from "react";

const BannerEightSingle = ({ data, spaceBottomClass }) => {
  return (
    <Link href={data.url}>
      <div className="container p-3 h-100"
      style={{
        backgroundImage: `url('${data.image}')`,
        backgroundSize: 'cover'
      }}>
       
          <div className="slider-content-7 p-3 m-3"
          >
            <h3>{data.title}</h3>
          </div>
        </div>

    </Link>
  );
};

BannerEightSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerEightSingle;
