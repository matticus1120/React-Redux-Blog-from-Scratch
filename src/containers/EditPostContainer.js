import EditPost from '../components/PostForm.js';

import { fetchPost, resetPost, updatePost } from '../actions/postActions';
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
    updatePost: (post) => {
    	dispatch(updatePost(post));
    },
    fetchPost: (postId) => {
      dispatch(fetchPost(postId));
    },
    resetPost: () => {
      dispatch(resetPost());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPost);