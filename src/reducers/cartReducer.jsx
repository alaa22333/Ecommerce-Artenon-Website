import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  ITEM_FILTER,
  TOGGLE,
} from "../utlis/actions";

export const reducer = (state, action) => {
  const { payload,type } = action;
  switch (type) {
    case ADD_TO_CART:
      let { id, color, amount, data } = payload;
      const newItem = { id:id+color, color, amount, data };
      const newCart = state.items.find((item) => item.id === id+color);
      if (newCart) {
        const arr = state.items.map((item) => {
          if (item.id === id+color) {
            let newAmount = item.amount + 1;
            if (newAmount > item?.data?.stock) {
              newAmount = item?.data?.stock;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        });

        return { ...state, items: arr };
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
      
     
    case COUNT_CART_TOTALS:
      const { allTotal, allAmount } = state?.items?.reduce(
        (total, curr) => {
          const {
            data: { price },
            amount,
          } = curr;
          const totalPrice = price * amount;
          //   total.itemTotal = totalPrice;
          total.allAmount += amount;
          total.allTotal += totalPrice;
          return total;
        },
        { allTotal: 0, allAmount: 0, itemTotal: 0 }
      );
      return {
        ...state,
        allTotal,
        allAmount,
      };
    case ITEM_FILTER:
      const newItems = state.items.filter((item) => item.id !== payload);
      return { ...state, items: newItems };
    case TOGGLE:
      const search = state.items.find((item) => item.id === payload.id);
      if (search) {
        const newArray = state?.items?.map((item) => {
          if (item.id === payload.id) {
            if (payload.filter === "add") {
              let newAmount = item.amount + 1;
              if (newAmount > item?.data?.stock) {
                newAmount = item?.data?.stock;
              }
              return { ...item, amount: newAmount };
            }
            if (payload.filter === "minus") {
              let newAmount = item.amount - 1;
              if (newAmount <= 1) {
                newAmount = 1;
              }
              return { ...item, amount: newAmount };
            }
          }
          return item;
        });
        return { ...state, items: newArray };
      }
case  CLEAR_CART:
  return {...state,items:[],allAmount:0,allTotal:0}
    default:
      return state;
  }
};
