import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/HomeContainer';
import NewPost from './containers/NewPostContainer';
import SinglePost from './containers/SinglePostContainer';
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
					        <Route path="/posts/:id" component={SinglePost} />
					        <Route path="/new-category" component={NewCategory} />

					    </Switch>
					    
					</div>
				</div>

		    </BrowserRouter>

		)
	} 

}