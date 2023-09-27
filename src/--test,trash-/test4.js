// Filter.js
import { connect } from 'react-redux';
import { setCategoriesFilter, setMaxPriceFilter, setSortOrder } from '../actions/filterActions';

// ... Component code ...

const mapStateToProps = (state) => ({
  categories: state.filter.categories,
  maxPrice: state.filter.maxPrice,
  sortOrder: state.filter.sortOrder,
});

const mapDispatchToProps = {
  setCategoriesFilter,
  setMaxPriceFilter,
  setSortOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
