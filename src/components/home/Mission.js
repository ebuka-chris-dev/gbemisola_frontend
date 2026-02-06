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
                  Our mission is to empower children and communities by providing access to quality education through innovative programs.
                  We are committed to fostering literacy and numeracy, promoting digital learning, and creating opportunities for skills
                  development in underserved areas. Through our read to lead campaigns, smart learning hubs, and educational outreach,
                  we aim to equip young learners with the tools they need to thrive in a rapidly changing world.
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
