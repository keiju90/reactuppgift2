import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';

/**
  * @desc class NavbarComponent - 
  * handles the navigation links and text.
*/
class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar">
                <NavLink to="/login" activeClassName="my-class">Login</NavLink> 
                <NavLink to="/dashboard" activeClassName="my-class" >Dashboard</NavLink>
                <NavLink to="/user" activeClassName="my-class">User</NavLink>
            </nav>
        );
    }
}

export default NavbarComponent;
