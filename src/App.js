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


export default class App extends React.Component{

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

					    </Switch>
					    
					</div>
				</div>

		    </BrowserRouter>

		)
	} 

}