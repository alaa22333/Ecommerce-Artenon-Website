import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  ERROR_PRODUCTS,
  ERROR_SINGLE_PRODUCT,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  INITIAL_PRODUCT,
  INITIAL_STATE,
} from "../utlis/actions";
import axios from "axios";
import { products_url, single_product_url } from "../utlis/constants";
import { reducer } from "../reducers/productsReducer";
const ProductsContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  error: { msg: "", show: false },
  product: { data: {}, isLoading: false, error: { msg: "", show: false } },
};
export const ProductsProvider = ({ children }) => {
  const [state, disPatch] = useReducer(reducer, initialState);

 
 
  useEffect(() => {

    fetchProducts(products_url);
     //eslint-disable-next-line
  }, []);

  //all products
  const fetchProducts = async (url) => {
    disPatch({ type: INITIAL_STATE });
    try {
      
      const response = await axios.get(url)
      const data = response.data
        disPatch({ type: GET_PRODUCTS, payload: data });
      
    } catch (err) {
      disPatch({ type: ERROR_PRODUCTS });
    }
  };
  //single product
  const fetchSingleProduct = async (id) => {
   
    disPatch({ type: INITIAL_PRODUCT });
     try {
      const response = await axios.get(`${single_product_url}${id}`)
      const data = response.data
        disPatch({ type: GET_SINGLE_PRODUCT, payload: data });
      
    } catch (err) {
      disPatch({ type: ERROR_SINGLE_PRODUCT });
    }
  };
  //filters
  let listFun = (filter) => {
    let list = state.products.map((pro) => {
      return pro[filter];
    });

    if (filter === "colors") {
      list = list.flat();
    }
    return ["All", ...new Set(list)];
  };
  //products

  return (
    <ProductsContext.Provider value={{ ...state, listFun,fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
;
