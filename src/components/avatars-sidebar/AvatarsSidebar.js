import React, { useState } from "react";

import { useThingsDispatch } from "src/context/movableThingsContext";

import "./avatars-sidebar.css";
import { addThing } from "../../firebase/thingsCollection";

export function AvatarsSidebar() {
  const thingsDispatch = useThingsDispatch();
  const [avatarImage, setAvatarImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddingThings = () => {
    addThing({ imageUrl: avatarImage }).then(thing => {
      thingsDispatch({
        type: "add-avatar",
        payload: {
          id: thing.id,
          imageUrl: thing.imageUrl
        }
      });
    });
  };

  return (
    <div>
      <div
        className={
          isOpen
            ? "avatar-sidebar-container"
            : "avatar-sidebar-container__closed"
        }
      >
        <div className="avatar-sidebar-content">
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
      <button
        className="avatar-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open
      </button>
    </div>
  );
}
