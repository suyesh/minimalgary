import React, { useState } from "react";
import { Container } from "../styled";
import { PillerComponent } from "../components";

function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <Container>
      <Pillers
        hovered={hovered}
        setHovered={setHovered}
      />
    </Container>
  );
}

export default App;

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

function Pillers({ setHovered, hovered }) {
  return COLORS.map((color, index) => (
    <PillerComponent
      key={index}
      color={color}
      setHovered={setHovered}
      hovered={hovered}
      animateDuration={index + 1.8}
    />
  ));
}
