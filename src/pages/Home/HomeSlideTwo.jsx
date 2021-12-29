import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  boxShadow,
  flexCenter,
  media,
  setColor,
} from "../../styles";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAsynicProducts } from "../../features/products/productsSlice";
import { AiFillPlusCircle } from "react-icons/ai";
import banerYellowOne from "../../assets/images/baner/banerMain/oneYellow.jpg";
import banerYellowTwo from "../../assets/images/baner/banerMain/twoYellow.jpg";
import { Alert, CircularProgress, useMediaQuery } from "@mui/material";
import { increment } from "../../features/carts/cartSlice";

const HomeSlideTwo = () => {
  const matchesSmall = useMediaQuery("(min-width:480px)");
  const matchesMedium = useMediaQuery("(min-width:768px)");
  const matchesLarge = useMediaQuery("(min-width:1024px)");
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAsynicProducts());
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="loading">
          <Loading>
            <CircularProgress />
          </Loading>
        </h1>
      ) : error ? (
        <Error severity="error">{error.message}</Error>
      ) : (
        <Main className="container">
          <div>
            <h3>پیشنهاد روز</h3>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={
              matchesLarge ? 5 : matchesMedium ? 3 : matchesSmall ? 2 : 1
            }
            spaceBetween={2}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {products.map((item) => (
              <SwiperSlide>
                <Card key={item.id}>
                  <div className="wrapImg">
                    <img src={item.image} />
                    <span className="discount">
                      {item.discount}%<small>تخفیف</small>
                    </span>
                  </div>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <p className="offPrice">{item.offPrice} تومان</p>
                  <button
                    onClick={() =>
                      dispatch(increment({ ...item, quantity: 1 }))
                    }
                  >
                    افزودن به سبد خرید
                    <AiFillPlusCircle className="icon" />
                  </button>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <BanerYellow>
            <img src={banerYellowOne} />
            <img src={banerYellowTwo} />
          </BanerYellow>
        </Main>
      )}
    </>
  );
};

export default HomeSlideTwo;

// ============== Style ============ //
const Loading = styled.div`
  ${flexCenter}
`;
const Error = styled(Alert)`
  ${flexCenter}
`;
const Main = styled.main`
  background-color: white;
  margin-top: 1rem;

  h3 {
    position: relative;
    margin-right: 30px;
    display: flex;
    align-items: center;
    padding-top: 2rem;
    &::before {
      content: "";
      position: absolute;
      right: -16px;
      width: 4px;
      display: block;
      background: ${setColor.Secondary};
      height: 36px;
    }
  }
`;

const Card = styled.div`
  text-align: center;
  &:hover{
    ${boxShadow}
  }
  .wrapImg{
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .discount{
    color: ${setColor.Primary};
    border: 1px solid ${setColor.Primary};
    background-color: rgba(255,255,255,.7);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10%;
    right: 10px;
  }

  }
  .name {
    color: ${setColor.Black};
  }
  .price {
    color: ${setColor.Gray};
    text-decoration: line-through;
  }
  .offPrice {
    color: ${setColor.Secondary};
  }
  

  button{
    direction: ltr;
    background-color: ${setColor.Primary};
    color: ${setColor.White};
    font-weight: 500;
    vertical-align: middle;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 3.75rem;
    height: 3rem;
    margin-bottom: 2rem;
    cursor: pointer;

    .icon{
    vertical-align: middle;
    width: 24px;
    height: 24px;
    }
  }
  }
`;

const BanerYellow = styled.div`
  background-color: ${setColor.bodyColor};
  display: grid;
  padding-top: 2rem;
  grid-template-columns: 1fr;
  ${media.medium`
  grid-template-columns: 1fr 1fr;
  `}
  gap: 1rem;

  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
`;

