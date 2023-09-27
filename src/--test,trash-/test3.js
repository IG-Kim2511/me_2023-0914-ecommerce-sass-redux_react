// reducers/filterReducer.js
const initialState = {
    categories: [],
    maxPrice: 1800,
    sortOrder: 'asc',
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORIES_FILTER':
        return { ...state, categories: action.payload };
      case 'SET_MAX_PRICE_FILTER':
        return { ...state, maxPrice: action.payload };
      case 'SET_SORT_ORDER':
        return { ...state, sortOrder: action.payload };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  