import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-konva";
import useImage from "use-image";

import "./game-map.css";

export function GameMap({ map }) {
  const [image] = useImage(map.imageUrl);

  return (
    <Image
      image={image}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

GameMap.propTypes = {
  map: PropTypes.shape({ id: PropTypes.string, imageUrl: PropTypes.string }),
};
