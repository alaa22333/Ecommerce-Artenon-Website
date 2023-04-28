
import React, { createContext, useCallback, useContext, useReducer, useState } from "react";
import { reducer } from "../reducers/mainReducer";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../utlis/actions";
const MainContext = createContext();
const initialState = {
  isClose: true,
};
export const MainContextProvider = ({ children }) => {
  const [state, disPatch] = useReducer(reducer, initialState);
  const [openFilters, setOpenFilters] = useState(false);
  const [closeSignIn, setCloseSignIn] = useState(true);
  const [closeSignUp, setCloseSignUp] = useState(true);
  const handleOpenSB =useCallback((value) => {
    disPatch({ type: OPEN_SIDEBAR, payload: value });
  },[state.isClose]);

  return (
    <MainContext.Provider
      value={{
        ...state,
        handleOpenSB,
        openFilters,
        setOpenFilters,
        setCloseSignIn,
        closeSignIn,
        closeSignUp,
        setCloseSignUp,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => {
  return useContext(MainContext);
};
