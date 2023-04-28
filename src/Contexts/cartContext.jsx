import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  ITEM_FILTER,
  TOGGLE,
} from "../utlis/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();
let data = JSON.parse(localStorage.getItem("data"));

const initialState = {
  items: data?.items || [],
  allAmount: data?.allAmount || 0,
  allTotal: data?.allTotal || 0,
  shipping: 5,
};
export const CartProvider = ({ children }) => {
  const [state, disPatch] = useReducer(reducer, initialState);

  useEffect(() => {
    disPatch({ type: COUNT_CART_TOTALS });
    const data = { ...state };
    localStorage.setItem("data", JSON.stringify(data));
  }, [state.items]);

  const handleCart = (id, color, amount, data) => {
    disPatch({ type: ADD_TO_CART, payload: { id, color, amount, data } });
    toast.success(`${data.name.toUpperCase()} Added To Cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  
  };
  const itemFilter = (id) => {
    disPatch({ type: ITEM_FILTER, payload: id });
    toast.success("Product Removed From Cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const toggle = (filter, id) => {
    disPatch({ type: TOGGLE, payload: { id, filter } });
  
  };
  const clearAllCart=()=>{
  disPatch({type:CLEAR_CART})
  }

  return (
    <CartContext.Provider value={{ ...state, handleCart, itemFilter, toggle,clearAllCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
