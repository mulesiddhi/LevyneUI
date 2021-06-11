import React, { useEffect, useState } from "react";

import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import NavMenu from "../../components/header/NavMenu";
import PropTypes from "prop-types";
const HeaderOne = ({
	layout,
	headerPaddingClass,
	headerBgClass,
	ProfileImage,
	BrandName
}) => {

	let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "bottom") {
          setScrollState("bottom")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])


	return (
		<header className={`header-area clearfix ${headerBgClass ? headerBgClass : ""}`}>
			<div className={`${headerPaddingClass ? headerPaddingClass : ""} sticky-bar stick header-res-padding clearfix `}>
				<div className={scrollState==="top" ?'navbarblur':'acnavbar'}>
				<div className={layout === "container-fluid" ? layout : "container"}>
					<div className="row">
						{/* <div className="col-xl-2 col-lg-2 col-md-6 col-4"> */}
							{/* header logo */}
							{/* <div className="logo">
								<a href="/">
									<img className="img-fluid" alt="" src={ProfileImage} />
									<span>{BrandName}</span>
								</a>
							</div> */}
						{/* </div> */}
						<div className="col-xl-3 col-lg-3 d-none d-lg-block">
							{/* Nav menu */}
							<NavMenu />
						</div>
						<div className="col-xl-8 col-lg-8 col-md-12 col-12">
							{/* Icon group */}
							<IconGroup />
						</div>
					</div>
				</div>
				{/* mobile menu */}
				<MobileMenu />
			</div>
			</div>
		</header>
	);
};

HeaderOne.propTypes = {
	borderStyle: PropTypes.string,
	headerPaddingClass: PropTypes.string,
	layout: PropTypes.string,
	top: PropTypes.string
};

export default HeaderOne;