import React from "react";
import PropTypes from "prop-types";

import { AvatarProvider, MapProvider, ModalProvider } from "../";

export function CombinedContext({ children }) {
  return (
    <AvatarProvider>
      <MapProvider>
        <ModalProvider>{children}</ModalProvider>
      </MapProvider>
    </AvatarProvider>
  );
}

CombinedContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
};
