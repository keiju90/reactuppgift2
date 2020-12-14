import React, { Component } from 'react';
// adds the ability to get history as props from router 
import { withRouter } from 'react-router-dom';
import styles from "../modules/LoginFormComponent.module.css"
import PropTypes from 'prop-types';

/**
  * @desc class LoginFormComponent - 
  * Handles the loginform. 
  * Has a state with name and loginerror to display an error text in case there is not 10 characters.
*/
class LoginFormComponent extends Component {

    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            loginError: ""
        }
    }

/**
  * @desc handleChange - sets state name to what is written in inputfield.
*/
    handleChange = event => {
        this.setState({name:event.target.value})
    }

/**
  * @desc navigateToDashboard - when fired it navigates to the dashboard with history props. 
*/
    navigateToDashboard = () => {
        this.props.history.push("/dashboard")
    }

/**
  * @desc validate - validates that the login-name is at least 10 characters long. 
  * if the state.name.length is less than 9 characters, "loginerror" state text updates. 
  * if state.name.length is 10 characters or more, navigateToDashboard function fires.
*/
    validate = () => {
        let loginError = "";
        if (this.state.name.length < 9) {
            loginError= "You must have at least 10 characters to login!"
        }

        if(loginError){
            this.setState({ loginError});
            return false;
        }
        else {
            this.navigateToDashboard();
        }
    }

/**
  * @desc handleSubmit -  
  * e.preventdefault to stop the page from loading.
  * fires the validate function.
*/
    handleSubmit = (event) => {
        event.preventDefault();
        this.validate();
        };

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h1 className={styles.welcome}>Welcome to Doggos</h1>
                        <h3>Please login below to continue..</h3>
                            <input 
                                name="name" 
                                value={this.state.name} 
                                onChange={this.handleChange}
                                placeholder= "Write login-name here">
                            </input>

                            <div>{this.state.loginError}</div>

                            <button type="submit">Login</button> 
                    </form>
                </div>
            )
        }
    }
    
    export default withRouter(LoginFormComponent);

