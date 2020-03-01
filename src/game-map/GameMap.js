import React from "react";
import { Stage, Layer, Line } from "react-konva";

import "./game-map.css";

function GridLines() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const padding = 29.5;
  const lines = [];
  for (let i = 0; i < width / padding; i++) {
    lines.push(
      <Line
        points={[
          Math.round(i * padding) + 0.5,
          0,
          Math.round(i * padding) + 0.5,
          height
        ]}
        stroke={"#ddd"}
        strokeWidth={0.5}
      />
    );
  }
  for (let j = 0; j < height / padding; j++) {
    lines.push(
      <Line
        points={[0, Math.round(j * padding), width, Math.round(j * padding)]}
        stroke={"#ddd"}
        strokeWidth={0.5}
      />
    );
  }
  return lines;
}

export function GameMap() {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="game-container"
    >
      <Layer>
        <GridLines />
      </Layer>
    </Stage>
  );
}
