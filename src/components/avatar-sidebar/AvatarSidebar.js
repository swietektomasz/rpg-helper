import React from "react";

import { useAvatarDispatch, useAvatarState } from "src/context/avatar-context";
import { addAvatar } from "src/firebase/avatarCollection";
import { Sidebar } from "shared/sidebar";

export function AvatarSidebar() {
  const avatarDispatch = useAvatarDispatch();
  const avatars = useAvatarState();

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
  };

  return (
    <Sidebar
      elements={avatars}
      addElement={handleAddingAvatar}
      title="Avatars"
    />
  );
}
