import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

import { useMapState } from "src/context/MapContext";

import "./game-map.css";

export function GameMap() {
  const mapState = useMapState();

  const [image] = useImage(mapState.currentMap.imageUrl);

  return <Image image={image} />;
}
