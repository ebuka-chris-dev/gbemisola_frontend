import FooterLogo from "../../assets/images/LOGOAsset-1.png"
const Footer = () => {
  return (
    <>
      <footer className="content-info">
        <div className="footer-main">
          <div className="content-wrapper-inner">
            <div className="footer-main-bottom">
              <div className="footer-address">
                UYK Hexahub Plot 1077A Balanga Cresent, Garki, Abuja

                {/* <br />
                Tel +234 810 172 1180 */}

                <br />
                <a href="mailto:info@light-for-the-world.org" style={{ fontSize: "12px" }}>
                  Info@gbemisolayussufffoundation.org
                </a>
                {/* <br /> */}
                {/* <br />
                IBAN: AT61 2011 1800 8033 0000
                <br />
                BIC: GIBAATWW */}
              </div>
              <div className="footer-seal">
                <a
                  href="#"
                  target="_blank"
                  title="more information"
                >
                  <img
                    src={FooterLogo}
                    width={341}
                    height={341}
                    alt="The Austrian Quality Seal of Donation"
                    title="quality_seal_of_donation_l-int"
                  />
                </a>
              </div>
              <div className="footer-country-nav">
                <h4>Gbemisola Yussuff
                  Foundation in your country</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="content-wrapper-inner">
            <span className="footer-copyright">
              © 2025 - Gbemisola Yussuff Foundation
            </span>
            <div className="menu-footer-container">
              <ul id="menu-footer" className="nav">
                <li
                  id="menu-item-2458"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2458"
                >
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>
                {/* <li
                  id="menu-item-2459"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2459"
                >
                  <a href="https://www.light-for-the-world.org/transparency/">
                    Transparency
                  </a>
                </li>
                <li
                  id="menu-item-5761"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5761"
                >
                  <a href="https://www.light-for-the-world.org/imprint/">
                    Imprint
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
