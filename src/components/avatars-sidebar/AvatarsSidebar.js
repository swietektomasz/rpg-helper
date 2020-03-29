import React, { useState } from "react";

import { useAvatarDispatch } from "src/context/AvatarContext";

import "./avatars-sidebar.css";
import { addAvatar } from "../../firebase/avatarCollection";

export function AvatarsSidebar() {
  const avatarDispatch = useAvatarDispatch();
  const [avatarImage, setAvatarImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddingAvatar = () => {
    addAvatar({ imageUrl: avatarImage }).then(avatar => {
      avatarDispatch({
        type: "add-avatar",
        payload: {
          id: avatar.id,
          imageUrl: avatar.imageUrl
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
          <button onClick={handleAddingAvatar}>Add avatar</button>
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
