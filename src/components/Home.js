import React from 'react';
import { connect } from "react-redux";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import { Table } from 'reactstrap';

class Home extends React.Component{
	
	renderPosts() {
		return this.props.posts.map((item, index )=> {
			return (
				<tr key={index}>
					<td><Link to={`/posts/${index}`}>{item.postTitle}</Link></td>
					<td>{item.postCategory}</td>
				</tr>
			)
		});
	}
	
	renderPostsTable() {
		
		if( !this.props.posts.length ) {
			return <div><p>No posts yet. <Link to="/new-post">Add one now</Link>.</p></div>
		}

		var postsRows = this.renderPosts();

		return (
			<Table>
				<thead>
					<tr>
						<th>Post</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{postsRows}
				</tbody>
			</Table>
		)

	}

	render(){
		
		if( this.props.loading ) {
			return <div><em>Loading...</em></div>
		}


		return(
			<div>
				<h1>All Posts</h1>
				{this.renderPostsTable()}
			</div>
		);
	}
}



const mapStateToProps = state => ({
	posts: state.posts.items,
	loading: state.posts.loading,
	error: state.posts.error
});

export default connect(mapStateToProps)(Home);