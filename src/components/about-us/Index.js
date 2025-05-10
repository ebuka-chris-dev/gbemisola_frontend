import GbemiImage from "../../assets/images/LOGOAsset-1.png";
import { Link } from "react-router-dom";
import PG3 from "../../assets/images/p4.jpg"
// import MainLogo from 

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
                  {/* <span className="current">Founder Message</span> */}
                </div>
                {/* .breadcrumbs */}
                <div className="item-title">
                  <h3 className="entry-title">About Us - Gbemisola Yussuff Foundation </h3>
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
                    <div >
                      <figure className="image image-3901">
                        <img
                          decoding="async"
                          loading="lazy"
                          style={{ objectPosition: "50% 50%" }}
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
                    <p style={{marginBottom:".5em"}}>Founder of Gbemisola Yussuff Foundation</p>
                    {/* className="contact-box-infos-mail" */}
                    <p >
                      <i className="fa-regular fa-envelope"></i>{" "}
                      <a href="mailto:gbemisolayussufffoundation@gmail.com">
                        gbemisolayussufffoundation@gmail.com
                      </a>
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>
                        Who We Are
                      </strong>  <br />
                      The Gbemisola Yussuff Foundation (GYF) is a nonprofit organisation dedicated to empowering underserved children in  Nigeria through education, literacy, and digital skills development. Founded by Gbemisola Yussuff, who grew up and studied in the UK before returning to Nigeria, the foundation is committed to bridging the educational gap and ensuring every child has the opportunity to succeed.

                    </p>
                    <p>
                      <strong>
                        Why Our Work Matters
                      </strong>
                      <br />
                      Nigeria has the highest number of out-of-school children in the world, with an estimated 20 million children lacking access to education. The northern region is the most affected, particularly in states like Borno, Yobe, and Adamawa, where conflicts and socio-economic challenges have severely impacted education. Girls are disproportionately affected, with millions unable to attend school due to poverty, early marriage, and cultural barriers.
                    </p>
                    <p>
                      <strong>
                        Our Mission
                      </strong>
                      <br />
                      Our mission is to equip children with the knowledge and skills they need for a brighter future by providing access to quality books, digital learning resources, and ICT training in schools and communities.

                    </p>
                    <p>
                      <strong>
                        Our Vision
                      </strong>
                      <br />
                      We envision a world where every child, regardless of background, has access to quality education and technology, enabling them to unlock their full potential and contribute to society

                    </p>
                    <strong className="wp-block-heading">Our Key Initiatives:</strong>
                    <ul className="wp-block-list">
                      <li>
                        Read to Lead Campaign – Promoting literacy through school libraries, book donations, storytelling sessions, and reading competitions.
                      </li>
                      <li>
                        Smart Learning Hub – Establishing ICT and AI learning centres to teach coding and digital skills to young learners.
                      </li>
                      <li>
                        Educational Outreach – Supporting schools, training teachers, and mentoring students in underserved communities.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        How We Work
                      </strong>
                      <br />
                      We collaborate with government agencies, corporate partners, and international organisations to ensure sustainable educational programs that make a real impact in the lives of children.
                    </p>
                    <p>
                      <strong>
                        Join Us
                      </strong>
                      <br />
                      Together, we can build a future where every child has the tools to learn, grow, and succeed. Support our mission by donating, volunteering, or partnering with us to create lasting change.
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
                  <Link to="/about-us">About Us</Link>
                </h5>
                <ul className="entry-subnav">
                  <li className="page_item page-item-1623 current_page_item">
                    <Link
                      to="/about-us"
                      aria-current="page"
                    >
                      About us               
                           </Link>{" "}
                  </li>
                  <li className="page_item page-item-877">
                    <Link to="/founder-message">
                      Founder Message
                    </Link>{" "}
                  </li>
                  <li className="page_item page-item-877">
                    <Link to="/our-founder-organisation">
                      Our Founder &amp; Organisation
                    </Link>{" "}
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
