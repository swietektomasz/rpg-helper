import React from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

import { GridLines } from "components";
import { MovableThing } from "components";

import "./game-map.css";

export function GameMap() {
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
        <MovableThing
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfbhEQbhS6T_6jCg4524GJ8Bf0nSA2ejNbGKOUtx_lwZgvmTuJ"
          }
        />
      </Layer>
    </Stage>
  );
}
