import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { database } from "src/firebase/firebase";
import { MovableThing } from "src/components";

const ThingsStateContext = React.createContext();
const ThingsDispatchContext = React.createContext();

function thingsReducer(state, action) {
  switch (action.type) {
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
    database
      .collection("things")
      .get()
      .then(querySnapshot => {
        return querySnapshot.forEach(doc => {
          dispatch({
            type: "add-avatar",
            payload: (
              <MovableThing key={doc.id} imageUrl={doc.data().imageUrl} />
            )
          });
        });
      });
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
