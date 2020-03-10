import React from "react";
import { render } from "react-dom";

import { GameMap, Sidebar } from "components";
import { ThingsProvider } from "context/movableThingsContext";

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
