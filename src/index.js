import React, { useState } from "react";
import { render } from "react-dom";
import { GameMap, Sidebar } from "components";

import "./app.css";

function App() {
  const [things, setThings] = useState([]);
  return (
    <div className="main">
      <GameMap movableThings={things} />
      <Sidebar addThing={setThings} />
    </div>
  );
}

render(<App />, document.getElementById("app"));
