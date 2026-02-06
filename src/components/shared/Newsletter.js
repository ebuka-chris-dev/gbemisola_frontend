import NewsLetterImg from "../../assets/images/pattern-full.svg"
const Newsletter = () => {
  return (
    <>
      <section className="newsletter-subscribe">
        <div>
          <img
            src={NewsLetterImg}
            alt=""
            className="bg-image"
          />
          <h2>Subscribe to our newsletter</h2>
          <br/>
          <p>
            <strong>
              Want to keep up to date with all our latest news and information?
            </strong>
          </p>
          <br/>

          <a href="#" className="cta-button">
            Subscribe
          </a>
        </div>
      </section>
    </>
  );
};
export default Newsletter;
