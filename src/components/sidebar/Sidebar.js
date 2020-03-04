import React from "react";

import { MovableThing } from "components";

import "./sidebar.css";

export function Sidebar({ addThing }) {
  const handleAddingThings = () => {
    addThing(things => [
      ...things,
      <MovableThing
        key="thing"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfbhEQbhS6T_6jCg4524GJ8Bf0nSA2ejNbGKOUtx_lwZgvmTuJ"
      />
    ]);
  };
  return (
    <div
      className="sidebar-container"
      style={open ? { left: "80%" } : { left: "100%" }}
    >
      <div className="sidebar-content">
        <button onClick={handleAddingThings}>Add avatar</button>
      </div>
    </div>
  );
}
