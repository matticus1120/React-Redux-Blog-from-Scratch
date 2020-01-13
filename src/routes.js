import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/HomeContainer';
import NewPost from './containers/NewPostContainer';

export default class Routes extends React.Component{

	render() {
		return (
			<div>
				
				<Header />
				
				<Router>
		  
			        <Route path="/" exact component={Home} />

			        <Route path="/new-post" component={NewPost} />
			     
			    </Router>

		    </div>

		)
	} 

}