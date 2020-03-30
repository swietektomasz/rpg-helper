import React from "react";
import PropTypes from "prop-types";

import "./sidebar-avatar.css";

export function SidebarAvatar({ imageUrl, name }) {
  return (
    <div
      className="avatar-portrait"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <span className="portrait-name">{name}</span>
    </div>
  );
}

SidebarAvatar.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string
};
