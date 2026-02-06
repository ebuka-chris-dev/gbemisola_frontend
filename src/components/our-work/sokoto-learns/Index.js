// import Gallery from "../Gallery";
// import PdfComponent from "../PdfComponent";
// import YouTube from "../Youtube";
import PGImg from "../../../assets/images/p4.jpg"


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
            
          </figure>
        </div>
        <div className="content-wrapper-inner">
          <div className="entry-wrap">
            <div className="entry-content pull-up">
              <header>
                <div className="item-title bold-title">
                  <h1 className="entry-title ">Sokoto Learns: Literacy and Numeracy Recovery Program in Sokoto State</h1>
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
                     At the heart of our commitment to education, Sokoto Learns is designed to address educational gaps and improve student 
                     outcomes in Sokoto State. This initiative focuses on enhancing core subjects, English, Mathematics, and Hausa, by providing targeted support to students across 100 schools in the state. These schools are 
                     strategically distributed across various education zones, ensuring that no student is left behind in their educational journey.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Program Overview: </strong>
                      <br />
                      Sokoto Learns spans across 100 schools in Sokoto State, with 15 schools in each education zone, 
                      and 20 schools in the Goronyo and Yabo Education Zones. This wide reach enables us to make a meaningful impact
                       in both urban and rural areas,
                       focusing on both the educational needs of students and the capacity building of local teachers.
                    </p>
                    
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Academic Framework & Innovation: </strong>
                      <br />
                      We’ve introduced a structured curriculum that includes daily engagement to ensure consistent academic growth.
                    </p>
                    <ul className="wp-block-list">
                      <li>
                        <strong> Standardized Curriculum:</strong> Tailored lesson plans are created for English, Mathematics, and Hausa, ensuring a strong foundation in each subject.
                      </li>
                      <li>
                        <strong> Daily Engagement:</strong>  All students are required to complete daily homework, reinforcing classroom learning and promoting self-study.
                      </li>
                      <li>
                        <strong>	Performance Tracking: </strong>	To keep students and teachers on track, we’ve implemented weekly “Friday Tests”
                         that assess students' progress and identify areas for improvement.
                      </li>
                      <li>
                        <strong>Incentive Program: </strong> Our “Star of the Week” initiative recognizes and rewards three outstanding students 
                        annually for their top performances in weekly tests, 
                        fostering a spirit of healthy competition and motivating students to strive for excellence.
                      </li>
                      
                    </ul>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Monitoring & Evaluation </strong>
                      <br />
                      To ensure continuous improvement, the program incorporates a robust monitoring system that combines physical and digital tracking:
                    </p>
                    <ul className="wp-block-list">
                      <li>
                       <strong>	Physical Visits:</strong> Weekly on-site visits by our team enable hands-on monitoring of teaching methods and student engagement.
                      </li>
                      <li>
                        <strong>Digital Reporting: </strong>
                        Teachers in each zone use WhatsApp groups to provide real-time updates on classroom activities, facilitating 
                        quick responses to challenges and enabling collaborative learning among educators.
                      </li>
                      
                    </ul>
                  </div>
                </section>
                 <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Empowering the Future</strong>
                      <br/>
                      By focusing on key subjects and fostering a culture of performance and accountability, Sokoto Learns plays a pivotal role in shaping the future of Sokoto’s young learners. We are committed to empowering students with the knowledge and skills necessary to
                       thrive in an ever-changing world, helping them achieve academic excellence and unlock their full potential.
                    </p>

                  </div>
                </section>
              
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
