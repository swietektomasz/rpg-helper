import React, { useState } from "react";

import { MovableThing } from "src/components";
import { useThingsDispatch } from "src/context/movableThingsContext";

import "./sidebar.css";

export function Sidebar() {
  const thingsDispatch = useThingsDispatch();
  const [avatarImage, setAvatarImage] = useState("");

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
    <div className="sidebar-container">
      <div className="sidebar-content">
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
  );
}
