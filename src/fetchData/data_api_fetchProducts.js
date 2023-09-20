// api.js


// https://dummyjson.com/products
export function fetchProducts() {
    return fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Check if data is an array or if it contains an array
        if (Array.isArray(data)) {
          return data;
        } else if (Array.isArray(data.products)) {
          return data.products;
        } else {
          throw new Error('Data is not an array');
        }
      });
  }
  