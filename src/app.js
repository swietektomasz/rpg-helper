import React from "react";
import { render } from "react-dom";

import { GameStage, AvatarSidebar, MapSidebar } from "src/components";
import { AvatarProvider } from "src/context/AvatarContext";
import { MapProvider } from "src/context/MapContext";

import "./app.css";

function App() {
  return (
    <AvatarProvider>
      <MapProvider>
        <GameStage />
        <AvatarSidebar />
        <MapSidebar />
      </MapProvider>
    </AvatarProvider>
  );
}

render(<App />, document.getElementById("app"));
