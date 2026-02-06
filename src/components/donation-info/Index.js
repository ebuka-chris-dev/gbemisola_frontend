import { Link } from "react-router-dom";
import DonatioinImage from "../../assets/images/p6.jpg"

const Index = () => {
  return (
    <>
      <article className="post-867 page type-page status-publish hentry">
        <div className="page-image focus-point-image">
          <figure className="image image-868">
            <img fetchPriority="high" loading="lazy" style={{ objectPosition: '50% 50%' }} width={1024} height={682}
              src={DonatioinImage} srcSet={`
                 ${DonatioinImage} 2048w,
                 ${DonatioinImage} 1440w,
                  ${DonatioinImage}   960w
                `} alt="donation information" />

          </figure>
        </div>
        <div className="content-wrapper-inner">
          <div className="entry-wrap">
            <div className="entry-content pull-up">
              <header>
                <div className="item-title">
                  <h1 className="entry-title">Donation Information</h1>
                </div>
                <span className="item-date" />
              </header>
              <div className="subnav-mobile">
                <ul className="entry-subnav" />
              </div>
              <section id="readSpeakerSection">
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p className="paragraph">
                      <strong>Are you interested in donating to Gbemisola Yussuff Foundation? Read on to learn more about our financial
                        transparency and other common
                        questions.</strong>
                    </p>
                  </div>
                </section>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <p />
                  </div>
                </section>
                {/* <h2 className="wp-block-heading">
                  Frequently Asked Questions (FAQs)
                </h2> */}
                <h4 className="wp-block-heading">
                  How Your Donation Makes a Difference
                </h4>
                <ul className="wp-block-list paragraph">
                  <li>
                    <strong>Book Donations </strong><br />
                    Help us build libraries and provide children with books to improve literacy and learning.
                  </li>
                  <li>
                    <strong>Technology Support </strong><br />
                    Contribute refurbished computers, tablets, and other ICT tools to power our Smart Learning Hub, where children learn coding, AI, and digital skills.
                  </li>

                  <li>
                    <strong>School Refurbishment </strong><br />
                    Your donations will help renovate schools, supply learning materials, and create safe, inspiring spaces for education.
                  </li>

                  <li>
                    <strong>Sponsor a Child’s Education </strong><br />
                    With just a small monthly donation, you can support a child's school fees, books, and mentorship programs.
                  </li>

                  <li>

                    <strong>How can I donate to Gbemisola Yussuff Foundation?</strong><br />
                    <Link to="/donations"  rel="noreferrer noopener">Click here to make a monthly or one-time donation
                      online</Link>
                    — it’s fast, easy, and secure! If you would
                    like to make the greatest possible impact, please consider
                    signing up for a monthly donation. <br />
                  </li>

                </ul>
                <h3>
                  Ways to Give
                </h3>
                <ul className="wp-block-list paragraph">
                  <li>
                    <strong>Donate Money </strong><br />
                    Every contribution, big or small, helps us reach more children. Click the button below to make a secure one time online donation.
                   
                    <a href="https://paystack.shop/pay/c3tryqx072" style={{color:"blue"}} target="_blank" rel="noreferrer noopener"> [Donate Now] </a>

                  </li>
                  <li>
                    <strong>Donate Books </strong><br />
                    Send new or gently used books to help children develop reading skills. Contact us for donation drop-off locations or shipping details.
                    Email us at donations@gbemisolayussufffoundation.org for more details.
                  </li>
                  <li>
                    <strong>Donate Computers & ICT Tools </strong><br />
                    Help us equip students with digital literacy and 21st-century skills. Contact us to arrange a donation.
                  </li>
                </ul>
                <section className="paragraph">
                  <div className="paragraph__container">
                    <h3>
                      Be a Champion for Education
                    </h3>
                    <p>
                      Your generosity will change lives, uplift communities, and create a brighter future for children in Nigeria. Join us in making a lasting impact.
                      Together, let’s educate, empower, and transform lives—one child at a time.

                    </p>
                  </div>
                </section>

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
