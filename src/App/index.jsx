import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { shade } from "polished";

const COLORS = [
  "#72616E",
  "#E7856B",
  "#17528E",
  "#E54B4B",
  "#A3C5BF",
  "#72616E",
  "#E7856B",
  "#17528E",
  "#E54B4B",
  "#A3C5BF",
  "#72616E",
  "#E7856B",
  "#17528E",
  "#E54B4B"
];

function PillerComponent({ color, hovered, setHovered, animateDuration }) {
  const [hoverTarget, setHoverTarget] = useState(false);

  const handleHover = val => {
    setHovered(val);
    setHoverTarget(val);
  };

  return (
    <Piller
      color={color}
      onMouseOver={() => handleHover(true)}
      hoverTarget={hoverTarget}
      hovered={hovered}
      onMouseOut={() => handleHover(false)}
      animateDuration={animateDuration}
    >
      <PostTitle>
        <Date>3 July 2014</Date>
        <Title>Hello World, I'm stull here</Title>
        <Summary>
          It’s been over 1 year since my last blog post, a very poor showing, so
          this is just a quickie to say hi and talk about the past year.
        </Summary>
      </PostTitle>
    </Piller>
  );
}

function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <Container>
      {COLORS.map((color, index) => (
        <PillerComponent
          key={index}
          color={color}
          setHovered={setHovered}
          hovered={hovered}
          animateDuration={index + 1.8}
        />
      ))}
    </Container>
  );
}

export default App;

const slideUpAnimation = keyframes`${slideInUp}`;

const PostTitle = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
  position: relative;
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 600;
  padding: 0 2px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 35px;
  line-height: 45px;
  word-wrap: break-word;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  display: block;
  width: 250px;
`;

const Summary = styled.div`
  font-size: 15px;
  line-height: 23px;
  opacity: .5;
  -webkit-transition: opacity .35s;
  transition: opacity .35s;
  width: 250px;
  word-wrap: break-word;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
`;

const Piller = styled.div`
  height: 100vh;
  min-width: 250px;
  padding-right: 43px;
  padding-left: 25px;
  transition: all 0.4s ease-out;
  color: ${props =>
    props.hovered
      ? props.hoverTarget
        ? 'white'
        : shade(0.5, 'white')
      : 'white'};
  cursor: pointer;
  background-color: ${props =>
    props.hovered
      ? props.hoverTarget
        ? props.color
        : shade(0.5, props.color)
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
