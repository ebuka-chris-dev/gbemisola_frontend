import { Link } from "react-router-dom";

const MobileNav = ({setShowNav}) => {
  return (
    <nav
      id="hc-nav-1"
      className={`hc-offcanvas-nav hc-nav-1 nav-levels-overlap nav-position-right touch-device nav-close-button-empty` + ` nav-open`}
      aria-hidden="false"
      style={{visibility:"visible",display:"block"}}
    >
      <div className="nav-container">
        <div
          className="nav-wrapper nav-wrapper-0"
          data-level={0}
          data-index={0}
        >
          <div className="nav-content">
            <div className="nav-close">
              <Link
                to="#"
                className="nav-close-button"
                role="menuitem"
                tabIndex={0}
                aria-label="Close Menu"
                onClick={()=>{setShowNav(false)}}
              >
                <span />
              </Link>
            </div>
            <ul role="menu" aria-level={1} className="first-nav">
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-909 nav-parent">
                <input
                  type="checkbox"
                  id="hc-nav-1-1-0"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={0}
                  defaultValue="s9bgazruel"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper">
                  <Link
                    to="/about-us"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    About Us
                  </Link>
                </div>
               
              </li>
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1759 nav-parent">
                <input
                  type="checkbox"
                  id="hc-nav-1-1-1"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={1}
                  defaultValue="532hyp1c0x"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper">
                  <Link
                    to="/our-work"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Our Work
                  </Link>
                </div>
              
              </li>
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-911 nav-parent">
                <input
                  type="checkbox"
                  id="hc-nav-1-1-2"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={2}
                  defaultValue="gwnz2jb68d"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper">
                  <Link
                    to="/news"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    News
                  </Link>
                </div>
              
              </li>
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-913 nav-parent">
                <input
                  type="checkbox"
                  id="hc-nav-1-1-3"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={3}
                  defaultValue="g9ygafozk6r"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper">
                  <Link
                    to="/work-with-us"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Work With Us
                  </Link>
                 
                </div>
               
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;