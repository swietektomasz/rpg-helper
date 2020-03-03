import React from "react";
import Konva from "konva";
import { Image } from "react-konva";
import useImage from "use-image";
import PropTypes from "prop-types";

export function MovableThing({ imageUrl }) {
  const [image] = useImage(imageUrl);

  const handleDragStart = ({ target }) => {
    target.setAttrs({
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  const handleDragEnd = ({ target }) => {
    target.to({
      x: Math.round(target.attrs.x / 30) * 30,
      y: Math.round(target.attrs.y / 30) * 30,
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1
    });
  };

  return (
    <Image
      x={90}
      y={90}
      width={30}
      height={30}
      image={image}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    />
  );
}

MovableThing.propTypes = {
  imageUrl: PropTypes.string
};
