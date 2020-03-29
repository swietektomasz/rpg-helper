import React from "react";
import { render } from "react-dom";

import { GameMap, AvatarsSidebar } from "src/components";
import { AvatarProvider } from "src/context/AvatarContext";

import "./app.css";
import { MapSidebar } from "./components/map-sidebar/MapSidebar";
import { MapProvider } from "./context/MapContext";

function App() {
  return (
    <div className="main">
      <AvatarProvider>
        <MapProvider>
          <GameMap />
          <AvatarsSidebar />
          <MapSidebar />
        </MapProvider>
      </AvatarProvider>
    </div>
  );
}

render(<App />, document.getElementById("app"));
