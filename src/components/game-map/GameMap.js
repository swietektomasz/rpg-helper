import React from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import PropTypes from "prop-types";

import { GridLines, MovableThing } from "src/components";
import { useThingsState } from "src/context/movableThingsContext";

import "./game-map.css";

export function GameMap() {
  const movableThings = useThingsState();

  const [image] = useImage(
    "http://www.gitzmansgallery.com/maps/Map-City-Middenheim-1.jpg"
  );

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="game-container"
    >
      <Layer>
        <Image
          x={0}
          y={0}
          height={window.innerHeight}
          width={window.innerWidth}
          image={image}
        />
      </Layer>
      <Layer>
        <GridLines />
      </Layer>
      <Layer>
        {movableThings.map(thing => (
          <MovableThing key={thing.id} imageUrl={thing.imageUrl} />
        ))}
      </Layer>
    </Stage>
  );
}

GameMap.propTypes = {
  movableThings: PropTypes.array
};
