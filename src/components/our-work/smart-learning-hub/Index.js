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
                  <h1 className="entry-title ">Smart Learning Hub: Bridging the Digital Divide and Fostering a New Generation of Learners</h1>
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
                      The Smart Learning Hub is an innovative initiative by the Gbemisola Yussuff Foundation, 
                      designed to create modern school libraries integrated with Information and Communication Technology (ICT) 
                      and Artificial Intelligence (AI) resources. The goal is to provide students, especially in underserved communities,
                       with access to books, digital learning tools, and foundational ICT training, including coding and AI education. By doing so, 
                       we aim to bridge the digital divide and give every child the opportunity to thrive in a tech-driven world
                    </p>
                  </div>
                </section>
              <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Project Overview </strong>
                    
                      <br />
                      The Smart Learning Hub will create technology-enabled learning spaces within schools, providing students with a well-rounded 
                      education that includes not only traditional reading materials but also modern digital resources. This initiative focuses on
                       equipping students with the literacy skills needed to succeed,
                       while also introducing them to the digital skills that will be essential for their future.
                    </p>
                    <br/>
                    <p>
                      Through this project, students will have access to modern educational resources, such as computers, internet connectivity, 
                      and e-learning materials, helping them develop a well-rounded 
                      skill set that prepares them for future opportunities in the technology-driven world.
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Project Objectives </strong>
                      <br /> 
                    </p>
                    <ul className="wp-block-list">
                  <li> <strong> Promote Literacy & Reading Culture:</strong>	 Ensure every child has access to a wide variety 
                    of books and develops strong reading skills that are fundamental for academic success.
                    </li>
                    <li>
                      <strong> Introduce ICT Skills:</strong>
                      Provide early exposure to digital literacy, including basic computer skills, 
                      internet usage, and online research, so that students are prepared for a rapidly evolving world.
                    </li>
                    <li>
                      <strong> Introduce Artificial Intelligence & Coding: </strong>
                      Teach students the fundamentals of programming, problem-solving, and 
                      AI concepts in a simple, engaging way, opening doors to future career paths in tech.
                    </li>
                    <li>
                      <strong>Create a Technology-Enabled Learning Space: </strong>
                      Establish fully-equipped school libraries with computers, internet access, and a range of e-learning materials to facilitate 
                      interactive and engaging learning experiences.
                    </li>
                    <li>
                      <strong>Support Teachers with Digital Learning Tools: </strong>
                      Provide educators with the training and digital resources they need to integrate ICT and AI into their teaching,
                       helping them better 
                      engage their students and foster a more dynamic learning environment.
                    </li>
                </ul>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container core">
                    <p>
                      <strong>Empowering Students and Teachers for the Future </strong>
                      <br />
                      The Smart Learning Hub is more than just a project; it is a stepping stone toward transforming education in 
                      underserved communities. By promoting literacy, introducing ICT and AI concepts, and providing teachers with 
                      the resources they need, the project will empower
                       students to unlock their full potential and succeed in an increasingly digital world.
                    </p>
                  </div>
                </section>{" "}
               
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
