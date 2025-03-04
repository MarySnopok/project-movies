import styled from "styled-components";
import arrow from "../assets/arrow.svg";

// https://stackoverflow.com/questions/38788848/positioning-of-an-arrow-in-an-html-select/38788908
// answer on how to hide default select arrow and create a custom one
export const SelectStyle = styled.select`
  color: whitesmoke;
  outline: none;
  border: 2px solid goldenrod;
  background-color: transparent;
  border-radius: 30px;
  transition: 0.5s ease-out;
  padding-left: 16px;
  background: url(${arrow}) no-repeat;
  background-position: right 10px top 4px; /* Change the px value here to change the distance */
  -moz-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    box-shadow: 1px 1px 10px goldenrod;
    transform: scale(1.05);
  }
`;
