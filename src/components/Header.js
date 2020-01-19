import React from 'react';
import { NavLink } from 'react-router-dom'

import {
	Collapse,
	Navbar,
	Nav,
	NavItem,
} from 'reactstrap';

class Header extends React.Component {

	render(){

		return(
			<div className="header"> 
				<Navbar color="light" light expand="md" className="mb-5">   
					<NavLink exact className="navbar-brand" to="/">Redux Blog</NavLink>

					<Collapse isOpen={true} navbar> 
						
						<Nav className="ml-auto" navbar>
							
							<NavItem>
								<NavLink exact className="nav-link" activeClassName="active" to="/">All Posts ({this.props.posts.length})</NavLink>
							</NavItem>
							<NavItem> 
								<NavLink className="nav-link" activeClassName="active" to="/new-post">New Post</NavLink> 
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" activeClassName="active" to="/categories">Categories ({this.props.categories.length})</NavLink> 
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" activeClassName="active" to="/new-category">New Category</NavLink> 
							</NavItem>
							
						</Nav> 

					</Collapse> 
				</Navbar> 
			</div> 

		);
	}
}

export default Header;








