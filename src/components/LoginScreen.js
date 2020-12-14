import React, { Component } from 'react';
import LoginComp from './LoginComp';
import PropTypes from 'prop-types';

/**
  * @desc class LoginScreen -  displays the Logincomponent.
*/
export default class LoginScreen extends Component {

    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object
    }

    render() {
        return (
            <div>
                <LoginComp></LoginComp>
            </div>

        )
    }
}
