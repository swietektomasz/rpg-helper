import React from "react";
import { Stage, Layer } from "react-konva";

import { GridLines, Avatar, GameMap } from "src/components";
import { AvatarProvider, useAvatarState } from "src/context/AvatarContext";
import { MapProvider } from "src/context/MapContext";

import "./game-stage.css";

export function GameStage() {
  const avatars = useAvatarState();

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
        <MapProvider>
          <GameMap />
        </MapProvider>
      </Layer>
      <Layer>
        <AvatarProvider>
          {avatars.map((avatar) => (
            <Avatar key={avatar.id} imageUrl={avatar.imageUrl} />
          ))}
        </AvatarProvider>
      </Layer>
    </Stage>
  );
}
