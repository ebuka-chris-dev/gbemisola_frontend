import Gallery from "../Gallery";
// import PdfComponent from "../PdfComponent";
// import YouTube from "../Youtube";
import PGImg from "../../../assets/images/p4.jpg"
import bu1 from "../../../assets/images/bu1.JPG"
import bu2 from "../../../assets/images/bu2.jpeg"
import bu3 from "../../../assets/images/bu3.png"
import bu4 from "../../../assets/images/bu12.jpg"
import bu5 from "../../../assets/images/bu5.jpeg"
import bu6 from "../../../assets/images/bu6.jpeg"
import bu7 from "../../../assets/images/bu7.jpeg"
import bu8 from "../../../assets/images/bu8.jpeg"
import bu9 from "../../../assets/images/bu9.jpeg"
import bu10 from "../../../assets/images/bu10.JPG"
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
                <div className="item-title bold-title">
                  <h1 className="entry-title ">Capacity Building for Teachers: Empowering Educators for a Brighter Future</h1>
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
                      As part of our ongoing commitment to educational excellence, we recognize the critical role that
                      well-trained teachers play in shaping the future of our students. In 2026, we’ve made significant strides in building
                      the capacity of teachers across Sokoto and northern states, ensuring they are equipped with the necessary buills
                      and knowledge to provide quality education across various subject areas.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Our Achievements </strong>

                      <br /> So far in 2026, we have successfully trained 620 teachers across three core subjects, English, Mathematics, and Hausa.
                      These teachers have been equipped with innovative teaching methods,
                      curriculum knowledge, and best practices to engage students effectively.
                    </p>
                    <br />
                    <p>
                      Before directly training the teachers, we invested in building a strong foundation by training 35 master trainers, who now lead
                      and facilitate further teacher training. This initiative ensures that there is a sustainable cycle of knowledge transfer, where
                      experienced educators mentor and support their peers, fostering continuous growth.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>The 10–15–15 Teaching Method </strong>
                      <br />
                      One of the key innovations introduced in our teacher training is the 10–15–15 Teaching Method, a structured and
                      interactive lesson format designed to improve classroom engagement
                      and learning outcomes. This method divides a 40-minute lesson into three segments:
                    </p>
                    <ul className="wp-block-list">
                      <li>
                        10 Minutes for review and warm-up, helping students recall prior lessons and preparing them for new learning.
                      </li>
                      <li>
                        15 Minutes for teaching the new topic in small, manageable steps, ensuring clarity and focus
                      </li>
                      <li>
                        15 Minutes for interactive practice, where students engage in group work, peer teaching, and activities that reinforce the lesson.
                      </li>
                    </ul>
                    <p>
                      This approach promotes active learning, faster improvement, and helps keep students engaged throughout the lesson.
                    </p>
                  </div>
                </section>

                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Our Goal for 2026 </strong>
                      <br />
                      Building on our success, we have set an ambitious goal for 2026: to train 2,000 teachers across northern states.
                      This expanded effort will help us reach more educators across the region, improving the quality of education in more classrooms
                      and ensuring that every student has access to qualified, inspired, and empowered teachers.
                    </p>
                    <br />
                    <p>
                      Through our teacher training programs and the introduction of innovative teaching methods like the 10–15–15 Teaching Method,
                      we aim to foster a culture of professional development, where educators are continuously improving their buills, learning new
                      methods, and adapting to the evolving needs of their students. This commitment to capacity building will not only enhance the
                      teaching experience but also contribute to the academic success of students across the region.
                    </p>
                  </div>
                </section>{" "}

                {/* gallery  */}
                <Gallery
                  img1={bu1}
                  img2={bu2}
                  img3={bu3}
                  img4={bu4}
                  img5={bu5}
                  img6={bu6}
                  img7={bu7}
                  img8={bu8}
                  img9={bu9}
                  img10={bu10}


                />                {/* <h4 className="wp-block-heading">
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
