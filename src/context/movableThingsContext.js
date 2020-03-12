import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { getThings } from "../firebase/thingsCollection";

const ThingsStateContext = React.createContext();
const ThingsDispatchContext = React.createContext();

function thingsReducer(state, action) {
  switch (action.type) {
    case "set-things": {
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

function ThingsProvider({ children }) {
  const [state, dispatch] = React.useReducer(thingsReducer, []);

  useEffect(() => {
    getThings().then(things =>
      dispatch({ type: "set-things", payload: things })
    );
  }, []);

  return (
    <ThingsStateContext.Provider value={state}>
      <ThingsDispatchContext.Provider value={dispatch}>
        {children}
      </ThingsDispatchContext.Provider>
    </ThingsStateContext.Provider>
  );
}

function useThingsState() {
  const context = React.useContext(ThingsStateContext);

  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }

  return context;
}

function useThingsDispatch() {
  const context = React.useContext(ThingsDispatchContext);

  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }

  return context;
}

ThingsProvider.propTypes = {
  children: PropTypes.array
};

export { ThingsProvider, useThingsDispatch, useThingsState };
