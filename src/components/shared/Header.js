import { Link, useLocation } from "react-router-dom";
import MainLogo from "../../assets/images/logoasset.svg";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../store/constant";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [media, setMedia] = useState([])

  const location = useLocation();
  const url = location.pathname;
  const fetchMedia = async () => {
    try {
      const res = await axios.get(`${API_URI}/media/all?limit=4`)
      const data = res.data.data.reverse();
      setMedia(data)
    } catch (err) {
      console.error('Error during news creation:', err)
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownForWork = () => {
    setIsOpen2(!isOpen2);
  };

  useEffect(() => {
    fetchMedia();
  }, [])

  return (
    <>
      {showNav && <MobileNav setShowNav={setShowNav} />}
      <div className="main-header">
        <Link className="logo" to="/" title="go to Homepage">
          <img src={MainLogo} style={{ color: "black" }} alt="logo" />
        </Link>
        <nav className="nav-primary">
          <div className="menu-header-container">
            <ul id="menu-header" className="nav">
              <li
                id="menu-item-909"
                className={`
                menu-item menu-item-type-post_type menu-item-object-page
                 current-menu-item page_item page-item-876 current_page_item menu-item-has-children menu-item-909 no-flex
                 ${isOpen ? 'open' : ''
                  } 
                `}
              >
                <Link to="#" onClick={toggleDropdown}>
                  <span>About Us
                    <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>

                  </span>
                </Link>

                <ul className="sub-menu">
                  <li
                    id="menu-item-914"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-914"
                  >
                    <Link
                      to="/about-us"
                    ><span>About Us</span></Link>
                  </li>
                  <li
                    id="menu-item-1626"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626"
                  >
                    <Link
                      to="/our-founder-organisation"
                    ><span>Our Organisation</span></Link >
                  </li>
                  <li
                    id="menu-item-915"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-915"
                  >
                    <Link
                      to="/founder-message"
                    ><span>Founder Message</span></Link                      >
                  </li>
                </ul>
              </li>

              <li
                id="menu-item-1759"
                className={`
                menu-item menu-item-type-post_type menu-item-object-page
                 current-menu-item page_item page-item-876 current_page_item menu-item-has-children menu-item-909 no-flex
                 ${isOpen2 ? 'open' : ''
                  } 
                `}              >
                <Link to="#" onClick={toggleDropdownForWork}>
                  <span>Our Work
                    <span className={`dropdown-arrow ${isOpen2 ? 'open' : ''}`}>▼</span>
                  </span>
                </Link>

                <ul className="sub-menu">
                  <li
                    id="menu-item-1626"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626"
                  >
                    <Link
                      to="/Literacy-and-Numeracy-Recovery-Program-in-Sokoto-State"
                    ><span>Literacy and Numeracy Recovery Program in Sokoto State</span></Link >
                  </li>
                  <li
                    id="menu-item-1626"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1626"
                  >
                    <Link
                      to="/smart-learning-hub"
                    ><span>Smart Learning Hub</span></Link >
                  </li>

                  <li
                    id="menu-item-914"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-914"
                  >
                    <Link
                      to="/read-to-lead-Campaign"
                    ><span>Read to Lead Campaign</span></Link>
                  </li>

                  <li
                    id="menu-item-915"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-915"
                  >
                    <Link
                      to="/capacity-building-for-teachers"
                    ><span>Capacity Building for Teachers</span></Link                      >
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-911"
                className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-911"
              >
                <Link to="/news">
                  <span>News</span>
                </Link>

              </li>
              {media.length >= 1 && <li
                id="menu-item-911"
                className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-911"
              >
                <Link to="/news/media">
                  <span>Media</span>
                </Link>
              </li>

              }

              <li
                id="menu-item-913"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-913"
              >
                <Link to="/work-with-us">
                  <span>Work With Us</span>
                </Link>
              </li>
              <li
                id="menu-item-913"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-913"
              >
                <Link to="/contact-us">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <Link to="#" className="search toggle-search">
          <i className="fa fa-search" />
        </Link> */}
       <a href="https://gbemisolayussufffoundation.org/donations" target="_blank"
        className="cta-button cta-button-donate animated">
          Donate
          <svg
            className="icon_heart"
            version="1.2"
            baseProfile="tiny"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 40 37"
            overflow="visible"
            xmlSpace="preserve"
          >
            <path
              id="Trazado_230_32_"
              fill="#39B54A"
              d="M20,5.89272C16.685-3.10561,0-1.76894,0,11.83439c0,6.78,5.1,15.80167,20,25
      c14.9-9.19333,20-18.215,20-25C40-1.69061,23.33333-3.16561,20,5.89272z"
            />
          </svg>
        </a> 

        <Link
          to="#"
          className="burger-menu toggle-menu hc-nav-trigger hc-nav-1 toggle-open"
          aria-label="Main menu"
          role="button"
          style={{ marginLeft: "auto" }}
          onClick={() => setShowNav(true)}
        >
          <span className="sr-only">Show Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={22}
            viewBox="0 0 30 22"
          >
            <path
              id="Path_258"
              data-name="Path 258"
              d="M30,5H0V1H30Zm0,5H0v4H30Zm0,9H0v4H30Z"
              transform="translate(0 -1)"
            />
          </svg>
        </Link>
        <nav className="nav-mobile">
          <ul id="menu-header-1" className="first-nav">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-909">
              <Link to="#">About Us</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-1759">
              <Link to="#">Our Work</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-911">
              <Link to="">News</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-913">
              <Link to="#">Work With Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
