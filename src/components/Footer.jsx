import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AcordionData } from "../data";
import logo from "../assets/images/logo.svg";
import { flexCenter } from "../styles";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      <Main className="container">
        <Accordion style={{ backgroundColor: "#e6e6e6", marginBottom: "1rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>سوپر مارکت آنلاین اُکالا-فروشگاه اینترنتی افق کوروش</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AcordionData />
          </AccordionDetails>
        </Accordion>
        <img src={logo} />
        <p style={{ textAlign: "center" }}>
          کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به شرکت توسعه تجارت
          الکترونیک کوروش است
        </p>
      </Main>
    </div>
  );
};

export default Footer;

// ================== Style =============== //
const Main = styled.main`
  img {
    width: 10%;
    margin: auto;
    display: block;
    margin-bottom: 1rem;
  }
  margin-bottom: -2rem;
  padding-bottom: 1rem;
`;
