import React, { useState } from "react";
import PropTypes from "prop-types";

const ModalStateContext = React.createContext();

function ModalProvider({ children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <ModalStateContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ModalStateContext.Provider>
  );
}

function useModalState() {
  const context = React.useContext(ModalStateContext);

  if (context === undefined) {
    throw new Error("useAvatarState must be used within a AvatarProvider");
  }

  return context;
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
};

export { ModalProvider, useModalState };
