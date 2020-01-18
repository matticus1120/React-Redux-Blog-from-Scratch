import EditCategory from '../components/PostForm.js';

import { fetchCategory, resetCategory } from '../actions/categoryActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    activeCategory: state.posts.activeCategory,
    activeCategoryId: ownProps.match.params.id,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (categoryId) => {
    	dispatch(fetchCategory(categoryId));
    },
    resetCategory: () => {
      dispatch(resetCategory());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);