import React, { useEffect, useState } from "react";

import Link from "../../helpers/Link";
import PropTypes from "prop-types";
import { animateScroll } from "react-scroll";

// import FooterCopyright from "../../components/footer/FooterCopyright";




const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <div className="footer__Wrapper-ki6dfs-0 kLcnS" onClick={animateScroll.scrollToBottom}>
      </div>
      <footer
        className={`footer-area ${backgroundColorClass ? backgroundColorClass : ""
          } ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
          } ${extraFooterClass ? extraFooterClass : ""}`}
          style={{
            backgroundImage: `url('https://th.bing.com/th/id/OIP.05A3hbX1Gjy_zCARyTZCGgHaE7?w=250&h=180&c=7&o=5&dpr=1.5&pid=1.7')`,
            backgroundSize: 'cover'
          }}
      >
        <div className={`${containerClass ? containerClass : "container"}`}>
          <div className="row">
            
            {/* <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`} id="DownloadDiv">
              <div className="footer-widget mb-30 ml-30">
                <div className="footer-title">
                  <h3>Download app</h3>
                </div>
                <div className="footer-list">
                  <div className="footer-logo" style={{marginBottom: 15}}>
                    <Link href={"https://play.google.com/store/apps/details?id=com.levyne"}>
                      <img className={"img-fluid"} style={{width: 150}} alt="" src={"https://goldtonemusicgroup.com/img/goldtone/main-page/news/playstore-badge.png"} />
                    </Link>
                  </div>
                  <div className="footer-logo">
                    <Link href={"https://apps.apple.com/us/app/levyne/id1545821096"}>
                      <img className={"img-fluid"} style={{width: 150}} alt="" src={"https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

            <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
              <div className="footer-widget mb-30 ml-30 ">
                <div className="footer-title">
                  <h3>About Us</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link href={"/about"}>About us</Link>
                    </li>
                    {/* <li>
                      <Link href={"/contact"}>
                        Contact
                    </Link>
                    </li> */}
                    <li>
                      <Link href={"/terms"}>Returns</Link>
                    </li>
                    <li>
                      <Link href={"/sizeGuide"}>Size guide</Link>
                    </li>
                    <li>
                      <Link href={"/faq"}>FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div
              className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
                }`}
            >
              <div
                className={`${sideMenu
                    ? "footer-widget mb-30 ml-95"
                    : "footer-widget mb-30 ml-50"
                  }`}
              >
                <div className="footer-title">
                  <h3>USEFUL LINKS</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link href={"/terms"}>Returns</Link>
                    </li>
                    <li>
                      <Link href={"/sizeGuide"}>Size guide</Link>
                    </li>
                    <li>
                      <Link href={"/faq"}>FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div
              className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
                }`}
            >
              <div className={`${sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
                }`}>
                <div className="footer-title">
                  <h3>Connect With Us</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com/levyneofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                    </a>
                    </li>
                    <li>
                      <a
                        href="//www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                    </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com/levyne_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className={`scroll-top ${scroll > top ? "show" : ""}`}
          onClick={() => scrollToTop()}
        >
          <i className="fa fa-angle-double-up"></i>
        </button> */}
      </footer>
    </>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FooterOne;
