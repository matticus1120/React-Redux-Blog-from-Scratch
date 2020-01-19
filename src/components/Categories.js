import React from 'react';

import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class Categories extends React.Component{
	
	renderCategories() {
		return this.props.categories.map((item, index )=> {
			return (
				<tr key={index}>
					<td>{item.categoryTitle}</td>
					<td><Link to={`/edit-category/${item.id}`}>Edit</Link></td>
				</tr>
			)
		});
	}
	
	renderCategoriesTable() {
		
		if( !this.props.categories.length ) {
			return <div><p>No categories yet. <Link to="/new-category">Add one now</Link>.</p></div>
		}

		var categoryRows = this.renderCategories();

		return (
			<Table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{categoryRows}
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
				<header>
					<div className="d-flex p-2 justify-content-between align-items-center">
						<h1>All Categories</h1>
						<div>
							<Link to="/new-category" className="btn btn-success">Add New</Link>
						</div>
					</div>	
				</header>
				{this.renderCategoriesTable()}
			</div>
		);
	}
}

export default Categories;