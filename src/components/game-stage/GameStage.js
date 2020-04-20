import React from "react";
import { Stage, Layer } from "react-konva";

import { GridLines, Avatar, GameMap } from "src/components";
import { useAvatarState } from "src/context";
import { useMapState } from "src/context/MapContext";

import "./game-stage.css";

export function GameStage() {
  const avatars = useAvatarState();
  const { currentMap } = useMapState();

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="game-container"
    >
      <Layer>
        <GameMap map={currentMap} />
      </Layer>
      <Layer>
        {avatars.map((avatar) => (
          <Avatar key={avatar.id} imageUrl={avatar.imageUrl} />
        ))}
      </Layer>
      <Layer>
        <GridLines />
      </Layer>
    </Stage>
  );
}
