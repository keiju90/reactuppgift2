import React, { Component } from 'react';
import DashboardComp from './DashboardComp';
import  "../App.css";
import PropTypes from 'prop-types';

/**
  * @desc class DashboardScreen - displays the DashBoardComponent.
*/
class DashboardScreen extends Component {

    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object
    }
    
    render() {
        return (
        <div>
            <DashboardComp></DashboardComp>
        </div>
        )
    }
}
export default DashboardScreen;



