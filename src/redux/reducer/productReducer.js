// src/reducers/productReducer.js
const initialState = {
    products: [],
  };

  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state;
        console.log(state)
    }
  };
  
  export default productReducer;