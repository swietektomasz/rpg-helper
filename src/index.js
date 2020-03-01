import React from "react";
import { render } from "react-dom";
import { GameMap } from "./game-map/GameMap";

import "./app.css";

function App() {
  return <GameMap />;
}

render(<App />, document.getElementById("app"));
