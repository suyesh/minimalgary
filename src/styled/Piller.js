import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { shade } from "polished";

const slideUpAnimation = keyframes`${slideInUp}`;

const Piller = styled.div`
  min-height: 1000px;
  max-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-right: 43px;
  padding-left: 25px;
  transition: all 1s ease-out;
  color: ${props =>
    props.hovered
      ? props.hoverTarget
        ? "white"
        : shade(0.5, "white")
      : "white"};
  cursor: pointer;
  background-color: ${props =>
    props.hovered
      ? props.hoverTarget
        ? props.color
        : shade(0.6, props.color)
      : props.color};
  cursor: pointer;
  animation: ${props => props.animateDuration / 3}s ${slideUpAnimation};


  &:hover {
    position: relative;
    z-index: 1;
    min-width: 300px;
    background-color: ${props => props.color};
    & * {
      max-width: 300px;
    }
  }
`;

export { Piller };
