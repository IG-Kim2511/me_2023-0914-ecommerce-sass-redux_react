// ProductsFiltered.js
import { connect } from 'react-redux';

// ... Component code ...

const mapStateToProps = (state) => ({
  filteredProducts: state.filter.filteredProducts,
});

export default connect(mapStateToProps)(ProductsFiltered);
