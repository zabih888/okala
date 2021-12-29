import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { decrement, increment, remove } from "../../features/carts/cartSlice";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { flexBetween, setColor } from "../../styles";

const Counter = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <button
        onClick={() =>
          dispatch(item.quantity === 1 ? remove(item) : decrement(item))
        }
      >
        <AiOutlineMinus className="icon" />
      </button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increment(item))}>
        <AiOutlinePlus className="icon" />
      </button>
    </Wrap>
  );
};

export default Counter;
const Wrap = styled.div`
  width: 150px;
  border: 1px solid ${setColor.Gray};
  border-radius: 30px;

  ${flexBetween}

  button {
    border: none;
    background-color: ${setColor.bodyColor};
    border-radius: 50%;
    padding: 0.5rem;
    .icon {
      font-weight: 800;
      font-size: 1rem;
      display: flex;
      color: ${setColor.Gray};
    }
  }
`;
