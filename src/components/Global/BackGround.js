import React from "react";
import styled from "styled-components";

const BackGround = ({ children, bckColor }) => {
  return (
    <div
      style={{ backgroundColor: `${bckColor}`, width: "100%", height: "100vh" }}
    >
      {children}
    </div>
  );
};

export default BackGround;
