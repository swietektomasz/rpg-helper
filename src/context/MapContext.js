import React from "react";
import PropTypes from "prop-types";

const MapStateContext = React.createContext();
const MapDispatchContext = React.createContext();

const INITIAL_MAP_STATE = {
  currentMap: {
    imageUrl: "http://www.gitzmansgallery.com/maps/Map-City-Middenheim-1.jpg",
  },
  maps: [],
};

function mapReducer(state, action) {
  switch (action.type) {
    case "set-maps": {
      return { ...state, maps: action.payload };
    }
    case "set-current-map": {
      return { ...state, currentMap: action.payload };
    }
    case "add-map": {
      return { ...state, maps: [...state.maps, action.payload] };
    }
    case "remove-map": {
      return {
        ...state,
        maps: state.maps.filter((map) => map.id !== action.payload.id),
      };
    }
    default: {
      throw new Error(`unhandled action type: ${action.type}`);
    }
  }
}

function MapProvider({ children }) {
  const [state, dispatch] = React.useReducer(mapReducer, INITIAL_MAP_STATE);

  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  );
}

function useMapState() {
  const context = React.useContext(MapStateContext);

  if (context === undefined) {
    throw new Error("useMapState must be used within a MapProvider");
  }

  return context;
}

function useMapDispatch() {
  const context = React.useContext(MapDispatchContext);

  if (context === undefined) {
    throw new Error("useMapDispatch must be used within a MapProvider");
  }

  return context;
}

MapProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
};

export { MapProvider, useMapState, useMapDispatch };
