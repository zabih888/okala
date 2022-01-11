import React, { useState } from "react";
import styled from "styled-components";
import {
  flexAlign,
  flexBetween,
  flexCenter,
  media,
  setColor,
} from "../../styles";

import logo from "../../assets/images/logo.svg";
import { RiShoppingCartLine, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MdPersonOutline } from "react-icons/md";
import { useAuth } from "../../features/users/authSlice";

const HeaderFrist = () => {
  const matchesLarge = useMediaQuery("(min-width:1024px)");
  const [activeInput, setActiveInput] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const auth = useAuth();
  return (
    <Wrapper>
      <Main className="container">
        <Flex>
          <Link to="/">
            <Logo>
              <img src={logo} />
            </Logo>
          </Link>
        </Flex>
        {matchesLarge ? (
          <Flex>
            <InputSearch>
              {console.log(activeInput)}
              <RiSearchLine className="icon" />
              <input placeholder="برند کالا و یا دسته بندی مورد نظر را جستجو کنید" />
              {console.log(activeInput)}
              <span className="textSreach">جستجو</span>
            </InputSearch>
          </Flex>
        ) : null}
        <Flex>
          {auth ? (
            <Link to="/profile">پروفایل</Link>
          ) : (
            <Login>
              {matchesLarge ? (
                <Link to="/signUp">ورود / ثبت نام</Link>
              ) : (
                <Link to="/signUp">
                  <MdPersonOutline className="icon" />
                </Link>
              )}
            </Login>
          )}

          <Cart>
            <Link to="/cart">
              <RiShoppingCartLine className="icon" />
              <span className="badge">{cart.length}</span>
            </Link>
          </Cart>
        </Flex>
      </Main>
      {matchesLarge ? null : (
        <div>
          <Flex>
            <InputSearch>
              {console.log(activeInput)}
              <RiSearchLine className="icon" />
              <input placeholder="برند کالا و یا دسته بندی مورد نظر را جستجو کنید" />
              {console.log(activeInput)}
              <span className="textSreach">جستجو</span>
            </InputSearch>
          </Flex>
        </div>
      )}
    </Wrapper>
  );
};
export default HeaderFrist;

// ============= Style ============= //

const Wrapper = styled.div`
  background-color: ${setColor.White};
  margin-top: -1px;
`;
const Main = styled.main`
  ${flexBetween}
`;

const Flex = styled.div`
  ${flexAlign}
`;

const Logo = styled.div`
  img {
    width: auto;
    height: 3.5rem;
  }
`;

const InputSearch = styled.div`
  position: relative;

  margin: 1rem auto;
  ${media.large`
  margin: 0;
  `}
  .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .textSreach {
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    position: absolute;
    left: 2px;
    top: 50%;
    height: 92%;
    transform: translateY(-50%);
    ${flexCenter}
    width: 5rem;
    border-radius: 3.75rem;
    background: linear-gradient(
      90deg,
      rgba(217, 217, 217, 1) 0%,
      rgba(168, 168, 168, 1) 90%
    );
    color: ${setColor.White};
  }

  input {
    border: none;
    width: 92vw;
    ${media.large`
    width: 500px;
    `}
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: 1px solid #bdbdbd;
    border-radius: 3.75rem;
    :focus {
      border: 2px solid ${setColor.Secondary};
    }
    ::placeholder {
      color: #616161;
    }
  }
`;

const Login = styled.div`
  a {
    ${media.large`
    padding: 0.5rem 1rem;
    color: #212121;
    background-color: #ededed;
    border-radius: 3.75rem;
    `}
  }
  .icon {
    font-size: 2.2rem;
    ${flexCenter};
    color: ${setColor.Gray};
  }
`;

const Cart = styled.div`
  margin-right: 1rem;
  a {
    padding: 1rem;
    ${flexCenter}
    border-radius: 3.75rem;
    background-color: ${setColor.SecondaryIcon};
    position: relative;

    .icon {
      color: ${setColor.Secondary};
      font-size: 1.3rem;
    }

    .badge {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 500;
      top: 30px;
      left: 27px;
      width: 28px;
      height: 28px;
      padding: 0;
      background-color: ${setColor.Primary};
      border: solid 2px #ffffff;
      border-radius: 50%;
      color: #fff;
    }
  }
`;
