import React from 'react';
import { Form, Field } from 'react-final-form'

class CategoryForm extends React.Component{
	
	
	componentDidMount() {
		if( this.props.activeCategoryId ) {
			this.props.fetchCategory(this.props.match.params.id);
		}
	}

	componentWillUnmount() {
		if( this.props.activeCategoryId ) {
			this.props.resetCategory();
		}
	}
	onSubmit = (values) => {
		if( this.props.activeCategoryId ) {
			this.props.updateCategory( values );
		}
		else {
			this.props.insertCategory( values );
		}
		this.props.history.push('/categories');
	}

	render() {

		return(
			<div>
				<h1>{this.props.activeCategoryId ? 'Edit Category' : 'Add New Category' }</h1>
					<Form
						onSubmit={this.onSubmit}
						initialValues={this.props.activeCategory}
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


export default CategoryForm;
