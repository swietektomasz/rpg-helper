import React from "react";
import PropTypes from "prop-types";

import "./sidebar-element.css";

export function SidebarElement({ imageUrl, name }) {
  return (
    <div className="thumbnail" style={{ backgroundImage: `url(${imageUrl})` }}>
      <span className="title">{name}</span>
    </div>
  );
}

SidebarElement.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};
