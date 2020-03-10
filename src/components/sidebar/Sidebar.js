import React from "react";

import { MovableThing } from "src/components";
import { useThingsDispatch } from "src/context/movableThingsContext";

import "./sidebar.css";

export function Sidebar() {
  const thingsDispatch = useThingsDispatch();

  const handleAddingThings = () => {
    thingsDispatch({
      type: "add-avatar",
      payload: (
        <MovableThing
          key={`thing-${Math.floor(Math.random() * Math.floor(1000))}`}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfbhEQbhS6T_6jCg4524GJ8Bf0nSA2ejNbGKOUtx_lwZgvmTuJ"
        />
      )
    });
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <button onClick={handleAddingThings}>Add avatar</button>
      </div>
    </div>
  );
}
