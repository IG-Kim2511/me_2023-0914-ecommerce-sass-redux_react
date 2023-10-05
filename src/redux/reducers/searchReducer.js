// searchReducer.js
import products from "../../data";
import { applyFilter, setSearchQuery } from "../actions/searchActions";


const initialState = {
  searchQuery: '',
  products: products,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'APPLY_FILTER':
      // Implement your filter logic here and update filteredItems
      const filteredItems = state.items.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredItems,
      };
    default:
      return state;
  }
};

export default searchReducer;
