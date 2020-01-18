import Home from '../components/Home.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return { 
    posts: state.posts.items.map( postItem => {
    	return {
    		...postItem, 
    		categoryObject: state.categories.items.find( categoryItem => categoryItem.id === postItem.postCategory ) 
    	};
    })
  };
}

export default connect(mapStateToProps)(Home);