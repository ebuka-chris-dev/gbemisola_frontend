const SocialMedia = () => {
  return (
    <>
      <section className="social-links" style={{ marginBottom: "2rem" }}>
        <h2>Follow Gbemisola Yussuff Foundation</h2>
        <div className="social-links-nav">
          <a
            href="https://www.facebook.com/Gbemisola_Yussuff_Foundation"
            target="_blank"
            className="circle-button circle-button-secondary circle-button-big"
            title="show facebook profile"
          >
            <i className="fa-brands fa-facebook-f"></i>
            <span className="sr-only"> show facebook profile </span>
          </a>
          <a
            href="https://twitter.com/GY_FoundationNG
"
            target="_blank"
            className="circle-button circle-button-secondary circle-button-big"
            title="show twitter profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              {/*! Font Awesome Free 6.4.2 by @fontawesome  - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
            <span className="sr-only"> show twitter profile </span>
          </a>
          <a
            href="https://www.youtube.com/@GbemisolaYussuffFoundation"
            target="_blank"
            className="circle-button circle-button-secondary circle-button-big"
            title="show youtube profile"
          >
            <i className="fa-brands fa-youtube"></i>
            <span className="sr-only"> show youtube profile </span>
          </a>
          <a
            href="https://www.tiktok.com/@gy_foundation"
            target="_blank"
            className="circle-button circle-button-secondary circle-button-big"
            title="show tiktok profile"
          >
            <i className="fa-brands fa-tiktok"></i>
            <span className="sr-only"> show titok profile </span>
          </a>
          <a
            href="https://www.linkedin.com/in/gyfoundation"
            target="_blank"
            className="circle-button circle-button-secondary circle-button-big"
            title="show linkedin profile"
          >
            <i className="fa-brands fa-linkedin"></i>{" "}
            <span className="sr-only"> show linkedin profile </span>
          </a>
        </div>
      </section>
    </>
  );
};
export default SocialMedia;
