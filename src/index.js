import React from "react";
import { render } from "react-dom";
import { GameMap } from "components";

import "./app.css";

function App() {
  return <GameMap />;
}

render(<App />, document.getElementById("app"));
