import React from "react";
import styled from "styled-components";
import topImg from "../../assets/images/baner/top.png";
import HeaderFrist from "./HeaderFrist";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const matchesLarge = useMediaQuery("(min-width:1024px)");
  return (
    <div>
      {matchesLarge ? <TopImage src={topImg} /> : null}
      <HeaderFrist />
    </div>
  );
};

const TopImage = styled.img`
  width: 100%;
`;

export default Header;
