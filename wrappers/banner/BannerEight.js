import BannerEightSingle from "../../components/banner/BannerEightSingle.js";
import React from "react";

const BannerEight = () => {
  
  return (
    <div className="container pt-4 pr-0 pl-0">
      <div className="row">
        <div className='col-lg mb-4'
        style={{
          height: 400
        }}>
        <BannerEightSingle
          data={{
            "id": 1,
            "title": "The Ethnic Store",
            "subtitle": "Shop Premium",
            "image": 'https://th.bing.com/th/id/OIP.5TFdq1ah-13yRK4aqMqt8wHaFj?w=213&h=180&c=7&o=5&dpr=1.5&pid=1.7',
            "url": "/search?Styles%5B0%5D=0&isFilterNeedToReturn=1"
            
          }}
          spaceBottomClass="mb-30"
        />
        </div>
        <div className='col-lg mb-4' style={{
          height:400
        }}>
        <BannerEightSingle
          data={{
            "id": 1,
            "title": "The Casual Store",
            "subtitle": "Shop Casual Fashion",
            "image": 'https://th.bing.com/th/id/OIP.ugi6ka2-mACRREYtCh7KUAHaEK?w=278&h=180&c=7&o=5&dpr=1.5&pid=1.7',
            "url": "/search?Styles%5B0%5D=2&Styles%5B1%5D=3&isFilterNeedToReturn=1"
            
          }}
          spaceBottomClass="mb-30"
        />
        </div>
      </div>
    </div>
  );
};

export default BannerEight;