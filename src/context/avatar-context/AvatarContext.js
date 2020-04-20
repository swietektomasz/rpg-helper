import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { getAvatars } from "src/firebase/avatarCollection";

const AvatarStateContext = React.createContext();
const AvatarDispatchContext = React.createContext();

function avatarReducer(state, action) {
  switch (action.type) {
    case "set-avatars": {
      return action.payload;
    }
    case "add-avatar": {
      return [...state, action.payload];
    }
    case "remove-avatar": {
      return state;
    }
    default: {
      throw new Error(`unhandled action type: ${action.type}`);
    }
  }
}

function AvatarProvider({ children }) {
  const [state, dispatch] = React.useReducer(avatarReducer, []);

  useEffect(() => {
    getAvatars().then((avatars) =>
      dispatch({ type: "set-avatars", payload: avatars })
    );
  }, []);

  return (
    <AvatarStateContext.Provider value={state}>
      <AvatarDispatchContext.Provider value={dispatch}>
        {children}
      </AvatarDispatchContext.Provider>
    </AvatarStateContext.Provider>
  );
}

function useAvatarState() {
  const context = React.useContext(AvatarStateContext);

  if (context === undefined) {
    throw new Error("useAvatarState must be used within a AvatarProvider");
  }

  return context;
}

function useAvatarDispatch() {
  const context = React.useContext(AvatarDispatchContext);

  if (context === undefined) {
    throw new Error("useAvatarDispatch must be used within a AvatarProvider");
  }

  return context;
}

AvatarProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
};

export { AvatarProvider, useAvatarState, useAvatarDispatch };
