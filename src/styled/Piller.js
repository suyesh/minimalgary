import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { shade } from "polished";
import { Container } from "./Container";

const slideUpAnimation = keyframes`${slideInUp}`;

const Piller = styled.div`
  min-height: 1000px;
  max-height: 100vh;
  flex: 1 1 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-right: 43px;
  padding-left: 25px;
  transition: transform 300ms ease 100ms;
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

  &:hover ~ & {
    transform: translateX(5%);
  }

  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${Container}:hover {
    transform: translateX(-5%);
  }
`;

export { Piller };
