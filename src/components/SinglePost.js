import React from 'react';
import { connect } from "react-redux";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class SinglePost extends React.Component{
	
	render(){
		console.log('this.props', this.props);

		if( !this.props.post ) {
			return <h1>Post Not Found</h1>
		}

		return(
			<div>
				<h1>{this.props.post.postTitle}</h1>
				<h4>{this.props.post.postCategory}</h4>
				<p>{this.props.post.postContent}</p>
			</div>
		);

	}
}



const mapStateToProps = state => ({
	posts: state.posts.items
});

export default connect(mapStateToProps)(SinglePost);