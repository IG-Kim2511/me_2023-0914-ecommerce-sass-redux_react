// actions/filterActions.js
export const setCategoriesFilter = (categories) => ({
  type: 'SET_CATEGORIES_FILTER',
  payload: categories,
});

export const setMaxPriceFilter = (maxPrice) => ({
  type: 'SET_MAX_PRICE_FILTER',
  payload: maxPrice,
});

export const setSortOrder = (sortOrder) => ({
  type: 'SET_SORT_ORDER',
  payload: sortOrder,
});

export const setFilteredProducts = (filteredProducts) => ({
  type: 'SET_FILTERED_PRODUCTS',
  payload: filteredProducts,
});
