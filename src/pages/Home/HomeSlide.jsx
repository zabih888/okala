import React from "react";
import styled from "styled-components";
import { media } from "../../styles";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import oneSBaner from "../../assets/images/baner/banerSlide/oneS.png";
import twoSBaner from "../../assets/images/baner/banerSlide/twoS.png";
import threeSBaner from "../../assets/images/baner/banerSlide/threeS.png";
import { SlideData } from "../../data";

const HomeSlide = () => {
  return (
    <Main className="container">
      <div className="one">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          style={{ direction: "ltr" }}
          navigation={{
            nextEl: ".swiper_next",
            prevEl: ".swiper_prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {SlideData.map((item) => (
            <SwiperSlide className="slide">
              <img src={item.img} className="image" />
            </SwiperSlide>
          ))}
          <div className="swiper_next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
              <path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z" />
            </svg>
          </div>
          <div className="swiper_prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
              <path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z" />
            </svg>
          </div>
        </Swiper>
      </div>
      <div className="two">
        <SlideBaner>
          <img src={oneSBaner} />
          <img src={twoSBaner} />
          <img src={threeSBaner} />
        </SlideBaner>
      </div>
    </Main>
  );
};

export default HomeSlide;

// ===================== Style =================
const Main = styled.main`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 100%;
  ${media.large`
  grid-template-columns: 73% 25%;
  `}
  justify-content: space-between;
  row-gap: 1rem;
  .one {
    position: relative;
    .slide {
      height: 17%;
    }
    .image {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;
    }
  }
  .two {
  }
`;

const SlideBaner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
