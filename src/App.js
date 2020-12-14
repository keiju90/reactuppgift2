import React  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserScreen from "./components/UserScreen";
import LoginScreen from "./components/LoginScreen";
import DashboardScreen from "./components/DashboardScreen";
import NavbarComponent from './components/NavbarComponent';

/**
  * @desc function App - handles the routes for navigation.
*/
export default function App () {
  return (
    <Router>
      <NavbarComponent/>
                        {/* <nav className="navbar">
                            <NavLink to="/" activeClassName="my-class">Login</NavLink> 
                            <NavLink to="/dashboard" activeClassName="my-class" >Dashboard</NavLink>
                            <NavLink to="/user" activeClassName="my-class">User</NavLink>
                        </nav> */}

                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/dashboard" component={DashboardScreen}/>
                        <Route exact path="/user" component={UserScreen} />
                        <Route path="/user/:id" component={UserScreen} />
                    
    </Router>
  )
}






