import React from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import { Table } from 'reactstrap';

class Categories extends React.Component{
	
	renderCategories() {
		return this.props.categories.map((item, index )=> {
			return (
				<tr key={index}>
					<td><Link to={`/categories/${index}`}>{item.categoryTitle}</Link></td>
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
						<th>Post</th>
						<th>Category</th>
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
				<h1>All Categories</h1>
				{this.renderCategoriesTable()}
			</div>
		);
	}
}



const mapStateToProps = state => ({
	categories: state.categories.items,
	loading: state.categories.loading,
	error: state.categories.error
});

export default connect(mapStateToProps)(Categories);