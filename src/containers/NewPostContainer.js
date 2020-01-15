import NewPost from '../components/NewPost.js';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps) {
  return { 
    categories: state.categories.items
  };
}

export default connect(mapStateToProps, null)(NewPost);
