import React from "react";
import { render } from "react-dom";

import { GameMap, AvatarsSidebar } from "src/components";
import { ThingsProvider } from "src/context/movableThingsContext";

import "./app.css";
import { MapsSidebar } from "./components/maps-sidebar/MapsSidebar";

function App() {
  return (
    <div className="main">
      <ThingsProvider>
        <GameMap />
        <AvatarsSidebar />
        <MapsSidebar />
      </ThingsProvider>
    </div>
  );
}

render(<App />, document.getElementById("app"));
