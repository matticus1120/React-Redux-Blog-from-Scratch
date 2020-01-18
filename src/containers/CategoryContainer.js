import Categories from '../components/Categories.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    categories: state.categories.items,
  };
}

export default connect(mapStateToProps)(Categories);