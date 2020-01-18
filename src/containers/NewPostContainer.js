import NewPost from '../components/PostForm.js';
import { connect } from 'react-redux';

import { insertPost } from "../actions/postActions";


function mapStateToProps(state, ownProps) {
	console.log('state', state);
  return { 
    categories: state.categories.items
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    insertPost: (values) => {
    	dispatch(insertPost(values));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);