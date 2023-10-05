// searchActions.js

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  
  export const applyFilter = (query) => ({
    type: 'APPLY_FILTER',
    payload: query,
  });
  