import {
  ERROR_PRODUCTS,
  ERROR_SINGLE_PRODUCT,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  INITIAL_PRODUCT,
  INITIAL_STATE,
} from "../utlis/actions";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INITIAL_STATE:
      return { ...state, isLoading: true ,error:{show:false}};

    case GET_PRODUCTS:
      return { ...state, isLoading: false, products: payload };
    case ERROR_PRODUCTS:
      return { ...state, error: { msg: "Something Went Wrong !", show: true } };
    case INITIAL_PRODUCT:
      return { ...state, product: { ...state.product, isLoading: true,error:{show:false} } };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        product: { ...state.product, isLoading: false, data: payload },
      };
    case ERROR_SINGLE_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          error: { msg: "This Product IS Not Found !", show: true },
        },
      };
    default:
      return state;
  }
};
