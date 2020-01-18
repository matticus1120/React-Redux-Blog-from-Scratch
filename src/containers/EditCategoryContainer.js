import EditCategory from '../components/CategoryForm.js';

import { fetchCategory, resetCategory, updateCategory } from '../actions/categoryActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    activeCategory: state.categories.activeCategory,
    activeCategoryId: ownProps.match.params.id,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (categoryId) => {
    	dispatch(fetchCategory(categoryId));
    },
    updateCategory: (category) => {
      dispatch(updateCategory(category));
    },
    resetCategory: () => {
      dispatch(resetCategory());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);