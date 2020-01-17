import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

import {
	Collapse,
	Navbar,
	Nav,
	NavItem,
} from 'reactstrap';

class Header extends React.Component{

	render(){

		return(
			<div className="header"> 
				<Navbar color="light" light expand="md" className="mb-5">   
					<Link className="navbar-brand" to="/">Redux Blog</Link>

					<Collapse isOpen={true} navbar> 
						<Nav className="ml-auto" navbar>
							
							<NavItem>
								<Link className="nav-link" to="/">All Posts ({this.props.posts.length})</Link>
							</NavItem>
							<NavItem> 
								<Link className="nav-link" to="/new-post">New Post</Link> 
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/categories">Categories ({this.props.categories.length})</Link> 
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/new-category">New Category</Link> 
							</NavItem>
							
						</Nav> 

					</Collapse> 
				</Navbar> 
			</div> 

		);
	}
}

const mapStateToProps = state => ({
	posts: state.posts.items,
});

export default connect(mapStateToProps)(Header);