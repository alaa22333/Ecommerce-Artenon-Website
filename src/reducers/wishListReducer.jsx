import {
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST,
  FILTER_WISH_LIST,
} from "../utlis/actions";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_WISHLIST:
      const { id, data } = payload;
      const newItem = { id, data };
      const search = state.items.find((item) => item.id === id);
      if (search) {
        const newItems = [
          ...new Set(state.items.map((item) => JSON.stringify(item))),
        ].map((item) => JSON.parse(item));
        return { ...state, items: newItems };
      } else {
        return { ...state, items: [...state.items, newItem] };
      }
    case FILTER_WISH_LIST:
      const newItems = state.items.filter((item) => item.id !== payload);
      return { ...state, items: newItems };

    case CLEAR_WISHLIST:
      return { items: [] };
  }
  throw new Error(`No Matching "${type}" - action type`);
};
