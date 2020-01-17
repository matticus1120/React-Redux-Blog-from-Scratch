import React from 'react';
import { connect } from "react-redux";
import { Form, Field } from 'react-final-form'

import { insertCategory } from "../actions/categoryActions";

class NewCategory extends React.Component{
	
	onSubmit = (values) => {
		this.props.insertCategory( values );
		this.props.history.push('/categories');
	}

	render() {

		return(
			<div>
				<h1>Add New Category</h1>
					<Form
						onSubmit={this.onSubmit}
						render={({ handleSubmit }) => (

						<form onSubmit={handleSubmit}>
							
							<div className="row">
								
								<div className="col-6">
									<div className="form-group">
										<label htmlFor="postTitle">Category Title</label>
										<Field 
											name="categoryTitle" 
											component="input" 
											placeholder="Category Title" 
											className="form-control"
										/>
									</div>
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
	insertCategory
}

export default connect(null, mapDispatchToProps)(NewCategory);


