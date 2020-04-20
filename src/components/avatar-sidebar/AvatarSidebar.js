import React, { useState } from "react";

import { useAvatarDispatch, useAvatarState } from "src/context/AvatarContext";
import { addAvatar } from "../../firebase/avatarCollection";
import { SidebarAvatar, AvatarForm } from "./components";

import "./avatar-sidebar.css";

export function AvatarSidebar() {
  const avatarDispatch = useAvatarDispatch();
  const avatars = useAvatarState();

  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleAddingAvatar = async (avatarData) => {
    await addAvatar({
      imageUrl: avatarData.imageUrl,
      name: avatarData.name,
    }).then((avatar) => {
      avatarDispatch({
        type: "add-avatar",
        payload: {
          id: avatar.id,
          imageUrl: avatar.imageUrl,
          name: avatar.name,
        },
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
            <AvatarForm handleSubmit={handleAddingAvatar} />
          ) : (
            <button
              className="add-avatar-button"
              onClick={() => setEditing((state) => !state)}
            >
              +
            </button>
          )}

          {avatars.map((avatar) => (
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
