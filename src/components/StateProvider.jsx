import React, { createContext, useContext, useReducer } from "react";

// 1. Create the data layer
export const StateContext = createContext();

// 2. Create a provider component to wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// 3. Custom hook to use the data layer in components
export const useStateValue = () => useContext(StateContext);
