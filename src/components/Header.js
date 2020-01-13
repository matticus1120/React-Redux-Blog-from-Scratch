import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Container,
	NavItem,
	NavLink
} from 'reactstrap';

export default class Header extends React.Component{
 render(){
  return(
    <div> 
        <Navbar color="light" light expand="md" className="mb-5">   
          <NavbarBrand href="/">Redux Blog</NavbarBrand> 
        
	      <Collapse isOpen={true} navbar> 
	        <Nav className="ml-auto" navbar>
	          <NavItem> 
	            <NavLink href="/new-post">New Post</NavLink> 
	           </NavItem>
	           <NavItem>
	            <NavLink href="/categories">Categories</NavLink> 
	            </NavItem>
	           <NavItem>
	            <NavLink href="/new-category">New Category</NavLink> 
	            </NavItem>
	        </Nav> 
	      </Collapse> 
	    </Navbar> 
      </div> 

  );
 }
}