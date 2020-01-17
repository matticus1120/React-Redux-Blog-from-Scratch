import React from 'react';
import { connect } from "react-redux";
import { Form, Field } from 'react-final-form'

import { insertPost } from "../actions/postActions";

class NewPost extends React.Component{
	
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

	render(){

		return(
			<div>
				<h1>Add New Post</h1>
					<Form
						onSubmit={this.onSubmit}
						render={({ handleSubmit }) => (

						<form onSubmit={handleSubmit}>
							
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

							<button className="btn btn-success">Submit</button>
						</form>

						)}
					/>

			</div>
		);
	}
}


const mapDispatchToProps = {
	insertPost
}

export default connect(null, mapDispatchToProps)(NewPost);


