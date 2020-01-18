import NewCategory from '../components/CategoryForm.js';
import { connect } from 'react-redux';

import { insertCategory } from "../actions/categoryActions";

const mapDispatchToProps = (dispatch) => {
  return {
    insertCategory: (values) => {
    	dispatch(insertCategory(values));
    }
  }
}

export default connect(null, mapDispatchToProps)(NewCategory);
