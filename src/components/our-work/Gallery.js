import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import img11 from "../../assets/images/img11.jpeg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css"


const Gallery = ({img1,img2,img3,img4,img5,img6,img7,img8,img9,img10}) => {
  return (
    <section className="gallery-slideshow">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".gallery-slider-next",
          prevEl: ".gallery-slider-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="gallery-slider"
      >
        <SwiperSlide className="gallery-slider-item">
          <img src={img1} />
          {/* <p className="gallery-slider-item-caption">
            We help children with disabilities through cataract surgery.
          </p> */}
        </SwiperSlide>

        <SwiperSlide className="gallery-slider-item">
          <img src={img2}/>
          {/* <p className="gallery-slider-item-caption">
            We support children in their pre-literacy imgills.
          </p> */}
        </SwiperSlide>

        <SwiperSlide className="gallery-slider-item">
          <img src={img3} />
          {/* <p className="gallery-slider-item-caption">
            We train teachers in inclusive education.
          </p> */}
        </SwiperSlide>

        <SwiperSlide className="gallery-slider-item">
          <img src={img4}/>
        </SwiperSlide>
        <SwiperSlide className="gallery-slider-item">
          <img src={img5}/>
        </SwiperSlide>
        <SwiperSlide className="gallery-slider-item">
          <img src={img6}/>
        </SwiperSlide>
        <SwiperSlide className="gallery-slider-item">
          <img src={img7}/>
        </SwiperSlide>
        <SwiperSlide className="gallery-slider-item">
          <img src={img8}/>
        </SwiperSlide>
        <SwiperSlide className="gallery-slider-item">
          <img src={img9}/>
        </SwiperSlide>
        <SwiperSlide className="gallery-slider-item">
          <img src={img10}/>
        </SwiperSlide>
      </Swiper>

      {/* Custom buttons */}
      <button className="gallery-slider-prev slider-button circle-button circle-button-medium">
        ‹
      </button>
      <button className="gallery-slider-next slider-button circle-button circle-button-medium">
        ›
      </button>
    </section>
  );
};

export default Gallery;
