import { Link } from "react-router-dom";

const Approach = () => {
  return (
    <>
      <section className="triple-teaser">
        <div className="content-wrapper-inner">
          <h2 className="h1 hl-underline">Our approach</h2>
          <div className="teasers">
            <div className="teasers-item">
              <div className="teasers-item-content">
                <div className="teasers-image-wrap">
                  <div className="teasers-image focus-point-image">
                    <Link to="/news">
                      <figure className="image image-718">
                        <img
                          decoding="async"
                          loading="lazy"
                          style={{ objectPosition: "50% 50%" }}
                          width={1024}
                          height={683}
                          src="https://img.freepik.com/premium-photo/boy-denim-jacket-black-history-month_564714-15423.jpg?ga=GA1.1.709059001.1745352288&semt=ais_hybrid&w=740"
                          srcSet="
                              https://img.freepik.com/premium-photo/boy-denim-jacket-black-history-month_564714-15423.jpg?ga=GA1.1.709059001.1745352288&semt=ais_hybrid&w=740 2048w,
                              https://img.freepik.com/premium-photo/boy-denim-jacket-black-history-month_564714-15423.jpg?ga=GA1.1.709059001.1745352288&semt=ais_hybrid&w=740  1440w,
                              https://img.freepik.com/premium-photo/boy-denim-jacket-black-history-month_564714-15423.jpg?ga=GA1.1.709059001.1745352288&semt=ais_hybrid&w=740  960w
                            "
                          alt="A young man with a protective mask and apron stands in front of a red coffee machine and prepares fresh coffee."
                        />
                        
                      </figure>
                    </Link>
                  </div>
                </div>
                <div className="teasers-item-text-wrap">
                  <div className="teasers-item-text">
                    <h5 className="teasers-item-headline">
                      Promoting Empowerment
                    </h5>
                    <p>
                    Inspiring children to dream big and achieve their
                    potential.
                    </p>
                  </div>
                  <div className="teasers-item-more">
                    <Link
                      to="/news"
                      className="cta-button cta-button-primary"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="teasers-item">
              <div className="teasers-item-content">
                <div className="teasers-image-wrap">
                  <div className="teasers-image focus-point-image">
                    <Link to="/news">
                      <figure className="image image-891">
                        <img
                          decoding="async"
                          loading="lazy"
                          style={{ objectPosition: "50% 50%" }}
                          width={2048}
                          height={1366}
                          src="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/gk190218_lftw_hoima_d01-07316-150x150.jpg"
                          srcSet="
                              https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/gk190218_lftw_hoima_d01-07316-2048x1366.jpg 2048w,
                              https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/gk190218_lftw_hoima_d01-07316-1440x960.jpg  1440w,
                              https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/gk190218_lftw_hoima_d01-07316-960x640.jpg    960w
                            "
                          alt="In der ersten Reihe auf einer Holzschulbank sitzen sieben Jugendliche mit Brillen. Sie alle tragen ein blaues Hemd und blicken in die Kamera."
                        />
                        <figcaption className="sr-only">
                          Brillenverteilung in Schulen© Gregor Kuntscher
                        </figcaption>
                      </figure>
                    </Link>
                  </div>
                </div>
                <div className="teasers-item-text-wrap">
                  <div className="teasers-item-text">
                    <h5 className="teasers-item-headline">
                      Championing inclusive education
                    </h5>
                    <p>
                    Ensuring every child, regardless of background or circumstance, has access to education.
                    </p>
                  </div>
                  <div className="teasers-item-more">
                    <Link
                      to="/news"
                      className="cta-button cta-button-primary"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="teasers-item">
              <div className="teasers-item-content">
                <div className="teasers-image-wrap">
                  <div className="teasers-image focus-point-image">
                    <Link to="/our-work">
                      <figure className="image image-711">
                        <img
                          decoding="async"
                          loading="lazy"
                          style={{ objectPosition: "50% 50%" }}
                          width={1024}
                          height={682}
                          src="https://i.pinimg.com/736x/4e/aa/62/4eaa622fc8424d8f41e8004ac34083fa.jpg"
                          srcSet="
                              https://i.pinimg.com/736x/4e/aa/62/4eaa622fc8424d8f41e8004ac34083fa.jpg 2048w,
                              https://i.pinimg.com/736x/4e/aa/62/4eaa622fc8424d8f41e8004ac34083fa.jpg  1440w,
                              https://i.pinimg.com/736x/4e/aa/62/4eaa622fc8424d8f41e8004ac34083fa.jpg   960w
                            "
                          alt="Education"
                        />
                       
                      </figure>
                    </Link>
                  </div>
                </div>
                <div className="teasers-item-text-wrap">
                  <div className="teasers-item-text">
                    <h5 className="teasers-item-headline">
                      Promoting Sustainability
                    </h5>
                    <p>
                    Designing programs that create long-term impact.
                    </p>
                  </div>
                  <div className="teasers-item-more">
                    <Link
                      to="/our-work"
                      className="cta-button cta-button-primary"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Approach;
