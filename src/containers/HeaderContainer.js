import Header from '../components/Header.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    posts: state.posts.items,
    categories: state.categories.items
  };
}

export default connect(mapStateToProps, null)(Header);