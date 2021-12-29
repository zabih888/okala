import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

import {
  boxShadow,
  flexAlign,
  flexBetween,
  media,
  setColor,
} from "../../styles";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../../features/carts/cartSlice";
import Counter from "../../components/Global/Counter";
import BackGround from "../../components/Global/BackGround";
import { useMediaQuery } from "@mui/material";

const Cart = () => {
  const matchesLarge = useMediaQuery("(min-width:1024px)");
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <BackGround bckColor="white">
      <Main className="container">
        <Wrap>
          <Product>
            <h3>سبد خرید</h3>
            {cart.map((item) => (
              <section>
                <AiOutlineClose
                  className="close"
                  onClick={() => dispatch(remove(item))}
                />
                <div className="image">
                  <img src={item.image} />
                </div>
                <div>
                  <h5>{item.name}</h5>
                  {matchesLarge ? (
                    <div className="guarantee">
                      <AiOutlineCheckCircle className="icon" />
                      گارانتی اصالت و سلامت فیزیکی کالا
                    </div>
                  ) : null}
                </div>
                <Counter item={item} />
                <div>
                  <h5 className="price">{item.price} تومن</h5>
                  <h4 className="off">{item.offPrice * item.quantity} تومن</h4>
                </div>
                <div className="borderBottom" />
              </section>
            ))}
          </Product>
          <Summary>
            <h3>جزئیات خرید</h3>
            <section>
              <div>
                <p>تعداد اقلام</p>
                <span>{cart.length}</span>
              </div>
              <div>
                <p>جمع کل بعد از تخفیف</p>
                <span>{total} تومن</span>
              </div>
              <button>ادامه فرایند خرید</button>
            </section>
          </Summary>
        </Wrap>
        <Link to="/" className="back">
          <IoIosArrowForward className="icon" />
          بازگشت به سایت و خرید بیشتر
        </Link>
      </Main>
    </BackGround>
  );
};

export default Cart;

// =============== Style ============= //
const Main = styled.main`
  padding-top: 1.5rem;
  .back {
    cursor: pointer;
    ${flexAlign};
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  ${media.large`
    display: grid;
    grid-template-columns: 2fr 1fr;
  `};
`;

const Product = styled.div`
  position: relative;
  padding: 1rem;
  section {
    ${flexBetween};
    position: relative;
    .borderBottom {
      position: absolute;
      content: "";
      width: 90%;
      height: 1px;
      bottom: 0px;
      background-color: ${setColor.Gray};
    }
  }

  .close {
    position: absolute;
    right: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: ${setColor.Primary};
  }

  .image {
    margin-right: 1.5rem;
    width: 120px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .guarantee {
    ${flexAlign};
    .icon {
      margin-left: 0.5rem;
      color: ${setColor.Secondary};
      font-size: 1.2rem;
    }
  }
  .price {
    color: ${setColor.Gray};
    text-decoration: line-through;
  }
  .off {
    color: ${setColor.Secondary};
  }
`;

const Summary = styled.div`
  section {
    padding: 1rem;
    border-radius: 20px;
    ${boxShadow}
  }

  div {
    ${flexBetween}
  }

  button {
    width: 100%;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 3.75rem;
    font-size: 18px;
    font-weight: 600;
    background-color: ${setColor.Primary};
    color: ${setColor.White};
  }
`;
