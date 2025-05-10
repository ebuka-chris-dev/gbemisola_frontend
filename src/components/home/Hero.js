import { Link } from "react-router-dom";
import React from "react";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image1 from "../../assets/images/boy-holding-white-paper-school.jpg";
import Image2 from "../../assets/images/group-african-kids-learning-together.jpg";
import Image3 from "../../assets/images/group-african-kids-paying-attention-class.jpg";
import Image4 from "../../assets/images/woman-teaching-kids-class.jpg";

const Hero = (props) => {
  const news = props.data;

  const newsImages = [
    {
      image: Image1,
    },
    { image: Image2 },
    {
      image: Image3,
    },

    { image: Image4 },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {newsImages.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <section className="hero">
                {/* <div className="hero-text">
                  <ul className="item-categories tag-nav">
                    {e?.tags?.map((tag, key) => (
                      <li key={key}>
                        <span className="tag-badge">{tag.label}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/news">
                    <div className="item-title">
                      <h1 className="h2">{e?.title}</h1>
                    </div>
                  </Link>

                  <Link className="cta-button" to="/news">
                    Read more
                  </Link>
                </div> */}

                <div
                  className="hero-image focus-point-image"
                  style={{ width: "100%", height: "410px" }}
                >
                  <Link to="/news">
                    <figure className="image image-8455">
                      <img
                        fetchPriority="high"
                        decoding="async"
                        loading="lazy"
                        style={{
                          objectPosition: "59.17% 47.63%",
                          objectFit: "cover",
                        }}
                        width={2048}
                        height={500}
                        src={e?.image}
                        srcSet={`
                          ${e?.image} 2048w,
                          ${e?.image} 1440w,
                          ${e?.image} 960w
                        `}
                        alt=""
                      />
                    </figure>
                  </Link>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
