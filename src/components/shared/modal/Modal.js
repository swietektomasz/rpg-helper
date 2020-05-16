import React from "react";
import PropTypes from "prop-types";

import { useModalState } from "src/context";

import "./modal.css";

export function Modal() {
  const { isOpen, setOpen } = useModalState();

  return (
    <div>
      <div
        id="myModal"
        className="modal"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setOpen(false)}>
            &times;
          </span>
          <p>Here will be the add form, a some point</p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleAdding: PropTypes.func,
};
