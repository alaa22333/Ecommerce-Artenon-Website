import {
  createContext,
useReducer,useContext,useEffect,useState, useCallback
} from "react";
import { reducer } from "../reducers/filterReducer";
import {
  IS_LIST,
  IS_GRID,
  LOAD_PRODUCTS,
  CHANGE,
  UPDATE_DATA,
  CLEAR_FILTERS,
} from "../utlis/actions";
import { useProductsContext } from "./ProductsContext";
import { useMainContext } from "./mainContext";
import { Login } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FilterContext = createContext();
const initialState = {
  filteredProducts: [],all_products:[],
  filters: {
    category: "All",
    color: "All",
    company: "All",
    price: 309999,
    search: "",
  },
  isClicked: false,
  isGrid: true,
  isList: false,
};
export const FiltersContextProvider = ({ children }) => {
  const [state, disPatch] = useReducer(reducer, initialState);
  const { products, listFun } = useProductsContext();

  useEffect(() => {
    disPatch({ type: UPDATE_DATA });
    //eslint-disable-next-line
  }, [state.filters]);

  
  useEffect(() => {
       disPatch({ type: LOAD_PRODUCTS, payload: { products, maxPrice } });

    //eslint-disable-next-line
  }, [products]);
  const maxPrice = Math.max(...listFun("price").slice(1));

  const handleGridView = useCallback(() => {
    disPatch({ type: IS_GRID });
  },[state.isGrid])
  const handleListView =  useCallback(() => {
    disPatch({ type: IS_LIST })
  },[state.isList])

  const handleChange = useCallback((item) => {
    let value = item.value;
    let name = item.name;

    if (name === "category") {
      value = item.textContent
     
    }
    if (name === "color" && item.textContent === "All") {
      value = item.textContent;
    }
    if (name === "shipping") {
      value = item.checked;
    }
    disPatch({ type: CHANGE, payload: { name, value } });
  },[state.filters]);
  const handleClearFilters = () => {
    disPatch({ type: CLEAR_FILTERS, payload: maxPrice });
    toast.success("All Filters Deleted", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        maxPrice,
        handleGridView,
        handleListView,
        handleChange,
        handleClearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFiltersContext = () => {
  return useContext(FilterContext)
}