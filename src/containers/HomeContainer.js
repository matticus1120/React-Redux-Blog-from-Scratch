import Home from '../components/Home.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    posts: state.posts.items,
  };
}

export default connect(mapStateToProps)(Home);