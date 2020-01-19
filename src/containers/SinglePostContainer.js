import SinglePost from '../components/SinglePost.js';

import { fetchPost, resetPost } from '../actions/postActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {

  var categoryObject = state.posts.activePost ? state.categories.items.find( categoryItem => categoryItem.id === state.posts.activePost.postCategory ) : null;

  return { 
    activePost: {
        ...state.posts.activePost, 
        categoryObject: categoryObject
    },
    activePostId: ownProps.match.params.id,
    loading: state.posts.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => {
    	dispatch(fetchPost(postId));
    },
    resetPost: () => {
    	dispatch(resetPost());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);