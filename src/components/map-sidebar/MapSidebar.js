import React from "react";

import { Sidebar } from "shared/sidebar";
import { useMapDispatch, useMapState } from "src/context/MapContext";

import "./map-sidebar.css";

export function MapSidebar() {
  const mapDispatch = useMapDispatch();
  const { maps } = useMapState();

  const handleAddingMap = (mapData) => {
    mapDispatch({
      type: "set-current-map",
      payload: {
        id: mapData.id,
        imageUrl: mapData.imageUrl,
      },
    });
  };

  return <Sidebar elements={maps} addElement={handleAddingMap} title="Maps" />;
}
