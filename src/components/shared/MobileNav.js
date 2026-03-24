import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ setShowNav }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);



  return (
    <nav
      id="hc-nav-1"
      className="hc-offcanvas-nav hc-nav-1 nav-levels-overlap nav-position-right nav-close-button-empty nav-open"
      aria-hidden="false"
      style={{ visibility: "visible", display: "block" }}
    >
      <div
        className="nav-container"
        bis_skin_checked={1}
        style={{ transform: "translate3d(0px, 0px, 0px)", width: "70%" }}
      >
        <div
          className={`nav-wrapper nav-wrapper-0 ${open || open2 ? "sub-level-open" : ""}`}
          data-level={0}
          data-index={0}
          bis_skin_checked={1}
        >
          <div className="nav-content" bis_skin_checked={1}>
            <div className="nav-close" bis_skin_checked={1}>
              <a
                href="#"
                className="nav-close-button"
                role="menuitem"
                tabIndex={0}
                aria-label="Close Menu"
                onClick={() => { setShowNav(false) }}

              >
                <span />
              </a>
            </div>
            <ul role="menu" aria-level={1} className="first-nav">
              <li className={`nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-909 nav-parent ${open ? 'level-open' : ''}`}>
                <input
                  type="checkbox"
                  id="hc-nav-1-1-0"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={0}
                  defaultValue="px5b8r4xp6b"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <Link
                    to="/about-us"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    About Us
                  </Link>
                  <a
                    href="#"
                    className="nav-next"
                    aria-label="Submenu: About Us"
                    role="menuitem"
                    tabIndex={0}
                    aria-controls="menu-px5b8r4xp6b"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                  >
                    <span />
                  </a>
                </div>
                <div
                  className="nav-wrapper nav-wrapper-1"
                  data-level={1}
                  data-index={0}
                  bis_skin_checked={1}
                  style={{ visibility: "visible" }}
                >
                  <div className="nav-content" bis_skin_checked={1}>
                    <h2 className="level-title">About Us</h2>
                    <div className="nav-back" bis_skin_checked={1}>
                      <div className="nav-item-wrapper" bis_skin_checked={1}>
                        <a
                          href="#"
                          className="nav-back-button"
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => setOpen(!open)}

                        >
                          Back
                          <span />
                        </a>
                      </div>
                    </div>
                    <ul
                      id="menu-px5b8r4xp6b"
                      role="menu"
                      aria-level={2}
                      className="sub-menu"
                    >
                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-914">
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/our-founder-organisation"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Our Organisation
                          </Link>
                        </div>
                      </li>
                      <hr style={{ margin: "0px" }} />

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1626">
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/founder-message"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Founder Message
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
                      <hr style={{ margin: "0px" }} />

              <li className={`nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1759 nav-parent ${open2 ? 'level-open' : ''} `}>
                <input
                  type="checkbox"
                  id="hc-nav-1-1-1"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={1}
                  defaultValue="j4xx2uyw6c"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <Link
                    to="#"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Our Work
                  </Link>
                  <a
                    href="#"
                    className="nav-next"
                    aria-label="Submenu: Our Work"
                    role="menuitem"
                    tabIndex={0}
                    aria-controls="menu-j4xx2uyw6c"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setOpen2(!open2)}

                  >
                    <span />
                  </a>
                </div>
                <div
                  className="nav-wrapper nav-wrapper-1"
                  data-level={1}
                  data-index={1}
                  bis_skin_checked={1}
                >
                  <div className="nav-content" bis_skin_checked={1}>
                    <h2 className="level-title">Our Work</h2>
                    <div className="nav-back" bis_skin_checked={1}>
                      <div className="nav-item-wrapper" bis_skin_checked={1}>
                        <a
                          href="#"
                          className="nav-back-button"
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => setOpen2(!open2)}

                        >
                          Back
                          <span />
                        </a>
                      </div>
                    </div>
                    <ul
                      id="menu-j4xx2uyw6c"
                      role="menu"
                      aria-level={2}
                      className="sub-menu"
                    >

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-916 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-0"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={0}
                          defaultValue="sc58kjqoakm"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/Literacy-and-Numeracy-Recovery-Program-in-Sokoto-State"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Sokoto Learns
                          </Link>

                        </div>

                      </li>
                      <hr style={{ margin: "0px" }} />

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1744 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-1"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={1}
                          defaultValue="c1bj0fqib1"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/smart-learning-hub"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Smart Learning Hub
                          </Link>

                        </div>

                      </li>
                      <hr style={{ margin: "0px" }} />

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-918 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-2"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={2}
                          defaultValue="s9vnxh687f"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/read-to-lead-campaign"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Read to Lead Campaign
                          </Link>

                        </div>

                      </li>
                      <hr style={{ margin: "0px" }} />
                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1786 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-3"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={3}
                          defaultValue="xp5bs6jddsn"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/capacity-building-for-teachers"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Capacity Building For Teachers
                          </Link>

                        </div>

                      </li>
                    </ul>
                  </div>
                </div>
              </li>
                      <hr style={{ margin: "0px" }} />

              {/* start */}
              <li className={`nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1759 nav-parent ${open3 ? 'level-open' : ''} `}>
                <input
                  type="checkbox"
                  id="hc-nav-1-1-1"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={1}
                  defaultValue="j4xx2uyw6c"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <Link
                    to="#"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >Read To Lead Sokoto
                  </Link>
                  <a
                    href="#"
                    className="nav-next"
                    aria-label="Submenu: Our Work"
                    role="menuitem"
                    tabIndex={0}
                    aria-controls="menu-j4xx2uyw6c"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setOpen3(!open3)}

                  >
                    <span />
                  </a>
                </div>
                <div
                  className="nav-wrapper nav-wrapper-1"
                  data-level={1}
                  data-index={1}
                  bis_skin_checked={1}
                >
                  <div className="nav-content" bis_skin_checked={1}>
                    <h2 className="level-title">Read To Lead Sokoto</h2>
                    <div className="nav-back" bis_skin_checked={1}>
                      <div className="nav-item-wrapper" bis_skin_checked={1}>
                        <a
                          href="#"
                          className="nav-back-button"
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => setOpen3(!open3)}

                        >
                          Back
                          <span />
                        </a>
                      </div>
                    </div>
                    <ul
                      id="menu-j4xx2uyw6c"
                      role="menu"
                      aria-level={2}
                      className="sub-menu"
                    >

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-916 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-0"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={0}
                          defaultValue="sc58kjqoakm"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/Read-to-Lead-Campaign/register"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Register Now
                          </Link>

                        </div>

                      </li>
                      <hr style={{ margin: "0px" }} />

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1744 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-1"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={1}
                          defaultValue="c1bj0fqib1"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/Read-to-Lead-Campaign-Sokoto-registration-system"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Read To Lead Campaign Sokoto Registration
                          </Link>

                        </div>

                      </li>

                    </ul>
                  </div>
                </div>
              </li>
                      <hr style={{ margin: "0px" }} />

              {/* start */}
              <li className={`nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1759 nav-parent ${open4 ? 'level-open' : ''} `}>
                <input
                  type="checkbox"
                  id="hc-nav-1-1-1"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={1}
                  defaultValue="j4xx2uyw6c"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <Link
                    to="#"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    News
                  </Link>
                  <a
                    href="#"
                    className="nav-next"
                    aria-label="Submenu: Our Work"
                    role="menuitem"
                    tabIndex={0}
                    aria-controls="menu-j4xx2uyw6c"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setOpen4(!open4)}

                  >
                    <span />
                  </a>
                </div>
                <div
                  className="nav-wrapper nav-wrapper-1"
                  data-level={1}
                  data-index={1}
                  bis_skin_checked={1}
                >
                  <div className="nav-content" bis_skin_checked={1}>
                    <h2 className="level-title">News</h2>
                    <div className="nav-back" bis_skin_checked={1}>
                      <div className="nav-item-wrapper" bis_skin_checked={1}>
                        <a
                          href="#"
                          className="nav-back-button"
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => setOpen4(!open4)}

                        >
                          Back
                          <span />
                        </a>
                      </div>
                    </div>
                    <ul
                      id="menu-j4xx2uyw6c"
                      role="menu"
                      aria-level={2}
                      className="sub-menu"
                    >

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-916 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-0"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={0}
                          defaultValue="sc58kjqoakm"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
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
                      <hr style={{ margin: "0px" }} />

                      <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1744 nav-parent">
                        <input
                          type="checkbox"
                          id="hc-nav-1-2-1"
                          className="hc-chk"
                          tabIndex={-1}
                          data-level={2}
                          data-index={1}
                          defaultValue="c1bj0fqib1"
                          defaultChecked="false"
                        />
                        <div className="nav-item-wrapper" bis_skin_checked={1}>
                          <Link
                            to="/news/media"
                            className="nav-item-link"
                            tabIndex={0}
                            role="menuitem"
                          >
                            Media
                          </Link>

                        </div>

                      </li>

                    </ul>
                  </div>
                </div>
              </li>
                      <hr style={{ margin: "0px" }} />

              {/* end */}
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-913 nav-parent">
                <input
                  type="checkbox"
                  id="hc-nav-1-1-3"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={3}
                  defaultValue="ql59otlxeql"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <Link
                    to="/work-with-us"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Work With Us
                  </Link>
                  {/* <a
                    href="#"
                    className="nav-next"
                    aria-label="Submenu: Work With Us"
                    role="menuitem"
                    tabIndex={0}
                    aria-controls="menu-ql59otlxeql"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span />
                  </a> */}
                </div>

              </li>
                      <hr style={{ margin: "0px" }} />

              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-913 nav-parent">
                <input
                  type="checkbox"
                  id="hc-nav-1-1-3"
                  className="hc-chk"
                  tabIndex={-1}
                  data-level={1}
                  data-index={3}
                  defaultValue="ql59otlxeql"
                  defaultChecked="false"
                />
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <Link
                    to="/contact-us"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Contact Us
                  </Link>
                  {/* <a
                    href="#"
                    className="nav-next"
                    aria-label="Submenu: Work With Us"
                    role="menuitem"
                    tabIndex={0}
                    aria-controls="menu-ql59otlxeql"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span />
                  </a> */}
                </div>

              </li>
            </ul>
            {/* <ul role="menu" aria-level={1} className="second-nav">
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2130">
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <a
                    href="https://www.light-for-the-world.org/transparency/"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Transparency
                  </a>
                </div>
              </li>
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2131">
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <a
                    href="https://www.light-for-the-world.org/imprint/"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Imprint
                  </a>
                </div>
              </li>
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2132">
                <div className="nav-item-wrapper" bis_skin_checked={1}>
                  <a
                    href="https://www.light-for-the-world.org/support-us/jobs/"
                    className="nav-item-link"
                    tabIndex={0}
                    role="menuitem"
                  >
                    Careers
                  </a>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </nav>

  );
};

export default MobileNav;