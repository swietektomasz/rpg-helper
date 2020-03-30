import React, { useState } from "react";

import { useAvatarDispatch, useAvatarState } from "src/context/AvatarContext";
import { addAvatar } from "../../firebase/avatarCollection";
import { SidebarAvatar } from "./components";

import "./avatars-sidebar.css";

export function AvatarsSidebar() {
  const avatarDispatch = useAvatarDispatch();
  const avatars = useAvatarState();

  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [avatarBeingAdded, setAvatarBeingAdded] = useState({
    name: "",
    imageUrl: ""
  });

  const handleAddingAvatar = async () => {
    const { name, imageUrl } = avatarBeingAdded;

    await addAvatar({ imageUrl, name }).then(avatar => {
      avatarDispatch({
        type: "add-avatar",
        payload: {
          id: avatar.id,
          imageUrl: avatar.imageUrl,
          name: avatar.name
        }
      });
    });

    setEditing(false);
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
          {editing ? (
            <div className="avatar-portrait-edit">
              <label className="avatar-portrait-label">
                Name:
                <input
                  className="avatar-portrait-input"
                  name="name"
                  value={avatarBeingAdded.name}
                  onChange={event =>
                    setAvatarBeingAdded({
                      ...avatarBeingAdded,
                      name: event.target.value
                    })
                  }
                />
              </label>
              <label className="avatar-portrait-label">
                Image URL:
                <input
                  className="avatar-portrait-input"
                  name="imageUrl"
                  value={avatarBeingAdded.imageUrl}
                  onChange={event =>
                    setAvatarBeingAdded({
                      ...avatarBeingAdded,
                      imageUrl: event.target.value
                    })
                  }
                />
              </label>
              <button
                className="avatar-portrait-save"
                onClick={handleAddingAvatar}
              >
                Save
              </button>
            </div>
          ) : (
            <button
              className="add-avatar-button"
              onClick={() => setEditing(state => !state)}
            >
              +
            </button>
          )}

          {avatars.map(avatar => (
            <SidebarAvatar key={avatar.id} {...avatar} />
          ))}
        </div>
      </div>
      <button
        className="avatar-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? `>` : `<`}
      </button>
    </div>
  );
}
