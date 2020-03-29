import React from "react";
import Konva from "konva";
import { Image } from "react-konva";
import useImage from "use-image";
import PropTypes from "prop-types";

export function Avatar({ imageUrl }) {
  const [image] = useImage(imageUrl);

  const handleDragStart = ({ target }) => {
    target.setAttrs({
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  const checkSides = target => {
    if (target.attrs.x > window.innerWidth - 30) {
      return window.innerWidth - 30;
    } else if (target.attrs.x < 0) {
      return 0;
    }
    return Math.round(target.attrs.x / 30) * 30;
  };

  const checkTopAndBottom = target => {
    if (target.attrs.y > window.innerHeight) {
      return window.innerHeight;
    } else if (target.attrs.y < 0) {
      return 0;
    }
    return Math.round(target.attrs.y / 30) * 30;
  };

  const handleDragEnd = ({ target }) => {
    target.to({
      x: checkSides(target),
      y: checkTopAndBottom(target),
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

Avatar.propTypes = {
  imageUrl: PropTypes.string
};
