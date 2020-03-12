import React, { useState } from "react";

import { useThingsDispatch } from "src/context/movableThingsContext";

import "./maps-sidebar.css";

export function MapsSidebar() {
  const thingsDispatch = useThingsDispatch();
  const [avatarImage, setAvatarImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddingThings = () => {
    thingsDispatch({
      type: "add-avatar",
      payload: {
        id: `thing-${Math.floor(Math.random() * Math.floor(1000))}`,
        imageUrl: avatarImage
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
          <button onClick={handleAddingThings}>Add avatar</button>
          <label>
            Image URL:
            <input
              type="text"
              value={avatarImage}
              onChange={event => setAvatarImage(event.target.value)}
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
