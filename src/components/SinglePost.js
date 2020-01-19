import React from 'react';
import { Link } from 'react-router-dom';

class SinglePost extends React.Component{

	componentWillMount() {
		this.props.fetchPost(this.props.activePostId);
	}

	componentWillUnmount() {
		this.props.resetPost();
	}
	
	render() {
		
		if( this.props.loading ) {
			return <div className="loading"><h1><em>Loading...</em></h1></div>
		}

		if( !this.props.activePost ) {
			return <div className="not-found">
				<h1>Post Not Found</h1>
				<p><Link to="/">Back</Link></p>
			</div>
		}

		console.log('this.props.activePost', this.props.activePost);

		var categoryTitle = this.props.activePost.categoryObject ? this.props.activePost.categoryObject.categoryTitle : '';

		return(
			<div>
				<h1>{this.props.activePost.postTitle}</h1>
				<h4>{categoryTitle}</h4>
				<p>{this.props.activePost.postContent}</p>
			</div>
		);

	}
}


export default SinglePost;