import Header from '../components/Header.js';
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch) => {
  return {
   resetMe: () =>{
    //sign up is not reused, so we dont need to resetUserFields
    //in our case, it will remove authenticated users
     // dispatch(resetUserFields());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return { 
    posts: state.posts.items,
    categories: state.categories.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
