import Gallery from "./Gallery";
import PdfComponent from "./PdfComponent";
import YouTube from "./Youtube";
import PGImg from "../../assets/images/p4.jpg"
const Index = () => {
  return (
    <>
      <article className="post-886 page type-page status-publish hentry category-inclusive-education">
        <div className="page-image focus-point-image">
          <figure className="image image-698">
            <img
              fetchPriority="high"
              loading="lazy"
              style={{ objectPosition: "51.61% 65.34%" }}
              width={2048}
              height={1365}
              src={PGImg}
              srcSet={`${PGImg} 2048w,
                  ${PGImg}  1440w,
                 ${PGImg}    960w
                `}
              alt="Ein Bub sitzt in der ersten Reihe in der Schule und lächelt über sein Heft hinweg in die Kamera. Er trägt eine beigen Fließjacke und ein blaues Hemd."
            />
            <figcaption className>
              Jose Mussena Mozambik 2018 © Ulrich Eigner
            </figcaption>
          </figure>
        </div>
        <div className="content-wrapper-inner">
          <div className="entry-wrap">
            <div className="entry-content pull-up">
              <header>
                <div className="item-title">
                  <h1 className="entry-title">Inclusive Education</h1>
                </div>
                <span className="item-date" />
              </header>
              <div className="subnav-mobile">
                <ul className="entry-subnav" />
              </div>
              <section id="readSpeakerSection">
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>
                        A Nigeria where every child has access to quality
                        education, breaking the cycle of poverty and creating a
                        generation of empowered leaders.
                      </strong>
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      We are passionate to provide inclusive, equitable, and
                      sustainable educational opportunities for children in
                      underserved communities across Northern Nigeria through
                      innovative programs, community engagement, and strategic
                      partnerships.
                    </p>
                  </div>
                </section>
                <h2 className="wp-block-heading">Core Values:</h2>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Equity: </strong>
                      <br /> Ensuring every child, regardless of background or
                      circumstance, has access to education.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Empowerment: </strong>
                      <br /> Inspiring children to dream big and achieve their
                      potential.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Collaboration: </strong>
                      <br /> Building partnerships with communities,
                      governments, and other stakeholders.
                    </p>
                  </div>
                </section>{" "}
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Sustainability: </strong>
                      <br /> Designing programs that create long-term impact.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Integrity: </strong>
                      <br /> Operating with transparency and accountability in
                      all endeavours.
                    </p>
                  </div>
                </section>
                <h2 className="wp-block-heading">
                  Our Program and Initiatives:
                </h2>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Learning Centres: </strong>
                      <br /> Establishing schools and learning hubs in
                      underserved communities, providing a safe and supportive
                      environment for children to learn.
                      <a href="#" target="_blank" rel="noopener">
                        {" "}
                        Learn more
                      </a>
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Mobile and Digital Education:</strong>
                      <br />
                      Gbemisola Yussuff Foundation works with partners reaching
                      nomadic and displaced populations through mobile
                      classrooms and technology-enabled learning.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Girls’ Education Initiative: </strong>
                      <br />
                      Tackling gender disparity in education by creating
                      programs tailored to the needs of girls, including
                      scholarships, mentorship, and safe spaces.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Teacher Training:</strong>
                      <br />
                      Teachers are the bedrock of inclusion.Gbemisola Yussuff
                      Foundation supports teacher training institutions to
                      deliver quality inclusive education training and provide
                      further professional development for education leaders,
                      in-service teachers and specialists. We advocate for
                      greater investment in a workforce that can support the
                      needs of all learners.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p>
                      <strong>Community Engagement: </strong>
                      <br />
                      Working closely with parents, religious leaders, and local
                      governments to build awareness and support for education
                      initiatives.
                    </p>
                  </div>
                </section>
                <h2 className="wp-block-heading">Impact Areas:</h2>
                <strong>Location Areas:</strong>
                <ul className="wp-block-list">
                  <li>Northern Nigeria</li>
                </ul>
                <strong>Target Demographic:</strong>
                <ul className="wp-block-list">
                  <li>
                    Children aged 5-16, particularly girls, internally displaced
                    persons (IDPs), and those in rural areas.
                  </li>
                </ul>
                {/* gallery  */}
                {/* <Gallery/> */}
                {/* <h4 className="wp-block-heading">
                  More information on Inclusive Education
                </h4> */}
                {/* utube  */}
                {/* <YouTube/> */}
                {/* <h3 className="wp-block-heading">Learn More</h3> */}
                {/* pdf  */}
                {/* <PdfComponent /> */}
              </section>
            </div>
            <aside className="entry-meta">
              <div className="entry-subnav-wrap">
                <ul className="entry-subnav" />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default Index;
