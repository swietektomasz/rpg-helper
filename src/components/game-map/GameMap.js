import React from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

import { GridLines, Avatar } from "src/components";
import { useAvatarState } from "src/context/AvatarContext";

import "./game-map.css";

export function GameMap() {
  const avatars = useAvatarState();

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
        {avatars.map(avatar => (
          <Avatar key={avatar.id} imageUrl={avatar.imageUrl} />
        ))}
      </Layer>
    </Stage>
  );
}
