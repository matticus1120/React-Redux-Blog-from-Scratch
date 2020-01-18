import React from 'react';
import { Link } from 'react-router-dom';

class SinglePost extends React.Component{

	componentWillMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.resetPost();
	}
	
	render() {

		if( !this.props.activePost ) {
			return <div className="not-found">
				<h1>Post Not Found</h1>
				<p><Link to="/">Back</Link></p>
			</div>
		}

		return(
			<div>
				<h1>{this.props.activePost.postTitle}</h1>
				<h4>{this.props.activePost.postCategory}</h4>
				<p>{this.props.activePost.postContent}</p>
			</div>
		);

	}
}


export default SinglePost;