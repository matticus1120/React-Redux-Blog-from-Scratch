/**
 * Main App file
 */

// react, redux
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';

// Containers
import HeaderContainer from './containers/HeaderContainer';
import Home from './containers/HomeContainer';
import NewPost from './containers/NewPostContainer';
import EditPost from './containers/EditPostContainer';
import SinglePost from './containers/SinglePostContainer';
import Categories from './containers/CategoryContainer';
import NewCategory from './containers/NewCategoryContainer';
import EditCategory from './containers/EditCategoryContainer';

import { connect } from 'react-redux';

import { fetchPosts } from "./actions/postActions";
import { fetchCategories } from "./actions/categoryActions";




class App extends React.Component{

	componentDidMount() {
		this.props.fetchCategories();
		this.props.fetchPosts();
		
	}

	render() {
		
		return (
			<BrowserRouter>
				
				<HeaderContainer />

				<div className="main">
					<div className="container">
						
						<Switch>
				  
					        <Route path="/" exact component={Home} />
					        <Route path="/new-post" component={NewPost} />
					        <Route path="/edit-post/:id" component={EditPost} />
					        <Route path="/posts/:id" component={SinglePost} />
					        <Route path="/new-category" component={NewCategory} />
					        <Route path="/categories" component={Categories} />
					        <Route path="/edit-category/:id" component={EditCategory} />

					    </Switch>
					    
					</div>
				</div>

		    </BrowserRouter>

		)
	} 

}

/**
 * Connent App to the redux store so that you can fetchposts right away
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
    	dispatch(fetchPosts());
    },
    fetchCategories: () => {
    	dispatch(fetchCategories());
    }
  }
}

export default connect(null, mapDispatchToProps)(App);


