import React from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import PropTypes from "prop-types";

import { GridLines } from "components";
import { useThingsState } from "context/movableThingsContext";

import "./game-map.css";

export function GameMap() {
  const movableThings = useThingsState();

  const [image] = useImage(
    "http://www.gitzmansgallery.com/maps/Map-City-Middenheim-1.jpg"
  );

  return (
    <Stage
      width={window.innerWidth * 0.8}
      height={window.innerHeight}
      className="game-container"
    >
      <Layer>
        <Image
          x={0}
          y={0}
          height={window.innerHeight}
          width={window.innerWidth * 0.8}
          image={image}
        />
      </Layer>
      <Layer>
        <GridLines />
      </Layer>
      <Layer>{movableThings.map(thing => thing)}</Layer>
    </Stage>
  );
}

GameMap.propTypes = {
  movableThings: PropTypes.array
};
