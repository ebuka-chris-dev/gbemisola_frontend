import GbemiImage from '../../assets/images/LOGOAsset-1.png'
import { Link } from 'react-router-dom';
import PG3 from "../../assets/images/p3.jpg"
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
            <figcaption className>
            Inclusive education
            </figcaption>
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
                  <span className="current">
                    Our Founder &amp; Organisation
                  </span>
                </div>
                {/* .breadcrumbs */}
                <div className="item-title bold-title">
                  <h1 className="entry-title ">
                    Our Founder &amp; Organisation
                  </h1>
                </div>
                <span className="item-date" />
              </header>
              <div className="subnav-mobile">
                <Link
                  to="/about-us"
                  className="toggle-subnav-mobile"
                >
                  About Us
                </Link>
                <ul className="entry-subnav">
                  <li className="page_item page-item-849">
                    <Link to="/founder-message">
                     Founder Message
                    </Link>{" "}
                  </li>
                </ul>
              </div>
              <section id="readSpeakerSection">
                {/* <section className="contact-box">
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
                    <p>
                    <i class="fa-regular fa-envelope"></i> <a href="mailto:gbemisolayussufffoundation@gmail.com">
                      gbemisolayussufffoundation@gmail.com
                      </a>
                    </p>
                  </div>
                </section> */}
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      Aisha Gbemisola Yussuff is a passionate advocate for education
                      and youth empowerment. Born in Nigeria, Gbemisola left the
                      country at the age of 5 and grew up abroad, where she
                      pursued her education and developed a deep understanding
                      of the transformative power of learning.{" "}
                    </p>
                    <p>
                      After years of living and working internationally,
                      Gbemisola returned to Nigeria with a renewed sense of
                      purpose to give back to her roots and make a meaningful
                      impact on the lives of children in her homeland. Inspired
                      by her own journey and the challenges she witnessed in
                      Nigeria's educational sector, she founded the Gbemisola
                      Yussuff Foundation to address the critical gaps in access
                      and quality of education, particularly in the northern
                      regions.
                    </p>
                    <p>
                      Gbemisola brings a wealth of experience in project
                      management, community development, and advocacy, as well
                      as a heartfelt commitment to creating lasting change.
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
                <h2 className="wp-block-heading core" style={{fontWeight:"600"}}>Future Goals:</h2>
                <ul className="wp-block-list">
                  <li>Reach 10,000 children annually through
                  expanded learning programs by 2027</li>
                  <li>
                  Train 500 teachers in innovative,
                  culturally relevant pedagogies.
                  </li>
                  <li>
                  Build or refurbish 20 schools
                  across Northern Nigeria.
                  </li>
                  <li>
                  Advocate for policies that promote
                  universal education in Nigeria
                  </li>
                </ul>
               
              </section>
            </div>
            <aside className="entry-meta">
              <div className="entry-subnav-wrap">
                <h5 className="entry-subnav-title">
                  <Link to="/our-founder-organisation">
                  Our Founder & Organisation
                  </Link>
                </h5>
                <ul className="entry-subnav">
                  <li className="page_item page-item-1623 current_page_item">
                    <Link
                      to="/our-founder-organisation"
                      aria-current="page"
                    >
                      Our Founder & Organisation
                    </Link>{" "}
                  </li>
                  <li>
                  <Link
                      to="/founder-message"
                    >
                      Founder Message
                    </Link>{" "}
                  </li>
                  
                  <li className="page_item page-item-877">
                    <Link to="/about-us">
                      About Us
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
