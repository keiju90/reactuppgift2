import React, { Component } from 'react';
import WrapperComp from './WrapperComp';
import LoginFormComponent from './LoginFormComponent'

/**
  * @desc class LoginComp - 
  * displays LoginFormComponent.
*/
export default class LoginComp extends Component {
    render() {
        return (
                <div className="background">
                    <WrapperComp>
                        <LoginFormComponent>
                        </LoginFormComponent>
                    </WrapperComp>
            </div>
        )
    }
}
