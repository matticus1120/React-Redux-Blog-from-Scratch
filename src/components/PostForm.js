import React from 'react';
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom';

class PostForm extends React.Component{
	
	componentDidMount() {
		if( this.props.fetchPost ) {
			this.props.fetchPost(this.props.match.params.id);
		}
	}

	componentWillUnmount() {
		if( this.props.fetchPost ) {
			this.props.resetPost();
		}
	}

	onSubmit = (values) => {
		this.props.insertPost( values );
		this.props.history.push('/');
	}

	getCategoryOptions() {
		if( !this.props.categories ) {
			return null;
		}
		return this.props.categories.map((item, index) => {
			return (
				<option value={item.categoryTitle} key={index}>{item.categoryTitle}</option>
			)
		});
	}

	renderNewPost() {
	
		if( !this.props.categories || !this.props.categories.length ) {
			return <div><p>No categories yet. <Link to="/new-category">Add one now</Link>.</p></div>
		}

		return (
			<Form
				onSubmit={this.onSubmit}
				initialValues={this.props.activePost}
				render={({ handleSubmit }) => (

				<form onSubmit={handleSubmit}>

					<h3>{ !this.props.activePost ? 'New' : this.props.activePost.postTitle }</h3>
					
					<div className="row">
						
						<div className="col-6">
							<div className="form-group">
								<label htmlFor="postTitle">Title</label>
								<Field 
									name="postTitle" 
									component="input" 
									placeholder="Post Title" 
									className="form-control"
								/>
							</div>
						</div>
						<div className="col-6">
							<div className="form-group">
								<label htmlFor="postCategory">Category</label>
								<Field
									name="postCategory"
									component="select"
									className="form-control"
								>
									<option value="">Select Category</option>
									{this.getCategoryOptions()}
								</Field>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<div className="form-group">
								<label htmlFor="postContent">Content</label>
								<Field
									name="postContent"
									component="textarea"
									placeholder="content"
									className="form-control"
								/>
							</div>
						</div>
						<div className="col-6">
						</div>
					</div>

					<button className="btn btn-success">{ this.props.activePost ? 'Update' : 'Publish' }</button>
				</form>

				)}
			/>

		);
	}

	render() {

		return (
			<div>
				<h1>{ this.props.activePost ? 'Edit Post' : 'New Post' }</h1>
				{this.renderNewPost()}
			</div>
		)

	}
}

export default PostForm;
