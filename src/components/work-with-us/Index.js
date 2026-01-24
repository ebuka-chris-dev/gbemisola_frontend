import { Link } from "react-router-dom";
import DonationImage from "../../assets/images/donation-1.jpg";

const Index = () => {
  return (
    <>
      <article className="post-863 page type-page status-publish hentry">
        <header>
          <div className="page-image focus-point-image focus-point-image-bg">
            <h1 className="hl-underline hl-underline-centered">Donations</h1>
            <figure className="image image-866 bg-image">
              <img
                loading="lazy"
                style={{ objectPosition: "50% 50%" }}
                width={1024}
                height={683}
                src={DonationImage}
                srcSet={`
                   ${DonationImage} 2048w,
                    ${DonationImage}  1440w,
                     ${DonationImage}   960w
                  `}
                alt="Small child looking at the camera while holding a water tank where water is coming out."
              />
            
            </figure>
          </div>
        </header>
        <div className="content-wrapper-inner">
          {/* <div className="entry-text-to-speech">
            <div id="readspeaker_button1" className="rs_skip rs_preserve rs_href">
              <a className="rsbtn_play cta-button cta-button-secondary cta-button-medium cta-button-icon-left text-uppercase" accessKey="L" title="Listen to this page using ReadSpeaker" href="//app-eu.readspeaker.com/cgi-bin/rsent?customerid=6465&lang=en_uk&readid=readSpeakerSection&url=https%3A%2F%2Fwww.light-for-the-world.org%2Fsupport-us%2Fdonate-now%3Fpage%26pagename%3Dsupport-us%2Fdonate-now" onclick="readpage(this.href, 'readSpeakerControls'); return false;">
                <i className="fa fa-play" />Listen
              </a>
            </div>
            <div id="readSpeakerControls" className="rs_preserve rs_skip rs_addtools rs_splitbutton rs_exp" />
          </div> */}
          <section id="readSpeakerSection">
            <section className="paragraph">
              <div className="paragraph__container">
                <p />
              </div>
            </section>
            <section className="paragraph">
              <div className="paragraph__container">
                <p>
                At Gbemisola Yussuff Foundation (GYF), we believe that every child deserves access to quality education. Millions of children in Nigeria are out of school due to poverty, lack of resources, and inadequate infrastructure. With your support, we can 
                change this reality by providing books, digital learning tools, and educational opportunities to underserved communities.
                </p>
              </div>
            </section>
            <section className="triple-teaser">
              <div className="content-wrapper-inner">
                <h2 className="h1 hl-underline">How you can help</h2>
                <div className="teasers">
                  <div className="teasers-item">
                    <div className="teasers-item-content">
                      <div className="teasers-image-wrap">
                        <div className="teasers-image focus-point-image">
                          <a href="https://paystack.shop/pay/c3tryqx072" target="_blank">
                            <figure className="image image-194">
                              <img
                                decoding="async"
                                loading="lazy"
                                style={{ objectPosition: "44.56% 47.79%" }}
                                width={1024}
                                height={845}
                                src="https://i.pinimg.com/736x/f9/39/6a/f9396a7cfbffdbf9143f228202451016.jpg"
                                srcSet="
                                   https://i.pinimg.com/736x/f9/39/6a/f9396a7cfbffdbf9143f228202451016.jpg 2048w,
                                   https://i.pinimg.com/736x/f9/39/6a/f9396a7cfbffdbf9143f228202451016.jpg  1440w,
                                    https://i.pinimg.com/736x/f9/39/6a/f9396a7cfbffdbf9143f228202451016.jpg  960w
                                  "
                                alt="donate."
                              />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="teasers-item-text-wrap">
                        <div className="teasers-item-text">
                          <h5 className="teasers-item-headline">
                            Donate online
                          </h5>
                          <p>
                            With one click, help us shape a more inclusive
                            world!
                          </p>
                        </div>
                        <div className="teasers-item-more">
                          <a href="#" className="cta-button cta-button-primary">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="teasers-item">
                    <div className="teasers-item-content">
                      <div className="teasers-image-wrap">
                        <div className="teasers-image focus-point-image">
                          <Link to="/partnerships/">
                            <figure className="image image-865">
                              <img
                                decoding="async"
                                loading="lazy"
                                style={{ objectPosition: "53.92% 45.43%" }}
                                width={1024}
                                height={683}
                                src="https://i.pinimg.com/736x/13/7e/75/137e759ff27dbd99a3245425cd2a00cd.jpg"
                                srcSet="
                                    https://i.pinimg.com/736x/13/7e/75/137e759ff27dbd99a3245425cd2a00cd.jpg 2048w,
                                   https://i.pinimg.com/736x/13/7e/75/137e759ff27dbd99a3245425cd2a00cd.jpg  1440w,
                                    https://i.pinimg.com/736x/13/7e/75/137e759ff27dbd99a3245425cd2a00cd.jpg  960w
                                  "
                                alt="partnership"
                              />
                              <figcaption className="sr-only">
                                Awutsaro Alako © Gbemisola Yussuff Foundation
                              </figcaption>
                            </figure>
                          </Link>
                        </div>
                      </div>
                      <div className="teasers-item-text-wrap">
                        <div className="teasers-item-text">
                          <h5 className="teasers-item-headline">
                            Partner with us
                          </h5>
                          <p>
                            Together, we can achieve more. Whether as a company
                            or a foundation, we look forward to your inquiry.
                          </p>
                        </div>
                        <div className="teasers-item-more">
                          <Link
                            to="/partnerships"
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
                          <Link to="/donation-information/">
                            <figure className="image image-864">
                              <img
                                decoding="async"
                                loading="lazy"
                                style={{ objectPosition: "54.14% 44.37%" }}
                                width={1024}
                                height={684}
                                src="https://i.pinimg.com/474x/c7/27/5d/c7275d7d339d98e184e10f43ada26a68.jpg"
                                srcSet="https://i.pinimg.com/474x/c7/27/5d/c7275d7d339d98e184e10f43ada26a68.jpg
                                2048w,
                               https://i.pinimg.com/474x/c7/27/5d/c7275d7d339d98e184e10f43ada26a68.jpg
                                1440w,
                                https://i.pinimg.com/474x/c7/27/5d/c7275d7d339d98e184e10f43ada26a68.jpg
                                960w"
                                alt="donation information "
                              />
                            </figure>
                          </Link>
                        </div>
                      </div>
                      <div className="teasers-item-text-wrap">
                        <div className="teasers-item-text">
                          <h5 className="teasers-item-headline">
                            Learn about donating
                          </h5>
                          <p>
                            Do you have questions about donating? Read our
                            Frequently Asked Questions (FAQs).
                          </p>
                        </div>
                        <div className="teasers-item-more">
                          <Link
                            to="/donation-information/"
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
          </section>
        </div>
      </article>
    </>
  );
};

export default Index;
