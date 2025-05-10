import GbemiImage from "../../assets/images/gbe.png";
import { Link } from "react-router-dom";
import PG3 from "../../assets/images/p4.jpg";

const Index = () => {
  return (
    <>
      <article className="post-1623 page type-page status-publish hentry">
        <div className="page-image focus-point-image">
          <figure className="image image-857">
            <img
              fetchPriority="high"
              loading="lazy"
              style={{ objectPosition: "52.02% 31.45%" }}
              width={1200}
              height={800}
              src={PG3}
              srcSet={`${PG3} 2048w,
                           ${PG3} 1440w, 
                            ${PG3} 960w
                            `}
              alt="inclusive education"
            />
            <figcaption className>Inclusive education</figcaption>
          </figure>
        </div>
        <div className="content-wrapper-inner">
          <div className="entry-wrap">
            <div className="entry-content  pull-up ">
              <header>
                <div className="breadcrumb">
                  <span typeof="v:Breadcrumb">
                    <a rel="v:url" property="v:title" href>
                      About Us
                    </a>
                  </span>{" "}
                  <span className="delimiter">/</span>{" "}
                  <span className="current">Founder Message</span>
                </div>
                {/* .breadcrumbs */}
                <div className="item-title">
                  <h1 className="entry-title">Founder Message </h1>
                </div>
                <span className="item-date" />
              </header>
              <div className="subnav-mobile">
                <Link to="/about-us/" className="toggle-subnav-mobile">
                  About Us
                </Link>
                <ul className="entry-subnav">
                  <li className="page_item page-item-849">
                    <Link to="/founder-message">Founder Message </Link>{" "}
                  </li>
                </ul>
              </div>
              <section id="readSpeakerSection">
                <section className="contact-box">
                  <div className="contact-box-image">
                    <div>
                      <figure className="image image-3901">
                        <img
                          decoding="async"
                          loading="lazy"
                          style={{ objectPosition: "50% 50%" ,borderRadius:"50%"}}
                          width={2048}
                          height={1365}
                          src={GbemiImage}
                          srcSet=""
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="contact-box-infos">
                    <h5>Gbemisola Yussuf</h5>
                    <p style={{ marginBottom: ".5em" }}>
                      Founder of Gbemisola Yussuff Foundation
                    </p>
                    {/* className="contact-box-infos-mail" */}
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      Dear Friends, <br />I am deeply honoured to share the
                      journey and vision behind the Gbemisola Yussuff Foundation
                      (GYF) with you. This foundation is not just an
                      organization; it reflects a dream rooted in my personal
                      story and a profound desire to create lasting change.
                    </p>
                    <p>
                      Born in Nigeria, I had the privilege of experiencing life
                      abroad from the age of five. While I grew up in an
                      environment where education was a given, I never lost
                      sight of the reality faced by countless children back
                      home, particularly in Northern Nigeria where access to
                      quality education is often a luxury, not a right. Each
                      visit back to Nigeria revealed the same challenges:
                      bright, hopeful children held back by circumstances beyond
                      their control.
                    </p>
                    <p>
                      This realisation stayed with me and fuelled a burning
                      question:{" "}
                      <i>
                        What can I do to ensure these children, too, have a
                        chance to dream, learn, and thrive?
                      </i>
                    </p>
                    <p>
                      Returning to Nigeria years later, I saw the same
                      challenges magnified but also recognised the resilience
                      and potential of the people. The inspiration for the
                      Gbemisola Yussuff Foundation came from this duality the
                      urgent need for action and the boundless possibilities
                      that education can unlock.
                    </p>
                    <p>
                      At GYF, our mission is simple but powerful: to bridge the
                      gap between potential and opportunity. By focusing on
                      education, particularly in underserved communities, we aim
                      to empower children to break free from cycles of poverty
                      and create brighter futures for themselves, their
                      families, and their communities.
                    </p>
                    <p>
                      This work is deeply personal, and it could not happen
                      without your support. Together, we have the power to spark
                      change that resonates far beyond the classroom walls.
                    </p>
                    <p>
                      Thank you for believing in this mission and for joining us
                      on this journey. Let’s build a brighter tomorrow, one
                      child at a time.
                    </p>
                    <p>With gratitude and hope,</p>
                    <p>
                      Gbemisola Yussuff <br />
                      Founder, Gbemisola Yussuff Foundation
                    </p>
                  </div>
                </section>
                {/* <section className="cta-block">
                  <h2 className="hl-underline">Meet Our Board</h2>
                  <p></p>
                  <p>Get to know the people behind our organisation.</p>
                  <p />
                  <a
                    href="https://www.light-for-the-world.org/about-us/our-people/"
                    className="cta-button"
                  >
                    Learn more
                  </a>
                </section> */}
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p />
                  </div>
                </section>
              </section>
            </div>
            <aside className="entry-meta">
              <div className="entry-subnav-wrap">
                <h5 className="entry-subnav-title">
                  <Link to="/founder-message">Founder Message</Link>
                </h5>
                <ul className="entry-subnav">
                  <li className="page_item page-item-1623 current_page_item">
                    <Link to="/founder-message" aria-current="page">
                      Founder Message
                    </Link>{" "}
                  </li>
                  <li className="page_item page-item-877">
                    <Link to="/our-founder-organisation">
                      Our Founder &amp; Organisation
                    </Link>{" "}
                  </li>
                  <li className="page_item page-item-877">
                    <Link to="/about-us">About Us</Link>{" "}
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default Index;
