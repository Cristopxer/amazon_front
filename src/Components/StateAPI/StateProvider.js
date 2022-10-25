// Setup data layer with React context API
import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// Build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it in a component
export const useStateValue = () => useContext(StateContext);
