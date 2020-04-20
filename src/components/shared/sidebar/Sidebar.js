import React, { useState } from "react";
import PropTypes from "prop-types";

import { SidebarAddForm, SidebarElement } from "./components";

import "./sidebar.css";

export function Sidebar({ addElement, elements, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleAddingElement = (elementData) => {
    addElement(elementData);
    setEditing(false);
  };

  return (
    <div className="sidebar-wrapper">
      <div className={isOpen ? "sidebar__open" : "sidebar__closed"}>
        <div className="sidebar-content">
          {editing ? (
            <SidebarAddForm handleSubmit={handleAddingElement} />
          ) : (
            <button
              className="add-element-button"
              onClick={() => setEditing((state) => !state)}
            >
              +
            </button>
          )}

          {elements.map((element) => (
            <SidebarElement key={element.id} {...element} />
          ))}
        </div>
      </div>
      <button
        className="sidebar-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
    </div>
  );
}

Sidebar.propTypes = {
  addElement: PropTypes.func,
  elements: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
