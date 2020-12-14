import React, { Component } from 'react'
import WrapperComp from './WrapperComp'
import styles from "../modules/UserComp.module.css"
import PropTypes from 'prop-types';

/**
  * @desc class UserComp - 
  * Displays one user (in "user" in navigation) when you click on a name in UserListComponent.
  * Displays: name, username, email and adress.
  * Displays and gets a placeholder-image of dogs.
  * Displays an errormessage If no user is selected.
  * takes data as props from userscreen component.
  * 
  * props used:
  * data.id,
  * data.name, 
  * data.username, 
  * data.email, 
  * data.address.city,
  * data.address.street,
* data.address.suite
*/
export default class UserComp extends Component {
    static propTypes = {
    dataToUserComp: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    };

    render() {
        return (   
            <div className="background">
                {/* if user is shown -> show images and text */}
                {this.props.dataToUserComp.id > 0 && <img className={styles.dogImgBottom} alt="doggo" src={"https://placedog.net/332/332?random"}/> }
                {this.props.dataToUserComp.id > 0 && <img className={styles.dogImgTop} alt="doggo" src={"https://placedog.net/332/332?random"}/>}
                {this.props.dataToUserComp.id > 0 && <p className={styles.dogtxt}>Dogs are Pawsome! xoxo</p>}

                    <div className={styles.card}>
                        <div className={styles.container}>
                            <h2 className={styles.name}>{this.props.dataToUserComp.name}</h2>
                            <p>{this.props.dataToUserComp.username}</p>
                            <p>{this.props.dataToUserComp.email}</p>

                            {this.props.dataToUserComp.id > 0 && <WrapperComp>
                                <h3>Address</h3>
                                    <p>City: {this.props.dataToUserComp.address && this.props.dataToUserComp.address.city}</p>
                                    <p>Street: {this.props.dataToUserComp.address && this.props.dataToUserComp.address.street}</p>
                                    <p>Suite: {this.props.dataToUserComp.address && this.props.dataToUserComp.address.suite}</p>
                            </WrapperComp>} 

                        {/* // if no user is selected */}
                        {!this.props.dataToUserComp.id > 0 && <h1 className={styles.noUserSelectedText}>Sorry, no (user) dog selected!</h1>}
                        </div>
                    </div>
            </div>
        )
    }
};
