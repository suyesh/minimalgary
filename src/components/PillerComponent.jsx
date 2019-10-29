import React, { useState } from 'react'
import { Date, Piller, PostTitle, Summary, Title } from '../styled'

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

export { PillerComponent }
