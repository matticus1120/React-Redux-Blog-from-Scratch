import EditPost from '../components/NewPost.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    post: state.posts.items[ownProps.match.params.id],
    categories: state.categories.items
  };
}

export default connect(mapStateToProps)(EditPost);