import PGImg from "../../assets/images/p4.jpg"
import { useState } from "react";
import { API_URI } from "../../store/constant";
import { toast } from 'react-toastify';


const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "16px",
  transition: "border-color 0.3s",
  marginBottom: "10px",
};

const textAreaStyle = {
  ...inputStyle,
  height: "100px",
};

const buttonStyle = {
  backgroundColor: "#218838",
  color: "white",
  padding: "12px",
  fontSize: "18px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "background 0.3s",
  width: "100%",
};
const errorStyle = {
  color: "red",
  fontSize: "14px",
  textAlign: "left",
  marginBottom: "10px",
};

const Index = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  // const validate = () => {
  //   let valid = true;
  //   let newErrors = { name: "", email: "", message: "",subject:"" };

  //   if (formData.name.trim().length < 3) {
  //     newErrors.name = "Name must be at least 3 characters";
  //     valid = false;
  //   }
  //   if (formData.subject.trim().length < 3) {
  //     newErrors.subject = "Subject must be at least 3 characters";
  //     valid = false;
  //   }
  //   if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Invalid email format";
  //     valid = false;
  //   }

  //   if (formData.message.trim().length < 10) {
  //     newErrors.message = "Message must be at least 10 characters";
  //     valid = false;
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  const notifySuccess = () => {
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const notifyError = () => {
    toast.error('Failed to send Message, kindly try again later!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // setStatus('Sending...');
    try {
      const response = await fetch(`${API_URI}/email/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      setLoading(false)
      if (response.ok) {
        notifySuccess();
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        notifyError()
      }
    } catch (err) {
      console.error(err);
      notifyError()
    }
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
                  <h1 className="entry-title">Contact Us</h1>
                </div>
                <span className="item-date" />
              </header>
              <div className="subnav-mobile">
                <ul className="entry-subnav" />
              </div>
              <section id="readSpeakerSection">
                <section className="paragraph">
                  <div className="paragraph__container">
                    {/* <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto"> */}
                    <h3>
                      Kindly reach out to us via our email at{" "}
                      <a href="mailto:Info@gbemisolayussufffoundation.org">
                        Info@gbemisolayussufffoundation.org
                      </a>
                    </h3>
                    {/* <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          style={inputStyle}
                        />
                        {errors.name && <p style={errorStyle}>{errors.name}</p>}

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                          style={inputStyle}
                        />
                        {errors.email && <p style={errorStyle}>{errors.email}</p>}

                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                          style={inputStyle}
                        />
                        {errors.subject && <p style={errorStyle}>{errors.subject}</p>}

                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          required
                          style={textAreaStyle}
                        ></textarea>
                        {errors.message && <p style={errorStyle}>{errors.message}</p>}

                        <button type="submit" style={buttonStyle}>
                          {`${loading ? "Sending":"Send"}`} Message
                        </button>
                      </form> */}
                    {/* </div> */}

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
