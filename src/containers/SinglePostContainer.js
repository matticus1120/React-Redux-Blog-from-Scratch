import SinglePost from '../components/SinglePost.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    post: state.posts.items[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps)(SinglePost);