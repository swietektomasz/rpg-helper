import React from "react";
import { render } from "react-dom";

import { GameStage, SidebarContainer } from "src/components";
import { CombinedContext } from "./context";
import { Modal } from "shared/modal/Modal";

import "./app.css";

function App() {
  return (
    <CombinedContext>
      <SidebarContainer />
      <GameStage />
      <Modal />
    </CombinedContext>
  );
}

render(<App />, document.getElementById("app"));
