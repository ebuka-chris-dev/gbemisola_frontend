import { useNavigate } from 'react-router-dom';
// import Gallery from "../Gallery";
// import PdfComponent from "../PdfComponent";
// import YouTube from "../Youtube";
import PGImg from "../../../assets/images/p8.jpg"
import sokoImg from "../../../assets/images/sokotoreg.jpg"

const Index = () => {
  const navigate = useNavigate();

  const floatingButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#218838",
    color: "white",
    padding: "15px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    zIndex: 1000
  };
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
                  <h1 className="entry-title ">Read to Lead Campaign – Sokoto Registration System</h1>
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
                      The Read to Lead Campaign is an initiative by the Gbemisola Yussuff Foundation aimed at promoting a strong
                      reading culture among children, especially in underserved communities. The campaign focuses on improving literacy,
                      comprehension, and
                      communication skills while empowering young learners to become confident readers and future leaders.
                    </p>
                    <p>
                      As part of this initiative, we are organizing engaging academic competitions
                      designed to develop students’ reading, speaking, and critical thinking abilities.
                    </p>
                  </div>
                </section>
                 <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>The Competitions Includes: </strong>
                    </p>
                    <ul className="wp-block-list">
                      <li>
                        Read Aloud & Debate Competition.
                      </li>
                      <li>
                        Spelling Bee Competition.
                      </li>
                     
                    </ul>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Participation Guidelines: </strong>
                      <br />
                      Schools are invited to register their students under the following guidelines:
                    </p>
                    <ul className="wp-block-list">
                      <li>
                        Each school can register for only one competition category.
                      </li>
                      <li>
                        Schools must select either JSS or SS for participation (not both).
                      </li>
                      <li>
                        Students cannot participate in more than one competition
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>For Primary School Category:</strong>
                      <br />
                    </p>
                    <ul className="wp-block-list">
                      <li>
                        Only students in Primary 4 to Primary 6 are eligible.
                      </li>
                      <li>
                        Schools can register for either the Spelling Bee OR the Read Aloud & Debate competition.
                      </li>
                      <li>
                        Primary school students are not allowed to participate in both competitions.
                      </li>
                    </ul>
                    <p>
                      Through this campaign, we aim to inspire a lifelong love for reading, strengthen language skills in both English
                      and local languages,
                      and create opportunities for students to showcase their talents on a meaningful platform.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Event Schedule & Timeline </strong>
                      <br />
                      The Read to Lead Campaign will run as a structured, multi-stage competition across different zones, giving students
                      the opportunity to participate and showcase their talents within their local areas.
                    </p>
                    <ul className="wp-block-list">
                      <li>
                        <strong>	May 14th – Flag-Off Ceremony</strong>
                        <br />
                        The campaign officially begins with an opening event to launch the competitions.
                      </li>
                      <li>
                        <strong>May 18th – June 7th - Zonal Competitions (4 Weeks) </strong>
                        <br />
                        Competitions will take place weekly across the six zones.
                        <br />
                        Each week, a specific zone will host its competition, and all registered schools will be informed in advance of
                        <br />
                        o	The date
                        <br />
                        o	The location
                        <br />
                        o	The competition schedule
                      </li>
                      <li><strong>June 15th – Grand Finale </strong>
                        <br />
                        Winners from all zones will compete in the final stage of the competition.
                      </li>
                      <li>
                        <strong>	June 16th – Closing Ceremony & Awards </strong>
                        <br />
                        The campaign will conclude with a closing ceremony where:
                        <br />
                        o	Certificates will be awarded to participants
                        <br />
                        o	Trophies and prizes will be presented to winners
                        <br />
                        o	Achievements will be celebrated
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Important Note</strong> <br />
                      All participating schools will receive timely updates regarding their specific competition dates, venues,
                      and guidelines for each stage.
                    </p>

                  </div>
                </section>
                {/* registration button  */}
               <button
                style={floatingButtonStyle}
                onClick={() => navigate('/read-to-lead-campaign/register')}
              >
                Click to Register 
              </button>

                {/* gallery  */}
                <img src={sokoImg} alt='imgss' />

                {/* <Gallery 
                img1={sokoImg}
                img2={sk2}
                img3={sk3}
                img4={sk4}
                img5={sk5}
                img6={sk6}
                img7={sk7}
                img8={sk8}
                img9={sk9}
                img10={sk10}
                /> */}

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
