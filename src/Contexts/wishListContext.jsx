import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../reducers/wishListReducer";
import {
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST,
  FILTER_WISH_LIST,
} from "../utlis/actions";
import { useProductsContext } from "./ProductsContext";
import { toast,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { single_product_url } from "../utlis/constants";
import axios from "axios";

const WishListContext = createContext();
const initialState = {
  items: JSON.parse(localStorage.getItem("wishItems")) || [],
};
export const WishListProvider = ({ children }) => {
  const {
    fetchSingleProduct,
    product: { data },
  } = useProductsContext();
  const [state, disPatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(state.items));
  }, [state.items]);
  const handleWishList = useCallback( async (id) => {
    const response = await axios.get(`${single_product_url}${id}`);
    const data = response.data;
    disPatch({ type: ADD_TO_WISHLIST, payload: { id, data } });
    toast.success(`${data.name.toUpperCase() } Added To WishList`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
 
  },[data])

  const itemFilter = (id) => {
    disPatch({ type: FILTER_WISH_LIST, payload: id });
    toast.success(` Product Removed from WishList`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
 
  };
  const clearWishList = () => {
    disPatch({ type: CLEAR_WISHLIST });

  };
  return (
    <WishListContext.Provider
      value={{ ...state, handleWishList, itemFilter, clearWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
export const useWishListContext = () => {
  return useContext(WishListContext);
};
