import React, { useState, useEffect } from "react";
import { Date, Piller, PostTitle, Summary, Title } from "../styled";
import faker from "faker";

function PillerComponent({ color, hovered, setHovered, animateDuration }) {
  const [hoverTarget, setHoverTarget] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const handleHover = val => {
    setHovered(val);
    setHoverTarget(val);
  };

  useEffect(() => {
    setTitle(faker.lorem.sentence());
    setSummary(faker.lorem.text());
  }, []);

  return (
    <Piller
      color={color}
      onMouseOver={() => handleHover(true)}
      hoverTarget={hoverTarget}
      hovered={hovered}
      onMouseOut={() => handleHover(false)}
      animateDuration={animateDuration}
      title={title}
    >
      <PostTitle>
        <Date>28 October 2019</Date>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </PostTitle>
    </Piller>
  );
}

export { PillerComponent };
