import React from "react";
import { Line } from "react-konva";

export function GridLines() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const padding = 30;
  const lines = [];
  for (let i = 0; i < width / padding; i++) {
    lines.push(
      <Line
        key={`${i}-${width / padding}`}
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
        key={`${j}-${height / padding}`}
        points={[0, Math.round(j * padding), width, Math.round(j * padding)]}
        stroke={"#ddd"}
        strokeWidth={0.5}
      />
    );
  }
  return lines;
}
