import { Link } from "react-router-dom";
import MissionImg from "../../assets/images/mission2.jpg";


const Mission = () => {
  return (
    <>
      <section className="single-teaser">
        <div className="single-teaser-bg" />
        <div className="content-wrapper">
          <div className="single-teaser-inner content-wrapper-inner">
            <div className="single-teaser-image focus-point-image">
              <Link to="/our-work">
                <figure className="image image-1404">
                  <img
                    decoding="async"
                    loading="lazy"
                    style={{ objectPosition: "50% 50%" }}
                    width={1024}
                    height={683}
                    src={MissionImg}
                    srcSet={`
                     ${MissionImg} 2048w,
                       ${MissionImg}  1440w,
                       ${MissionImg}   960w
                      `}
                    alt="Inclusive education support"
                  />

                </figure>
              </Link>
            </div>
            <div className="single-teaser-content">
              <h2 className="h1 hl-underline single-teaser-content-hl">
                <Link to="/our-work">
                  Our mission &amp; vision
                </Link>
              </h2>
              <div className="single-teaser-text">
                <p>
                  <strong />
                </p>
                <p>
                Our mission is to empower children and communities through quality,
                 innovative education that promotes literacy, digital learning, and skills development, especially in underserved areas.
                </p>
                <br />
                <Link
                  to="/about-us"
                  className="cta-button"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Mission;
