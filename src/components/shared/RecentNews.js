import $ from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import BGIMAGE from "../../assets/images/p8.jpg";

const RecentNews = (props) => {
  const news = props.data;

  useEffect(() => {
    setTimeout(() => {
      const swiperContainer = document.querySelector(".recent-news-slider");
      const nextBtn = document.querySelector(".recent-news-slider-next");
      const prevBtn = document.querySelector(".recent-news-slider-prev");

      if (swiperContainer && nextBtn && prevBtn) {
        new Swiper(swiperContainer, {
          direction: "horizontal",
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            nextEl: nextBtn, // 👈 Pass actual element
            prevEl: prevBtn, // 👈 Pass actual element
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          },
        });
      }
    }, 500);
  }, []);
  return (
    <section className="recent-news bg-mobile-fullwidth">
      <div className="related-content">
        <div className="related-content-bg">
          <div className="focus-point-image focus-point-image-bg">
            <figure className="image image-5970 bg-image">
              <img
                decoding="async"
                loading="lazy"
                style={{ objectPosition: "50% 50%" }}
                width={2048}
                height={1366}
                src={BGIMAGE}
                srcSet={`
                     ${BGIMAGE} 2048w,
                      ${BGIMAGE}   1440w,
                      ${BGIMAGE}   960w
                    `}
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="related-content-inner content-wrapper-inner">
          <div className="related-content-headline-slidecontrols-container">
            <h2 className="h1 hl-underline hl-white">Recent News</h2>
            <div className="slider-nav-right">
              <button className="recent-news-slider-prev slider-prev slider-button circle-button circle-button-medium circle-button-secondary">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="recent-news-slider-next slider-next slider-button circle-button circle-button-medium circle-button-secondary">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="recent-news-slider swiper-container">
            <div className="swiper-wrapper">
              {news?.map((e, i) => {
                return (
                  <div className="swiper-slide" key={i}>
                    <div className="related-item">
                      <div className="related-item-content">
                        <div className="related-item-image focus-point-image">
                          <Link to={`/news/${e._id}`}>
                            <figure className="image image-8455">
                              <img
                                decoding="async"
                                loading="lazy"
                                style={{ objectPosition: "59.17% 47.63%" }}
                                width={2048}
                                height={1210}
                                src={e.image}
                                srcSet={`
                                    ${e.image} 2048w,
                                    ${e.image}   1440w,
                                   ${e.image}    960w
                                  `}
                                alt=""
                              />
                              <figcaption className="sr-only">
                                TO COME © Jens Dörre/Gbemisola Yussuff
                                Foundation
                              </figcaption>
                            </figure>
                          </Link>
                          <div className="related-item-date">
                            <time className="item-date">
                              <span className="item-date-day">
                                {new Date(e.createdAt)
                                  .getDate()
                                  .toString()
                                  .padStart(2, "0")}{" "}
                                {/* Day with leading zero */}
                              </span>
                              <span className="item-date-month">
                                {new Date(e.createdAt).toLocaleString("en-US", {
                                  month: "short",
                                })}{" "}
                                {/* Abbreviated month */}
                              </span>
                              <span className="item-date-year">
                                {new Date(e.createdAt).getFullYear()}{" "}
                                {/* Full year */}
                              </span>
                            </time>
                          </div>
                        </div>
                        <ul className="item-categories tag-nav">
                          {e?.tags?.map((tag, key) => (
                            <li key={key}>
                              <span className="tag-badge">{tag.label}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to={`/news/${e._id}`}>
                          <div className="item-title">
                            <h5 style={{ textTransform: "capitalize" }}>
                              {e.title}
                            </h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="related-content-see-all">
            <Link to="/news" className="cta-button">
              {" "}
              See all{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
