import React from "react";

import { AvatarSidebar, MapSidebar } from "src/components";

import "./sidebar-container.css";

export function SidebarContainer() {
  return (
    <div className="sidebar-container">
      <AvatarSidebar />
      <MapSidebar />
    </div>
  );
}
