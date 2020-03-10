import React from "react";
import { render } from "react-dom";

import { GameMap, Sidebar } from "src/components";
import { ThingsProvider } from "src/context/movableThingsContext";

import "./app.css";

function App() {
  return (
    <div className="main">
      <ThingsProvider>
        <GameMap />
        <Sidebar />
      </ThingsProvider>
    </div>
  );
}

render(<App />, document.getElementById("app"));
