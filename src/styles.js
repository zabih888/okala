import { css } from "styled-components";

export const setColor = {
  bodyColor: "#eef2f6",
  Black: "#000000",
  White: "#ffffff",
  Gray: "#999",
  Primary: "#f01436",
  PrimaryDark: "#d30d2b",
  Secondary: "#02a0a4",
  SecondaryIcon: "#e6feff",
  SecondaryDark: "#048c90",
};

const sizes = {
  small: 480,
  medium: 768,
  large: 1024,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const flexBetween = () => {
  return `display:flex;align-items: center;justify-content: space-between;`;
};

export const flexAlign = () => {
  return `display:flex;align-items: center;`;
};

export const flexCenter = () => {
  return `display: flex;align-items: center;justify-content: center;`;
};

export const boxShadow = () => {
  return `box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`;
};
