import NewPost from '../components/NewPost.js';

import { fetchPost } from '../actions/postActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    activePost: state.posts.activePost,
    activePostId: ownProps.match.params.id,
    categories: state.categories.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => {
    	dispatch(fetchPost(postId));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPost);