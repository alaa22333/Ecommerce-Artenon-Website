import { useProductsContext } from "../Contexts/ProductsContext";
import {
  CATEGORY,
  CHANGE,
  CLEAR_FILTERS,
  IS_GRID,
  IS_LIST,
  LOAD_PRODUCTS,
  UPDATE_DATA,
} from "../utlis/actions";

export const reducer = (state, action) => {
 

  const { payload, type } = action;
  switch (type) {
    case IS_LIST:
      return { ...state, isGrid: false, isList: true };
    case IS_GRID:
      return { ...state, isList: false, isGrid: true };
    case LOAD_PRODUCTS:
      return {
        ...state,
     
        filteredProducts: [...payload.products],all_products:[...payload.products],
        price: payload.maxPrice,
      };
    case CHANGE:
      let { value, name } = payload;

     
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    case UPDATE_DATA: 
    const {all_products}=state
      const { color, price, company, shipping,category ,search} = state.filters;

      let filtered = [...all_products];
      if (search) {
        filtered = filtered.filter((item) => item.name.startsWith( search));             
      }
      if (color !== "All") {
        filtered = filtered.filter((item) => {
          return item?.colors?.find((i) => i === color);
        });
     
      }
      if (category !== "All") {
        filtered = filtered.filter((item) => item.category === category);             
      }
      if (company !== "All") {
        filtered = filtered.filter((item) => item.company === company);
      }      
      if (shipping) {
        filtered = filtered.filter((item) => item.shipping === true);
      }
   
      filtered = filtered.filter((item) => item.price <= price);
   

    return { ...state, isClicked:true,filteredProducts: filtered }
  
   case CLEAR_FILTERS:
    
    return {...state,isClicked:false, filters:{...state.filters,color:'All',category:'All',company:'All',filteredProducts:[...all_products],shipping:false,price:payload}}
    default:
      return state;
  }
};
