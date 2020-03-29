import React, { useState } from "react";

import { useMapDispatch } from "src/context/MapContext";

import "./map-sidebar.css";

export function MapSidebar() {
  const mapDispatch = useMapDispatch();

  const [mapImage, setMapImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddingMap = () => {
    mapDispatch({
      type: "set-current-map",
      payload: {
        id: `map-${Math.floor(Math.random() * Math.floor(1000))}`,
        imageUrl: mapImage
      }
    });
  };

  return (
    <div>
      <div
        className={
          isOpen ? "map-sidebar-container" : "map-sidebar-container__closed"
        }
      >
        <div className="map-sidebar-content">
          <button onClick={handleAddingMap}>Add map</button>
          <label>
            Image URL:
            <input
              type="text"
              value={mapImage}
              onChange={event => setMapImage(event.target.value)}
            ></input>
          </label>
        </div>
      </div>
      <button className="map-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        Open
      </button>
    </div>
  );
}
