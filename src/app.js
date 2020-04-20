import React from "react";
import { render } from "react-dom";

import { GameStage, SidebarContainer } from "src/components";
import { AvatarProvider } from "src/context";
import { MapProvider } from "src/context/MapContext";

import "./app.css";

function App() {
  return (
    <AvatarProvider>
      <MapProvider>
        <SidebarContainer />
        <GameStage />
      </MapProvider>
    </AvatarProvider>
  );
}

render(<App />, document.getElementById("app"));
