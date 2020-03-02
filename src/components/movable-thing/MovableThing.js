import React from "react";
import Konva from "konva";
import { Rect } from "react-konva";

export function MovableThing() {
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
    <Rect
      x={90}
      y={90}
      width={30}
      height={30}
      fill="#000"
      stroke="#ddd"
      strokeWidth={1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    />
  );
}
