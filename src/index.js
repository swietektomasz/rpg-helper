import React from "react";
import { render } from "react-dom";

import { GameMap, AvatarsSidebar } from "src/components";
import { AvatarProvider } from "src/context/AvatarContext";

import "./app.css";
import { MapsSidebar } from "./components/maps-sidebar/MapsSidebar";

function App() {
  return (
    <div className="main">
      <AvatarProvider>
        <GameMap />
        <AvatarsSidebar />
        <MapsSidebar />
      </AvatarProvider>
    </div>
  );
}

render(<App />, document.getElementById("app"));
