import SinglePost from '../components/SinglePost.js';

import { fetchPost } from '../actions/postActions';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    activePost: state.posts.activePost,
    activePostId: ownProps.match.params.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => {
    	dispatch(fetchPost(postId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);