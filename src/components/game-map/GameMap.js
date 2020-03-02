import React from "react";
import { Stage, Layer } from "react-konva";

import { GridLines } from "components";
import { MovableThing } from "components";

import "./game-map.css";

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
      <Layer>
        <MovableThing />
      </Layer>
    </Stage>
  );
}
