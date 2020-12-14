import React, { Component } from 'react';
import WrapperComp from './WrapperComp';
import UserListComponent from './UserListComponent';
import AddUserComponent from './AddUserComponent';

/**
  * @desc class DashboardComp - displays UserListComponent and AddUserComponent in Dashboard.
*/
class DashboardComp extends Component {
    render() {
        return (
        <div className="background">
            <WrapperComp>
                    <UserListComponent>
                    </UserListComponent>
            </WrapperComp>

            <WrapperComp>
                    <AddUserComponent>
                    </AddUserComponent>
            </WrapperComp>
        </div> 
        )
    }
}
export default DashboardComp;


