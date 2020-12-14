import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import React, { Component } from 'react'
import styles from "../modules/UserListComponent.module.css"

/**
  * @desc class Userlistcomponent - Holds a state with items that is fetched from api softhouse users.
  * maps through items in state and renders all to a list of names shown in dashboard.
*/
export default class UserListComponent extends Component {

    constructor(props) {
        super(props)
            this.state = {
            items: []
        }
    }

/**
  * @desc componentDidMopunt - fetches api from softhouse, converts response to json and sets state with result.
*/
    componentDidMount() {
        fetch('https://api.softhouse.rocks/users')
            .then(res => res.json())
            .then(result => {
            this.setState({
                items: result
            });
        });
    }

    render() {
        const { items } = this.state;
        return (
            <Fragment>
                <h2>List of good doggos</h2>
                    <ul> 
                        {items.map(item => (
                            <li key={item.id}>
                                {/* directs the user to usercscreen component when clicking on a user */}
                                <Link className={styles.Link} to={`user/${item.id}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
            </Fragment>
        );
    }
}

